import type { ElementType, JSX, SyntheticEvent } from 'react';
import { useCallback } from 'react';
import _ from 'lodash';
import type { InputBaseComponentProps } from '@mui/material';
import { Autocomplete, TextField } from '@mui/material';

type SpecificTypeKeys<T, V extends string> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

export type ComboBoxMask = ElementType<
  InputBaseComponentProps,
  keyof JSX.IntrinsicElements
>;

export type ComboBoxValue<T> = (T | string) | (T | string)[] | null;

export interface ComboBoxProps<T> {
  options: T[];
  value: ComboBoxValue<T>;
  onChange: (value: ComboBoxValue<T>) => void;
  displayProp?: SpecificTypeKeys<T, string>;
  mask?: ComboBoxMask;
  maskInputProps?: Record<string, unknown>;
  multiple?: boolean;
  label?: string;
  placeholder?: string;
  errors?: string;
}

export const ComboBox = <T,>({
  options,
  value,
  onChange,
  displayProp,
  mask,
  maskInputProps,
  multiple,
  label,
  placeholder,
  errors,
}: ComboBoxProps<T>) => {
  const getOptionLabel = useCallback(
    (option: string | T) => {
      if (_.isString(option)) return option;
      if (!_.isNil(displayProp)) {
        const displayValue = option[displayProp];
        return _.isString(displayValue) ? displayValue : String(option);
      }
      return String(option);
    },
    [displayProp],
  );

  const isOptionEqualToValue = useCallback(
    (option: string | T, candidate: string | T) => {
      return _.isEqual(option, candidate);
    },
    [],
  );

  const handleChange = useCallback(
    (
      _event: SyntheticEvent<Element, Event>,
      newValue: ComboBoxValue<T>,
    ) => {
      onChange(newValue);
    },
    [onChange],
  );

  return (
    <Autocomplete<T, boolean, boolean, boolean>
      options={options}
      value={value}
      onChange={handleChange}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      multiple={multiple}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={Boolean(errors)}
          helperText={errors}
          slotProps={{
            input: mask
              ? { inputComponent: mask, ...params.InputProps }
              : params.InputProps,
            htmlInput: { ...maskInputProps, ...params.inputProps },
          }}
        />
      )}
    />
  );
};

export default ComboBox;
