import type { TextFieldProps } from '@mui/material';
import { isEmpty } from 'lodash';
import { useMemo } from 'react'

export const useFieldValidationMessage = (
  fieldValue: unknown,
  validation: (fieldValue: unknown) => boolean,
  message: string,
) => {
  const helperText: string = useMemo(() => {
    return !validation(fieldValue) ? message : '';
  }, [fieldValue, message, validation]);

  const validationAttrs: TextFieldProps = useMemo(() => {
    const validationAttrs: TextFieldProps = {};
  
    if(!isEmpty(helperText)) {
      validationAttrs.helperText = helperText;
    }

    return validationAttrs;
  }, [helperText]);

  return {
    validationAttrs,
  }
};

export default useFieldValidationMessage;