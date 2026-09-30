---
title: "Can an AI agent actually migrate your codebase? The 2026 benchmark says 5%"
description: "A new benchmark ran 520 whole-repository migrations through 8 frontier models. Only 28 finished the job. Here's what the failures tell you about handing an agent your upgrade."
date: "2026-09-30"
section: "ai-for-developers"
tags: ["code-migration", "coding-agents", "openrewrite", "ast-grep", "legacy-code", "modernization"]
draft: false
---

Every engineering team has one upgrade they have been avoiding for years. The Spring Boot 2 to 3 jump. The `javax` to `jakarta` namespace move. The framework major that touches four thousand files. The internal framework rewrite nobody wants to own. It is not hard because the individual edits are complicated. It is hard because it is enormous, entirely mechanical in most places, and produces no interesting work while consuming a quarter.

That is exactly the shape of task coding agents got good at. So the obvious move is to point one at the repo and walk away. There is finally hard evidence about how that goes, and it is not the outcome vendors imply.

## The benchmark that actually measures migration

The reason nobody had a real answer is that the obvious benchmarks measure the wrong thing. If you only run a migration's own test suite, an agent can pass by copying the original implementation forward and changing nothing. The tests go green, the leaderboard records a win, and your codebase is exactly where it started.

Researchers call this Blindness, and it is the reason most agent results flatter themselves. SWE Refactor Bench was built specifically to close it. It uses 20 whole-repository migrations drawn from real open-source infrastructure, covering language, framework, platform, and build toolchain upgrades, and it grades every run in three stages:

- **Migration Audit** verifies the migration actually happened, catching the copy-forward trick.
- **Behavioural Tests** run a fixed suite of 130,118 recorded checks that must all pass.
- **Agentic Verification** hands six independent coding agents the original and migrated code and gives them an hour each to write differential tests designed to find behavioural differences the fixed suite misses.

The headline numbers are worth sitting with. Across 520 runs spanning 8 frontier models and 26 model-effort configurations, only 28 runs, or 5.4%, cleared all three stages. Thirteen of the twenty tasks produced no accepted solution from anyone. The best model in the field, Claude Opus 5, scored 47.0 out of 100.

Forty-seven. The best available agent, on a task a good codemod has done deterministically for a decade, scores less than half marks.

## The failure has two distinct shapes

The more useful finding is not the 5.4%. It is how the runs fail, because the two failure modes need opposite responses.

Among the 340 runs that passed the migration audit, meaning they genuinely attempted the upgrade, 58% reached 99% of the fixed checks but only 26% reached 100%. So roughly three quarters of real attempts got almost everything right and then missed a handful of behaviours. That is the long tail: the deprecated call in the one file nobody grepped for, the edge case in a test fixture, the config file the agent never opened.

The other mode is worse. Capability varies enormously by category. Agents scored 31.4 on build toolchain rewrites and 5.6 on language rewrites. Framework and platform migrations sit in between. That spread is the one to plan around. It suggests agents handle changes where the mapping between old and new is well defined, and fall apart when the task is re-expressing the same behaviour in a different language, which is a semantic problem wearing a syntax costume.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="30" class="df-q" text-anchor="middle">What kind of migration is in front of you?</text>
  <rect x="20" y="70" width="190" height="70" rx="8" class="df-box"/>
  <text x="115" y="100" class="df-box-text" text-anchor="middle">Named API or framework</text>
  <text x="115" y="117" class="df-box-text" text-anchor="middle">version jump</text>
  <rect x="235" y="70" width="190" height="70" rx="8" class="df-box"/>
  <text x="330" y="100" class="df-box-text" text-anchor="middle">Deprecated symbol</text>
  <text x="330" y="117" class="df-box-text" text-anchor="middle">across the repo</text>
  <rect x="450" y="70" width="190" height="70" rx="8" class="df-box"/>
  <text x="545" y="100" class="df-box-text" text-anchor="middle">Language or</text>
  <text x="545" y="117" class="df-box-text" text-anchor="middle">runtime rewrite</text>
  <line x1="330" y1="40" x2="115" y2="70" class="df-arrow" marker-end="url(#arm1)"/>
  <line x1="330" y1="40" x2="330" y2="70" class="df-arrow" marker-end="url(#arm1)"/>
  <line x1="330" y1="40" x2="545" y2="70" class="df-arrow" marker-end="url(#arm1)"/>
  <rect x="20" y="190" width="190" height="60" rx="8" class="df-box"/>
  <text x="115" y="215" class="df-box-text" text-anchor="middle">Run the existing</text>
  <text x="115" y="232" class="df-box-text" text-anchor="middle">recipe first</text>
  <rect x="235" y="190" width="190" height="60" rx="8" class="df-box"/>
  <text x="330" y="215" class="df-box-text" text-anchor="middle">Codemod first, agent</text>
  <text x="330" y="232" class="df-box-text" text-anchor="middle">for the leftovers</text>
  <rect x="450" y="190" width="190" height="60" rx="8" class="df-box"/>
  <text x="545" y="215" class="df-box-text" text-anchor="middle">Budget for humans,</text>
  <text x="545" y="232" class="df-box-text" text-anchor="middle">not an agent</text>
  <line x1="115" y1="140" x2="115" y2="190" class="df-arrow" marker-end="url(#arm1)"/>
  <line x1="330" y1="140" x2="330" y2="190" class="df-arrow" marker-end="url(#arm1)"/>
  <line x1="545" y1="140" x2="545" y2="190" class="df-arrow" marker-end="url(#arm1)"/>
  <defs>
    <marker id="arm1" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

## Why the deterministic tools still win

The uncomfortable part of the 47.0 is that the answer was available in 2015. OpenRewrite, now under Moderne, ships more than 10,000 deterministic type-aware recipes across Java, Kotlin, C#, Go, Python, and JavaScript, spanning over 340 frameworks and tools. A recipe parses your code into a Lossless Semantic Tree, resolves the actual type of each node, matches an exact target, and edits precisely. Run it twice on the same commit and you get the identical diff.

That determinism is the entire point. An agent editing source is a fresh guess every run. The vendor comparison work on this puts a hard number on the gap: text-and-regex approaches are blind to generics, inheritance, and call sites, so they break builds, and they cap out at roughly a 30 to 40 percent success rate on real migrations, with up to 30 times cost variance for the same task. Gartner has made the same argument more gently, noting that rule-based tools can beat a purely LLM approach at refactoring.

The pricing spread is also worth noting. ast-grep is free and MIT licensed, structural search and rewrite across more than 20 languages via tree-sitter, and it is the right tool for a one-off codemod you write yourself. OpenRewrite is free and Apache 2.0 for the Java and Spring paths that matter most. Codemod has a free tier with Team from $1,000 a month, and it has become the default for JavaScript and TypeScript framework work after shipping jssg, an ast-grep-based engine, as the successor to jscodeshift in February 2026. ESLint migrated its own tooling through Codemod that July. AWS Transform bills agentic transformation at $0.035 per agent minute, which works out to about $2.52 for a 17,000-line Java language version upgrade and $0.70 for a 3,000-line Node SDK upgrade, because the work is mostly mechanical and the meter is per minute, not per guess.

That last figure is the tell. $2.52 for a 17,000-line upgrade is not an AI price. It is a script price.

## Where the agent genuinely belongs

The split that works is by task shape. Deterministic engines for detection and structural transformation, agents for orchestration and for the semantic residue no recipe covers. Moderne publishes agent skills for exactly this, letting Claude invoke vetted OpenRewrite recipes across a repo fleet rather than editing files itself, which keeps the deterministic guarantee while letting the agent handle the work recipes miss.

Real projects show the payoff when that division holds. Tinder used an OpenRewrite recipe to move a JMockit to Mockito migration off manual coordination and into a one-month, low-disruption job, with the LLM explicitly kept out of the deterministic path. A global retailer pushed Spring Boot version consolidation across 3,500 repositories as a single push.

There is a deadline argument too. .NET 8 and 9 reach end of life in November 2026 and the official migration tooling is already deprecated, which is the situation where teams are most tempted to hand an agent the keys and most likely to regret it.

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Do not hand an agent the keys to an unattended migration. At a 5.4% all-stage success rate and 47.0 out of 100 for the best model in the field, an agent is a force multiplier for a developer who reviews its work, not a replacement for one. Run the deterministic recipe first, because for most framework and version jumps one already exists and is free; then let the agent handle the residue that recipes cannot reach, which is where the 58%-at-99% long tail lives. Save the agents for orchestration across many repositories and for test and config files, and keep language or runtime rewrites on a human-led track, where the evidence says agents score 5.6 out of 100. And whatever you do, audit that the migration actually happened before you celebrate a green build, because passing tests and having upgraded are two different claims.
  </p>
</div>

## Sources

- [SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration? — arXiv:2608.23564](https://arxiv.org/abs/2608.23564)
- [Best AI Code Migration Tools in 2026 for Legacy Modernization — DevToolLab](https://devtoollab.com/blog/best-ai-code-migration-tools)
- [OpenRewrite Recipes: Deterministic, Type-Aware Code Transformation at Scale — Moderne](https://moderne.ai/recipes)
- [AI-Assisted Codebase Migration at Scale: Automating the Upgrades Nobody Wants to Touch — Tian Pan](https://tianpan.co/blog/2026-04-17-ai-codebase-migration-agents-scale)
- [ast-grep Quick Start — Structural search and rewrite across 20+ languages](https://ast-grep.github.io/guide/quick-start)