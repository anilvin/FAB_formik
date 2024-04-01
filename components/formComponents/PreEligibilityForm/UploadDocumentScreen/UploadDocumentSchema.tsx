import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  user: Yup.string()
    .min(2, 'must be atleast two character')
    .max(25)
    .required('Please enter your userID'),
  // .matches(/[0-9]/, 'Must be alphanumeric'),
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Please Follow the rules',
    ),
});
export const SetPasswordSchema = Yup.object().shape({
  userID: Yup.string().min(2).max(25).required('Please enter your name'),
  setPassword: Yup.string().min(6).required('Please enter your password'),
  re_enterPasword: Yup.string()
    .required()
    .oneOf([Yup.ref('setPassword'), null], 'Password must match'),
});
export const UploadDocumentSchema = Yup.object().shape({
  tradeLicense: Yup.mixed().required('tradeLicense is required'),
  partnerVisa: Yup.mixed().required('partnerVisa is required'),
  partnerPassport: Yup.mixed().required('File is required'),
  parrtnerEmirateID: Yup.mixed().required('File is required'),
});
export const ForgotPasswordSchema = Yup.object().shape({
  userID: Yup.string().min(2).max(25).required('Please enter your name'),
  EmailAddress: Yup.string().email().required('Please enter your email'),
  PhoneNumber: Yup.string()
    .required('Please enter your Phone Number')
    .min(9, 'to short')
    .max(10, 'to long'),
});
