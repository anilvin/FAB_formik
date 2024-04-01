import * as yup from 'yup';

const validationSchema = yup.object({
  standing_instructions: yup.string().required('Please Select Option '),

  holding_incare: yup.string().required('Please Select Option '),

  us_tax_form: yup.string().required('Please Select Option '),

  us_resident: yup.string().required('Please Select Option '),

  us_citizen: yup.string().required('Please Select Option '),

  us_green_card_holder: yup.string().required('Please Select Option '),

  country_of_birth: yup.string().required('Please Select Country'),
});

export default validationSchema;
