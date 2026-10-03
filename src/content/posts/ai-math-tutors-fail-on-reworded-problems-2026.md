---
title: "Your AI tutor solved the same math problem twice. The second answer was wrong"
description: "Apple researchers rebuilt 100 grade-school math problems into templates and generated 5,000 variants, then ran 25 state-of-the-art models against them. The problems needed identical reasoning, yet accuracy swung by more than 12 points between easy and hard versions of the same question, and adding one sentence that changes nothing cost some models over 65% of their accuracy. Few-shot examples did not fix it."
date: "2026-10-03"
section: "ai-for-students"
tags: ["math", "reasoning", "benchmarks", "gsm8k", "hallucination", "study-tips", "llm"]
draft: false
---

Ask a model the same word problem twice with different numbers and you will often get two different answers. That sounds like an exaggeration until you see how badly it fails.

Researchers at Apple took 100 grade-school math problems from the GSM8K benchmark, rewrote each one as a symbolic template with variables and constraints, and then generated 50 versions of every template, giving 5,000 problems in total. The reasoning required to solve a problem was identical across all 50. Only the names and the numbers changed. Twenty-five models were then run over the whole set under an 8-shot chain-of-thought setup, from 2B-parameter open models up to GPT-4o and o1-preview.

The result was not noise around a correct answer. It was a distribution, and a wide one.

## The spread on identical problems

| Model | Gap between its worst and best version of the same 50 questions |
| --- | --- |
| Phi-3.5-mini | about 15 points |
| Gemma2-9B | more than 12 points |

Neither number is a rounding error. These are the same questions with the same logic, asked in the same sitting.

The more uncomfortable finding was about the original test set. For 21 of the 25 models, the score on the published GSM8K questions sat more than one standard deviation away from the centre of that model's own distribution of freshly generated variants, and usually on the high side. A grade-school problem set that has been public since 2021 and used to train and benchmark every model since is, in the authors' words, a candidate for data contamination. If your score on it is partly recall, it was never measuring reasoning.

## Names are noise. Numbers are the problem

The authors split the edits in two: change only the proper names, or change only the numerical values. Changing Sophie to a different name barely moves the distribution. Changing 31 blocks to 48 blocks moves it a lot.

That distinction matters for how you use these tools. If a model gets a problem right and you swap the currency or the quantities, you have not changed the difficulty, and you have no reason to expect the same answer.

## One sentence that changes nothing costs two thirds of the score

The sharpest test was GSM-NoOp. The authors took the same templates and added a clause that looked relevant but contributed nothing to the solution.

The example that makes this concrete is about kiwis. Oliver picks 44 kiwis on Friday, 58 on Saturday, and double Friday's number on Sunday, "but five of them were a bit smaller than average". The answer is 44 plus 58 plus 88, because the size of five fruit is irrelevant. GPT-4 and o1-mini both subtracted the 5 anyway, because their training data is full of problems where a stray number becomes an operation.

| Change made to the problem | What happened |
| --- | --- |
| Only the names change | Small shift, model is broadly stable |
| Only the numbers change | Clear drop in accuracy, much wider spread |
| Add one irrelevant clause | Drops of up to 65%; Phi-3-mini lost more than 65% |
| Add a second irrelevant clause | Worse still |

The pattern was consistent: accuracy fell and variance rose as clauses were added, across every model tested. The models also consistently misread "discount" as multiplication regardless of context.

## Showing the model an example does not help

The obvious fix is to teach it, and the authors tried. Two setups: eight worked examples of the identical question showing the correct chain of reasoning, and eight different questions that all shared the same irrelevant-clause trap.

Neither recovered the lost accuracy. In the same-question condition the results stayed within a standard deviation of the broken run, and for Llama-3-8B the other condition performed no better than no examples at all. They also noticed that some models that score worse on the standard benchmark do dramatically better when shown worked examples of the trap, which is not what a reasoning system should look like.

<div class="aistack-diagram">
<svg viewBox="0 0 660 290" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Same reasoning, four versions</text>
  <rect x="20" y="52" width="145" height="70" rx="8" class="df-box"/>
  <text x="92" y="76" class="df-box-text" text-anchor="middle">Original</text>
  <text x="92" y="95" class="df-box-text" text-anchor="middle">names, numbers</text>
  <text x="92" y="112" class="df-box-text" text-anchor="middle">as published</text>
  <rect x="178" y="52" width="145" height="70" rx="8" class="df-box"/>
  <text x="250" y="76" class="df-box-text" text-anchor="middle">Names swapped</text>
  <text x="250" y="95" class="df-box-text" text-anchor="middle">stable</text>
  <text x="250" y="112" class="df-box-text" text-anchor="middle">small shift</text>
  <rect x="336" y="52" width="145" height="70" rx="8" class="df-box"/>
  <text x="408" y="76" class="df-box-text" text-anchor="middle">Numbers swapped</text>
  <text x="408" y="95" class="df-box-text" text-anchor="middle">accuracy drops</text>
  <text x="408" y="112" class="df-box-text" text-anchor="middle">spread widens</text>
  <rect x="494" y="52" width="146" height="70" rx="8" class="df-box"/>
  <text x="567" y="76" class="df-box-text" text-anchor="middle">One irrelevant</text>
  <text x="567" y="95" class="df-box-text" text-anchor="middle">clause added</text>
  <text x="567" y="112" class="df-box-text" text-anchor="middle">up to 65% down</text>
  <line x1="169" y1="87" x2="174" y2="87" class="df-arrow" marker-end="url(#arc2)"/>
  <line x1="327" y1="87" x2="332" y2="87" class="df-arrow" marker-end="url(#arc2)"/>
  <line x1="485" y1="87" x2="490" y2="87" class="df-arrow" marker-end="url(#arc2)"/>
  <rect x="20" y="176" width="620" height="76" rx="8" class="df-box"/>
  <text x="330" y="203" class="df-box-text" text-anchor="middle">Few-shot examples do not repair it</text>
  <text x="330" y="224" class="df-box-text" text-anchor="middle">8 worked examples of the same question: still within one standard deviation</text>
  <text x="330" y="243" class="df-box-text" text-anchor="middle">8 different questions with the same trap: no better than showing nothing</text>
  <line x1="408" y1="126" x2="408" y2="172" class="df-arrow" marker-end="url(#arc2)"/>
  <defs>
    <marker id="arc2" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Do not treat a correct AI answer on a standard math benchmark as evidence that the model reasoned, because the paper behind the numbers above shows the same model misses on a reworded copy of the same question. Apple's GSM-Symbolic rebuilt 100 GSM8K problems as templates, generated 5,000 variants where the required reasoning was identical, and found the spread between a model's easiest and hardest version of the same question reached about 15 points for Phi-3.5-mini and more than 12 for Gemma2-9B. Names barely matter and numbers matter enormously, which is why a right answer on your homework sheet says nothing about whether the same method works on next week's numbers. The result you should actually quote is the irrelevant-clause test: adding one sentence that contributes nothing to the solution cost models up to 65% of their accuracy, Phi-3-mini lost more than 65%, and the models reliably turned a clause about small kiwis into a subtraction and the word discount into a multiplication, because their training data is full of stray numbers that became operations. Worked examples are not the repair, because eight solved examples of the identical problem left results inside one standard deviation of the broken run, and eight different questions carrying the same trap did no better than no examples at all. Treat published benchmark scores with suspicion as well, since for 21 of 25 models the official GSM8K score sat more than one standard deviation from the centre of that model's own distribution and usually on the flattering side, which is what data contamination on a public test set looks like. What to do instead is cheap and immediate: change the numbers in any problem before you accept the method, delete or paraphrase any sentence that does not affect the calculation, and check the answer yourself against the actual numbers you were given rather than the ones the model invented. Use the tool for the method and the bookkeeping, never for the final number.
  </p>
</div>

## Sources

- [Mirzadeh et al., GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models, arXiv 2410.05229 (v2, 27 August 2025)](https://arxiv.org/abs/2410.05229)
- [Full text of the GSM-Symbolic paper, including the GSM-NoOp results and the GSM-Symbolic-M1/Plus-1/Plus-2 difficulty variants](https://arxiv.org/html/2410.05229v2)
- [GSM-Symbolic templates and generated data (apple/ml-gsm-symbolic)](https://github.com/apple/ml-gsm-symbolic)
- [Cobbe et al., Training Verifiers to Solve Math Word Problems (the original GSM8K dataset)](https://arxiv.org/abs/2110.14168)