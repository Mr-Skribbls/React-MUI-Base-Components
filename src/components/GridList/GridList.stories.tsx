import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridList } from './GridList';

const meta: Meta<typeof GridList> = {
  title: 'Base/GridList',
  component: GridList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GridList>;

const rows = [
  { id: 1, name: 'Cat', species: 'Felis catus', age: 3 },
  { id: 2, name: 'Dog', species: 'Canis lupus familiaris', age: 5 },
  { id: 3, name: 'Parrot', species: 'Psittacus erithacus', age: 12 },
];

export const Default: Story = {
  args: {
    data: rows,
    configuration: {
      columns: {
        headers: { name: 'Name', species: 'Species' },
        order: ['name', 'species', 'age'],
      },
    },
  },
};

export const Formatted: Story = {
  args: {
    data: rows,
    configuration: {
      columns: {
        order: ['name', 'species', 'age'],
        formats: {
          age: (value) => `${String(value)} years`,
        },
      },
    },
  },
};