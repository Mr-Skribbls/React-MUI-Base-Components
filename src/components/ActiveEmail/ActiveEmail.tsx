import { IconButton, Stack } from '@mui/material';
import { MdOutlineMailOutline } from 'react-icons/md';

export interface ActiveEmailProps {
  email: string;
}

export const ActiveEmail = ({ email }: ActiveEmailProps) => {
  const sendEmail = (email: string) => window.open(`mailto:${email}`);

  const iconStyle = {
    border: '1px solid',
    borderColor: 'primary.main',
  };

  return (
    <Stack direction={'row'} alignItems={'center'} gap={1}>
      <span>{email}</span>
      <IconButton
        title='Email'
        size='small'
        onClick={() => sendEmail(email)}
        sx={iconStyle}>
        <MdOutlineMailOutline />
      </IconButton>
    </Stack>
  );
};

export default ActiveEmail;