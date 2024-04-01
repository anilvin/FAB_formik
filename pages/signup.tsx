import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import {
  Button,
  Card,
  Checkbox,
  ButtonVariantsEnum,
  TextLink,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import FABicon from '../public/icons/FAB Light@2x.png';
import styles from '../styles/Registration.module.css';
import FormControl from '../components/FormControl';
import validationSchema from '../components/schema/SignupSchema';
import Otp from '../components/Otp';
import useLoader from '../hooks/useLoader';
import Auth from '../API/auth';
import Message from '../components/Message';
import SetPasswordForm from '../components/setPassword';
import init from '../API/init';
import MasterContext from '../components/MasterContext';

function Registration() {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [companyList, setCompanyList] = useState([]);
  const [loader, startLoader, removeLoader] = useLoader();
  const [userDetails, setUserDetails] = useState<any>({});
  const [countryCode, setCountrycode] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [drcu, setDrcu] = useState('');
  const md3 = useContext(MasterContext.RmdContext);
  const router = useRouter();
  const initialValues = {
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    PhoneNumber: '',
    CompanyName: '',
    CompanyType: '',
    EmiratesID: '',
    TradeLicenceNo: '',
    isUAEResident: false,
  };

  const handleChange = (
    val: string | number | boolean | string[],
    name: string,
    formik: any,
  ) => {
    if (Array.isArray(val)) {
      const str = val.join('');
      formik.setFieldValue(name, str);
    } else {
      formik.setFieldValue(name, val);
    }
  };

  const goToLogin = () => {
    router.push('/login');
  };

  useEffect(() => {
    if (md3 !== '') {
      const data = md3?.mdmResponse?.output?.records;
      const objToArray:any = Object.values(data);
      const listOfCompanies = objToArray[0].map((x:any, i:number) => ({
        id: i,
        title: x.CODE,
        value: x.CODE,
      }));
      setCompanyList(listOfCompanies);
    }
    console.log(md3);
  }, [md3]);

  const handleSetPassword = (val:any) => {
    startLoader();
    Auth.signup({
      EmailAddress: userDetails.EmailAddress,
      PhoneNumber: userDetails.PhoneNumber,
      user: val.userID,
      EmiratesID: userDetails.EmiratesID,
      TradeLicenceNo: userDetails.TradeLicenceNo,
      isUAEResident: userDetails.isUAEResident,
      FirstName: userDetails.FirstName,
      LastName: userDetails.LastName,
      CompanyName: userDetails.CompanyName,
      CompanyType: userDetails.CompanyType,
      CountryCode: countryCode,
      password: val.setPassword,
    })
      .then((res) => {
        if (res.statusCode === 0) {
          setErrorMessage(res?.message);
          removeLoader();
          setOpen(true);
          console.log(res, 'sucesmsg');
        } else {
          setErrorMessage(res?.message);
          setErrorOpen(true);
        }
        router.push('/login');
      })
      .catch((err: any) => {
        console.log('impossible error', err);
        setErrorMessage(err?.data?.desc);
        removeLoader();
        setErrorOpen(true);
      });
  };

  function dedupeSignUpAPI(
    EmailAddress: string,
    PhoneNumber: string,
    EmiratesID: string,
    TradeLicenceNo: string,
    isUAEResident: boolean,
  ) {
    startLoader();
    Auth.dedupeSignup({
      EmailAddress,
      PhoneNumber,
      EmiratesID,
      TradeLicenceNo,
      isUAEResident,
    })
      .then((res) => {
        if (res.isRegProceed === 'Y') {
          setDrcu(res.drcu);
          init.setToken(res.token, res.drcu, res?.sop);
          removeLoader();
          setOpen(true);
        } else {
          setErrorMessage(res?.drcu);
          removeLoader();
          setErrorOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err?.data?.desc);
        removeLoader();
        setErrorOpen(true);
      });
  }

  const afterValidate = () => {
    setIsValidated(true);
  };

  return (
    <>
      {!isValidated ? (
        <div className={styles.RegContainer}>
          <div className={styles.Reglogo}>
            <Image src={FABicon} alt="fab icon" height="61px" width="107px" />
            <div className={styles.logobottomtext}>Business Banking</div>
          </div>
          <div className={styles.regCard}>
            <Card>
              <div className={styles.FabHeading}>Tell us about yourself</div>
              <div className={styles.subHead}>
                We need some basic information from you to get you started
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(v) => {
                  setUserDetails(v);
                  dedupeSignUpAPI(
                    v.EmailAddress,
                    v.PhoneNumber,
                    v.EmiratesID,
                    v.TradeLicenceNo,
                    v.isUAEResident,
                  );
                }}
              >
                {(formik) => (
                  <Form autoComplete="off">
                    <div className={styles.formLine}>
                      <div className={styles.firstInput}>
                        <FormControl
                          control="input"
                          onChange={(val: string) => {
                            handleChange(val, 'FirstName', formik);
                          }}
                          type="text"
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
                          onBlur={formik.handleBlur}
                          id="CompanyType"
                          name="CompanyType"
                          control="select"
                          fontFamily="Graphik"
                          list={companyList}
                          label="Company Type"
                          onChange={(val: string) => handleChange(val[0], 'CompanyType', formik)}
                          isInvalid={Boolean(
                            formik.errors.CompanyType
                              && formik.touched.CompanyType,
                          )}
                        />
                      </div>
                      <div className={styles.secondInput}>
                        <FormControl
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
                      <div className={styles.secondInput} />
                    </div>
                    <div
                      className={styles.formLastLine}
                      style={{ marginBottom: '7rem' }}
                    >
                      <div className={styles.firstInput}>
                        <div className={styles.checkborContainer}>
                          <Checkbox
                            name="isUAEResident"
                            value="formik.values.isUAEResident"
                            onChange={(
                              val: React.ChangeEvent<HTMLInputElement>,
                            ) => handleChange(
                              val.target.checked,
                              'isUAEResident',
                              formik,
                            )}
                          >
                            <p
                              style={{
                                fontSize: '.75rem',
                                fontFamily: 'inherit',
                              }}
                            >
                              I am a UAE resident
                            </p>
                          </Checkbox>
                        </div>
                      </div>
                      <div className={styles.secondInput}>
                        {formik.values.isUAEResident && (
                          <FormControl
                            control="input"
                            label="Emirates ID"
                            name="EmiratesID"
                            onChange={(val: string) => handleChange(val, 'EmiratesID', formik)}
                            isInvalid={Boolean(
                              formik.errors.EmiratesID
                                && formik.touched.EmiratesID,
                            )}
                            width="100%"
                          />
                        )}
                      </div>
                    </div>
                    <div className={styles.btnContainer}>
                      <div className={styles.text12px}>
                        By selecting Continue, you agree to the FAB &nbsp;
                        <TextLink textSize="small">
                          Terms and Conditions
                        </TextLink>
                      </div>
                      <div className={styles.btns}>
                        <Button
                          variant={ButtonVariantsEnum.SECONDARY}
                          onClick={goToLogin}
                          type="button"
                        >
                          &nbsp;Cancel&nbsp;
                        </Button>
                        <div style={{ paddingLeft: '1rem' }}>
                          <Button isDisabled={!formik.isValid} type="submit">
                            Continue
                          </Button>

                          {open && (
                            <Otp
                              user={drcu}
                              email={formik.values.EmailAddress}
                              phone={formik.values.PhoneNumber}
                              min={4}
                              sec={30}
                              setOpen={setOpen}
                              txnCode="REGISTRATION"
                              afterValidate={afterValidate}
                            />
                          )}

                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className={styles.text12pxB}
                        style={{ display: 'flex' }}
                      >
                        If you are a registered business banking customer,&nbsp;
                        <TextLink textSize="small" onClick={goToLogin}>
                          Login Now
                        </TextLink>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card>
          </div>
        </div>
      ) : (
        <SetPasswordForm
          hasUserID
          onSubmit={(val:any) => { handleSetPassword(val); }}
          onCancel={setIsValidated}
          firstName={userDetails.firstName}
          lastName={userDetails.lastName}
          userID={userDetails.user}
        />
      )}
      {errorOpen && (
        <Message
          message={errorMessage}
          setOpen={setErrorOpen}
        />
      )}
      {loader}
    </>
  );
}

export default Registration;
