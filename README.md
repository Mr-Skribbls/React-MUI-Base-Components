# React MUI Base Components

A library of base [React](https://react.dev/) + [MUI (Material UI)](https://mui.com/material-ui/) components, designed to be reusable, themeable, and easy to extend.

The package is hosted and distributed directly from GitHub — no separate npm publish step required.

## What's included

- Modular, typed React components built on `@mui/material` (e.g. `ButtonSelect`).
- A shared MUI theme (`lightTheme`/`darkTheme`) as a foundation for consistent theming.
- A Storybook environment for developing and documenting components in isolation, with light/dark theme switching.
- Strict TypeScript with `@/*` path aliases and generated type declarations.

## Installation

Install directly from GitHub:

```bash
npm install github:Mr-Skribbls/React-MUI-Base-Components
```

Or pin to a release with a semver tag:

```bash
npm install github:Mr-Skribbls/React-MUI-Base-Components#semver:^0.1.0
```

### Peer dependencies

You must install the library's peer dependencies yourself (they are not bundled):

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled
```

`lodash` is a regular runtime dependency and is installed automatically.

## Usage

```tsx
import { useState } from 'react';
import { ButtonSelect } from '@mr-skribbls/react-mui-base-components';

const priorities = [
  { id: 1, name: 'Low' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'High' },
];

function App() {
  const [priority, setPriority] = useState<number>(1);

  return (
    <ButtonSelect<typeof priorities[number], number, string>
      options={priorities}
      valueProp="id"
      displayProp="name"
      selectedOption={priorities.find((p) => p.id === priority)}
      onChange={(id) => setPriority(id as number)}
    />
  );
}
```

Wrapping your app in the shared theme is optional but recommended:

```tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '@mr-skribbls/react-mui-base-components';

function Root() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
```

## Components

| Component      | Description                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `ButtonSelect` | MUI `ToggleButtonGroup`-based single-select rendering a set of options, with typed value/display key support. |

### `ButtonSelect` props

| Prop             | Type                            | Description                                                            |
| ---------------- | ------------------------------- | ---------------------------------------------------------------------- |
| `options`        | `T[]`                           | The list of options to render as toggle buttons.                       |
| `onChange`       | `(selectedValue?: V) => void`   | Called with the selected value when a button is pressed.               |
| `label?`         | `string`                        | Accessible label used for the group's `aria-label`.                    |
| `selectedOption` | `T`                             | The currently selected option.                                         |
| `disabled?`      | `boolean`                       | Disables all option buttons.                                           |
| `valueProp?`     | `SpecificTypeKeys<T, V>`        | The key of `T` whose value is used as the toggle value. Omit for primitives. |
| `displayProp?`   | `SpecificTypeKeys<T, D>`        | The key of `T` whose value is displayed. Omit to display the option directly. |

Where `V` and `D` are `number | string`, and options may be primitives (e.g. `string[]`) or objects (using `valueProp`/`displayProp`).

## Development

### Storybook

Run the Storybook dev server to build and preview components interactively:

```bash
npm run dev        # or: npm run storybook
```

Build a static Storybook site:

```bash
npm run build-storybook
```

The Storybook is configured with **light/dark theme switching** via `@storybook/addon-themes`. Use the toolbar dropdown to preview components in either theme.

### Building the library

```bash
npm run build      # typecheck + build ESM bundle and type declarations to dist/
```

Output lands in `dist/` (ESM `index.js` + `*.d.ts`). The bundle externalizes `react`, `react-dom`, all `@mui/*`/`@emotion/*` packages, and `lodash`.

### Type-checking

```bash
npm run typecheck
```

## Adding a new component

1. Create a folder under `src/components/<Name>/`.
2. Implement the component (`<Name>.tsx`) plus an `index.ts` barrel.
3. Add a co-located `<Name>.stories.tsx` for Storybook.
4. Re-export it from `src/index.ts`.

## License

[Apache-2.0](./LICENSE)
