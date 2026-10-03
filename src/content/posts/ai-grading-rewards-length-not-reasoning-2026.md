---
title: "An AI grader agreed with human experts 85% of the time, then failed a copy-paste trick 91% of the time"
description: "The most-cited study of AI grading put 80 multi-turn questions to GPT-4 and 58 expert annotators. GPT-4 matched human preference 85% of the time, above the 81% two humans managed. But when researchers took an answer that was already correct, added a redundant restatement of it at the top, and re-judged, Claude and GPT-3.5 were fooled 91% of the time, every judge favoured whichever answer appeared first, and on maths a reference answer cut the judge's failure rate from 70% to 15% while plain step-by-step reasoning left 6 failures in 20."
date: "2026-10-03"
section: "ai-for-students"
tags: ["grading", "assessment", "llm-as-judge", "gpt-4", "academic-integrity", "bias", "proctoring"]
draft: false
---

If your essay is marked by an AI model, the most useful thing to know is not how accurate the model is. It is that the model's accuracy is not the thing being measured, and that length is being measured whether you like it or not.

Zheng and colleagues built the reference study of this in 2023, and it is still the one every claim about AI grading traces back to. They created MT-bench, 80 carefully written multi-turn questions across eight categories including writing, roleplay, extraction, reasoning, maths, coding and two kinds of knowledge. Six models answered all 80. Then 58 expert-level human annotators each judged at least 20 random questions, producing around 3,000 human votes. They repeated the exercise on Chatbot Arena, sampling 3,000 single-turn votes from about 30,000 collected in a month.

The headline number is genuinely good news, and it is also the least interesting part.

## The agreement number everyone quotes

| Comparison, same question, forced preference | GPT-4 vs humans | Humans vs each other |
| --- | --- | --- |
| MT-bench, first turn, no ties allowed | 85% | 81% |
| MT-bench, second turn, no ties allowed | 85% | 82% |
| Chatbot Arena, no ties allowed | 87% | not reported |
| MT-bench, ties allowed | 66% | 63% |
| Chatbot Arena, ties allowed | 64% | not reported |

So a strong judge is about as reliable as a human, and the paper reports that humans changed their own minds when shown the model's judgment 34% of the time, and considered it reasonable 75% of the time. Agreement also rose from 70% toward nearly 100% as the quality gap between two answers widened, which is the useful detail: the model is reliable at spotting a landslide and unreliable at separating two good answers.

## The copy-paste trick

Here is how they broke it. They selected 23 answers from MT-bench that contained a numbered list, asked GPT-4 to rephrase that list without adding any new information, and prepended the rephrased version to the original.

Nothing was added to the argument. The content was identical. The answer was simply longer and repeated itself at the top.

| Judge | Failure rate under the redundant-restatement attack |
| --- | --- |
| Claude-v1 | 91.3% |
| GPT-3.5 | 91.3% |
| GPT-4 | 8.7% |

Two of the three judges were fooled nine times in ten by a duplicated list. GPT-4 largely resisted, which is why the paper's verdict is that all models may be prone to verbosity bias but GPT-4 defends much better.

Read that table as a grading policy, not a benchmark result. If a language model marks your work, and your work can be made to repeat a claim near the top, then repetition is a gradeable feature. And notice the asymmetry: the attack was available to everyone, the defence was not.

## Every judge preferred whatever came first

The paper also measured position bias and found it in all of them, with most judges favouring the first answer. Under a swap test, only GPT-4 produced a consistent verdict more than 60% of the time.

This is why the two agreement rates above differ so much. When a tie is allowed, agreement drops to 66% for GPT-4 and 64% on Arena. A judge that has a favourite chair is much harder to pin down than the single headline number suggests.

## Two more findings worth knowing

Self-preference was real but unproven, which is more interesting than either. GPT-4 rated itself 10% higher, Claude-v1 rated itself 25% higher, and GPT-3.5 did not prefer itself at all. The authors concluded they could not determine whether self-enhancement bias existed.

On maths, prompting mattered a great deal. They graded ten problems where an incorrect answer could be passed as correct, testing LLaMA-13B against Vicuna-13B in both positions.

| Prompt given to the judge | Failures out of 20 |
| --- | --- |
| Default | 14, which is 70% |
| Chain-of-thought, answer the question first, then grade | 6, which is 30% |
| Reference answer supplied in the prompt | 3, which is 15% |

Chain-of-thought more than halved the failures. The reference answer was better still, which is the number the paper leads with. And the authors found the specific flaw in the chain-of-thought version: asked to solve the problem first, the judge frequently reproduced the same mistake as the answer it was grading, so the reasoning step did not protect it from being misled by the context.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">What an LLM grader actually rewards</text>
  <rect x="20" y="52" width="196" height="72" rx="8" class="df-box"/>
  <text x="118" y="78" class="df-box-text" text-anchor="middle">Looks like reasoning</text>
  <text x="118" y="98" class="df-box-text" text-anchor="middle">85% agreement, above</text>
  <text x="118" y="115" class="df-box-text" text-anchor="middle">the 81% of two humans</text>
  <rect x="232" y="52" width="196" height="72" rx="8" class="df-box"/>
  <text x="330" y="78" class="df-box-text" text-anchor="middle">Is just long</text>
  <text x="330" y="98" class="df-box-text" text-anchor="middle">a duplicated list wins</text>
  <text x="330" y="115" class="df-box-text" text-anchor="middle">91.3% of the time</text>
  <rect x="444" y="52" width="196" height="72" rx="8" class="df-box"/>
  <text x="542" y="78" class="df-box-text" text-anchor="middle">Is on the left</text>
  <text x="542" y="98" class="df-box-text" text-anchor="middle">every judge prefers</text>
  <text x="542" y="115" class="df-box-text" text-anchor="middle">the first answer shown</text>
  <rect x="20" y="178" width="300" height="72" rx="8" class="df-box"/>
  <text x="170" y="204" class="df-box-text" text-anchor="middle">Default prompt: 14 of 20</text>
  <text x="170" y="224" class="df-box-text" text-anchor="middle">step-by-step: 6 of 20</text>
  <text x="170" y="241" class="df-box-text" text-anchor="middle">but it repeats the same mistake</text>
  <rect x="340" y="178" width="300" height="72" rx="8" class="df-box"/>
  <text x="490" y="204" class="df-box-text" text-anchor="middle">Gives a reference answer: 3</text>
  <text x="490" y="224" class="df-box-text" text-anchor="middle">failure rate falls</text>
  <text x="490" y="241" class="df-box-text" text-anchor="middle">from 70% to 15%</text>
  <line x1="232" y1="128" x2="180" y2="174" class="df-arrow" marker-end="url(#arc3)"/>
  <line x1="444" y1="128" x2="470" y2="174" class="df-arrow" marker-end="url(#arc3)"/>
  <defs>
    <marker id="arc3" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Stop asking whether an AI grader is accurate and start asking what it rewards, because the reference study answers the first question well and the second question badly. GPT-4 agreed with 58 expert annotators on 85% of MT-bench comparisons, above the 81% two humans achieved between themselves, and humans judged its verdicts reasonable 75% of the time and changed their own minds 34% of the time, so the model is a competent grader in the sense the headline claims. It is also reliably rewardable, and you should know the three mechanisms. First, verbosity: researchers took 23 correct answers, restated the numbered list without adding any information, and prepended it, and Claude-v1 and GPT-3.5 were fooled 91.3% of the time while GPT-4 held at 8.7%. Second, position: all judges showed position bias, most favouring the first answer, and only GPT-4 was self-consistent above 60%, which is exactly why agreement falls from 85% to 66% once ties are permitted. Third, prompt design: on a maths grading test the default prompt failed 14 times out of 20, asking the judge to answer the question before grading it cut that to 6, and supplying a reference answer cut it to 3, so the failure rate falls from 70% to 15% and the caveat is that the chain-of-thought judge often reproduced the very mistake it was grading. Agreement also rises toward nearly 100% when one answer is clearly better, which means the model is dependable at gross rankings and unreliable at separating two competent attempts, and that is precisely the range where grades are argued over. So write accordingly. Put your actual claim and your actual evidence early, because position and length are free points you can control, and do not pad with a summary that repeats your introduction, because that is the exact manipulation that beat most judges nine times out of ten. If you can appeal a grade, appeal the criterion rather than the verdict: ask what rubric was used and whether a reference answer was supplied, because that single change moved the failure rate by 55 percentage points in this study, far more than any model upgrade.
  </p>
</div>

## Sources

- [Zheng et al., Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena, arXiv 2306.05685 (NeurIPS 2023 Datasets and Benchmarks Track)](https://arxiv.org/abs/2306.05685)
- [Full text of the paper, including Tables 2 to 6 for position bias, the repetitive-list attack, and agreement rates](https://arxiv.org/html/2306.05685v4)