---
title: "Anthropic caps instructions at 200 lines. OpenAI caps them at 32KB. Cursor says 500"
description: "AGENTS.md won, and it won by committee: it is stewarded under the Linux Foundation, used by over 60,000 projects, and read by Cursor, Copilot, Codex, Gemini CLI, Aider, and opencode. But the three tools that host it publish size limits that differ by an order of magnitude, resolve conflicting instructions in four different ways, and one of them will silently stop reading your file. Here is the actual state of each."
date: "2026-10-01"
section: "ai-for-developers"
tags: ["agents-md", "claude-md", "cursorrules", "copilot", "codex", "context-engineering", "prompting"]
draft: false
---

Three vendors published a size limit for their agent instruction files and no two of them agree. Anthropic targets under 200 lines per CLAUDE.md file. OpenAI's Codex stops collecting instructions at 32 KiB by default. Cursor advises keeping rules under 500 lines. GitHub's own prompt for generating `copilot-instructions.md` tells the agent the file must be no longer than two pages. That is a spread wide enough that a file which perfectly satisfies one tool is two and a half times over the recommendation of another.

Before that disagreement mattered, there was a filename disagreement, and that one got resolved. AGENTS.md is now the shared format, read by Cursor, GitHub Copilot, OpenAI Codex, Gemini CLI, Aider, Windsurf, Devin, Zed, Warp, VS Code, opencode, Semgrep's coding agent, and a dozen others. Here is what each tool actually does with it.

## The state of the format

| Tool | Reads AGENTS.md | Where | Documented size guidance |
| --- | --- | --- | --- |
| Anthropic Claude Code | Yes, but only conditionally | Working directory and every directory above it; subdirectories on demand | Target under 200 lines per file; files over 4 MiB are skipped entirely |
| OpenAI Codex | Yes | `~/.codex`, then project root down to your working directory | `project_doc_max_bytes` defaults to 32 KiB |
| Cursor | Yes, root and subdirectories | Nested files combine with parents | Keep rules under 500 lines |
| GitHub Copilot | Yes, stored anywhere in the repo | Nearest `AGENTS.md` in the directory tree takes precedence | No published limit; the generator prompt says no longer than 2 pages and not task specific |

Worth reading the Anthropic row twice, because "yes, but only conditionally" is doing real work there, and the codex row is not a line count at all. Codex concatenates files from the project root downward and stops adding once the combined size reaches `project_doc_max_bytes`, 32 KiB by default. That is roughly 500 to 600 lines of plain text, which means Codex will happily read a file twice the size Anthropic tells you not to write. The knob is configurable, and the docs tell you to raise it or split across nested directories when you hit the cap.

## Why the standard won

The AGENTS.md site gives the rationale plainly: README files are for humans, covering quick starts, project descriptions, and contribution guidelines, while AGENTS.md holds the extra context coding agents need, such as build steps, tests, and conventions that would clutter a README or are irrelevant to human contributors. The stated reason for not inventing another proprietary file is that they wanted a name and format that could work for anyone.

The scale is now part of the case: the format is used by over 60,000 open-source projects, and it is stewarded by the Agentic AI Foundation under the Linux Foundation. It is an actual published specification rather than an emerging convention, which is what happened to `.cursorrules` and `.windsurfrules` before it.

The scale detail that will convince you this is the long-term format is the main OpenAI repository, which contains 88 `AGENTS.md` files, one per package. That is the pattern the specification recommends for large monorepos, and it is already how one of the largest agent-friendly codebases is organised.

## Four different answers to the same question

Every tool resolves instruction conflicts, and no two resolve them the same way. This is the part that will quietly produce different behaviour in the same repository.

| Tool | Conflict resolution |
| --- | --- |
| AGENTS.md specification | The closest file to the edited file wins; explicit user chat prompts override everything |
| Cursor | Team Rules, then Project Rules, then User Rules, with earlier sources taking precedence |
| Cursor on nested `AGENTS.md` | More specific instructions take precedence over parents |
| Anthropic Claude Code | All files are concatenated, root first, so later files are read last; if two instructions contradict, Claude may pick one arbitrarily |
| GitHub Copilot | Personal instructions take highest priority, then repository, then organization; all relevant sets are provided |

Anthropic's row is the one to sit with. Its own documentation states that if a user rule and a project rule conflict, Claude may follow either one, and that you should keep the two consistent. That is not a bug description, it is a documented admission that the conflict resolution is the model's discretion.

Cursor's precedence is the strictest, and it is enforced at the dashboard: administrators can mark a Team Rule as enforced, which makes it required for all team members and not disableable in Customize. The same docs include the sentence that matters most for a compliance use case, which is that AI guidance should not be your only security control.

## The trap that will cost you a morning

Anthropic's support for AGENTS.md has a condition that is not obvious and has its own troubleshooting section in the docs.

By default, the setting called Project instructions is `claude-md-or-agents-md`. Under that default, Claude reads your `AGENTS.md` only when there is no `CLAUDE.md`, `.claude/CLAUDE.md`, or `CLAUDE.local.md` in your working directory or any directory above it. If one of those exists, your AGENTS.md is ignored.

The part that produces the support ticket is that `CLAUDE.local.md` counts. The documentation is explicit: because `CLAUDE.local.md` counts, adding one to keep your own uncommitted instructions in a project that relies on `AGENTS.md` stops Claude from reading `AGENTS.md` for you. A developer adds a gitignored local file to store personal notes, and the project's shared instructions silently stop applying.

There are three more conditions on the same feature. Reading `AGENTS.md` directly requires Claude Code v2.1.277 or later, and before v2.1.281 some sessions, specifically those on Amazon Bedrock or with telemetry disabled, read `CLAUDE.md` files only. And a session where AGENTS.md support is unavailable will not show the Project instructions setting at all in the config panel, so you cannot fix it from the panel in the session that needs it.

One difference worth knowing if you rely on observability: `InstructionsLoaded` hooks fire for CLAUDE.md files but do not fire for an AGENTS.md read through the setting. If your hook-based logging is how you know which instructions loaded, it will look like nothing loaded.

The fix is documented and cheap. Either set Project instructions to `claude-md-and-agents-md` so both are read, or put an `@AGENTS.md` import in a CLAUDE.md next to it. Anthropic explicitly recommends the import over a symlink for one reason that will bite a lot of people: creating a symlink on Windows needs Administrator privileges or Developer Mode, and Git checks out a committed symlink as a plain text file unless `core.symlinks` is enabled, which leaves that clone with a one-line CLAUDE.md in place of your instructions.

## Cursor ignores your markdown files

If you have been keeping `.cursor/rules` files, note that Cursor's project rules must use the `.mdc` extension. A plain `.md` file in `.cursor/rules` is ignored by the rules system, because it has no frontmatter to specify `description`, `globs`, and `alwaysApply`. Cursor's docs put it in a filename table as `api-guidelines.md` marked "Ignored (wrong extension)".

Cursor also has richer application modes that AGENTS.md does not, driven by three frontmatter fields. `alwaysApply: true` includes the rule always and ignores globs and description. `alwaysApply: false` with globs auto-attaches when a matching file is in context. `alwaysApply: false` with a description and no globs lets Agent decide based on relevance. `alwaysApply: false` with neither is manual-only, applied when you `@`-mention the rule. So if your rules need to load conditionally, that capability lives in `.mdc` rather than in AGENTS.md.

Two documented limits on Cursor's side are worth noting: rules do not impact Cursor Tab or other AI features, and User Rules are not applied to Inline Edit, only to Agent chat. If you are relying on instructions to shape inline edits, they are not there.

## Nothing here is enforcement

The single most important sentence across all four documentation sets comes from Anthropic: Claude treats CLAUDE.md files as context, not enforced configuration. To block an action regardless of what the model decides, you need a PreToolUse hook.

That distinction changes how you should write the file. Claude's content is delivered as a user message after the system prompt, not as part of the system prompt itself, so there is no guarantee of strict compliance, especially for vague or conflicting instructions. If an instruction must run at a specific point, such as before every commit or after each file edit, the vendor's own answer is to write it as a hook, which executes as a shell command at fixed lifecycle events and applies regardless of what the model decides to do.

The writing advice is consistent across vendors and is worth following literally:

- Write instructions concrete enough to verify. "Use 2-space indentation" instead of "Format code properly", "Run `npm test` before committing" instead of "Test your changes".
- Reference files instead of copying their contents, which keeps rules short and prevents them going stale as code changes.
- Do not copy your style guide into the instructions file. Cursor's list of what to avoid includes whole style guides, since you should use a linter, and documenting every possible command, since the agent already knows npm, git, and pytest.
- Do not duplicate what is already in the codebase; point at canonical examples instead.
- Add a rule only when you notice the agent making the same mistake repeatedly.

Two pieces of tooling make maintenance less of a chore than it sounds. Anthropic ships `/doctor prompt-audit`, which checks your instruction files for content written for older models, references to files or commands that do not exist, and instructions that contradict each other, and reports proposed edits without changing anything until you ask. And its `/init` command already reads other tools' instruction files, specifically Cursor rules in `.cursor/rules` or `.cursorrules` and Copilot rules in `.github/copilot-instructions.md`.

<div class="aistack-diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg">
  <text x="330" y="26" class="df-q" text-anchor="middle">One file, four readers, four limits</text>
  <rect x="20" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="80" class="df-box-text" text-anchor="middle">Claude Code</text>
  <text x="110" y="97" class="df-box-text" text-anchor="middle">under 200 lines</text>
  <rect x="240" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="80" class="df-box-text" text-anchor="middle">Codex</text>
  <text x="330" y="97" class="df-box-text" text-anchor="middle">stops at 32 KiB</text>
  <rect x="460" y="52" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="80" class="df-box-text" text-anchor="middle">Cursor</text>
  <text x="550" y="97" class="df-box-text" text-anchor="middle">under 500 lines</text>
  <line x1="204" y1="85" x2="234" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <line x1="424" y1="85" x2="454" y2="85" class="df-arrow" marker-end="url(#arc1)"/>
  <rect x="20" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="110" y="210" class="df-box-text" text-anchor="middle">Ignored if a</text>
  <text x="110" y="227" class="df-box-text" text-anchor="middle">CLAUDE.local.md exists</text>
  <rect x="240" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="330" y="210" class="df-box-text" text-anchor="middle">Conflicts resolved</text>
  <text x="330" y="227" class="df-box-text" text-anchor="middle">four different ways</text>
  <rect x="460" y="182" width="180" height="66" rx="8" class="df-box"/>
  <text x="550" y="210" class="df-box-text" text-anchor="middle">Context, never</text>
  <text x="550" y="227" class="df-box-text" text-anchor="middle">enforcement</text>
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
    Keep one AGENTS.md and size it for the strictest reader, which is Anthropic's 200 lines, not Codex's 32 KiB. The format settled: it is stewarded by the Agentic AI Foundation under the Linux Foundation, used by over 60,000 projects, and read by Cursor, Copilot, Codex, Gemini CLI, Aider, Windsurf, Devin, Zed, opencode, and others, so the days of maintaining four copies are over. Then handle the three things the shared format does not standardise. Check whether Claude Code is actually reading it, because the default setting skips AGENTS.md whenever a CLAUDE.md or CLAUDE.local.md sits above your working directory, and adding a gitignored CLAUDE.local.md is enough to silently disable your project's instructions; set Project instructions to claude-md-and-agents-md, or add an @AGENTS.md import, which is also the portable fix since committed symlinks break on Windows checkouts without core.symlinks. Assume no conflict resolution is shared, because the spec says the nearest file wins while Cursor enforces Team, Project, then User, and Anthropic states plainly that a user rule conflicting with a project rule may go either way. And write the file as guidance, not as a control, because Anthropic documents these files as context rather than enforced configuration delivered as a user message after the system prompt; anything that must happen at a fixed moment, like a check before every commit, belongs in a hook, and Cursor's own docs make the same point that AI guidance should not be your only security control.
  </p>
</div>

## Sources

- [How Claude remembers your project — CLAUDE.md, AGENTS.md, and auto memory (Anthropic documentation)](https://docs.claude.com/en/docs/claude-code/memory)
- [Cursor rules documentation](https://cursor.com/docs/context/rules)
- [Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [Custom instructions with AGENTS.md (OpenAI Codex documentation)](https://developers.openai.com/codex/guides/agents-md)
- [AGENTS.md — the open format, stewarded by the Agentic AI Foundation under the Linux Foundation](https://agents.md/)
- [agentsmd/agents.md repository referenced by the GitHub Copilot documentation](https://github.com/agentsmd/agents.md)