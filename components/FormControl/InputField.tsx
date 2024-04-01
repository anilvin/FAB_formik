import React from 'react';
import { Input } from '@genieology/gtb-ui';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';

function InputField(props: any) {
  const { label, name, ...rest } = props;
  return (
    <>
      <FastField
        id={name}
        name={name}
        as={Input}
        label={label}
        width="100%"
        {...rest}
      />
      <ErrorMessage name={name} component={TextError as React.ComponentType<{}>} />
    </>
  );
}

export default InputField;
