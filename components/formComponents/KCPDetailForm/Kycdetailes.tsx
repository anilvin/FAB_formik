import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().required('Please Select Option '),
  fullName: yup
    .string()
    .max(255, 'length limit excded')
    .required('Full Name is Required'),
  firstName: yup
    .string()
    .max(100, 'length limit excded')
    .required('First Name is Required'),
  lastName: yup
    .string()
    .max(100, 'length limit excded')
    .required('Last Name is Required'),
  gender: yup.string().required('Please Select Option '),
  mothersMaidenName: yup
    .string()
    .max(30, 'length limit excded')
    .required('Last Name is Required'),
  //   dateOfbirth:      :"",
  countryOfBirth: yup.string().required('Please Select Option '),
  placeOfBirth: yup
    .string()
    .max(50, 'length limit excded')
    .required('Place of Birth is Required'),
  countryOfResidence: yup.string().required('Please Select Option '),
  nationality_Citizenship: yup.string().required('Please Select Option '),
  otherNationality: yup.string().required('Please Select Option '),
  residentStatus: yup.string().required('Please Select Option '),
  yearsOfResidenceinUae: yup.string().required('Please Select Option '),
  yearsInBusiness: yup.string().required('Please Select Option '),
  maritalStatus: yup.string().required('Please Select Option '),
  numberOfDependents: yup.string().required('Please Select Option '),
  designation: yup.string().required('Please Select Option '),
});

export default validationSchema;
