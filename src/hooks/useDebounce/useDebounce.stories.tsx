import { useState } from 'react';
import { Paper, Stack, TextField, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useDebounce } from './useDebounce';

const DebounceDemo = () => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const { debounce } = useDebounce<string, void>(500, (v?: string) => {
    setDebouncedValue(v ?? '');
  });

  const handleChange = (next: string) => {
    setValue(next);
    debounce(next);
  };

  return (
    <Stack spacing={2} maxWidth={360}>
      <Typography variant="h6">Debounced input</Typography>
      <TextField label="Type here" value={value} onChange={(e) => handleChange(e.target.value)} />
      <Paper variant="outlined" sx={{ p: 1.5 }}>
        <Typography variant="body2" color="text.secondary">Debounced after 500ms</Typography>
        <Typography variant="h6">{debouncedValue || '—'}</Typography>
      </Paper>
    </Stack>
  );
};

const meta: Meta<typeof DebounceDemo> = {
  title: 'Base/useDebounce',
  component: DebounceDemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DebounceDemo>;

export const Default: Story = {};