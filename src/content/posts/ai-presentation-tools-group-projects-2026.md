---
title: "Beautiful.ai lists two different Pro prices on two live pages"
description: "Before you split a group subscription for your next presentation: Beautiful.ai's own pricing pages disagree on the Pro price and on how many seats Team includes, Gamma publishes exactly what its PowerPoint export loses, and the presentation tool that reached 20 million users had its founders walk away to build something else entirely. Pricing a five-person group properly, and testing the handoff, is the whole lesson."
date: "2026-10-01"
section: "ai-for-students"
tags: ["presentations", "group-projects", "gamma", "beautiful-ai", "plus-ai", "slidesai", "productivity", "pricing"]
draft: false
---

If your group is about to split a subscription for the next presentation, spend four minutes on the vendor's own pricing page before you do. Beautiful.ai publishes two pricing pages, both live, both from the same company. The first lists Pro at $14.50 per month billed annually. The second lists Pro at $12 per month billed annually against $25 monthly, marked "Save 52%". They also disagree about Team seats: one page says Team includes three users, the other labels it "2-20 Seats", and the FAQ on both says two to twenty.

This is not a story about a company screwing up its pricing page. It is a story about what happens when you multiply a small ambiguity by five people and four months, and it is a better use of your time than reading another affiliate listicle.

## Price the group, not the person

Every one of these tools prices per seat, which is the wrong unit for a group project. The right unit is the group, for the length of one term.

| Tool | Plan | Price | What one unit buys |
| --- | --- | --- | --- |
| Beautiful.ai | Pro | $14.50/mo annual or $12/mo annual on a second page | Unlimited AI generation, 300+ Smart Slide layouts |
| Beautiful.ai | Teams | $40/user/mo annual or $50 monthly | Real-time co-editing, version control, locked slides, analytics, 100+ language translation |
| Beautiful.ai | Single presentation | $45, billed monthly | One deck, no subscription |
| Beautiful.ai | Enterprise | Custom | For organizations of 20+ |
| Plus AI | Basic | $10/user/mo annual or $15 monthly | 1,500 credits, Google Slides and PowerPoint creation |
| Plus AI | Pro | $20 or $25 | 3,000 credits |
| Plus AI | Team | $30 or $40 | 6,000 credits |
| SlidesAI | Basic | $0 | 12 presentations per year |
| SlidesAI | Pro | $10/mo or $120/year | 120 presentations per year |
| SlidesAI | Premium | $20.83/mo or $250/year | Unlimited presentations |
| Gamma | Free | $0 | Up to 10 slides per prompt, 50,000 initial-generation input tokens, export to PDF, PPTX, PNG, Google Slides |

Do the arithmetic and the structure of the decision becomes obvious. Beautiful.ai Teams at $40 per user per month is $200 a month for five people, which is $800 for a four-month term, for a tool where the group features are things you can get elsewhere. Plus AI Team at $30 per user is $150 a month, which is per-user pricing again. SlidesAI's free tier of 12 presentations a year is enough for most students, and its Pro tier at $10 a month or $120 a year is per user but cheap enough that the group argument mostly disappears. Beautiful.ai offers one year free with a valid `.edu` address, which is the cheapest verified path found for a student.

Gamma is the odd one out, and the reason is worth knowing: its subscription prices could not be verified from a first-party page because the pricing page renders client-side and returns 403 to automated requests. What Gamma's own help documentation does state is the shape of the tiers. Free allows up to 10 slides per prompt and 50,000 initial-generation input tokens. Plus allows 100 slides and 100,000 tokens, includes 1,000 monthly credits, and removes the Gamma badge, with Pro at 4,000 credits and Ultra at 20,000. Additional credits cost $6 for 1,500, and a Free workspace cannot purchase credits at all.

Credit limits matter less than seat limits for a group, with one exception: Free workspaces cannot buy credits, so a group that outgrows the Free tier has to upgrade rather than top up.

## What actually breaks: the handoff

A group presentation does not stay inside one tool. Someone builds it, someone else edits it, and then it gets shown to a tutor who expects a normal PowerPoint. That handoff is where these tools fail, and Gamma is unusually honest about it, because Gamma documents the losses on its own help pages rather than in a marketing page.

Gamma's exports render Present Mode rather than Edit Mode, so differences are expected before you even look at the file. From there:

| Behavior | What Gamma documents |
| --- | --- |
| Formats | PDF, PNG, and PPTX. Google Slides is reached only by uploading the PPTX |
| Word export | Not supported on any plan |
| Tables | Export as real editable tables by default, and the toggle can be turned off |
| Rounded table corners | PowerPoint does not support them, so exported tables come out square while other table styling survives |
| Gradients and frosted backgrounds | Fall back to approximations |
| AI-generated images | Export as PNG regardless of source format, which inflates file size |
| Theme fonts | Embedded into PDF and PPTX, but Google Slides ignores fonts embedded in an uploaded PPTX and substitutes its own |
| Font coverage | Only heading and body fonts plus bold weights embed; italics use a slanted regular |
| Slide master | Exports contain none, so the master appears blank in PowerPoint while per-slide content and styling still apply |
| Speaker notes | Included in PPTX and Google Slides exports |
| Large decks | Exports from 150 or more slides can fail; mobile-browser export is unreliable |
| The badge | Appears when the workspace is on Free at the time of export, regardless of when the document was created, with no retroactive removal |

Read that last two rows together and you have the practical trap. The Gamma badge is not a property of your document, it is a property of your account at the moment you hit export. Export the same deck on Free and on Plus and you get two different files.

The font row is the one that generates support tickets. Gamma attributes the Google Slides substitution to Google rather than claiming it as a defect, which is the kind of accurate statement that should increase your confidence in everything else on the list.

The slide-master row cuts both ways, and it is why blanket claims about these tools are wrong in both directions. A common line of attack on AI presentation tools is that they export as flattened images. Gamma's own documentation says tables export as real editable tables, so that blanket claim is false. It also documents missing slide masters, dropped embedded fonts in Google Slides, and fallback styling for gradients and frosted backgrounds. Fidelity is partial in both directions, and the way to find out which way is to do one round trip yourself.

## Round trips compound

Both major tools move decks in both directions, which is the interesting part rather than the obstacle. Gamma imports PDF and PPTX and exports to PDF, PPTX, and Google Slides by way of PPTX. Beautiful.ai advertises both PowerPoint import and editable PowerPoint export. So a group can hop between them, and every hop is a chance for styling to degrade rather than for transfer to be impossible.

The way to test this is not a review article. Export the same deck to PowerPoint from Gamma and from Beautiful.ai, open both on a machine that is not the machine that built it, and compare them side by side in slideshow mode. You will find out in about ten minutes which of the two your actual presentation depends on.

Beautiful.ai's own group-plan caps are worth knowing before you commit, because they are the limits that bite at the moment four people start adding assets: shared folders cap at 5 on Pro, workspace presentation templates at 10, the slide library at 50, and the asset library at 100. Those caps lift on Team and Enterprise.

## Plan for the tool disappearing

The other thing to price is the risk that the platform is gone by week eleven. Presentation tools are not a stable category, and the clearest evidence is not a failure but a success that changed shape. VentureBeat reported that presentation-tool maker Tome reached 20 million users and held $43 million in cash, and that its founders left to build Lightfield, an AI-native CRM launched in November 2025. Semafor reported on 16 April 2024 that Tome cut about 20% of its 59 employees and shifted focus from free users toward paying sales customers.

A company with 20 million users and $43 million in the bank did not run out of road. It changed what it was for, and the founders took the idea somewhere else entirely.

One warning if you go looking into this: there is a name collision. AngelList announced on 25 April 2025 that it had acquired a different company also called Tome, which summarizes venture capital legal and financing documents. AngelList's Tome has no connection to the presentation tool.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Where a group deck actually fails</text>
  <rect x="20" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="80" class="df-box-text" text-anchor="middle">One person builds it</text>
  <text x="110" y="97" class="df-box-text" text-anchor="middle">in the AI tool</text>
  <rect x="240" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Everyone else edits</text>
  <text x="330" y="97" class="df-box-text" text-anchor="middle">after the export</text>
  <rect x="460" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="80" class="df-box-text" text-anchor="middle">Shown in PowerPoint</text>
  <text x="550" y="97" class="df-box-text" text-anchor="middle">or Slides</text>
  <line x1="204" y1="85" x2="234" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="85" x2="454" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="210" class="df-box-text" text-anchor="middle">Fonts, masters,</text>
  <text x="110" y="227" class="df-box-text" text-anchor="middle">corners, gradients</text>
  <rect x="240" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="210" class="df-box-text" text-anchor="middle">Tables survive,</text>
  <text x="330" y="227" class="df-box-text" text-anchor="middle">images bloat to PNG</text>
  <rect x="460" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="210" class="df-box-text" text-anchor="middle">A second round trip</text>
  <text x="550" y="227" class="df-box-text" text-anchor="middle">compounds the loss</text>
  <line x1="110" y1="122" x2="110" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="122" x2="330" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="550" y1="122" x2="550" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
  <defs>
    <marker id="arc1" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Buy the export, not the generator. Everything these tools do well happens in the first fifteen minutes, and everything that goes wrong happens when the file leaves. Gamma's own help pages are the most useful document on this topic because they itemize the losses: exports render Present Mode not Edit Mode, there is no slide master, rounded table corners come out square, gradients and frosted backgrounds fall back to approximations, AI images export as PNG regardless of source, Google Slides discards embedded fonts, exports of 150 slides or more can fail, and the "Made by Gamma" badge is decided by your plan at the moment you export rather than when you built the deck. On price, price the group and not the seat, because Beautiful.ai Teams at $40 per user per month is $800 for five people over a four-month term while SlidesAI's free tier alone allows 12 decks a year and Beautiful.ai gives students a year free on a valid .edu address, and verify the number at checkout because the vendor's own two live pages currently disagree on the Pro price. Keep your source material outside any AI deck tool. A presentation company with 20 million users and $43 million in cash did not fail, it changed direction, and your group's grade should not depend on which direction the next one takes.
  </p>
</div>

## Sources

- [Comparing Beautiful.ai plans](https://www.beautiful.ai/pricing)
- [Beautiful.ai plan comparison table](https://www.beautiful.ai/planpricing)
- [Plus AI pricing](https://plusai.com/pricing)
- [SlidesAI pricing](https://www.slidesai.io/pricing)
- [How can I upgrade my Gamma subscription](https://help.gamma.app/en/articles/8077107-how-can-i-upgrade-my-gamma-subscription)
- [How do credits work in Gamma](https://help.gamma.app/en/articles/7834324-how-do-credits-work-in-gamma)
- [How do I purchase more credits in Gamma](https://help.gamma.app/en/articles/12466653-how-do-i-purchase-more-credits)
- [What is the easiest way to export my Gamma document](https://help.gamma.app/en/articles/8022861-what-s-the-easiest-way-to-export-my-gamma)
- [Why doesn't my exported PDF or PowerPoint match what I see in Gamma](https://help.gamma.app/en/articles/15939201-why-doesn-t-my-exported-pdf-or-powerpoint-match-what-i-see-in-gamma)
- [Gamma pricing page, archived 21 September 2026](https://web.archive.org/web/20260921101008/https://gamma.app/pricing)
- [Tome's founders ditch viral presentation app with 20M users to build AI (VentureBeat)](https://venturebeat.com/technology/tomes-founders-ditch-viral-presentation-app-with-20m-users-to-build-ai)
- [AI startup Tome lays off staff to focus on revenue (Semafor, 16 April 2024)](https://www.semafor.com/article/04/16/2024/ai-startup-tome-lays-off-staff-to-focus-on-revenue)
- [AngelList x Tome — a separate company, 25 April 2025](https://www.angellist.com/blog/angellist-x-tome)