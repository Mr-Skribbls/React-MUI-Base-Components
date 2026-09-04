import { useState } from 'react';
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useConversions, weightUnits } from './useConversions';
import type { WeightUnit } from './useConversions';

const WeightConverterDemo = () => {
  const { convertWeight } = useConversions();
  const [value, setValue] = useState(1000);
  const [from, setFrom] = useState<WeightUnit>('g');
  const [to, setTo] = useState<WeightUnit>('kg');

  const result = convertWeight(value, from, to);

  return (
    <Stack spacing={2} maxWidth={360}>
      <Typography variant="h6">Weight converter</Typography>
      <TextField
        label="Value"
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <TextField
        select
        label="From"
        value={from}
        onChange={(e) => setFrom(e.target.value as WeightUnit)}
      >
        {weightUnits.map((unit) => (
          <MenuItem key={unit} value={unit}>{unit}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="To"
        value={to}
        onChange={(e) => setTo(e.target.value as WeightUnit)}
      >
        {weightUnits.map((unit) => (
          <MenuItem key={unit} value={unit}>{unit}</MenuItem>
        ))}
      </TextField>
      <Button onClick={() => setValue((v) => v + 100)}>+100</Button>
      <Typography variant="h6">
        {value} {from} = {result} {to}
      </Typography>
    </Stack>
  );
};

const meta: Meta<typeof WeightConverterDemo> = {
  title: 'Base/useConversions',
  component: WeightConverterDemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WeightConverterDemo>;

export const Default: Story = {};