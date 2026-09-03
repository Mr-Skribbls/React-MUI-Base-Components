import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ComboBox } from './ComboBox';

interface Country {
  Code: string;
  Name: string;
  Phone: number;
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
    const [value, setValue] = useState<string | string[] | null>(null);
    return (
      <ComboBox<string>
        options={simpleOptions}
        label="City"
        placeholder="Select or type a city"
        value={value}
        onChange={(v) => setValue(v as string | string[] | null)}
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
    const [value, setValue] = useState<Country | Country[] | null>(null);
    return (
      <ComboBox<Country>
        options={countries}
        displayProp="Name"
        label="Country"
        value={value}
        onChange={(v) => setValue(v as Country | Country[] | null)}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<Country | Country[] | null>(
      countries.slice(0, 1),
    );
    return (
      <ComboBox<Country>
        multiple
        options={countries}
        displayProp="Name"
        label="Countries"
        value={value}
        onChange={(v) => setValue(v as Country | Country[] | null)}
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[] | null>(null);
    return (
      <ComboBox<string>
        options={simpleOptions}
        label="City"
        errors="A city is required."
        value={value}
        onChange={(v) => setValue(v as string | string[] | null)}
      />
    );
  },
};
