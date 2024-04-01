/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
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
import validationSchema from '../ShareHolderFormComponent/shareHolderSchema';
import MasterContext from '../../MasterContext';

type Props = {
  onFormSubmit : (val?:any) => void;
  initData?:any
};
function AuthSignatory({ onFormSubmit, initData }:Props) {
  const [homePNCountrycode, setHomePNCountrycode] = useState('');
  const [officePNCountrycode, setOfficePNCountrycode] = useState('');
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
    };
    return initDataMap;
  };

  const initialValues = initFromApi() || {
    customerInformation: {
      title: '',
      fullName: '',
      firstName: '',
      lastName: '',
      gender: '',
      maritalStatus: '',
      mothersMaidenName: '',
      dateOfBirth: '',
      countryOfBirth: '',
      placeOfBirth: '',
      nationality: '',
      otherNationality: '',
      countryOfRecidence: '',
      recidencyStatus: '',
      legalEntityType: '',
      letalEntityCategory: '',
      officeTelephoneNumber: '',
      homeTelephoneNumber: '',
      personalEmail: '',
      workEmail: '',
      bankingWithFAB: '',
      ifYesAccountNo: '',
      usPassport: '',
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
      countryOfRecidence: '',
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
    // Tax Classification Details
    taxClassificationDetails: {
      // (primlinary tax assessment)
      primlinaryTaxAssessment: {
        standing_instructions: '',
        holding_incare: '',
        us_tax_form: '',
        us_resident: '',
        us_citizen: '',
        us_green_card_holder: '',
        country_of_birth: '',
      },
      // (us tax assessment)
      usTaxAssessment: {
        chapter3Status: '',
        reportingCode: '',
        us_Tax_person_status: '',
        tax_Form_signed: '',
        reportable: '',
        taxFormType: '',
        chapterStatus: '',
        startupDate: '',
        bankruptcyDate: '',
        sponsoringEntity: '',
        usOnshoreObligation: '',
        disregardedentity: '',
        taxFormReceived: '',
      },
      // (FATCA Classification)
      fatcaClassification: {
        fatcataxIDtype: '',
        fatcataxIDnumber: '',
        isTaxResidentOfOther: '',
        countryOfTax: '',
        isReportable: '',
        status: '',
        tinUnavailableReason: '',
        tinUnavailableRemarks: '',
        fatcaNationality: '',
        fatcaOtherNationality: '',
        comments: '',
      },
      // (CRS Classification)
      crsClassification: {
        crsEntityType: '',
        crsDocumentType: '',
        crsDocumentSignedDate: '',
        crsDocumentReceivedDate: '',
      },
      // (Additional FATCA/CRS Classification)
      AdditionalFATCA_CRS: {
        fullnameOfUBO: '',
        isResidencyVisaValid: '',
        uaeTaxResidency: '',
        isResidnetOfJurisdictions: '',
        jurisdictionsPersonalIncomeTax: '',
      },
    },
  };

  const createWorkItemStructure = (data:any) => {
    const obj = {
      connectedPartiesiOrderID: '',
      addressMapper: '',
      identityMapper: '',
      refMapper: '',
      taxMapper: '',
      connectedPartyType: 'Authorised Signatory',
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
      connectedPartyCountryOfIncorporation: '',
      connectedPartyDateOfIncorporation: '',
      connectedPartyCountryOfDomicile: '',
      connectedPartyCountryOfBusinessOperation: '',
      industryType: '',
      connectedPartyPrimaryIndustryType: '',
      connectedPartySecondaryIndustryType: '',
      connectedPartyOfficeTelephoneNumber: '',
      connectedPartyWorkEmail: '',
      connectedPartyPersonalEmail: '',
      connectedPartyRelationshipwithApplicant: '',
      connectedPartyNoOfEmployees: '',
      connectedPartyAdditionalCompnayInfo: '',
      primaryMobileNumber: '',
      homeTelephoneNumber: '',
      businessActivity: '',
      email: '',
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
            Authorised Signatory
          </Text>
        </div>
        <div style={{ padding: '20px 0px' }}>
          <Text
            color="blackGrey.200"
            family="gh"
            size="large"
            weight="semibold"
          >
            Customer Details
          </Text>
        </div>
        <Formik
          initialValues={initialValues}
          validateOnMount={false}
          validationSchema={validationSchema}
          onSubmit={(v) => {
            createWorkItemStructure(v);
            console.log(v, 'shareHolderData');
          }}
        >
          {(formik) => (
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    control="fastselect"
                    label="Title*"
                    name="customerInformation.title"
                    list={List.TITLE}
                    onChange={(val: string[]) => {
                      handleChange(val[0], 'customerInformation.title', formik);
                    }}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.title
                      && formik.touched.customerInformation?.title,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'customerInformation.fullName', formik);
                    }}
                    label="Full Name*"
                    name="customerInformation.fullName"
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.fullName
                      && formik.touched.customerInformation?.fullName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'customerInformation.firstName', formik);
                    }}
                    label="First Name*"
                    name="customerInformation.firstName"
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.firstName
                      && formik.touched.customerInformation?.firstName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="text"
                    label="Last Name*"
                    name="customerInformation.lastName"
                    onChange={(val: string) => handleChange(val, 'customerInformation.lastName', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.lastName
                      && formik.touched.customerInformation?.lastName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="fastselect"
                    type="text"
                    label="Gender*"
                    name="customerInformation.gender"
                    list={List.GENDER}
                    onChange={(val: string[]) => handleChange(val[0], 'customerInformation.gender', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.gender
                      && formik.touched.customerInformation?.gender,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="fastselect"
                    type="text"
                    fontFamily="Graphik"
                    label="Marital Status"
                    name="customerInformation.maritalStatus"
                    list={List['MARITAL-STATUS']}
                    onChange={(val: string[]) => handleChange(val[0], 'customerInformation.maritalStatus', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.maritalStatus
                      && formik.touched.customerInformation?.maritalStatus,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Mother's Maiden Name"
                    name="customerInformation.mothersMaidenName"
                    onChange={(val: string) => handleChange(val, 'customerInformation.mothersMaidenName', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.mothersMaidenName
                      && formik.touched.customerInformation?.mothersMaidenName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="date"
                    type="single"
                    label="Date of birth"
                    name="customerInformation.dateOfBirth"
                    startDate={formik.values.customerInformation.dateOfBirth}
                    onChange={(v:any) => handleChange(new Date(v.startDate.toUTCString()), 'customerInformation.dateOfBirth', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.dateOfBirth
                      && formik.touched.customerInformation?.dateOfBirth,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="fastselect"
                    type="text"
                    label="Country of Birth"
                    name="customerInformation.countryOfBirth"
                    list={List['COUNTRY-MAST']}
                    onChange={(val: string[]) => handleChange(val[0], 'customerInformation.countryOfBirth', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.countryOfBirth
                      && formik.touched.customerInformation?.countryOfBirth,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="text"
                    label="Place of Birth"
                    name="customerInformation.placeOfBirth"
                    onChange={(val: string) => handleChange(val, 'customerInformation.placeOfBirth', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.placeOfBirth
                      && formik.touched.customerInformation?.placeOfBirth,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="fastselect"
                    type="text"
                    label="Nationality / Citizenship"
                    name="customerInformation.nationality"
                    list={List['COUNTRY-MAST']}
                    onChange={(val: string[]) => handleChange(val[0], 'customerInformation.nationality', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.nationality
                      && formik.touched.customerInformation?.nationality,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="fastselect"
                    label="Other Nationality"
                    name="customerInformation.otherNationality"
                    list={List['COUNTRY-MAST']}
                    onChange={(val: string[]) => handleChange(val[0], 'customerInformation.otherNationality', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.otherNationality
                      && formik.touched.customerInformation?.otherNationality,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="fastselect"
                    label="Country of Residence"
                    name="customerInformation.countryOfRecidence"
                    list={List['COUNTRY-MAST']}
                    onChange={(val: string) => handleChange(val, 'customerInformation.countryOfRecidence', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.countryOfRecidence
                      && formik.touched.customerInformation?.countryOfRecidence,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="fastselect"
                    label="Residency Status"
                    name="customerInformation.recidencyStatus"
                    list={List['RESIDENT-STATUS']}
                    onChange={(val: string[]) => handleChange(val[0], 'customerInformation.recidencyStatus', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.recidencyStatus
                      && formik.touched.customerInformation?.recidencyStatus,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    currentSelect="971"
                    control="input"
                    dropdownAutocomplete
                    dropdownLabelId="input-with-dropdow-label-id"
                    name="customerInformation.officeTelephoneNumber"
                    label="Office Telephone Number"
                    list={[
                      {
                        icon: {
                          name: 'ARE',
                        },
                        id: 1,
                        info: '971',
                        title: 'ARE',
                        value: '971',
                      },
                      {
                        icon: {
                          name: 'GBR',
                        },
                        id: 2,
                        info: '44',
                        title: 'GBR',
                        value: '44',
                      },
                      {
                        icon: {
                          name: 'USA',
                        },
                        id: 3,
                        info: '1',
                        title: 'USA',
                        value: '1',
                      },
                    ]}
                    onChange={(val: any) => handleChange(val, 'customerInformation.officeTelephoneNumber', formik)}
                    onChangeSelect={(val: string[]) => {
                      setOfficePNCountrycode(val[0]);
                      console.log(officePNCountrycode);
                    }}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.officeTelephoneNumber
                      && formik.touched.customerInformation?.officeTelephoneNumber,
                    )}
                    pattern={/[\d.]/g}
                    shouldDisplayInfoValue
                  />
                </div>
                <div>
                  <FormControl
                    currentSelect="971"
                    control="input"
                    dropdownAutocomplete
                    dropdownLabelId="input-with-dropdow-label-id"
                    name="customerInformation.homeTelephoneNumber"
                    label="Home Telephone Number"
                    list={[
                      {
                        icon: {
                          name: 'ARE',
                        },
                        id: 1,
                        info: '971',
                        title: 'ARE',
                        value: '971',
                      },
                      {
                        icon: {
                          name: 'GBR',
                        },
                        id: 2,
                        info: '44',
                        title: 'GBR',
                        value: '44',
                      },
                      {
                        icon: {
                          name: 'USA',
                        },
                        id: 3,
                        info: '1',
                        title: 'USA',
                        value: '1',
                      },
                    ]}
                    onBlur={() => { console.log('homephno onblur'); }}
                    onChange={(val: any) => handleChange(val, 'customerInformation.homeTelephoneNumber', formik)}
                    onChangeSelect={(val: string[]) => {
                      setHomePNCountrycode(val[0]);
                      console.log(homePNCountrycode);
                    }}
                    onKeyUp={() => {}}
                    pattern={/[\d.]/g}
                    shouldDisplayInfoValue
                    testId="test-id"
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.homeTelephoneNumber
                      && formik.touched.customerInformation?.homeTelephoneNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Personal Email Address"
                    name="customerInformation.personalEmail"
                    onChange={(val: string) => handleChange(val, 'customerInformation.personalEmail', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.personalEmail
                      && formik.touched.customerInformation?.personalEmail,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Work Email Address"
                    name="customerInformation.workEmail"
                    onChange={(val: string) => handleChange(val, 'customerInformation.workEmail', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.workEmail
                      && formik.touched.customerInformation?.workEmail,
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
                    <RadioGroup onChange={(e:string) => handleChange(e, 'customerInformation.bankingWithFAB', formik)}>
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
                { formik.values.customerInformation.bankingWithFAB === 'Y' && (
                <div>
                  <FormControl
                    control="input"
                    label="If Yes, Account Number"
                    name="customerInformation.ifYesAccountNo"
                    onChange={(val: string) => handleChange(val, 'customerInformation.ifYesAccountNo', formik)}
                    isInvalid={Boolean(
                      formik.errors.customerInformation?.ifYesAccountNo
                      && formik.touched.customerInformation?.ifYesAccountNo,
                    )}
                  />
                </div>
                )}
                <div>
                  <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>
                    <Text
                      color="blackGrey.200"
                      size="small"
                    >
                      US Passport or Green Card
                    </Text>
                    <RadioGroup onChange={(e:string) => handleChange(e, 'customerInformation.usPassport', formik)}>
                      <div style={{ width: '150px', display: 'flex', justifyContent: 'space-between' }}>
                        <Radio
                          id="radio-1"
                          label="yes"
                          testId="test-id"
                          value="Y"
                        />
                        <Radio
                          id="radio-1"
                          label="no"
                          testId="test-id"
                          value="N"
                        />
                      </div>
                    </RadioGroup>
                  </div>
                </div>
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
                      handleChange(val[0], 'AddressDetails.addressType', formik);
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
                    onChange={(val: string[]) => handleChange(val[0], 'AddressDetails.country', formik)}
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
                    onChange={(val: string[]) => handleChange(val[0], 'AddressDetails.mailingAddress', formik)}
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
                    onChange={(val: string[]) => handleChange(val[0], 'AddressDetails.countryOfRecidence', formik)}
                    isInvalid={Boolean(
                      formik.errors.AddressDetails?.countryOfRecidence
                      && formik.touched.AddressDetails?.countryOfRecidence,
                    )}
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
                      handleChange(val[0], 'identityDetails.identifiertype', formik);
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
              <div style={{ padding: '2rem 0 1rem 0' }}>
                <Text
                  color="blackGrey.200"
                  family="gh"
                  size="large"
                  weight="semibold"
                >
                  Tax Classification Details
                </Text>
              </div>
              <div style={{ padding: '.5rem 0 1rem 0' }}>
                <Text
                  color="blackGrey.200"
                  family="gh"
                  size="medium"
                  weight="semibold"
                >
                  Primilinary tax assessment
                </Text>
              </div>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.primlinaryTaxAssessment.standing_instructions"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Does the client have any standing instructions to the US?"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.primlinaryTaxAssessment.standing_instructions', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.primlinaryTaxAssessment?.standing_instructions
                          && formik.touched.taxClassificationDetails?.primlinaryTaxAssessment?.standing_instructions,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.primlinaryTaxAssessment.holding_incare"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Does the client have an in case of/ Hold mail"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.primlinaryTaxAssessment.holding_incare', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.primlinaryTaxAssessment?.holding_incare
                          && formik.touched.taxClassificationDetails?.primlinaryTaxAssessment?.holding_incare,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.primlinaryTaxAssessment.us_tax_form"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Do you have a US Tax Form from the client ?* "
                    onChange={(val: string) => handleChange(val[0], 'taxClassificationDetails.primlinaryTaxAssessment.us_tax_form', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.primlinaryTaxAssessment?.us_tax_form
                      && formik.touched.taxClassificationDetails?.primlinaryTaxAssessment?.us_tax_form,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.primlinaryTaxAssessment.us_resident"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="US Resident ?*"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.primlinaryTaxAssessment.us_resident', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.primlinaryTaxAssessment?.us_resident
                      && formik.touched.taxClassificationDetails?.primlinaryTaxAssessment?.us_resident,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.primlinaryTaxAssessment.us_citizen"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="US Citizen ?*"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.primlinaryTaxAssessment.us_citizen', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.primlinaryTaxAssessment?.us_citizen
                      && formik.touched.taxClassificationDetails?.primlinaryTaxAssessment?.us_citizen,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.primlinaryTaxAssessment.us_green_card_holder"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="US Green Card Holder ?*"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.primlinaryTaxAssessment.us_green_card_holder', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.primlinaryTaxAssessment?.us_green_card_holder
                      && formik.touched.taxClassificationDetails?.primlinaryTaxAssessment?.us_green_card_holder,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.primlinaryTaxAssessment.country_of_birth"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['COUNTRY-MAST']}
                    label="Country of Birth ?*"
                    onChange={(val:any) => handleChange(val[0], 'taxClassificationDetails.primlinaryTaxAssessment.country_of_birth', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.primlinaryTaxAssessment?.country_of_birth
                      && formik.touched.taxClassificationDetails?.primlinaryTaxAssessment?.country_of_birth,
                    )}
                  />
                </div>
              </div>
              <div style={{ padding: '1.5rem 0 1rem 0' }}>
                <Text
                  color="blackGrey.200"
                  family="gh"
                  size="medium"
                  weight="semibold"
                >
                  US Tax Classification
                </Text>
              </div>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.usTaxAssessment.chapter3Status"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['CHAPTER4-FATCA-STATUS']}
                    label="Chapter 3 Status"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.usTaxAssessment.chapter3Status', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.chapter3Status
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.chapter3Status,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.usTaxAssessment.reportingCode"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['W9-FATCA']}
                    label="Form W-9 - Exemption from FATCA Reporting Code"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.usTaxAssessment.reportingCode', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.reportingCode
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.reportingCode,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.usTaxAssessment.us_Tax_person_status"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['US-TAX-PERSON-STATUS']}
                    label="US Tax Person Status"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.usTaxAssessment.us_Tax_person_status', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.us_Tax_person_status
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.us_Tax_person_status,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    name="taxClassificationDetails.usTaxAssessment.tax_Form_signed"
                    control="date"
                    fontFamily="Graphik"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Tax Form Signed Date"
                    startDate={formik.values.taxClassificationDetails.usTaxAssessment.tax_Form_signed}
                    onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'taxClassificationDetails.usTaxAssessment.tax_Form_signed', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.tax_Form_signed
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.tax_Form_signed,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.usTaxAssessment.reportable"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Reportable"
                    onChange={(val: any) => handleChange(val, 'taxClassificationDetails.usTaxAssessment.reportable', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.reportable
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.reportable,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="taxFormType"
                    name="taxClassificationDetails.usTaxAssessment.taxFormType"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['TAX-FORM-TYPE']}
                    label="Tax Form Type"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.usTaxAssessment.taxFormType', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.taxFormType
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.taxFormType,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.usTaxAssessment.chapterStatus"
                    control="input"
                    type="text"
                    fontFamily="Graphik"
                    label="Chapter 4 FATCA Status"
                    onChange={(val: any) => handleChange(val, 'taxClassificationDetails.usTaxAssessment.chapterStatus', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.chapterStatus
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.chapterStatus,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    name="taxClassificationDetails.usTaxAssessment.startupDate"
                    control="date"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Startup Date"
                    startDate={formik.values.taxClassificationDetails.usTaxAssessment.startupDate}
                    onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'taxClassificationDetails.usTaxAssessment.startupDate', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.startupDate
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.startupDate,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    name="taxClassificationDetails.usTaxAssessment.bankruptcyDate"
                    control="date"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Bankruptcy Date"
                    startDate={formik.values.taxClassificationDetails.usTaxAssessment.bankruptcyDate}
                    onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'taxClassificationDetails.usTaxAssessment.bankruptcyDate', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.bankruptcyDate
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.bankruptcyDate,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="sponsoringEntity"
                    name="taxClassificationDetails.usTaxAssessment.sponsoringEntity"
                    control="input"
                    type="text"
                    fontFamily="Graphik"
                    label="Name of Sponsoring Entity"
                    onChange={(val: any) => handleChange(val, 'taxClassificationDetails.usTaxAssessment.sponsoringEntity', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.sponsoringEntity
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.sponsoringEntity,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.usTaxAssessment.usOnshoreObligation"
                    control="fastselect"
                    list={List.YES_NO}
                    label="US Onshore Obligation"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.usTaxAssessment.usOnshoreObligation', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.usOnshoreObligation
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.usOnshoreObligation,
                    )}
                  />

                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="disregardedentity"
                    name="taxClassificationDetails.usTaxAssessment.disregardedentity"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Is this entity a disregarded entity?"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.usTaxAssessment.disregardedentity', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.disregardedentity
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.disregardedentity,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    name="taxClassificationDetails.usTaxAssessment.taxFormReceived"
                    control="date"
                    label="Tax Form Received Date"
                    startDate={formik.values.taxClassificationDetails.usTaxAssessment.taxFormReceived}
                    onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'taxClassificationDetails.usTaxAssessment.taxFormReceived', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.usTaxAssessment?.taxFormReceived
                          && formik.touched.taxClassificationDetails?.usTaxAssessment?.taxFormReceived,
                    )}
                  />

                </div>
              </div>
              <div style={{ padding: '1.5rem 0 1rem 0' }}>
                <Text
                  color="blackGrey.200"
                  family="gh"
                  size="medium"
                  weight="semibold"
                >
                  FATCA Classification
                </Text>
              </div>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.fatcataxIDtype"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['TAX-ID-TYPE']}
                    label="Tax Identifier Type"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.fatcataxIDtype', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.fatcataxIDtype
                          && formik.touched.taxClassificationDetails?.fatcaClassification?.fatcataxIDtype,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.fatcataxIDnumber"
                    control="input"
                    fontFamily="Graphik"
                    label="Tax Identification Number"
                    onChange={(val: any) => handleChange(val, 'taxClassificationDetails.fatcaClassification.fatcataxIDnumber', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.fatcataxIDnumber
                          && formik.touched.taxClassificationDetails?.fatcaClassification?.fatcataxIDnumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.isTaxResidentOfOther"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Is Tax Resident of Other Country"
                    onChange={(val: string) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.isTaxResidentOfOther', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.isTaxResidentOfOther
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.isTaxResidentOfOther,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.countryOfTax"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['COUNTRY-MAST']}
                    label="Country of Tax Residency"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.countryOfTax', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.countryOfTax
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.countryOfTax,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.isReportable"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Is Reportable"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.isReportable', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.isReportable
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.isReportable,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.status"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['FATCA-STATUS']}
                    label="FATCA Status"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.status', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.status
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.status,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.tinUnavailableReason"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['TIN-UNAVAILABLE-REASON']}
                    label="TIN Unavailable Reason"
                    onChange={(val:any) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.tinUnavailableReason', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.tinUnavailableReason
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.tinUnavailableReason,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.tinUnavailableRemarks"
                    control="input"
                    fontFamily="Graphik"
                    label="TIN Unavailable Remarks"
                    onChange={(val:any) => handleChange(val, 'taxClassificationDetails.fatcaClassification.tinUnavailableRemarks', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.tinUnavailableRemarks
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.tinUnavailableRemarks,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.fatcaNationality"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['COUNTRY-MAST']}
                    label="Nationality"
                    onChange={(val:any) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.fatcaNationality', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.fatcaNationality
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.fatcaNationality,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.fatcaOtherNationality"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['COUNTRY-MAST']}
                    label="Other Nationality"
                    onChange={(val:any) => handleChange(val[0], 'taxClassificationDetails.fatcaClassification.fatcaOtherNationality', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.fatcaOtherNationality
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.fatcaOtherNationality,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.fatcaClassification.comments"
                    control="input"
                    fontFamily="Graphik"
                    label="Comments"
                    onChange={(val:any) => handleChange(val, 'taxClassificationDetails.fatcaClassification.comments', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.fatcaClassification?.comments
                      && formik.touched.taxClassificationDetails?.fatcaClassification?.comments,
                    )}
                  />
                </div>
              </div>
              <div style={{ padding: '1.5rem 0 1rem 0' }}>
                <Text
                  color="blackGrey.200"
                  family="gh"
                  size="medium"
                  weight="semibold"
                >
                  CRS Classification
                </Text>
              </div>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.crsClassification.crsEntityType"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['CRS-ENT-TYPE']}
                    label="CRS Entity Type"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.crsClassification.crsEntityType', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.crsClassification?.crsEntityType
                          && formik.touched.taxClassificationDetails?.crsClassification?.crsEntityType,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.crsClassification.crsDocumentType"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List['CRS-DOC-TYPE']}
                    label="Document Type"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.crsClassification.crsDocumentType', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.crsClassification?.crsDocumentType
                          && formik.touched.taxClassificationDetails?.crsClassification?.crsDocumentType,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.crsClassification.crsDocumentSignedDate"
                    control="date"
                    label="Document Signed Date"
                    startDate={formik.values.taxClassificationDetails.crsClassification.crsDocumentSignedDate}
                    onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'taxClassificationDetails.crsClassification.crsDocumentSignedDate', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.crsClassification?.crsDocumentSignedDate
                      && formik.touched.taxClassificationDetails?.crsClassification?.crsDocumentSignedDate,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.crsClassification.crsDocumentReceivedDate"
                    control="date"
                    label="Document Received Date"
                    startDate={formik.values.taxClassificationDetails.crsClassification.crsDocumentReceivedDate}
                    onChange={(val:any) => handleChange(new Date(val.startDate.toUTCString()), 'taxClassificationDetails.crsClassification.crsDocumentReceivedDate', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.crsClassification?.crsDocumentReceivedDate
                      && formik.touched.taxClassificationDetails?.crsClassification?.crsDocumentReceivedDate,
                    )}
                  />
                </div>
              </div>
              <div style={{ padding: '1.5rem 0 1rem 0' }}>
                <Text
                  color="blackGrey.200"
                  family="gh"
                  size="medium"
                  weight="semibold"
                >
                  Additional FATCA/CRS Classification
                </Text>
              </div>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.AdditionalFATCA_CRS.isResidencyVisaValid"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Residency Visa valid for 5 years or more?"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.AdditionalFATCA_CRS.isResidencyVisaValid', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.AdditionalFATCA_CRS?.fullnameOfUBO
                          && formik.touched.taxClassificationDetails?.AdditionalFATCA_CRS?.fullnameOfUBO,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.AdditionalFATCA_CRS.fullnameOfUBO"
                    control="input"
                    fontFamily="Graphik"
                    label="Full Name of the UBO / Controlling Person"
                    onChange={(val: any) => handleChange(val, 'taxClassificationDetails.AdditionalFATCA_CRS.fullnameOfUBO', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.AdditionalFATCA_CRS?.fullnameOfUBO
                          && formik.touched.taxClassificationDetails?.AdditionalFATCA_CRS?.fullnameOfUBO,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.AdditionalFATCA_CRS.uaeTaxResidency"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Obtained UAE tax residency by investement scheme"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.AdditionalFATCA_CRS.uaeTaxResidency', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.AdditionalFATCA_CRS?.uaeTaxResidency
                      && formik.touched.taxClassificationDetails?.AdditionalFATCA_CRS?.uaeTaxResidency,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.AdditionalFATCA_CRS.isResidnetOfJurisdictions"
                    control="fastselect"
                    fontFamily="Graphik"
                    list={List.YES_NO}
                    label="Are you a resident in other Jurisdictions"
                    onChange={(val: any) => handleChange(val[0], 'taxClassificationDetails.AdditionalFATCA_CRS.isResidnetOfJurisdictions', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.AdditionalFATCA_CRS?.isResidnetOfJurisdictions
                      && formik.touched.taxClassificationDetails?.AdditionalFATCA_CRS?.isResidnetOfJurisdictions,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="taxClassificationDetails.AdditionalFATCA_CRS.jurisdictionsPersonalIncomeTax"
                    control="input"
                    fontFamily="Graphik"
                    label="In which jurisdiction(s) have you been subject to personal income tax during the previous calendar year?"
                    onChange={(val: any) => handleChange(val, 'taxClassificationDetails.AdditionalFATCA_CRS.jurisdictionsPersonalIncomeTax', formik)}
                    isInvalid={Boolean(
                      formik.errors.taxClassificationDetails?.AdditionalFATCA_CRS?.jurisdictionsPersonalIncomeTax
                      && formik.touched.taxClassificationDetails?.AdditionalFATCA_CRS?.jurisdictionsPersonalIncomeTax,
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
            </Form>
          )}
        </Formik>
      </Card>

    </div>
  );
}

export default AuthSignatory;
