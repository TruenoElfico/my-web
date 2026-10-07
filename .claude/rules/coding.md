# Code Authoring Rules

Stack: Next.js (App Router), React, TypeScript, Tailwind CSS. This is a static site; a future backend would only serve blog posts and projects (no users, auth, or user data).

Priorities, in order: correctness, simplicity, readability, maintainability, consistency, performance (when relevant). Prefer the simplest solution that clearly solves the problem.

## Repository Context

These are principles, not rigid requirements.

- Inspect and follow existing repository conventions; replace one only for a concrete benefit.
- Do not add dependencies or helpers just to satisfy these rules or because an example uses them.
- Examples illustrate principles; project-specific rules override them.

## General

- Prefer boring, explicit code over clever code. Reduce nesting; use early returns.
- Keep functions and components focused on one responsibility.
- No premature abstraction or optimization. Every helper, hook, or component must earn its place; small duplication beats a confusing abstraction.
- Do not duplicate business logic.
- Delete dead code instead of commenting it out.
- Comments explain *why* (constraints, trade-offs, non-obvious behavior), not *what*.

## Naming

- Use domain names; avoid vague ones (`data`, `item`, `value`, `temp`, `info`, `obj`).
- Name complex conditions instead of inlining them:

```ts
const canShowComparison = showComparison && rows.length > 0;
```

- Avoid magic numbers and strings; extract meaningful constants.
- Booleans: `is`/`has`/`can`/`should`. Collections: plural. Functions: verbs.
- Event handlers: `handleX`. Callback props: `onX`. Components: PascalCase. Hooks: `useX`.

## TypeScript

- No `any`, and no `as` or `!` just to silence the compiler.
- Prefer inference; type important boundaries explicitly.
- Derive types from existing data (e.g. `typeof en.services_page.faq`) instead of duplicating them.
- Prefer unions over multiple booleans that can contradict each other.
- Validate external data (CMS, files, APIs) at runtime; types alone don't guarantee it.

## React

- Don't store derived values in state; compute them during render.
- Don't use `useEffect` for what can be calculated during render or read from an external store.
- No `useMemo`/`useCallback` without a concrete reason.
- Keep state close to where it's used; avoid unnecessary Context.
- Use stable keys; no array-index keys for lists that can reorder.
- Move complex conditions and transformations out of JSX, before the `return`.
- Don't split components only to make files shorter.

## Next.js

- Server Components by default. Use `"use client"` only for state, effects, browser APIs, event handlers, or client-only libraries (e.g. framer-motion), and keep client boundaries small.
- Fetch data on the server when possible; run independent async work with `Promise.all`.
- Use `loading.tsx`, `error.tsx`, `not-found.tsx`, caching, and revalidation only when a page needs them.

## Tailwind CSS

- Use existing tokens and theme objects; avoid hard-coded colors and unexplained arbitrary values (`w-[347px]`).
- Keep spacing, typography, radii, and breakpoints consistent; style mobile-first.
- Extract a component when styling represents a reusable UI concept, not just to hide classes.
- Use the project's existing approach for conditional Tailwind classes.
- Do not introduce `cn()`, `clsx`, `classnames`, or a similar helper solely because conditional classes exist.
- Use a class composition helper only when conditional class logic becomes meaningfully difficult to read or when the project already uses one consistently.
- Simple template strings and conditional expressions are acceptable when they remain clear.

## Components

Before creating a component, check whether an existing one (or a reasonable variant) solves it. Prefer variants over near-duplicates, but don't add variants for one-off differences. Cover relevant states: hover, focus, active, disabled.

## Accessibility

- Semantic HTML first: `<button>` for actions, `<a>`/`<Link>` for navigation, proper heading order, `<label>` for inputs. No clickable `<div>`s.
- Keyboard support, visible focus, useful alt text, sufficient contrast, focus management in dialogs.
- Use ARIA only when native semantics are insufficient.

## Security

- Never expose secrets to client code.
- Avoid `dangerouslySetInnerHTML` for untrusted, user-provided, or dynamically generated HTML.
- It may be used for controlled framework-supported cases such as JSON-LD `<script>` tags when the content is serialized and escaped safely.

## Errors and Performance

- Don't silently swallow errors or leave floating promises.
- Handle loading, empty, and error states where data can be missing.
- Optimize only with evidence; watch bundle size, unnecessary client components, and large images.

## Testing

- Test behavior, not implementation details. Avoid large snapshots and excessive mocking.
- Prioritize transformations, data shown to users, critical interactions, and past bugs.
- Add a regression test when fixing a meaningful bug.

## Final Rule

Don't make code more complicated in the name of "clean." Write code an experienced developer understands quickly without explanation.
