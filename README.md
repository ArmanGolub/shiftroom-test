# ShiftRoom

## Requirements

- Node.js 20+
- Yarn

## Setup

```bash
yarn install
```

## Development

```bash
yarn dev
```

Runs at [http://localhost:5173](http://localhost:5173).

## Build

```bash
yarn build
yarn preview
```

`build` outputs to `dist/`. `preview` serves that build locally.

## Code quality

```bash
yarn lint
yarn format
```

A pre-commit hook runs ESLint and Prettier on staged files.

## Project structure

```
src/
  common/     shared components (layout, ui), lib, styles
  core/       app entry, router, error boundary, global styles
  modules/    feature modules, each with its own index.ts public API
```

Conventions are documented in [CLAUDE.md](CLAUDE.md).
