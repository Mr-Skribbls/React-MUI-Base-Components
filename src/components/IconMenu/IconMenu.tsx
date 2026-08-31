import type { ReactNode } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { isFunction, isNil } from 'lodash';
import { useImducer, ActionType } from '../../hooks/useImducer';
import { ResponsiveButton } from '../ResponsiveButton';

export type MenuItemDefinition = {
  displayName: string;
  click: () => void;
};

export interface IconMenuProps {
  title?: string;
  icon: ReactNode;
  menuItems: MenuItemDefinition[];
}

export const IconMenu = ({
  title,
  icon,
  menuItems,
}: IconMenuProps) => {
  const [anchorEl, setAnchorEl] = useImducer<null | HTMLElement>(null);

  const open = !isNil(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl({
      type: ActionType.SET,
      value: event.currentTarget,
    });
  };

  const handleClose = () => {
    setAnchorEl({
      type: ActionType.SET,
      value: null,
    });
  };

  return (
    <>
      <ResponsiveButton
        title={title}
        icon={icon}
        onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        { menuItems.map((menuItem) => (
          <MenuItem key={menuItem.displayName} onClick={() => {
            if(isFunction(menuItem.click)) {
              menuItem.click();
            }
            handleClose();
          }}>{menuItem.displayName}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default IconMenu;