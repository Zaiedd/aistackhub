---
title: "The detector didn't flag your essay. Here's what your university is actually checking now"
description: "Turnitin scores are losing legal and academic ground in 2026. Process analytics and oral defenses are replacing them, and that changes what you actually need to keep."
date: "2026-09-30"
section: "ai-for-students"
tags: ["academic-integrity", "turnitin", "ai-detection", "university-policy", "study-skills"]
draft: false
---

Here is the part of the AI essay conversation that has quietly changed, and almost nobody has caught up to. Through 2025 the story was detectors versus cheaters: buy a tool, beat the score. Through 2026 the story is that a growing number of universities have stopped treating the score as evidence at all, and started looking at how the essay was produced instead.

That is not a small administrative shift. It changes what you need to be holding onto the night before you submit.

## The detectors got worse, and the evidence is not from vendors

It is easy to assume detection improved. It did not, and the strongest evidence comes from peer-reviewed work rather than vendor benchmarks.

A study covering 14 detectors, published in Communications of the ACM in June 2026, found that not one of them reached 80% accuracy, and that one in five let genuinely AI-generated text pass as human. The same field has flagged material that is definitionally not machine-written, including Macbeth, the US Constitution, and the Book of Genesis. The reason is structural rather than a bug: detectors score straightforward syntax, varied rhythm, strong transitions, and a measured tone as machine-generated, which is close to a description of good academic writing.

The failure is also trivially gameable. The RAID benchmark, which holds ten million human and AI documents, tested twelve detectors against more than six million AI samples across eight writing domains, eleven generative models, and eleven adversarial methods. Changing the decoding strategy or adding a repetition penalty was enough to push error rates above 95%.

And the bias problem has not gone away. A Stanford study found detectors labelled more than half of TOEFL essays by non-native English speakers as AI-generated while classifying US eighth-graders correctly more than 94% of the time. If your first language is not English, the same tool is measurably less likely to believe you.

Turnitin's own position is that it runs a less than 1 percent false positive rate on documents containing more than 20 percent AI-generated content, and it recommends the score be used as one strategy in a wider toolkit rather than as a finding. The reporting on that claim is worth reading carefully, though. A study covered in Times Higher Education in June 2026 found Turnitin did not flag any essay that was fully human-written, which is genuinely reassuring, but also found that for essays where between 15 and 40 percent of words came from an LLM, the score was frequently higher than the actual proportion. Under-reporting and over-reporting both happen; they just happen in opposite directions depending on how much assistance you used.

For context on scale: Turnitin says roughly one in ten university essays is now partly AI-written, and customers ran the detector about 65 million times in the three months after launch.

## What institutions did next

The response across 2026 has been to remove the score from the decision, not to improve it.

Washington State University ran a system review and de-emphasised AI detection for student discipline in February 2026, citing false positives and faculty discretion. The University of Waterloo removed the AI writing indicator from its standard integrity workflow entirely, shifting toward process and oral verification. University of California system guidance now advises strongly against using AI scores as sole evidence, though individual campuses implement it differently. Vanderbilt limited public use of AI scores in formal charges while detection may still run for faculty awareness. UCLA ran a reported pilot pausing AI-only referrals in selected colleges. The Big Ten's academic leadership issued a shared caution against detector-only accusations.

Outside the US the direction is the same. UK sector bodies including Jisc caution against decisions resting on detector output alone, several Canadian R1 universities reviewed their own false-positive data, and Australia's TEQSA stresses evidence beyond software scores.

If your institution has not published where it sits, this is worth five minutes with your academic integrity office before you submit anything high-stakes.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="30" class="df-q" text-anchor="middle">What are you holding onto before you submit?</text>
  <rect x="20" y="70" width="190" height="70" rx="8" class="df-box"/>
  <text x="115" y="100" class="df-box-text" text-anchor="middle">Continuous draft history</text>
  <text x="115" y="117" class="df-box-text" text-anchor="middle">with real revisions</text>
  <rect x="235" y="70" width="190" height="70" rx="8" class="df-box"/>
  <text x="330" y="100" class="df-box-text" text-anchor="middle">Version history plus</text>
  <text x="330" y="117" class="df-box-text" text-anchor="middle">sources you can explain</text>
  <rect x="450" y="70" width="190" height="70" rx="8" class="df-box"/>
  <text x="545" y="100" class="df-box-text" text-anchor="middle">One clean final</text>
  <text x="545" y="117" class="df-box-text" text-anchor="middle">draft, nothing else</text>
  <line x1="330" y1="40" x2="115" y2="70" class="df-arrow" marker-end="url(#ars1)"/>
  <line x1="330" y1="40" x2="330" y2="70" class="df-arrow" marker-end="url(#ars1)"/>
  <line x1="330" y1="40" x2="545" y2="70" class="df-arrow" marker-end="url(#ars1)"/>
  <rect x="20" y="190" width="190" height="60" rx="8" class="df-box"/>
  <text x="115" y="215" class="df-box-text" text-anchor="middle">Strongest position</text>
  <text x="115" y="232" class="df-box-text" text-anchor="middle">if a question comes</text>
  <rect x="235" y="190" width="190" height="60" rx="8" class="df-box"/>
  <text x="330" y="215" class="df-box-text" text-anchor="middle">Holds up to a</text>
  <text x="330" y="232" class="df-box-text" text-anchor="middle">process conversation</text>
  <rect x="450" y="190" width="190" height="60" rx="8" class="df-box"/>
  <text x="545" y="215" class="df-box-text" text-anchor="middle">Weakest position</text>
  <text x="545" y="232" class="df-box-text" text-anchor="middle">if flagged</text>
  <line x1="115" y1="140" x2="115" y2="190" class="df-arrow" marker-end="url(#ars1)"/>
  <line x1="330" y1="140" x2="330" y2="190" class="df-arrow" marker-end="url(#ars1)"/>
  <line x1="545" y1="140" x2="545" y2="190" class="df-arrow" marker-end="url(#ars1)"/>
  <defs>
    <marker id="ars1" class="df-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z"></path>
    </marker>
  </defs>
</svg>
</div>

## What replaced the score is process, and it is commercial

This is where it gets interesting, because the tool vendors have already adapted. If the score is no longer the decision, the product becomes the writing process itself.

Turnitin Clarity, which TIME named to its list of the best inventions of 2025, lets an educator view a student's entire drafting history including pasted text, writing time, construction time, and draft revisions, in a single workflow alongside the similarity and AI indicators. The pitch is blunt from Turnitin's side: without it you are missing an entire piece of the composition process.

That is a more serious capability than a score. A score tells a lecturer a number. Composition analytics tells them that your essay arrived in one paste at 3am, that the construction time was eleven seconds for a four-thousand-word document, and that nothing was revised. There is no detector evasion for that, because it is not a stylistic guess, it is a timestamp.

This is also not only an English-language problem. Turnitin expanded its AI writing detection to support Arabic-language submissions in August 2026, so process analytics on Arabic coursework is arriving at the same time the policy shift is.

## And then there is the conversation

The other replacement is the oldest assessment method in education. Oral exams are back, and the reporting on why is uncomfortable in a useful way.

Cornell's biomedical engineering courses now require students to sign up for 20-minute Socratic-style sessions after submitting written problem sets. A Cornell religious studies professor holds 30-minute final conversations instead of a final exam, and another engineering course runs four-minute mock interviews across a class of 180. The stated logic is blunt: students are turning in flawless problem sets and then cannot explain their own work. NYU's Stern School has gone further, running an AI-powered oral exam where a voice cloned from the professor asks about a group project and drills into details based on each student's answers, including whether they were the one who did the work.

The method has real problems, and institutions are saying so. A Norwegian secondary-school study found initial presentations ranged from five to sixteen minutes while follow-up discussions ranged from seven to twenty-three, and that with the same examiners some students got fewer than ten questions while others got nearly fifty. Oral exams systematically disadvantage students who are strong on the material but slower to express it in the language of instruction, which is a real risk if English is your second or third language.

The researchers' conclusion is that orals work best alongside written assessment rather than replacing it, and the example they give is the most useful template I have seen for this entire problem: submit an annotated draft with a reference list, then a five-minute conversation about why you included a particular source, one revision you made, and how AI assistance shaped your thinking.

<div class="verdict">
  <p class="verdict-label">VERDICT</p>
  <p>
    Stop optimising against the score and start keeping evidence of how you wrote. With Waterloo removing the indicator, Washington State de-emphasising it, and UC warning against using it as sole evidence, a low Turnitin number no longer protects you and a high one no longer convicts you; what matters now is whether you can show a real drafting process and talk about your decisions. Keep continuous drafts with genuine revisions rather than one clean final file, because construction time and paste timing are exactly what process analytics reads. If your first language is not English, documentation matters more than average, not less, since detectors are measurably worse at believing your writing. And find out where your own institution sits before you submit, because the policy is not national and your roommate's rule is not yours.
  </p>
</div>

## Sources

- [Can AI Detectors Be Trusted? — Communications of the ACM](https://cacm.acm.org/news/can-ai-detectors-be-trusted)
- [Inconsistent AI detection should prompt assessment rethink — Times Higher Education](https://www.timeshighereducation.com/news/inconsistent-ai-detection-should-prompt-assessment-rethink)
- [Which Universities Dropped AI Detection in 2026? Policy Tracker — Human Writes AI](https://humanwritesai.com/blog/university-ai-detection-policies-2026)
- [Colleges are turning to oral exams to combat AI — Los Angeles Times](https://www.latimes.com/world-nation/story/2026-04-28/colleges-are-turning-to-oral-exams-to-combat-ai)
- [Oral exams are making a comeback to stop AI cheating, but they have their own problems — EducationHQ](https://educationhq.com/news/oral-exams-are-making-a-comeback-to-stop-ai-cheating-but-they-have-their-own-problems-214167)
- [Stylometric detection of AI-generated texts — Digital Scholarship in the Humanities](https://doi.org/10.1093/llc/fqag064)
- [Turnitin expands AI writing detection to Arabic-language submissions — Turnitin APAC](https://www.turnitin.com.au/media-center/)