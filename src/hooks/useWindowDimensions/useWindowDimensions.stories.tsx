import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useWindowDimensions } from './useWindowDimensions';

const meta: Meta = {
  title: 'Base/useWindowDimensions',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const WindowDimensionsDisplay = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        useWindowDimensions
      </Typography>
      <Typography variant="body1">
        Resize the browser window to see these values update.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        width: {width}px
      </Typography>
      <Typography variant="h6">
        height: {height}px
      </Typography>
    </>
  );
};

export const Default: Story = {
  render: () => <WindowDimensionsDisplay />,
};