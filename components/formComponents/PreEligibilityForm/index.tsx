import React, { useState, useContext } from 'react';
import {
  Button,
  ButtonVariantsEnum,
  Card,
  DatepickerTypeEnum,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import FormControl from '../../FormControl';
// import validationSchema from './ApplicationDetailSchema';
import useLoader from '../../../hooks/useLoader';
import Message from '../../Message';
import MasterContext from '../../MasterContext';
import styles from './POSLoan.module.css';
import RangeSlider from '../../RangeSlider';

type Props = {
  initialVal?: any,
  onFormSubmit :(val:any) =>void,
};

function ApplicationDetailsPage({ initialVal, onFormSubmit }:Props) {
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage] = useState('');
  const [loader] = useLoader();
  const [countryCode, setCountrycode] = useState('');
  const List = useContext(MasterContext.DropdownContext);
  const userDetail = useContext(MasterContext.UserContext);
  const router = useRouter();
  const initialValues = {
    title: '',
    FirstName: userDetail?.firstName || '',
    LastName: userDetail?.lastName || '',
    CompanyName: userDetail?.companyName || '',
    CompanyType: userDetail?.companyType || '',
    TradeLicenceNo: userDetail?.tradeLicense || '',
    EmiratesID: userDetail?.emiratesId || '',
    EmailAddress: userDetail?.email || '',
    PhoneNumber: userDetail?.phoneNo || '',
    isUAEResident: initialVal?.isUAEResident || false,
    industry: initialVal?.primary_industry || '',
    lengthOfBusiness: initialVal?.lengthOfBusiness || '',
    posVintage: initialVal?.posVintage || '',
    country_of_incorporation: initialVal?.country_of_incorporation || '',
    date_of_incorporation: initialVal?.date_of_incorporation || '',
    residentialStatus: initialVal?.residentialStatus || '',
    primary_industry: initialVal?.primary_industry || '',
    loanType: initialVal?.loanType || '',
    propertyLocation: initialVal?.propertyLocation || '',
    netProfit: initialVal?.netProfit || '',
    rentalIncome: initialVal?.rentalIncome || '',
    currentCompanyTernover: initialVal?.currentCompanyTernover || '',
    relationshipManagerCode: initialVal?.relationshipManagerCode || '',
    tenor: initialVal?.tenor || '',
    posAnnualTurnover: initialVal?.posAnnualTurnover || '',
    posMonthlyPosTurnover: initialVal?.posMonthlyPosTurnover || '',
    loanAmount: initialVal?.loanAmount || '',
  };

  const updateLOB = (d1:Date, formik:any) => {
    let months;
    const d2 = new Date();
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    if (months > 12) {
      formik.setFieldValue('lengthOfBusiness', '>12M');
    } else {
      formik.setFieldValue('lengthOfBusiness', '<12M');
    }
  };
  const handleChange = (
    val: string | number | boolean | string[],
    name: string,
    formik: any,
    forDate?: boolean,
  ) => {
    let value = val;
    if (forDate) {
      value = String(val).replace('T', ' ').replace('Z', '');
      formik.setFieldValue(name, value);
    } else if (Array.isArray(val)) {
      const str = val.join('');
      formik.setFieldValue(name, str);
    } else {
      formik.setFieldValue(name, val);
    }
  };
  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <div className={styles.RegContainer}>
        <div className={styles.regCard}>
          <Card>
            <div className={styles.FabHeading}>POS Loan Details</div>
            <div className={styles.subHead}>
              if you use credit card point-of-sale (POS) machines for daily
              business transactions, you can maximise the value of your POS
              recievables to speed up your financing with a POS loan.
            </div>
            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={(v) => {
                console.log(v, 'details form preEli applicant detail comp');
                onFormSubmit(v);
              }}
            >
              {(formik) => (
                <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                  <div className={styles.formLine}>
                    <div className={styles.firstInput}>
                      <FormControl
                        control="input"
                        onChange={(val: string) => {
                          handleChange(val, 'FirstName', formik);
                        }}
                        type="text"
                        isDisabled
                        label="First Name*"
                        name="FirstName"
                        autoComplete="off"
                        isInvalid={Boolean(
                          formik.errors.FirstName && formik.touched.FirstName,
                        )}
                        width="100%"
                      />
                    </div>
                    <div className={styles.secondInput}>
                      <FormControl
                        isDisabled
                        control="input"
                        type="text"
                        label="Last Name*"
                        name="LastName"
                        onChange={(val: string) => handleChange(val, 'LastName', formik)}
                        autoComplete="off"
                        isInvalid={Boolean(
                          formik.errors.LastName && formik.touched.LastName,
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.formLine}>
                    <div className={styles.firstInput}>
                      <FormControl
                        isDisabled
                        control="input"
                        label="Email Address"
                        name="EmailAddress"
                        onChange={(val: string) => handleChange(val, 'EmailAddress', formik)}
                        autoComplete="off"
                        isInvalid={Boolean(
                          formik.errors.EmailAddress
                            && formik.touched.EmailAddress,
                        )}
                      />
                    </div>
                    <div className={styles.secondInput}>
                      <FormControl
                        isDisabled
                        currentSelect="+971"
                        control="input"
                        dropdownAutocomplete
                        dropdownLabelId="input-with-dropdow-label-id"
                        id="PhoneNumber"
                        name="PhoneNumber"
                        label="Phone Number"
                        list={[
                          {
                            icon: {
                              name: 'ARE',
                            },
                            id: 1,
                            info: '+971',
                            title: 'ARE',
                            value: '+971',
                          },
                          {
                            icon: {
                              name: 'GBR',
                            },
                            id: 2,
                            info: '+44',
                            title: 'GBR',
                            value: '+44',
                          },
                          {
                            icon: {
                              name: 'USA',
                            },
                            id: 3,
                            info: '+1',
                            title: 'USA',
                            value: '+1',
                          },
                        ]}
                        onBlur={() => {}}
                        onChange={(val: any) => handleChange(val, 'PhoneNumber', formik)}
                        onChangeSelect={(val: string[]) => {
                          setCountrycode(val[0]);
                          console.log(countryCode);
                        }}
                        onKeyUp={() => {}}
                        pattern={/[\d.]+/g}
                        shouldDisplayInfoValue
                        testId="test-id"
                      />
                    </div>
                  </div>
                  <div className={styles.formLine}>
                    <div className={styles.firstInput}>
                      <FormControl
                        isDisabled
                        onBlur={formik.handleBlur}
                        id="CompanyType"
                        name="CompanyType"
                        control="input"
                        fontFamily="Graphik"
                        // list={List['REG-COMP-TYP']}
                        label="Company Type"
                        onChange={(val: string) => handleChange(val, 'CompanyType', formik)}
                        isInvalid={Boolean(
                          formik.errors.CompanyType
                            && formik.touched.CompanyType,
                        )}
                      />
                    </div>
                    <div className={styles.secondInput}>
                      <FormControl
                        isDisabled
                        control="input"
                        label="Company Name"
                        name="CompanyName"
                        onChange={(val: string) => handleChange(val, 'CompanyName', formik)}
                        isInvalid={Boolean(
                          formik.errors.CompanyName
                            && formik.touched.CompanyName,
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.formLine}>
                    <div className={styles.firstInput}>
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="industry"
                        name="industry"
                        control="select"
                        fontFamily="Graphik"
                        list={List['PRI-SEC-INDUSTY']}
                        label="Industry*"
                        onChange={(val: string) => handleChange(val[0], 'industry', formik)}
                        isInvalid={Boolean(
                          formik.errors.industry && formik.touched.industry,
                        )}
                      />
                    </div>
                    <div className={styles.secondInput}>
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="lengthOfBusiness"
                        name="lengthOfBusiness"
                        control="input"
                        isDisabled
                        fontFamily="Graphik"
                        label="Length of Business*"
                        isInvalid={Boolean(
                          formik.errors.lengthOfBusiness
                            && formik.touched.lengthOfBusiness,
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.formLine}>
                    <div className={styles.firstInput}>
                      <FormControl
                        isDisabled
                        control="input"
                        label="Trade License Number"
                        name="TradeLicenceNo"
                        onChange={(val: string) => handleChange(val, 'TradeLicenceNo', formik)}
                        isInvalid={Boolean(
                          formik.errors.TradeLicenceNo
                            && formik.touched.TradeLicenceNo,
                        )}
                      />
                    </div>
                    <div className={styles.secondInput}>
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="posVintage"
                        name="posVintage"
                        control="input"
                        fontFamily="Graphik"
                        label="POS Vintage*(in months)"
                        onChange={(val: string) => handleChange(val, 'posVintage', formik)}
                        isInvalid={Boolean(
                          formik.errors.posVintage && formik.touched.posVintage,
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.formLine}>
                    <div className={styles.firstInput}>
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="country_of_incorporation"
                        name="country_of_incorporation"
                        control="select"
                        fontFamily="Graphik"
                        list={List['COUNTRY-MAST']}
                        label="Country of Incorporation"
                        onChange={(val: string) => handleChange(val[0], 'country_of_incorporation', formik)}
                        isInvalid={Boolean(
                          formik.errors.country_of_incorporation
                            && formik.touched.country_of_incorporation,
                        )}
                      />
                    </div>
                    <div className={styles.secondInput}>
                      <FormControl
                        key="date_of_incorporation"
                        onBlur={formik.handleBlur}
                        id="date_of_incorporation"
                        name="date_of_incorporation"
                        control="date"
                        maxBookingDate={new Date()}
                        fontFamily="Graphik"
                        type={DatepickerTypeEnum.SINGLE}
                        label="Date Of Incorporation"
                        startDate={
                    formik.values.date_of_incorporation?.length > 0
                      ? new Date(formik.values.date_of_incorporation) : null
                  }
                        onChange={(val:any) => {
                          updateLOB(val.startDate, formik);
                          handleChange(val.startDate.toISOString(), 'date_of_incorporation', formik, true);
                        }}
                        isInvalid={Boolean(
                          formik.errors.date_of_incorporation
                          && formik.touched.date_of_incorporation,
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.formLine}>
                    <div className={styles.firstInput}>
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="primary_industry"
                        name="primary_industry"
                        control="select"
                        fontFamily="Graphik"
                        value={formik.values.industry}
                        list={List['PRI-SEC-INDUSTY']}
                        label="Primary Industry"
                        onChange={(val: string) => handleChange(val[0], 'primary_industry', formik)}
                        isInvalid={Boolean(
                          formik.errors.primary_industry
                            && formik.touched.primary_industry,
                        )}
                        width="100%"
                      />
                    </div>
                    <div className={styles.secondInput}>
                      <FormControl
                        control="input"
                        label="Relationship Manager Code"
                        name="relationshipManagerCode"
                        onChange={(val: string) => handleChange(val, 'relationshipManagerCode', formik)}
                        isInvalid={Boolean(
                          formik.errors.relationshipManagerCode
                            && formik.touched.relationshipManagerCode,
                        )}
                      />
                    </div>
                  </div>
                  <div style={{ paddingTop: '12px' }}>
                    <div style={{ padding: '18px' }}>
                      <h2 style={{ fontSize: 'small' }}>
                        <strong>What is your annual turnover?*</strong>
                      </h2>
                      <RangeSlider
                        value={Number(formik.values.posAnnualTurnover)}
                        setValue={(val: number) => handleChange(String(val), 'posAnnualTurnover', formik)}
                        startRange={2000000}
                        endRange={10000000}
                        moneyType="AED"
                      />
                    </div>
                    <div style={{ padding: '18px' }}>
                      <h2 style={{ fontSize: 'small' }}>
                        <strong>What is your monthly POS turnover?*</strong>
                      </h2>
                      <RangeSlider
                        value={Number(formik.values.loanAmount)}
                        setValue={(val: number) => handleChange(String(val), 'loanAmount', formik)}
                        startRange={50000}
                        endRange={2000000}
                        moneyType="AED"
                      />
                    </div>
                    <div style={{ padding: '18px' }}>
                      <h2 style={{ fontSize: 'small' }}>
                        <strong>
                          What is your maximun Loan amount that you would like?*
                        </strong>
                      </h2>
                      <RangeSlider
                        value={Number(formik.values.posMonthlyPosTurnover)}
                        setValue={(val: number) => handleChange(String(val), 'posMonthlyPosTurnover', formik)}
                        startRange={2000000}
                        endRange={5000000}
                        moneyType="AED"
                      />
                    </div>
                  </div>
                  <div className={styles.btnContainer}>
                    <div className={styles.btns}>
                      <Button
                        variant={ButtonVariantsEnum.SECONDARY}
                        onClick={goToLogin}
                        type="button"
                      >
                        &nbsp;Back&nbsp;
                      </Button>
                      <div style={{ paddingLeft: '1rem' }}>
                        <Button isDisabled={!formik.isValid} type="submit">
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </div>
      {errorOpen && <Message message={errorMessage} setOpen={setErrorOpen} />}
      {loader}
    </>
  );
}
export default ApplicationDetailsPage;
