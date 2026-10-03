---
title: "One hour of audio costs $0.18 on three APIs and $2.04 on another. Same task."
description: "Transcription APIs are billed in whatever unit suits the vendor: Deepgram and OpenAI quote per minute, AssemblyAI quotes per hour, Google charges per minute with volume tiers that fall by 75%, and Azure quotes per hour with a separate batch tier. Normalised, an hour of audio runs from $0.18 to $2.04, and Google's standard tier is more than four times the price of AssemblyAI's asynchronous model for the same job."
date: "2026-10-03"
section: "comparisons"
tags: ["transcription", "speech-to-text", "pricing", "deepgram", "assemblyai", "openai", "google-cloud", "azure", "cost"]
draft: false
---

Nobody is lying on these pricing pages. They are just quoted in different units, and the unit is doing most of the work.

Here is the comparison nobody publishes, because no vendor will put their competitors' numbers next to theirs: normalise everything to one hour of audio and the spread is more than eleven times.

| Provider and model | Quoted price | Normalised per hour |
| --- | --- | --- |
| OpenAI gpt-4o-mini-transcribe | $0.003 / minute | $0.18 |
| Google Speech-to-Text V2 Dynamic Batch | $0.003 / minute | $0.18 |
| Azure Speech, Batch tier | $0.18 / hour | $0.18 |
| Google Speech-to-Text V2 Standard, at 2M+ minutes | $0.004 / minute | $0.24 |
| AssemblyAI Universal-2 | $0.15 / hour | $0.15 |
| OpenAI gpt-transcribe | $0.0045 / minute | $0.27 |
| Deepgram Nova-3, current price | $0.0048 / minute | $0.29 |
| AssemblyAI Universal-3.5 Pro | $0.21 / hour | $0.21 |
| OpenAI gpt-4o-transcribe | $0.006 / minute | $0.36 |
| Azure Fast Transcription | $0.36 / hour | $0.36 |
| Deepgram Flux English, current price | $0.0065 / minute | $0.39 |
| Google Speech-to-Text V2 Standard, 0 to 500k minutes | $0.016 / minute | $0.96 |
| Azure S1 Speech to Text | $1.00 / hour | $1.00 |
| OpenAI gpt-live-transcribe and gpt-realtime-whisper | $0.017 / minute | $1.02 |
| OpenAI gpt-realtime-translate | $0.034 / minute | $2.04 |

## The unit trap, concretely

The clearest example is Google's standard tier against AssemblyAI. At low volume Google bills V2 Standard at $0.016 a minute, which is $0.96 an hour. AssemblyAI quotes its Universal-2 asynchronous model at $0.15 an hour. That is a 6.4 times difference for transcribing the same hour of audio, and it is invisible until you convert.

The inverse trap exists too. Deepgram publishes prices per minute, which look cheap next to AssemblyAI's per-hour numbers, but Deepgram's entry model is $0.29 an hour and AssemblyAI's headline asynchronous model is $0.21. Reading the two price lists side by side without converting will produce the wrong answer in either direction.

## Promotional prices are not prices

Deepgram's page labels several models with both a current price and a regular price, and the gap is large enough to change the decision.

| Deepgram model | Current | Regular |
| --- | --- | --- |
| Nova-3 Monolingual | $0.0048 / min | $0.0077 / min |
| Nova-3 Multilingual | $0.0058 / min | $0.0092 / min |
| Flux English | $0.0065 / min | $0.0077 / min |

At regular prices, Nova-3 monolingual is $0.46 an hour and the multilingual model is $0.55, which moves Nova-3 from cheapest-but-one to the middle of the field. If you are signing an annual contract, budget the regular price.

Streaming is cheaper again on the same page: Deepgram quotes Nova-3 monolingual streaming at $0.0042 a minute against $0.0048 for prerecorded, and Flux English streaming at $0.0057 against $0.0065.

## Volume tiers change the answer, so do the add-ons

Google's V2 Standard price falls in steps as your monthly minutes grow: $0.016, then $0.01, then $0.008, then $0.004. A customer crossing into the top tier sees a 75% price cut with no change in model, which means the right answer for a high-volume buyer is a different vendor than for a low-volume buyer. Google's Dynamic Batch is a flat $0.003 at any volume.

AssemblyAI's add-ons are priced per hour too, and two of them are easy to miss: Speaker Diarization at $0.02 an hour and PII Audio Redaction at $0.05 an hour. Speaker labels, which you need for any multi-party transcript, cost more than AssemblyAI's cheapest base model.

Azure is a special case worth explaining rather than hiding. The public Azure pricing page renders its table client-side and exposes no prices to an automated fetch, so the figures here come from Microsoft's own retail price API, not the marketing page. Treat them as Azure's list prices, and check the page in a browser before signing anything.

Google also has the only genuinely free tier in this group: the V1 Standard model gives you the first 60 minutes each month at no charge, then bills the same $0.016. For a prototype that is worth more than it looks.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">One hour of audio, five ways to be billed</text>
  <rect x="20" y="52" width="140" height="66" rx="8" class="df-box"/>
  <text x="90" y="79" class="df-box-text" text-anchor="middle">Per minute</text>
  <text x="90" y="98" class="df-box-text" text-anchor="middle">Deepgram, OpenAI</text>
  <rect x="176" y="52" width="140" height="66" rx="8" class="df-box"/>
  <text x="246" y="79" class="df-box-text" text-anchor="middle">Per hour</text>
  <text x="246" y="98" class="df-box-text" text-anchor="middle">AssemblyAI, Azure</text>
  <rect x="332" y="52" width="140" height="66" rx="8" class="df-box"/>
  <text x="402" y="79" class="df-box-text" text-anchor="middle">Tiered volume</text>
  <text x="402" y="98" class="df-box-text" text-anchor="middle">Google falls 75%</text>
  <rect x="488" y="52" width="152" height="66" rx="8" class="df-box"/>
  <text x="564" y="79" class="df-box-text" text-anchor="middle">Free allowance</text>
  <text x="564" y="98" class="df-box-text" text-anchor="middle">60 min a month, V1</text>
  <line x1="90" y1="122" x2="200" y2="150" class="df-arrow" marker-end="url(#arc8)"/>
  <line x1="246" y1="122" x2="290" y2="150" class="df-arrow" marker-end="url(#arc8)"/>
  <line x1="402" y1="122" x2="380" y2="150" class="df-arrow" marker-end="url(#arc8)"/>
  <line x1="564" y1="122" x2="470" y2="150" class="df-arrow" marker-end="url(#arc8)"/>
  <rect x="130" y="156" width="400" height="76" rx="8" class="df-box"/>
  <text x="330" y="182" class="df-box-text" text-anchor="middle">Normalised, the range is $0.18 to $2.04 an hour</text>
  <text x="330" y="204" class="df-box-text" text-anchor="middle">Google V2 Standard at low volume: $0.96 an hour</text>
  <text x="330" y="223" class="df-box-text" text-anchor="middle">AssemblyAI Universal-2, same hour: $0.15</text>
  <defs>
    <marker id="arc8" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Convert everything to one unit before you compare anything, because normalised to a single hour of audio this category runs from $0.18 to $2.04 and the published list prices make that invisible. The cheapest routes are OpenAI gpt-4o-mini-transcribe at $0.003 a minute, Google's V2 Dynamic Batch at $0.003 a minute and Azure's batch tier at $0.18 an hour, all landing at eighteen cents for the hour, while Google's own V2 Standard at low volume costs $0.016 a minute, or $0.96 an hour, and AssemblyAI's Universal-2 asynchronous model costs $0.15 for the same hour, a 6.4 times gap that only appears if you do the arithmetic yourself. Watch three specific traps. First, promotional pricing: Deepgram publishes current and regular prices side by side, and at regular prices Nova-3 monolingual goes from $0.29 an hour to $0.46, which moves it out of cheapest position, so budget the regular price in any annual commitment. Second, volume tiers that change the winner: Google's standard rate steps down from $0.016 to $0.004 a minute as monthly minutes grow, a 75% reduction with no change in model, so a high-volume buyer and a low-volume buyer should pick different vendors. Third, per-hour add-ons that quietly exceed the base price: AssemblyAI charges $0.02 an hour for speaker diarization and $0.05 for audio PII redaction, and the diarization you need for any multi-party transcript costs more than the cheapest complete transcription on that platform. Two honest limitations. Azure's public pricing page renders client-side and returns no prices to an automated fetch, so its figures here come from Microsoft's own retail price API and should be checked in a browser before you sign. And a promo price is a marketing decision with no contractual force behind it. So price on regular rates, get diarization and redaction in the number from the start, and if you are prototyping rather than serving customers, use Google's 60 free V1 minutes before paying any of these rates at all.
  </p>
</div>

## Sources

- [OpenAI API pricing, Transcription models table (per-minute rates for gpt-4o-mini-transcribe, gpt-transcribe, gpt-4o-transcribe and the realtime models)](https://platform.openai.com/docs/pricing)
- [Deepgram pricing, model table with current and regular per-minute rates for Nova-3 and Flux](https://deepgram.com/pricing)
- [AssemblyAI pricing, per-hour rates for Universal models and per-hour add-ons](https://www.assemblyai.com/pricing)
- [Google Cloud Speech-to-Text pricing, V1 and V2 tiered per-minute rates and the free allowance](https://cloud.google.com/speech-to-text/pricing)
- [Azure Speech list prices, read from Microsoft's Retail Prices API at prices.azure.com filtered to Speech Services in East US, because the public pricing page renders client-side and exposes no table to a fetch](https://prices.azure.com/)