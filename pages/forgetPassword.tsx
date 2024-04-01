import {
  Card,
  FillEnum,
  Logo,
  Button,
  ButtonVariantsEnum,
  Text,
} from '@genieology/gtb-ui';
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import styles from '../styles/ForgotPassword.module.css';
import { ForgotPasswordSchema } from '../components/schema';
import FormControl from '../components/FormControl';
import Otp from '../components/Otp';
import SetPasswordForm from '../components/setPassword';
import Auth from '../API/auth';
import Message from '../components/Message';
import useLoader from '../hooks/useLoader';
import init from '../API/init';

function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, startLoader, removeLoader] = useLoader();
  const [forgetDetails, setForgetDetails] = useState<any>({});
  const [isValidated, setIsValidated] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [countryCode, setCountrycode] = useState('');
  const router = useRouter();
  const initialValues = {
    userID: '',
    EmailAddress: '',
    PhoneNumber: '',
  };
  const handleForgotPassword = (val:any) => {
    startLoader();
    Auth.forgot({
      password: val.setPassword,
      user: val.userID,
    })
      .then((res) => {
        if (res.statusCode === '0') {
          setErrorMessage(res?.message);
          removeLoader();
          setErrorOpen(true);
          setIsRedirect(true);
          console.log(res, 'sucesmsg');
        } else {
          setErrorMessage(res?.message);
          removeLoader();
          setErrorOpen(true);
        }
      })
      .catch((err) => {
        console.log('impossible error', err);
        setErrorMessage(err?.data?.desc);
        removeLoader();
        setErrorOpen(true);
      });
  };
  const afterValidate = () => {
    setIsValidated(true);
  };

  function validateUserAPI(
    user: string,
    EmailAddress: string,
    PhoneNumber: string,
  ) {
    startLoader();
    Auth.validateUser({
      user,
      EmailAddress,
      PhoneNumber,
    })
      .then((res) => {
        if (res.isValidUser === 'Y') {
          console.log(res);
          init.setToken(res);
          removeLoader();
          setOpen(true);
        } else {
          setErrorMessage(res.desc);
          removeLoader();
          setErrorOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.data.desc);
        removeLoader();
        setErrorOpen(true);
      });
  }
  const handleChange = (
    val: string | number | boolean | string[],
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
      console.log(val);
    }
  };

  const handleCountryCode = (val: string[]) => {
    setCountrycode(val[0]);
    console.log(countryCode);
  };
  return (
    <>
      {!isValidated ? (
        <div className={styles.forgotPasswordContainer}>
          <div className={styles.container}>
            <Logo fill={FillEnum.WHITE} height={60} width={89} />
            <div className={styles.setPassword_logo_text}>Business Banking</div>
          </div>
          <div className={styles.forgotPassword_card}>
            <Card
              style={{ height: '600px', marginTop: '-6rem' }}
              testId="example"
            >
              <div className={styles.forgotPassword_main_text_div}>
                <div className={styles.forgotPassword_h1_div}>
                  <h1 className={styles.forgotPassword_h1}>
                    Forgot your Login Details?
                  </h1>
                </div>
                <div className={styles.forgotPassword_second_text_div}>
                  <Text
                    as="p"
                    color="blackGrey.100"
                    family="gh"
                    letterSpacing="normal"
                    size="normal"
                    testId="example"
                    weight="normal"
                  >
                    Lets get you back on track.
                  </Text>
                </div>

                <div
                  style={{
                    paddingTop: '3rem',
                    marginBottom: '0.8rem',
                    fontFamily: 'Graphik',
                    fontSize: ' 16px',
                    fontWeight: 500,
                    color: '#2c2e2f',
                    letterSpacing: '-0.2px',
                    lineHeight: '32px',
                  }}
                >
                  <p color="blackGrey.200">Account Details</p>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={ForgotPasswordSchema}
                onSubmit={(v) => {
                  console.log(v);
                  setForgetDetails(v);
                  validateUserAPI(v.userID, v.EmailAddress, v.PhoneNumber);
                }}
              >
                {(formik) => (
                  <Form autoComplete="off">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',

                          flex: '50%',
                          padding: '50px',
                          paddingTop: '0px',
                          marginTop: '-3rem',
                        }}
                      >
                        <div style={{ paddingBottom: '1rem', width: '380px' }}>
                          <FormControl
                            control="input"
                            onChange={(val: string) => handleChange(val, 'userID', formik)}
                            type="text"
                            label="User ID*"
                            icon="Error"
                            name="userID"
                            autoComplete="off"
                            isInvalid={Boolean(
                              formik.errors.userID && formik.touched.userID,
                            )}
                            width="100%"
                            tooltip={{
                              i18n: {
                                tooltipDescription:
                                  'Your userID can be found in your email',
                              },
                              placement: 'bottom',
                              width: '200px',
                            }}
                          />
                        </div>
                        <div style={{ paddingBottom: '1rem', width: '380px' }}>
                          <FormControl
                            control="input"
                            icon="Error"
                            label="Email Address"
                            name="EmailAddress"
                            onChange={(val: string) => handleChange(val, 'EmailAddress', formik)}
                            autoComplete="off"
                            isInvalid={Boolean(
                              formik.errors.EmailAddress
                                && formik.touched.EmailAddress,
                            )}
                            width="100%"
                          />
                        </div>
                        <div style={{ paddingBottom: '1rem', width: '380px' }}>
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
                            onChangeSelect={handleCountryCode}
                            onKeyUp={() => {}}
                            pattern={/[\d.]+/g}
                            shouldDisplayInfoValue
                            testId="test-id"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        marginTop: '-1.5rem',
                        marginLeft: '3.3rem',
                        marginRight: '22.5rem',
                      }}
                    >
                      <Button
                        testId="test-id"
                        type="button"
                        isBlock
                        className={styles.forgotPassword_cancel_button}
                        variant={ButtonVariantsEnum.SECONDARY}
                        onClick={() => {
                          router.push('/login');
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        testId="test-id"
                        isDisabled={!(formik.isValid && formik.dirty)}
                        isBlock
                      >
                        Continue
                      </Button>
                      {open && (
                        <Otp
                          user={formik.values.userID}
                          email={formik.values.EmailAddress}
                          phone={formik.values.PhoneNumber}
                          min={4}
                          sec={30}
                          setOpen={setOpen}
                          txnCode="FPWD"
                          afterValidate={afterValidate}

                        />
                      )}

                    </div>
                  </Form>
                )}
              </Formik>
            </Card>
          </div>
        </div>
      ) : (
        <SetPasswordForm
          hasUserID={false}
          onSubmit={(val: any) => handleForgotPassword(val)}
          onCancel={async () => null}
          userID={forgetDetails.userID}
          firstName=""
          lastName=""
        />
      )}
      {errorOpen && (
        <Message
          message={errorMessage}
          setOpen={setErrorOpen}
          forSuccess={isRedirect}
          onClick={() => {
            router.push('/login');
          }}
        />
      )}
      {loader}
    </>
  );
}

export default ForgotPassword;
