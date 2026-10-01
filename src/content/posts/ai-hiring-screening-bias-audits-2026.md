---
title: "NYC requires a bias audit on hiring AI. A study of 116 of them found most pass"
description: "Local Law 144 obliges employers to run an independent bias audit on automated hiring tools, publish it, and notify candidates. It says nothing about fixing what the audit finds. A 2025 FAccT paper analysed all 116 publicly available audits and found most do not report results suggesting a violation of the four-fifths rule, while also showing the underlying tools could often be in violation once missing demographic data is accounted for. HireVue's own blog says whether its tools qualify as AEDTs is the employer's call. Here is where the enforcement pressure is heading."
date: "2026-10-01"
section: "ai-for-business"
tags: ["hiring", "bias", "compliance", "nyc", "workday", "eeoc", "ai-act", "hr-tech"]
draft: false
---

New York City passed a law requiring employers to audit their automated hiring tools for discrimination, publish the results, and notify candidates. It has been enforceable since 5 July 2023. What it does not do is require anything to be fixed. The law obliges you to find out whether your screening tool discriminates, then says nothing about what you do with the answer.

The most thorough study of those audits tells a strangerer story than you would expect. In 2025, researchers collected and analysed every Local Law 144 bias audit publicly available between the law taking effect in July 2023 and early November 2024, a sample of 116 documents, and published the result at FAccT: most audits do not report results that would not suggest violations of the four-fifths rule.

Read the rest of that finding before you draw a conclusion. The same paper shows the tools could often be in violation of the four-fifths rule once the impact of missing demographic data is considered. So the audits largely pass, and the reason they pass is partly a property of the audit format rather than a clean bill of health.

## What the law actually requires

The Department of Consumer and Worker Protection's requirements are specific, and vendor summaries of them are usually looser than the text.

Covered employers are those using an automated employment decision tool, and coverage attaches to jobs located in New York City plus remote roles tied to a New York City office. The obligations are:

- An independent bias audit completed within one year before the tool is used.
- Publication of the audit information publicly, including a summary of the audit and the date it was conducted.
- Candidate notice, so applicants are told an automated tool is being used.

The audit must report selection and scoring rates, and impact ratios broken down by sex, race and ethnicity, and intersectional categories.

The gap is the sentence that is absent. Nothing in the law requires an employer to act when disparate impact is found. An employer can publish a result showing a group is filtered out at nearly twice the rate of the comparison group, keep using the tool, and be in compliance. The audit is a disclosure obligation, not a duty of care.

| Obligation | What you must do | What it explicitly does not require |
| --- | --- | --- |
| Independent audit | Commission one from an independent auditor, completed within one year before use | Changing the tool if it fails |
| Publication | Publish the audit summary and its date publicly | A passing result |
| Candidate notice | Tell applicants an automated tool is being used | Consent, or an opt-out route |
| Reporting detail | Selection and scoring rates, and impact ratios by sex, race, ethnicity, and intersection | Remediation of adverse impact |

## Why 116 audits mostly came back clean

The FAccT paper, titled Auditing the Audits, identified several specific reasons a compliant audit can be an uninformative one:

- **Missing demographic data.** Candidates who decline to provide race or gender are excluded from the calculation, so the more a population declines to self-identify, the narrower the evidence base becomes.
- **Opaque data aggregation.** Audits may pool results across many employers and implementations, and the paper notes that aggregated impact ratios cannot be computed directly from aggregated selection rates, because each implementation's ratio has to be converted, averaged, and converted back.
- **Problematic use of test data.** Some audits are run on synthetic or test populations rather than on the employer population where the tool is actually deployed.
- **Metrics that do not reflect real use.** The impact ratio is defined as a group's selection rate divided by the selection rate of the most-selected group, which is a measure of the tool's output, not of how the employer actually used the recommendation afterwards.

On top of that, the paper documents silent duplicates, where near-identical audits are filed under different names and inflate the apparent number of independent audits in circulation.

The practical consequence is that the number of audits published tells you very little about how fair the tools are. A tool can pass four-fifths in an aggregated audit built on a self-selected subset, and a person who declined to state their race is simply not in the denominator. The researchers' own summary of their result is the part to hold on to: the tools could often be in violation when the potential impacts of missing data are considered.

## The vendor says the employer owns the obligation

HireVue has run its audits with DCI Consulting Group, the same auditor named on the publicly filed New York City reports, producing what it describes as nearly 300 different bias audit tables across competencies, job levels, and national and city-specific results.

Its own explanation of the arrangement contains the sharpest line in this whole area. Discussing compliance with Local Law 144, HireVue writes that whether any of its assessment tools ultimately qualify as an automated employment decision tool falls on the employer and on how they choose to use the tool.

Read that again against the legal requirement above. The vendor audits the algorithm. The employer decides whether the algorithm is legally an AEDT. The employer therefore carries the obligation, the liability, and the disclosure duty, while the vendor that built the tool has no duty to tell the employer it is out of compliance. HireVue's framing of its audits as work performed on customers' behalf, rather than as a compliance service it owes the regulator, is consistent with that.

If you are an employer in New York City, the practical consequence is narrow and annoying: you cannot rely on your vendor's audit summary to establish that you are compliant, and you cannot rely on your vendor to decide whether the law applies to you.

## What models do when you just ask them to rank candidates

Independent of any vendor, the behaviour of frontier models on this task is measurable. Wilson and Caliskan tested language models across more than 500 résumés, 500 job descriptions, and 9 occupations, and reported that models favoured White-associated names in 85.1% of comparisons, favoured female-associated names in only 11.1%, and disadvantaged Black male applicants in up to 100% of cases in some settings.

Seshadri and colleagues examined resume summarization and applicant ranking, and titled the finding for what it is: small changes, large consequences. Minor prompt and design variations produce large differences in who gets advanced.

Both results point at the same structural risk in small-business hiring. If a model shows a strong name-associated preference unaided, then any tool that ranks or summarises candidates inherits it, and the further you tune the prompt to get useful output, the further you are from the version anyone measured. This is also why the audit's aggregated impact ratio is an incomplete description of the risk: the ratio describes the tool, not the model underneath it.

| Study | What was measured | What it found |
| --- | --- | --- |
| Auditing the Audits, FAccT 2025 | All 116 LL144 audits published July 2023 to early November 2024 | Most do not report results suggesting a four-fifths violation, yet the tools could often be in violation once missing demographic data is accounted for |
| Wilson and Caliskan | 500 résumés, 500 job descriptions, 9 occupations | White-associated names favoured in 85.1% of comparisons, female-associated names in 11.1% |
| Seshadri et al. | Résumé summarization and applicant ranking | Small prompt and design changes shift who gets advanced |

## Enforcement is real and small

The clearest government enforcement action in this space is the EEOC's case against iTutorGroup, which settled for $365,000. Screening software at the company automatically rejected female applicants aged 55 and older and male applicants aged 60 and older, rejecting more than 200 US applicants, and the claim was under the Age Discrimination in Employment Act. The case is Civil Action No. 1:22-cv-02565.

Note what kind of case that is. It is a single employer's single bad threshold, provable from the employer's own configuration, and it did not require anyone to establish that iTutorGroup's screening tool was systematically biased. There was nothing to audit.

The agency's framework document is the other thing to read if you are deciding what compliance means: the EEOC guidance on assessing adverse impact in software, algorithms, and artificial intelligence used in employment selection procedures under Title VII, issued 18 May 2023. The direct eec.gov URLs for that guidance were returning errors at the time of writing, which is why the link below is the ACLU's mirror of the same document.

## Mobley is where the exposure changes

The case that could turn individual enforcement into vendor liability is Mobley v. Workday, in the Northern District of California, case number 3:23-cv-00770, before Judge Rita F. Lin. The posture as of late September 2026:

- On 12 June 2026 the court ordered supplemental briefing on whether the collective action question was moot.
- A hearing on the motion to dismiss was held on 15 June 2026.
- On 22 June 2026 the court granted in part and denied in part the motion to dismiss.
- On 1 July 2026 the court allowed submission of a partially stricken third amended complaint.
- On 2 July 2026 the court denied the motion for interlocutory certification under section 1292(b).
- On 14 September 2026 a motion to certify a class was filed, with a hearing set for 9 March 2027 and responses due 10 November 2026.

The significance is the theory, not the schedule. The claim is aimed at the vendor rather than only at the employer, on the basis that screening recommendations were driven by the vendor's software across many employers. If a class is certified, the question stops being whether one employer made one bad decision and becomes whether the tool's design makes the same decision everywhere it is deployed. For a small business, that is the difference between a remediation project and a platform-shaped problem.

## The EU deadline moved, and that matters more than it sounds

Employment and recruitment AI is classified high-risk under Annex III, point 4 of the EU AI Act, which covers recruitment or selection, including analysing and filtering job applications and evaluating candidates.

The date is the part that keeps moving. High-risk employment obligations were originally scheduled to apply from 2 August 2026. Under the AI Omnibus, adopted 19 November 2025, with political agreement reached 7 May 2026 and entry into force 27 July 2026, that date was extended to 2 December 2027.

So any compliance timeline built this year against the August 2026 date is now a year out. That is real breathing room, and it is also the point at which the obligation stops being theoretical. The measurement work you do this year is the work you will have to defend.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">What the law covers, and where it stops</text>
  <rect x="20" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="80" class="df-box-text" text-anchor="middle">Run the audit</text>
  <text x="110" y="97" class="df-box-text" text-anchor="middle">independent, within a year</text>
  <rect x="240" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Publish it</text>
  <text x="330" y="97" class="df-box-text" text-anchor="middle">ratios, not a score</text>
  <rect x="460" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="80" class="df-box-text" text-anchor="middle">Tell candidates</text>
  <text x="550" y="97" class="df-box-text" text-anchor="middle">that a tool is used</text>
  <line x1="204" y1="85" x2="234" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="85" x2="454" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="210" class="df-box-text" text-anchor="middle">No duty to fix it</text>
  <text x="110" y="227" class="df-box-text" text-anchor="middle">publishing is the law</text>
  <rect x="240" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="210" class="df-box-text" text-anchor="middle">116 audits studied</text>
  <text x="330" y="227" class="df-box-text" text-anchor="middle">most report a pass</text>
  <rect x="460" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="210" class="df-box-text" text-anchor="middle">Mobley targets</text>
  <text x="550" y="227" class="df-box-text" text-anchor="middle">the vendor's design</text>
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
    Do not treat a published bias audit as evidence that your hiring tool is fair, because the largest study of those audits says that is exactly what it cannot tell you. Local Law 144 requires an independent audit within a year before use, public publication of the results, and candidate notice, and it requires nothing else, so publishing is the whole of your legal obligation. The 2025 FAccT analysis of all 116 publicly available audits found that most do not report results suggesting a four-fifths violation, and simultaneously found the tools could often be in violation once the impact of missing demographic data is considered, which means the clean result is partly a property of the audit format. Four things drive that, and all four are worth asking about: missing demographic data excludes anyone who declined to self-identify, aggregated impact ratios cannot be recomputed from aggregated selection rates, some audits run on test data rather than your population, and the impact ratio measures the tool's output rather than how you used its recommendation. Expect vendors to be reassuring here, because HireVue's own blog states that whether its assessment tools qualify as an automated employment decision tool falls on the employer and on how the employer uses the tool, which hands you the obligation, the liability, and the disclosure duty while the toolmaker keeps only the audit work. Test the underlying model separately, because across 500 résumés and 9 occupations models favoured White-associated names in 85.1% of comparisons and female-associated names in only 11.1%, and small prompt changes have been measured to shift who gets advanced. Watch Mobley v. Workday rather than only your own exposure, because the class certification motion filed on 14 September 2026 aims at the vendor's design rather than one employer's decision, with a hearing set for 9 March 2027. And use the year you have been given: EU high-risk employment obligations now apply from 2 December 2027 rather than 2 August 2026, so run your own measurement early, write down the screening criterion you actually applied, and keep that note, because the entire theory of liability in these cases is an employer that cannot explain how a candidate was filtered.
  </p>
</div>

## Sources

- [Local Law 144 of 2021 — Automated Employment Decision Tools (NYC Department of Consumer and Worker Protection)](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page)
- [NYC DCWP AEDT Frequently Asked Questions (PDF)](https://www.nyc.gov/assets/dca/downloads/pdf/about/DCWP-AEDT-FAQ.pdf)
- [Gerchick et al., Auditing the Audits: Lessons for Algorithmic Accountability from Local Law 144's Bias Audits, FAccT 2025, pages 29-44, N=116](https://dl.acm.org/doi/full/10.1145/3715275.3732004)
- [HireVue — AI in Hiring: Legal and Ethical Implications, on the DCI audits and on AEDT status resting with the employer](https://www.hirevue.com/blog/hiring/ai-hiring-legal-ethical-implications)
- [Publicly filed New York City Local Law 144 bias audit for HireVue, conducted by DCI Consulting Group](https://seo.nlx.org/burlington/pdf/HireVue%20Audit%20Results%208.18.25.pdf)
- [EEOC and iTutorGroup settle discriminatory hiring suit for $365,000 (11 September 2023)](https://www.eeoc.gov/newsroom/itutorgroup-pay-365000-settle-eeoc-discriminatory-hiring-suit)
- [Select Issues: Assessing Adverse Impact in Software, Algorithms, and AI Used in Employment Selection Procedures Under Title VII (EEOC, 18 May 2023, ACLU mirror)](https://data.aclum.org/storage/2025/01/EOCC_www_eeoc_gov_laws_guidance_select-issues-assessing-adverse-impact-software-algorithms-and-artificial.pdf)
- [Mobley v. Workday Inc. docket, N.D. Cal. 3:23-cv-00770 (CourtListener)](https://www.courtlistener.com/docket/66831340/mobley-v-workday-inc/)
- [Mobley v. Workday order of 1 July 2026 (Justia)](https://cases.justia.com/federal/district-courts/california/candce/3%3A2023cv00770/408645/372/0.pdf)
- [Wilson & Caliskan, name-associated discrimination in LLM hiring decisions (arXiv 2407.20371)](https://arxiv.org/abs/2407.20371)
- [Seshadri et al., Small Changes, Large Consequences: Allocational Fairness of LLMs in Hiring Contexts (arXiv 2501.04316)](https://arxiv.org/abs/2501.04316)
- [EU AI Act Annex III — high-risk use cases including employment and recruitment (AI Act Service Desk)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3)
- [Regulatory framework for AI: risk categories, high-risk obligations and timeline (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)