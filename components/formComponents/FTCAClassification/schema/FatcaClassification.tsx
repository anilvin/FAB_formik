import * as yup from 'yup';

const validationSchema = yup.object({
  fatcataxIDtype: yup.string().required('Please Select Tax Identifier Type '),

  fatcataxIDnumber: yup.string().required('Please Enter Tax Identification Number '),

  isTaxResidentOfOther: yup.string().required('Please Select Option '),

  countryOfTax: yup.string().required('Please Select Country of Tax Residency '),

  isReportable: yup.string().required('Please Select Option '),

  status: yup.string().required('Please Select FATCA Status '),

  tinUnavailableReason: yup.string().required('Please Select TIN Unavailable Reason'),

  tinUnavailableRemarks: yup.string().required('Please Select TIN Unavailable Remarks'),

  fatcaNationality: yup.string().required('Please Select Nationality'),

  comments: yup.string().required('Please Enter Comment'),
});

export default validationSchema;
