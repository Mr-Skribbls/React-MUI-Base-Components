import { useCallback, MouseEvent, useMemo } from 'react';
import _ from 'lodash';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type SpecificTypeKeys<T, V extends number | string> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

export interface ButtonSelectProps<
  T,
  V extends number | string,
  D extends number | string,
> {
  options: T[];
  onChange: (selectedValue?: V) => void;
  label?: string;
  selectedOption?: T;
  disabled?: boolean;
  displayProp?: SpecificTypeKeys<T, D>;
  valueProp?: SpecificTypeKeys<T, V>;
}

export const ButtonSelect = <
  T,
  V extends number | string,
  D extends number | string,
>({
  options,
  onChange,
  label,
  selectedOption,
  disabled,
  displayProp,
  valueProp,
}: ButtonSelectProps<T, V, D>) => {
  const getOptionValue = useCallback(
    (option?: T) => {
      if (_.isNil(option)) return undefined;
      if (_.isNil(valueProp)) return option as unknown as V;
      return option[valueProp];
    },
    [valueProp],
  );

  const getOptionDisplay = useCallback(
    (option: T) => {
      if (_.isNil(displayProp)) return option as number | string;
      return option[displayProp];
    },
    [displayProp],
  );

  const selectedValue = useMemo(() => {
    const selection = getOptionValue(selectedOption);
    return selection;
  }, [getOptionValue, selectedOption]);

  const handleChange = (_event: MouseEvent<HTMLElement>, value: V) => {
    onChange(value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={selectedValue}
      exclusive
      onChange={handleChange}
      aria-label={label ?? 'Select an option'}
    >
      {_.chain(options)
        .map((option) => {
          const value = getOptionValue(option);
          const display = getOptionDisplay(option);
          return { option, value, display };
        })
        .filter((a) => !_.isNil(a.value))
        .value()
        .map(({ value, display }) => {
          return (
            <ToggleButton
              key={value as string | number}
              value={value as string | number}
              disabled={disabled}
            >
              {display as string | number}
            </ToggleButton>
          );
        })}
    </ToggleButtonGroup>
  );
};

export default ButtonSelect;
