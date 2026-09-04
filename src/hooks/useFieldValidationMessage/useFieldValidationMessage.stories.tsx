import { useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useFieldValidationMessage } from './useFieldValidationMessage';

const REQUIRED = 'abc';

const ValidationDemo = () => {
  const [value, setValue] = useState('');

  const { validationAttrs } = useFieldValidationMessage(
    value,
    (v) => v === REQUIRED,
    `Value must equal "${REQUIRED}".`,
  );

  return (
    <Stack spacing={2} maxWidth={360}>
      <Typography variant="h6">Field validation helper text</Typography>
      <TextField
        label="Must match"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...validationAttrs}
      />
      <Typography variant="body2" color="text.secondary">
        Type anything other than "{REQUIRED}" to see the helper text appear.
      </Typography>
    </Stack>
  );
};

const meta: Meta<typeof ValidationDemo> = {
  title: 'Base/useFieldValidationMessage',
  component: ValidationDemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ValidationDemo>;

export const Default: Story = {};