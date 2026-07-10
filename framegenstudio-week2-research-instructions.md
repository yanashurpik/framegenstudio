# Week 2 — Detailed Instructions: Keyword & Question Research

Companion to `framegenstudio-seo-geo-30-day-plan.md`, items 6–9.

---

## 6. Google Keyword Planner setup

**A. Get in without creating a campaign**
1. Go to ads.google.com and sign in (or create a Google account first if needed).
2. When prompted to set a goal / create a campaign, look for a small **"Switch to Expert Mode"** or **"Create an account without a campaign"** link — Google buries this under the guided flow because it wants you to launch ads. Keep clicking "Skip" rather than filling in campaign details.
3. Complete billing setup only if forced to — you will not be charged unless you actually launch a campaign later.
4. Once in the dashboard, click the **wrench/Tools icon** (top right) → under **Planning** → **Keyword Planner**.

**B. Build your seed list**
Don't stop at the 5 seeds from the plan — feed Keyword Planner a broader mix so it surfaces adjacent terms you wouldn't think of. Organize seeds into four buckets before you search:

| Bucket | Examples |
|---|---|
| Core category | AI UGC ads, AI UGC agency, AI UGC studio, UGC video ads |
| Comparison / alternative | UGC vs influencer marketing, cheap alternative to influencer ads, AI generated UGC ads |
| Platform-specific | TikTok ads agency, Meta ads creative agency, Shopify video ads |
| Intent / buyer language | AI ad agency pricing, how much does UGC video cost, ecommerce video ad agency USA, DTC brand advertising agency |

Run each bucket through **"Discover new keywords"** separately — mixing them dilutes the suggestions Google returns.

**C. Set targeting before reading results**
- Location: set to **United States** explicitly (your account's home market is Poland, so this won't default correctly).
- Language: English.
- Keep this in mind every time you start a new search — it resets sometimes.

**D. Read and export**
- For each keyword note: Avg. monthly searches (shown as a range unless you use the CPC workaround below), Competition, Top-of-page bid range.
- Click **"Download keyword ideas"** to get a CSV/Google Sheets export — you'll need this raw for step 9.
- Optional precision trick: add your keywords to a Plan, go to the **Forecast** tab, and set a deliberately high max CPC (e.g. $50–100). The forecast table then reveals tighter click/impression numbers than the vague "1K–10K" range shown by default — useful for prioritizing between two close keywords.

---

## 7. USA location research

The goal here isn't local-SEO landing pages — it's finding out whether your buyer language clusters regionally, so you know if any state-specific phrasing or state-specific outreach angle is worth using.

1. In Keyword Planner, add your top 15–20 keywords to a **Plan**.
2. Open the **Forecast** tab. Under location settings, instead of just "United States," add specific states or metro areas — California, New York, Texas, Florida, and any city known for DTC/e-commerce concentration (Austin, LA, NYC, Miami).
3. The Forecast tab's location breakdown table shows relative click/impression share by the locations you've added — this is where regional patterns show up (e.g., "Shopify ad agency" over-indexing in specific states).
4. **Cross-check with reality**: pull the billing or shipping states of your actual current clients and leads (from Stripe, your CRM, or invoices) and see whether keyword interest correlates with where your paying clients already are.
5. Supplement with **Google Trends** (trends.google.com, no login needed) — use "Compare by region" for your top 3–4 terms as a free second data point.
6. **Output**: a short list of 2–3 priority states/cities if a real pattern emerges, or a decision to treat the whole US market uniformly if nothing stands out. Don't force a regional angle that isn't there.

---

## 8. Build the customer-question list

**Sources to mine** (in priority order — real questions beat guessed ones):
1. Instagram DMs to @frame.gen.studio — last 60 days.
2. Instagram comments on your posts/reels.
3. Sales call notes or recordings — anything a prospect asked before booking.
4. Any free-text fields on your booking/contact form.
5. Supplementary: search Reddit (r/shopify, r/ecommerce, r/FacebookAds) and competitor comment sections for questions the broader market asks about UGC/AI ads — this fills gaps your own DMs haven't surfaced yet.

**Process:**
1. Create a simple running sheet: `Question | Source | Date | Cluster`.
2. Copy every question verbatim — don't paraphrase yet, the exact phrasing is what GEO content should mirror.
3. Group into clusters. Based on what's already on your FAQ page, you likely have: pricing, turnaround time, quality/realism, usage rights on ad accounts, comparison to influencers, models/tools used, revisions policy. Watch for clusters *not* yet covered anywhere on the site.
4. Rank by frequency within each cluster — the most-repeated question becomes the header; the rest become supporting content underneath it.
5. Target 15–20 total questions, roughly 3–5 per cluster, prioritizing clusters with no existing content over ones your FAQ already answers well.

---

## 9. Map keywords + questions to content

Build one master sheet combining the outputs of steps 6–8:

| Keyword / Question | Intent | Funnel stage | Target page | Format | Priority |
|---|---|---|---|---|---|
| "what is AI UGC" | Awareness | Top | Resources article | New H2 or article | High |
| "AI UGC ads cost" | High-intent | Bottom | FAQ / homepage pricing section | Existing, expand | High |
| "AI UGC vs influencer marketing" | Comparison | Middle | New comparison page or FAQ entry | New | Medium |

**Sorting rule:**
- **Awareness-stage / educational** (what is, how does, is AI UGC real) → GEO bait. These are the ones AI engines are most likely to cite — route them to resource articles, written in direct-answer format.
- **High-intent** (cost, pricing, vs. influencer, turnaround) → conversion-focused. Route these to the homepage, FAQ, or a dedicated comparison page that links straight to booking.

**Before finalizing, check for cannibalization**: each keyword/question cluster should map to exactly one primary page. If two pages could reasonably answer the same question, pick one as canonical and have the other link to it rather than duplicating the content.

**Deliverable for end of week 2**: the completed mapping sheet becomes the content brief for Week 3 (item 10 in the main plan — converting resources into articles, publishing the FAQ additions).
