---
title: "AI made your best customer service agent no faster. It made your weakest one 34% faster"
description: "The most-cited evidence on AI and work productivity comes from 5,179 customer support agents and found a 14% average gain in issues resolved per hour, but the gain was almost entirely concentrated in novice and low-skilled workers while experienced staff saw almost nothing. The effect was not a uniform speedup, which matters far more for hiring, training and retention decisions than the headline average."
date: "2026-10-03"
section: "ai-for-business"
tags: ["productivity", "customer-service", "ai-adoption", "labor", "training", "nber", "roi"]
draft: false
---

Almost every AI productivity number you have been shown is an average, and averages hide the only part worth knowing.

Brynjolfsson, Li and Raymond studied 5,179 customer support agents at a software firm using data from the staggered rollout of a generative AI assistant. Because deployment happened at different times for different teams, they could compare agents before and after access in a way that does not rely on volunteers. The metric was issues resolved per hour, and the headline is a 14% average improvement.

The finding that matters is that the 14% is not spread across the workforce.

## The gain is a novice effect

| Worker group | Effect on issues resolved per hour |
| --- | --- |
| All agents | +14% |
| Novice and low-skilled workers | +34% |
| Experienced and highly skilled workers | Minimal |

The authors describe the mechanism plainly: the AI model disseminates the best practices of the more able workers and helps newer workers move down the experience curve. This is a very specific claim with a very specific consequence. If the tool's value is transferring tacit knowledge that experienced staff already have, then the return on the tool falls as your average experience rises, and a fully-trained team gets close to nothing.

That reframes the business question. The interesting number is not "how much faster is the average agent", it is "how much of the curve is still unconverted". A support team where everyone is already good is the worst possible place to measure a tool whose benefit is flattening the experience curve, and a team with a steep curve is the best.

Read it the other way and it becomes a retention story as much as a productivity one. The paper also finds the assistant improved customer sentiment and increased employee retention. Novice workers being measurably faster and staying longer is a plausible consequence of the tool removing the specific competence gap that drives early attrition.

## What the study does not establish

Two limits are worth stating before anyone puts this in a business case.

First, this is one firm in customer support. There is nothing in the paper about sales, engineering or professional services, and the same flattening-of-the-curve logic would apply very differently to work where quality is judged on the hardest cases rather than on handling volume.

Second, the paper measures access to a retrieval and recommendation assistant, not an autonomous agent. The mechanism described is that the assistant surfaces what good agents would have done. Tooling that does the whole task is a different claim and would not inherit this result.

The paper also does not resolve the question every buyer asks, which is cost. It measures productivity on one firm's existing payroll, not return on the subscription.

The authors' own summary is the right summary: access to generative AI can increase productivity, with large heterogeneity in effects across workers. The heterogeneity is the finding.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">One tool, two returns</text>
  <rect x="20" y="52" width="300" height="80" rx="8" class="df-box"/>
  <text x="170" y="78" class="df-box-text" text-anchor="middle">Novice and low-skilled agents</text>
  <text x="170" y="100" class="df-box-text" text-anchor="middle">+34% per hour</text>
  <text x="170" y="119" class="df-box-text" text-anchor="middle">the experience curve shortens</text>
  <rect x="340" y="52" width="300" height="80" rx="8" class="df-box"/>
  <text x="490" y="78" class="df-box-text" text-anchor="middle">Experienced and skilled agents</text>
  <text x="490" y="100" class="df-box-text" text-anchor="middle">minimal effect</text>
  <text x="490" y="119" class="df-box-text" text-anchor="middle">they already knew the answer</text>
  <rect x="20" y="172" width="300" height="66" rx="8" class="df-box"/>
  <text x="170" y="198" class="df-box-text" text-anchor="middle">Also measured</text>
  <text x="170" y="217" class="df-box-text" text-anchor="middle">sentiment up, retention up</text>
  <rect x="340" y="172" width="300" height="66" rx="8" class="df-box"/>
  <text x="490" y="198" class="df-box-text" text-anchor="middle">Not measured</text>
  <text x="490" y="217" class="df-box-text" text-anchor="middle">cost, other job families</text>
  <line x1="170" y1="136" x2="170" y2="168" class="df-arrow" marker-end="url(#arc6)"/>
  <line x1="490" y1="136" x2="490" y2="168" class="df-arrow" marker-end="url(#arc6)"/>
  <defs>
    <marker id="arc6" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Do not budget AI productivity as a percentage of your whole team, because the best available evidence says the return is concentrated almost entirely where you are weakest, not where you are strongest. Across 5,179 customer support agents observed through a staggered rollout, access to a generative AI assistant raised issues resolved per hour by 14% on average, but the average conceals a 34% gain for novice and low-skilled workers against almost nothing for experienced and highly skilled ones, and the stated mechanism is that the assistant disseminates the practices of the more able workers so newer people move down the experience curve faster. If that mechanism is right then the return falls as your average experience rises, which inverts the usual instinct to deploy where the work is most demanding: deploy where the curve is steepest, and measure the effect by tenure rather than by team average, because a 14% headline on a team of strong agents and a 14% headline on a team of new hires are not the same event. Two other findings matter at least as much for retention as for speed, since the same paper reports improved customer sentiment and higher employee retention, and a plausible read is that novices who become competent faster stay longer, so the tool may be buying you turnover reduction rather than throughput. Keep the limits attached, though, because this is one firm in customer support measuring a recommendation assistant rather than an autonomous agent, it says nothing about sales or engineering, and it measures productivity on existing payroll rather than return on your subscription. The useful question for your own business is therefore not "what will AI give me" but "how steep is my experience curve in the role I want to speed up", and the answer to that will predict the return better than any vendor benchmark.
  </p>
</div>

## Sources

- [Brynjolfsson, Li and Raymond, Generative AI at Work, NBER Working Paper 31161, DOI 10.3386/w31161, issue date April 2023, revised November 2023](https://www.nber.org/papers/w31161)
- [The same page records the published version: Quarterly Journal of Economics, vol. 140, issue 2, pages 889-942, 2025](https://www.nber.org/papers/w31161)