---
title: "A 40% speedup for writing, but only for certain tasks"
description: "Noy and Zhang's large field experiment found that generative AI cut time on mid-level professional writing tasks by about 40% and raised quality ratings, but the benefit depended on task type and on workers' initial skill."
date: "2026-10-03"
section: "ai-for-business"
tags: ["productivity", "writing", "noy-zhang", "field-experiment", "knowledge-work"]
draft: false
---

The most cited field experiment on generative AI and knowledge work came out of an academic setting: Noy and Zhang gave professional writing tasks to hundreds of college-educated workers, half with access to ChatGPT.

## What they found

| Measure | Result |
|---|---|
| Time to complete | About 40% less for the AI group |
| Output quality (blind ratings) | Higher for the AI group |
| Quality gap between workers | Compressed |
| Effect by initial skill | Larger relative gain for lower-rated writers |

The "compression" result matters: AI helped the weaker writers most, echoing the customer-support finding that gains concentrate among less experienced workers. The average number hides a distribution.

## Caveats to carry into a business case

- The tasks were mid-level, well-specified writing, not open-ended strategy.
- Time savings did not automatically become cost savings; the study measured task time, not headcount.
- Quality was rated on the rubric of the study, not on long-run business outcomes such as customer retention.
- Relying on averages can overstate the gain for your stronger staff.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Gains are real but uneven</text>
  <rect x="30" y="55" width="190" height="60" rx="8" class="df-box"/>
  <text x="125" y="80" class="df-box-text" text-anchor="middle">Task time</text>
  <text x="125" y="100" class="df-box-text" text-anchor="middle">about -40%</text>
  <rect x="235" y="55" width="190" height="60" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Quality ratings</text>
  <text x="330" y="100" class="df-box-text" text-anchor="middle">higher on average</text>
  <rect x="440" y="55" width="190" height="60" rx="8" class="df-box"/>
  <text x="535" y="80" class="df-box-text" text-anchor="middle">Skill gap</text>
  <text x="535" y="100" class="df-box-text" text-anchor="middle">compresses</text>
  <rect x="150" y="150" width="360" height="60" rx="8" class="df-box"/>
  <text x="330" y="175" class="df-box-text" text-anchor="middle">Not a headcount result: task time ≠ cost saved</text>
  <text x="330" y="195" class="df-box-text" text-anchor="middle">measure your own workflow</text>
  <defs>
    <marker id="arc7" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Expect real speed and quality gains on well-specified writing, concentrated among less experienced staff. Do not extrapolate the 40% into a company-wide number without measuring your own tasks.</p>
</div>

## Sources

- [Noy and Zhang, "Experimental evidence on the productivity effects of generative artificial intelligence", Science 381, 2023](https://doi.org/10.1126/science.adh2586)
- [Noy and Zhang, working paper version, SSRN 4375283](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4375283)
