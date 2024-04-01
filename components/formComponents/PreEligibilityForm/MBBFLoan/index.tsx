import React, { useContext, useEffect } from 'react';
import {
  Button,
  Card,
  DatepickerTypeEnum,
  Text,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import styles from '../PreScreeningScreen.module.css';
import FormControl from '../../../FormControl';
import MasterContext from '../../../MasterContext';

type Props = {
  defaultValue:any,
  onFormSubmit:(val:any)=> any,
  initialVal?:any,
  aplicantData?:any,
};

function PreScreeningMBBF({
  defaultValue, onFormSubmit, initialVal, aplicantData,
}: Props) {
  const List = useContext(MasterContext.DropdownContext);
  const userDetail = useContext(MasterContext.UserContext);
  const previousAddress = initialVal?.customerDetails?.addressDetails?.address[0];
  const previousIdentity = initialVal?.customerDetails?.identityDetails?.identity[0];

  useEffect(() => {
    console.log(defaultValue, 'defultValues', initialVal, 'initialVal', aplicantData, 'aplicantData');
  }, []);
  const initialValues = {
    firstName: userDetail.firstName,
    lastName: userDetail.lastName,
    companyName: userDetail.companyName || aplicantData?.CompanyType,
    companyType: userDetail.companyType,
    tradeLicenseNo: userDetail.tradeLicense,
    emirateID: userDetail.emiratesId,
    emailID: userDetail.email,
    phoneNo: userDetail.phoneNo,
    countryOfIncorporation: aplicantData?.country_of_incorporation,
    date_of_incorporation: aplicantData?.date_of_incorporation,

    recidencyStatus: aplicantData?.residentialStatus,
    primaryIndustry: aplicantData?.primary_industry,
    businessIncome: aplicantData?.businessIncome,
    netProfit: aplicantData?.netProfit,
    rentalIncome: aplicantData?.rentalIncome,
    currentCompanyTernover: aplicantData?.currentCompanyTernover,
    propertyType: aplicantData?.property_type,
    loanTypeResidentialCommercial: aplicantData?.loanTypeRes,
    loanType: aplicantData?.loanType || 'Fresh',
    loanAmount: aplicantData?.loanAmount || 80000,
    bankingWithFAB: aplicantData?.bankingWithFAB || '',
    propertyLocation: aplicantData?.propertyLocation || '',
    secondaryIndustryOfOperation: aplicantData?.secondaryIndustryOfOperation || '',
    tenor: aplicantData?.tenor,
    lengthOfBusiness: aplicantData?.lengthOfBusiness || '',
    relationshipManagerCode: aplicantData?.relationshipManagerCode || '',
    // address Details
    addressType: previousAddress?.addressType || '',
    buildingNumber: previousAddress?.buildingNumber || '',
    buildingName: previousAddress?.buildingName || '',
    streetName: previousAddress?.streetName || '',
    nearestLandmark: previousAddress?.nearestLandmark || '',
    locationArea: previousAddress?.locationArea || '',
    townCity: previousAddress?.townCity || '',
    zipCode: previousAddress?.zipCode || '',
    addressEmirate: previousAddress?.addressEmirate || '',
    addressPoBox: previousAddress?.addressPoBox || '',
    Country: previousAddress?.Country || '',
    addressStayingAtThis: previousAddress?.addressStayingAtThis || '',
    mailingAddress: previousAddress?.mailingAddress || '',
    primaryMobileNumber: previousAddress?.primaryMobileNumber || '',
    officeTelephoneNumber: previousAddress?.officeTelephoneNumber || '',
    homeTelephoneNumber: previousAddress?.homeTelephoneNumber || '',
    fax: previousAddress?.fax || '',
    emailAddress: previousAddress?.emailAddress || '',
    countryOfRecidence: previousAddress?.countryOfRecidence || '',
    // identity details
    identifiertype: previousIdentity?.identifiertype || '',
    number: previousIdentity?.number || '',
    issuedate: previousIdentity?.issuedate || '',
    expirydate: previousIdentity?.expirydate || '',
    placeofissue: previousIdentity?.placeofissue || '',
  };
  const handleChange = (
    val: string | number | boolean,
    name: string,
    formik: any,
    forDate?: boolean,
  ) => {
    let value = val;
    if (forDate) {
      value = String(val).replace('T', ' ').replace('Z', '');
    }
    formik.setFieldValue(name, value);
  };
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);
  return (
    <div className={styles.mainContainer}>
      <Card>
        <div style={{ padding: '20px 0px' }}>
          <Text
            color="blackGrey.200"
            family="gh"
            size="large"
            weight="semibold"
          >
            Pre-Screening Details(MBBF)
          </Text>
        </div>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={(v) => onFormSubmit(v)}
        >
          {(formik) => (
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'CIF', formik);
                    }}
                    value="divya"
                    label="First Name*"
                    isDisabled
                    name="firstName"
                    isInvalid={Boolean(
                      formik.errors.firstName && formik.touched.firstName,
                    )}
                    width="100%"
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    // onChange={(val: string) => {
                    //   handleChange(val, 'lastName', formik);
                    // }}
                    label="Last Name*"
                    name="lastName"
                    isDisabled
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.lastName && formik.touched.lastName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="text"
                    isDisabled
                    label="Company Name*"
                    name="lastName"
                    readOnly
                    onChange={(val: string) => handleChange(val, 'companyName', formik)}
                    isInvalid={Boolean(
                      formik.errors.companyName && formik.touched.companyName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    disabled
                    fontFamily="Graphik"
                    label="Company Type*"
                    name="companyType"
                    list={List['REG-COMP-TYP']}
                    onChange={() => {}}
                    isInvalid={Boolean(
                      formik.errors.companyType && formik.touched.companyType,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Trade Licence Number*"
                    isDisabled
                    name="tradeLicenseNo"
                    onChange={(val: string) => handleChange(val, 'tradeLicenceNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors.tradeLicenseNo
                        && formik.touched.tradeLicenseNo,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Emirate ID*"
                    isDisabled
                    name="emirateID"
                    onChange={(val: string) => handleChange(val, 'emirateID', formik)}
                    isInvalid={Boolean(
                      formik.errors.emirateID && formik.touched.emirateID,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Email ID*"
                    isDisabled
                    name="emailID"
                    onChange={(val: string) => handleChange(val, 'emailID', formik)}
                    isInvalid={Boolean(
                      formik.errors.emailID && formik.touched.emailID,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="number"
                    isDisabled
                    label="Phone Number*"
                    name="phoneNo"
                    onChange={(val: string) => handleChange(val, 'phoneNo', formik)}
                    isInvalid={Boolean(
                      formik.errors.phoneNo && formik.touched.phoneNo,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    type="text"
                    label="Country of Incorporation*"
                    name="countryOfIncorporation"
                    list={List['COUNTRY-MAST']}
                    onChange={(val: string[]) => handleChange(val[0], 'countryOfIncorporation', formik)}
                    isInvalid={Boolean(
                      formik.errors.countryOfIncorporation
                        && formik.touched.countryOfIncorporation,
                    )}
                  />
                </div>
                <FormControl
                  key="dateOfIncorporation"
                  onBlur={formik.handleBlur}
                  id="date_of_incorporation"
                  name="date_of_incorporation"
                  control="date"
                  fontFamily="Graphik"
                  maxBookingDate={new Date(date)}
                  type={DatepickerTypeEnum.SINGLE}
                  label="Date Of Incorporation"
                  startDate={
                    formik.values.date_of_incorporation?.length > 0
                      ? new Date(formik.values.date_of_incorporation) : null
                  }
                  onChange={(val:any) => {
                    handleChange(val.startDate.toISOString(), 'date_of_incorporation', formik, true);
                  }}
                  isInvalid={Boolean(
                    formik.errors.date_of_incorporation
                          && formik.touched.date_of_incorporation,
                  )}
                />
                <div>
                  <FormControl
                    control="select"
                    label="Residential Status*"
                    name="recidencyStatus"
                    list={List['RESIDENT-STATUS']}
                    onChange={(val: string) => handleChange(val, 'residentialStaus', formik)}
                    isInvalid={Boolean(
                      formik.errors.recidencyStatus
                        && formik.touched.recidencyStatus,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    disabled
                    label="Primary Industry"
                    name="primaryIndustry"
                    list={List['PRI-SEC-INDUSTY']}
                    onChange={(val: string[]) => handleChange(val[0], 'primaryIndustry', formik)}
                    isInvalid={Boolean(
                      formik.errors.primaryIndustry
                        && formik.touched.primaryIndustry,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    isDisabled
                    label="Business Income(per month in AED)"
                    name="businessIncome"
                    onChange={(val: string) => handleChange(val, 'businessIncome', formik)}
                    isInvalid={Boolean(
                      formik.errors.businessIncome
                        && formik.touched.businessIncome,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    isDisabled
                    label="Net Profit(per month in AED)"
                    name="netProfit"
                    onChange={(val: string) => handleChange(val, 'netProfit', formik)}
                    isInvalid={Boolean(
                      formik.errors.netProfit && formik.touched.netProfit,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    isDisabled
                    label="Rental Income(per month in AED)"
                    name="rentalIncome"
                    onChange={(val: string) => handleChange(val, 'rentalIncome', formik)}
                    isInvalid={Boolean(
                      formik.errors.rentalIncome && formik.touched.rentalIncome,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    label="Property Type"
                    name="propertyType"
                    list={List['PROP-TYPE']}
                    onChange={(val: string[]) => handleChange(val[0], 'shareholdingPercentage', formik)}
                    isInvalid={Boolean(
                      formik.errors.propertyType && formik.touched.propertyType,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    label="Loan Type"
                    name="loanType"
                    disabled
                    list={List['LOAN-TYP-RES']}
                    onChange={(val: string[]) => handleChange(val[0], 'loanType', formik)}
                    isInvalid={Boolean(
                      formik.errors.loanType && formik.touched.loanType,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    disabled
                    label="Loan Type(Residential/Commercial)"
                    name="loanTypeResidentialCommercial"
                    list={List['LOAN-TYP-RES']}
                    onChange={(val: string[]) => handleChange(
                      val[0],
                      'loanTypeResidentialCommercial',
                      formik,
                    )}
                    isInvalid={Boolean(
                      formik.errors.loanTypeResidentialCommercial
                        && formik.touched.loanTypeResidentialCommercial,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Loan Amount"
                    name="loanAmount"
                    isDisabled
                    onChange={(val: string) => handleChange(val, 'loanAmount', formik)}
                    isInvalid={Boolean(
                      formik.errors.loanAmount && formik.touched.loanAmount,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string) => {
                      handleChange(val[0], 'propertyLocation', formik);
                    }}
                    label="Property Location"
                    name="propertyLocation"
                    list={List['PROPERTY-LOCATION']}
                    isInvalid={Boolean(
                      formik.errors.propertyLocation
                        && formik.touched.propertyLocation,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Tenor(in month)"
                    name="tenor"
                    onChange={(val: string) => handleChange(val, 'tenor', formik)}
                    isInvalid={Boolean(
                      formik.errors.tenor && formik.touched.tenor,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    disabled
                    onChange={(val: string) => {
                      handleChange(val[0], 'lengthOfBusiness', formik);
                    }}
                    label="Length of Business"
                    name="lengthOfBusiness"
                    value={formik.values.date_of_incorporation}
                    isInvalid={Boolean(
                      formik.errors.lengthOfBusiness
                        && formik.touched.lengthOfBusiness,
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
                  Address Details
                </Text>
              </div>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string[]) => {
                      handleChange(val[0], 'addressType', formik);
                    }}
                    label="Address Type"
                    name="addressType"
                    list={List['ADDRESS-TYPE']}
                    isInvalid={Boolean(
                      formik.errors.addressType && formik.touched.addressType,
                    )}
                  />
                </div>
                {((formik.values.addressType === 'Registered') || (formik.values.addressType === 'Residential')) && (
                <>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'buildingNumber', formik);
                      }}
                      label="Building Number"
                      name="buildingNumber"
                      isInvalid={Boolean(
                        formik.errors.buildingNumber
                        && formik.touched.buildingNumber,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'buildingName', formik);
                      }}
                      label="Building Name"
                      name="buildingName"
                      isInvalid={Boolean(
                        formik.errors.buildingName
                          && formik.touched.buildingName,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 'streetName', formik);
                      }}
                      label="Street Name"
                      name="streetName"
                      isInvalid={Boolean(
                        formik.errors.streetName
                          && formik.touched.streetName,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      type="text"
                      label="Nearest Landmark"
                      name="nearestLandmark"
                      onChange={(val: string) => handleChange(val, 'nearestLandmark', formik)}
                      isInvalid={Boolean(
                        formik.errors.nearestLandmark
                          && formik.touched.nearestLandmark,
                      )}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      label="Location / Area"
                      name="locationArea"
                      onChange={(val: string) => handleChange(val, 'locationArea', formik)}
                      isInvalid={Boolean(
                        formik.errors.locationArea
                          && formik.touched.locationArea,
                      )}
                    />
                  </div>
                  {formik.values.Country === 'Non-UAE'
                && (
                  <div>
                    <FormControl
                      control="input"
                      type="text"
                      label="Town / City"
                      name="townCity"
                      onChange={(val: string) => handleChange(val[0], 'townCity', formik)}
                      isInvalid={Boolean(
                        formik.errors.townCity && formik.touched.townCity,
                      )}
                    />
                  </div>
                )}
                  <div>
                    <FormControl
                      control="input"
                      label="PO Box"
                      name="addressPoBox"
                      onChange={(val: string) => handleChange(val, 'addressPoBox', formik)}
                      isInvalid={Boolean(
                        formik.errors.addressPoBox
                              && formik.touched.addressPoBox,
                      )}
                    />
                  </div>
                </>
                )}
                <div>
                  <FormControl
                    control="input"
                    label="Zip Code"
                    name="zipCode"
                    onChange={(val: string) => handleChange(val, 'zipCode', formik)}
                    isInvalid={Boolean(
                      formik.errors.zipCode && formik.touched.zipCode,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    type="text"
                    fontFamily="Graphik"
                    label="Emirate*"
                    name="addressEmirate"
                    list={List.EMIRATE}
                    onChange={(val: string[]) => handleChange(val[0], 'addressEmirate', formik)}
                    isInvalid={Boolean(
                      formik.errors.addressEmirate && formik.touched.addressEmirate,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    label="Country"
                    name="Country"
                    list={List['COUNTRY-MAST']}
                    onChange={(val: string[]) => handleChange(val[0], 'Country', formik)}
                    isInvalid={Boolean(
                      formik.errors.Country && formik.touched.Country,
                    )}
                  />
                </div>
                {((formik.values.addressType === 'Home Country') || (formik.values.addressType === 'Residential')) && (
                <div>
                  <FormControl
                    key="addressStayingAtThis"
                    onBlur={formik.handleBlur}
                    id="addressStayingAtThis"
                    name="addressStayingAtThis"
                    control="date"
                    fontFamily="Graphik"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Date Of Incorporation"
                    startDate={
                    formik.values.addressStayingAtThis?.length > 0
                      ? new Date(formik.values.addressStayingAtThis) : null
                  }
                    onChange={(val:any) => {
                      handleChange(val.startDate.toISOString(), 'addressStayingAtThis', formik, true);
                    }}
                    isInvalid={Boolean(
                      formik.errors.addressStayingAtThis
                          && formik.touched.addressStayingAtThis,
                    )}
                  />
                </div>
                )}
                {((formik.values.addressType === 'Registered') || (formik.values.addressType === 'Residential') || (formik.values.addressType === 'Trading /Operating')) && (
                <div>
                  <FormControl
                    control="select"
                    label="Mailing Address"
                    name="mailingAddress"
                    // list={countryList}
                    onChange={(val: string[]) => handleChange(val[0], 'mailingAddress', formik)}
                    isInvalid={Boolean(
                      formik.errors.mailingAddress
                        && formik.touched.mailingAddress,
                    )}
                  />
                </div>
                )}
                <div>
                  <FormControl
                    control="select"
                    label="Country of Residence"
                    name="countryOfRecidence"
                    list={List['COUNTRY-MAST']}
                    onChange={(val: string[]) => handleChange(val[0], 'countryOfRecidence', formik)}
                    isInvalid={Boolean(
                      formik.errors.countryOfRecidence
                        && formik.touched.countryOfRecidence,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Primary Mobile Number "
                    name="primaryMobileNumber"
                    onChange={(val: string) => handleChange(val, 'primaryMobileNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors.primaryMobileNumber
                        && formik.touched.primaryMobileNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Office Telephone Number"
                    name="officeTelephoneNumber"
                    onChange={(val: string) => handleChange(val, 'officeTelephoneNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors.officeTelephoneNumber
                        && formik.touched.officeTelephoneNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Home Telephone Number"
                    name="homeTelephoneNumber"
                    onChange={(val: string) => handleChange(val, 'homeTelephoneNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors.homeTelephoneNumber
                        && formik.touched.homeTelephoneNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Fax"
                    name="fax"
                    onChange={(val: string) => handleChange(val, 'fax', formik)}
                    isInvalid={Boolean(formik.errors.fax && formik.touched.fax)}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Email Address"
                    name="emailAddress"
                    onChange={(val: string) => handleChange(val, 'emailAddress', formik)}
                    isInvalid={Boolean(
                      formik.errors.emailAddress && formik.touched.emailAddress,
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
                    control="select"
                    onChange={(val: string[]) => {
                      handleChange(val[0], 'identifiertype', formik);
                    }}
                    label="Identifier Type"
                    name="identifiertype"
                    list={List['IDENTIFIER-TYPE']}
                    isInvalid={Boolean(
                      formik.errors.identifiertype
                        && formik.touched.identifiertype,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'number', formik);
                    }}
                    label="Number"
                    name="number"
                    isInvalid={Boolean(
                      formik.errors.number && formik.touched.number,
                    )}
                  />
                </div>
                <FormControl
                  key="issuedate"
                  onBlur={formik.handleBlur}
                  id="issuedate"
                  name="issuedate"
                  control="date"
                  fontFamily="Graphik"
                  type={DatepickerTypeEnum.SINGLE}
                  label="Date Of Incorporation"
                  startDate={
                    formik.values.issuedate?.length > 0
                      ? new Date(formik.values.issuedate) : null
                  }
                  onChange={(val:any) => {
                    handleChange(val.startDate.toISOString(), 'issuedate', formik, true);
                  }}
                  isInvalid={Boolean(
                    formik.errors.issuedate
                          && formik.touched.issuedate,
                  )}
                />
                <div>
                  <FormControl
                    control="date"
                    startDate={
                      formik.values.expirydate?.length > 0
                        ? new Date(formik.values.expirydate) : null
                    }
                    onChange={(val:any) => {
                      handleChange(val.startDate.toISOString(), 'expirydate', formik, true);
                    }}
                    label="Expiry Date"
                    name="expirydate"
                    minBookingDate={new Date()}
                    isInvalid={Boolean(
                      formik.errors.expirydate && formik.touched.expirydate,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Place of Issue"
                    name="placeofissue"
                    onChange={(val: string) => handleChange(val, 'placeofissue', formik)}
                    isInvalid={Boolean(
                      formik.errors.placeofissue && formik.touched.placeofissue,
                    )}
                  />
                </div>
              </div>
              <div style={{ paddingLeft: '30rem' }}>
                <Button type="submit">submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
export default PreScreeningMBBF;
