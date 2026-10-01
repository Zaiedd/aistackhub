---
title: "Copy-and-paste was the only flashcard method that didn't help. That's what AI does"
description: "The evidence on self-made flashcards is unusually clean: generating your own beat using premade decks in five of six experiments, but only if you paraphrased. Copy-and-paste was the single method where generating conferred no advantage. Here is why that makes AI flashcard generators structurally weaker than they sound, and what the measured error rate is."
date: "2026-10-01"
section: "ai-for-students"
tags: ["spaced-repetition", "flashcards", "study-methods", "learning-science", "anki", "quizlet", "generative-learning"]
draft: false
---

Ask a vendor whether you should generate your own flashcards and the answer is always yes, because the research behind it is genuinely good. Six experiments with undergraduates found that students learned more from self-generated flashcards than from premade ones in five of the six. Then look at how those students made their cards and the finding gets more specific and less convenient. Paraphrasing was the most effective method. Example generation came next. Copy-and-paste was the worst, and it was the only method where generating conferred no significant advantage at all.

An AI flashcard generator does not paraphrase. It copies your lecture slides into question form. That is the method the strongest evidence in this area found to be the one that does nothing.

## What the learning science actually rates

Before the AI question, the underlying technique is not in dispute. Dunlosky and colleagues reviewed ten common learning techniques and assigned each a utility rating based on how well it supported learning across different materials, ages, and abilities. Two techniques came out on top.

| Technique | Utility rating in Dunlosky et al. 2013 |
| --- | --- |
| Practice testing (retrieval practice) | High |
| Distributed practice (spaced repetition) | High |
| Elaborative interrogation | Moderate |
| Self-explanation | Moderate |
| Interleaved practice | Moderate |
| Summarization | Low |
| Highlighting | Low |
| Rereading | Low |
| Keyword mnemonic | Low |
| Imagery use for text learning | Low |

The two high-utility techniques are the two things a flashcard app does. The interesting part is the bottom of the table: summarizing and highlighting, which is what most students actually do with AI, are rated low utility because they feel like studying without producing the testable retrieval that makes memory stick. The monograph also treats whether a student studies alone or in a group as one of its learning conditions, so the group-project version of this is inside the evidence rather than an untested extension of it.

This is why every serious AI study tool is built on top of an app like Anki or Quizlet rather than replacing one. The scheduler is the part that is solved. The question worth investigating is what you feed it.

## The generation paradox

Pan and colleagues published the work in the Journal of Applied Research in Memory and Cognition in December 2023, and the finding has a clean internal logic. The advantage of self-generation was roughly 10% better test performance in a typical experiment, which Pan described as about a letter grade, and reached 25% in one experiment. The explanation offered is generative learning: curating, organizing, and elaborating forces extra cognitive processing that premade decks skip.

That mechanism only fires if you do the work. The comparison across creation methods is the part that matters here.

- Paraphrasing: most effective, produced a clear advantage
- Example generation: effective, behind paraphrasing
- Copy-and-paste: least effective, and the only method where generating conferred no significant advantage

Pan also notes that premade digital sets sometimes contain inaccuracies or outright misinformation, which he frames as an argument for making your own cards. Both halves of that point survive contact with the AI version. The accuracy problem is real, and so is the fact that outsourcing card creation removes the exact cognitive step that made creation valuable.

One caveat on the numbers: the percentages above come from trade-press reporting of the paper rather than the paper itself, so treat them as reported rather than independently confirmed.

## How wrong are AI-generated cards, actually

The error rate is measurable, and it is not negligible. Law and colleagues had 24 participants rate 100 AI-generated and 100 human-generated multiple-choice questions.

| Measure | AI-generated | Human-generated |
| --- | --- | --- |
| Factually incorrect | 6% | 4% |
| Irrelevant to the topic | 6% | 0% |
| At an inappropriate difficulty | 14% | 1% |
| Difficulty index | 0.78 ± 0.22 | 0.69 ± 0.23 |
| Discrimination | 0.22 | 0.26 |
| Internal consistency (KR-20) | 0.75 | 0.83 |
| Production time | 24.5 person-hours | 96 person-hours |

The difficulty result is the one students would notice first. Fourteen percent of AI items sat at the wrong level for the material, which is what makes a deck feel like it is going nowhere: cards that are too easy produce the feeling of progress, and cards that are too hard produce the feeling of failure. The discrimination numbers are the ones that matter for an exam, where you need cards that separate the things you know from the things you do not, and AI items were close to indistinguishable on that measure despite generating fifty times faster.

The systematic-review picture is weaker than the headline study. Riehm and colleagues examined 15 studies of AI-generated multiple-choice questions and found only five made direct human-versus-AI comparisons, eight were administered by students rather than independent assessors, and there were no randomized controlled trials. They rated the certainty of the reported comparisons as very low, with pooled accuracy of 0.73.

So the honest summary is: the error rate is real and documented, the general claim that AI questions are broadly worse is not yet well evidenced, and one peer-reviewed 2025 study of an AI learning-card system with spaced repetition did report significant improvements in retention alongside expert review flagging accuracy and relevance as strengths. That last result supports the direction of effect. It does not settle the error rate, because effect sizes are not in the abstract.

## The perception trap

There is a reason people keep generating cards anyway. Denny and colleagues compared LLM-generated study resources against student-generated ones in an introductory programming course, using blind evaluation where both sides received identical exemplars. Students rated the AI resources as equivalent in quality to the ones their peers made.

Two details in that same paper matter more than the headline. AI resources closely mirrored the exemplars they were given, while student resources showed greater variety in content length and syntax. And the authors explicitly flag long-term impact on learning outcomes as still unknown, calling for further research. Equal perceived quality with lower variety is a warning sign dressed as a compliment.

There is a second trap in how the workflow feeds the model. Feeding an entire semester of readings into one generation run asks the model to find the relevant material across a very long context, which is exactly the condition under which retrieval degrades. The work on this, known as the lost-in-the-middle problem, shows that multi-document retrieval quality drops when relevant information sits in the middle of a long context rather than at the beginning or end. The practical implication is boring and effective: generate lecture by lecture, then check that the deck covers the topics you were actually tested on.

## The costs, which turn out to favor the boring option

The pricing is clean and it is not close. Anki and AnkiDroid are free, and AnkiWeb synchronization is free. AnkiMobile is a one-time purchase covering up to five devices under one Apple ID, with Apple setting regional prices. Quizlet's own pricing page lists Plus at $2.99 per month or $35.99 per year, and Plus Unlimited at $3.75 per month or $44.99 per year.

For a group of five people taking the same course, that difference is the whole argument. One person builds the deck, everyone else schedules against it, and the shared-deck cost is the free tier rather than five subscriptions. Five Quizlet Plus accounts is $17.95 per month if billed monthly, or the same arithmetic lands at about $180 for the year if everyone pays annually. One AnkiWeb account sharing one deck is free, and the deck is a file you control.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Two routes to the same deck</text>
  <rect x="20" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="80" class="df-box-text" text-anchor="middle">Read the material</text>
  <text x="110" y="97" class="df-box-text" text-anchor="middle">before anything else</text>
  <rect x="240" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Write the paraphrase</text>
  <text x="330" y="97" class="df-box-text" text-anchor="middle">the step that pays off</text>
  <rect x="460" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="80" class="df-box-text" text-anchor="middle">Let the app schedule</text>
  <text x="550" y="97" class="df-box-text" text-anchor="middle">where AI adds nothing</text>
  <line x1="204" y1="85" x2="234" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="85" x2="454" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="210" class="df-box-text" text-anchor="middle">Paste it all in</text>
  <text x="110" y="227" class="df-box-text" text-anchor="middle">skip the reading</text>
  <rect x="240" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="210" class="df-box-text" text-anchor="middle">Generate the cards</text>
  <text x="330" y="227" class="df-box-text" text-anchor="middle">copy-and-paste, automated</text>
  <rect x="460" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="210" class="df-box-text" text-anchor="middle">Same app, same schedule</text>
  <text x="550" y="227" class="df-box-text" text-anchor="middle">no processing gained</text>
  <line x1="204" y1="215" x2="234" y2="215" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="215" x2="454" y2="215" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="122" x2="330" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
  <text x="344" y="155" class="df-box-text">the step AI removes</text>
  <defs>
    <marker id="arc1" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Use AI to build a deck you already understand, not to replace the reading that produces understanding. The evidence is unusually specific about why: practice testing and distributed practice are the two highest-utility techniques in the learning literature, generating your own cards beat using premade ones in five of six experiments, and within that, paraphrasing was the most effective method while copy-and-paste was the only one where generating conferred no measurable advantage. An AI generator is a very fast copy-and-paste, so the fastest path to a working deck is the one that keeps the step worth keeping: read first, write the paraphrase yourself, then let the scheduler do what it is genuinely good at. Budget for one person owning fact-checking, because 6% of AI items were factually incorrect, 6% irrelevant, and 14% at the wrong difficulty, and a systematic review of 15 studies rates the broader human-versus-AI comparison very low certainty. If you are in a group, build one shared deck and split the fact-checking rather than splitting five subscriptions, since the free tier covers everything the paid tiers are selling. Treat any app that reports a large test-score gain for AI-generated cards as making a claim the peer-reviewed evidence does not support.
  </p>
</div>

## Sources

- [Improving Students' Learning With Effective Learning Techniques: Ten Years of Scientific Progress from Psychological Science in the Public Interest (Dunlosky et al., 2013)](https://www.psychologicalscience.org/journals/pspi/1529100612453266)
- [Tech tools provide flashcards to students — that's not a good thing, says new research (Tech & Learning, reporting Pan et al., JARMAC, December 2023)](https://www.techlearning.com/news/tech-tools-provide-flashcards-to-students-thats-not-a-good-thing-says-new-research)
- [Assessing the Quality of LLM-Generated Multiple-Choice Questions (Law et al., BMC Medical Education 2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11806894)
- [Evaluating the quality of AI-generated multiple-choice questions: a systematic review (Riehm et al., PLOS ONE)](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0340277)
- [LLM-Generated vs. Human-Generated Code Resources: A Comparison in Introductory Programming (Denny et al.)](https://arxiv.org/abs/2306.10509)
- [Lost in the Middle: How Language Models Use Long Contexts (Liu et al.)](https://arxiv.org/abs/2307.03172)
- [Lost in the Middle: How Language Models Use Long Contexts (TACL 2024, peer-reviewed version)](https://aclanthology.org/2024.tacl-1.9/)
- [An AI-powered learning cards system with spaced repetition (Bachiri, Mouncif & Bouikhalene, Knowledge Management & E-Learning 17(3), 2025)](https://eric.ed.gov/?id=EJ1481879)
- [Anki official site — free desktop, Android, and AnkiWeb sync](https://apps.ankiweb.net/)
- [Why AnkiMobile costs more than a typical mobile app](https://faqs.ankiweb.net/why-does-ankimobile-cost-more-than-a-typical-mobile-app.html)
- [Quizlet Plus and Plus Unlimited pricing](https://quizlet.com/upgrade?showPlus)