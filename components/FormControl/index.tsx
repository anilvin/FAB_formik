import React from 'react';
import InputFile from '@genieology/gtb-ui/dist/components/InputFile';
import DropDown from './DropDown';
import Input from './InputField';
import DatePickerControl from './DatePickerControl';
import FastDropDown from './FastDropDown';

function FormControl(props: any) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
    case 'select':
      return <DropDown {...rest} />;
    case 'fastselect':
      return <FastDropDown {...rest} />;
    case 'radio':
    case 'checkbox':
    case 'file':
      return <InputFile {...rest} />;
    case 'date':
      return <DatePickerControl {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
