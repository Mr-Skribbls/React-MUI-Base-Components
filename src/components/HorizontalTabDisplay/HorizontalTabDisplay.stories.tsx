import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { HorizontalTabDisplay } from './HorizontalTabDisplay';
import type { HorizontalTab } from './HorizontalTabDisplay';

const tabs: HorizontalTab[] = [
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

const meta: Meta<typeof HorizontalTabDisplay> = {
  title: 'Base/HorizontalTabDisplay',
  component: HorizontalTabDisplay,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HorizontalTabDisplay>;

export const Default: Story = {
  args: {
    tabs,
    ariaLabel: 'Example tabs',
  },
};