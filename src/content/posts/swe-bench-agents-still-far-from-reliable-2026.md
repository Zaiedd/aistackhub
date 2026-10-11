---
title: "SWE-bench shows AI agents are still far from reliably solving real issues"
description: "SWE-bench evaluates whether models can resolve real GitHub issues with tests. Top systems solve a minority of tasks, and the jump from benchmark scores to dependable autonomous bug-fixing remains large."
date: "2026-10-03"
section: "ai-for-developers"
tags: ["swe-bench", "coding-agents", "benchmark", "software-engineering", "autonomy"]
draft: false
---

SWE-bench is the most credible measure of whether an AI agent can actually fix real software problems. It takes genuine GitHub issues and their tests, then asks a system to produce a patch that passes. It is hard on purpose.

## What the numbers mean

SWE-bench tasks come from real repositories (django, sympy, scikit-learn, etc.). Scoring uses the project's own tests, so a "pass" means the fix actually works and doesn't break existing behaviour.

| Setting | What is measured | Reality |
|---|---|---|
| SWE-bench (full) | Resolve rate on ~2,294 issues | Even top systems solve a minority |
| SWE-bench Verified | Curated subset, human-validated | Progress is real but incomplete |
| SWE-bench Lite | Smaller, cheaper subset | Good for iteration, easy to over-read |

Two traps: high scores on curated subsets do not transfer directly to arbitrary repos, and a benchmark issue is cleaner than a real bug report, which is often under-specified.

## Practical implications

- Agents are useful as first-draft fixers and codebase navigators, not as autonomous maintainers.
- Keep a human in the loop for anything touching production, auth, or money.
- Cost and latency matter: multi-step agents can retry many times before one pass.
- Test coverage is the bottleneck: if your repo lacks tests, the agent has no signal.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Benchmark pass vs production reliability</text>
  <rect x="30" y="55" width="180" height="60" rx="8" class="df-box"/>
  <text x="120" y="80" class="df-box-text" text-anchor="middle">SWE-bench task</text>
  <text x="120" y="100" class="df-box-text" text-anchor="middle">clean & testable</text>
  <rect x="240" y="55" width="180" height="60" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Real bug report</text>
  <text x="330" y="100" class="df-box-text" text-anchor="middle">under-specified</text>
  <rect x="450" y="55" width="180" height="60" rx="8" class="df-box"/>
  <text x="540" y="80" class="df-box-text" text-anchor="middle">Production change</text>
  <text x="540" y="100" class="df-box-text" text-anchor="middle">needs review</text>
  <rect x="150" y="150" width="360" height="60" rx="8" class="df-box"/>
  <text x="330" y="175" class="df-box-text" text-anchor="middle">Gap widens as context gets messier</text>
  <text x="330" y="195" class="df-box-text" text-anchor="middle">keep humans in the loop</text>
  <defs>
    <marker id="arc6" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Treat coding agents as capable assistants, not autonomous maintainers. Benchmark success rates understate the difficulty of real, underspecified work.</p>
</div>

## Sources

- [Jimenez et al., "SWE-bench: Can language models resolve real-world GitHub issues?", ICLR 2024, arXiv 2310.06770](https://arxiv.org/abs/2310.06770)
- [OpenAI, "Introducing SWE-bench Verified"](https://openai.com/index/introducing-swe-bench-verified/)
