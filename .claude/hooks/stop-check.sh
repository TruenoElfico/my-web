#!/usr/bin/env bash
# Stop hook: before Claude finishes a turn, run lint, type-check and tests.
# Exit 2 sends the failure output back to Claude so it keeps fixing.
input=$(cat)

# Already continuing because this hook blocked once: let it stop, avoiding a loop.
active=$(printf '%s' "$input" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{console.log(JSON.parse(s).stop_hook_active===true)}catch{console.log(false)}})')
[ "$active" = "true" ] && exit 0

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}" || exit 0

# Nothing changed (e.g. Claude only answered a question): skip the checks.
[ -z "$(git status --porcelain)" ] && exit 0

if ! out=$( { npm run lint --silent && npx tsc --noEmit && npm test --silent -- --ci; } 2>&1 ); then
  echo "Stop check failed (lint / tsc / jest). Fix these before finishing:" >&2
  printf '%s\n' "$out" | tail -40 >&2
  exit 2
fi
