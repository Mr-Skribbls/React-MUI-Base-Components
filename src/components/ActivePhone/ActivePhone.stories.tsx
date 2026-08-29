import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActivePhone } from './ActivePhone';

const meta: Meta<typeof ActivePhone> = {
  title: 'Base/ActivePhone',
  component: ActivePhone,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActivePhone>;

export const Default: Story = {
  args: {
    phone: '+1 555 123 4567',
  },
};