---
title: "Long-context claims collapse under the RULER benchmark"
description: "Many models advertise million-token context windows, but the RULER benchmark shows accuracy drops sharply as context length increases and retrieval becomes harder across multiple needles."
date: "2026-10-03"
section: "comparisons"
tags: ["long-context", "ruler", "benchmark", "context-window", "retrieval"]
draft: false
---

Vendors often advertise huge context windows, but effective usable context is lower. RULER (NVIDIA) tests how well models retrieve and reason over information placed at different positions in long documents.

## RULER findings

RULER evaluates multiple synthetic tasks (needle-in-a-haystack variants, multi-needle, variable tracking, common words, etc.) at lengths from 4K up to 128K. Results show steep degradation for many models, especially when needles are placed in the middle or when multiple facts must be tracked.

| Model class | 4K–8K | 32K | 64K | 128K | Notes |
|---|---|---|---|---|---|
| Top-tier proprietary | High | High | Good | Moderate–Good | Best retention but still drops |
| Mid-tier | High | Moderate | Drops | Poor | Noticeable cliff around 32–64K |
| Many open models | High | Low/variable | Often collapse | Unreliable | Strong sensitivity to position |

A key insight: "supports 128K" does not mean "performs well at 128K". Position bias (middle of context) remains common.

## Practical advice

- Don't assume you can dump everything and get perfect recall.
- Keep critical info near the top or be explicit about what to retrieve.
- For RAG-like tasks, prefer chunking + targeted retrieval over blindly stuffing long docs.
- Test with your actual documents, not just synthetic needles.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Effective context drops with length</text>
  <rect x="30" y="55" width="150" height="60" rx="8" class="df-box"/>
  <text x="105" y="80" class="df-box-text" text-anchor="middle">4K–8K</text>
  <text x="105" y="100" class="df-box-text" text-anchor="middle">High accuracy</text>
  <rect x="195" y="55" width="150" height="60" rx="8" class="df-box"/>
  <text x="270" y="80" class="df-box-text" text-anchor="middle">16–32K</text>
  <text x="270" y="100" class="df-box-text" text-anchor="middle">Gradual drop</text>
  <rect x="360" y="55" width="150" height="60" rx="8" class="df-box"/>
  <text x="435" y="80" class="df-box-text" text-anchor="middle">64K</text>
  <text x="435" y="100" class="df-box-text" text-anchor="middle">Often cliff</text>
  <rect x="525" y="55" width="105" height="60" rx="8" class="df-box"/>
  <text x="577" y="80" class="df-box-text" text-anchor="middle">128K+</text>
  <text x="577" y="100" class="df-box-text" text-anchor="middle">Unreliable</text>
  <rect x="130" y="150" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="175" class="df-box-text" text-anchor="middle">Middle-position needles hardest to retrieve</text>
  <text x="330" y="195" class="df-box-text" text-anchor="middle">for many models</text>
  <defs>
    <marker id="arc4" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Context length is a ceiling, not a guarantee. Measure effective recall at target length with your own data.</p>
</div>

## Sources

- [Hsieh et al., "RULER: What's the real context size of your long-context language models?", arXiv 2404.06654](https://arxiv.org/abs/2404.06654)
- [RULER GitHub (NVIDIA)](https://github.com/NVIDIA/RULER)
