---
title: "California requires an AI detector on your website. It says nothing about your AI-written blog post"
description: "The California AI Transparency Act has been operative since 1 January 2026 and requires covered providers to publish a free AI detection tool and embed both visible and machine-readable provenance in generated images, video and audio. The penalty is $5,000 per violation with each day counted separately. The definition of generative AI includes text, but the operative sections require disclosures only for image, video and audio, so an AI-written blog post carries no disclosure duty at all."
date: "2026-10-03"
section: "ai-for-business"
tags: ["california", "compliance", "ai-transparency", "provenance", "watermarking", "small-business", "regulation"]
draft: false
---

There is a California law that requires AI companies to hand you a tool for detecting their own AI images, and that requires every generated image to carry invisible metadata naming the model that made it. It has been operative since 1 January 2026. It also says nothing whatsoever about AI-written text, which is the single fact that matters most if you write or publish content for a living.

The California AI Transparency Act is Chapter 25, added to the Business and Professions Code from section 22757 by SB 942, chaptered on 19 September 2024. The operative obligations sit in three sections, and each one is narrower than the press coverage suggests.

## Who is actually covered

| Question | Answer in the statute |
| --- | --- |
| Who is a covered provider | A person that creates, codes or otherwise produces a generative AI system |
| Threshold | Over 1,000,000 monthly visitors or users |
| Geography | Publicly accessible within California |
| Exemption | Products and services that provide exclusively non-user-generated video game, television, streaming, movie or interactive experiences |

The obligations fall on the model makers, not on the business using the tool. A ten-person company posting AI-assisted copy is not a covered provider and does not owe a detector to anyone. That single fact changes who your compliance problem is: it is your vendor's problem, and it reaches you only through the licence paperwork.

## The three duties

**A free detection tool.** Section 22757.2 requires a tool at no cost to the user that lets a person assess whether image, video or audio content was created or altered by the provider's system, accepts a file upload or a URL, outputs any system provenance data found, is publicly accessible subject to limited security exceptions, and supports an API so it can be called without visiting the website. It must not output personal provenance data, must not retain submitted content longer than necessary, and must never retain personal provenance data.

**A visible disclosure.** Section 22757.3(a) requires the provider to offer the user a manifest disclosure in generated content, which must be clear, conspicuous, appropriate to the medium, understandable to a reasonable person, and permanent or extraordinarily difficult to remove where technically feasible.

**An invisible one.** Section 22757.3(b) requires a latent disclosure wherever technically feasible and reasonable, carrying the provider's name, the name and version of the system, the time and date of creation, and a unique identifier. It must be detectable by the provider's own detection tool, consistent with widely accepted industry standards, and permanent or extraordinarily difficult to remove.

The licensee clause is the part that travels down to you. If a provider licenses its system to a third party, it must contractually require the licensee to keep the disclosure capability intact. If the provider learns a licensee has modified the system so it can no longer embed the disclosure, it must revoke the licence within 96 hours of discovering it.

## The penalty

| Provision | Amount |
| --- | --- |
| Civil penalty per violation | $5,000 |
| Each day in violation | A discrete violation |
| Who can sue | Attorney General, city attorney or county counsel |
| Prevailing plaintiff | Reasonable attorney's costs and fees |

Five thousand dollars per day per violation, brought by a public prosecutor, with no private right of action.

## The gap worth knowing

Read the definition of a generative AI system against the operative sections. The statutory definition covers content "including text, images, video, and audio". But the detection tool in section 22757.2 is scoped to "image, video, or audio content, or content that is any combination thereof", and the manifest and latent disclosure duties in 22757.3 are scoped identically.

So the Act requires provenance for images, video and audio, and requires none for text. An AI-written article, a generated summary, a model-drafted email and an AI-produced answer to a support ticket all sit outside the disclosure machinery entirely, even though the statute's own definition of generative AI expressly includes text.

<div class="aistack-diagram">
<svg viewBox="0 0 660 306" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">What the Act covers, by medium</text>
  <rect x="20" y="52" width="150" height="74" rx="8" class="df-box"/>
  <text x="95" y="78" class="df-box-text" text-anchor="middle">Image</text>
  <text x="95" y="97" class="df-box-text" text-anchor="middle">visible plus latent</text>
  <text x="95" y="114" class="df-box-text" text-anchor="middle">disclosure</text>
  <rect x="186" y="52" width="150" height="74" rx="8" class="df-box"/>
  <text x="261" y="78" class="df-box-text" text-anchor="middle">Video</text>
  <text x="261" y="97" class="df-box-text" text-anchor="middle">visible plus latent</text>
  <text x="261" y="114" class="df-box-text" text-anchor="middle">disclosure</text>
  <rect x="352" y="52" width="150" height="74" rx="8" class="df-box"/>
  <text x="427" y="78" class="df-box-text" text-anchor="middle">Audio</text>
  <text x="427" y="97" class="df-box-text" text-anchor="middle">visible plus latent</text>
  <text x="427" y="114" class="df-box-text" text-anchor="middle">disclosure</text>
  <rect x="518" y="52" width="122" height="74" rx="8" class="df-box"/>
  <text x="579" y="82" class="df-box-text" text-anchor="middle">Text</text>
  <text x="579" y="103" class="df-box-text" text-anchor="middle">nothing</text>
  <rect x="20" y="168" width="300" height="72" rx="8" class="df-box"/>
  <text x="170" y="194" class="df-box-text" text-anchor="middle">Free detection tool required</text>
  <text x="170" y="213" class="df-box-text" text-anchor="middle">with an API, no retained uploads</text>
  <rect x="340" y="168" width="300" height="72" rx="8" class="df-box"/>
  <text x="490" y="194" class="df-box-text" text-anchor="middle">$5,000 per day per violation</text>
  <text x="490" y="213" class="df-box-text" text-anchor="middle">brought by a public prosecutor</text>
  <line x1="95" y1="130" x2="95" y2="164" class="df-arrow" marker-end="url(#arc7)"/>
  <line x1="579" y1="130" x2="450" y2="164" class="df-arrow" marker-end="url(#arc7)"/>
  <defs>
    <marker id="arc7" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Know that California's AI Transparency Act is your vendor's compliance obligation and not yours, because the statute attaches its duties to a covered provider, which is defined as a person that creates or codes a generative AI system with over 1,000,000 monthly visitors or users, publicly accessible in the state, and a ten-person company publishing AI-assisted copy is not one. What reaches you is contractual rather than direct: the provider must require its licensees by contract to keep the latent disclosure capability intact, and must revoke a licence within 96 hours of learning a licensee broke it, so if your images stop carrying provenance, that is a licensing problem to raise with the vendor rather than a filing you make yourself. The penalty structure is worth knowing even though you are not the one exposed to it, since it is $5,000 per violation with each day of violation counted as a discrete one, actionable by the Attorney General, a city attorney or a county counsel, with no private right of action, which means the realistic enforcement pattern is a regulator acting rather than a customer suing. And the finding that should change how you read every headline about this law is the media gap: the statutory definition of a generative AI system expressly includes text alongside images, video and audio, but sections 22757.2 and 22757.3 are both scoped to image, video or audio only, so there is no detection tool duty, no manifest disclosure duty and no latent metadata duty for generated text whatsoever. An AI-written article, a model-drafted email and an AI support reply all sit outside the regime. Practically, that means label your generated images and video if you use them in commercial work, because that is where the law and the fingerprinting standards both point, and do not assume a future text provision is coming, because the current statute's own scoping shows the legislature chose the media with measurable provenance and stopped there.
  </p>
</div>

## Sources

- [SB-942, California AI Transparency Act, full chaptered bill text as enacted (chaptered 19 September 2024), adding Business and Professions Code sections 22757 to 22757.6](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB942)
- [California Legislative Information: SB-942 bill navigation page, showing chapter status and the 1 January 2026 operative date](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB942)