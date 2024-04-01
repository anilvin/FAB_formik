import * as yup from 'yup';

const validationSchema = yup.object({
  chapter3Status: yup.string().required('Please Select Option '),

  reportingCode: yup.string().required('Please Select Option '),

  us_Tax_person_status: yup.string().required('Please Select Option '),

  reportable: yup.string().required('Please Enter Value '),

  taxFormType: yup.string().required('Please Select Option '),

  chapterStatus: yup.string().required('Please Enter Value '),

  sponsoringEntity: yup.string().required('Please Select Option '),

  usOnshoreObligation: yup.string().required('Please Select Country'),

  disregardedentity: yup.string().required('Please Select Country'),

});

export default validationSchema;
