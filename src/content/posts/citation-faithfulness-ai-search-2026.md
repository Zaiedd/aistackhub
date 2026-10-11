---
title: "AI search cites sources, but gets the claim right far less often"
description: "Evaluations of AI search and answer engines show a gap between citation presence and citation faithfulness. Many answers include plausible-looking citations that do not support the stated claim."
date: "2026-10-03"
section: "comparisons"
tags: ["ai-search", "citations", "hallucination", "faithfulness", "retrieval"]
draft: false
---

AI search engines cite URLs to appear authoritative. Independent audits find that citation inclusion is high, but a large share of citations are not actually faithful to the claim they are meant to support.

## Key findings

Multiple studies (e.g. Liu et al., 2023 on citation faithfulness; recent audits of popular AI search products) measure: (1) does the answer contain citations, (2) does each citation support the specific claim it backs.

| Aspect | Typical range | Observation |
|---|---|---|
| Citation coverage | 60–90% | Most answers include at least one citation |
| Citation faithfulness | 40–70% | Many citations are partial, irrelevant, or misrepresent the source |
| URL validity | Often high | Broken links less common than misrepresentation |
| Multi-source synthesis | Mixed | Models struggle to represent nuance across sources |

The discrepancy is the issue: users see citations and infer correctness. The presence of a link is weak evidence if the link doesn't support the exact claim.

## How to verify

- Click and read the cited passage, not just the title.
- Look for direct quotes or numbers that match.
- Watch for overgeneralisation (source says "may", answer says "does").
- For critical claims, verify at least one primary source.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Citation presence ≠ faithfulness</text>
  <rect x="40" y="55" width="200" height="60" rx="8" class="df-box"/>
  <text x="140" y="80" class="df-box-text" text-anchor="middle">Answer includes citation</text>
  <text x="140" y="100" class="df-box-text" text-anchor="middle">URL looks plausible</text>
  <rect x="290" y="55" width="330" height="60" rx="8" class="df-box"/>
  <text x="455" y="80" class="df-box-text" text-anchor="middle">Does the cited passage actually support the claim?</text>
  <text x="455" y="100" class="df-box-text" text-anchor="middle">Often no in audits</text>
  <rect x="150" y="150" width="360" height="60" rx="8" class="df-box"/>
  <text x="330" y="175" class="df-box-text" text-anchor="middle">User trusts citation → over-trusts answer</text>
  <text x="330" y="195" class="df-box-text" text-anchor="middle">Verify the passage, not the reference count</text>
  <defs>
    <marker id="arc5" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Citations improve transparency, but they don't guarantee accuracy. Treat them as pointers to check, not proof.</p>
</div>

## Sources

- [Liu et al., "Evaluating verifiability in generative search engines", arXiv 2304.09848](https://arxiv.org/abs/2304.09848)
- [Gao et al., "Enabling large language models to generate text with citations", EMNLP 2023](https://doi.org/10.18653/v1/2023.emnlp-main.536)
