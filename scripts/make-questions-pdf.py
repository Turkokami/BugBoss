#!/usr/bin/env python3
"""Build the BugBoss launch questionnaire PDF for Brian.

    pip install reportlab
    python3 scripts/make-questions-pdf.py

Regenerates BugBoss-Launch-Questions-for-Brian.pdf in the repo root. Kept in
the repo so the questions can be edited and reissued as answers come back —
strike items once they are resolved rather than hand-editing a binary.

Each question maps to something genuinely unresolved in the codebase: a TODO in
src/data/business.ts, placeholder copy on /privacy/ and /terms/, the undefined
guarantee term on /our-guarantee/, or a page type the Master Plan calls for
that does not exist yet. Anything marked `blocker=True` is a launch blocker.
"""

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether, HRFlowable, CondPageBreak,
)

OUT = "/home/user/BugBoss/BugBoss-Launch-Questions-for-Brian.pdf"

NEON = colors.HexColor("#55D400")
INK = colors.HexColor("#111111")
MUTED = colors.HexColor("#5B6660")
LINE = colors.HexColor("#DDE5DE")
SOFT = colors.HexColor("#F3F8F1")
BLOCKER = colors.HexColor("#B3261E")

ss = getSampleStyleSheet()

S = {
    "title": ParagraphStyle("title", parent=ss["Title"], fontName="Helvetica-Bold",
                            fontSize=24, leading=27, textColor=INK, alignment=TA_LEFT,
                            spaceAfter=4),
    "sub": ParagraphStyle("sub", fontName="Helvetica", fontSize=10.5, leading=15,
                          textColor=MUTED, spaceAfter=14),
    "intro": ParagraphStyle("intro", fontName="Helvetica", fontSize=10, leading=15,
                            textColor=INK, spaceAfter=9),
    "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=13.5, leading=17,
                         textColor=INK, spaceBefore=2, spaceAfter=2),
    "sectnote": ParagraphStyle("sectnote", fontName="Helvetica-Oblique", fontSize=9,
                               leading=13, textColor=MUTED, spaceAfter=8),
    "q": ParagraphStyle("q", fontName="Helvetica-Bold", fontSize=10.5, leading=14.5,
                        textColor=INK, spaceAfter=2),
    "why": ParagraphStyle("why", fontName="Helvetica", fontSize=9, leading=13,
                          textColor=MUTED, spaceAfter=5),
    "ans": ParagraphStyle("ans", fontName="Helvetica", fontSize=9, leading=13,
                          textColor=colors.HexColor("#8A948E")),
    "foot": ParagraphStyle("foot", fontName="Helvetica", fontSize=8, leading=11,
                           textColor=MUTED),
}


def badge(text, bg, fg=colors.white):
    t = Table([[Paragraph(text,
                          ParagraphStyle("b", fontName="Helvetica-Bold", fontSize=7.5,
                                         leading=9, textColor=fg))]],
              colWidths=[1.82 * inch], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return t


def section(num, title, note):
    head = Table([[
        Paragraph(f'<font color="#55D400"><b>{num}</b></font>',
                  ParagraphStyle("n", fontName="Helvetica-Bold", fontSize=20,
                                 leading=22, textColor=NEON)),
        Paragraph(title, S["h2"]),
    ]], colWidths=[0.42 * inch, None])
    head.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
    ]))
    # Never leave a section heading stranded at the foot of a page with its
    # first question overleaf — break early if there is not room for both.
    return [CondPageBreak(2.8 * inch), Spacer(1, 12), head,
            HRFlowable(width="100%", thickness=1.6, color=NEON, spaceBefore=3, spaceAfter=5),
            Paragraph(note, S["sectnote"])]


def question(qtext, why, lines=2, blocker=False, answer_hint=None):
    """One question block: prompt, why it matters, and ruled space to write in."""
    bits = []
    label = "MUST HAVE BEFORE LAUNCH" if blocker else None
    if label:
        bits.append(badge(label, BLOCKER))
        bits.append(Spacer(1, 3))
    bits.append(Paragraph(qtext, S["q"]))
    if why:
        bits.append(Paragraph(why, S["why"]))
    if answer_hint:
        bits.append(Paragraph(f"<i>{answer_hint}</i>", S["ans"]))
        bits.append(Spacer(1, 2))
    for _ in range(lines):
        bits.append(HRFlowable(width="100%", thickness=0.6, color=LINE,
                               spaceBefore=22, spaceAfter=0, dash=None))
    bits.append(Spacer(1, 16))
    return KeepTogether(bits)


story = []

# ---------------------------------------------------------------- cover block
story.append(Paragraph("BugBoss The X-Terminator", S["sub"]))
story.append(Paragraph("Questions for Brian: what we need to finish the site", S["title"]))
story.append(HRFlowable(width="100%", thickness=3, color=NEON, spaceBefore=6, spaceAfter=12))

story.append(Paragraph(
    "The new site is built and passing its technical checks — 218 pages, a complete 55-entry "
    "Pest Library, full schema, and the quote form live on every page. What is left is "
    "information only you can supply.", S["intro"]))
story.append(Paragraph(
    "Everything marked <b>MUST HAVE BEFORE LAUNCH</b> is a genuine blocker: the page is built but "
    "currently carries a placeholder, a guess, or nothing at all. The rest makes the site "
    "measurably stronger and can follow after launch.", S["intro"]))
story.append(Paragraph(
    "Short answers are fine. Where a question asks for a number or a URL, just write it in — "
    "we handle the rest.", S["intro"]))

note = Table([[Paragraph(
    "<b>Fastest route:</b> answer sections 1 and 2 and we can launch. Sections 3 to 7 are the "
    "content that will pull ahead of every competitor in the area, and we can work through them "
    "over a few phone calls rather than in writing.",
    ParagraphStyle("cal", fontName="Helvetica", fontSize=9.5, leading=13.5, textColor=INK))]],
    colWidths=[6.7 * inch])
note.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), SOFT),
    ("LINEBEFORE", (0, 0), (0, -1), 3, NEON),
    ("LEFTPADDING", (0, 0), (-1, -1), 11), ("RIGHTPADDING", (0, 0), (-1, -1), 11),
    ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
]))
story.append(note)

# ------------------------------------------------------- 1. business details
story += section("1", "Business details we are currently guessing",
                 "These five appear on all 218 pages and in the data Google reads. Wrong values "
                 "here are wrong everywhere at once.")

story.append(question(
    "What are your exact office hours?",
    "The site currently says “24-hour emergency line; office Mon–Fri 8am–5pm.” We wrote that as a "
    "best guess. It must match your Google Business Profile character for character, or Google "
    "treats them as two different businesses.",
    lines=2, blocker=True,
    answer_hint="Office hours, and separately: is the emergency line genuinely 24/7?"))

story.append(question(
    "What is the 920 number that appears in the quote form?",
    "Your GoHighLevel form tells people to “Text HELP to +1 920-502-7990,” but every other place "
    "on the site publishes 866-BUGBOSS (866-284-2677). Is the 920 line a real second number we "
    "should publish, an SMS-only compliance line, or something to change in the form?",
    lines=2, blocker=True))

story.append(question(
    "Can you send the links to your Google Business Profile and Yelp listings?",
    "We are linking to search results rather than your actual profiles, because we could not "
    "confirm the real URLs. Open each listing, copy the address bar, paste it below.",
    lines=3, blocker=True,
    answer_hint="Google Maps URL, then Yelp URL."))

story.append(question(
    "Is “BugBoss The X-Terminator” the exact registered legal name?",
    "It appears in the copyright line, the legal pages, and the structured data Google reads. We "
    "also list DBA “The BugBoss” and business registration #535382 — please confirm both.",
    lines=2, blocker=True))

story.append(question(
    "Is your service area right?",
    "We are claiming Waupaca, Shawano, Outagamie, Waushara, Oconto and Langlade counties, with "
    "deep coverage of the rural corridor around Clintonville. Any town on the site you do not "
    "actually travel to? Anywhere you do serve that we have missed?",
    lines=3, blocker=True))

# ------------------------------------------------------------- 2. legal pages
story += section("2", "Legal pages and the guarantee",
                 "Two pages are live with placeholder text on them today. They need real content "
                 "before launch, and the guarantee needs its terms pinned down.")

story.append(question(
    "What exactly does your guarantee cover, and for how long?",
    "The guarantee page currently promises “if a covered pest returns between scheduled visits, "
    "we come back at no additional charge” — but it never names the covered pests or the time "
    "period. We deliberately avoided the words “lifetime warranty.” We need: which pests are "
    "covered, what the window is (30 days? between services? the season?), and what voids it.",
    lines=4, blocker=True))

story.append(question(
    "Do you have a privacy policy and terms of service, or should we draft them?",
    "Both pages exist and both say “Placeholder — replace before launch.” If you have language "
    "from your old site or your insurer, send it. Otherwise we can draft a starting point for "
    "your review — but we are not lawyers and you should have someone check it.",
    lines=2, blocker=True))

story.append(question(
    "Who is your insurer, and what are the coverage limits?",
    "We say “licensed and insured” throughout. Commercial clients — restaurants, food processing, "
    "schools, healthcare — routinely ask for a certificate of insurance before they will book. "
    "Being able to state this plainly wins those jobs.",
    lines=2))

# ---------------------------------------------------------------- 3. photos
story += section("3", "Photos",
                 "Nine real photos are already on the site and they are a genuine asset — no "
                 "stock imagery anywhere. A few additions would go a long way.")

story.append(question(
    "Can we get a proper headshot of you?",
    "Your photo now appears on all 55 Pest Library pages in the expert box next to your applicator "
    "licence number. The current one is a field photo and does the job, but a clean portrait would "
    "carry that credibility better.",
    lines=1))

story.append(question(
    "Do you have before-and-after photos from real jobs?",
    "Bat exclusion, a sealed rodent entry point, a hornet nest removal, a cleaned-up attic. These "
    "are the single most persuasive images a pest company can show, and almost none of your "
    "competitors have them.",
    lines=2))

# ------------------------------------------------------------ 4. case studies
story += section("4", "Case studies — the biggest single opportunity",
                 "This is the highest-value item on the list and the one most competitors never "
                 "build. A gallery is not a case study.")

story.append(question(
    "Can you walk us through five or six memorable jobs?",
    "The format that works is: what the pest was, what kind of property, which town, what you "
    "actually did, and how it turned out. Each one becomes a page that works as a local page, a "
    "service page and a proof point at the same time — and it is the format AI search results "
    "quote most readily, because it contains a specific verifiable claim.",
    lines=5))

story.append(question(
    "Which jobs are you proudest of, or which do you tell people about?",
    "The bat colony nobody else would touch, the restaurant that passed inspection after failing, "
    "the farmhouse with a decade of cluster flies. Those stories are the ones worth writing up. "
    "This is easier on a phone call than in writing — just note the jobs here and we will call.",
    lines=3))

# ------------------------------------------------------- 5. pricing/financing
story += section("5", "Pricing and payment",
                 "Two things visitors look for that the site cannot currently answer.")

story.append(question(
    "Can we publish starting prices or typical ranges?",
    "Every service page has a natural place for “what it costs” and every one is currently silent. "
    "You do not have to publish a fixed price list — “most single-family homes start around $X” or "
    "“inspections are free” is enough, and it filters out the calls that were never going to book.",
    lines=3))

story.append(question(
    "Do you offer financing or payment plans?",
    "For larger wildlife exclusion and bat jobs this can be the difference between booking and not. "
    "If you offer it, or would consider it, we can build a financing page — a cluster no competitor "
    "in your market has built.",
    lines=2))

story.append(question(
    "What payment methods do you take?",
    "Card, check, cash, invoicing for commercial accounts. Small detail, asked constantly.",
    lines=1))

# ------------------------------------------------------------- 6. commercial
story += section("6", "Commercial work",
                 "Sixteen industry pages are built and written to the relevant compliance "
                 "standards. Confirming a few things makes them credible rather than theoretical.")

story.append(question(
    "Which of the 16 commercial industries do you genuinely serve?",
    "Restaurants, food processing, grocery, dairy, manufacturing, warehousing, offices, hotels, "
    "retail, property management, schools, healthcare and senior living, agricultural, "
    "grain and feed, veterinary and kennels, museums. Any you would turn down, or are not "
    "equipped for, we should remove rather than claim.",
    lines=3, blocker=True))

story.append(question(
    "Do you provide documentation and service logs for audits?",
    "Food processing and healthcare clients need inspection-ready records. The pages currently say "
    "you deliver documented service. Confirm that is accurate, and tell us what you actually "
    "provide.",
    lines=2))

story.append(question(
    "Any commercial clients who would give a testimonial or let us name them?",
    "A named local business carries far more weight than an anonymous review, especially for "
    "winning other commercial work.",
    lines=2))

# --------------------------------------------------------------- 7. ongoing
story += section("7", "Ongoing — the one number that needs to move",
                 "Everything technical is handled. Reviews are the one area where the site cannot "
                 "help you on its own.")

story.append(question(
    "How are you currently asking customers for Google reviews?",
    "You have 95 reviews at 4.9 stars, which beats every rural competitor — the nearest has 17. "
    "Reviews are the weakest of the eight things we score the site on, and the only one the build "
    "cannot fix. A simple routine at the end of each job is what moves it.",
    lines=3))

story.append(question(
    "Would you be willing to record short phone videos on jobs?",
    "Thirty seconds of you pointing at a wasp nest or a sealed entry point, filmed on your phone. "
    "It feeds TikTok and YouTube, and video carries real weight in search. You already have the "
    "TikTok account.",
    lines=2))

story.append(question(
    "Anything about the business we have got wrong, or missed?",
    "You founded BugBoss with Amber in April 2021, you hold Wisconsin Commercial Applicator "
    "certification #103689 in aquatic/mosquito and structural, and you do not lock people into "
    "contracts. If any of that is off, or there is something we should be saying and are not, "
    "this is the place.",
    lines=4))

# ------------------------------------------------------------------- closing
story.append(Spacer(1, 6))
close = Table([[Paragraph(
    "<b>Send answers however is easiest</b> — reply by email, write on this and photograph it, or "
    "book a call and we will fill it in while we talk. Sections 1 and 2 unblock launch; everything "
    "else can follow.",
    ParagraphStyle("cl", fontName="Helvetica", fontSize=9.5, leading=13.5, textColor=INK))]],
    colWidths=[6.7 * inch])
close.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), SOFT),
    ("LINEBEFORE", (0, 0), (0, -1), 3, NEON),
    ("LEFTPADDING", (0, 0), (-1, -1), 11), ("RIGHTPADDING", (0, 0), (-1, -1), 11),
    ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
]))
story.append(close)


# ------------------------------------------------------------ page furniture
def decorate(canv, doc):
    canv.saveState()
    w, h = LETTER
    # top rule
    canv.setStrokeColor(NEON)
    canv.setLineWidth(4)
    canv.line(0, h - 0.28 * inch, w, h - 0.28 * inch)
    # footer
    canv.setFont("Helvetica", 8)
    canv.setFillColor(MUTED)
    canv.drawString(0.9 * inch, 0.55 * inch,
                    "BugBoss The X-Terminator  ·  600 S. Main St., Clintonville, WI 54929  ·  866-BUGBOSS")
    canv.drawRightString(w - 0.9 * inch, 0.55 * inch, f"Page {doc.page}")
    canv.setStrokeColor(LINE)
    canv.setLineWidth(0.6)
    canv.line(0.9 * inch, 0.75 * inch, w - 0.9 * inch, 0.75 * inch)
    canv.restoreState()


doc = BaseDocTemplate(OUT, pagesize=LETTER,
                      leftMargin=0.9 * inch, rightMargin=0.9 * inch,
                      topMargin=0.62 * inch, bottomMargin=0.95 * inch,
                      title="BugBoss — Questions for Brian to Finish the Website",
                      author="BugBoss website build")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="body")
doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=decorate)])
doc.build(story)
print("wrote", OUT)
