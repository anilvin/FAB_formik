import * as yup from 'yup';

const validationSchema = yup.object({
  crsEntityType: yup.string().required('Please CRS Entity Type '),

  crsDocumentType: yup.string().required('Please Enter Document Type '),

});

export default validationSchema;
