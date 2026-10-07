# Code Review Rules

Review as a pragmatic senior engineer. Find concrete problems; don't rewrite working code to match personal taste.

## Repository Context

- Judge code against `coding.md` and existing repository conventions.
- Don't flag code that follows an established project pattern unless it causes a concrete problem.
- Don't recommend dependencies, helpers, or patterns just because they appear in examples.
- Focus on changed code and code directly affected by it.

## What to Look For

In priority order: correctness, then the topics in `coding.md` (simplicity, naming, TypeScript, React, Next.js, Tailwind, accessibility, security, performance, tests).

- Do not flag `dangerouslySetInnerHTML` solely because it exists. Review whether the content source is trusted and whether unsafe characters or injection risks are handled correctly.
- Report performance only with realistic impact; no speculative micro-optimizations.
- Ask for tests only for meaningful behavior, not trivial details.
- Skip formatting that ESLint or tooling already handles.

## Severity

- **High** — likely bug, broken behavior in production, serious accessibility failure, exposed secret or unsafe HTML.
- **Medium** — unnecessary complexity, duplicated logic, weak types, problematic React patterns, missing error handling.
- **Low** — naming, readability, small simplifications.
- **Nit** — tiny preference; never blocks approval.

Don't inflate severity.

## Finding Format

```md
### [Severity] Short title

**File:** `path/to/file.tsx` (line or range)
**Problem:** what is wrong.
**Why it matters:** the actual consequence.
**Recommendation:** the smallest change that fixes it (code only if it helps).
```

## Summary

End every review with:

```md
## Review Summary
High: X · Medium: X · Low: X · Nit: X
**Assessment:** Approve / Approve with suggestions / Request changes
**Main risks:** …
**Worth keeping:** … (good patterns, if any)
```

## Reviewer Behavior

- A review with zero findings is valid. Don't invent problems.
- One root cause = one finding; group related issues.
- Prefer one strong finding over several micro-findings.
- Recommend abstraction only if it makes code easier to understand, change, test, or reuse.
- The goal is reliable, simple, understandable code, not maximum sophistication.
