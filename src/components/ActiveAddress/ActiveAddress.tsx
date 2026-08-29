import { IconButton, Stack, SxProps, Theme } from '@mui/material';
import { MdOutlineMap } from 'react-icons/md';

export interface ActiveAddressProps {
  address: string;
}

const iconStyle: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'primary.main',
};

export const ActiveAddress = ({ address }: ActiveAddressProps) => {
  const openMap = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `comgooglemaps://?q=${encodedAddress}`;

    window.location.href = url;
    setTimeout(() => {
      const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(fallbackUrl, '_blank');
    }, 500);
  };

  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <span>{address}</span>
      <IconButton
        title="Map"
        size="small"
        onClick={() => openMap(address)}
        sx={iconStyle}
      >
        <MdOutlineMap />
      </IconButton>
    </Stack>
  );
};

export default ActiveAddress;
