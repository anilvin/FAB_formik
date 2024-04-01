import * as yup from 'yup';

const validationSchema = yup.object({
  addressType: yup.string().required('Please Enter Address Type'),
  buildingNumber: yup.string().required('Please Enter BuildingNumber'),
  buildingName: yup.string().required('Please Enter BuildingName'),
  streetName: yup.string().required('Please Enter StreetName'),
  locationArea: yup.string().required('Please Enter Location Area'),
  townCity: yup.string().required('Please Enter towncity'),
  zipCode: yup.string().required('Please Enter ZipCode'),
  addressEmirate: yup.string().required('Please Enter Address Emirate'),
  addressPoBox: yup.string().required('Please Enter Address'),
  country: yup.string().required('Please Select Contry'),
  addressStayingAtThis: yup.string().required('Please Select Date'),
  mailingAddress: yup.string().required('Please Enter Mailing Address'),
  primaryMobileNumber: yup.string().required('Please Enter Primary Mobile Number'),
//   officeTelephoneNumber:yup.string().required("Please Enter Office Telephone Number"),
//   homeTelephoneNumber:    ,
//   fax:                    ,
//   emailAddress:           ,
//   nearestLandmark:        ,
});

export default validationSchema;
