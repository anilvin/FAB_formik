import * as yup from 'yup';

const SisterSchema = yup.object({
  connectedPartyFullName: yup
    .string()
    .required('Please enter your Full Name '),

  connectedPartyCountryOfIncorporation: yup
    .string()
    .required('Please enter Country Of Incorporation'),
  connectedPartyDateOfIncorporation: yup.string().required('Please enter Date Of Incorporation'),

  connectedPartyCountryOfDomicile: yup
    .string()
    .required('Please enter Country Of Domicile'),
  connectedPartyCountryOfBusinessOperation: yup.string().required('Please enter Country Of Business Operation'),

  connectedPartyLegalEntityType: yup
    .string()
    .required('Please enter Legal Entity Type'),
  legalEntityCategory: yup.string().required('Please enter legal Entity Category'),

  industryType: yup.string().required('Please enter Industry type'),
  connectedPartyPrimaryIndustryType: yup
    .string()
    .required('Please enter Primary Industry'),

  connectedPartySecondaryIndustryType: yup
    .string()
    .required('Please enter Secondary Industry'),

  businessActivity: yup
    .string()
    .min(2)
    .max(10)
    .required('Please enter Business Activity'),
  connectedPartyTypeOfOwnership: yup.string().required('Please enter your Ownership'),

  connectedPartyNoOfEmployees: yup.string().required('Please enter No. Of Emp'),
  connectedPartyAdditionalCompnayInfo: yup.string().required('Please enter Additonal Details'),
  connectedPartyOwnershipStatus: yup.string().required('Please enter your Ownership Status'),

  connectedPartyOfficeTelephoneNumber: yup.string().required('Please enter your Office TelephoneNumber'),
  connectedPartyemailAddress: yup
    .string()
    .required('Please enter your Email Address'),
  ifYesSpecify: yup.string().required('Please enter your Account Number'),
});
export default SisterSchema;
