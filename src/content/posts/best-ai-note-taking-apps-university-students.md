---
title: "Best AI note-taking apps for university students"
description: "I tested the tools that actually turn lectures and PDFs into something you can study from, not just store. Here's what works when the exam is in three days."
date: "2026-09-25"
section: "ai-for-students"
tags: ["note-taking", "notebooklm", "remnote", "students", "study-tools"]
draft: false
---

It's 11:47 PM and the organic chemistry midterm is at 9 AM. Your notes from the last three weeks are a mess of half-finished sentences, screenshots of slides, and a PDF you never opened. You open three tabs, paste the same chapter into two different tools, and wait to see which one actually gives you something you can use before you fall asleep.

That is the real test for AI note-taking apps in 2026. Not "does it have AI," but "does it turn the raw material of a university course into something you can revise from when you are already tired."

I spent the better part of a semester using the main contenders the way a student actually would: uploading lecture slides and textbook chapters, recording a couple of live sessions, generating study guides and flashcards, then checking whether the output was grounded in my own sources or just confident-sounding filler. The tools that survived are the ones that respect the constraint most students live under — limited time and almost zero budget.

## What actually matters for students

Most comparison lists still treat note-taking apps like productivity software for knowledge workers. University work is different. You need three things:

1. **Source grounding.** The AI has to answer from *your* slides, *your* readings, and *your* lecture recordings. Generic answers from the open internet are worse than useless when the exam is on the exact wording of your professor's handout.
2. **Speed from raw material to reviewable material.** Recording a lecture or dumping a PDF should produce something you can quiz yourself on within minutes, not another document you have to re-organize.
3. **A free tier that is not a demo.** If the useful features lock after three files or 300 minutes, the tool is not built for students.

Those criteria eliminate a lot of the "AI second brain" apps that look polished in demos.

<div class="aistack-diagram">
<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision flow: which AI note tool for which student problem">
  <!-- Question -->
  <rect class="df-q" x="180" y="12" width="280" height="44" rx="8" fill="#f0f4ff" stroke="#3b5bdb" stroke-width="2"/>
  <text class="df-box-text" x="320" y="40" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="600" fill="#1e3a5f">What is the main bottleneck?</text>

  <!-- Arrow down from Q -->
  <line class="df-arrow" x1="320" y1="56" x2="320" y2="88" stroke="#3b5bdb" stroke-width="2"/>
  <polygon class="df-arrowhead" points="314,88 320,98 326,88" fill="#3b5bdb"/>

  <!-- Three branches -->
  <!-- Left: Live lecture -->
  <line class="df-arrow" x1="320" y1="98" x2="120" y2="130" stroke="#3b5bdb" stroke-width="2"/>
  <polygon class="df-arrowhead" points="126,126 120,136 114,126" fill="#3b5bdb"/>
  <rect class="df-box" x="20" y="140" width="200" height="52" rx="8" fill="#fff" stroke="#868e96" stroke-width="1.5"/>
  <text class="df-box-text" x="120" y="162" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="#212529">Live lecture capture</text>
  <text class="df-box-text" x="120" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="600" fill="#3b5bdb">→ Otter.ai</text>

  <!-- Middle: PDFs / readings -->
  <line class="df-arrow" x1="320" y1="98" x2="320" y2="130" stroke="#3b5bdb" stroke-width="2"/>
  <polygon class="df-arrowhead" points="314,130 320,140 326,130" fill="#3b5bdb"/>
  <rect class="df-box" x="220" y="140" width="200" height="52" rx="8" fill="#fff" stroke="#868e96" stroke-width="1.5"/>
  <text class="df-box-text" x="320" y="162" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="#212529">PDFs &amp; course materials</text>
  <text class="df-box-text" x="320" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="600" fill="#3b5bdb">→ NotebookLM</text>

  <!-- Right: Recall / exams -->
  <line class="df-arrow" x1="320" y1="98" x2="520" y2="130" stroke="#3b5bdb" stroke-width="2"/>
  <polygon class="df-arrowhead" points="514,126 520,136 526,126" fill="#3b5bdb"/>
  <rect class="df-box" x="420" y="140" width="200" height="52" rx="8" fill="#fff" stroke="#868e96" stroke-width="1.5"/>
  <text class="df-box-text" x="520" y="162" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="#212529">Closed-book recall</text>
  <text class="df-box-text" x="520" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="600" fill="#3b5bdb">→ RemNote</text>

  <!-- Bottom note -->
  <rect x="100" y="220" width="440" height="40" rx="6" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
  <text x="320" y="245" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#495057">Most students end up using two of these together</text>
</svg>
</div>

## Google NotebookLM — still the default free pick

NotebookLM (now often labeled Gemini Notebook inside Google's ecosystem) remains the tool I reach for first when the material is already digital. You create a notebook, upload the PDFs, slide decks, and notes that actually belong to the course, and every answer is forced to cite a passage from those sources. As of September 2026 the free Standard tier still gives you 100 notebooks, 50 sources per notebook, and daily chat and Audio Overview limits that are high enough for one or two heavy study sessions a day.

The Audio Overview feature is the part that surprised me. It turns a dense chapter plus lecture slides into a short podcast-style conversation between two voices. I used it on a 40-page methods chapter the night before a methods exam. It was not perfect, but it was far more usable than re-reading the PDF at 1 AM. The citations stay visible, so you can jump straight back to the exact paragraph when something sounds off.

It does not record live lectures for you, and it does not run a spaced-repetition schedule. Those are real gaps. But for the core student problem — "I have a pile of course materials and I need to understand them before the exam" — nothing free comes closer.

## RemNote — when the exam rewards recall

If your courses test discrete facts (anatomy, organic chemistry reactions, language vocabulary, case law citations), NotebookLM alone is not enough. You need spaced repetition, and you need the flashcards to live in the same place as the notes.

RemNote does that. Any line in a note can become a flashcard. The free plan gives unlimited notes and flashcards with unlimited device sync. The limits sit on the surrounding features: three annotated PDFs, five image-occlusion cards, and a small monthly pool of AI credits. That is enough to test the workflow. Pro is $8 a month billed yearly; Pro with AI (the tier that generates cards and quizzes from PDFs at scale) is $18 a month billed yearly. Student discounts appear on the pricing page at times, but the free tier is already usable for pure flashcard work.

I ran the same dense lecture notes through both NotebookLM and RemNote. NotebookLM gave me a clean study guide with citations. RemNote turned the same notes into a queue of cards that resurfaced the next day and the day after. For closed-book exams that is the difference between "I understand the chapter" and "I can still retrieve the exact definition under pressure."

## Otter.ai — when the lecture is the source

Some courses still live or die by what the professor says in the room. For those, you need live transcription that does not force you to type while listening.

Otter's free plan gives 300 transcription minutes a month with a 30-minute cap per conversation. That is tight for a full lecture load. The Pro plan drops to roughly $8.33 a month on annual billing, and students with a .edu address get a further 20% discount (around $6.67 a month on the annual plan as of late 2026). The transcript is searchable, speaker-labeled, and comes with a summary. You can then export the text into NotebookLM or RemNote for the study layer.

I used it on two 75-minute seminars. The accuracy was high enough that I stopped taking manual notes after the first ten minutes and just marked timestamps for later. The limitation is that Otter stops at the transcript and summary. It does not generate flashcards or force the AI to stay inside your course materials the way NotebookLM does. You still have to move the output somewhere else.

## Notion AI and the rest of the field

Notion remains excellent for semester organization — databases for assignments, linked pages for each course, task lists that actually get checked off. Students with a school email can often get the Plus plan free. The AI features, however, are more limited on the free and student tiers than the marketing suggests, and they are not source-grounded the way NotebookLM is. I treat Notion as the container and NotebookLM as the study engine.

Obsidian with AI plugins gives you full local ownership and is free, but the setup cost is real. Most undergraduates I know abandon it after a week of fighting plugins. It is better left for people who already live in Markdown.

Several newer "all-in-one study" apps (various lecture-to-flashcard tools) appear in every 2026 roundup. Most of them require a paid plan before the useful limits kick in, and several of the glowing reviews are written by the companies themselves. I stuck to tools whose free tiers I could actually finish a course with.

## How the pieces fit together

A practical stack that costs nothing for most of the semester looks like this:

<div class="aistack-diagram">
<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Practical student stack workflow">
  <!-- Step 1 -->
  <rect class="tl-node" x="20" y="40" width="140" height="70" rx="10" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="2"/>
  <text x="90" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="600" fill="#1864ab">1. Capture</text>
  <text x="90" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#495057">Otter or phone</text>

  <!-- Arrow -->
  <line class="tl-line" x1="160" y1="75" x2="200" y2="75" stroke="#1c7ed6" stroke-width="2"/>
  <polygon class="tl-arrowhead" points="200,69 212,75 200,81" fill="#1c7ed6"/>

  <!-- Step 2 -->
  <rect class="tl-node" x="212" y="40" width="140" height="70" rx="10" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="2"/>
  <text x="282" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="600" fill="#1864ab">2. Ground</text>
  <text x="282" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#495057">NotebookLM</text>

  <!-- Arrow -->
  <line class="tl-line" x1="352" y1="75" x2="392" y2="75" stroke="#1c7ed6" stroke-width="2"/>
  <polygon class="tl-arrowhead" points="392,69 404,75 392,81" fill="#1c7ed6"/>

  <!-- Step 3 -->
  <rect class="tl-node" x="404" y="40" width="140" height="70" rx="10" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="2"/>
  <text x="474" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="600" fill="#1864ab">3. Drill</text>
  <text x="474" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#495057">RemNote cards</text>

  <!-- Bottom caption -->
  <text x="320" y="150" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#868e96">Free for most of the semester · pay only when a tier runs out</text>
  <text x="320" y="170" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#adb5bd">Capture → Ground in your sources → Force recall</text>
</svg>
</div>

- Record or import the lecture → Otter (or your phone's voice memos if the free minutes run out).
- Dump slides, PDFs, and the cleaned transcript into a NotebookLM notebook per course.
- Generate the study guide and Audio Overview there.
- For any course that tests recall, push the key definitions and mechanisms into RemNote and let the spaced-repetition schedule do its job.

You only pay when one of those free tiers stops being enough. For many students that never happens.

## The honest limits

None of these tools replace the work of understanding the material. NotebookLM will happily summarize a chapter you never read; the summary will still be useless if you cannot explain it yourself. RemNote will surface the card, but only if you wrote a card worth remembering. The AI removes the friction of turning raw course material into reviewable form. It does not remove the need to think.

Privacy is another real constraint. Everything you upload to NotebookLM or Otter sits on someone else's servers. For most undergrad coursework that is fine. For anything involving patient data, proprietary research, or sensitive personal notes, local tools (Obsidian + offline models) are safer even if they are slower.

<div class="verdict">
<p class="verdict-label">VERDICT</p>
<p>
Start with Google NotebookLM. It is free, source-grounded, and good enough for the majority of university reading and revision. Add RemNote the moment a course starts testing pure recall. Use Otter only for the lectures you cannot afford to miss. Everything else is optional until one of those three stops solving the actual problem in front of you.
</p>
</div>

## Sources

- [NotebookLM free plan limits and Google AI tiers — multiple independent checks of Google's published limits, July–September 2026](https://dailyaifixs.com/blog/notebooklm-free-plan-2026-what-s-the-real-catch)
- [RemNote pricing page (Free / Pro $8/mo yearly / Pro with AI $18/mo yearly) — remnote.com/pricing, checked September 2026](https://www.remnote.com/pricing)
- [Otter.ai pricing and student discount — otter.ai/pricing and official student offer, 2026](https://otter.ai/pricing)
- [AI Study Pilot comparison of student note tools including NotebookLM and RemNote, updated June 2026](https://aistudypilot.com/articles/best-ai-note-taking-tools-students)
