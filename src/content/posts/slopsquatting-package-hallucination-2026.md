---
title: "Your coding agent invented 205,000 package names that do not exist. 43% of them come back every time"
description: "USENIX Security 2025's Distinguished Paper ran 16 models across 576,000 code samples and counted 2.23 million recommended packages, of which 440,445 were hallucinated and 205,474 were distinct names that exist nowhere in PyPI or npm. Closed models hallucinated at 5.2% against 21.7% for open models. When researchers repeated 500 prompts ten times each, 43% of the hallucinated names reappeared in every single run, which is what makes the attack possible."
date: "2026-10-03"
section: "ai-for-developers"
tags: ["supply-chain", "security", "hallucination", "coding-agents", "slopsquatting", "npm", "pypi", "usenix"]
draft: false
---

Ask a coding model to add a PDF parser and it will give you an import. Sometimes the import is real. Often it is a name that never existed, and if somebody registers it later, your build installs it.

This is not a hypothetical. Researchers presented a USENIX Security 2025 paper that won a Distinguished Paper Award after generating 576,000 code samples from 16 models, extracting 2.23 million recommended package names, and checking each one against PyPI and npm.

| Result | Figure |
| --- | --- |
| Code samples generated | 576,000 |
| Package names mentioned | 2,230,000 |
| Names that were hallucinations | 440,445, which is 19.7% |
| Distinct names that exist nowhere | 205,474 |
| Hallucination rate, closed models | 5.2% |
| Hallucination rate, open models | 21.7% |
| Lowest rate of any model, GPT-4 Turbo | 3.59% |
| Python versus JavaScript | 15.8% against 21.3% |

Four times is the gap between open and closed models, which means the safer choice and the cheaper or more private choice are not the same choice. Open models hallucinated roughly a fifth of the time, and a dependency suggestion from a free model should be treated as a guess rather than a lookup.

Two caveats the authors insist on, and they should travel with the number. Package lists were captured as of 10 January 2024, so any name that has since been registered would have been scored as real, meaning 19.7% is a lower bound. And they found 12,871 packages that had existed between 2020 and 2022 and been deleted from PyPI, of which only 133 appeared in their output, so the model is not heavily drawn to names that once existed.

## Why repetition is the number that matters

Overall hallucination rate tells you how often the model is wrong. It does not tell you whether a wrong name is dangerous, because an attacker needs a name that is predicted reliably, not one that appears once.

So they took 500 prompts that had already produced a hallucination and re-ran each one ten times.

| Behaviour of a hallucinated name across 10 identical prompts | Share |
| --- | --- |
| Appeared in all 10 runs | 43% |
| Did not repeat at all | 39% |
| Appeared more than once | 58% |

That table is the attack. A name that reappears in every run is a name an attacker can predict without ever touching your repository, register it, and wait. The authors are explicit that persistence is what makes the vector viable, and the 39% that never repeat are noise in the sense that they cannot be targeted.

The names are also mostly not near-misses of real packages, which is what makes them hard to catch by eye. Of 76,489 unique hallucinated Python names, only 13.4% were within a Levenshtein distance of one or two characters from a real package and 48.6% scored 6 or higher. Reviewing a diff for suspicious import lines will not surface most of these.

## The cheap mitigations and the interesting anomaly

Three of the four models tested could identify their own hallucinations when asked, with detection accuracy above 75%. The models can tell you they made something up. They just do not volunteer it.

Temperature matters more than most people expect: GPT-4's hallucination rate was 8.9% at its maximum temperature against GPT-3.5's 31.8% at the same setting, roughly four times lower. And recently popular prompting topics produced about 10% more hallucinations than others, so a benchmark you built in March may behave differently now.

One detail deserves attention. Models that performed poorly on the standard benchmark sometimes did much better when given worked examples containing the trap, which is the same pattern seen in the GSM-Symbolic math work: the model is not reasoning about whether the package exists, it is pattern-matching toward a plausible import line.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">From a suggestion to an installed package</text>
  <rect x="20" y="52" width="140" height="66" rx="8" class="df-box"/>
  <text x="90" y="79" class="df-box-text" text-anchor="middle">Agent suggests</text>
  <text x="90" y="98" class="df-box-text" text-anchor="middle">an import</text>
  <rect x="176" y="52" width="140" height="66" rx="8" class="df-box"/>
  <text x="246" y="79" class="df-box-text" text-anchor="middle">Name repeats</text>
  <text x="246" y="98" class="df-box-text" text-anchor="middle">every run, 43%</text>
  <rect x="332" y="52" width="140" height="66" rx="8" class="df-box"/>
  <text x="402" y="79" class="df-box-text" text-anchor="middle">Attacker</text>
  <text x="402" y="98" class="df-box-text" text-anchor="middle">registers it</text>
  <rect x="488" y="52" width="152" height="66" rx="8" class="df-box"/>
  <text x="564" y="79" class="df-box-text" text-anchor="middle">Your build</text>
  <text x="564" y="98" class="df-box-text" text-anchor="middle">installs it</text>
  <line x1="164" y1="85" x2="172" y2="85" class="df-arrow" marker-end="url(#arc5)"/>
  <line x1="320" y1="85" x2="328" y2="85" class="df-arrow" marker-end="url(#arc5)"/>
  <line x1="476" y1="85" x2="484" y2="85" class="df-arrow" marker-end="url(#arc5)"/>
  <rect x="20" y="166" width="300" height="66" rx="8" class="df-box"/>
  <text x="170" y="192" class="df-box-text" text-anchor="middle">Eye review fails</text>
  <text x="170" y="211" class="df-box-text" text-anchor="middle">48.6% are 6+ edits away</text>
  <rect x="340" y="166" width="300" height="66" rx="8" class="df-box"/>
  <text x="490" y="192" class="df-box-text" text-anchor="middle">The model can self-check</text>
  <text x="490" y="211" class="df-box-text" text-anchor="middle">above 75% accuracy</text>
  <line x1="246" y1="122" x2="180" y2="162" class="df-arrow" marker-end="url(#arc5)"/>
  <line x1="402" y1="122" x2="480" y2="162" class="df-arrow" marker-end="url(#arc5)"/>
  <defs>
    <marker id="arc5" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Do not accept a package name from a model because it looks like what a developer would write, because in the largest study ever done of this question, one in five of them did not exist and nearly half of those were names a human reviewer would wave through. From 2.23 million package mentions across 576,000 code samples, 440,445 were hallucinated and 205,474 were distinct names absent from both PyPI and npm, with open models hallucinating at 21.7% against 5.2% for closed ones, so privacy and safety pull in opposite directions here. The figure to actually act on is not the 19.7% rate but the repetition: when the same prompt was run ten times, 43% of hallucinated names reappeared in every run and 58% appeared more than once, and that predictability is what converts a wrong suggestion into an installable attack. Eye review will not catch it either, since 48.6% of the hallucinated names were six or more edits away from any real package, so a diff that looks reasonable is not evidence. Note the 19.7% is a floor rather than a measurement, because package lists were frozen at 10 January 2024 and any name registered since counts as real, and note that 12,871 long-deleted PyPI packages produced only 133 of these suggestions, so the models are not simply recycling old names. The mitigations that exist are unglamorous and effective: turn the model's checking on, since three of four tested models identified their own hallucinations above 75% accuracy when asked, and it simply does not volunteer that; pin your dependencies and treat any new import from a model as requiring an actual registry lookup rather than a plausible name; and hold temperature down, since GPT-4 at maximum temperature hallucinated at 8.9% against GPT-3.5's 31.8%. One thing not to over-read: the paper calls this package hallucination, and the term slopsquatting was coined later by Socket.dev, so cite them for what they published rather than for the name.
  </p>
</div>

## Sources

- [Spracklen et al., We Have a Package for You: A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs, arXiv 2406.10279 (v3, 2 March 2025)](https://arxiv.org/abs/2406.10279)
- [Full text, including the 2.23 million package count, the repetition experiment and the Levenshtein analysis](https://arxiv.org/html/2406.10279v3)
- [USENIX Security 2025 presentation page for the paper, Distinguished Paper Award Winner, pp. 3687-3706](https://www.usenix.org/conference/usenixsecurity25/presentation/spracklen)