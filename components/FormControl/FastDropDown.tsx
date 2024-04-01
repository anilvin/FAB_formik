import React from 'react';
import { Dropdown } from '@genieology/gtb-ui';
import { ErrorMessage, FastField } from 'formik';
import TextError from './TextError';

function FastDropDown(props: any) {
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

export default FastDropDown;
