---
title: "Under $1 million in revenue, you do not own the images Midjourney makes for you"
description: "Midjourney's terms say that if you are a company, or an employee of a company, making more than $1,000,000 a year, you must be on Pro or Mega to own your assets, so everyone below that line is generating images it does not hold title to. The same terms commit only to reasonably offering unlimited access while reserving the right to rate limit it. Alongside that: OpenAI bills GPT Image per million tokens and sends you to a calculator for the per-image figure, with Batch at exactly half and cached input only on the Responses API, and Black Forest Labs meters in images per month with a one-domain cap."
date: "2026-10-01"
section: "comparisons"
tags: ["image-generation", "midjourney", "openai", "flux", "adobe-firefly", "pricing", "comparison", "licensing"]
draft: false
---

Pick an image generator and you will spend your afternoon converting between incompatible units. One of them sells you hours on a GPU. One of them sells you tokens and refuses to publish a per-image price. One of them sells you a calculator. And one of them has a clause in its terms under which most of its paying users do not own the images they generate.

That last one should be the first thing you read, because it is the only rule in this category that depends on who you are rather than what you do, and because ownership is a harder problem to fix later than a subscription tier is to change.

## The revenue clause is an ownership clause

Here is the sentence, from section 4 of Midjourney's terms of service, under the heading for content rights and your rights and obligations:

> If you are a company or any employee of a company with more than $1,000,000 USD a year in revenue, you must be subscribed to a "Pro" or "Mega" plan to own Your Assets.

Read the whole clause rather than the summary. The terms open by saying you own all assets you create to the fullest extent possible under applicable law, then list exceptions, and this is the first one. So the sequence is: you own your images, unless you work for a company above a million dollars a year, in which case you do not own them unless you are on the $60-a-month tier or above.

The practical effect is that a designer at a small studio generating client assets on the $10 Basic plan is producing work they may not hold title to, and the studio cannot fix that later without having bought the right plan the whole time. Nothing about your volume, quality, or Stealth Mode changes this. Stealth Mode controls who can see the images in Midjourney's community; it does not confer ownership.

The plan comparison page carries the same rule in a footnote attached to the usage rights row, where all four tiers are otherwise marked with identical General Commercial Terms. The footnote is where most people meet it. The terms of service are where it actually bites.

## What you are actually buying

| Platform | Billing unit | Is a per-image price published? |
| --- | --- | --- |
| Midjourney | Subscription plus GPU hours, with unlimited generations on a separate slower queue | No, it sells time |
| OpenAI | Per 1 million tokens, image and text input and image output | No, the page sends you to a calculator |
| Black Forest Labs | Pay as you go, with plan allowances expressed in images per month | Per model in a calculator, per second for video |
| Adobe Firefly | Not verifiable from the public pricing page at the time of writing | Not verified |

That fourth row is the honest limitation of this comparison. Adobe's Firefly plans page renders its pricing client-side and returned no dollar figures to an automated fetch, so no Adobe price appears anywhere in this article. If you need one, open the page in a browser, which is also what you will have to do to see Make's higher credit tiers in the automation comparison.

## Midjourney sells a GPU clock

This is the plan structure in full, from Midjourney's own comparison documentation:

| Plan | Monthly | Annual total | Annual per month | Fast GPU time | Relax mode |
| --- | --- | --- | --- | --- | --- |
| Basic | $10 | $96 | $8 | 3.3 hr (200 min) | None |
| Standard | $30 | $288 | $24 | 15 hr | Unlimited images, SD video |
| Pro | $60 | $576 | $48 | 30 hr | Unlimited images, SD video |
| Mega | $120 | $1,152 | $96 | 60 hr | Unlimited images, SD video |

Extra GPU time is $4 an hour on every tier. The annual discount is 20% with the full year paid upfront.

Read the last column carefully, because it is the whole trick. Unlimited images exist only in Relax mode, and Basic does not have Relax mode at all. So the $10 plan has no path to unlimited anything: 3.3 hours of fast GPU is genuinely the entire allowance. Basic also excludes Stealth Mode, which is what keeps your images and videos private, and excludes working solo in Discord direct messages. The cheapest tier is a testing tier, and the plan comparison says so if you read the empty cells.

And even "unlimited" is not a commitment. Section 7 of the terms, titled Unlimited Service and Rate Limiting, says that if you purchase an unlimited plan, Midjourney will try to reasonably offer unlimited access to the services, while reserving the right to rate limit you to prevent quality decay or interruptions to other customers. The verb is "try," and the carve-out is broad enough to cover a slow day.

There is a second restriction that does not show up in any pricing table, because it is not a price. Throughput:

| Plan | Concurrent image prompts | Concurrent video prompts | Max repeat or permutation | Queued jobs |
| --- | --- | --- | --- | --- |
| Basic | 3 fast | 1 fast | 4 jobs | 10 jobs |
| Standard | 3 fast, or Relax | 3 fast | 10 jobs | 10 jobs |
| Pro | 12 fast, or 3 Relax | 6 fast, or 3 Relax | 40 jobs | 10, plus 3 Relax videos |
| Mega | 12 fast, or 3 Relax | 12 fast, or 3 Relax | 40 jobs | 10, plus 3 Relax videos |

If your workflow is generating 40 variations of a hero image, which is an entirely ordinary thing for a designer to do, you cannot queue it on Basic, which caps repeat and permutation batches at four jobs. The tier ladder is not only a price ladder. It is a set of capability gates, and the cheapest tier cannot do the work.

## OpenAI sells tokens, and hides the per-image number

OpenAI's published image prices are per 1 million tokens rather than per image, and the page explicitly directs you to a calculator in the image generation guide for cost estimates. That means you cannot divide your way to a per-image figure from the pricing page alone. What the page does publish:

| Model | Image input | Cached image input | Image output | Text input | Text output |
| --- | --- | --- | --- | --- | --- |
| gpt-image-2.5-sunburst | $8.00 | $2.00 | $30.00 | $5.00 | — |
| gpt-image-2.5-flare | $8.00 | $2.00 | $30.00 | $5.00 | — |
| gpt-image-2 | $8.00 | $2.00 | $30.00 | $5.00 | — |
| gpt-image-1.5 | $8.00 | $2.00 | $32.00 | $5.00 | $10.00 |
| gpt-image-1 | $10.00 | $2.50 | $40.00 | $5.00 | — |
| gpt-image-1-mini | $2.50 | $0.25 | $8.00 | $2.00 | — |
| chatgpt-image-latest | $8.00 | $2.00 | $32.00 | $5.00 | $10.00 |

Two details in that table matter more than the numbers.

Batch API pricing is exactly half: gpt-image-2 drops to $4.00 input and $15.00 output, and gpt-image-2.5 drops to the same. If your image generation is non-interactive, you are leaving half the price on the table by not using Batch.

And the cached input rates are conditional. OpenAI notes that cached input rates for GPT Image 2 and GPT Image 2.5 apply only to images generated with the Responses API. A $2.00 cached rate against an $8.00 input rate looks like a 75% discount, and if you are calling through a different path you simply do not get it, because the restriction is attached to the cache rate rather than to the model.

## Black Forest Labs sells a calculator and a seat count

Black Forest Labs describes its model as pay as you go with no subscriptions and no seat fees, charging only for what you generate. Pricing sits behind an on-page calculator rather than in a table. Video is the clearest published figure at $0.17 per second, so a 5-second generation is $0.85.

What is published in full is the plan structure, and the allowances are denominated in images per month:

| Plan | Models | Image allowance | Domains | Licensed users |
| --- | --- | --- | --- | --- |
| Builder | FLUX.2 [klein] models | 10,000/month | 1 | 10 |
| Platform | FLUX.2 [klein] 9B and FLUX.2 [dev] | 100,000/month | 1 | 10 |
| Professional | FLUX.2 [dev] | 100,000/month | Up to 3 | 10 |
| Enterprise | All models plus new releases | Custom | Custom | Custom |

Note the second column from the right. A domain is a website the outputs may be used on, and the cap is one domain on Builder and Platform. If you ship client work for multiple brands, the Professional tier at up to three domains is a licensing requirement rather than a scaling decision. The Synthetic Data tier is the unusual one, granting rights to use outputs as training data with no domain restrictions.

Unlike the others, the domain and licensed-user limits are the terms doing the work. There is no revenue clause, because the meter is images, which means your bill tracks your usage honestly and your rights scale with your company.

## How to compare them honestly

The reason nobody publishes a clean "cost per image" table is that the four products are not selling the same thing. Midjourney sells time on a GPU and gives you unlimited images only if you accept a slower queue. OpenAI sells tokens and treats the per-image conversion as something you do yourself. Black Forest Labs sells generated units and caps how many places you may use them. Adobe sells a subscription whose current price we could not verify from the public page.

The comparison that actually holds is a ratio of what you need to what each unit measures. Count how many images you generate per month and how many steps of work each one needs, then ask which unit penalises your shape.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Four vendors, four different things to meter</text>
  <rect x="20" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="76" class="df-box-text" text-anchor="middle">Midjourney</text>
  <text x="110" y="94" class="df-box-text" text-anchor="middle">GPU hours, then queue</text>
  <text x="110" y="110" class="df-box-text" text-anchor="middle">unlimited is the slow lane</text>
  <rect x="240" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="76" class="df-box-text" text-anchor="middle">OpenAI</text>
  <text x="330" y="94" class="df-box-text" text-anchor="middle">tokens, not images</text>
  <text x="330" y="110" class="df-box-text" text-anchor="middle">batch is exactly half</text>
  <rect x="460" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="76" class="df-box-text" text-anchor="middle">Black Forest Labs</text>
  <text x="550" y="94" class="df-box-text" text-anchor="middle">images per month</text>
  <text x="550" y="110" class="df-box-text" text-anchor="middle">capped by domain</text>
  <rect x="20" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="206" class="df-box-text" text-anchor="middle">Adobe Firefly</text>
  <text x="110" y="224" class="df-box-text" text-anchor="middle">page renders nothing</text>
  <text x="110" y="240" class="df-box-text" text-anchor="middle">to an automated fetch</text>
  <rect x="240" y="182" width="400" height="66" rx="8" class="df-box"/>
  <text x="440" y="206" class="df-box-text" text-anchor="middle">The $1,000,000 gross revenue clause</text>
  <text x="440" y="224" class="df-box-text" text-anchor="middle">is the only rule here that</text>
  <text x="440" y="240" class="df-box-text" text-anchor="middle">decides who owns the output</text>
  <line x1="204" y1="85" x2="234" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="85" x2="454" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="215" x2="428" y2="215" class="df-arrow" marker-end="url(#arc1)"/>
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
    Check the terms before you budget, because Midjourney's section 4 says that if you are a company, or an employee of one, making more than $1,000,000 a year, you must be on Pro or Mega to own your assets. That is an ownership condition rather than a purchase restriction, so everyone below the line, including designers working on client work, is generating images they do not hold title to, and no amount of volume or Stealth Mode changes it. If you want unlimited volume and can accept the slower queue, Midjourney's Relax mode is the only unlimited generation in the category, but price it honestly on two counts: Basic at $10 a month has 3.3 hours of fast GPU with no Relax mode at all, no Stealth Mode, and a 4-job cap on repeat batches, so the cheap tier cannot produce 40 variations of one image however long you wait, and section 7 only promises to try to offer unlimited access while reserving the right to rate limit you. If you need programmatic generation with a published API, price OpenAI by tokens and not by image, since the page deliberately does not publish a per-image number: use Batch API for anything non-interactive because it is exactly half, and check your integration path, because the $2.00 cached input rate on GPT Image 2 and 2.5 applies only through the Responses API and silently does not apply to other callers. If your usage is high-volume and you need the outputs commercially across your own properties, Black Forest Labs is the one whose meter matches your behaviour, since plan allowances are stated in images per month at 10,000 or 100,000, but check the domain cap before you buy, because one domain on Builder and Platform means multi-brand or client work requires Professional, and the Synthetic Data tier is the only one granting rights to use outputs as training data. And treat any Adobe Firefly figure you find quoted elsewhere with suspicion, because the official plans page renders its pricing client-side and returned no dollar amounts to an automated fetch, which means an unsourced number is not more reliable than an absent one.
  </p>
</div>

## Sources

- [Comparing Midjourney Plans — prices, GPU time, Relax mode, throughput limits, and the $1M revenue clause (Midjourney documentation)](https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans)
- [Midjourney Terms of Service](https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service)
- [OpenAI API Pricing — GPT Image 2.5, GPT Image 2, GPT Image 1.5, GPT Image 1, and Batch rates](https://platform.openai.com/docs/pricing)
- [OpenAI image generation guide, including the cost calculator referenced by the pricing page](https://developers.openai.com/api/docs/guides/image-generation)
- [Black Forest Labs Pricing — pay-as-you-go calculator, FLUX.2 plan allowances, and domain limits](https://docs.bfl.ai/pricing)
- [Adobe Firefly plans — pricing rendered client-side, not retrievable by an automated fetch](https://www.adobe.com/products/firefly/plans.html)