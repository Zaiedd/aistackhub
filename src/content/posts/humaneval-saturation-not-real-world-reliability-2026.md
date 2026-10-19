---
title: "HumanEval scores are saturated; real-world reliability is much lower"
description: "Benchmarks like HumanEval measure small, self-contained problems. Real software tasks are harder, and coding agents score far lower on benchmarks built from real GitHub issues."
date: "2026-10-03"
section: "ai-for-developers"
tags: ["benchmarks", "humaneval", "swe-bench", "coding-agents", "evaluation"]
draft: false
---

A high score on a coding benchmark does not mean an AI agent can fix real bugs. The gap between benchmark problems and real repository work is large, and it shows up in the numbers.

## What HumanEval measures

HumanEval (Chen et al., 2021) consists of 164 hand-written Python problems. Each problem is a short function with a docstring and unit tests. Models are scored by pass@k: the fraction of problems solved within k samples. Codex-12B reached 28.8% pass@1 on this set.

That is a useful signal for code generation on small, self-contained tasks. It is not a signal for editing a real codebase, running a test suite, or navigating a repository.

## What real-world tasks look like

SWE-bench (Jimenez et al., 2023) was built from real GitHub issues and their gold patches across popular Python repositories. An agent must reproduce the issue, locate the relevant files, edit the code, and make the hidden tests pass. On the full SWE-bench set, a strong baseline (Claude 2) resolved only 4.8% of tasks.

The difference is not just difficulty. HumanEval problems are designed to be solvable in isolation. SWE-bench tasks require understanding an existing codebase, its conventions, and its test harness.

## Why the gap matters

- A model can ace HumanEval while failing on the issues you actually file.
- Benchmark saturation (scores approaching 100%) on HumanEval has not translated to proportional gains on repository tasks.
- Evaluating an agent on HumanEval alone overestimates production readiness.

## How to evaluate agents honestly

- Prefer repository-level benchmarks (SWE-bench and its Verified subset) for agent claims.
- Run the agent on your own codebase with your own tests before trusting it.
- Track not just pass rate but also the cost, number of attempts, and regressions introduced.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Benchmark vs. real-world gap</text>
  <rect x="40" y="60" width="250" height="70" rx="8" class="df-box"/>
  <text x="165" y="88" class="df-box-text" text-anchor="middle">HumanEval</text>
  <text x="165" y="110" class="df-box-text" text-anchor="middle">small isolated problems</text>
  <rect x="370" y="60" width="250" height="70" rx="8" class="df-box"/>
  <text x="495" y="88" class="df-box-text" text-anchor="middle">SWE-bench</text>
  <text x="495" y="110" class="df-box-text" text-anchor="middle">real repo issues + tests</text>
  <line x1="290" y1="95" x2="370" y2="95" class="df-arrow" marker-end="url(#arc5)"/>
  <rect x="130" y="160" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="185" class="df-box-text" text-anchor="middle">High HumanEval does not imply</text>
  <text x="330" y="205" class="df-box-text" text-anchor="middle">high real-world fix rate</text>
  <defs>
    <marker id="arc5" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>HumanEval is a useful but narrow signal. For coding agents, real-repository benchmarks and your own test suite are the honest measure of readiness.</p>
</div>

## Sources

- [Chen et al., "Evaluating Large Language Models Trained on Code" (HumanEval), arXiv 2021](https://arxiv.org/abs/2107.03374)
- [Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", arXiv 2023](https://arxiv.org/abs/2310.06770)
