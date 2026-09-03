import {
  Autocomplete,
  AutocompleteRenderInputParams,
  InputBaseComponentProps,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { isEmpty, isNil } from 'lodash';
import { useCallback } from 'react';

type BaseProps = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  mask?: React.ElementType<InputBaseComponentProps, keyof React.JSX.IntrinsicElements>;
  errors?: string;
};

type StringComboBoxProps = BaseProps & {
  items: string[];
  multiple?: boolean;
  value?: string | string[];
  onChange: (value: string | string[]) => void;
};

type ObjectComboBoxProps<
  T extends Record<string, unknown>,
  K extends keyof T,
> = BaseProps & {
  items: T[];
  multiple?: boolean;
  value?: T[K] | T[K][] | string | string[];
  onChange: (value: T[K] | T[K][] | string | string[]) => void;
  getOptionLabel: (option: T) => string;
  valueProperty: K;
};

const getMatchingOptions = <
  T extends Record<string, unknown>,
  K extends keyof T,
>(
  items: T[],
  value: T[K] | T[K][] | string | string[] | null | undefined,
  valueProperty: K,
  multiple: boolean,
) => {
  if (multiple) {
    if (!Array.isArray(value)) {
      return [] as T[];
    }

    return items.filter((item) =>
      value.some((entry) => item[valueProperty] === entry),
    );
  }

  if (value === null || value === undefined || value === '') {
    return null;
  }

  const match = items.find((item) => item[valueProperty] === value);

  if (match) {
    return match;
  }

  return typeof value === 'string' ? value : null;
};

function ComboBox<
  T extends Record<string, unknown>,
  K extends keyof T,
>(
  props: StringComboBoxProps | ObjectComboBoxProps<T, K>,
): React.ReactElement {
  const {
    multiple = false,
    label,
    placeholder,
    disabled = false,
    mask,
    errors,
  } = props;

  const constructFieldParams = useCallback((params: AutocompleteRenderInputParams) => {
    const fieldParams: TextFieldProps = {
      ...params,
      label,
    }

    if(!isNil(placeholder)) {
      fieldParams.placeholder = placeholder;
    }

    if(!isEmpty(errors)) {
      fieldParams.error = true;
      fieldParams.helperText = errors;
    }

    if(!isNil(mask)) {
      if(isNil(fieldParams.slotProps)) {
        fieldParams.slotProps = {};
      }
      fieldParams.slotProps.input = {
        ...params.InputProps,
        inputComponent: mask as React.ElementType<InputBaseComponentProps>,
      };
    }

    return fieldParams;
  }, [errors, label, mask, placeholder]);

  const isObjectComboBox = (
    props: StringComboBoxProps | ObjectComboBoxProps<T, K>,
  ): props is ObjectComboBoxProps<T, K> => {
    return 'getOptionLabel' in props && 'valueProperty' in props;
  };

  if (isObjectComboBox(props)) {
    const resolvedValue = getMatchingOptions(
      props.items,
      props.value,
      props.valueProperty,
      multiple,
    ) as T[] | T | string | null;

    return (
      <Autocomplete
        multiple={multiple}
        freeSolo
        disabled={disabled}
        options={props.items}
        getOptionLabel={(option) => {
          if (typeof option === 'string') return option;
          return props.getOptionLabel(option as T);
        }}
        value={resolvedValue as never}
        onChange={(_, newValue) => {
          if (multiple) {
            const values = Array.isArray(newValue)
              ? newValue.map((item) => {
                  if (typeof item === 'string') {
                    return item;
                  }

                  return item[props.valueProperty];
                })
              : [];

            props.onChange(values as T[K][] | string[]);
            return;
          }

          if (typeof newValue === 'string') {
            props.onChange(newValue as T[K] | string);
            return;
          }

          if (newValue === null) {
            props.onChange('' as T[K] | string);
            return;
          }

          if (Array.isArray(newValue)) {
            return;
          }

          props.onChange(newValue[props.valueProperty] as T[K]);
        }}
        renderInput={(params) => (
          <TextField
            {...constructFieldParams(params)}
          />
        )}
      />
    );
  }

  return (
    <Autocomplete
      multiple={multiple}
      freeSolo
      disabled={disabled}
      options={props.items}
      value={multiple ? (Array.isArray(props.value) ? props.value : []) : props.value ?? ''}
      onChange={(_, newValue) => {
        if (multiple) {
          props.onChange(
            Array.isArray(newValue)
              ? newValue
              : [],
          );
          return;
        }

        props.onChange(
          typeof newValue === 'string'
            ? newValue
            : '',
        );
      }}
      renderInput={(params) => (
        <TextField
          {...constructFieldParams(params)}
        />
      )}
    />
  );
}

export default ComboBox