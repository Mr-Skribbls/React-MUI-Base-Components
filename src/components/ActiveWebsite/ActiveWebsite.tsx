import { IconButton, Stack, SxProps, Theme } from '@mui/material';
import { MdOutlineLanguage } from 'react-icons/md';

export interface ActiveWebsiteProps {
  website: string;
}

const iconStyle: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'primary.main',
};

const toFullUrl = (website: string): string => {
  return /^https?:\/\//i.test(website) ? website : `https://${website}`;
};

export const ActiveWebsite = ({ website }: ActiveWebsiteProps) => {
  const openWebsite = (website: string) => {
    window.open(toFullUrl(website), '_blank', 'noopener,noreferrer');
  };

  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <span>{website}</span>
      <IconButton
        title="Open"
        size="small"
        onClick={() => openWebsite(website)}
        sx={iconStyle}
      >
        <MdOutlineLanguage />
      </IconButton>
    </Stack>
  );
};

export default ActiveWebsite;