---
title: "Open vs. proprietary LLMs: what the Chatbot Arena leaderboard shows"
description: "The LMSYS Chatbot Arena ranks models by human preference in blind pairwise comparisons. Open models have closed much of the gap, but proprietary models still lead on complex tasks. The metric measures preference, not accuracy."
date: "2026-10-03"
section: "comparisons"
tags: ["llm", "open-source", "chatbot-arena", "comparison", "benchmarks"]
draft: false
---

When choosing between an open model you can self-host and a proprietary API, the honest question is: how big is the gap, and on what tasks?

## What the Chatbot Arena measures

The LMSYS Chatbot Arena collects human votes in blind pairwise comparisons: two anonymous models answer the same prompt, and the user picks the better response. Results are converted to Elo ratings.

This is a measure of **human preference**, not task accuracy. It rewards responses that are helpful, well-formatted, and engaging. It does not directly measure coding correctness, factual accuracy, or safety.

## What the leaderboard shows (broadly)

- Proprietary models (GPT-4 class, Claude) have historically led the overall ranking.
- Open models (Llama, Mistral, Qwen families) have closed much of the gap and now compete in the top tier on many categories.
- The gap is larger on complex reasoning and coding tasks than on casual conversation.
- Category-specific leaderboards (coding, math, hard prompts) tell a more useful story than the overall score.

## How to use this for a decision

| Your priority | What to check |
|---|---|
| Cost and data control | Open model on your own infra |
| Peak capability on hard tasks | Top proprietary model |
| Latency and throughput | Benchmarks on your hardware, not Arena |
| Privacy | Self-hosted open model |

## Caveats

- Arena voters are not your users. Preference does not equal fitness for your task.
- Elo ratings shift as new models are added; a snapshot is not a permanent ranking.
- Always run a small eval on your own prompts before committing.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Open vs. proprietary: decision factors</text>
  <rect x="40" y="60" width="250" height="70" rx="8" class="df-box"/>
  <text x="165" y="88" class="df-box-text" text-anchor="middle">Open models</text>
  <text x="165" y="110" class="df-box-text" text-anchor="middle">control + cost, narrower gap</text>
  <rect x="370" y="60" width="250" height="70" rx="8" class="df-box"/>
  <text x="495" y="88" class="df-box-text" text-anchor="middle">Proprietary</text>
  <text x="495" y="110" class="df-box-text" text-anchor="middle">peak capability, managed</text>
  <line x1="290" y1="95" x2="370" y2="95" class="df-arrow" marker-end="url(#arc11)"/>
  <rect x="130" y="160" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="185" class="df-box-text" text-anchor="middle">Arena = preference, not accuracy</text>
  <text x="330" y="205" class="df-box-text" text-anchor="middle">always eval on your own tasks</text>
  <defs>
    <marker id="arc11" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Open models are now competitive on many tasks. Choose on cost, control, and your own evals — not on a single leaderboard number.</p>
</div>

## Sources

- [LMSYS, "Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference"](https://lmsys.org/blog/)
- [LMSYS Chatbot Arena leaderboard](https://chat.lmsys.org/?leaderboard)
