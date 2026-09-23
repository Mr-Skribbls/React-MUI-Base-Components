import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActiveWebsite } from './ActiveWebsite';

const meta: Meta<typeof ActiveWebsite> = {
  title: 'Base/ActiveWebsite',
  component: ActiveWebsite,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActiveWebsite>;

export const Default: Story = {
  args: {
    website: 'example.com',
  },
};