import { useState } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Color } from '@rc-component/color-picker';
import { ColorPickerButton } from './ColorPickerButton';
import { useColor } from '../../hooks/useColor';

interface Swatch {
  name: string;
  color: string;
}

const ColorPickerDemo = () => {
  const { randomHex } = useColor();
  const [swatches, setSwatches] = useState<Swatch[]>([
    { name: 'Coral', color: '#ff6b6b' },
    { name: 'Teal', color: '#2ec4b6' },
    { name: 'Gold', color: '#f4a261' },
  ]);

  const updateColor = (name: string) => (color: Color) => {
    setSwatches((prev) =>
      prev.map((swatch) => (swatch.name === name ? { ...swatch, color: color.toHexString() } : swatch))
    );
  };

  const addSwatch = () => {
    const hex = randomHex();
    setSwatches((prev) => [...prev, { name: `Swatch ${prev.length + 1}`, color: hex }]);
  };

  return (
    <Stack spacing={3} maxWidth={480}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {swatches.map((swatch) => (
          <Stack key={swatch.name} spacing={0.5}>
            <ColorPickerButton color={new Color(swatch.color)} onChange={updateColor(swatch.name)} />
            <Paper variant="outlined" sx={{ px: 1, py: 0.5 }}>
              <Typography fontFamily="monospace" fontSize={12}>
                {swatch.color}
              </Typography>
            </Paper>
          </Stack>
        ))}
      </Box>
      <Box>
        <Button onClick={addSwatch}>Add random swatch</Button>
      </Box>
    </Stack>
  );
};

const meta: Meta<typeof ColorPickerButton> = {
  title: 'Base/ColorPickerButton',
  component: ColorPickerButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorPickerButton>;

export const Default: Story = {
  render: () => <ColorPickerDemo />,
};