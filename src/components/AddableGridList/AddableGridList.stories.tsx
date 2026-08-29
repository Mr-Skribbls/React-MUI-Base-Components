import { useState } from 'react';
import type { ReactNode } from 'react';
import { Box, Button, Dialog, DialogTitle, TextField, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddableGridList } from './AddableGridList';

const meta: Meta<typeof AddableGridList> = {
  title: 'Base/AddableGridList',
  component: AddableGridList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AddableGridList>;

type PetRow = { id: number; name: string; species: string };

const rows: PetRow[] = [
  { id: 1, name: 'Cat', species: 'Felis catus' },
  { id: 2, name: 'Dog', species: 'Canis lupus familiaris' },
  { id: 3, name: 'Parrot', species: 'Psittacus erithacus' },
];

interface PetDialogProps {
  onAdd: (row: Omit<PetRow, 'id'>) => void;
}

const PetDialog = ({ onAdd }: PetDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');

  const handleAdd = () => {
    onAdd({ name, species });
    setName('');
    setSpecies('');
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add a pet</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a pet</DialogTitle>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
          <TextField
            label="Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Species"
            size="small"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!name.trim() || !species.trim()}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

const Example = ({ children }: { children: ReactNode }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
    {children}
  </Box>
);

export const Default: Story = {
  render: () => {
    const [rows, setRows] = useState<PetRow[]>([
      { id: 1, name: 'Cat', species: 'Felis catus' },
      { id: 2, name: 'Dog', species: 'Canis lupus familiaris' },
      { id: 3, name: 'Parrot', species: 'Psittacus erithacus' },
    ]);

    return (
      <Example>
        <AddableGridList
          data={rows}
          addItemDialog={
            <PetDialog
              onAdd={(row) => setRows((prev) => [...prev, { ...row, id: prev.length + 1 }])}
            />
          }
          configuration={{
            columns: {
              headers: { name: 'Name', species: 'Species' },
            },
          }}
        />
      </Example>
    );
  },
};

export const NoDialog: Story = {
  render: () => (
    <Example>
      <AddableGridList
        data={rows}
        addItemDialog={<Typography variant="caption">No add dialog provided.</Typography>}
        configuration={{
          columns: {
            order: ['name', 'species'],
          },
        }}
      />
    </Example>
  ),
};