import { useState } from 'react';
import { Button, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useTempId } from './useTempId';

const preexisting = [-1, -4, -9, -12];

const TempIdDemo = () => {
  const { getIdGenerator } = useTempId();
  const [ids, setIds] = useState<number[]>([]);

  const { next } = getIdGenerator(preexisting);

  const generate = () => setIds((prev) => [...prev, next()]);

  return (
    <Stack spacing={2} maxWidth={360}>
      <Typography variant="h6">Temporary IDs</Typography>
      <Paper variant="outlined" sx={{ p: 1.5 }}>
        <Typography variant="body2" color="text.secondary">Preexisting IDs: {preexisting.join(', ')}</Typography>
      </Paper>
      <Button variant="contained" onClick={generate}>Generate next temp ID</Button>
      <List dense>
        {ids.map((id) => (
          <ListItem key={id} disablePadding>
            <ListItemText primary={id} />
          </ListItem>
        ))}
        {ids.length === 0 && <ListItem disablePadding><ListItemText primary="No IDs generated yet." /></ListItem>}
      </List>
    </Stack>
  );
};

const meta: Meta<typeof TempIdDemo> = {
  title: 'Base/useTempId',
  component: TempIdDemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TempIdDemo>;

export const Default: Story = {};