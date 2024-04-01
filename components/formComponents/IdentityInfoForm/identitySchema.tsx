import * as yup from 'yup';

const IdentitySchema = yup.object({
  identifiertype: yup
    .string()
    .required('Please enter your IdentifierType '),

  number: yup
    .string()
    .required('Please enter your Number'),
  issuedate: yup.string().required('Please enter your IssueDate'),

  expirydate: yup
    .string()
    .required('Please enter your ExpiryDate'),
  placeofissue: yup.string().required('Please enter your PlaceOfIssue'),

});
export default IdentitySchema;
