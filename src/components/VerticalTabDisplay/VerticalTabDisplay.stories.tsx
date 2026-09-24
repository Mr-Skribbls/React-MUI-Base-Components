import { Stack, Typography } from '@mui/material';
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

const longContentTabs: VerticalTab[] = [
  {
    displayName: 'Overview',
    content: <Typography>This is the overview panel.</Typography>,
  },
  {
    displayName: 'Long content',
    content: (
      <Stack spacing={2}>
        {Array.from({ length: 60 }, (_, i) => (
          <Typography key={i}>
            Paragraph {i + 1} - content that overflows the container height and
            should be scrollable.
          </Typography>
        ))}
      </Stack>
    ),
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

export const ScrollableContent: Story = {
  args: {
    tabs: longContentTabs,
    ariaLabel: 'Example tabs',
  },
  render: (args) => (
    <Stack height={300} sx={{ overflow: 'hidden' }} direction="column">
      <VerticalTabDisplay {...args} />
    </Stack>
  ),
};