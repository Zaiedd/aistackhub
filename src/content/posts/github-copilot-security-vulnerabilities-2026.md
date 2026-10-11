---
title: "GitHub Copilot suggests insecure code more often than you might think"
description: "Studies across multiple languages and scenarios show GitHub Copilot can produce insecure code suggestions at nontrivial rates. The risk is highest when developers accept suggestions uncritically without security review."
date: "2026-10-03"
section: "ai-for-developers"
tags: ["security", "github-copilot", "insecure-code", "owasp", "developer-tools"]
draft: false
---

AI coding assistants speed up boilerplate, but they also autocomplete insecure patterns. Security researchers have measured how often GitHub Copilot suggests vulnerable code across common tasks.

## What the research found

Empirical studies evaluated Copilot suggestions against known vulnerability classes (e.g. SQL injection, cross-site scripting, path traversal, weak crypto). The results vary by language and prompt, but a consistent finding is: a meaningful fraction of suggestions are insecure if taken as-is.

| Study | Scope | Key finding |
|---|---|---|
| Pearce et al. (2022) | 89 security-sensitive scenarios in C, C++, Java, Python | Copilot produced insecure code in ~40% of cases |
| Asare et al. (2023) | Comparison to human developers on security tasks | Copilot did not introduce new vulnerabilities beyond those humans also wrote, but also did not reliably fix them |
| Sandoval et al. (2023) | User study in a realistic coding task | Participants with access to LLMs introduced similar or slightly more vulnerabilities than control group in that setup |

The takeaway: Copilot is not inherently secure or insecure, but it reflects insecure patterns from training data. Uncritical acceptance is the main risk.

## Practical mitigations

- Treat suggestions as untrusted until reviewed (especially I/O, auth, crypto, SQL).
- Use secure-by-default snippets, linters, and SAST tools in CI.
- Add security-focused test cases for handling untrusted input.
- Prefer parameterised queries, input validation, and modern crypto libraries.

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
  <line x1="200" y1="85" x2="245" y2="85" class="df-arrow" marker-end="url(#arc3)"/>
  <line x1="415" y1="85" x2="460" y2="85" class="df-arrow" marker-end="url(#arc3)"/>
  <rect x="130" y="150" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="175" class="df-box-text" text-anchor="middle">Never auto-accept across trust boundaries</text>
  <text x="330" y="195" class="df-box-text" text-anchor="middle">treat as suggestion, not source of truth</text>
  <defs>
    <marker id="arc3" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Copilot can suggest insecure code. Developers must review suggestions with security in mind and rely on automated checks.</p>
</div>

## Sources

- [Pearce et al., "Asleep at the keyboard? Assessing the security of GitHub Copilot's code contributions", IEEE S&P 2022](https://doi.org/10.1109/SP46214.2022.9833571)
- [Asare et al., "Is GitHub Copilot a substitute for human developers? An empirical evaluation", Empirical Software Engineering 2023](https://doi.org/10.1007/s10664-023-10325-0)
- [Sandoval et al., "Lost at C: A user study on the security implications of large language model code assistants", USENIX Security 2023](https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval)
