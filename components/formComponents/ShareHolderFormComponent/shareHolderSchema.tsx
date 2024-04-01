import * as yup from 'yup';

const validationSchema = yup.object({
  customerInformation: yup.object({
    CIF: yup
      .string()
      .required('Please enter CIF'),
    title: yup
      .string()
      .required('Please enter your title'),
    fullName: yup
      .string()
      .required('Please enter your Full Name'),
    firstName: yup
      .string()
      .required('Please enter your First Name'),
    lastName: yup
      .string()
      .required('Please enter your Last Name'),
    gender: yup
      .string()
      .required('Please enter your Gender'),
    maritalStatus: yup
      .string()
      .required('Please enter your Marital Status'),
    mothersMaidenName: yup
      .string()
      .required('Please enter your Mothers Maiden Name'),
    dateOfBirth: yup
      .string()
      .required('Please enter your DOB'),
    countryOfBirth: yup
      .string()
      .required('Please enter your country of birth'),
    placeOfBirth: yup
      .string()
      .required('Please enter your place of birth'),
    nationality: yup
      .string()
      .required('Please enter your nationality'),
    otherNationality: yup
      .string()
      .required('Please enter your other Nationality'),
    countryOfRecidence: yup
      .string()
      .required('Please enter your country of recidence'),
    recidencyStatus: yup
      .string()
      .required('Please enter your recidency status'),
    primaryMobileNumber: yup
      .string()
      .required('Please enter your recidency status'),
    legalEntityType: yup
      .string()
      .required('Please enter your legal entity type'),
    letalEntityCategory: yup
      .string()
      .required('Please enter your legal entity category'),
    officeTelephoneNumber: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    homeTelephoneNumber: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    personalEmail: yup
      .string()
      .email()
      .max(20, 'to long')
      .required('This field is required'),
    workEmail: yup
      .string()
      .email()
      .max(20, 'to long')
      .required('This field is required'),
    shareholdingAmount: yup
      .string()
      .required('Please enter your shareholding amount'),
    shareholdingPercentage: yup
      .string()
      .required('Please enter your shareholding %'),
    typeOfOwnership: yup
      .string()
      .required('Please enter your type of ownership'),
    ownershipStatus: yup
      .string()
      .required('Please enter your ownership status'),
    bankingWithFAB: yup
      .string()
      .required('Please enter yes or no'),
    ifYesAccountNo: yup
      .string()
      .required('Please enter your account number'),
    usPassport: yup
      .string()
      .required('Please enter yes or no'),
  }),
  // address Details
  AddressDetails: yup.object({
    addressType: yup
      .string()
      .max(20, 'to long')
      .required('Please enter yes or no'),
    buildingNumber: yup
      .string()
      .max(120, 'to long')
      .required('Please enter yes or no'),
    buildingName: yup
      .string()
      .max(120, 'to long')
      .required('This field is required'),
    streetName: yup
      .string()
      .max(120, 'to long')
      .required('This field is required'),
    nearestLandmark: yup
      .string()
      .max(50, 'to long')
      .required('This field is required'),
    locationArea: yup
      .string()
      .max(40, 'to long')
      .required('This field is required'),
    townCity: yup
      .string()
      .max(50, 'to long')
      .required('This field is required'),
    zipCode: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    addressEmirate: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    addressPoBox: yup
      .string()
      .max(10, 'to long')
      .required('This field is required'),
    country: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    addressStayingAtThis: yup
      .date()
      .required('This field is required'),
    mailingAddress: yup
      .string()
      .max(10, 'to long')
      .required('This field is required'),
    primaryMobileNumber: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    officeTelephoneNumber: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    homeTelephoneNumber: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    fax: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    emailAddress: yup
      .string()
      .max(50, 'to long')
      .required('This field is required'),
  }),
  // identity details
  identityDetails: yup.object({
    identifiertype: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    number: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    issuedate: yup
      .date()
      .required('This field is required'),
    expirydate: yup
      .date()
      .required('This field is required'),
    placeofissue: yup
      .string()
      .max(30, 'to long')
      .required('This field is required'),
  }),
  ReferenceDetails: yup.object({
    referenceType: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    referenceMobileNumber: yup
      .string()
      .max(20, 'to long')
      .required('This field is required'),
    referenceEmail: yup
      .string()
      .max(12, 'to long')
      .required('This field is required'),
    relationshipwithKcp: yup
      .date()
      .max(120, 'to long')
      .required('This field is required'),
    telecheckingwithContactPerson: yup
      .string()
      .max(30, 'to long')
      .required('This field is required'),
  }),
  // Tax Classification Details
  // (primlinary tax assessment)
  taxClassificationDetails: yup.object({
    primlinaryTaxAssessment: yup.object({
      standing_instructions: yup
        .string()
        .max(50, 'to long')
        .required('This field is required'),
      holding_incare: yup
        .string()
        .max(30, 'to long')
        .required('This field is required'),
      us_tax_form: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      us_resident: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      us_citizen: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      us_green_card_holder: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      country_of_birth: yup
        .string()
        .max(50, 'to long')
        .required('This field is required'),
    }),
    // (us tax assessment)
    usTaxAssessment: yup.object({
      chapter3Status: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      reportingCode: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      us_Tax_person_status: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      tax_Form_signed: yup
        .date()
        // .max(12, 'to long')
        .required('This field is required'),
      reportable: yup
        .string()
        .required('This field is required'),
      taxFormType: yup
        .string(),
      chapterStatus: yup
        .string()
        .max(20, 'to long')
        .required('This field is required'),
      startupDate: yup
        .string()
        .required('This field is required'),
      bankruptcyDate: yup
        .string()
        .required('This field is required'),
      sponsoringEntity: yup
        .string()
        .max(200, 'to long')
        .required('This field is required'),
      usOnshoreObligation: yup
        .string()
        .max(30, 'to long')
        .required('This field is required'),
      disregardedentity: yup
        .string()
        .max(30, 'to long')
        .required('This field is required'),
      taxFormReceived: yup
        .date()
        // .max(12, 'to long')
        .required('This field is required'),
    }),
    // (FATCA Classification)
    fatcaClassification: yup.object({
      fatcataxIDtype: yup
        .string()
        .max(350, 'to long')
        .required('This field is required'),
      fatcataxIDnumber: yup
        .string()
        .max(20, 'to long')
        .required('This field is required'),
      isTaxResidentOfOther: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      countryOfTax: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      isReportable: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      status: yup
        .string()
        .max(25, 'to long')
        .required('This field is required'),
      tinUnavailableReason: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      tinUnavailableRemarks: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      fatcaNationality: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      fatcaOtherNationality: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      comments: yup
        .string()
        .max(200, 'to long')
        .required('This field is required'),
    }),
    // (CRS Classification)
    crsClassification: yup.object({
      crsEntityType: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      crsDocumentType: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      crsDocumentSignedDate: yup
        .date()
        .required('This field is required'),
      crsDocumentReceivedDate: yup
        .date()
        .required('This field is required'),
    }),
    // (Additional FATCA/CRS Classification)
    AdditionalFATCA_CRS: yup.object({
      fullnameOfUBO: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      isResidencyVisaValid: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
      uaeTaxResidency: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      isResidnetOfJurisdictions: yup
        .string()
        .max(10, 'to long')
        .required('This field is required'),
      jurisdictionsPersonalIncomeTax: yup
        .string()
        .max(100, 'to long')
        .required('This field is required'),
    }),
  }),
});
export default validationSchema;
