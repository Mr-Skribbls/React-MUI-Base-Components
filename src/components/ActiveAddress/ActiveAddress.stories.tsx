import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActiveAddress } from './ActiveAddress';

const meta: Meta<typeof ActiveAddress> = {
  title: 'Base/ActiveAddress',
  component: ActiveAddress,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActiveAddress>;

const address = '123 Main St, Austin, TX';

export const Default: Story = {
  args: {
    address,
  },
};
