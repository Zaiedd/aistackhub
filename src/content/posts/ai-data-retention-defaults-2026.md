---
title: "Your AI chat history ages out in 72 hours, 18 months or 30 days. It depends whose button you pressed."
description: "Google Gemini keeps conversations 72 hours when activity tracking is off and 18 months by default, with human reviewers able to see them for up to three years. Anthropic keeps consumer chats 30 days on the backend by default and lets you opt in to model improvement. OpenAI lets any consumer opt out of training while business and API data is not used for training by default. Two of the three describe training as opt-in and one describes it as opt-out."
date: "2026-10-03"
section: "comparisons"
tags: ["privacy", "data-retention", "training-data", "openai", "anthropic", "gemini", "gdpr", "compliance"]
draft: false
---

Ask three vendors how long they keep your chat history and you get four different answers, three different legal defaults, and one genuine consent trap.

The answers are not wrong. They just answer different questions, and the defaults differ enough that "we use an LLM internally" is not a meaningful statement about your data exposure.

## What each one actually promises

| Setting | Retention | Used for training |
| --- | --- | --- |
| Google Gemini, activity tracking off | 72 hours | No |
| Google Gemini, default | 18 months, or 3 or 36 months, or indefinite | Yes, and human reviewers may review |
| Anthropic, consumer, model choice off | 30 days on the backend | No |
| Anthropic, consumer, model choice on | 30 days on the backend | De-identified data may inform models |
| Anthropic, commercial terms or API | As your contract says | No, unless a development partner |
| OpenAI, consumer, default | While the account exists | May be used unless you opt out |
| OpenAI, business, enterprise, API | While the account exists | No |
| OpenAI, Temporary Chat | 30 days | No |

## The 72 hours that are not the default

Google gives the strongest privacy position in the industry, and then does not ship it as the default. Turn off Keep Activity and conversations are deleted after 72 hours, human reviewers cannot see them, and your data is not used to train models. Leave it on, which is what you get unless you change something, and the default is 18 months, with 3 months, 36 months and indefinite also available.

The detail that gets missed is that human reviewers may review your conversations for up to three years. That is a longer horizon than the 72-hour deletion figure everyone quotes, and it is the number that should appear in a privacy notice.

Anthropic separates storage from influence, which is the distinction most important to understand on this list. Declining model improvement means chats are deleted from Anthropic's backend after 30 days. Accepting it means chats may be used to improve models, on de-identified data, and the deletion promise applies to the model rather than to the conversation record.

So the short number and the longer commitment describe different objects. The conversation is gone in 30 days either way. What a model may retain is a de-identified trace of it, and nobody can hand you that back, and it still constrains what the model says. Treat the exact training-data deletion window as a number to confirm in your own account settings rather than one to quote from a press summary.

OpenAI has the least time-bounded answer of the three. Chat history is retained while your account exists, and consumer content may be used to improve models unless you opt out. Two things break the pattern: business, enterprise and API data is not used for training by default, and Temporary Chat is excluded from training and deleted after 30 days.

## The consent asymmetry

This is the part with legal teeth.

Anthropic describes model improvement as opt-in. OpenAI describes training as an opt-out, meaning silence counts as permission. Google ties training to the same privacy setting as retention, so the training position follows whichever side of the Keep Activity toggle you are on.

Two of three vendors give you an affirmative record. One does not. If your compliance work needs to demonstrate consent rather than legitimate interest, that distinction decides which vendor you can put in front of a data protection officer without an argument.

## For a company, most of this stops applying

Every consumer default in that table is a decision you should not be making on behalf of your staff or your customers.

OpenAI states that business, enterprise and API data is not used to train its models by default. Anthropic states the same for commercial terms and API, with one exception: developers building a model or product with Anthropic under a development partner arrangement may have their data included unless they opt out. Google offers paid API tiers with no-training terms.

So the questions that remain open for an enterprise buyer are narrower and different: how long is text retained on the vendor's servers, can human reviewers access it, and where is it stored. Training is the one you have already been told is off.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">The same prompt, four retention answers</text>
  <rect x="20" y="52" width="152" height="70" rx="8" class="df-box"/>
  <text x="96" y="76" class="df-box-text" text-anchor="middle">Gemini, tracking off</text>
  <text x="96" y="96" class="df-box-text" text-anchor="middle">72 hours</text>
  <text x="96" y="113" class="df-box-text" text-anchor="middle">no training, no review</text>
  <rect x="176" y="52" width="152" height="70" rx="8" class="df-box"/>
  <text x="252" y="76" class="df-box-text" text-anchor="middle">Gemini, default</text>
  <text x="252" y="96" class="df-box-text" text-anchor="middle">18 months</text>
  <text x="252" y="113" class="df-box-text" text-anchor="middle">review up to 3 years</text>
  <rect x="332" y="52" width="152" height="70" rx="8" class="df-box"/>
  <text x="408" y="76" class="df-box-text" text-anchor="middle">Claude, consumer</text>
  <text x="408" y="96" class="df-box-text" text-anchor="middle">30 days on backend</text>
  <text x="408" y="113" class="df-box-text" text-anchor="middle">training if opted in</text>
  <rect x="488" y="52" width="152" height="70" rx="8" class="df-box"/>
  <text x="564" y="76" class="df-box-text" text-anchor="middle">OpenAI, consumer</text>
  <text x="564" y="96" class="df-box-text" text-anchor="middle">while account exists</text>
  <text x="564" y="113" class="df-box-text" text-anchor="middle">opt out of training</text>
  <rect x="20" y="164" width="300" height="64" rx="8" class="df-box"/>
  <text x="170" y="190" class="df-box-text" text-anchor="middle">Anthropic: opt-in</text>
  <text x="170" y="209" class="df-box-text" text-anchor="middle">you get an affirmative record</text>
  <rect x="340" y="164" width="300" height="64" rx="8" class="df-box"/>
  <text x="490" y="190" class="df-box-text" text-anchor="middle">OpenAI: opt-out</text>
  <text x="490" y="209" class="df-box-text" text-anchor="middle">silence counts as consent</text>
  <line x1="408" y1="126" x2="240" y2="160" class="df-arrow" marker-end="url(#arc9)"/>
  <line x1="564" y1="126" x2="430" y2="160" class="df-arrow" marker-end="url(#arc9)"/>
  <defs>
    <marker id="arc9" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Decide your retention policy by configuration rather than by assumption about the vendor, because the same prompt can be deleted in 72 hours or kept for 18 months by the same company depending on one toggle. Google's is the position worth copying and the one not shipped by default: with Keep Activity off, Gemini conversations are deleted after 72 hours, human reviewers cannot see them and the data is not used for training, while the default position is 18 months with 3 months, 36 months and indefinite also offered, so if you quote the 72-hour number to a privacy notice or a customer, be precise that it describes a non-default configuration. Also carry Google's three-year human review horizon, because that is the number nobody mentions and it outlives the retention window. Anthropic's position is the clearest case of two different objects rather than conflicting policies: declining model improvement deletes chats from the backend after 30 days, and accepting it lets de-identified data inform models, so the conversation itself is recoverable for 30 days either way and the trace inside the model is what persists, which is the part that never appears in a deletion request. OpenAI is the loosest on time, since history is kept while the account exists and consumer content may be used for training unless you opt out, though two exceptions matter more than the default: business, enterprise and API data is not used for training by default, and Temporary Chat is excluded from training and deleted after 30 days. The distinction with real legal weight is consent, not storage. Anthropic frames training as opt-in and Google ties it to an explicit privacy setting, so you hold an affirmative record, while OpenAI frames it as opt-out, meaning silence counts as permission and you hold no record at all, which decides whether you can rely on consent or on legitimate interest, and those are not interchangeable under GDPR. For any business use, treat this whole table as consumer-side trivia and move the real questions into procurement: keep staff and customer data on business or API tiers where no-training is the default, and ask vendors instead about retention duration on their own servers, whether human reviewers can reach your content, and where it is stored, because training is the single question all three have already answered for you.
  </p>
</div>

## Sources

- [Google Gemini Apps Help, Manage your privacy in Gemini Apps: the 72-hour setting, the 18-month default, the 3, 36 and indefinite options and the three-year human review window](https://support.google.com/gemini/answer/13594961)
- [Anthropic, How long do you store my personal data: the 30-day backend retention default](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data)
- [Anthropic, How do you use personal data in model training: opt-in model improvement and de-identification](https://privacy.claude.com/en/articles/10023555-how-do-you-use-personal-data-in-model-training)
- [OpenAI, How your data is used to improve model performance: consumer opt-out, business and API exclusions from training, and Temporary Chat](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)
- [OpenAI, Temporary Chat and its 30-day deletion](https://help.openai.com/en/articles/8919658-what-is-temporary-chat)