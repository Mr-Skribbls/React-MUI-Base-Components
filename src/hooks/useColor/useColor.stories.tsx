import { useState } from 'react';
import { Box, BoxProps, Button, Paper, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useColor } from './useColor';

const ColorSwatch = ({ hex, ...boxProps }: { hex: string } & BoxProps) => (
  <Box
    {...boxProps}
    sx={{
      width: 160,
      height: 160,
      borderRadius: 1,
      bgcolor: hex,
      border: (theme) => `1px solid ${theme.palette.divider}`,
    }}
  />
);

const ColorDemo = () => {
  const { randomHex } = useColor();
  const [hex, setHex] = useState(randomHex);

  return (
    <Stack spacing={2} maxWidth={480}>
      <ColorSwatch hex={hex} />
      <Paper variant="outlined" sx={{ p: 1.5 }}>
        <Typography fontFamily="monospace">{hex}</Typography>
      </Paper>
      <Box>
        <Button onClick={() => setHex(randomHex())}>Randomize</Button>
      </Box>
    </Stack>
  );
};

const meta: Meta<typeof ColorDemo> = {
  title: 'Base/useColor',
  component: ColorDemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorDemo>;

export const Default: Story = {};