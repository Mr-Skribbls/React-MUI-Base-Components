import type { Meta, StoryObj } from '@storybook/react-vite';
import { useDevice } from './useDevice';

const DeviceInfoDisplay = () => {
  const { isMobile, isApple } = useDevice();

  return (
    <ul>
      <li>isMobile: {String(isMobile)}</li>
      <li>isApple: {String(isApple)}</li>
    </ul>
  );
};

const meta: Meta<typeof DeviceInfoDisplay> = {
  title: 'Base/useDevice',
  component: DeviceInfoDisplay,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DeviceInfoDisplay>;

export const Default: Story = {};