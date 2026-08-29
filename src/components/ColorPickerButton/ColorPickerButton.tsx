import ColorPicker, { Color } from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';
import style from './ColorPickerButton.module.css';
import useColor from '../../hooks/useColor';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { isFunction, isNil } from 'lodash';
import { useImducer, ActionType } from '../../hooks/useImducer';

export interface ColorPickerButtonProps {
  color?: Color | null;
  onChange?: (color: Color) => void;
  configuration?: {
    size?: number;
    padding?: number;
    borderRadius?: number;
    allowDialog?: boolean;
  };
}

export const ColorPickerButton = ({
  color,
  onChange,
  configuration,
}: ColorPickerButtonProps) => {
  const { randomHex } = useColor();
  const [ value, updateValue ] = useImducer<Color>(color || new Color(randomHex()));
  const [ dialogOpen, updateDialogOpen ] = useImducer(false);

  const size = isNil(configuration?.size) ? 35 : configuration.size;
  const padding = isNil(configuration?.padding) ? 5 : configuration.padding;
  const borderRadius = isNil(configuration?.borderRadius) ? 5 : configuration.borderRadius;
  const allowDialog = isNil(configuration?.allowDialog) ? true : configuration.allowDialog;

  const openDialog = () => {
    updateDialogOpen({
      type: ActionType.SET,
      value: true,
    });
  };

  const closeDialog = () => {
    updateDialogOpen({
      type: ActionType.SET,
      value: false,
    });
  };

  return (
    <>
      <div
        className={style.colorPickerButton}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: `${borderRadius}px`,
          padding: `${padding}px`,
          cursor: allowDialog ? 'pointer' : 'default',
        }}
        onClick={openDialog}>
        <div style={{
          backgroundColor: value?.toHexString(),
          borderRadius: `${borderRadius}px`,
        }}></div>
      </div>
      { allowDialog &&
        <Dialog open={dialogOpen} onClose={closeDialog}>
          <DialogContent>
            <ColorPicker
              defaultValue={value}
              onChange={(color) => {
                updateValue({
                  type: ActionType.SET,
                  value: color,
                });
                if(isFunction(onChange)) {
                  onChange(color);
                }
              }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      }
    </>
  );
};

export default ColorPickerButton;