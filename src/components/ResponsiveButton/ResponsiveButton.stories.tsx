import { MdAdd } from 'react-icons/md';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponsiveButton } from './ResponsiveButton';

const meta: Meta<typeof ResponsiveButton> = {
  title: 'Base/ResponsiveButton',
  component: ResponsiveButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResponsiveButton>;

export const Default: Story = {
  args: {
    title: 'Add item',
    onClick: () => undefined,
  },
  render: (args) => (
    <ResponsiveButton {...args} icon={<MdAdd />} />
  ),
};