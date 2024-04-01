import * as yup from 'yup';

const validationSchema = yup.object({
  chapterThreeStatus: yup.string().required('Please Select Option '),

  reportingCode: yup.string().required('Please Select Option '),

  usTaxPersonStatus: yup.string().required('Please Select Option '),

  reportable: yup.string().required('Please Enter Value '),

  taxFormType: yup.string().required('Please Select Option '),

  chapterFourStatus: yup.string().required('Please Enter Value '),

  sponsoringEntity: yup.string().required('Please Select Option '),

  onshoreObligation: yup.string().required('Please Select Country'),

  isDisregardedEntity: yup.string().required('Please Select Country'),

});

export default validationSchema;
