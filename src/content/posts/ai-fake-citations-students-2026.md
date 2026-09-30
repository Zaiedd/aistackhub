---
title: "One in 277 papers now contains a fake reference. Here's how to check yours"
description: "A 2026 audit of 125 million references found fabricated citations rising more than twelvefold, and a benchmark of 13 models found citation hallucination rates spanning 14% to 95%. The references your AI hands you are the least trustworthy thing on the page."
date: "2026-09-30"
section: "ai-for-students"
tags: ["academic-integrity", "hallucination", "citations", "research", "essay-writing", "ai-literacy"]
draft: false
---

There is a specific failure mode that used to be a curiosity and is now a measurable public health problem in academic writing: a citation that looks completely real, points at a real author, a real journal, a plausible year, and a paper that does not exist. It is not detectable by skimming. It is only detectable by opening it, which is precisely the step nobody does.

The scale of this got measured properly in 2026, and the numbers are worth knowing before you submit anything.

## The measurement

A correspondence published in The Lancet in May 2026 reported a reference-integrity audit of 2,471,758 biomedical papers from PubMed Central, spanning January 2023 to February 2026. Of 125,615,773 structured references extracted, 97.1 million carried a PubMed identifier and could actually be checked against PubMed, Crossref, OpenAlex, and Google Scholar. Among those, 4,046 were fabricated, spread across 2,810 papers.

The trajectory is the alarming part. In 2023, roughly one in 2,828 papers contained at least one fabricated reference. By 2025 that was one in 458. In the first seven weeks of 2026 it was one in 277. In raw rate terms the fabrication rate went from about four per 10,000 papers in 2023 to 51.3 per 10,000 in the fourth quarter of 2025 and 56.9 per 10,000 in early 2026, which the authors describe as an increase of more than twelve times. The rate was flat throughout 2023 and then began climbing in mid-2024, which lines up exactly with the arrival of mainstream AI writing tools.

Review articles carried a 57% higher fabrication rate than other paper types, 16.7 versus 10.6 per 10,000. If you are writing a literature review, you are in the highest-risk category of document to be producing.

A companion audit by Zhao and colleagues, posted in May 2026, ran a different pipeline across arXiv, bioRxiv, SSRN, and PubMed Central, checking 111 million references in 2.5 million papers. They estimate 146,932 hallucinated citations in 2025 alone, and Nature's coverage of the work led with the finding that the highest rates were on SSRN, the social sciences preprint server. More than 95% of references matched successfully, which is the reassuring half of that result and also the problem: the base rate of honesty is high enough that a small number of fabrications in a bibliography looks unremarkable.

Three findings from that audit matter more than the headline. The errors are concentrated in fields with rapid AI uptake, in manuscripts carrying linguistic signatures of AI-assisted writing, and among small and early-career author teams. Hallucinated references disproportionately assign credit to already prominent and male scholars, so the failure mode does not merely add noise, it skews attribution toward people who do not need it. And moderation catches almost none of it: an estimated 78.8% of non-existent citations still made it onto arXiv.

## How often does the model itself get it wrong

The rate at which these citations are generated is the number that should govern how you use a chatbot for a bibliography. A 2026 study benchmarking 13 language models across 40 computer science research domains found hallucinated-citation rates ranging from 14.23% to 94.93%, a spread of about 6.7 times between the best and worst model in the test. Even the best-performing model produced roughly one fabricated citation in seven.

That was measured under conditions where the model was simply asked to cite. Turning on retrieval helps but does not solve it. A separate study of the recurring phantom citation "Education Governance and Datafication," attributed to two real and prominent education scholars, traced it across 137 accessible source papers and found that fabricated references are not random inventions but patterned recombinations of real authors, real journals, and real dates. Duplication of the same phantom reference occurred in nearly 30% of cases. The same author examined ten AI-generated essays on datafication and school governance and found 9.2% of their references were still hallucinated, including an exact match to the most common phantom, even with web access enabled.

That last result is the practical one. Web-enabled retrieval is not a substitute for checking.

## Why it survives peer review

The structural reason is a trust gap, and it is worth understanding because it applies to your essay too. Reviewers operate on the assumption that authors are working in good faith, and nobody verifies thirty to fifty references per submission; that is not a reasonable demand on an already overwhelmed review process. A plausible-looking citation exploits exactly that assumption.

Conferences have started responding with force. ICLR 2026 chairs assembled a desk-reject queue of more than 600 submissions flagged for fabricated references, ICML and ACM CCS announced comparable policies for the 2026 cycle, and ACM CCS published a transparency report enumerating the AI-fabricated citations flagged during its own review. These are no longer edge cases being quietly corrected in proof stage.

Detection technology works, incidentally. CiteTracer, released in 2026, reaches 97.1% accuracy on a benchmark of 2,450 synthetic citations and detects 98.6% of fabricated citations in a real set of 807 references drawn from ICLR 2026 desk-rejected submissions. The detail worth borrowing is that each correctly detected fabricated citation triggered an average of 2.24 distinct error codes, meaning fabrications are usually wrong in several fields at once.

## The check that takes two minutes per reference

If a fabricated reference is typically wrong in more than one field at once, you do not need an expensive tool. You need a habit.

Search the exact title in quotes in Google Scholar. A title that returns nothing, or that returns a different paper with a similar-sounding title, is the case you are looking for. Real fabricated citations are recombinations, so the author and journal often genuinely exist while the title does not, which is exactly why searching by title and not by author is the right move.

Check that the DOI resolves at doi.org, and that when it resolves the venue, year, volume, and pages match what your citation claims. A DOI that resolves to a real paper from a different year is a different error from a DOI that does not resolve, and both are common.

Look for the recombination signature: a real and famous author attached to a title they would plausibly have written but did not, in a real journal, in a year slightly off. This is the pattern that fooled people for years, and it is the one to watch for.

And if you are using AI to build a bibliography, give it the sources rather than asking it to remember them. Paste the actual abstract or upload the PDF, then ask for citations constrained to what you provided. You will get worse coverage and real references, which is the correct trade. If you need a model to search for you, verify every single result before it enters the document, because the retrieval path still produced 9.2% fabrications in the one study that measured it directly.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="28" class="df-q" text-anchor="middle">What do you do with a citation before you keep it?</text>
  <rect x="20" y="60" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="88" class="df-box-text" text-anchor="middle">Search the title</text>
  <text x="110" y="105" class="df-box-text" text-anchor="middle">in quotes</text>
  <rect x="240" y="60" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="88" class="df-box-text" text-anchor="middle">Resolve the DOI</text>
  <text x="330" y="105" class="df-box-text" text-anchor="middle">and match fields</text>
  <rect x="460" y="60" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="88" class="df-box-text" text-anchor="middle">Check author and</text>
  <text x="550" y="105" class="df-box-text" text-anchor="middle">venue are real</text>
  <line x1="330" y1="38" x2="110" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="38" x2="330" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="38" x2="550" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="186" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="214" class="df-box-text" text-anchor="middle">Fabrications are</text>
  <text x="110" y="231" class="df-box-text" text-anchor="middle">usually real-ish</text>
  <rect x="240" y="186" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="214" class="df-box-text" text-anchor="middle">2.24 fields wrong</text>
  <text x="330" y="231" class="df-box-text" text-anchor="middle">per fake reference</text>
  <rect x="460" y="186" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="214" class="df-box-text" text-anchor="middle">One in 277 papers</text>
  <text x="550" y="231" class="df-box-text" text-anchor="middle">already has one</text>
  <line x1="110" y1="126" x2="110" y2="186" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="126" x2="330" y2="186" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="550" y1="126" x2="550" y2="186" class="df-arrow" marker-end="url(#arc1)"/>
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
    Treat every citation produced by a model as an unverified claim rather than a source, because the benchmark of thirteen models found fabricated-citation rates from 14% to 95% depending on which one you asked, and web-enabled retrieval still left 9.2% fabrications in essays that used it. Never let a chatbot build a bibliography from memory; hand it the papers and ask it to cite what you provided. Then verify every reference yourself with the two-minute routine: search the exact title in quotes, resolve the DOI, and check that venue, year, and pages match. Search by title rather than by author, because fabrications are patterned recombinations that usually attach a real and famous name to a title that never existed. If you are writing a literature review, know that you are in the document type with a 57% higher fabrication rate than average, and budget extra time for it.
  </p>
</div>

## Sources

- [Fabricated citations: an audit across 2.5 million biomedical papers — The Lancet](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2826%2900603-3/fulltext)
- [LLM hallucinations in the wild: large-scale evidence from non-existent citations — arXiv 2605.07723](https://arxiv.org/abs/2605.07723)
- [LLM hallucinations in the wild — full paper PDF](https://arxiv.org/pdf/2605.07723)
- [Hallucinated citations highest in social sciences preprints site — Nature](https://www.nature.com/articles/d41586-026-01545-1)
- [AI-generated fake citations are flooding scientific literature — Phys.org](https://phys.org/news/2026-05-ai-generated-fake-citations-scientific.html)
- [GhostCite: a large-scale analysis of citation validity in the age of large language models — arXiv](https://arxiv.org/html/2602.06718v2)
- [Source or It Didn't Happen: a multi-agent framework for citation hallucination detection — arXiv 2605.08583](https://arxiv.org/abs/2605.08583)
- [How unique are hallucinated citations offered by generative AI models? — arXiv 2604.16407](https://arxiv.org/abs/2604.16407)
- [Fabrication and errors in the bibliographic citations in the biomedical literature — Nature Scientific Reports](https://www.nature.com/articles/s41598-023-41032-5)