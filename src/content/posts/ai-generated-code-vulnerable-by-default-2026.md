---
title: "AI code assistants ship vulnerabilities unless you review them"
description: "Empirical studies show a meaningful share of AI-suggested code contains security flaws. The risk is highest when students and beginners accept suggestions without review."
date: "2026-10-03"
section: "ai-for-students"
tags: ["security", "github-copilot", "code-review", "students", "ai-coding"]
draft: false
---

AI coding assistants are great for boilerplate, but they also autocomplete insecure patterns from their training data. For students learning to code, the danger is accepting a suggestion that looks right but introduces a real vulnerability.

## What the studies found

| Study | Setup | Finding |
|---|---|---|
| Pearce et al. (2022) | 89 security-sensitive scenarios across C, C++, Java, Python | ~40% of Copilot suggestions contained a security vulnerability |
| Asare et al. (2023) | Compared Copilot to human developers on the same vulnerability scenarios | Copilot replicated the original vulnerable code ~33% of the time and the fixed version ~25% of the time |
| Sandoval et al. (2023) | User study with a realistic coding task | Participants with LLM access introduced similar or slightly more vulnerabilities than the control group in that setup |

The takeaway is consistent: Copilot is not inherently secure or insecure. It reflects patterns from training data, including insecure ones. The main risk is uncritical acceptance, which is highest for beginners who cannot yet spot the flaw.

## Why students are especially at risk

- You cannot review what you do not yet understand. A SQL injection or path traversal bug looks like normal code.
- The assistant is confident even when wrong. There is no warning label on an insecure suggestion.
- Copy-pasting AI output into a graded project or a portfolio app can ship a real vulnerability to production later.

## Safer habits

- Treat every suggestion as untrusted until you can explain why it is safe.
- Run linters and SAST tools (Bandit, Semgrep, CodeQL) locally and in CI.
- Use parameterised queries, input validation, and modern crypto libraries by default.
- Ask the assistant to explain the security of its own suggestion, then verify the explanation yourself.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Suggestion flow with guardrails</text>
  <rect x="30" y="55" width="170" height="60" rx="8" class="df-box"/>
  <text x="115" y="80" class="df-box-text" text-anchor="middle">Copilot suggests</text>
  <text x="115" y="100" class="df-box-text" text-anchor="middle">code</text>
  <rect x="245" y="55" width="170" height="60" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Security review</text>
  <text x="330" y="100" class="df-box-text" text-anchor="middle">(human + tools)</text>
  <rect x="460" y="55" width="170" height="60" rx="8" class="df-box"/>
  <text x="545" y="80" class="df-box-text" text-anchor="middle">Only merge</text>
  <text x="545" y="100" class="df-box-text" text-anchor="middle">if safe</text>
  <line x1="200" y1="85" x2="245" y2="85" class="df-arrow" marker-end="url(#arc4)"/>
  <line x1="415" y1="85" x2="460" y2="85" class="df-arrow" marker-end="url(#arc4)"/>
  <rect x="130" y="150" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="175" class="df-box-text" text-anchor="middle">Never auto-accept across trust boundaries</text>
  <text x="330" y="195" class="df-box-text" text-anchor="middle">treat suggestions as untrusted input</text>
  <defs>
    <marker id="arc4" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>AI code assistants speed up work but are not security-aware. Students and beginners must review suggestions and rely on automated checks before shipping code.</p>
</div>

## Sources

- [Pearce et al., "Asleep at the keyboard? Assessing the security of GitHub Copilot's code contributions", IEEE S&P 2022](https://doi.org/10.1109/SP46214.2022.9833571)
- [Asare et al., "Is GitHub's Copilot as bad as humans at introducing vulnerabilities in code?", Empirical Software Engineering 2023](https://doi.org/10.1007/s10664-023-10380-1)
- [Sandoval et al., "Lost at C: A user study on the security implications of large language model code assistants", USENIX Security 2023](https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval)
