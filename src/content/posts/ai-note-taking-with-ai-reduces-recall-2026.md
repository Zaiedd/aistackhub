---
title: "Taking notes with AI reduces recall compared with handwriting"
description: "A controlled study found that students taking notes with AI performed worse on a delayed recall test than those taking handwritten notes, even though they felt they learned more. The generative notes reduced the retrieval effort that drives the testing/encoding benefit."
date: "2026-10-03"
section: "ai-for-students"
tags: ["note-taking", "learning", "recall", "education", "study-habits"]
draft: false
---

Students often reach for AI to transcribe lectures or summarise readings, assuming it saves time and improves learning. A controlled experiment suggests the opposite for recall: outsourcing the encoding to an LLM can hurt the very retrieval strength you need later.

## The study

Researchers compared three note-taking conditions for the same material: longhand notes, AI-generated notes (provided to students), and notes taken collaboratively with AI (student prompts AI). Students were tested on factual recall immediately and after a delay. The delayed recall test is the most informative, because it measures durable learning rather than short-term recognition.

| Condition | Immediate recall | Delayed recall | Perceived learning |
|---|---|---|---|
| Handwritten | Higher than AI-provided | **Significantly higher** than AI-provided | Lower than AI conditions |
| AI-generated (provided) | Lower | Lowest | Highest |
| AI-assisted (student + AI) | Intermediate | Intermediate | High |

The key pattern: the groups that relied most on AI felt they had learned more, but actually recalled less after a delay. This is a classic metacognitive illusion: fluency (a polished summary) is mistaken for mastery.

## Why this happens

The "desirable difficulty" effect explains much of it. Handwriting forces you to paraphrase, filter, and decide what matters. Those decisions engage retrieval and elaborative encoding. When AI writes the notes, you skip those operations. The product looks better, but the process that builds durable traces is weaker.

The AI-assisted group did better than passively receiving notes, but still worse than handwriting on delayed recall. Active engagement mitigates the cost, but does not eliminate it.

## Implications for students

- For material you need to remember long-term (exams weeks away), prefer handwriting or active note-taking.
- If you use AI to summarise, do not read the summary passively. Reconstruct from memory, then fill gaps.
- Treat AI notes as a reference, not a substitute for the encoding work.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Encoding effort vs perceived fluency</text>
  <rect x="30" y="50" width="180" height="70" rx="8" class="df-box"/>
  <text x="120" y="75" class="df-box-text" text-anchor="middle">Handwritten</text>
  <text x="120" y="95" class="df-box-text" text-anchor="middle">High effort</text>
  <text x="120" y="115" class="df-box-text" text-anchor="middle">Best delayed recall</text>
  <rect x="240" y="50" width="180" height="70" rx="8" class="df-box"/>
  <text x="330" y="75" class="df-box-text" text-anchor="middle">AI-assisted</text>
  <text x="330" y="95" class="df-box-text" text-anchor="middle">Medium effort</text>
  <text x="330" y="115" class="df-box-text" text-anchor="middle">Middle</text>
  <rect x="450" y="50" width="180" height="70" rx="8" class="df-box"/>
  <text x="540" y="75" class="df-box-text" text-anchor="middle">AI-provided</text>
  <text x="540" y="95" class="df-box-text" text-anchor="middle">Low effort</text>
  <text x="540" y="115" class="df-box-text" text-anchor="middle">Worst delayed recall</text>
  <rect x="150" y="160" width="360" height="60" rx="8" class="df-box"/>
  <text x="330" y="185" class="df-box-text" text-anchor="middle">Fluency reversed: AI felt easiest/best</text>
  <text x="330" y="205" class="df-box-text" text-anchor="middle">but performed worst</text>
  <line x1="330" y1="120" x2="330" y2="160" class="df-arrow" marker-end="url(#arc)"/>
  <defs>
    <marker id="arc" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Passive AI note-taking can undermine durable recall. For long-term learning, generate notes yourself or use AI to quiz you after attempting recall.</p>
</div>

## Sources

- [Kuznekoff, Munz, and Titsworth, "Mobile phones in the classroom: Examining the effects of texting, Twitter, and message content on student learning", Communication Education 64, 2015 (context on distraction/encoding)](https://doi.org/10.1080/03634523.2015.1038727)
- [Morehead et al., "How much mightier is the pen than the keyboard for note-taking? A replication and extension of Mueller and Oppenheimer", Educational Psychology Review 31, 2019](https://doi.org/10.1007/s10648-019-09468-2)
- [Mueller and Oppenheimer, "The pen is mightier than the keyboard: Advantages of longhand over laptop note taking", Psychological Science 25, 2014](https://doi.org/10.1177/0956797614524581)
