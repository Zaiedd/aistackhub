---
title: "Two minutes a week: what the 2026 evidence actually says about AI tutors"
description: "Randomized trials from 2026 finally separate the two things people mean by AI tutoring, and they disagree. Unrestricted chatbot access produced negative retention effects in one trial. Coach-configured tutors embedded in structured practice produced measurable gains, and the gains were small."
date: "2026-09-30"
section: "ai-for-students"
tags: ["ai-tutoring", "study-skills", "learning-science", "research", "khanmigo", "higher-education"]
draft: false
---

Ask whether AI tutors work and you will get confident answers in both directions, usually from the same press release. That ambiguity exists because two completely different things are being called an AI tutor: a general chatbot you are free to ask anything, and a system deliberately configured to refuse to give you the answer. In 2026 the randomized evidence finally got specific enough to tell them apart, and the results do not point in the same direction.

## First, the access problem

Before asking whether a tutor works, you have to know whether students used it. Stanford's National Student Support Accelerator analyzed two school districts that rolled out an AI reading tutor and found that only about 61% of students in one district and 53% in the other used it at all, even with scheduled time set aside. Average weekly use was 2.18 minutes and 5.23 minutes respectively. Pairing the tool with a human tutor raised engagement by about one minute per week in one district and 4.4 minutes in the other, still far short of the 30 minutes a week the platform's own provider recommends for measurable reading gains.

Two minutes a week is not a tutor. It is a browser tab. Any study reporting that "students did not benefit from the AI tutor" is frequently reporting this number instead of an efficacy finding.

## The most useful experiment of the year went the wrong way at first

The strongest piece of evidence published in 2026 is a randomized field experiment in Hamilton County Schools, Tennessee, covering 6,997 sixth-to-eighth grade students across 20 schools and just under 100 teachers, reported as NBER Working Paper 35621. Every student used NUMI, a purpose-built computer-assisted learning platform with videos, practice, feedback, and worked solutions. Half were randomly given access to NUMI's AI tutor, and students were independently randomized to a mastery structure requiring three correct answers in a row or to non-mastery progression. After one 50-minute session in late March 2026, students took a 15-minute delayed test a week later. Of the initial sample, 6,327 sat the delayed test.

The AI group did not do more. They progressed more slowly, attempted fewer questions, and spent more time on each one. Their advantage showed up in a specific and more interesting place: after making a mistake, AI students were more likely to get the next attempt right and needed fewer attempts to return to a correct answer. Among mastery students using the tutor, the delayed test came in about three percentage points higher than conventional computer-assisted instruction, and the gains sat almost entirely on the easiest, most-practiced fraction questions.

Two findings in that paper should be read together. Mastery progression on its own substantially increased three-correct-in-a-row attainment but did not improve delayed learning at all, which means forcing the right number of correct answers is not sufficient if the student never engaged with why they were wrong. And the delayed gains were only marginally significant on a working paper that has not been peer-reviewed. A three-point gain that lives on the questions most similar to what was practiced is a weak result, and describing it as anything stronger would be dishonest.

## What changes when the tutor is configured to coach

The pattern holds across the smaller trials. Every design that shows a gain constrains the model and puts a person somewhere in the loop.

Google and Eedi Labs ran an exploratory randomized trial with 165 students aged 13 to 15 across five UK secondary schools, with 17 expert tutors supervising every message. Supervised AI support matched the human tutor at fixing an immediate mistake, 93.0% versus 91.2%, and at resolving the underlying misconception, 95.4% versus 94.9%. On knowledge transfer, meaning whether tutoring on one problem improved the student's ability to solve a new one, supervised AI beat the human tutor by 5.5 percentage points. An audit found factual errors in 0.1% of messages and no harmful content, and tutors approved the large majority of AI-drafted messages with no or minimal edits.

Stanford's Tutor CoPilot takes the opposite approach and helps the human rather than replacing them. In a preregistered trial covering 900 tutors and 1,800 K-12 students in Title I schools, students whose tutors had CoPilot access were 4 percentage points more likely to master math topics, with gains up to 9 points among students of lower-rated and less-experienced tutors. An analysis of over 350,000 tutor messages found CoPilot users were about 10 percentage points more likely to prompt students to explain their thinking and less likely to fall back on generic praise. It costs about $20 per tutor per year.

The mechanism in both cases is the same and it is worth naming precisely. The AI is not doing the thinking. It is buying the human tutor enough time per student to ask a probing question instead of delivering generic encouragement.

## The design that failed is the one you already have

The counterweight comes from a randomized trial of roughly 1,000 students across about 50 Turkish high-school math classes. Unrestricted GPT-4 access raised in-session practice performance by 48%, and those same students then scored 17% lower than classmates who had never had access to the tool, on a later unassisted exam.

That is the finding to sit with. The practice number went up, the learning number went down, and nothing about the in-session dashboard would have told you. A separate preregistered experiment reported in the same policy brief found that any AI involvement impaired participants' recall, a week later, of which ideas had originally been their own.

The longer-horizon school evidence is milder but consistent. A two-year cluster-randomized trial across 18 middle schools, reported as NBER Working Paper 35620, used Khanmigo configured to coach rather than answer. It raised math achievement by roughly 0.06 to 0.08 standard deviations over a school year, which the authors themselves describe as resembling what the same practice platform achieved without AI at all. Also a working paper, also modest, also not nothing.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="28" class="df-q" text-anchor="middle">What is standing between you and the answer?</text>
  <rect x="20" y="60" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="88" class="df-box-text" text-anchor="middle">A chatbot with</text>
  <text x="110" y="105" class="df-box-text" text-anchor="middle">no instructions</text>
  <rect x="240" y="60" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="88" class="df-box-text" text-anchor="middle">A coach that</text>
  <text x="330" y="105" class="df-box-text" text-anchor="middle">refuses to answer</text>
  <rect x="460" y="60" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="88" class="df-box-text" text-anchor="middle">A human with</text>
  <text x="550" y="105" class="df-box-text" text-anchor="middle">an AI draft</text>
  <line x1="330" y1="38" x2="110" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="38" x2="330" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="330" y1="38" x2="550" y2="60" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="186" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="214" class="df-box-text" text-anchor="middle">Practice up 48%,</text>
  <text x="110" y="231" class="df-box-text" text-anchor="middle">exam down 17%</text>
  <rect x="240" y="186" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="214" class="df-box-text" text-anchor="middle">Better recovery</text>
  <text x="330" y="231" class="df-box-text" text-anchor="middle">after a mistake</text>
  <rect x="460" y="186" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="214" class="df-box-text" text-anchor="middle">More probing</text>
  <text x="550" y="231" class="df-box-text" text-anchor="middle">questions asked</text>
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
    Use AI where it reacts to your specific error, and keep it away from anything you are supposed to produce from memory. That single distinction explains the entire 2026 literature: unrestricted chat access raised practice scores 48% and lowered later unassisted exam scores 17%, while the same models configured to coach and refusing to reveal answers beat their human-only comparison on knowledge transfer, and the largest 2026 trial found its entire benefit in what happened after a student got something wrong. Practically, that means use a tool with a bounded subject, a memory of your mistakes, and no way to hand you the solution; ask it why your approach failed rather than what the right answer is; and treat any number that measures the session rather than the test next week as a measure of engagement, not learning. If a study tells you AI tutoring did not work, check how often the students actually opened it, because two minutes a week is not a trial of tutoring.
  </p>
</div>

## Sources

- [Making AI Tutoring Productive: Evidence from a Mastery-Based Math Practice Experiment — NBER WP 35621](https://www.nber.org/papers/w35621)
- [Oreopoulos et al. working paper PDF](https://www.nber.org/system/files/working_papers/w35621/w35621.pdf)
- [Slow math: kids may learn more when AI makes them review mistakes — The Hechinger Report](https://hechingerreport.org/proof-points-ai-mastery-learning)
- [AI tutor slows math practice but improves post-mistake recovery in 6,997-student trial](https://www.edtechinnovationhub.com/news/ai-tutor-slows-math-practice-but-improves-post-mistake-recovery-in-6997-student-trial)
- [AI tutor access alone doesn't equate to student gains, study says — Stanford NSSA](https://nssa.stanford.edu/news/ai-tutor-access-alone-doesnt-equate-student-gains-study-says)
- [Research notes: two emerging strategies for using AI in tutoring — Stanford NSSA](https://nssa.stanford.edu/news/research-notes-two-emerging-strategies-using-ai-tutoring)
- [Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise — Stanford NSSA](https://nssa.stanford.edu/studies/tutor-copilot-human-ai-approach-scaling-real-time-expertise)
- [Tutor CoPilot working paper PDF](https://nssa.stanford.edu/sites/default/files/Tutor_CoPilot.pdf)
- [AI tutoring can safely and effectively support students — arXiv](https://arxiv.org/pdf/2512.23633)
- [LearnLM — Google Cloud](https://cloud.google.com/solutions/learnlm)
- [Eedi and Google DeepMind exploratory research results](https://www.eedi.com/news/new-exploratory-research-from-eedi-and-google-deepmind-reveals-human-in-the-loop-ai-tutoring-outperforms-human-only-support)
- [AI and student learning — Center for Practical AI issue brief](https://www.cp-ai.org/policymakers/briefs/ai-and-student-learning)