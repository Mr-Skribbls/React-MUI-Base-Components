# React MUI Base Components

A library of base [React](https://react.dev/) + [MUI (Material UI)](https://mui.com/material-ui/) components, designed to be reusable, themeable, and easy to extend.

The package is hosted and distributed directly from GitHub — no separate npm publish step required.

## What's included

- Modular, typed React components built on `@mui/material` (e.g. `ButtonSelect`, `ActiveAddress`).
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
npm install react react-dom @mui/material @emotion/react @emotion/styled @mui/x-data-grid dayjs immer
```

`lodash` and `react-icons` are regular runtime dependencies and are installed automatically. `dayjs` and `immer` are peer dependencies — install them yourself (both are included in the command above).

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
| `ActiveAddress`| Renders an address with a map button that deep-links to the Google Maps app and falls back to the web in a browser. |
| `ActivePhone`  | Renders a phone number with call and message buttons that are shown on mobile devices only.    |
| `ActiveEmail`  | Renders an email address with a button that opens a `mailto:` link in a new tab.               |
| `GridList`     | MUI X `DataGrid`-based list built from plain data rows with declarative column/selection configuration. |
| `AddableGridList` | `GridList` wrapped in a fill-height layout with an add-item dialog slot.                         |

### `ActiveAddress` props

| Prop      | Type     | Description                                                            |
| --------- | -------- | ---------------------------------------------------------------------- |
| `address` | `string` | The address to display and open in Google Maps.                        |

Clicking the map button attempts to open the native Google Maps app (`comgooglemaps://`) and, if the app isn't available, falls back to opening the Google Maps web search in a new tab after 500ms.

### `ActivePhone` props

| Prop    | Type     | Description                                                    |
| ------- | -------- | -------------------------------------------------------------- |
| `phone` | `string` | The phone number to display and use for the call/message links. |

The call (`tel:` link) and message (`sms:` link) buttons are rendered only on mobile devices, detected via the `useDevice` hook.

### `ActiveEmail` props

| Prop    | Type     | Description                                                        |
| ------- | -------- | ------------------------------------------------------------------ |
| `email` | `string` | The email address to display and open as a `mailto:` link.          |

Clicking the email button opens the user's mail client via a `mailto:` link in a new tab.

### `GridList` props

| Prop            | Type                            | Description                                                              |
| --------------- | ------------------------------- | ------------------------------------------------------------------------ |
| `data`          | `T[]`                           | The rows to display. Each row must have a unique `id` (`number`/`string`). |
| `configuration?`| `GridConfiguration<T>`          | Declarative column and selection setup (see below).                      |
| `events?`       | `GridEvents`                    | Callbacks (`onRowSelection`) for grid interactions.                      |

`GridList` derives its columns from the union of keys found in `data`. The `configuration` object tailors them:

| `configuration.columns` key | Type    | Description                                                      |
| --------------------------- | ------- | ---------------------------------------------------------------- |
| `hidden`                    | `(keyof T)[]` | Keys to exclude from the grid.                              |
| `order`                     | array   | Column key ordering (columns not listed are appended).           |
| `headers`                   | object  | `{ [field]: string }` header labels.                             |
| `types`                     | object  | `{ [field]: GridColType }` column types.                         |
| `actions`                   | object  | `{ [field]: (params) => ReactElement[] }` action column renderers. |
| `customCells`               | object  | `{ [field]: (value, row) => ReactNode }` custom cell renderers.  |
| `customCellClassNames`      | object  | `{ [field]: (params) => string }` per-cell CSS class names.      |
| `formats`                   | object  | `{ [field]: (value) => unknown }` cell value formatters.         |
| `dimensions`                | object  | `{ [field]: { width?, minWidth?, maxWidth?, flex? } }` column sizes. |

Selection is disabled by default. Enable it with `configuration.selection.multiSelect` (checkbox selection) and react to changes via `events.onRowSelection`. A controlled selection model can be passed with `configuration.selection.model`; use `configuration.selection.disabled` to disable row selection entirely. `configuration.getRowHeight` is forwarded straight to the `DataGrid`.

```tsx
import { GridList } from '@mr-skribbls/react-mui-base-components';

const pets = [
  { id: 1, name: 'Cat', age: 3 },
  { id: 2, name: 'Dog', age: 5 },
];

function App() {
  return (
    <GridList
      data={pets}
      configuration={{
        columns: {
          headers: { name: 'Name', age: 'Age (years)' },
          formats: { age: (value) => `${String(value)} yrs` },
        },
      }}
    />
  );
}
```

### `AddableGridList` props

| Prop              | Type                   | Description                                                   |
| ----------------- | ---------------------- | ------------------------------------------------------------- |
| `data`            | `T[]`                  | The rows to display (see `GridList`).                         |
| `addItemDialog`   | `ReactNode`            | Content rendered below the grid (e.g. a MUI `Dialog`).        |
| `configuration?`  | `GridConfiguration<T>` | Column/selection configuration (see `GridList`).              |
| `events?`         | `GridEvents`           | Grid interaction callbacks (see `GridList`).                  |

`AddableGridList` is a layout wrapper: it renders a `GridList` inside a fill-height flex column with the `addItemDialog` rendered beneath it. All grid behavior, props, and types are the same as `GridList`.

Because `AddableGridList` ships a CSS module for its layout, consumers should import the emitted stylesheet once:

```tsx
import '@mr-skribbls/react-mui-base-components/react-mui-base-components.css';
```

```tsx
import { AddableGridList } from '@mr-skribbls/react-mui-base-components';

const pets = [
  { id: 1, name: 'Cat', age: 3 },
  { id: 2, name: 'Dog', age: 5 },
];

function App() {
  return (
    <AddableGridList
      data={pets}
      addItemDialog={<AddPetDialog />}
      configuration={{ columns: { headers: { name: 'Name' } } }}
    />
  );
}
```

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

## Hooks

| Hook        | Description                                                                     |
| ----------- | -------------------------------------------------------------------------------- |
| `useDevice` | Detects the device's form factor and platform, returning `isMobile` and `isApple`. |
| `useImducer` | React state built on `useReducer` with Immer support for `SET`, `UPDATE`, and `DRAFT` actions. |

### `useDevice`

| Return   | Type      | Description                                                                 |
| -------- | --------- | --------------------------------------------------------------------------- |
| `isMobile` | `boolean` | `true` when the current device is a mobile/tablet form factor.               |
| `isApple`  | `boolean` | `true` when the current device is made by Apple (iPhone/iPad/iPod/Mac).      |

`isMobile` is a confidence-weighted vote across four detection strategies: Client Hints (`navigator.userAgentData.mobile`, 100), user-agent sniffing (60), touch support via `navigator.maxTouchPoints` (20), and screen width via `matchMedia('(max-width: 768px)')` (20). The device is considered mobile when the combined confidence reaches 100.

```tsx
import { useDevice } from '@mr-skribbls/react-mui-base-components';

function App() {
  const { isMobile, isApple } = useDevice();

  if (isApple) {
    return <span>Running on Apple hardware</span>;
  }

  return <span>{isMobile ? 'Mobile' : 'Desktop'}</span>;
}
```

### `useImducer`

`useImducer` is a `useReducer`-based state hook that accepts Immer-flavored actions. It returns the same `[state, dispatch]` API as `useReducer`. It relies on your project's own `immer` installation (a peer dependency), so the `draft` types in `DRAFT` actions are shared with your app rather than coming from a separate bundled copy.

| Action       | Shape                                        | Behavior                                             |
| ------------ | ------------------------------------------- | ---------------------------------------------------- |
| `ActionType.SET` | `{ type: 'set', value: T }`             | Replaces the entire state.                           |
| `ActionType.UPDATE` | `{ type: 'update', updateFn: (prev) => T }` | Builds the next state from the previous one.         |
| `ActionType.DRAFT` | `{ type: 'draft', draftFn: (draft) => void }` | Mutates an Immer `draft` of the state in place.      |

The initial state is deep-cloned when it is a non-primitive, so mutating it via `DRAFT` never leaks back into the caller's object.

```tsx
import { ActionType, useImducer } from '@mr-skribbls/react-mui-base-components';

interface Profile {
  name: string;
  details: { age: number };
}

function App() {
  const [profile, dispatch] = useImducer<Profile>({ name: 'Alex', details: { age: 30 } });

  return (
    <button
      onClick={() =>
        dispatch({
          type: ActionType.DRAFT,
          draftFn: (draft) => {
            draft.details.age += 1;
          },
        })
      }
    >
      Birthday
    </button>
  );
}
```

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

Output lands in `dist/` (ESM `index.js`, CJS `index.cjs`, and `*.d.ts`). The bundle externalizes `react`, `react-dom`, all `@mui/*`/`@emotion/*` packages, and `lodash`.

### Type-checking

```bash
npm run typecheck
```

## Adding a new component

1. Create a folder under `src/components/<Name>/`.
2. Implement the component (`<Name>.tsx`) plus an `index.ts` barrel.
3. Add a co-located `<Name>.stories.tsx` for Storybook.
4. Re-export it from `src/index.ts`.

## Publishing / Releasing

Because this package is installed directly from GitHub (there is no npm publish step), the compiled `dist/` output is **committed to the repository**. npm serves whatever lives in the git repo, so `dist/` must be rebuilt and committed on every release for consumers to receive the current code.

Release workflow:

```bash
# 1. Rebuild the latest bundle + type declarations
npm run build

# 2. Commit the source changes together with the fresh dist/
git add -A
git commit -m "..."

# 3. Tag the release and push everything
git tag v0.1.0
git push
git push --tags
```

Consumers then install it (optionally pinned to the tag):

```bash
npm install github:Mr-Skribbls/React-MUI-Base-Components
npm install github:Mr-Skribbls/React-MUI-Base-Components#v0.1.0
npm install github:Mr-Skribbls/React-MUI-Base-Components#semver:^0.1.0
```

## License

[Apache-2.0](./LICENSE)
