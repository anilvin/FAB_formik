import * as yup from 'yup';

const validationSchema = yup.object({
  FirstName: yup
    .string()
    .min(2)
    .max(10)
    .required('Please enter your First Name '),

  LastName: yup.string().min(2).max(10).required('Please enter your Last Name'),

  EmailAddress: yup.string().email().required('Please enter your email'),

  PhoneNumber: yup
    .string()
    .required('Please enter your Phone Number')

    .min(9, 'to short')
    .max(10, 'to long'),

  CompanyName: yup.string().required('Please enter your Company Name'),

  CompanyType: yup.string().required('Please enter your Company Type'),

  isUAEResident: yup.boolean(),

  EmiratesID: yup
    .string()
    .when('isUAEResident', {
      is: true,
      then: yup.string().required('please enter your Emirates ID'),
    }),

  TradeLicenceNo: yup
    .string()
    .required('Please enter your Trade Licence Number'),
});

export default validationSchema;
