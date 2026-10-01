---
title: "An AI receptionist costs 8 cents a minute. The chatbot law you are citing is the wrong bill"
description: "Vapi's own worked example puts a fully loaded AI phone agent at $0.08 to $0.13 a minute, while Smith.ai sells human agents at $7 to $10 per call. The bigger story is that the FCC rule everyone quotes governs outbound robocalls, not the inbound calls a small business wants to automate, and that the California chatbot law passed on September 28, 2026 exempts every business under $500 million in revenue."
date: "2026-10-01"
section: "ai-for-business"
tags: ["ai-voice-agents", "customer-service", "telephony", "tcpa", "compliance", "small-business", "pricing"]
draft: false
---

Buy a small business an AI voice agent that answers its phone and you can have it picking up for eight cents a minute. Then a lawyer emails you a link to California AB 2016 and says that is the law requiring you to disclose the bot. AB 2016 is not that law. It is a bill about the estates of deceased people in one session and a drinking-water regulation about hexavalent chromium in another. The law you actually want is AB 1609, approved on 28 September 2026, and its first substantive requirement is a threshold that puts nearly every small business outside it.

Both facts matter more than the product pitch, because one of them is a cost advantage that is real and the other is a compliance story that vendors are getting wrong in writing.

## What it costs, from the pricing pages

| Provider | Model | Price | Notes |
| --- | --- | --- | --- |
| Vapi | Per minute | $0.05/min platform fee, plus pass-through | Core $29/mo, Pro $999/mo, Premier custom |
| Retell AI | Per minute | $0.07 to $0.31/min | Range varies by configuration |
| Bland AI | Per minute | Start $0.14/min; Build $0.12/min plus $299/mo | $0 platform fee; all-inclusive, no separate pass-through |
| Smith.ai | Per call, not per minute | $300/mo for 30 calls; Basic $810/90; Pro $2100/300 | Works out to $10, $9, and $7 per call; overage $11.50, $10.50, $8.50 |
| OpenAI | Component cost | GPT-Live 1 voice sessions $0.05/min | gpt-realtime-2.1 audio $32/1M input and $64/1M output tokens; gpt-live-transcribe $0.017/min |

Vapi's page also breaks down the pass-through costs, which is the number that actually matters because the headline platform fee is not the bill. Deepgram transcription runs $0.0095 to $0.0099 per minute, OpenAI intelligence $0.0077 to $0.0452 per minute, and an ElevenLabs voice $0.0146 to $0.0238 per minute. Vapi's own worked example lands at roughly $0.082 to $0.129 per minute all-in.

Bland AI is the one to watch for a different reason. Its $0 platform fee is real, but it also advertises all-inclusive pricing with no separate pass-through, so the $0.14 per minute on the Start tier already contains the model and voice cost. Comparing Vapi's $0.05 to Bland's $0 is comparing one company's markup against another company's bundle.

Now do the arithmetic that no comparison page does. A three-minute call on Vapi's cheapest all-in figure costs about $0.25. The same call to a human on Smith.ai's Pro tier costs $7. That is a 28-fold difference, which sounds like the argument for replacing the receptionist, and it is not the argument at all, because a receptionist is not a per-call commodity. A human agent works business hours, takes breaks, and costs you the seven dollars whether or not the caller needed an answer. The AI costs a quarter of a dollar and will pick up at two in the morning.

The reason to buy this is coverage and latency, not unit economics. If your business model depends on every call being answered, the correct comparison is against the cost of the call that goes unanswered, which is usually an order of magnitude larger than seven dollars.

## The rule everyone cites does not apply to you

The FCC's Declaratory Ruling FCC 24-17A1, released 8 February 2024, holds that AI-generated human voices fall within the Telephone Consumer Protection Act's prohibition on artificial or prerecorded voice, and that prior express consent is required to place such calls. Every version of this story that appears in a voice-agent blog gets the same thing wrong, which is that it is about calls going out.

The ruling addresses outbound robocalls. Technologies used to answer inbound calls sit outside the TCPA artificial-voice rule. That is the single distinction that determines whether your AI receptionist is in regulatory trouble, and it is not the one being repeated.

There is separate California legislation on artificial voices in the outbound direction. AB 2905, chapter 316 of the 2023 to 2024 session, approved 20 September 2024, amends Public Utilities Code section 2874 and deals with automatic dialing-announcing devices and artificial voices. That is the closer analogue to the FCC ruling, and it is also about calls placed.

## The law that does apply, and who it skips

California AB 1609, chapter 733 of the Statutes of 2026, approved 28 September 2026, is the real chatbot disclosure and access law. Its requirements are worth knowing in full because they are unusually concrete:

- You must disclose that the customer is interacting with a bot, and you may not represent the chatbot as human.
- You must provide a way for the customer to request a human during regular business hours.
- You must make a good-faith connection attempt within 15 minutes, or offer an appointment within one business day.
- Hold time after connecting cannot exceed 15 minutes, and cumulative hold or escalation time cannot exceed one hour.
- Penalties start at up to $5,000 for an initial violation and up to $10,000 per subsequent violation.
- Enforcement is by public prosecutor only. There is no private right of action, so a customer cannot sue you under this bill.
- The 15-minute connection requirement does not apply if the request arrives by email, web form, or voicemail.
- There is no duty to offer a platform that was not otherwise available to you as of 1 January 2027.

And the exemption that decides your reading of it: the bill applies to large private businesses, defined as those with more than $500 million in gross annual revenue nationally, and to customers who are California residents. Further exemptions cover hospitals, consumer reporting agencies, utilities under General Orders 133 and 103-A, and telecom under section 1707.2 of Title 16.

So the 15-minute connection promise, the one-hour escalation cap, and the $10,000 per-violation penalty apply to companies more than thirty times the size of most firms reading this. If you sell a service to California residents and you are under the threshold, the operative requirement is the anti-deception one: do not pretend the bot is a person, and do offer a path to a human.

If you want to check your own reading rather than trust a paragraph on a vendor's site, both bill texts are on the California Legislature's site. Open `202520260AB1609` and you will find the chatbot requirements. Open `202520260AB2016` and you will find drinking-water regulation, which is how you settle the citation in about a minute.

| Rule | What it covers | Does it reach an AI agent that answers inbound calls? |
| --- | --- | --- |
| FCC 24-17A1, outbound AI voice | Calls your system places to a consumer's phone | No, it is about outbound calls |
| California AB 1609, chatbots | Disclosure and access to a human, for firms above $500M in revenue | Yes, if you are above the revenue threshold, which most firms are not |
| EU AI Act, Article 50 | Transparency that you are interacting with an AI system, plus emotion recognition and biometric labelling rules | Yes, for providers and deployers placing AI systems on the EU market |
| Ordinary consumer protection | Not passing off a bot as human | Yes, and this is the obligation most firms are actually under |

The row to read twice is the last one. It is dull, it is not specific to AI, and it is the rule that will actually be applied to a firm under $500 million in revenue that answers the phone.

## Latency, not intelligence, is what fails

The technical failure mode for real-time voice is well documented and it is not the model being wrong. Twilio's engineering guidance defines core latency as the mouth-to-ear turn gap, the delay between a caller finishing a sentence and hearing a reply, and notes that a single response traverses at least ten network hops. That is the number to test, because a bot that gives a correct answer a second and a half late reads as broken to a caller who is holding a phone to their ear in a car.

The second failure mode is harder to fix and nobody sells a fix for it. A preprint on medRxiv measuring Whisper and WhisperX found higher transcription error rates for non-native English speakers, with a word error rate difference of 3.40 for WhisperX at p=0.001, and notes that GPT-4o post-processing recovers much of the lost accuracy. A separate preprint at arXiv 2504.09346 examines accent bias in synthetic AI voice services.

The pattern shows up in audits of deployed systems too. A 2025 FAccT audit of Amazon Rufus found a 69% zero-copula error rate across dialects, meaning the system systematically fails on sentence constructions that omit the verb "to be". The STAMMA 2025 Report on Phone Accessibility found that 24% of respondents cited IVR issues and 14% reported being hung up on.

Put those together and you have the part of this technology that a small business should actually care about. If your customers include people who speak English as a second or third language, the error rate of your transcription layer is a direct determinant of whether they can place an order, and it is not a number your vendor will volunteer.

## What the industry claims, and what is documented

The gap between published containment figures and published evidence is wide. Numbers in circulation include 87% containment rates, 340% year-over-year growth in production voice deployments across 500+ organisations, and Gartner figures of 14% of self-service interactions being fully resolved and of cost per contact falling from $13.50 to $1.84. None of those trace to a primary source; they come from vendor roundups and SEO compilations. Do not put them in a board deck.

The figure that does have a primary source is old and unflattering. A 2018 USPS Office of Inspector General white paper found that in FY2017 the postal service received roughly 60 million calls, about 19 million customers tried to reach a human agent, and only about 11.5 million succeeded, with average wait exceeding 13 minutes.

That is a government agency measured by the federal metric that matters most to its own regulator, and roughly 39% of the people who explicitly asked for a person did not get one. Use it as the bar. A voice agent that genuinely resolves two thirds of the after-hours and overflow calls a small business receives is doing something a human receptionist was never going to do, because the human was not on the phone at all. Anything claiming 87% is claiming it does better than the telephone system itself.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">Where an inbound call actually breaks</text>
  <rect x="20" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="80" class="df-box-text" text-anchor="middle">Transcription</text>
  <text x="110" y="97" class="df-box-text" text-anchor="middle">worse on non-native speech</text>
  <rect x="240" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Round trip</text>
  <text x="330" y="97" class="df-box-text" text-anchor="middle">about ten network hops</text>
  <rect x="460" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="80" class="df-box-text" text-anchor="middle">The answer</text>
  <text x="550" y="97" class="df-box-text" text-anchor="middle">usually correct anyway</text>
  <line x1="204" y1="85" x2="234" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="85" x2="454" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="210" class="df-box-text" text-anchor="middle">Caller hears a pause</text>
  <text x="110" y="227" class="df-box-text" text-anchor="middle">and hangs up</text>
  <rect x="240" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="210" class="df-box-text" text-anchor="middle">Outbound consent rules</text>
  <text x="330" y="227" class="df-box-text" text-anchor="middle">do not apply here</text>
  <rect x="460" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="210" class="df-box-text" text-anchor="middle">Inbox rules do</text>
  <text x="550" y="227" class="df-box-text" text-anchor="middle">and depend on your revenue</text>
  <line x1="110" y1="122" x2="110" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="122" x2="330" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="550" y1="122" x2="550" y2="178" class="df-arrow" marker-end="url(#arc1)"/>
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
    Buy this for the hours you are closed, not to cut a salary, and stop worrying about the FCC. The cost case is narrower than the marketing implies: a three-minute call runs about $0.25 on Vapi's own all-in worked example against $7 to $10 per call for a human on Smith.ai, so the defensible return is the call you currently do not answer at all, plus coverage at two in the morning, not a per-call saving. The regulatory case is narrower than your lawyer's email too: FCC 24-17A1 brings AI-generated voices under the TCPA's artificial-voice prohibition, but it governs placing calls, and the technologies you would use to answer inbound calls sit outside that rule; the California law that matters is AB 1609, approved 28 September 2026, and it applies to businesses with more than $500 million in gross annual revenue, with penalties starting at $5,000 and $10,000 per subsequent violation enforced only by a public prosecutor, so if you are under the threshold the rules that actually bind you are the simple ones: do not pretend the bot is a person, and do give people a route to a human. The failure you should test is transcription, not knowledge. Whisper and WhisperX show a word error rate difference of 3.40 for non-native English speakers at p=0.001, a FAccT audit of Amazon Rufus found a 69% zero-copula error rate across dialects, and 14% of the people in a 2025 phone accessibility survey reported being hung up on. Test it by calling your own agent as a caller with a regional accent, not by asking the vendor for a demo.
  </p>
</div>

## Sources

- [FCC 24-17A1, Declaratory Ruling (released 8 February 2024)](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- [Transparency obligations under Article 50 of the EU AI Act (European Commission FAQ, updated 24 July 2026)](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
- [Improving Customer Experience at USPS Customer Care Centers (USPS Office of Inspector General, 20 August 2018)](https://www.uspsoig.gov/reports/white-papers/improving-customer-experience-usps-customer-care-centers)
- [A developer's guide to core latency for AI voice agents (Twilio)](https://www.twilio.com/en-us/blog/developers/best-practices/guide-core-latency-ai-voice-agents)
- [Vapi pricing](https://vapi.ai/pricing)
- [Retell AI pricing](https://www.retellai.com/pricing)
- [Bland AI pricing](https://www.bland.ai/pricing)
- [Smith.ai pricing](https://smith.ai/pricing)
- [OpenAI platform pricing (Realtime and audio models)](https://platform.openai.com/docs/pricing)
- [California AB 1609, full text — customer service bots (2025 to 2026 session)](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1609)
- [California AB 2905 — telecommunications, artificial voices (2023 to 2024 session)](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2905)
- [California AB 2016 — State Water Resources Control Board, drinking water, hexavalent chromium (not a chatbot law)](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB2016)
- [Transcription error rates for non-native English speech, Whisper and WhisperX (medRxiv preprint)](https://www.medrxiv.org/content/10.1101/2025.08.29.25333548v1.full.pdf)
- [Accent bias in synthetic AI voice services (arXiv 2504.09346)](https://arxiv.org/abs/2504.09346)