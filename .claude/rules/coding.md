# Code Authoring Rules

You are writing production-quality code using Next.js, React, TypeScript, and Tailwind CSS.

Your priorities, in order, are:

1. Correctness
2. Simplicity
3. Readability
4. Maintainability
5. Consistency
6. Performance, when relevant

Always prefer the simplest solution that clearly solves the problem.

---

## General Principles

- Keep code simple, explicit, and easy to understand.
- Avoid unnecessary abstraction.
- Do not introduce patterns, helpers, hooks, services, factories, or components unless they make the code easier to understand, reuse, test, or maintain.
- Avoid premature optimization.
- Avoid premature abstraction.
- Prefer boring, predictable code over clever code.
- Reduce nesting whenever possible.
- Prefer early returns when they improve readability.
- Keep functions focused on one primary responsibility.
- Keep components focused on one clear UI responsibility.
- Avoid overly large files, functions, and components.
- Do not duplicate business logic.
- Small amounts of duplication are acceptable when the abstraction would make the code harder to understand.
- Do not create abstractions solely to remove a few repeated lines.
- Remove dead code instead of commenting it out.
- Do not add comments that merely explain what obvious code does.
- Comments should explain why a decision exists, a constraint, trade-off, workaround, or non-obvious behavior.

---

## Variables and Naming

Prefer named variables whenever they make intent clearer.

Avoid:

```ts
if (status === 2 && data.length > 0) {
```

Prefer:

```ts
const canPublishTournament =
  tournament.status === 'ready' && players.length > 0

if (canPublishTournament) {
```

Rules:

- Avoid magic numbers.
- Avoid magic strings.
- Extract meaningful constants when appropriate.
- Prefer domain language over generic technical language.
- Avoid vague names such as:
  - data
  - info
  - item
  - value
  - temp
  - result
  - obj

Use specific names whenever the domain provides one.

Examples:

- `players`
- `tournament`
- `leagueStandings`
- `selectedLeader`
- `canPublishTournament`

Boolean variables should normally use prefixes such as:

- `is`
- `has`
- `can`
- `should`

Arrays and collections should normally use plural names.

Functions should use verbs.

React event handlers should use:

- `handleSubmit`
- `handleDelete`
- `handleImport`

Callback props should use:

- `onSubmit`
- `onDelete`
- `onImport`

Components use PascalCase.

Hooks begin with `use`.

---

## TypeScript

- Avoid `any`.
- Do not use `any` simply to silence TypeScript.
- Avoid unnecessary type assertions with `as`.
- Avoid non-null assertions with `!` unless the invariant is guaranteed and obvious.
- Prefer TypeScript inference when the type is clear.
- Explicitly type important boundaries.
- Validate external data at runtime.
- Never assume data received from:
  - users
  - APIs
  - forms
  - files
  - databases
  - external services

is valid simply because TypeScript types exist.

Prefer unions and discriminated unions when they prevent invalid states.

Avoid multiple booleans when they can create impossible combinations.

Prefer:

```ts
type ImportState =
  | { status: "idle" }
  | { status: "uploading"; progress: number }
  | { status: "success"; tournamentId: string }
  | { status: "error"; message: string };
```

over combinations such as:

```ts
isLoading;
isSuccess;
isError;
```

when those states can contradict each other.

Avoid duplicating types that can safely be derived from existing schemas or domain definitions.

---

## React

- Do not store derived values in state.
- Do not use `useEffect` when a value can be calculated during render.
- Avoid using `useEffect` as a general synchronization mechanism.
- Avoid unnecessary `useMemo`.
- Avoid unnecessary `useCallback`.
- Optimize only when there is a concrete reason.
- Keep state as close as possible to where it is used.
- Avoid unnecessary global state.
- Avoid unnecessary Context.
- Avoid excessive prop drilling when it meaningfully harms maintainability.
- Use stable keys.
- Do not use array indexes as keys when the collection can reorder, insert, or delete items.
- Avoid complex logic directly inside JSX.
- Extract meaningful conditions and transformations before the return statement.
- Separate business logic from presentation when doing so improves clarity or testability.
- Do not split components purely to make files shorter.

---

## Next.js

Prefer Server Components by default.

Use `"use client"` only when required for:

- state
- effects
- browser APIs
- event handlers
- client-only libraries

Keep client boundaries as small as reasonably possible.

Do not send unnecessary JavaScript to the client.

Prefer server-side data fetching when appropriate.

Avoid client-side fetching when the same data can cleanly be resolved on the server.

Watch for request waterfalls.

Parallelize independent asynchronous operations.

Prefer:

```ts
const [players, tournament] = await Promise.all([
  getPlayers(),
  getTournament(),
]);
```

instead of sequential awaits when there is no dependency.

Use appropriate Next.js boundaries when relevant:

- `loading.tsx`
- `error.tsx`
- `not-found.tsx`

Validate inputs for:

- Server Actions
- Route Handlers
- API endpoints

Authorization must be enforced on the server.

Never rely on hiding UI elements as authorization.

Keep infrastructure and persistence details out of UI components when the architecture provides a repository or service boundary.

Be deliberate about:

- caching
- revalidation
- dynamic rendering
- navigation
- redirects
- metadata

Do not add complexity around these features when the application does not need it.

---

## Architecture

Prefer clear boundaries.

A typical separation may be:

- UI / components → presentation and interaction
- domain / use cases → business rules
- repository → persistence and data access
- schemas → runtime validation
- infrastructure → external services

Do not force every feature to use every architectural layer.

Only add a layer when it provides a concrete benefit.

Avoid:

- giant `utils.ts` files
- circular dependencies
- unnecessary cross-feature imports
- duplicated domain logic
- UI directly implementing persistence logic
- components tightly coupled to database implementation details

Prefer feature/domain organization when appropriate.

Respect existing project architecture unless there is a concrete reason to change it.

---

## Tailwind CSS

- Prefer existing design-system tokens and utilities.
- Avoid arbitrary values when a project token exists.
- Avoid unexplained values such as `w-[347px]`.
- Use arbitrary values only when there is a legitimate design requirement.
- Maintain consistent spacing.
- Maintain consistent typography.
- Maintain consistent radii.
- Maintain consistent responsive breakpoints.
- Prefer mobile-first responsive styles.
- Avoid extremely long, duplicated class lists.
- Extract a reusable component when repeated styling represents a reusable UI concept.
- Do not create a component solely to hide Tailwind classes.
- Use `cn()` or the project equivalent for conditional classes when appropriate.
- Keep conditional class logic readable.
- Avoid unnecessary CSS when Tailwind already provides a clear solution.

---

## Design System

Before creating a new component:

1. Check whether an existing primitive solves the problem.
2. Check whether an existing component can support the use case with a reasonable variant.
3. Only create a new primitive when there is a meaningful reusable concept.

Prefer:

- tokens instead of hard-coded values
- variants instead of nearly identical components
- consistent states
- predictable component APIs

Consider:

- default
- hover
- focus
- active
- disabled
- loading
- error

Do not create dozens of variants for one-off visual differences.

---

## Accessibility

Use semantic HTML first.

Use:

- `<button>` for actions
- `<a>` / `<Link>` for navigation
- proper headings
- `<label>` for form controls

Do not use clickable `<div>` elements when a native interactive element exists.

Ensure:

- keyboard navigation
- visible focus states
- accessible form labels
- useful alt text
- proper error messaging
- sufficient contrast
- focus management for dialogs and overlays

Use ARIA only when native HTML semantics are insufficient.

Accessibility should not be added as an afterthought.

---

## Async and Error Handling

Do not silently swallow errors.

Errors should provide useful context.

Differentiate expected application errors from unexpected exceptions.

When relevant, UI should handle:

- loading
- empty
- error
- success

Avoid floating promises.

Avoid unnecessary sequential awaits.

Consider race conditions when multiple asynchronous operations can compete.

Avoid duplicate requests.

Do not expose sensitive internal error details to users.

---

## Security

Treat all external input as untrusted.

Validate inputs.

Perform authorization server-side.

Verify ownership when accessing user-owned resources.

Do not expose secrets to client code.

Avoid `dangerouslySetInnerHTML`.

If it is required, sanitize the content correctly.

Never assume a client request is legitimate simply because the UI generated it.

---

## Performance

Do not optimize without evidence unless the issue is clearly problematic.

Pay attention to:

- N+1 queries
- repeated network requests
- unnecessary client components
- large bundles
- large images
- unnecessary rendering
- expensive repeated calculations
- sequential asynchronous work that can run concurrently

Prefer measurable improvements.

Do not sacrifice readability for hypothetical micro-optimizations.

---

## Testing

Test behavior rather than implementation details.

Prioritize:

- business rules
- critical workflows
- transformations
- permissions
- validation
- previously discovered bugs

Avoid:

- giant snapshots
- excessive mocking
- tests tied to internal implementation details

When fixing a meaningful bug, add a regression test when practical.

---

## Final Rule

Do not make the code more complicated in the name of making it "cleaner."

Every abstraction, dependency, component, hook, helper, service, or pattern must justify its existence.

Prefer code that another experienced developer can understand quickly without needing additional explanation.
