# FrameGen Studio — 30-Day SEO + GEO Action Plan

Starting point (confirmed by auditing the live site code, July 2026):
- `index.html` has a bare `<title>FrameGen Studio</title>` — no meta description, no schema markup.
- No `robots.txt` or `sitemap.xml` anywhere in the repo.
- `/resources` page exists but content is PDF downloads (prompt libraries, playbooks) — not crawlable HTML text.
- Instagram (`@frame.gen.studio`) is linked via DM button only, not referenced as an entity anywhere in page text/schema.
- No Google Business Profile detected.

SEO and GEO share the same foundation (a crawlable, well-structured site), so weeks 1–2 fix that once for both. Weeks 3–4 split into content and authority-building.

---

## Week 1 — Technical foundation (do this first, it unlocks everything else)

1. **Allow AI crawlers explicitly.** Create a `robots.txt` that allows: `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`, `Amazonbot`, `Applebot-Extended`. Right now there's no file at all, which usually defaults to "allowed," but an explicit allow removes ambiguity and signals intent.
2. **Add real meta tags** to `index.html` and every subpage: unique `<title>`, `<meta name="description">`, Open Graph tags. Title/description should describe what you do in plain language a customer or an AI would restate ("AI UGC video ads for DTC brands — 95% cheaper than influencers").
3. **Build and submit an XML sitemap.** Set up Google Search Console and Bing Webmaster Tools, verify the domain, submit the sitemap.
4. **Add schema markup**: `Organization` (with `sameAs` links to Instagram and any other profiles), `FAQPage` for any Q&A content, `Person`/author schema if you publish under your name.
5. **Set up or claim your Google Business Profile** as a professional service. Even as a remote/worldwide agency, GBP helps local-intent USA searches ("AI UGC agency near me" / "AI video ad agency USA") and feeds Google's AI Overviews.

## Week 2 — Research (SEO keywords + GEO questions, done together)

6. **Google Keyword Planner setup**: Ads account → skip campaign creation → Tools → Keyword Planner. Seed with: "AI UGC ads," "UGC video ads Shopify," "influencer marketing alternative," "creator-style ads for DTC," "AI ad agency USA."
7. **USA location research**: since you're a remote agency serving US-based DTC brands, check keyword volume by state/city in Keyword Planner's location targeting (not for local SEO pages, but to see if any regional term patterns exist — e.g. "Shopify ad agency" often clusters around US e-commerce hubs). Cross-check against where your current clients/leads are based.
8. **Build a customer-question list.** Pull actual questions from Instagram DMs, sales calls, and comments — the specific things DTC founders ask before booking. GEO content should answer these verbatim as headers ("How much does AI UGC cost vs. an influencer?" not "Pricing"). Aim for 15–20 real questions.
9. **Map keywords + questions to content**: sort into awareness-stage (educational, GEO bait) vs. high-intent (pricing/comparison, conversion-focused).

## Week 3 — Content production

10. **Convert your PDF resources into HTML pages.** The prompt libraries and playbooks in `/resources` are locked in PDFs — neither Google nor AI crawlers can easily parse and cite that content. Rebuild the highest-value 2–3 as real article pages (keep the PDF as a bonus download).
11. **Publish a FAQ / "questions customers ask" page** using the list from step 8 — direct-answer format, question in the header, answer in the first 1–2 sentences.
12. **Add author/credential info** — a short bio for whoever writes the content, tied to real experience. Both SEO (E-E-A-T) and GEO (author authority) reward this.
13. **Cross-link everything**: site → Instagram, Instagram bio → site, resources page → FAQ page, FAQ → booking/contact.

## Week 4 — Authority, distribution, and measurement

14. **Register on directories/platforms AI models pull from**: Clutch, G2, or similar agency directories if relevant to your category — third-party mentions (even unlinked) carry weight with AI engines.
15. **Get 2–3 backlinks or mentions** — guest post, podcast appearance, or a partner/client case study that links back.
16. **Launch (or finalize scope for) the free tool idea** — the UGC-cost-vs-influencer calculator. If it's not ready to launch this month, at minimum draft the spec so it's ready to build next.
17. **Set up measurement**:
    - SEO: Search Console performance report (impressions/clicks by query).
    - GEO: manually ask ChatGPT, Perplexity, and Google AI Overviews your target questions once a month and log whether FrameGen gets cited — there's no mature analytics tool for this yet, so a simple spreadsheet works.

---

## Notes
- Weeks 1–2 are foundational and should not slip — content published on top of an uncrawlable site wastes the work.
- Revisit and refresh published content quarterly; AI citation drops off sharply on anything older than ~3 months.
- Ahrefs and Similarweb connectors are available in this workspace but need authorization (via connector settings) — once connected, they can automate competitor keyword gaps and backlink tracking instead of manual research.
