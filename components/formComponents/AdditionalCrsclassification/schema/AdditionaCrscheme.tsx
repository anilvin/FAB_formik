import * as yup from 'yup';

const validationSchema = yup.object({

  fullnameOfUBO: yup.string().required('Full Name of the UBO / Controlling Person Required'),
  isResidencyVisaValid: yup.string().required(' Please Select Option'),
  uaeTaxResidency: yup.string().required(' Please Select Option'),
  isResidnetOfJurisdictions: yup.string().required(' Please Select Option'),
  jurisdictionsPersonalIncomeTax: yup.string().required('PLease Enter Text'),
});

export default validationSchema;
