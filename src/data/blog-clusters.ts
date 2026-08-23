// ---------------------------------------------------------------------------
// BLOG CLUSTERS — Master Plan §3.4: a blog post is not a standalone article,
// it is a supporting node that feeds one service spoke. Every post declares a
// cluster; the cluster names the spoke it feeds and the URL it links up to.
//
// This is what turns the blog from a pile of posts into topical depth the
// spoke can actually inherit. The spoke pages render their own cluster's posts,
// and the blog index groups by cluster rather than listing by date.
// ---------------------------------------------------------------------------

export interface BlogCluster {
  /** Cluster key, used as the `cluster` value in a post's frontmatter. */
  slug: string;
  /** Heading shown above this group on /blog/. */
  label: string;
  /** The service spoke this cluster feeds. */
  spokeUrl: string;
  /** Link text back to the spoke. */
  spokeLabel: string;
}

export const blogClusters: BlogCluster[] = [
  {
    slug: 'fall-invaders',
    label: 'Fall invaders & overwintering pests',
    spokeUrl: '/residential-pest-control/fall-invaders/',
    spokeLabel: 'Fall Invader Control',
  },
  {
    slug: 'rodent-control',
    label: 'Rodents',
    spokeUrl: '/residential-pest-control/rodent-control/',
    spokeLabel: 'Rodent Control',
  },
  {
    slug: 'ant-control',
    label: 'Ants & wood-destroying insects',
    spokeUrl: '/residential-pest-control/ant-control/',
    spokeLabel: 'Ant Control',
  },
  {
    slug: 'stinging-insects',
    label: 'Wasps, hornets & stinging insects',
    spokeUrl: '/residential-pest-control/stinging-insects/',
    spokeLabel: 'Stinging Insect Removal',
  },
  {
    slug: 'mosquito-tick',
    label: 'Mosquitoes & ticks',
    spokeUrl: '/residential-pest-control/mosquito-tick/',
    spokeLabel: 'Mosquito & Tick Control',
  },
  {
    slug: 'bed-bug-treatment',
    label: 'Bed bugs',
    spokeUrl: '/residential-pest-control/bed-bug-treatment/',
    spokeLabel: 'Bed Bug Treatment',
  },
  {
    slug: 'cockroach-control',
    label: 'Cockroaches',
    spokeUrl: '/residential-pest-control/cockroach-control/',
    spokeLabel: 'Cockroach Control',
  },
  {
    slug: 'wildlife-removal',
    label: 'Wildlife',
    spokeUrl: '/wildlife-removal/',
    spokeLabel: 'Wildlife Removal & Exclusion',
  },
  {
    slug: 'general-pest-control',
    label: 'Seasonal & whole-property',
    spokeUrl: '/residential-pest-control/general-pest-control/',
    spokeLabel: 'General Pest Control',
  },
];

export const getBlogCluster = (slug: string) => blogClusters.find((c) => c.slug === slug);
