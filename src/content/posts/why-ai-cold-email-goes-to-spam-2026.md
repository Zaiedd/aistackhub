---
title: "Why your AI-written cold email goes to spam (and it isn't the wording)"
description: "Inbox placement in 2026 is decided by DNS records, sender reputation, and list hygiene before a single word is read. The fix most people reach for, rewriting the copy, is the smallest lever available."
date: "2026-09-30"
section: "ai-for-business"
tags: ["cold-email", "deliverability", "outbound", "sales-ops", "email-marketing", "spam-filters"]
draft: false
---

The most expensive habit in outbound sales is rewriting an email that was never going to arrive. You tighten the subject line, you cut the adjectives, you run it through a spam checker, you rewrite the opening, and it lands in Promotions again. What you have been optimizing is the last item on a list of six, and the five above it are all things you set up once.

## What the mailbox providers actually require

This part is not a matter of opinion, because Google and Yahoo published it.

Google's sender guidelines require every sender to set up SPF or DKIM. Senders reaching 5,000 or more messages a day to personal Gmail accounts must set up all three: SPF, DKIM, and DMARC. Google states plainly that messages not authenticated with these methods might be marked as spam or rejected outright with a 5.7.26 error. DKIM keys sent to personal Gmail accounts must be at least 1024 bits, with 2048 recommended. And DMARC is not satisfied by having a record: the authenticating domain must match the domain in the visible `From:` header, which is a distinction that quietly fails a large share of setups.

Yahoo mirrors this, requiring SPF or DKIM at minimum, spam complaint rates kept low, a spam rate below 0.3%, and one-click unsubscribe support for bulk senders. Yahoo publishes no volume threshold for bulk sender classification, so it can classify you at a volume where Google would not.

Two details in Google's guidance are worth more than everything else on this page. Enforcement began in February 2024 and was ramped up from November 2025, meaning the rules are actively being applied rather than announced. And bulk sender status, once earned, does not expire. There is a Compliance status dashboard in Postmaster Tools, which is where you should be looking instead of guessing.

The number to watch is the user-reported spam rate, measured daily. Google's guidance is to keep it below 0.1% and prevent it reaching 0.3%. Senders above 0.3% become ineligible for mitigation support, which means when something breaks you are on your own. A cold email program that produces replies but also produces complaints will eventually cross that line, and the recovery is measured in months.

## The priority order nobody follows

The mail providers score the sender before they evaluate the message, and the operational consequence is that the order of your fixes matters more than the completeness of any one fix.

Authentication first. A sender with valid SPF, DKIM, and DMARC with alignment is reported by one industry survey as 2.7 times more likely to reach the inbox than an unauthenticated sender. Nothing in the copy matters if this is missing.

Then warmup. A domain that starts at volume trips filters immediately, and the standard advice for a new sending domain is to start at five to ten emails a day and ramp over four to six weeks. Scale by adding inboxes, not by increasing volume per inbox, with a commonly cited ceiling of 40 to 50 cold emails per inbox per day.

Then list hygiene. Hard bounces, unsubscribes, and prior complainers should never re-enter rotation, and bounce rate is the single most common cause of a reputation collapse. One widely used target is under 2%, though no provider publishes an actual threshold.

Then volume sanity. Sending a concentrated batch from one domain at one time is itself a pattern signal, which is why distributing sends across the business day matters.

Formatting, and only then the words. Plain text or minimal HTML tends to outperform heavy HTML templates on deliverability. More than two or three links raises risk, and URL shorteners are heavily flagged, so use full links on domains with reputation. One deliverability reference puts the realistic ceiling at 90% or more inbox placement, spam complaints under 0.10%, and bounces under 3%, and argues plainly that if you are below 90% placement the problem is authentication, warmup, and list quality rather than the copy.

## Where AI actually fits, and where it does not

This is the part that gets repeated as though AI writing were the main cause of cold email failure. The evidence says it is a real signal and a second-order one.

The mechanism is not that filters detect AI. It is that models produce statistically smooth text, and the specific giveaways are identifiable. The phrases that correlate with worse inbox placement are the ones you would recognise instantly: "I hope this email finds you well," "I came across your company and was impressed," "Quick question." Deliverability logs show these getting filtered faster than messages containing a human-specific reference, and the reason is straightforward, since a sender with nothing specific to say about you is also a sender likely to be sending the same body to four hundred people.

That produces a workable rule. AI as a first draft is fine. AI as the final draft is not. Pull the personalisation hook from a real signal such as a recent hire, a funding round, a technology change on their stack, or a page they visited. Have the model draft, then rewrite the first one or two sentences yourself. Keep messages under about 90 words. Never send the same body to more than roughly 20 recipients, even with merge fields substituted, because filters cluster near-duplicates.

Then consider the benchmark numbers, which come from a tool vendor and should be read with that in mind. Instantly's 2026 report, covering billions of emails, puts the average reply rate at 3.43% with top performers above 10%. Its separate benchmark page cites external studies from Backlinko and Belkins averaging 5% to 9% across millions of messages, and recommends 50 to 125 word emails with one clear call to action and one to three follow-ups spread over 7 to 14 days. First follow-ups are reported to add 40% to 50% more replies, which makes the follow-up sequence a bigger lever than any wording change.

## The number nobody expects

The most useful datapoint in this whole category comes from a vendor analysing roughly 12,000 B2B software senders, and it inverts the standard advice.

Average daily volume per SDR fell from about 180 emails in early 2024 to about 90 in 2026. Booked-meeting rates per SDR went up. The teams described as winning are sending roughly 150 emails a week to about 40 accounts, researching each for five minutes, and landing reply rates above 12%. The old model sent 900 a week and averaged 1.2% replies.

So the direction of travel is smaller and more targeted, not larger and more automated. That reframes what AI is for. If volume was never the lever, then an AI SDR's value is not in generating ten times as many emails, since generating ten times as many emails from a domain with a fixed reputation budget mostly burns it faster. Its value is in the research step that makes forty emails worth sending.

Kaspersky put global spam at roughly 47% of all email traffic in 2024, and the honest read of that figure is that deliverability is a solved engineering problem that most teams have not actually solved. It is not a creative writing problem.

## A caveat on all of this

Nearly every deliverability guide published in 2026 is written by a company selling deliverability tooling. The 90% placement target, the 40 to 50 emails per inbox ceiling, and the 0.10% complaint goal all originate with vendors whose incentive is to make the problem sound hard. The Google and Yahoo requirements are not vendor opinion and are free to implement; start there, verify in Postmaster Tools, and treat everything else as a hypothesis worth testing on your own domain rather than a standard to adopt on faith.

<div class="aistack-diagram">
<svg viewBox="0 0 660 320" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">The order you fix these in matters more than how many you fix</text>
  <rect x="20" y="48" width="620" height="34" rx="6" class="df-box"/>
  <text x="330" y="70" class="df-box-text" text-anchor="middle">1. SPF, DKIM, DMARC with alignment</text>
  <rect x="20" y="92" width="620" height="34" rx="6" class="df-box"/>
  <text x="330" y="114" class="df-box-text" text-anchor="middle">2. Warm the domain, then scale by adding inboxes</text>
  <rect x="20" y="136" width="620" height="34" rx="6" class="df-box"/>
  <text x="330" y="158" class="df-box-text" text-anchor="middle">3. Verified list, hard bounces under 2%</text>
  <rect x="20" y="180" width="620" height="34" rx="6" class="df-box"/>
  <text x="330" y="202" class="df-box-text" text-anchor="middle">4. Spread sends, 40 to 50 per inbox per day</text>
  <rect x="20" y="224" width="620" height="34" rx="6" class="df-box"/>
  <text x="330" y="246" class="df-box-text" text-anchor="middle">5. Plain text, few links, no shorteners</text>
  <rect x="20" y="268" width="620" height="34" rx="6" class="df-box"/>
  <text x="330" y="290" class="df-box-text" text-anchor="middle">6. The words you actually chose</text>
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
    Stop editing the copy and fix the DNS. If SPF, DKIM, and DMARC are not configured with alignment against your visible From domain, nothing you write will matter, and unauthenticated mail can be rejected outright with a 5.7.26 error rather than merely filtered. Then check your user-reported spam rate in Postmaster Tools, because bulk sender status never expires and once you pass 0.3% you lose mitigation support for months. Use AI as a first draft and never as the final one, since the giveaways of model-written outreach are legible and the specific phrasing correlates with worse placement; rewrite the opening two sentences in your own voice and keep every send under 90 words to roughly 20 distinct recipients. And reverse your assumption about volume, because per-SDR daily sends halved while booked meetings rose, which means the valuable output of an AI SDR is research on forty well-chosen accounts rather than four hundred emails. Follow-ups at 40% to 50% more replies are a larger win than any subject line.
  </p>
</div>

## Sources

- [Email sender guidelines — Gmail Help](https://support.google.com/mail/answer/81126?hl=en)
- [Email sender guidelines FAQ — Gmail Help](https://support.google.com/mail/answer/14229414?hl=en)
- [Sender best practices — Yahoo](https://senders.yahooinc.com/best-practices)
- [Google and Yahoo email authentication requirements for bulk senders — Valimail](https://support.valimail.com/en/articles/9143173-google-yahoo-email-authentication-requirements-for-bulk-senders)
- [How to comply with Gmail's sending rules for bulk senders — Suped](https://www.suped.com/learn/email-deliverability/how-to-comply-with-gmails-new-sending-rules-for-bulk-email-senders)
- [Cold Email Deliverability 2026: SPF, DKIM, DMARC, warmup, sender reputation — Knowlee](https://www.knowlee.ai/blog/cold-email-deliverability-2026)
- [Cold email deliverability trends 2026 — Happierleads](https://happierleads.com/blog/cold-email-deliverability-trends-2026)
- [Cold email deliverability: the 2026 playbook — Reachly](https://www.reachly.co/blogs/how-to-fix-cold-email-deliverability)
- [Cold-email deliverability: a technical guide — OutreachBloom](https://outreachbloom.com/cold-email-deliverability)
- [What's a good cold email reply rate? Instantly's benchmarks](https://instantly.ai/blog/cold-email-reply-rate-benchmarks/)
- [Instantly's Cold Email Benchmark Report 2026](https://instantly.ai/cold-email-benchmark-report-2026)