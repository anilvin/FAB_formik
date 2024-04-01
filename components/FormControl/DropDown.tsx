import React from 'react';
import { Dropdown } from '@genieology/gtb-ui';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';

function DropDown(props: any) {
  const { label, name, ...rest } = props;
  return (
    <>
      <FastField
        id={name}
        name={name}
        width="100%"
        as={Dropdown}
        label={label}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError as React.ComponentType<{}>} />
    </>
  );
}

export default DropDown;
