import { Box, Card, CardContent, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Base/Overlay',
  component: Overlay,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Overlay>;

const PageBehind = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h5" gutterBottom>
      Page content behind the overlay
    </Typography>
    <Typography variant="body2" color="text.secondary">
      The overlay is transparent, so this title stays visible underneath the
      centered layer.
    </Typography>
  </Box>
);

export const Default: Story = {
  render: () => (
    <>
      <PageBehind />
      <Overlay>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Centered overlay content
            </Typography>
            <Typography variant="body2">
              Everything in here is centered over the full viewport.
            </Typography>
          </CardContent>
        </Card>
      </Overlay>
    </>
  ),
};