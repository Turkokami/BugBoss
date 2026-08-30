# DNS cutover — bugbosswi.com

Read before touching DNS. Verified by live lookup, August 2026.

## What is actually there now

| Thing | Value | Means |
|---|---|---|
| Nameservers | `ns57.domaincontrol.com`, `ns58.domaincontrol.com` | **GoDaddy** |
| SOA contact | `dns.jomax.net` | GoDaddy (Jomax was their original name) |
| `www` CNAME | `s.multiscreensite.com` | **Duda** — the current site is built on Duda, not GoDaddy's builder |
| `www` A | `99.83.169.22`, `75.2.0.180` | AWS Global Accelerator, used by Duda |
| apex A | `35.172.94.1`, `100.24.208.97` | Duda's root-domain IPs |
| MX | `aspmx.l.google.com` + 4 alts | **Google Workspace** — this is office@bugbosswi.com |
| SPF | `v=spf1 include:dc-aa8e722993._spfm.bugbosswi.com ~all` | **Duda-managed SPF** (`dc-` = Duda) |
| TXT | 2 × `google-site-verification=...` | Two verified Search Console properties |

So: **registrar and DNS at GoDaddy, website on Duda, email on Google Workspace.**

## The three things that can go wrong

### 1. Killing the email — the biggest risk

The MX records are Google Workspace. If anyone "cleans out the old records" while
repointing the site, **office@bugbosswi.com stops receiving mail**, and it will not
be obvious immediately.

**Do not touch the MX records.** They have nothing to do with the website.

### 2. Breaking SPF when Duda is cancelled

The SPF record does not name Google directly. It delegates to
`dc-aa8e722993._spfm.bugbosswi.com`, which is a **Duda-managed** flattening record.

If the Duda subscription is cancelled, that include can stop resolving, SPF starts
failing, and Google Workspace mail begins landing in spam — days or weeks after the
website switch, with no obvious connection to it.

**Fix before cancelling Duda.** Replace the SPF with a direct Google include:

```
v=spf1 include:_spf.google.com ~all
```

Confirm nothing else legitimately sends as @bugbosswi.com first — GoHighLevel may,
and if so it needs adding to the same record. One SPF record per domain, never two.

### 3. Losing Search Console by removing the verification TXT records

Both `google-site-verification` TXT records must stay, or Search Console access is
lost — including the URL export used to build the redirect map, and the ability to
watch for 404s after the switch, which is exactly when it matters most.

## Recommended cutover

**Keep the GoDaddy nameservers. Change only the website records.**

Do *not* delegate the domain to Vercel's nameservers. Delegation moves all DNS,
which means MX, SPF and the verification TXT records have to be recreated by hand —
that is where email outages come from. Changing two records at GoDaddy touches
nothing else.

1. In Vercel, add both `bugbosswi.com` and `www.bugbosswi.com` to the project.
   Vercel will show the exact record values to use — take them from Vercel rather
   than from this document, since their IPs change.
2. In GoDaddy DNS, change **only**:
   - the apex `A` records (currently the two Duda IPs) → Vercel's value
   - the `www` `CNAME` (currently `s.multiscreensite.com`) → Vercel's value
3. Leave MX, SPF, and both verification TXT records exactly as they are.
4. Set the canonical host to **`www`**, matching the current sitemap and the
   existing indexed URLs, and redirect apex → www in Vercel. Changing canonical
   host at the same time as changing platform doubles the redirect churn for no
   gain; if it should move to apex later, do it as its own change.
5. Watch Search Console → Pages for 404s for a couple of weeks. The 165 redirects
   in `vercel.json` cover every URL in the sitemap plus 12 indexed orphans, but the
   sitemap is a snapshot and something will have been missed.

## Before you cancel Duda

Once DNS points at Vercel the old site is unreachable, and cancelling the account
usually deletes the content. Get these off it first if they are wanted:

- Any images or photography that only exist on Duda
- The blog post bodies (24 posts) if any are worth reusing
- Any form submissions or leads held in Duda rather than in GoHighLevel

## Rollback

Cutting back is just reverting the two records to the Duda values in the table at
the top of this file. Keep the Duda subscription active for a couple of weeks after
the switch so that stays possible.

TTLs are worth lowering to 600s a day before the switch so a rollback takes minutes
rather than hours.
