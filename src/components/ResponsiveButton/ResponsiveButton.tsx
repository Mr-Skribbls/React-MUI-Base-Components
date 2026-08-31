import type { ReactNode } from 'react';
import { Button, IconButton } from '@mui/material';
import style from './ResponsiveButton.module.css';

export interface ResponsiveButtonProps {
  title?: string;
  icon: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ResponsiveButton = ({
  title,
  icon,
  onClick,
}: ResponsiveButtonProps) => {

  return (
    <>
      <div className={style['desktop-button']}>
        <Button
          title={title}
          size='small'
          onClick={onClick}
          startIcon={icon}>
          {title}
        </Button>
      </div>
      <div className={style['mobile-button']}>
        <IconButton
          title={title}
          size='small'
          onClick={onClick}>
          {icon}
        </IconButton>
      </div>
    </>
  );
};

export default ResponsiveButton;