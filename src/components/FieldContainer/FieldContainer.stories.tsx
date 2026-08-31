import { Stack, TextField, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FieldContainer } from './FieldContainer';

const meta: Meta<typeof FieldContainer> = {
  title: 'Base/FieldContainer',
  component: FieldContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FieldContainer>;

export const Default: Story = {
  render: () => (
    <FieldContainer>
      <Typography variant="subtitle2">Shipping Address</Typography>
      <TextField label="Street" size="small" />
      <Stack direction="row" spacing={1}>
        <TextField label="City" size="small" />
        <TextField label="State" size="small" />
        <TextField label="ZIP" size="small" />
      </Stack>
      <TextField label="Country" size="small" />
    </FieldContainer>
  ),
};

export const Horizontal: Story = {
  args: {
    direction: 'row',
    spacing: 2,
  },
  render: (args) => (
    <FieldContainer {...args}>
      <TextField label="First" size="small" />
      <TextField label="Last" size="small" />
      <TextField label="Email" size="small" />
    </FieldContainer>
  ),
};