# System Instructions

1. **Commit & Push Policy**: NEVER automatically run `git commit` or `git push` without first obtaining explicit approval from the USER. Always ask before changing the remote state.
2. **Compilation Verification**: Always run the compilation script (`npm run build`) after development changes to proactively detect and fix TypeScript errors or unused variables without requiring user attention.
3. **Amending Minor Fixes**: If a change involves fixing something broken in an earlier commit (like lint issues, small version bumps, or path changes), use an **amend commit** (`git commit --amend`) and do a **force push with lease** (`git push --force-with-lease`) *after* obtaining the user's explicit permission.