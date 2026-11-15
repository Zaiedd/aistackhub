---
title: "MMLU is saturated: measure what actually matters"
description: "MMLU and similar multiple-choice benchmarks no longer discriminate between strong models. Task-based, real-world evaluations like SWE-bench give a more honest picture of capability."
date: "2026-10-03"
section: "ai-for-developers"
tags: ["benchmarks", "mmlu", "evaluation", "swe-bench", "llm"]
draft: false
---

MMLU was a strong benchmark in 2020. In 2026, most frontier models score in the high 80s or 90s, and the spread between them is small. The benchmark has saturated.

## What MMLU measures

MMLU (Hendrycks et al., 2021) is a multiple-choice benchmark across 57 subjects, from elementary maths to professional law. It tests factual recall and reasoning on short, self-contained questions.

It was valuable because it covered breadth. It is now limited because the top models are clustered near the ceiling, and small score differences are not meaningful.

## Why saturation is a problem

- A benchmark that cannot separate models stops being useful for selection.
- Optimising for MMLU can distort training toward trivia rather than capability.
- High MMLU scores are routinely cited as proof of "intelligence" that does not transfer to real tasks.

## What to measure instead

| Goal | Better evaluation |
|---|---|
| Code capability | SWE-bench (real GitHub issues, hidden tests) |
| Reasoning | Task-based evals with verifiable answers |
| Tool use | Agent benchmarks with real environments |
| Safety | Red-team suites and refusal evaluations |

The pattern: prefer benchmarks where the model must produce an artifact (code, a file, a decision) that can be checked, over benchmarks where it picks a letter.

## Practical advice

- When comparing models for your use case, build a small eval from your own tasks.
- Treat published benchmark scores as a filter, not a ranking.
- Re-run evals when you change prompts, tools, or retrieval.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Benchmark saturation problem</text>
  <rect x="40" y="60" width="250" height="70" rx="8" class="df-box"/>
  <text x="165" y="88" class="df-box-text" text-anchor="middle">MMLU</text>
  <text x="165" y="110" class="df-box-text" text-anchor="middle">models clustered near ceiling</text>
  <rect x="370" y="60" width="250" height="70" rx="8" class="df-box"/>
  <text x="495" y="88" class="df-box-text" text-anchor="middle">SWE-bench</text>
  <text x="495" y="110" class="df-box-text" text-anchor="middle">real tasks, wide spread</text>
  <line x1="290" y1="95" x2="370" y2="95" class="df-arrow" marker-end="url(#arc9)"/>
  <rect x="130" y="160" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="185" class="df-box-text" text-anchor="middle">Prefer task-based evals</text>
  <text x="330" y="205" class="df-box-text" text-anchor="middle">over multiple-choice scores</text>
  <defs>
    <marker id="arc9" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>MMLU is a filter, not a ranking. For real capability, use task-based benchmarks and your own evals.</p>
</div>

## Sources

- [Hendrycks et al., "Measuring Massive Multitask Language Understanding" (MMLU), arXiv 2020](https://arxiv.org/abs/2009.03300)
- [Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", arXiv 2023](https://arxiv.org/abs/2310.06770)
