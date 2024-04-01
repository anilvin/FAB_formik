import React, { Dispatch, SetStateAction, useState } from 'react';
import { Form, Formik } from 'formik';
import {
  Button,
  ButtonVariantsEnum,
  Icon,
  IconEnum,
  InputTypeEnum,
  Text,
} from '@genieology/gtb-ui';
import { SetPasswordSchema } from '../schema';
import styles from '../../styles/setPassword.module.css';
import FormControl from '../FormControl';

type SetPasswordProps = {
  hasUserID: Boolean;
  firstName: string;
  lastName: string;
  userID: string;
  onSubmit: (val: any) => void;
  onCancel: Dispatch<SetStateAction<boolean>>;
};

function SetPassword({
  hasUserID,
  onCancel,
  onSubmit,
  lastName,
  firstName,
  userID,
}: SetPasswordProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordvisible, setRePasswordVisible] = useState(false);
  const initialValues = {
    userID,
    setPassword: '',
    re_enterPasword: '',
    firstName,
    lastName,
  };
  const regexnumeric = /[0-9]/;
  const regexalphabet = /[a-zA-Z]/;
  const regexlength = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,16}$/;
  const regexSpecialchar = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

  const handleChange = (
    val: string | number | boolean,
    name: string,
    formik: any,
  ) => {
    formik.setFieldValue(name, val);
  };

  const forgotPasswordHeading = (
    <div className={styles.forgotPassword_main_text_div}>
      <div>
        <Text color="blackGrey.200" size="large" weight="semibold">
          Forgot your Login Details?
        </Text>
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
          Lets get back on track.
        </Text>
      </div>

      <div style={{ paddingTop: '4rem', marginBottom: '-1rem' }}>
        <Text color="blackGrey.200" size="medium" weight="semibold">
          Account Details
        </Text>
      </div>
    </div>
  );
  const setPasswordHeading = (
    <div className={styles.forgotPassword_main_text_div}>
      <div>
        <Text color="blackGrey.200" size="large" weight="semibold">
          Create your log in credentials
        </Text>
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
          You will use these credentials to log in to your account and track
          your application progress.
        </Text>
      </div>
    </div>
  );
  return (
    <>
      {hasUserID ? setPasswordHeading : forgotPasswordHeading}
      <Formik
        initialValues={initialValues}
        validationSchema={SetPasswordSchema}
        onSubmit={(v) => {
          onSubmit(v);
          console.log(v, 'FORMIKDATA');
        }}

      >
        {(formik) => {
          console.log(formik.isValid, formik.dirty);

          return (
            <Form autoComplete="off">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '50%',
                    padding: '50px',
                    paddingTop: '0px',
                    marginTop: '-1.5rem',
                  }}
                >
                  {hasUserID && (
                  <div style={{ paddingBottom: '1rem' }}>
                    <FormControl
                      onChange={(val: string) => {
                        handleChange(val, 'userID', formik);
                      }}
                      label="User ID*"
                      name="userID"
                      isValid={Boolean(
                        formik.errors.userID && formik.touched.userID,
                      )}
                      ID="userID"
                      autoComplete="off"
                      type="text"
                      control="input"
                    />
                  </div>
                  )}
                  <div style={{ paddingBottom: '1rem' }}>
                    <FormControl
                      control="input"
                      onChange={(val: any) => handleChange(val, 'setPassword', formik)}
                      ID="setPassword"
                      label="Set Password*"
                      name="setPassword"
                      autoComplete="off"
                      isInValid={Boolean(
                        formik.errors.setPassword && formik.touched.setPassword,
                      )}
                      type={
                      passwordVisible
                        ? InputTypeEnum.TEXT
                        : InputTypeEnum.PASSWORD
                    }
                      onClickIcon={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                      icon="ViewOff"
                    />
                  </div>
                  <div style={{ paddingBottom: '1rem' }}>
                    <FormControl
                      control="input"
                      onChange={(val: string) => {
                        handleChange(val, 're_enterPasword', formik);
                      }}
                      ID="re_enterPasword"
                      label="Re-enter Password*"
                      name="re_enterPasword"
                      autoComplete="off"
                      icon="ViewOff"
                      type={
                      rePasswordvisible
                        ? InputTypeEnum.TEXT
                        : InputTypeEnum.PASSWORD
                    }
                      onClickIcon={() => {
                        setRePasswordVisible(!rePasswordvisible);
                      }}
                      isInValid={Boolean(
                        formik.errors.re_enterPasword
                        && formik.touched.re_enterPasword,
                      )}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    flex: '50%',
                    marginTop: '-26.8px',
                    marginLeft: '0rem',
                  }}
                >
                  <span style={{ display: 'flex', gap: '10px' }}>
                    {formik.errors.setPassword
                  || formik.values.setPassword !== '' ? (
                    <Icon
                      name={IconEnum.SUCCESSOUTLINE}
                      width={20}
                      fill={
                        regexlength.test(formik.values.setPassword)
                          ? 'green'
                          : 'red'
                      }
                    />
                      ) : (
                        <Icon
                          name={IconEnum.SUCCESSOUTLINE}
                          width={20}
                          fill="lightgray"
                        />
                      )}
                    Must be between 10 and 16 characters long
                  </span>

                  <span style={{ display: 'flex', gap: '10px' }}>
                    {formik.errors.setPassword
                  || formik.values.setPassword !== '' ? (
                    <Icon
                      name={IconEnum.SUCCESSOUTLINE}
                      width={20}
                      fill={
                        regexnumeric.test(formik.values.setPassword)
                        && regexalphabet.test(formik.values.setPassword)
                          ? 'green'
                          : 'red'
                      }
                    />
                      ) : (
                        <Icon
                          name={IconEnum.SUCCESSOUTLINE}
                          width={20}
                          fill="lightgray"
                        />
                      )}
                    Must be alphanumeric
                  </span>
                  <span style={{ display: 'flex', gap: '10px' }}>
                    {formik.errors.setPassword
                  || formik.values.setPassword !== '' ? (
                    <Icon
                      name={IconEnum.SUCCESSOUTLINE}
                      width={20}
                      fill={
                        formik.errors.setPassword
                        !== 'should not be part of First, Middle or Last name'
                          ? 'green'
                          : 'red'
                      }
                    />
                      ) : (
                        <Icon
                          name={IconEnum.SUCCESSOUTLINE}
                          width={20}
                          fill="lightgray"
                        />
                      )}
                    Should not be part of First,Middle or Last name
                  </span>
                  <span style={{ display: 'flex', gap: '10px' }}>
                    {formik.values.userID !== 't'
                  && formik.values.setPassword !== '' ? (
                    <Icon
                      name={IconEnum.SUCCESSOUTLINE}
                      width={20}
                      fill={
                        formik.values.userID !== formik.values.setPassword
                          ? 'green'
                          : 'red'
                      }
                    />
                      ) : (
                        <Icon
                          name={IconEnum.SUCCESSOUTLINE}
                          width={20}
                          fill="lightgray"
                        />
                      )}
                    Should not match UserID & Password
                  </span>

                  <span style={{ display: 'flex', gap: '10px' }}>
                    {formik.errors.setPassword
                  || formik.values.setPassword !== '' ? (
                    <Icon
                      name={IconEnum.SUCCESSOUTLINE}
                      width={20}
                      fill={
                        regexSpecialchar.test(formik.values.setPassword)
                          ? 'green'
                          : 'red'
                      }
                    />
                      ) : (
                        <Icon
                          name={IconEnum.SUCCESSOUTLINE}
                          width={20}
                          fill="lightgray"
                        />
                      )}
                    At least one special character(~@#$%)
                  </span>
                  {/* {hasUserID ? (
                  ''
                ) : (
                  <span style={{ display: 'flex', gap: '10px' }}>
                    {formik.errors.setPassword
                    || formik.values.setPassword !== '' ? (
                      <Icon
                        name={IconEnum.SUCCESSOUTLINE}
                        width={20}
                        fill={
                          regexSpecialchar.test(formik.values.setPassword)
                            ? 'lightgray'
                            : 'lightgray'
                        }
                      />
                      ) : (
                        <Icon
                          name={IconEnum.SUCCESSOUTLINE}
                          width={20}
                          fill="lightgray"
                        />
                      )}
                    Previous 5 passwords cannot be used
                  </span>
                )} */}
                </div>
              </div>
              {hasUserID ? (
                <div
                  style={{
                    display: 'flex',
                    marginTop: '3.5rem',
                    justifyContent: 'flex-end',
                    marginRight: '2rem',
                  }}
                >
                  <div style={{ marginRight: '1rem' }}>
                    <Button
                    // onClick={() => onCancel(true)}
                      testId="test-id"
                      type="button"
                      variant={ButtonVariantsEnum.SECONDARY}
                    >
                      Back
                    </Button>
                  </div>

                  <Button
                    isDisabled={!(formik.isValid && formik.dirty)}
                    testId="test-id"
                    type="submit"
                  >
                    Continue
                  </Button>
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    marginTop: '-2.5rem',
                    marginLeft: '3.3rem',
                    marginRight: '34rem',
                  }}
                >
                  <Button
                    onClick={() => onCancel(true)}
                    testId="test-id"
                    type="button"
                    variant={ButtonVariantsEnum.SECONDARY}
                    isBlock
                    className={styles.forgotPassword_cancel_button}
                  >
                    Back
                  </Button>

                  <Button
                    isDisabled={!(formik.isValid && formik.dirty)}
                    isBlock
                    testId="test-id"
                    type="submit"
                  >
                    Continue
                  </Button>
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default SetPassword;
