---
title: "The same 10,000 monthly runs cost $489 on Zapier and €50 on n8n"
description: "Zapier bills per task, so a nine-action workflow costs nine tasks a run. n8n bills per execution, so the same workflow costs one. Make bills per credit with code metered at two credits per second. Here is the arithmetic on published prices, the three completely different things that happen when you run out, and why the number of steps in your workflow matters more than the number of runs."
date: "2026-10-01"
section: "comparisons"
tags: ["automation", "zapier", "make", "n8n", "pricing", "no-code", "workflow-automation"]
draft: false
---

Build the same automation on three platforms and you can pay $489 a month or €50 for identical work. The difference is not the software. Zapier charges you for every step that succeeds, Make charges you for every module that acts, and n8n charges you once for the whole run no matter how many steps are inside it.

Here is a concrete case. A workflow with one trigger and nine actions, running 10,000 times a month:

| Platform | Billing unit | What this workflow costs you | Published price |
| --- | --- | --- | --- |
| Zapier | Task, per successful step | 90,000 tasks | $489.00/mo, Professional annual |
| Make | Credit, per module action | 90,000 credits | See the caveat below |
| n8n | Execution, per completed run | 10,000 executions | €50/mo, Pro annual |

n8n states the mechanism itself on its pricing page: an execution is a single run of your entire workflow, and it does not matter how many steps are in it or how much data it processes. The page goes on to say that n8n workflows can do things in a single execution that would take 10,000 operations in other tools. That is a vendor making the argument against itself, which is the most reliable kind of source.

Zapier's definition is just as explicit. A task is counted whenever Zapier successfully completes a unit of work, and failed actions are not counted.

## What you can and cannot count

Before you run the numbers, you need to know which parts of a workflow are free, because that changes the total more than most people expect.

| Component | Zapier | Make | n8n |
| --- | --- | --- | --- |
| The trigger | Free | Counted as a module action | Included |
| Each action | 1 task | 1 credit | Included |
| Conditional routing | Free (Paths, Filters) | Free (Router module) | Included |
| Delay, formatter, aggregation | Free | Free (built-in transforms) | Included |
| Error handlers | Free | Free (Rollback, Break, Resume, Commit, Ignore) | Included |
| Custom code | 30 sec included, then 1 task per 30-sec block | 2 credits per 1 second of execution | Included, unlimited steps |
| Tables and Forms triggers and actions | Free | Counted normally | Included |

The last row matters more than it looks. In Zapier, neither the trigger nor the action inside Tables or Forms counts toward task usage, so building a workflow that reads from a Zapier Table is effectively free. In Make there is no equivalent exemption, so the same shape of workflow is billed normally.

The custom-code row is where people get surprised. Zapier includes 30 seconds of runtime per code step on Professional and Team, and 2 minutes on Enterprise, then bills beyond that at one task per 30-second block. Make's Code App costs two credits for every second of execution, which makes a three-second transformation six credits against Zapier's one task for the same three seconds of work. If your automation contains real data transformation rather than app-to-app field mapping, this is the line item that decides the bill, and no comparison page mentions it.

## The free tiers tell you who is buying what

The three free tiers are so different in character that reading them together is more informative than reading any pricing table.

Zapier's free plan gives you 100 tasks a month and, more importantly, two-step Zaps only. You cannot build a multi-step workflow on it at all. It also polls for new data every 15 minutes, so it is not even a realtime tool on that tier.

Make's free plan gives you 1,000 credits a month with a 15-minute minimum interval between runs, a maximum of two active scenarios, and a five-minute cap on any single scenario execution. That is a genuinely usable free tier, constrained rather than neutered.

n8n does not really have a free cloud tier. It gives away Community Edition for self-hosting, with unlimited users, unlimited workflows, and every integration, and its free cloud trial is a Pro-level trial limited to 1,000 executions over 14 days.

Put side by side, Zapier is charging for steps, Make is charging for volume but letting you start free, and n8n is giving away the product and charging for runs. Same market, three opposite strategies.

## What happens when you run out is the real difference

This is the part that decides whether a billing model is pleasant or dangerous, and the three platforms behave in three unrelated ways.

| Platform | When you exhaust the allowance | Cost of continuing |
| --- | --- | --- |
| Zapier | Usage keeps running if pay-per-task is on, or stops dead if it is off | 2.5× your base rate on monthly billing, 1.25× on annual, with a hard pause at 3× your subscription |
| Make | Scenarios stop running and incoming webhooks queue until you buy more | Extra credits in bundles of 1,000 or 10,000 at your subscription's fixed price; auto-purchase of 10,000 credits available on Core, Pro, and Teams |
| n8n | Workflows keep running | For Business, overage is invoiced 45 days later at €4,000 per additional bucket of 300,000 executions |

Make is the strict one. A scenario that runs out of credits simply stops, and while it is down your webhooks are sitting in a queue. Zapier is the forgiving one if you have enabled overage billing and the dangerous one if you have not. n8n is the only one of the three that guarantees your workflows continue, and it pays for that guarantee with an invoice rather than a stopped automation.

On notifications, Make warns at 75% and 90% of purchased credits. Zapier has flood protection settings to prevent a runaway automation draining a task limit. Neither vendor will tell you a misconfigured loop was the cause.

## The caveat on Make

Make's pricing page lets you select credit volume up to 8 million a month, but as rendered it publishes the price only at the 10,000-credit tier: Free at $0 for up to 1,000 credits, Core at $9/mo for 10,000 credits, Pro at $16/mo, and Teams at $29/mo. There is no published per-tier ladder to compare against Zapier's, which publishes every tier from 750 tasks to 2 million.

That entry price implies $0.0009 per credit. If that rate held at 90,000 credits, this workflow would cost about $81 a month. That is arithmetic on an entry price, not a quote, and Make does not commit to it. Zapier's and n8n's figures above are direct from published tiers.

## The other cost, which is not a price

Two of these bill for things that are not the automation itself.

Zapier's Agents add-on is billed in activities, deliberately outside the task pool, at 400 activities a month on Free and 1,500 on Professional, with Professional starting around $33.33 a month on annual billing. n8n's Assistant is included in cloud plans at 1,600 credits a month on Starter and up to 9,600 on Pro, and on self-hosted n8n you bring your own key, so no credit limits apply at all. Make meters its AI Provider actions as credits like everything else, which is the simplest model of the three and also the one with the least headroom.

Annual discounts are wildly different too: 33% off on Zapier plus a further 15% for non-profits, 17% on n8n, and "15% or more" on Make. Zapier's is by far the largest, which is the vendor with the smallest per-task price pretending to be the most expensive one.

Self-hosting splits the field cleanly. n8n offers Community Edition on GitHub, and its paid Business plan is self-hosted only, at €667/mo for 40,000 executions, meaning you are paying n8n while running the software yourself. Make's on-premises agent is an Enterprise feature. Zapier has no self-hosted option at all.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">One workflow, three billing units</text>
  <rect x="20" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="76" class="df-box-text" text-anchor="middle">9 actions</text>
  <text x="110" y="94" class="df-box-text" text-anchor="middle">1 trigger is free</text>
  <text x="110" y="110" class="df-box-text" text-anchor="middle">10,000 runs</text>
  <line x1="204" y1="85" x2="234" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="240" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="76" class="df-box-text" text-anchor="middle">Zapier: 90,000 tasks</text>
  <text x="330" y="94" class="df-box-text" text-anchor="middle">Make: 90,000 credits</text>
  <text x="330" y="110" class="df-box-text" text-anchor="middle">n8n: 10,000 executions</text>
  <line x1="424" y1="85" x2="454" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="460" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="76" class="df-box-text" text-anchor="middle">$489 vs €50</text>
  <text x="550" y="94" class="df-box-text" text-anchor="middle">same work, same month</text>
  <text x="550" y="110" class="df-box-text" text-anchor="middle">steps are the variable</text>
  <rect x="20" y="182" width="620" height="66" rx="8" class="df-box"/>
  <text x="330" y="206" class="df-box-text" text-anchor="middle">Count your average steps per run before you choose anything</text>
  <text x="330" y="224" class="df-box-text" text-anchor="middle">Under five, the platforms converge and ease of use should decide it</text>
  <text x="330" y="240" class="df-box-text" text-anchor="middle">At ten or more, you are choosing who counts your steps for you</text>
  <line x1="330" y1="122" x2="330" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
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
    Count the steps in your workflow before you compare anything, because the billing unit, not the software, decides the bill. Zapier charges a task per successful step with the trigger free, Make charges a credit per module action with routers and error handlers free, and n8n charges one execution per completed run regardless of step count, so a nine-action workflow running 10,000 times a month is 90,000 tasks at $489.00 on Zapier Professional annual, about 90,000 credits on Make, and 10,000 executions at €50 on n8n Pro annual. That gap widens linearly with step count, so if your average run is under five steps the three converge and you should pick on ease of use instead, but at ten or more steps you are choosing who counts your steps. Check two line items the comparison pages never mention: Make's Code App costs two credits per second of execution while Zapier's code step includes 30 seconds and then bills one task per 30-second block, and Zapier Tables and Forms triggers and actions are free while the equivalent Make modules are billed normally. Decide what you want to happen when you run out, because the three behave differently. Zapier either keeps charging at 2.5× your base rate on monthly billing and 1.25× on annual, up to a hard pause at three times your subscription, or stops dead; Make stops scenarios and queues your webhooks until you buy credits, warning you at 75% and 90%; n8n is the only one guaranteeing your workflows keep running, with Business overage invoiced 45 days later at €4,000 per 300,000 executions. Pick Make at low volume, where $9 for 10,000 credits is hard to beat and the free tier actually works, Zapier for breadth at 9,000+ apps when volume is small and you need support, and n8n the moment your workflows have many steps, your data is sensitive, or you want code and version control. And treat the Make figure with care: its page publishes a price only at the 10,000-credit tier, so unlike Zapier and n8n it cannot be normalized from public pricing.
  </p>
</div>

## Sources

- [Zapier Pricing — plans, task tiers, task usage mechanics, overage rates, and add-ons](https://zapier.com/pricing)
- [Make Pricing & Subscription Packages — credits, plan limits, usage allowance, and overage](https://www.make.com/en/pricing)
- [n8n Plans and Pricing — executions, plan tiers, self-hosting, and execution limits](https://n8n.io/pricing/)
- [How is task usage measured in Zapier](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier)
- [How Zapier Agents measure activity usage](https://help.zapier.com/hc/en-us/articles/26559132765325)
- [n8n Community Edition and self-hosting documentation](https://docs.n8n.io/)