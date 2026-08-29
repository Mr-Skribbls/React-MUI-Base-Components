import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ButtonSelect } from './ButtonSelect';

interface Priority {
  id: number;
  name: string;
}

type ButtonSelectPropsType = Parameters<typeof ButtonSelect>[0];

const meta: Meta<typeof ButtonSelect> = {
  title: 'Base/ButtonSelect',
  component: ButtonSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonSelect>;

const baseArgs: ButtonSelectPropsType = {
  options: ['All', 'Open', 'Closed'],
  onChange: () => undefined,
  label: 'Filter by status',
};

export const SimpleStrings: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | string>('All');
    return (
      <ButtonSelect
        {...args}
        valueProp={undefined}
        onChange={(v) => setValue(v as string)}
        selectedOption={value}
      />
    );
  },
  args: baseArgs,
};

const priorities: Priority[] = [
  { id: 1, name: 'Low' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'High' },
];

export const ObjectOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<Priority | undefined>(priorities[0]);
    return (
      <ButtonSelect<Priority, number, string>
        {...args}
        options={priorities}
        valueProp="id"
        displayProp="name"
        selectedOption={value}
        onChange={(v) =>
          setValue(priorities.find((p) => p.id === v) ?? undefined)
        }
      />
    );
  },
  args: {
    label: 'Priority',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <ButtonSelect
      {...args}
      valueProp={undefined}
      selectedOption="All"
      disabled
    />
  ),
  args: baseArgs,
};
