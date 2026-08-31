import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VerticalTabDisplay } from './VerticalTabDisplay';
import type { VerticalTab } from './VerticalTabDisplay';

const tabs: VerticalTab[] = [
  {
    displayName: 'Overview',
    content: <Typography>This is the overview panel.</Typography>,
  },
  {
    displayName: 'Details',
    content: <Typography>This is the details panel.</Typography>,
  },
  {
    displayName: 'Disabled',
    content: <Typography>This tab is disabled.</Typography>,
    disabled: true,
  },
];

const meta: Meta<typeof VerticalTabDisplay> = {
  title: 'Base/VerticalTabDisplay',
  component: VerticalTabDisplay,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VerticalTabDisplay>;

export const Default: Story = {
  args: {
    tabs,
    ariaLabel: 'Example tabs',
  },
};