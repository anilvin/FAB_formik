export type ApplicationDetailProps = {
  appDetailIOrderId: string,
  created_date: string,
  new_or_existing_customer: string,
  product: string,
  loan_type: string,
  loan_account_number: string,
  legal_entity_name: string,
  cif_id: string,
  emirates_id: string,
  trade_license_number: string,
  branch: string,
  channel: string
};

export type CustomerDetailProps = {
  customeriOrderId: string,
  short_name: string,
  country_of_incorporation: string,
  country_of_domiciles: string,
  business_operation: string,
  date_of_incorporation: string,
  website_address: string,
  emirate_of_registration: string,
  legal_entity_type: string,
  legal_entity_category: string,
  primary_industry: string,
  secondary_industry: string,
  number_of_employes: string,
  current_company_turnoer: string,
  projected_company_turnover: string,
  sister_company?: string,
  legal_entity_name: string,
  group_name: string,
  registration_of_authority: string,
  registration_authority_name: string,
  vat: string,
  fab_sub_segment?: string,
  sector: string,
  authorised_signatory?: string,
  AuthorizedCapital?:string,
  rollovertype?: string,
  customer_status?: string,
  business_details_description?: string
};

export type AddressDetailProps = {
  kcpAddressIOrderId: string,
  addressiOrderId?: string,
  addressType: string,
  buildingNumber: string,
  buildingName: string,
  streetName: string,
  locationArea: string,
  townCity: string,
  zipCode: string,
  addressEmirate: string,
  addressPoBox: string,
  country: string,
  addressStayingAtThis: string,
  mailingAddress: string,
  primaryMobileNumber: string,
  officeTelephoneNumber: string,
  homeTelephoneNumber: string,
  fax: string,
  emailAddress: string,
  nearestLandmark: string
};

export type IdentitySingleDataProps = {
  identifiertype: string,
  kcpIdentityIOrderId: string,
  number: string,
  issuedate: string,
  expirydate: string,
  placeofissue: string,
  identityiOrderId: string,
};

export type EKycDataProps = {
  tradingName: string,
  previousName: string,
  projectedPOS: string,
  expectedTransactions: string,
  typeOfTransactions: string,
  currenciesInvolved: string,
  countriesInvolved: string,
  projectedAnnualTurnover: string,
  natureOfBusiness: string,
  sourceOfFunds: string,
  sourceOfIncome: string,
  sourceOfInitialFund: string,
  valueOfInitial: string,
  countryOfInitial: string,
  annualBusinessTurnover: string,
  projectedBusinessTurnover: string,
  groupAnnualTurnover: string,
  valueOfInitialInvestment: string,
  offshoreBankingLicense: string,
  transactionType: string,
  kyciOrderID: string,
  activeSanctionedCountriesTerritories: string,
  ifYesSpecify: string,
  nameOfStockExch: string,
  isThisFAB: string,
  isUAELiecensed: string,
  isThisEntityPubliclyListed: string,
  typeOfShare: string,
};

export type TaxClassificationDataProps = {
  preliminaryTaxAssesment: PreliminaryTaxAssesmentDataProps,
  usTaxClaasification: UsTaxClaasificationDataProps,
  fatcaDetails:FATCADetailsDataProps,
  crsClaasification:CRSClaasificationDataProps,
  additionalFATCA:AdditionalFATCADataProps
};

export type PreliminaryTaxAssesmentDataProps = {
  standingInstructionsToUS: string,
  soleAddressofTheEntity: string,
  usTaxForm: string,
  isUSResident: string,
  isUSCitizen: string,
  isGreenCardHolder: string,
  countryOfBirth: string,
  preliminaryTaxAssesmentiOrderID: string
};

export type UsTaxClaasificationDataProps = {
  chapterThreeStatus: string,
  exemptionFromFATCA: string,
  usTaxPersonStatus: string,
  taxFormSignedDate: string,
  reportable: string,
  chapterFourStatus: string,
  startupDate: string,
  bankruptDate: string,
  sponsoringEntity: string,
  onshoreObligation: string,
  isDisregardedEntity: string,
  taxFormReceivedDate: string,
  usTaxClaasificationiOrderID: string,
  taxFormType: string
};

export type FATCADetailsDataProps = {
  fatcaiOrderID: string,
  fatcataxIDtype: string,
  fatcataxIDnumber: string,
  isTaxResidentOfOther: string,
  countryOfTax: string,
  isReportable: string,
  status: string,
  tinUnavailableReason: string,
  tinUnavailableRemarks: string,
  fatcaNationality: string,
  comments: string
};

export type CRSClaasificationDataProps = {
  crsEntityType: string,
  crsDocumentType: string,
  crsDocumentSignedDate: string,
  crsDocumentReceivedDate: string,
  crsClaasificationiOrderID: string,
};

export type AdditionalFATCADataProps = {
  additionalFATCAiOrderID: string,
  fullnameOfUBO: string,
  isResidencyVisaValid: string,
  uaeTaxResidency: string,
  isResidnetOfJurisdictions: string,
  jurisdictionsPersonalIncomeTax: string
};

export type KCPApplicantDataProps = {
  title: string,
  fullName: string,
  firstName: string,
  lastName: string,
  gender: string,
  mothersMaidenName: string,
  dateOfbirth: string,
  countryOfBirth: string,
  placeOfBirth: string,
  countryOfResidence: string,
  nationality_Citizenship: string,
  otherNationality: string,
  residentStatus: string,
  yearsOfResidenceinUae: string,
  yearsInBusiness: string,
  maritalStatus: string,
  numberOfDependents: string,
  designation: string
};

export type AddressDataSetProps = {
  address: AddressDetailProps[],
};

export type IdentityDataProps = {
  identity: IdentitySingleDataProps[],
};

export type KCPAppDetailDataProps = {
  kcpApplicant: KCPApplicantDataProps,
  kcpAddressDetails:AddressDataSetProps,
  kcpIdentityDetails: IdentityDataProps,
};

export type AboutYourCompanyDataProps = {
  customerDetail?:CustomerDetailProps,
  addressDetails:AddressDataSetProps,
  identityDetails: IdentityDataProps,
};
