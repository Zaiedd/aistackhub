---
title: "43% vs 45%: AI can write your assertions. It cannot write your test"
description: "Two 2026 results about AI-written tests look contradictory and are not. Given a test prefix and the methods called, models reach 43% mutation score against 45% for human-written oracles on a contamination-free dataset. Asked to write the whole test for a real project, the same models cover about a third of the lines. Here is where the pipeline breaks, and why coverage is the wrong metric to check."
date: "2026-10-01"
section: "ai-for-developers"
tags: ["testing", "mutation-testing", "coverage", "llm", "unit-tests", "test-generation", "software-quality"]
draft: false
---

Two results about AI-written tests appeared close together in 2026 and appear to contradict each other. In one, models wrote test assertions that scored 43% mutation coverage against 45% for tests written by humans. In the other, some generated test suites reached 100% line coverage while killing 4% of the mutants planted in the code. Both can be true, and the gap between them is the most useful thing published about AI test generation, because it tells you which part of the job has been solved and which part has not.

The part that has been solved is writing the assertion. The part that has not is everything required to get an assertion to run.

## An oracle is a smaller problem than a test

A test oracle is the part that decides pass or fail. Given a program and an input, the oracle decides whether the observed behaviour is correct. It is the intellectual content of the test, and it is separable from the scaffolding around it: choosing inputs, setting up state, stubbing dependencies, compiling, running.

Molinelli and colleagues published the strongest available measurement at ASE 2025 in a paper titled "Do LLMs Generate Useful Test Oracles? An Empirical Study with an Unbiased Dataset." The dataset is the point. Prior work used modest public benchmarks such as Defects4J, which the authors note are likely to be in the models' training data, which threatens the validity of the results. Molinelli's team used 13,866 test oracles from 135 Java projects that were created after the models' training cut-off dates, so the dataset is unbiased by construction.

On that data, LLM-generated oracles reached an average mutation score of 43% against 45% for human-designed oracles. Two points apart is not a win, and it is not a loss either.

The practical finding in the same paper is more actionable than the headline. The test prefix plus the methods called in the program under test provide enough information to generate good oracles, and additional code context does not bring relevant benefits. That is a direct instruction about prompting. If you are spending context feeding an agent the whole file so it can write an assertion, you are buying nothing. The stated limitation is complex oracles.

## The suite is where it collapses

Step back from assertions and ask the question a developer actually asks, which is generate the tests, and the numbers move an enormous distance.

| What you asked the model to do | Best verified result | Source |
| --- | --- | --- |
| Write assertions, given a test prefix and the called methods | 43% mutation score against 45% for humans | Molinelli et al., ASE 2025 |
| Write a full test for a real function | 40.21% mutation score, averaged across models | ULT (UnLeakedTestbench) |
| Write a test suite for a real codebase | 35.2% average line coverage, best model GPT-4o | TestGenEval |

TestGenEval was built on SWE-bench with 68,647 tests from 1,210 code and test file pairs across 11 well-maintained Python repositories. Its finding is that models struggle to generate high-coverage test suites, with the best model, GPT-4o, achieving an average coverage of only 35.2%. The attributed causes are specific and match what a developer would guess: models struggle to reason about execution, and they make frequent assertion errors when addressing complex code paths.

ULT attacks the contamination problem from the other direction. Its authors name the two flaws of existing benchmarks as data contamination and structurally simple function code, and build 3,909 curated function-level tasks from real-world Python with high cyclomatic complexity. Averaged across all models tested, results are 41.32% accuracy, 45.10% statement coverage, 30.22% branch coverage, and 40.21% mutation score, against 91.79%, 92.18%, 82.04%, and 49.69% on TestEval. The same benchmark run against a deliberately pre-leaked variant scores 47.07%, 55.13%, 40.07%, and 50.80%. That last comparison is the useful one: it is the difference between a model that has seen the test and a model that has not, and it is large enough to invalidate most published comparisons.

MultiFileTest then moves the difficulty up a level by testing multi-file codebases rather than single functions: 20 moderate-sized projects per language across Python, Java, and JavaScript, with eleven frontier models. Most frontier models show only moderate performance, and the error analysis finds that even Gemini-3.0-Pro produces basic but critical errors, specifically executability and cascade errors. It does not have a failure mode. It has several, and they are the mundane ones: code that does not compile, code that passes in isolation and fails when run with the rest of the suite.

The progression across the three regimes is the actual finding. A task that is nearly solved, a task that is about 40% solved, and a task that is about a third solved.

## Coverage is not a proxy for finding bugs

The reason these results look contradictory is that most teams measure the wrong thing, and the research literature has been unusually blunt about it.

MUTGEN, accepted by IEEE Transactions on Software Engineering, states the position directly: code coverage metrics such as line and branch coverage remain overly emphasized in reported research, despite being weak indicators of a test suite's fault-detection capability, and mutation score offers a more reliable and stringent measure. The paper's illustration is that some test suites achieve 100% coverage but only 4% mutation score. It also notes that tools like EvoSuite focus on maximizing coverage in the first place.

A test that executes a line and asserts nothing has executed the line. That is what 100% coverage with 4% mutation score means, and any team that has ever had a green build with a broken release already knows it.

Mutation score answers a different and more expensive question: if you deliberately broke this line, would a test fail? It is slower to compute and it is the only one of the two that corresponds to the thing you care about. MUTGEN evaluated on 204 subjects from two benchmarks and reports significantly outperforming both EvoSuite and vanilla prompt-based strategies on mutation score.

## The generated tests smell like everyone's tests

Coverage understates the problem because it says nothing about whether anyone will want to maintain the result. A large-scale analysis accepted at ACM Transactions on Software Engineering looked at 20,505 class-level suites from four models, GPT-3.5, GPT-4, Mistral 7B, and Mixtral 8x7B, alongside 972 method-level cases from TestBench, 14,469 EvoSuite tests, and 779,585 human-written tests from 34,635 open-source Java projects.

LLM-generated tests consistently manifest two smells: Assertion Roulette, where multiple assertions are packed into one test with no way to tell which one failed, and Magic Number Test, where unexplained literals appear in assertions. The patterns are strongly influenced by prompting strategy, context length, and model scale, which means they are at least partly controllable.

The finding that should stop you for a second is the comparison with human-written suites. The generated tests overlap with human-written tests in ways that raise concerns of potential data leakage from training corpora. The paper separates this from synthetic artifacts by contrasting against EvoSuite, which exhibits distinct generator-specific flaws, so the resemblance to human tests is not simply "all generators look alike."

## What industry actually measured

Meta published the only large-scale industrial deployment data in this space, through a system called ACH that takes mutation-guided generation into production. ACH was applied to 10,795 Android Kotlin classes across seven Meta platforms, generating 9,095 mutants and 571 privacy-hardening test cases. It also deploys an LLM-based equivalent mutant detection agent achieving precision of 0.79 and recall of 0.47, rising to 0.95 and 0.96 with simple pre-processing.

The human numbers are the ones to note. In Messenger and WhatsApp test-a-thons, engineers accepted 73% of the tests and judged 36% to be privacy relevant. Accepted is a judgement of usefulness, not a measurement of defect detection. The authors conclude that even when the tests do not directly tackle the specific concern, engineers find them useful for other benefits, which is a real and underrated property of generated tests.

On the other side, a replicated experiment by Ramler and colleagues, in which participants wrote unit tests for a Java system with seeded defects in a time-boxed session, found that LLM support significantly increases the number of unit tests generated, defect detection rates, and overall testing efficiency. The abstract publishes no effect sizes, so it supports the direction of the effect and not its magnitude.

The pattern across both is consistent. Generated tests help the person who has to read and maintain them. They do not substitute for the person deciding whether the suite would catch the bug that matters.

## The vendor benchmark, and why to discount it

One comparison is worth reading precisely because of who published it. Diffblue's March 2026 benchmark report compares its Testing Agent against a senior Java developer using Claude Code with Sonnet and Opus 4.6, across 8 Java repositories totalling 31,069 coverable lines, with all pre-existing tests deleted.

| Metric | Diffblue Testing Agent | Developer + Claude Code |
| --- | --- | --- |
| Average line coverage | 80.7% | 32.3% |
| Average mutation coverage | 61.3% | 24.2% |
| Average test strength | 81.8% | 73.9% |
| Lines of coverage per prompt | 3,884 | 67 |

Read the caveats first. The author is listed as Diffblue Marketing. Claude was the generation engine in both arms, so this measures orchestration rather than model quality, which the report itself concedes. The developer arm was capped at two hours or 20 prompts, and the report says the developer averaged 64 minutes per repository across 149 prompts, so the cap was not always the binding constraint. The authors describe the experience as constant agent supervision with diminishing returns.

Then read the internal contradictions, which are the more useful part. The executive summary states an average line coverage of only 36% with Claude, while the results table states 32.3%. The table states 3,884 lines per prompt, while the productivity section states 3,384 lines per developer minute and also 3,384 lines per prompt. And the headline productivity claim is 58x per prompt while a separate line claims 197x per developer minute for what the report describes as the same 3,384-to-20 comparison. These are not rounding differences. A benchmark report whose own prose and tables disagree about the control figure is not a benchmark you should budget against.

The earlier version of the same comparison, against Copilot with GPT-5 across Apache Tika, Halo, and Sentinel, reports Diffblue at 50% to 69% coverage against Copilot at 5% to 29%, with Copilot-generated tests failing to compile 12% of the time, an 88% average compilation success rate. That one also carries an inconsistent headline, claiming a 20x productivity advantage in the title and a 25x difference in the body of the same document. The range itself, 5% to 29% against a fixed set of three applications, is the tell: performance depends heavily on how closely the codebase resembles training data.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Which half of a generated test is the problem?</text>
  <rect x="20" y="52" width="280" height="66" rx="8" class="df-box"/>
  <text x="160" y="80" class="df-box-text" text-anchor="middle">The oracle: does this input pass?</text>
  <text x="160" y="97" class="df-box-text" text-anchor="middle">43% vs 45% for humans</text>
  <rect x="360" y="52" width="280" height="66" rx="8" class="df-box"/>
  <text x="500" y="80" class="df-box-text" text-anchor="middle">The scaffolding around it</text>
  <text x="500" y="97" class="df-box-text" text-anchor="middle">inputs, state, mocks, compiling</text>
  <rect x="20" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="210" class="df-box-text" text-anchor="middle">100% line coverage</text>
  <text x="110" y="227" class="df-box-text" text-anchor="middle">on the easy metric</text>
  <rect x="240" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="210" class="df-box-text" text-anchor="middle">4% mutation score</text>
  <text x="330" y="227" class="df-box-text" text-anchor="middle">on the real one</text>
  <rect x="460" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="210" class="df-box-text" text-anchor="middle">Both are the same suite</text>
  <text x="550" y="227" class="df-box-text" text-anchor="middle">reported twice</text>
  <line x1="160" y1="122" x2="110" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="500" y1="122" x2="550" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
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
    Stop measuring coverage and start measuring mutation score, then stop asking whether AI can write tests and start asking which part you want generated. Writing the assertion is now close to a solved subproblem: on 13,866 oracles from 135 Java projects created after the models' training cut-off dates, models reached 43% mutation score against 45% for human-written oracles, and the same paper finds that the test prefix plus the methods called are sufficient while extra code context buys nothing, which means the long-context prompting most teams are doing is wasted spend. Everything around the assertion is not solved: averaged across models on real functions, mutation score is 40.21%, and on real codebases the best model reaches 35.2% average line coverage, failing on execution reasoning and producing executability and cascade errors that are about compilation rather than judgment. The 100% coverage with 4% mutation score result is why the metric matters, and the fact that generated suites carry Assertion Roulette and Magic Number Test smells similar to human-written ones is a second reason to have someone own review. Use AI for the boring 80% of tests you were not going to write anyway, gate on mutation score rather than line coverage, and treat any vendor coverage percentage without a mutation figure beside it as decoration, particularly when the same report contradicts its own control numbers.
  </p>
</div>

## Sources

- [Do LLMs Generate Useful Test Oracles? An Empirical Study with an Unbiased Dataset (Molinelli et al., ASE 2025, pp. 278-290)](https://homes.cs.washington.edu/~mernst/pubs/neurosymbolic-oracles-ase2025-abstract.html)
- [TestGenEval: A Real World Unit Test Generation and Test Completion Benchmark (Jain, Synnaeve & Rozière)](https://arxiv.org/abs/2410.00752)
- [Benchmarking LLMs for Unit Test Generation from Real-World Functions (ULT / UnLeakedTestbench, Huang et al.)](https://arxiv.org/abs/2508.00408)
- [Mutation-Guided Unit Test Generation with a Large Language Model (MUTGEN, Wang et al., IEEE Transactions on Software Engineering)](https://arxiv.org/abs/2506.02954)
- [On the Diffusion of Test Smells in LLM-Generated Unit Tests (Ouédraogo et al., ACM TOSEM)](https://arxiv.org/abs/2410.10628)
- [MultiFileTest: A Multi-File-Level LLM Unit Test Generation Benchmark (Wang et al., ACL 2026 Findings)](https://arxiv.org/abs/2502.06556)
- [Mutation-Guided LLM-based Test Generation at Meta (Foster et al., ACH)](https://arxiv.org/abs/2501.12862)
- [Unit Testing Past vs. Present: Examining LLMs' Impact on Defect Detection and Efficiency (Ramler et al.)](https://arxiv.org/abs/2502.09801)
- [Diffblue benchmark report: Autonomous unit test generation at enterprise scale (March 2026, Diffblue Marketing)](https://www.diffblue.com/resources/benchmark-report-autonomous-unit-test-generation-at-enterprise-scale/)
- [Revisiting the Unit Test Generation Landscape: Diffblue Cover vs GitHub Copilot with GPT-5 (Diffblue, published 22 October 2025, updated 26 March 2026)](https://www.diffblue.com/resources/unit-test-generation-benchmark-diffblue-copilot-gpt5/)