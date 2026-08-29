import { IconButton, Stack } from '@mui/material';
import { MdOutlineMessage, MdOutlinePhone } from 'react-icons/md';

import useDevice from '../../hooks/useDevice';

export interface ActivePhoneProps {
  phone: string;
}

export const ActivePhone = ({ phone }: ActivePhoneProps) => {
  const { isMobile } = useDevice();

  const callPhone = (phone: string) => window.open(`tel:${phone}`);

  const messagePhone = (phone: string) => window.open(`sms:${phone}`);

  const iconStyle = {
    border: '1px solid',
    borderColor: 'primary.main',
  };

  return (
    <Stack direction={'row'} alignItems={'center'} gap={1}>
      <span>{phone}</span>
      { isMobile && <IconButton
        title='Call'
        size='small'
        onClick={() => callPhone(phone)}
        sx={iconStyle}>
        <MdOutlinePhone />
      </IconButton> }
      { isMobile && <IconButton
        title='Message'
        size='small'
        onClick={() => messagePhone(phone)}
        sx={iconStyle}>
        <MdOutlineMessage />
      </IconButton> }
    </Stack>
  );
};

export default ActivePhone;