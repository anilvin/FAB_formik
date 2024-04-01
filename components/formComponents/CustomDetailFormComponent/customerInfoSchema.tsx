import * as yup from 'yup';

const CustomerInfoSchema = yup.object({
  legal_entity_name: yup
    .string()
    .min(1)
    .max(255)
    .required('Please enter your LegalEntityName '),

  group_name: yup
    .string()
    .required('Please enter your GroupName'),
  short_name: yup.string().min(1).max(35).required('Please enter your ShortName'),

  country_of_incorporation: yup
    .string()
    .required('Please enter your CountryOfIncorporation'),
  // CountryOfDomicile: yup.string().required('Please enter your CountryOfDomicile'),

  business_operation: yup
    .string()
    .required('Please enter your CountriesOfBusinessOperations'),
  date_of_incorporation: yup.string().required('Please enter your DateOfIncorporation'),

  website_address: yup.string().required('Please enter your WebsiteAddress'),
  emirate_of_registration: yup
    .string()
    .required('Please enter your EmirateOfRegistration'),

  registration_of_authority: yup
    .string()
    .required('Please enter your RegistrationAuthority'),

  registration_authority_name: yup
    .string()
    .min(2)
    .max(10)
    .required('Please enter your RegistrationAuthorityName'),
  legal_entity_type: yup.string().required('Please enter your LegalEntityType'),

  legal_entity_category: yup.string().required('Please enter your LegalEntityCategory'),
  vat: yup.string().required('Please enter your VatNumber'),

  primary_industry: yup.string().required('Please enter your PrimaryIndustry'),
  secondary_industry: yup.string().required('Please enter your SecondaryIndustry'),

  sector: yup.string().required('Please enter your Sector'),
  business_details_description: yup
    .string()
    .required('Please enter your BusinessDetailsDescription'),

  number_of_employes: yup.string().required('Please enter your NumberOfEmployees'),

  current_company_turnoer: yup
    .string()
    .required('Please enter your CurrentCompanyTurnover'),
  projected_company_turnover: yup
    .string()
    .required('Please enter your ProjectedCompanyTurnover'),

  // authorised_signatory: yup.string().required('Please enter your AuthorizedCapital'),
});
export default CustomerInfoSchema;
