import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActiveEmail } from './ActiveEmail';

const meta: Meta<typeof ActiveEmail> = {
  title: 'Base/ActiveEmail',
  component: ActiveEmail,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActiveEmail>;

export const Default: Story = {
  args: {
    email: 'person@example.com',
  },
};