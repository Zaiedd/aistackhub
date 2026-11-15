---
title: "OWASP LLM Top 10: a practical briefing for business teams"
description: "The OWASP Top 10 for LLM applications lists the most common security risks when deploying AI features. Here is what each means in business terms and which to prioritise first."
date: "2026-10-03"
section: "ai-for-business"
tags: ["security", "owasp", "llm", "governance", "risk"]
draft: false
---

When a business ships an LLM-powered feature (chatbot, summariser, agent), the security risks are not the same as for a traditional web app. OWASP publishes a Top 10 list specifically for LLM applications. It is free, community-maintained, and a good starting checklist.

## The risks that matter most in practice

| OWASP LLM risk | What it means in business terms | Typical first control |
|---|---|---|
| Prompt injection | A user tricks the model into ignoring your instructions or leaking data | Separate trusted instructions from untrusted input; validate outputs |
| Sensitive information disclosure | The model reveals PII, secrets, or training data | Redact before sending; scope retrieval; log and audit |
| Excessive agency | An agent takes actions it should not (emails, payments, deletions) | Least-privilege tools; human approval for irreversible actions |
| Overreliance | Users trust model output that is wrong or fabricated | Show sources; require verification for high-stakes outputs |
| Insecure output handling | Model output is rendered/executed without sanitisation | Treat model output as untrusted; encode and validate |
| Supply chain | A compromised model, plugin, or dataset enters your stack | Vet providers and plugins; pin versions; review dependencies |

The remaining items (training data poisoning, model DoS, insecure plugin design, model theft) matter more for teams training or hosting their own models.

## A sensible rollout order

1. Prompt injection and sensitive disclosure first — these affect almost every LLM feature.
2. Excessive agency next, if you are building agents.
3. Overreliance for anything user-facing with consequences (health, finance, legal).

## What this is not

OWASP is a checklist, not a compliance certificate. It does not replace your data-protection, security, or accessibility obligations. It is, however, a far better starting point than a generic web-app checklist.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">OWASP LLM Top 10: rollout order</text>
  <rect x="40" y="60" width="180" height="60" rx="8" class="df-box"/>
  <text x="130" y="85" class="df-box-text" text-anchor="middle">1. Prompt injection</text>
  <text x="130" y="105" class="df-box-text" text-anchor="middle">+ data disclosure</text>
  <rect x="240" y="60" width="180" height="60" rx="8" class="df-box"/>
  <text x="330" y="85" class="df-box-text" text-anchor="middle">2. Excessive</text>
  <text x="330" y="105" class="df-box-text" text-anchor="middle">agency (agents)</text>
  <rect x="440" y="60" width="180" height="60" rx="8" class="df-box"/>
  <text x="530" y="85" class="df-box-text" text-anchor="middle">3. Overreliance</text>
  <text x="530" y="105" class="df-box-text" text-anchor="middle">(user-facing)</text>
  <line x1="220" y1="90" x2="240" y2="90" class="df-arrow" marker-end="url(#arc10)"/>
  <line x1="420" y1="90" x2="440" y2="90" class="df-arrow" marker-end="url(#arc10)"/>
  <rect x="130" y="160" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="185" class="df-box-text" text-anchor="middle">Checklist, not a certificate</text>
  <text x="330" y="205" class="df-box-text" text-anchor="middle">start here, then go deeper</text>
  <defs>
    <marker id="arc10" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>Start with prompt injection and data disclosure, then agency and overreliance. OWASP's list is a free, practical starting point, not a substitute for your own controls.</p>
</div>

## Sources

- [OWASP, "Top 10 for Large Language Model Applications"](https://genai.owasp.org/llm-top-10/)
- [OWASP, "LLM and Generative AI Security"](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
