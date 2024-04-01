import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputFile } from '@genieology/gtb-ui';
import TextError from './TextError';

function FileUpload(props: any) {
  const { label, name, ...rest } = props;
  return (
    <>
      <Field
        id={name}
        name={name}
        width="100%"
        as={InputFile}
        label={label}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError as React.ComponentType<{}>} />
    </>
  );
}
export default FileUpload;
