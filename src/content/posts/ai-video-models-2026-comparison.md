---
title: "Sora is gone with no replacement. The 2026 AI video field, priced per second"
description: "OpenAI shut down Sora's app in April and its API on September 24, 2026, naming no successor. The remaining models differ by a factor of more than twenty in cost per second, and their published specs disagree with each other depending on which tier you look at."
date: "2026-09-30"
section: "comparisons"
tags: ["ai-video", "sora", "veo", "kling", "runway", "generative-media", "pricing"]
draft: false
---

For about two years the answer to "which AI video model is best" was a shrug, because Sora was the reference point everyone measured against. As of six days ago that reference point does not exist, and OpenAI did not replace it. Any comparison you read from 2025 that put Sora in the running is now a historical document.

## What actually happened to Sora

The timeline is unambiguous because OpenAI documented it. On March 24, 2026, OpenAI notified developers using the Videos API and the Sora 2 model aliases and snapshots that both would be deprecated and removed on September 24, 2026, a six-month notice period. The Sora web and app experiences were discontinued earlier, on April 26, 2026. The announcement landed the same day that Disney ended its partnership with OpenAI. OpenAI's own deprecations page lists no recommended replacement for either the Videos API or the Sora 2 models.

Two consequences follow, and both are about timing rather than quality. The Sora 2 free tier was discontinued in January 2026, so nobody has new access to it. And after the API shuts down, there is no service that can offer Sora 2 generation at all, which means any workflow you build on it now is one you will migrate again within weeks. OpenAI's help centre also states that data associated with Sora will be permanently deleted after any final export window closes, so if you have work sitting there, exporting it is a task with a deadline rather than a convenience.

## The price spread is the actual story

Across the surviving models, API cost per second ranges from about $0.029 to about $0.70 depending on resolution tier, a spread of more than twenty times. That single fact should drive the decision more than any quality comparison, because the same shot can cost you a coffee or a small car depending on which model and which output setting you pick.

Kling 3.0 sits at the cheap end at roughly $0.029 per second, with native audio and clips up to 15 seconds. At the Pro subscription tier of about $37 a month for 3,000 credits, that works out to roughly $0.74 per 1080p video, and there is a free tier of 66 daily credits. Kling's own published model-fit guidance puts Kling VIDEO 3.0, Seedance 2.5, and Wan 3.0 in the multi-shot and reference-led category, which is the honest description of where this family is strongest.

Google's Veo 3.1 runs about $0.15 per second on the Fast tier and $0.40 on Standard, both including audio. The subscription ladder runs from Google AI Plus at $7.99 a month through AI Pro at $19.99 to AI Ultra at $249.99. It is consistently described as the only model offering true native 4K output, through Vertex AI, and it pairs that with natively synchronized audio, which is the combination you want for short scenes where picture and sound are generated together.

ByteDance's Seedance 2.0 is frequently cited for how well it retains a subject's face and identity from the first frame, making it the pick when a character has to stay recognisable across shots. Its published spec covers 4 to 15 second clips, up to 4K, six aspect ratios including 21:9 cinema framing, and native audio.

Grok Imagine is the outlier on the other end: 720p, up to 15 seconds, with basic native audio, at $8 a month on X Premium and about $4.20 per minute through the API. That is expensive for the resolution, and it is the model to reach for when you need a lot of clips fast rather than a single good one.

Adobe's Firefly video model works in five-second generations up to 1080p, which is a real constraint but the only sensible choice if the finished work has to continue through Adobe's tools.

## The specs disagree, and that is the warning sign

Here is the part that should make you cautious about every comparison table including this one. Sources give materially different maximum resolutions for the same named model. Kling 3.0 is variously listed as native 4K, 720p, and 4K depending on whether the reporter is describing the consumer platform, the API, or a different variant such as Kling VIDEO 3.0 Omni or Kling O3. Runway's Gen-4.5 is listed at 720p in one comparison and 1080p with 4K upscaling in another.

The likely explanation is that these are real differences between tiers and surfaces rather than errors, but nobody's public documentation is clean enough for you to rely on. A model name is not a specification. Before committing budget, check the pricing page for the exact tier and surface you would actually be using, because the resolution that appears in a blog post is frequently the best tier while the resolution you get is whatever your plan includes.

## The shift that actually solves the churn

Every model on this list is at least eighteen months old or has already had a successor, and one of the two models this article discusses no longer exists. Building a pipeline against a specific model is now a recurring migration cost, and the industry has responded to that in a way that changes how you should buy.

Runway no longer requires you to pick. Alongside its own Gen-4.5 and Aleph 2.0 editing models, it now hosts Veo 3.1, Kling 3.0, Kling O3, and Seedance 2.5 in the same workspace, and Kling 3.0 is available on all paid and Enterprise plans. Multi-model aggregators have made "which model" a per-shot decision rather than a per-year decision, which is the correct shape of the problem given that Sora demonstrated the downside of the other shape.

The one durable piece of craft advice from this year's comparisons is about prompting, and it is model-specific. For image-to-video, several of these models want a short, motion-only prompt describing only movement and camera, on the order of 15 to 40 words, rather than the 60 to 100 words that text-to-video benefits from. Describing a scene you have already supplied in the image gives the model a set of contradictions to resolve.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="28" class="df-q" text-anchor="middle">Pick by what you are starting from, not by leaderboard</text>
  <rect x="20" y="60" width="190" height="66" rx="8" class="df-box"/>
  <text x="115" y="88" class="df-box-text" text-anchor="middle">A reference image</text>
  <text x="115" y="105" class="df-box-text" text-anchor="middle">you must keep</text>
  <rect x="235" y="60" width="190" height="66" rx="8" class="df-box"/>
  <text x="330" y="88" class="df-box-text" text-anchor="middle">A shot needing</text>
  <text x="330" y="105" class="df-box-text" text-anchor="middle">sound and 4K</text>
  <rect x="450" y="60" width="190" height="66" rx="8" class="df-box"/>
  <text x="545" y="88" class="df-box-text" text-anchor="middle">Many clips,</text>
  <text x="545" y="105" class="df-box-text" text-anchor="middle">fast, cheap</text>
  <line x1="330" y1="38" x2="115" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="38" x2="330" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="38" x2="545" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="186" width="190" height="66" rx="8" class="df-box"/>
  <text x="115" y="214" class="df-box-text" text-anchor="middle">Seedance 2.0</text>
  <text x="115" y="231" class="df-box-text" text-anchor="middle">$0.029 to $0.15/s</text>
  <rect x="235" y="186" width="190" height="66" rx="8" class="df-box"/>
  <text x="330" y="214" class="df-box-text" text-anchor="middle">Veo 3.1</text>
  <text x="330" y="231" class="df-box-text" text-anchor="middle">$0.15 to $0.40/s</text>
  <rect x="450" y="186" width="190" height="66" rx="8" class="df-box"/>
  <text x="545" y="214" class="df-box-text" text-anchor="middle">Kling 3.0</text>
  <text x="545" y="231" class="df-box-text" text-anchor="middle">$0.029/s, 15s</text>
  <line x1="115" y1="126" x2="115" y2="186" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="126" x2="330" y2="186" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="545" y1="126" x2="545" y2="186" class="df-arrow" marker-end="url(#arc1)"/>
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
    Stop reading comparisons and start pricing per second, because the surviving models differ by more than twenty times and that is a larger effect than any quality gap you will perceive. Use Kling 3.0 or Seedance 2.0 at roughly $0.029 to $0.15 per second for anything iterative, since a shot you will generate eight times should not cost what Sora 2 Pro charged at $0.70. Use Veo 3.1 at $0.15 to $0.40 when you genuinely need native 4K with synchronised audio, and Seedance 2.0 when a character's face has to survive the cut. Do not build a pipeline against one named model, because Sora's six-month deprecation with no successor is now the sector's base rate rather than a surprise, and multi-model platforms like Runway already host Veo, Kling, and Seedance side by side for that reason. And verify the spec yourself before budgeting, because published resolution figures for the same model name differ across sources depending on tier and surface, which means the resolution in any comparison table is the tier you will not be buying.
  </p>
</div>

## Sources

- [OpenAI API deprecations — Videos API and Sora 2 removal](https://developers.openai.com/api/docs/deprecations)
- [What to know about the Sora discontinuation — OpenAI Help Center](https://help.openai.com/en/articles/20001152)
- [OpenAI's Sora shutting down: when it happens and alternatives — Mashable](https://mashable.com/article/openai-sora-shut-down-when-happens-alternatives)
- [Grok Imagine vs Veo 3.1, Kling 3.0, Sora 2: 2026 comparison — YouMind](https://youmind.com/blog/grok-imagine-video-generation-review-comparison)
- [AI video generation models in 2026: 10 models compared — Kling](https://www.kling.ai/blog/ai-video-generation-models)
- [Kling 3.0 on Runway](https://runway.com/product/models/kling-3.0)
- [Best image-to-video AI 2026: Kling, Runway, Luma, Veo compared — M Studio](https://mstudio.ai/insights/best-image-to-video-ai-2026)
- [AI Video Tools 2026: Veo, Runway, Kling, Pika — Mihata](https://mihata.jp/en/column/ai-video-generation-comparison)
- [Sora 2 is discontinued: the best alternatives in 2026 — Shotari](https://shotari.com/sora-2)