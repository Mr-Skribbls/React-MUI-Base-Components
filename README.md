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
| `ColorPickerButton` | A color swatch button that opens a picker dialog and reports changes.                              |
| `Overlay`           | A transparent, full-screen layer that centers its content over the page.                        |
| `FieldContainer`    | An MUI `Stack` wrapper for form fields with optional drag-and-drop handlers.                     |
| `ResponsiveButton`  | A button that shows full text on desktop and icon-only on mobile via CSS media queries.            |
| `HorizontalTabDisplay` | A horizontal tabbed panel powered by MUI `Tabs`.                                               |
| `VerticalTabDisplay`  | A responsive tabbed panel: vertical on desktop, horizontal on mobile (< 600px).                  |

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

### `ColorPickerButton` props

| Prop             | Type                  | Description                                                                |
| ---------------- | --------------------- | -------------------------------------------------------------------------- |
| `color`          | `Color`               | The initial color shown by the swatch.                                     |
| `onChange`       | `(color: Color) => void` | Called with the new `Color` as the picker changes.                        |
| `configuration?` | object                | Swatch styling and dialog behavior (see below).                            |

| `configuration` key | Type      | Default | Description                                        |
| ------------------- | --------- | ------- | -------------------------------------------------- |
| `size`              | `number`  | `35`    | Swatch button width/height in pixels.               |
| `padding`           | `number`  | `5`     | Inner padding in pixels.                            |
| `borderRadius`      | `number`  | `5`     | Corner radius in pixels.                            |
| `allowDialog`       | `boolean` | `true`  | When `false`, clicking does not open the picker dialog. |

`Color` is re-exported (from `@rc-component/color-picker`) as a type for typing `color`/`onChange`. The swatch border comes from the library stylesheet — consumers should import it once as shown in the `AddableGridList` note above. The picker's own styles (palette, sliders, alpha checkerboard) are bundled into that same stylesheet, so a single import covers both. Because `@rc-component/color-picker` is a runtime dependency, consumers get it automatically when installing the package.

```tsx
import { ColorPickerButton } from '@mr-skribbls/react-mui-base-components';

function App() {
  return (
    <ColorPickerButton
      onChange={(color) => console.log(color.toHexString())}
      configuration={{ size: 40 }}
    />
  );
}
```

### `Overlay` props

| Prop         | Type         | Description                                                    |
| ------------ | ------------ | -------------------------------------------------------------- |
| `children?`  | `ReactNode`  | Content centered over the full viewport.                       |
| `className?` | `string`     | Extra class name applied to the overlay root element.          |

`Overlay` is a transparent `position: fixed` layer that covers the viewport and flex-centers its children, making it a base for implementing modal/dialog backdrops. It ships a CSS module, so consumers should import the emitted stylesheet once (same import as the `AddableGridList` note above).

```tsx
import { Overlay } from '@mr-skribbls/react-mui-base-components';

function App() {
  return (
    <Overlay>
      <p>This is centered over the page.</p>
    </Overlay>
  );
}
```

### `FieldContainer` props

| Prop            | Type                                           | Description                                                        |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| `children`      | `ReactNode`                                    | Content rendered inside the stack.                                 |
| `direction?`    | `'column' \| 'row'`                            | Flex direction of the stack. Defaults to `'column'`.               |
| `minWidth?`     | `number`                                       | Minimum width in pixels. Defaults to `0`.                          |
| `spacing?`      | `number`                                       | Gap between children in MUI spacing units. Defaults to `1.5`.      |
| `onDragOver?`   | `(event: DragEvent<HTMLElement>) => void`      | Forwarded to the underlying MUI `Stack`.                           |
| `onDragEnter?`  | `(event: DragEvent<HTMLElement>) => void`      | Forwarded to the underlying MUI `Stack`.                           |
| `onDragLeave?`  | `(event: DragEvent<HTMLElement>) => void`      | Forwarded to the underlying MUI `Stack`.                           |
| `onDrop?`       | `(event: DragEvent<HTMLElement>) => void`      | Forwarded to the underlying MUI `Stack`.                           |

`FieldContainer` is a thin wrapper around MUI `Stack` that adds sensible form-layout defaults (`direction: 'column'`, `spacing: 1.5`, `marginTop: '6px'`, `flexGrow: 1`). All drag-and-drop handlers are forwarded directly to the stack element, making it useful as a drop zone around form fields.

```tsx
import { FieldContainer, TextField } from '@mr-skribbls/react-mui-base-components';

function App() {
  return (
    <FieldContainer spacing={2}>
      <TextField label="Name" />
      <TextField label="Email" />
    </FieldContainer>
  );
}
```

### `ResponsiveButton` props

| Prop       | Type                                                        | Description                                                  |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| `title?`   | `string`                                                    | Button label shown as text (desktop) and as the `title` attribute (mobile). |
| `icon`     | `ReactNode`                                                 | Icon rendered inside both the `Button` and `IconButton`.      |
| `onClick`  | `(event: MouseEvent<HTMLButtonElement>) => void`            | Click handler forwarded to both button variants.              |

`ResponsiveButton` renders a MUI `Button` (with `startIcon` + label) on desktop and a MUI `IconButton` (icon only) on mobile, toggled via CSS media queries at `768px`. Both variants share the same `onClick` handler.

```tsx
import { MdAdd } from 'react-icons/md';
import { ResponsiveButton } from '@mr-skribbls/react-mui-base-components';

function App() {
  return (
    <ResponsiveButton
      title="Add item"
      icon={<MdAdd />}
      onClick={() => console.log('clicked')}
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
| `useColor` | Generates random hex colors via a `randomHex` helper. |
| `useWindowDimensions` | Tracks the browser window's inner `width` and `height`, updating on resize. |

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

### `useColor`

`useColor` returns a `randomHex` helper that generates a random hex color string.

| Return      | Type               | Description                             |
| ----------- | ------------------ | --------------------------------------- |
| `randomHex` | `() => string`     | Returns a random color as `#RRGGBB`.    |

```tsx
import { useColor } from '@mr-skribbls/react-mui-base-components';

function App() {
  const { randomHex } = useColor();
  const [color, setColor] = useState(randomHex);

  return <button onClick={() => setColor(randomHex())}>{color}</button>;
}
```

### `useWindowDimensions`

| Return    | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| `width`   | `number` | The browser window's inner width in pixels.         |
| `height`  | `number` | The browser window's inner height in pixels.        |

`useWindowDimensions` reads `window.innerWidth`/`innerHeight` on mount and re-renders whenever the window is resized.

```tsx
import { useWindowDimensions } from '@mr-skribbls/react-mui-base-components';

function App() {
  const { width, height } = useWindowDimensions();

  return <p>Window is {width}×{height}</p>;
}
```

### `HorizontalTabDisplay` props

| Prop        | Type             | Description                                                |
| ----------- | ---------------- | ---------------------------------------------------------- |
| `tabs`      | `HorizontalTab[]`| Array of tab objects to render (see `HorizontalTab` below). |
| `ariaLabel?`| `string`         | Accessible label applied to the MUI `Tabs` component.      |

#### `HorizontalTab`

| Property     | Type        | Description                                       |
| ------------ | ----------- | ------------------------------------------------- |
| `displayName`| `string`    | Text rendered inside the MUI `Tab`.               |
| `content`    | `ReactNode` | Content shown in the tab panel when selected.      |
| `disabled?`  | `boolean`   | Disables the tab so it cannot be selected.          |

```tsx
import { HorizontalTabDisplay } from '@mr-skribbls/react-mui-base-components';

const tabs = [
  { displayName: 'One', content: <p>Panel one</p> },
  { displayName: 'Two', content: <p>Panel two</p> },
];

function App() {
  return <HorizontalTabDisplay tabs={tabs} ariaLabel='Demo' />;
}
```

### `VerticalTabDisplay` props

| Prop        | Type              | Description                                                 |
| ----------- | ----------------- | ----------------------------------------------------------- |
| `tabs`      | `VerticalTab[]`   | Array of tab objects to render (see `VerticalTab` below).    |
| `ariaLabel?`| `string`          | Accessible label applied to the MUI `Tabs` component.       |

#### `VerticalTab`

| Property     | Type        | Description                                       |
| ------------ | ----------- | ------------------------------------------------- |
| `displayName`| `string`    | Text rendered inside the MUI `Tab`.               |
| `content`    | `ReactNode` | Content shown in the tab panel when selected.      |
| `disabled?`  | `boolean`   | Disables the tab so it cannot be selected.          |

`VerticalTabDisplay` uses `useWindowDimensions` to switch orientation automatically: vertical tabs on screens ≥ 600px, horizontal tabs below that breakpoint.

```tsx
import { VerticalTabDisplay } from '@mr-skribbls/react-mui-base-components';

const tabs = [
  { displayName: 'One', content: <p>Panel one</p> },
  { displayName: 'Two', content: <p>Panel two</p> },
];

function App() {
  return <VerticalTabDisplay tabs={tabs} ariaLabel='Demo' />;
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
