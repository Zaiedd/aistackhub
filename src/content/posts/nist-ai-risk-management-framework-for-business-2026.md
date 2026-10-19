---
title: "A practical starting point for AI governance: the NIST AI Risk Management Framework"
description: "NIST's AI RMF is free, voluntary, and structured around four functions. It gives businesses a concrete way to start governing AI without building a framework from scratch."
date: "2026-10-03"
section: "ai-for-business"
tags: ["governance", "nist", "ai-risk", "compliance", "enterprise"]
draft: false
---

Most businesses adopt AI faster than they can govern it. Writing a governance framework from scratch is expensive, and many teams stall. The NIST AI Risk Management Framework (AI RMF 1.0) offers a free, voluntary starting point.

## What it is

The NIST AI RMF is a framework published by the US National Institute of Standards and Technology. It is not a regulation and carries no mandatory compliance obligation. It is designed to be adapted to an organization's size, sector, and risk tolerance.

## The four functions

| Function | Question it answers | Example activity |
|---|---|---|
| Govern | Who is accountable for AI risk? | Assign owners, write policies, set review cadences |
| Map | What could go wrong with this system? | Inventory AI systems, identify stakeholders and impacts |
| Measure | How do we know the risk level? | Define metrics, test and evaluate models, document results |
| Manage | What do we do about it? | Mitigate, monitor, and respond to incidents over time |

The functions are meant to run continuously, not as a one-off audit. Govern sits underneath the other three: without clear ownership, mapping and measuring produce reports nobody acts on.

## Why it helps small and mid-sized teams

- It is free and public, with companion playbooks and profiles.
- It is risk-based, so a small team can scope it to the systems that matter most.
- It maps reasonably to other frameworks (ISO/IEC 42001, EU AI Act obligations), so work done here is not wasted.

## Limits to keep in mind

- Voluntary frameworks do not satisfy a legal obligation by themselves.
- The framework is high-level; you still need domain-specific controls (data protection, security, accessibility).
- Governance only works if someone is accountable and resourced.

<div class="aistack-diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">NIST AI RMF: four functions</text>
  <rect x="40" y="60" width="135" height="60" rx="8" class="df-box"/>
  <text x="107" y="85" class="df-box-text" text-anchor="middle">Govern</text>
  <text x="107" y="105" class="df-box-text" text-anchor="middle">accountability</text>
  <rect x="185" y="60" width="135" height="60" rx="8" class="df-box"/>
  <text x="252" y="85" class="df-box-text" text-anchor="middle">Map</text>
  <text x="252" y="105" class="df-box-text" text-anchor="middle">context &amp; impacts</text>
  <rect x="330" y="60" width="135" height="60" rx="8" class="df-box"/>
  <text x="397" y="85" class="df-box-text" text-anchor="middle">Measure</text>
  <text x="397" y="105" class="df-box-text" text-anchor="middle">metrics &amp; tests</text>
  <rect x="475" y="60" width="145" height="60" rx="8" class="df-box"/>
  <text x="547" y="85" class="df-box-text" text-anchor="middle">Manage</text>
  <text x="547" y="105" class="df-box-text" text-anchor="middle">mitigate &amp; monitor</text>
  <rect x="130" y="160" width="400" height="60" rx="8" class="df-box"/>
  <text x="330" y="185" class="df-box-text" text-anchor="middle">Govern underpins all three</text>
  <text x="330" y="205" class="df-box-text" text-anchor="middle">ownership turns reports into action</text>
  <defs>
    <marker id="arc6" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>For teams without a governance process, the NIST AI RMF is a sensible, free starting point. Adopt it as a living practice, not a one-time checklist.</p>
</div>

## Sources

- [NIST, "AI Risk Management Framework (AI RMF 1.0)"](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST, "AI RMF Playbook"](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook)
