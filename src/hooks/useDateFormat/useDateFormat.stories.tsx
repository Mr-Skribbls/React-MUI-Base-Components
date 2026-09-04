import dayjs from 'dayjs';
import { Paper, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useDateFormat } from './useDateFormat';

const sampleDate = dayjs('2026-01-01 09:30:00');

const DateFormatDemo = () => {
  const { formatDate, simpleFormatDate } = useDateFormat();

  return (
    <Stack spacing={2} maxWidth={480}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6">formatDate</Typography>
        <Typography variant="body2" color="text.secondary">Jan 1, 2026</Typography>
        <Typography>{formatDate(sampleDate)}</Typography>
      </Paper>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6">simpleFormatDate</Typography>
        <Typography variant="body2" color="text.secondary">yyyy-MM-dd HH:mm</Typography>
        <Typography>{simpleFormatDate(sampleDate)}</Typography>
      </Paper>
    </Stack>
  );
};

const meta: Meta<typeof DateFormatDemo> = {
  title: 'Base/useDateFormat',
  component: DateFormatDemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DateFormatDemo>;

export const Default: Story = {};