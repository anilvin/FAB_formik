import * as yup from 'yup';

const ContactandAddressSchema = yup.object({
  addressType: yup
    .string()
    .required('Please enter your AddressType '),

  buildingNumber: yup
    .string()
    .required('Please enter your BuildingNumber'),
  buildingName: yup.string().required('Please enter your BuildingName'),

  streetName: yup
    .string()
    .required('Please enter your StreetName'),
  nearestLandmark: yup.string().required('Please enter your NearestLandmark'),

  locationArea: yup
    .string()
    .required('Please enter your Location_Area'),
  country: yup.string().required('Please enter your Country'),

  townCity: yup.string().required('Please enter your Town_City'),
  zipCode: yup
    .string()
    .required('Please enter your ZipCode'),

  addressEmirate: yup
    .string()
    .required('Please enter your Emirate'),

  addressPoBox: yup
    .string()
    .min(2)
    .max(10)
    .required('Please enter your POBox'),
  addressStayingAtThis: yup.string().required('Please enter your StayingAtThisAddressSince'),

  mailingAddress: yup.string().required('Please enter your MailingAddress'),
  primaryMobileNumber: yup.string().required('Please enter your PrimaryMobileNumber'),
  officeTelephoneNumber: yup.string().required('Please enter your OfficeTelephoneNumber'),

  homeTelephoneNumber: yup.string().required('Please enter your HomeTelephoneNumber'),
  fax: yup
    .string()
    .required('Please enter your Fax'),

  emailAddress: yup.string().required('Please enter your EmailAddress').email('Enter valid email id'),
});
export default ContactandAddressSchema;
