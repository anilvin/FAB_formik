/* eslint-disable max-len */
import React, { useContext } from 'react';
import {
  Button,
  ButtonVariantsEnum,
  Card,
  DatepickerTypeEnum,
  Radio,
  RadioGroup,
  Text,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import styles from '../../businessProductForm/AboutYourCompanyForm.module.css';
import FormControl from '../../FormControl';
import SisterSchema from './sisterSchema';
import MasterContext from '../../MasterContext';

type Props = {
  onFormSubmit : (val?:any) => void;
  initData?:any
};

function SisterFormComponent({ onFormSubmit, initData }: Props) {
  const List = useContext(MasterContext.DropdownContext);
  const cpDetails = initData?.connectedPartiesDetails[0];
  const cpAddress = cpDetails?.connectedPartyaddressDetails?.connectedPartyaddress[0];
  const cpIdentity = cpDetails?.connectedPartyidentityDetails?.connectedPartyidentity[0];
  const cpTax = cpDetails?.connectedPartyTaxReferenceDetails?.connectedPartyTaxReference[0];

  const initFromApi = () => {
    const initDataMap = {
      customerInformation: {
        CIF: '',
        title: cpDetails?.connectedPartyTitle || '',
        fullName: cpDetails?.connectedPartyFullName || '',
        firstName: cpDetails?.connectedPartyFirstName || '',
        lastName: cpDetails?.connectedPartyLastName || '',
        gender: cpDetails?.connectedPartyGender || '',
        maritalStatus: cpDetails?.connectedPartyMartialStatus || '',
        mothersMaidenName: cpDetails?.connectedPartyMothersMaidenName || '',
        dateOfBirth: cpDetails?.connectedPartyDOB || '',
        countryOfBirth: cpDetails?.connectedPartyCountryOfBirth || '',
        placeOfBirth: cpDetails?.connectedPartyPlaceOfBirth || '',
        nationality: cpDetails?.connectedPartyNationality || '',
        otherNationality: cpDetails?.connectedPartyOtherNationality || '',
        countryOfRecidence: cpDetails?.connectedPartyCountryOfResidence || '',
        recidencyStatus: cpDetails?.connectedPartyResidencyStatus || '',
        legalEntityType: cpDetails?.connectedPartyLegalEntityType || '',
        letalEntityCategory: cpDetails?.legalEntityCategory || '',
        officeTelephoneNumber: '',
        homeTelephoneNumber: '',
        personalEmail: '',
        workEmail: '',
        shareholdingAmount: cpDetails?.connectedPartyShareHoldingAmount || '',
        shareholdingPercentage: cpDetails?.connectedPartyShareHoldingPercentage || '',
        typeOfOwnership: cpDetails?.connectedPartyTypeOfOwnership || '',
        ownershipStatus: cpDetails?.connectedPartyOwnershipStatus || '',
        bankingWithFAB: cpDetails?.connectedPartyBankingwithFAB || '',
        ifYesAccountNo: cpDetails?.connectedPartyFABAccountNumber || '',
        usPassport: cpDetails?.connectedPartyUSPassport || '',
      },
      // address Details
      AddressDetails: {
        addressType: cpAddress?.connectedPartyaddressType || '',
        buildingNumber: cpAddress?.connectedPartybuildingNumber || '',
        buildingName: cpAddress?.connectedPartybuildingName || '',
        streetName: cpAddress?.connectedPartystreetName || '',
        nearestLandmark: cpAddress?.connectedPartyNearestLandmark || '',
        locationArea: cpAddress?.connectedPartylocationArea || '',
        townCity: cpAddress?.connectedPartytownCity || '',
        zipCode: cpAddress?.connectedPartyzipCode || '',
        addressEmirate: cpAddress?.connectedPartyaddressEmirate || '',
        addressPoBox: cpAddress?.connectedPartyaddressPoBox || '',
        country: cpAddress?.connectedPartycountry || '',
        addressStayingAtThis: cpAddress?.connectedPartyaddressStayingAtThis || '',
        countryOfRecidence: '',
        mailingAddress: cpAddress?.connectedPartymailingAddress || '',
        primaryMobileNumber: cpAddress?.connectedPartyprimaryMobileNumber || '',
        officeTelephoneNumber: cpAddress?.connectedPartyofficeTelephoneNumber || '',
        homeTelephoneNumber: cpAddress?.homeTelephoneNumber || '',
        fax: cpAddress?.connectedPartyfax || '',
        emailAddress: cpAddress?.connectedPartyemailAddress || '',
      },
      // identity details
      identityDetails: {
        identifiertype: cpIdentity?.connectedPartyIdentifiertype || '',
        number: cpIdentity?.connectedPartyIdentityNumber || '',
        issuedate: cpIdentity?.connectedPartyIdentityIssuedate || '',
        expirydate: cpIdentity?.connectedPartyIdentityExpirydate || '',
        placeofissue: cpIdentity?.connectedPartyIdentityplaceofissue || '',
      },
      // Tax Classification Details
      taxClassificationDetails: {
        // (primlinary tax assessment)
        primlinaryTaxAssessment: {
          standing_instructions: cpTax?.connectedPartyTaxReferenceStandingInstructions || '',
          holding_incare: cpTax?.connectedPartyTaxReferenceInCareOfHold || '',
          us_tax_form: cpTax?.connectedPartyTaxReferenceUsTaxFromClient || '',
          us_resident: cpTax?.connectedPartyTaxReferenceIsUSResident || '',
          us_citizen: cpTax?.connectedPartyTaxReferenceIsUSCitizen || '',
          us_green_card_holder: cpTax?.connectedPartyTaxReferenceIsUSGreenCard || '',
          country_of_birth: cpTax?.connectedPartyTaxCountryOfBirth || '',
        },
        // (us tax assessment)
        usTaxAssessment: {
          chapter3Status: cpTax?.connectedPartyTaxChapter3Status || '',
          reportingCode: cpTax?.connectedPartyTaxW9Exemption || '',
          us_Tax_person_status: cpTax?.connectedPartyTaxUSTaxPersonStatus || '',
          tax_Form_signed: cpTax?.connectedPartyTaxFormSignedDate || '',
          reportable: cpTax?.connectedPartyTaxReportable || '',
          taxFormType: cpTax?.connectedPartyTaxFromType || '',
          chapterStatus: cpTax?.connectedPartyTaxChapter4Status || '',
          startupDate: cpTax?.connectedPartyTaxStartupDate || '',
          bankruptcyDate: cpTax?.connectedPartyTaxBankruptcyDate || '',
          sponsoringEntity: cpTax?.connectedPartyTaxNameOfSponsoring || '',
          usOnshoreObligation: cpTax?.connectedPartyTaxUSOnshore || '',
          disregardedentity: cpTax?.connectedPartyTaxIsDisregarded || '',
          taxFormReceived: cpTax?.connectedPartyTaxFormReceived || '',
        },
        // (FATCA Classification)
        fatcaClassification: {
          fatcataxIDtype: cpTax?.connectedPartyTaxIdentifierType || '',
          fatcataxIDnumber: cpTax?.connectedPartyTaxIdentifierNumber || '',
          isTaxResidentOfOther: '' || '',
          countryOfTax: cpTax?.connectedPartyTaxCountryOfTax || '',
          isReportable: cpTax?.connectedPartyTaxIsReportable || '',
          status: cpTax?.connectedPartyTaxFATCAStatus || '',
          tinUnavailableReason: cpTax?.connectedPartyTaxTINUnavailableReason || '',
          tinUnavailableRemarks: cpTax?.connectedPartyTaxTINUnavailableRemarks || '',
          fatcaNationality: cpTax?.connectedPartyTaxNationality || '',
          fatcaOtherNationality: cpTax?.connectedPartyTaxOtherNationality || '',
          comments: cpTax?.connectedPartyTaxComments || '',
        },
        // (CRS Classification)
        crsClassification: {
          crsEntityType: cpTax?.connectedPartyTaxComments || '',
          crsDocumentType: cpTax?.connectedPartyTaxComments || '',
          crsDocumentSignedDate: cpTax?.connectedPartyTaxComments || '',
          crsDocumentReceivedDate: cpTax?.connectedPartyTaxComments || '',
        },
        // (Additional FATCA/CRS Classification)
        AdditionalFATCA_CRS: {
          fullnameOfUBO: cpTax?.connectedPartyTaxFullNameOFUBO || '',
          isResidencyVisaValid: cpTax?.connectedPartyTaxVISAValidfor5years || '',
          uaeTaxResidency: '',
          isResidnetOfJurisdictions: cpTax?.connectedPartyTaxResidentInOtherJurisdictionSubjectToPersonal || '',
          jurisdictionsPersonalIncomeTax: '',
        },
      },
      ReferenceDetails: {
        kcpReferenceIOrderId: '',
        referenceType: '',
        referenceMobileNumber: '',
        referenceEmail: '',
        relationshipwithKcp: '',
        telecheckingwithContactPerson: '',
      },
    };
    return initDataMap;
  };
  console.log(initFromApi(), 'use for init data');

  const initialValues = {
    customerInformation: {
      connectedPartyFullName: '',
      connectedPartyCountryOfIncorporation: '',
      connectedPartyDateOfIncorporation: '',
      connectedPartyCountryOfDomicile: '',
      connectedPartyCountryOfBusinessOperation: '',
      connectedPartyLegalEntityType: '',
      legalEntityCategory: '',
      industryType: '',
      connectedPartyPrimaryIndustryType: '',
      connectedPartySecondaryIndustryType: '',
      businessActivity: '',
      connectedPartyTypeOfOwnership: '',
      connectedPartyNoOfEmployees: '',
      connectedPartyAdditionalCompnayInfo: '',
      connectedPartyOwnershipStatus: '',
      connectedPartyOfficeTelephoneNumber: '',
      connectedPartyemailAddress: '',
      connectedPartyBankingwithFAB: '',
      ifYesSpecify: '',
    },
    // address Details
    AddressDetails: {
      addressType: '',
      buildingNumber: '',
      buildingName: '',
      streetName: '',
      nearestLandmark: '',
      locationArea: '',
      townCity: '',
      zipCode: '',
      addressEmirate: '',
      addressPoBox: '',
      country: '',
      addressStayingAtThis: '',
      mailingAddress: '',
      primaryMobileNumber: '',
      officeTelephoneNumber: '',
      homeTelephoneNumber: '',
      fax: '',
      emailAddress: '',
    },
    // identity details
    identityDetails: {
      identifiertype: '',
      number: '',
      issuedate: '',
      expirydate: '',
      placeofissue: '',
    },
  };

  const createWorkItemStructure = (data:any) => {
    const obj = {
      connectedPartiesiOrderID: '',
      addressMapper: '',
      identityMapper: '',
      refMapper: '',
      taxMapper: '',
      connectedPartyType: 'Sister Company',
      connectedPartyCIF: '',
      connectedPartyTitle: data?.customerInformation?.title || '',
      connectedPartyFullName: data?.customerInformation?.fullName || '',
      connectedPartyFirstName: data?.customerInformation?.firstName || '',
      connectedPartyLastName: data?.customerInformation?.lastName || '',
      connectedPartyGender: data?.customerInformation?.gender || '',
      connectedPartyMartialStatus: data?.customerInformation?.maritalStatus || '',
      connectedPartyMothersMaidenName: data?.customerInformation?.mothersMaidenName || '',
      connectedPartyDOB: data?.customerInformation?.dateOfBirth || '',
      connectedPartyCountryOfBirth: data?.customerInformation?.countryOfBirth || '',
      connectedPartyPlaceOfBirth: data?.customerInformation?.placeOfBirth || '',
      connectedPartyNationality: data?.customerInformation?.nationality || '',
      connectedPartyOtherNationality: data?.customerInformation?.otherNationality || '',
      connectedPartyCountryOfResidence: data?.customerInformation?.countryOfRecidence || '',
      connectedPartyResidencyStatus: data?.customerInformation?.recidencyStatus || '',
      connectedPartyLegalEntityType: data?.customerInformation?.legalEntityType || '',
      legalEntityCategory: data?.customerInformation?.letalEntityCategory || '',
      connectedPartyShareHoldingAmount: data?.customerInformation?.shareholdingAmount || '',
      connectedPartyShareHoldingPercentage: data?.customerInformation?.shareholdingPercentage || '',
      connectedPartyTypeOfOwnership: data?.customerInformation?.typeOfOwnership || '',
      connectedPartyOwnershipStatus: data?.customerInformation?.ownershipStatus || '',
      connectedPartyBankingwithFAB: data?.customerInformation?.bankingWithFAB || '',
      connectedPartyFABAccountNumber: data?.customerInformation?.ifYesAccountNo || '',
      connectedPartyUSPassport: data?.customerInformation?.usPassport || '',
      customerDetails: '',
      connectedPartyCountryOfIncorporation: data?.connectedPartyCountryOfIncorporation?.usPassport || '',
      connectedPartyDateOfIncorporation: data?.connectedPartyCountryOfIncorporation?.usPassport || '',
      connectedPartyCountryOfDomicile: data?.connectedPartyCountryOfDomicile?.usPassport || '',
      connectedPartyCountryOfBusinessOperation: data?.connectedPartyCountryOfBusinessOperation?.usPassport || '',
      industryType: data?.industryType?.usPassport || '',
      connectedPartyPrimaryIndustryType: data?.connectedPartyPrimaryIndustryType?.usPassport || '',
      connectedPartySecondaryIndustryType: data?.connectedPartySecondaryIndustryType?.usPassport || '',
      connectedPartyOfficeTelephoneNumber: data?.connectedPartyOfficeTelephoneNumber?.usPassport || '',
      connectedPartyWorkEmail: '',
      connectedPartyPersonalEmail: '',
      connectedPartyRelationshipwithApplicant: '',
      connectedPartyNoOfEmployees: '',
      connectedPartyAdditionalCompnayInfo: '',
      primaryMobileNumber: '',
      homeTelephoneNumber: '',
      businessActivity: data?.businessActivity?.usPassport || '',
      email: data?.connectedPartyemailAddress?.usPassport || '',
      connectedPartyReferenceDetails: {
        connectedPartyReference: [
          {
            connectedPartyReferenceiOrderID: '',
            connectedPartyReferenceType: '',
            connectedPartyReferenceName: '',
            connectedPartyReferenceMobileNumber: '',
            connectedPartyReferenceHomeTelephone: '',
            connectedPartyReferenceOfficeTelephone: '',
            connectedPartyReferenceRelationship: '',
          },
        ],
      },
      connectedPartyaddressDetails: {
        connectedPartyaddress: [
          {
            connectedPartyaddressiOrderID: '',
            connectedPartyaddressType: data?.AddressDetails?.addressType || '',
            connectedPartybuildingNumber: data?.AddressDetails?.buildingNumber || '',
            connectedPartybuildingName: data?.AddressDetails?.buildingName || '',
            connectedPartystreetName: data?.AddressDetails?.streetName || '',
            connectedPartyNearestLandmark: data?.AddressDetails?.nearestLandmark || '',
            connectedPartylocationArea: data?.AddressDetails?.locationArea || '',
            connectedPartytownCity: data?.AddressDetails?.townCity || '',
            connectedPartyzipCode: data?.AddressDetails?.zipCode || '',
            connectedPartyaddressEmirate: data?.AddressDetails?.addressEmirate || '',
            connectedPartyaddressPoBox: data?.AddressDetails?.addressPoBox || '',
            connectedPartycountry: data?.AddressDetails?.country || '',
            connectedPartyaddressStayingAtThis: data?.AddressDetails?.addressStayingAtThis || '',
            connectedPartymailingAddress: data?.AddressDetails?.mailingAddress || '',
            connectedPartyprimaryMobileNumber: data?.AddressDetails?.primaryMobileNumber || '',
            connectedPartyofficeTelephoneNumber: data?.AddressDetails?.officeTelephoneNumber || '',
            homeTelephoneNumber: data?.AddressDetails?.homeTelephoneNumber || '',
            connectedPartyfax: data?.AddressDetails?.fax || '',
            connectedPartyemailAddress: data?.AddressDetails?.emailAddress || '',
          },
        ],
      },
      connectedPartyidentityDetails: {
        connectedPartyidentity: [
          {
            connectedPartyidentityiOrderID: '',
            connectedPartyIdentifiertype: data?.identityDetails?.identifiertype || '',
            connectedPartyIdentityNumber: data?.identityDetails?.number || '',
            connectedPartyIdentityIssuedate: data?.identityDetails?.issuedate || '',
            connectedPartyIdentityExpirydate: data?.identityDetails?.expirydate || '',
            connectedPartyIdentityplaceofissue: data?.identityDetails?.placeofissue || '',
          },
        ],
      },
      connectedPartyTaxReferenceDetails: {
        connectedPartyTaxReference: [
          {
            connectedPartyTaxReferenceiOrderID: '',
            connectedPartyTaxReferenceStandingInstructions: data?.taxClassificationDetails?.primlinaryTaxAssessment?.standing_instructions || '',
            connectedPartyTaxReferenceInCareOfHold: data?.taxClassificationDetails?.primlinaryTaxAssessment?.holding_incare || '',
            connectedPartyTaxReferenceUsTaxFromClient: data?.taxClassificationDetails?.primlinaryTaxAssessment?.us_tax_form || '',
            connectedPartyTaxReferenceIsUSResident: data?.taxClassificationDetails?.primlinaryTaxAssessment?.us_resident || '',
            connectedPartyTaxReferenceIsUSCitizen: data?.taxClassificationDetails?.primlinaryTaxAssessment?.us_citizen || '',
            connectedPartyTaxReferenceIsUSGreenCard: data?.taxClassificationDetails?.primlinaryTaxAssessment?.us_green_card_holder || '',
            connectedPartyTaxCountryOfBirth: data?.taxClassificationDetails?.primlinaryTaxAssessment?.country_of_birth || '',
            connectedPartyTaxChapter3Status: data?.taxClassificationDetails?.usTaxAssessment?.chapter3Status || '',
            connectedPartyTaxW9Exemption: data?.taxClassificationDetails?.usTaxAssessment?.reportingCode || '',
            connectedPartyTaxUSTaxPersonStatus: data?.taxClassificationDetails?.usTaxAssessment?.us_Tax_person_status || '',
            connectedPartyTaxFormSignedDate: data?.taxClassificationDetails?.usTaxAssessment?.tax_Form_signed || '',
            connectedPartyTaxReportable: data?.taxClassificationDetails?.usTaxAssessment?.reportable || '',
            connectedPartyTaxFromType: data?.taxClassificationDetails?.usTaxAssessment?.taxFormType || '',
            connectedPartyTaxChapter4Status: data?.taxClassificationDetails?.usTaxAssessment?.chapterStatus || '',
            connectedPartyTaxStartupDate: data?.taxClassificationDetails?.usTaxAssessment?.startupDate || '',
            connectedPartyTaxBankruptcyDate: data?.taxClassificationDetails?.usTaxAssessment?.bankruptcyDate || '',
            connectedPartyTaxNameOfSponsoring: data?.taxClassificationDetails?.usTaxAssessment?.sponsoringEntity || '',
            connectedPartyTaxUSOnshore: data?.taxClassificationDetails?.usTaxAssessment?.usOnshoreObligation || '',
            connectedPartyTaxIsDisregarded: data?.taxClassificationDetails?.usTaxAssessment?.disregardedentity || '',
            connectedPartyTaxFormReceived: data?.taxClassificationDetails?.usTaxAssessment?.taxFormReceived || '',
            connectedPartyTaxIdentifierType: data?.taxClassificationDetails?.fatcaClassification?.fatcataxIDtype || '',
            connectedPartyTaxIdentifierNumber: data?.taxClassificationDetails?.fatcaClassification?.fatcataxIDnumber || '',
            connectedPartyTaxCountryOfTax: data?.taxClassificationDetails?.fatcaClassification?.countryOfTax || '',
            connectedPartyTaxIsReportable: data?.taxClassificationDetails?.fatcaClassification?.isReportable || '',
            connectedPartyTaxFATCAStatus: data?.taxClassificationDetails?.fatcaClassification?.status || '',
            connectedPartyTaxTINUnavailableReason: data?.taxClassificationDetails?.fatcaClassification?.tinUnavailableReason || '',
            connectedPartyTaxTINUnavailableRemarks: data?.taxClassificationDetails?.fatcaClassification?.tinUnavailableRemarks || '',
            connectedPartyTaxNationality: data?.taxClassificationDetails?.fatcaClassification?.fatcaNationality || '',
            connectedPartyTaxOtherNationality: data?.taxClassificationDetails?.fatcaClassification?.fatcaOtherNationality || '',
            connectedPartyTaxComments: data?.taxClassificationDetails?.fatcaClassification?.comments || '',
            connectedPartyTaxCRSEntityType: data?.taxClassificationDetails?.crsClassification?.crsEntityType || '',
            connectedPartyTaxDocumentType: data?.taxClassificationDetails?.crsClassification?.crsDocumentType || '',
            connectedPartyTaxDocumentSignedDate: data?.taxClassificationDetails?.crsClassification?.crsDocumentSignedDate || '',
            connectedPartyTaxDocumentRecivedDate: data?.taxClassificationDetails?.crsClassification?.crsDocumentReceivedDate || '',
            connectedPartyTaxVISAValidfor5years: data?.taxClassificationDetails?.AdditionalFATCA_CRS?.isResidencyVisaValid || '',
            connectedPartyTaxFullNameOFUBO: data?.taxClassificationDetails?.AdditionalFATCA_CRS?.fullnameOfUBO || '',
            connectedPartyTaxResidentInOtherJurisdictions: data?.taxClassificationDetails?.AdditionalFATCA_CRS?.isResidnetOfJurisdictions || '',
            connectedPartyTaxResidentInOtherJurisdictionSubjectToPersonal: data?.taxClassificationDetails?.AdditionalFATCA_CRS?.jurisdictionsPersonalIncomeTax || '',
          },
        ],
      },
    };
    console.log('CPWorkItem', obj);
    onFormSubmit(obj);
    return obj;
  };

  const handleChange = (
    val: string | number | boolean | string[] | Date,
    name: string,
    formik: any,
  ) => {
    if (Array.isArray(val)) {
      const str = val.join('');
      formik.setFieldValue(name, str);
      console.log(val);
    } else {
      formik.setFieldValue(name, val);
      console.log(formik.values);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <Card>
        <div style={{ padding: '10px 0px' }}>
          <Text
            color="blackGrey.200"
            family="gh"
            size="xSmall"
            weight="medium"
          >
            Sister Company
          </Text>
        </div>
        <div style={{ padding: '20px 0px' }}>
          <Text
            color="blackGrey.200"
            family="gh"
            size="large"
            weight="semibold"
          >
            Customer Information
          </Text>
        </div>
        <Formik
          initialValues={initialValues}
          validateOnMount={false}
          validateOnChange={false}
          validationSchema={SisterSchema}
          onSubmit={(v) => {
            createWorkItemStructure(v);
            console.log(v, 'shareHolderData');
          }}
        >
          {(formik) => (
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <>
                <div className={styles.gridContainer}>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'customerInformation.connectedPartyFullName', formik);
                      }}
                      label="Full Name*"
                      name="customerInformation.connectedPartyFullName"
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyFullName
                      && formik.touched.customerInformation?.connectedPartyFullName,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="select"
                      onChange={(val: string) => {
                        handleChange(val[0], 'customerInformation.connectedPartyCountryOfIncorporation', formik);
                      }}
                      width="100%"
                      label="Country Of Incorporation*"
                      name="customerInformation.connectedPartyCountryOfIncorporation"
                      list={List['COUNTRY-MAST']}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyCountryOfIncorporation
                          && formik.touched.customerInformation?.connectedPartyCountryOfIncorporation,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="select"
                      onChange={(val: string) => {
                        handleChange(val[0], 'customerInformation.connectedPartyCountryOfDomicile', formik);
                      }}
                      label="Country Of Domicile*"
                      name="customerInformation.connectedPartyCountryOfDomicile"
                      list={List['COUNTRY-MAST']}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyCountryOfDomicile
                          && formik.touched.customerInformation?.connectedPartyCountryOfDomicile,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="select"
                      onChange={(val: string) => {
                        handleChange(
                          val[0],
                          'customerInformation.connectedPartyCountryOfBusinessOperation',
                          formik,
                        );
                      }}
                      label="Countries Of Business Operations*"
                      multiChoice
                      hasSelectAll
                      name="customerInformation.connectedPartyCountryOfBusinessOperation"
                      list={List['COUNTRY-MAST']}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyCountryOfBusinessOperation
                          && formik.touched.customerInformation?.connectedPartyCountryOfBusinessOperation,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      key="customerInformation.connectedPartyDateOfIncorporation"
                      onBlur={formik.handleBlur}
                      id="customerInformation.connectedPartyDateOfIncorporation"
                      name="customerInformation.connectedPartyDateOfIncorporation"
                      control="date"
                      fontFamily="Graphik"
                      type={DatepickerTypeEnum.SINGLE}
                      label="Date Of Incorporation"
                      startDate={
                    formik.values.customerInformation.connectedPartyDateOfIncorporation?.length > 0
                      ? new Date(formik.values.customerInformation.connectedPartyDateOfIncorporation) : null
                  }
                      onChange={(val:any) => {
                        handleChange(val.startDate.toUTCString(), 'customerInformation.connectedPartyDateOfIncorporation', formik);
                      }}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyDateOfIncorporation
                          && formik.touched.customerInformation?.connectedPartyDateOfIncorporation,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="fastselect"
                      label="Legal Entity Type"
                      name="customerInformation.connectedPartyLegalEntityType"
                      list={List['COMP-LEG-ENT-TYP']}
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'customerInformation.connectedPartyLegalEntityType', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyLegalEntityType
                      && formik.touched.customerInformation?.connectedPartyLegalEntityType,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="fastselect"
                      label="Legal Entity Category"
                      name="customerInformation.legalEntityCategory"
                      list={List['LEG-ENT-CAT']}
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'customerInformation.legalEntityCategory', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.legalEntityCategory
                      && formik.touched.customerInformation?.legalEntityCategory,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Shareholding Amount"
                      name="customerInformation.industryType"
                      onChange={(val: string) => handleChange(val, 'customerInformation.industryType', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.industryType
                      && formik.touched.customerInformation?.industryType,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="select"
                      label="Primary Industry"
                      name="customerInformation.connectedPartyPrimaryIndustryType"
                      list={List['PRI-SEC-INDUSTY']}
                      onChange={(val: string) => handleChange(val, 'customerInformation.connectedPartyPrimaryIndustryType', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyPrimaryIndustryType
                          && formik.touched.customerInformation?.connectedPartyPrimaryIndustryType,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="select"
                      label="Secondary Industry"
                      name="customerInformation.connectedPartySecondaryIndustryType"
                      list={List['PRI-SEC-INDUSTY']}
                      onChange={(val: string) => handleChange(val, 'customerInformation.connectedPartySecondaryIndustryType', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartySecondaryIndustryType
                          && formik.touched.customerInformation?.connectedPartySecondaryIndustryType,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Business Activity"
                      name="customerInformation.businessActivity"
                      onChange={(val: string) => handleChange(val, 'customerInformation.businessActivity', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.businessActivity
                      && formik.touched.customerInformation?.businessActivity,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Type of Ownership"
                      name="customerInformation.connectedPartyTypeOfOwnership"
                      onChange={(val: string) => handleChange(val, 'customerInformation.connectedPartyTypeOfOwnership', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyTypeOfOwnership
                      && formik.touched.customerInformation?.connectedPartyTypeOfOwnership,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Ownership Status"
                      name="customerInformation.connectedPartyOwnershipStatus"
                      onChange={(val: string) => handleChange(val, 'customerInformation.connectedPartyOwnershipStatus', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyOwnershipStatus
                      && formik.touched.customerInformation?.connectedPartyOwnershipStatus,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Number Of Employees"
                      name="customerInformation.connectedPartyNoOfEmployees"
                      onChange={(val: string) => handleChange(val, 'customerInformation.connectedPartyNoOfEmployees', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyNoOfEmployees
                      && formik.touched.customerInformation?.connectedPartyNoOfEmployees,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Additional Company Information"
                      name="customerInformation.connectedPartyAdditionalCompnayInfo"
                      onChange={(val: string) => handleChange(val, 'customerInformation.connectedPartyAdditionalCompnayInfo', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyAdditionalCompnayInfo
                      && formik.touched.customerInformation?.connectedPartyAdditionalCompnayInfo,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Office Telephone Number"
                      name="customerInformation.connectedPartyOfficeTelephoneNumber"
                      onChange={(val: any) => handleChange(val, 'customerInformation.connectedPartyOfficeTelephoneNumber', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyOfficeTelephoneNumber
                      && formik.touched.customerInformation?.connectedPartyOfficeTelephoneNumber,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Email Address"
                      name="customerInformation.connectedPartyemailAddress"
                      onChange={(val: string) => handleChange(val, 'customerInformation.connectedPartyemailAddress', formik)}
                      isInvalid={Boolean(
                        formik.errors.customerInformation?.connectedPartyemailAddress
                      && formik.touched.customerInformation?.connectedPartyemailAddress,
                      )}
                    />
                  </div>
                  <div>
                    <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>
                      <Text
                        color="blackGrey.200"
                        size="small"
                      >
                        Banking with FAB
                      </Text>
                      <RadioGroup onChange={(e:string) => handleChange(e, 'customerInformation.connectedPartyBankingwithFAB', formik)}>
                        <div style={{ width: '150px', display: 'flex', justifyContent: 'space-between' }}>
                          <Radio
                            id="radio-1"
                            label="yes"
                            name="radio1"
                            testId="test-id"
                            value="Y"
                          />
                          <Radio
                            id="radio-2"
                            name="radio"
                            label="no"
                            testId="test-id"
                            value="N"
                          />
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  { formik.values.customerInformation.connectedPartyBankingwithFAB === 'Y' && (
                    <div>
                      <FormControl
                        control="input"
                        label="If Yes, Specify"
                        name="customerInformation.ifYesSpecify"
                        onChange={(val: string) => handleChange(val, 'customerInformation.ifYesSpecify', formik)}
                        isInvalid={Boolean(
                          formik.errors.customerInformation?.ifYesSpecify
                      && formik.touched.customerInformation?.ifYesSpecify,
                        )}
                      />
                    </div>
                  )}
                </div>
                <div style={{ padding: '2rem 0 1rem 0' }}>
                  <Text
                    color="blackGrey.200"
                    family="gh"
                    size="large"
                    weight="semibold"
                  >
                    Address Details
                  </Text>
                </div>
                <div className={styles.gridContainer}>
                  <div>
                    <FormControl
                      control="fastselect"
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'AddressDetails.addressType', formik);
                        }
                      }}
                      label="Address Type"
                      name="AddressDetails.addressType"
                      list={List['ADDRESS-TYPE']}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.addressType
                      && formik.touched.AddressDetails?.addressType,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'AddressDetails.buildingNumber', formik);
                      }}
                      label="Building Number"
                      name="AddressDetails.buildingNumber"
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.buildingNumber
                      && formik.touched.AddressDetails?.buildingNumber,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'AddressDetails.buildingName', formik);
                      }}
                      label="Building Name"
                      name="AddressDetails.buildingName"
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.buildingName
                      && formik.touched.AddressDetails?.buildingName,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'AddressDetails.streetName', formik);
                      }}
                      label="Street Name"
                      name="AddressDetails.streetName"
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.streetName
                      && formik.touched.AddressDetails?.streetName,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      type="text"
                      label="Nearest Landmark"
                      name="AddressDetails.nearestLandmark"
                      onChange={(val: string) => handleChange(val, 'AddressDetails.nearestLandmark', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.nearestLandmark
                      && formik.touched.AddressDetails?.nearestLandmark,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Location / Area"
                      name="AddressDetails.locationArea"
                      onChange={(val: string) => handleChange(val, 'AddressDetails.locationArea', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.locationArea
                      && formik.touched.AddressDetails?.locationArea,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      type="text"
                      label="Town / City"
                      name="AddressDetails.townCity"
                      onChange={(val: string) => handleChange(val, 'AddressDetails.townCity', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.townCity
                      && formik.touched.AddressDetails?.townCity,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Zip Code"
                      name="AddressDetails.zipCode"
                      onChange={(val: string) => handleChange(val, 'AddressDetails.zipCode', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.zipCode
                      && formik.touched.AddressDetails?.zipCode,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Emirate"
                      name="AddressDetails.addressEmirate"
                      onChange={(v:string) => handleChange(v, 'AddressDetails.addressEmirate', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.addressEmirate
                      && formik.touched.AddressDetails?.addressEmirate,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="PO Box"
                      name="AddressDetails.addressPoBox"
                      onChange={(val: string) => handleChange(val, 'AddressDetails.addressPoBox', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.addressPoBox
                      && formik.touched.AddressDetails?.addressPoBox,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="fastselect"
                      label="Country"
                      name="AddressDetails.country"
                      list={List['COUNTRY-MAST']}
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'AddressDetails.country', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.country
                      && formik.touched.AddressDetails?.country,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="date"
                      label="Staying at this address Since"
                      name="AddressDetails.addressStayingAtThis"
                      startDate={formik.values.AddressDetails.addressStayingAtThis}
                      onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'AddressDetails.addressStayingAtThis', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.addressStayingAtThis
                      && formik.touched.AddressDetails?.addressStayingAtThis,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="fastselect"
                      label="Mailing Address"
                      name="AddressDetails.mailingAddress"
                      list={List['COUNTRY-MAST']}
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'AddressDetails.mailingAddress', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.mailingAddress
                      && formik.touched.AddressDetails?.mailingAddress,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="fastselect"
                      label="Country of Residence"
                      name="AddressDetails.countryOfRecidence"
                      list={List['COUNTRY-MAST']}
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'AddressDetails.countryOfRecidence', formik);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Primary Mobile Number "
                      name="AddressDetails.primaryMobileNumber"
                      onChange={(val: any) => handleChange(val, 'AddressDetails.primaryMobileNumber', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.primaryMobileNumber
                      && formik.touched.AddressDetails?.primaryMobileNumber,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Office Telephone Number"
                      name="AddressDetails.officeTelephoneNumber"
                      onChange={(val: any) => handleChange(val, 'AddressDetails.officeTelephoneNumber', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.officeTelephoneNumber
                      && formik.touched.AddressDetails?.officeTelephoneNumber,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Home Telephone Number"
                      name="AddressDetails.homeTelephoneNumber"
                      onChange={(val: any) => handleChange(val, 'AddressDetails.homeTelephoneNumber', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.homeTelephoneNumber
                      && formik.touched.AddressDetails?.homeTelephoneNumber,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Fax"
                      name="AddressDetails.fax"
                      onChange={(val: string) => handleChange(val, 'AddressDetails.fax', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.fax
                      && formik.touched.AddressDetails?.fax,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Email Address"
                      name="AddressDetails.emailAddress"
                      onChange={(val: string) => handleChange(val, 'AddressDetails.emailAddress', formik)}
                      isInvalid={Boolean(
                        formik.errors.AddressDetails?.emailAddress
                      && formik.touched.AddressDetails?.emailAddress,
                      )}
                    />
                  </div>
                </div>
                <div style={{ padding: '2rem 0 1rem 0' }}>
                  <Text
                    color="blackGrey.200"
                    family="gh"
                    size="large"
                    weight="semibold"
                  >
                    Identity Details
                  </Text>
                </div>
                <div className={styles.gridContainer}>
                  <div>
                    <FormControl
                      control="fastselect"
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'identityDetails.identifiertype', formik);
                        }
                      }}
                      label="Identifier Type"
                      name="identityDetails.identifiertype"
                      list={List['IDENTIFIER-TYPE']}
                      isInvalid={Boolean(
                        formik.errors?.identityDetails?.identifiertype
                      && formik.touched?.identityDetails?.identifiertype,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'identityDetails.number', formik);
                      }}
                      label="Number"
                      name="identityDetails.number"
                      isInvalid={Boolean(
                        formik.errors?.identityDetails?.number
                      && formik.touched?.identityDetails?.number,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="date"
                      startDate={formik.values.identityDetails.issuedate}
                      onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'identityDetails.issuedate', formik)}
                      label="Issue Date"
                      name="identityDetails.issuedate"
                      isInvalid={Boolean(
                        formik.errors.identityDetails?.issuedate
                      && formik.touched.identityDetails?.issuedate,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="date"
                      startDate={formik.values.identityDetails.expirydate}
                      onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'identityDetails.expirydate', formik)}
                      label="Expiry Date"
                      name="identityDetails.expirydate"
                      isInvalid={Boolean(
                        formik.errors.identityDetails?.expirydate
                      && formik.touched.identityDetails?.expirydate,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Place of Issue"
                      name="identityDetails.placeofissue"
                      onChange={(val: string) => handleChange(val, 'identityDetails.placeofissue', formik)}
                      isInvalid={Boolean(
                        formik.errors.identityDetails?.placeofissue
                      && formik.touched.identityDetails?.placeofissue,
                      )}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '8rem',
                    marginLeft: '30.5rem',
                  }}
                >
                  <div style={{ marginRight: '1rem' }}>
                    <Button variant={ButtonVariantsEnum.SECONDARY} type="button">
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button isDisabled={!formik.isValid} type="submit">Next</Button>
                  </div>
                </div>
              </>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
export default SisterFormComponent;
