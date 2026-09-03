import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import ComboBox from './ComboBox';

interface Country {
  Code: string;
  Name: string;
  Phone: number;
  [key: string]: unknown;
}

const meta: Meta<typeof ComboBox> = {
  title: 'Base/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

const simpleOptions = ['New York', 'Chicago', 'Los Angeles'];

export const SimpleStrings: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    return (
      <ComboBox
        items={simpleOptions}
        label="City"
        placeholder="Select or type a city"
        value={value}
        onChange={(v: string | string[]) => setValue(typeof v === 'string' ? v : v[0] ?? '')}
      />
    );
  },
};

const countries: Country[] = [
  { Code: 'US', Name: 'United States', Phone: 1 },
  { Code: 'GB', Name: 'United Kingdom', Phone: 44 },
  { Code: 'FR', Name: 'France', Phone: 33 },
];

export const ObjectOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    return (
      <ComboBox
        items={countries}
        getOptionLabel={(c) => c.Name}
        valueProperty="Code"
        label="Country"
        value={value}
        onChange={(v: string | string[]) => setValue(typeof v === 'string' ? v : '')}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['US']);
    return (
      <ComboBox
        multiple
        items={countries}
        getOptionLabel={(c) => c.Name}
        valueProperty="Code"
        label="Countries"
        value={value}
        onChange={(v: string | string[]) => setValue(Array.isArray(v) ? v : [])}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value] = useState<string>('US');
    return (
      <ComboBox
        items={countries}
        getOptionLabel={(c) => c.Name}
        valueProperty="Code"
        label="Country"
        disabled
        value={value}
        onChange={() => {}}
      />
    );
  },
};
