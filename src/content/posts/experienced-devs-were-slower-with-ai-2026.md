---
title: "Experienced developers were 19% slower with AI and thought they were 20% faster"
description: "METR ran a randomised controlled trial where 16 experienced open-source developers worked on issues in repositories they knew, with AI tools freely available in half the tasks. Implementation took 19% longer with AI. The developers predicted a 24% speedup before starting and still estimated a 20% speedup afterwards. Economics experts had forecast 39% and ML experts 38%. No confidence interval was published for the headline number, and the study has since been superseded."
date: "2026-10-03"
section: "ai-for-developers"
tags: ["ai-coding-agents", "productivity", "metr", "cursor", "developer-tools", "research", "measurement"]
draft: false
---

There is exactly one credible randomised controlled trial on whether AI coding tools speed up working developers, and its result was that experienced developers got measurably slower while believing they had got faster.

METR gave 16 developers with moderate AI experience a set of real issues in mature open-source projects they had contributed to for about five years on average. The design was randomised at the issue level: 136 issues were worked on with AI allowed, 110 with AI disallowed. Developers could use any AI tool they liked in the allowed condition, including none, and in the disallowed condition no generative tooling was permitted at all, though search engines stayed available. Primarily they used Cursor Pro and Claude 3.5 or 3.7 Sonnet.

| What was measured | Result |
| --- | --- |
| Implementation time, AI allowed vs disallowed | 19% slower |
| Raw difference in times | 34% |
| Measured with screen-recording time instead of self-report | 25% slower |
| Developers' forecast before starting | 24% faster |
| Developers' estimate after finishing | 20% faster |
| Economics experts' forecast | 39% faster |
| Machine learning experts' forecast | 38% faster |

Two things about that table matter more than the headline. The first is that everyone was wrong in the same direction. The economists and the machine learning researchers were not the naive group here; they were the furthest off. The developers were also wrong after the fact, by about 39 points, which means self-report from a developer using a coding assistant is close to worthless as a measurement.

The second is the confidence interval, which does not exist. METR's own write-up says the intervals were computed with clustered standard errors accounting for the number of developers and were not reported in the released paper. With 16 developers on a 246-task study, treat 19% as a well-motivated finding rather than a precisely estimated constant.

## Why experienced developers in familiar repositories is the worst case

The authors were careful about what this does and does not show, and they are the source of the caveat, not a bystander to it.

They state the results do not imply AI systems are not useful in realistic, economically relevant settings. They found that high familiarity with the repositories, and the size and maturity of those repositories, both contributed to the slowdown, and that those factors do not apply to many software development settings. They name small greenfield projects and work in unfamiliar codebases as settings where their results are consistent with substantial speedup.

They also say future models may speed up developers in this exact setting, and that better prompting, agent scaffolding or domain-specific fine-tuning could flip the result. And they explicitly warn readers against overgeneralizing.

They are right about the mechanism, and the mechanism is worth stating plainly. The slowdown concentrates in the part of the work that requires knowing what the codebase already does before you can write anything. The 19% figure is not a statement about generating code. It is a statement about the cost of reconstructing context that an experienced person already had for free.

That framing also explains why the finding is specific to repositories averaging five years of ownership. Nobody has five years of context in a new project.

## Do not use this as an argument either way

Two things to be careful about. The study is dated: METR's own page now carries a banner saying the results are out of date and superseded by a continuation study covering early 2026. This article describes a measurement of early-2025 tools, not the current frontier.

Second, the population is 16 developers on mature open-source repositories, chosen because they were experienced in exactly the setting studied. That is the population most likely to be slowed down by a tool that does not know the codebase. METR says outright that they do not claim their developers or repositories represent a majority or plurality of software development work.

<div class="aistack-diagram">
<svg viewBox="0 0 660 296" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Who was measured, and who was not</text>
  <rect x="20" y="52" width="200" height="106" rx="8" class="df-box"/>
  <text x="120" y="78" class="df-box-text" text-anchor="middle">16 developers</text>
  <text x="120" y="97" class="df-box-text" text-anchor="middle">246 real issues</text>
  <text x="120" y="116" class="df-box-text" text-anchor="middle">5 years average</text>
  <text x="120" y="135" class="df-box-text" text-anchor="middle">repo experience</text>
  <rect x="230" y="52" width="200" height="106" rx="8" class="df-box"/>
  <text x="330" y="78" class="df-box-text" text-anchor="middle">Cursor Pro</text>
  <text x="330" y="97" class="df-box-text" text-anchor="middle">Claude 3.5 / 3.7 Sonnet</text>
  <text x="330" y="116" class="df-box-text" text-anchor="middle">Cursor Pro plus</text>
  <text x="330" y="135" class="df-box-text" text-anchor="middle">Claude 3.5 / 3.7 Sonnet</text>
  <rect x="440" y="52" width="200" height="106" rx="8" class="df-box"/>
  <text x="540" y="78" class="df-box-text" text-anchor="middle">Randomised</text>
  <text x="540" y="97" class="df-box-text" text-anchor="middle">136 issues AI on</text>
  <text x="540" y="116" class="df-box-text" text-anchor="middle">110 issues AI off</text>
  <text x="540" y="135" class="df-box-text" text-anchor="middle">no genAI when off</text>
  <rect x="20" y="196" width="300" height="70" rx="8" class="df-box"/>
  <text x="170" y="222" class="df-box-text" text-anchor="middle">Slowdown likely here</text>
  <text x="170" y="242" class="df-box-text" text-anchor="middle">familiar, mature, large</text>
  <text x="170" y="259" class="df-box-text" text-anchor="middle">repositories</text>
  <rect x="340" y="196" width="300" height="70" rx="8" class="df-box"/>
  <text x="490" y="222" class="df-box-text" text-anchor="middle">May not transfer here</text>
  <text x="490" y="242" class="df-box-text" text-anchor="middle">greenfield, unfamiliar</text>
  <text x="490" y="259" class="df-box-text" text-anchor="middle">codebases</text>
  <line x1="120" y1="162" x2="180" y2="192" class="df-arrow" marker-end="url(#arc4)"/>
  <line x1="540" y1="162" x2="480" y2="192" class="df-arrow" marker-end="url(#arc4)"/>
  <defs>
    <marker id="arc4" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Do not run a productivity argument on self-report, because the only randomised controlled trial on this question found that experienced developers were 19% slower with AI while estimating they had been 20% faster, and that is a 39-point error in perception made by people who were being watched. That is the finding to carry, more than the 19%. It also means your own impression that the tool is speeding you up is not evidence, in the same way that a developer's confidence in generated code is not a test suite. What the study supports is narrower and more specific than either the enthusiasts or the sceptics claim: 16 developers with about five years of history in mature open-source repositories took 19% longer across 246 issues when AI tooling was allowed, measured at 34% on raw times and 25% using screen recordings rather than self-reported effort. The mechanism is context reconstruction, not code generation, which is why the number is largest precisely where a person already knew the codebase and smallest where nobody does. There is no published confidence interval for the headline estimate, and the authors say so themselves, so treat 19% as well-motivated rather than precise. Two limits to carry with the number: this measures the early-2025 frontier, and METR now labels the result out of date and superseded by a continuation study, and the sample is 16 people chosen for expertise in the exact repositories studied, a population with a structural reason to be slowed by a tool that cannot read what they already know. The practical use of this study is not a verdict on AI coding tools. It is a design rule: give the tool work where the repository is small, new or unfamiliar, where the 19% penalty has no context to reconstruct, and measure elapsed time yourself rather than asking how it felt.
  </p>
</div>

## Sources

- [Becker, Rush, Barnes and Rein, Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity, arXiv 2507.09089 (v2, 25 July 2025)](https://arxiv.org/abs/2507.09089)
- [Full text of the METR paper, including the 136 versus 110 issue counts and the authors' generalization caveats](https://arxiv.org/html/2507.09089v2)
- [METR: Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (study page, includes the superseded-results notice)](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study)