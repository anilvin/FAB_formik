import Card from '@genieology/gtb-ui/dist/components/Card';
import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import {
  Button,
  ButtonVariantsEnum,
  FillEnum,
  Icon,
  IconEnum,
  IconPositionsEnum,
  Logo,
  TextLink,
} from '@genieology/gtb-ui';
import Image from 'next/image';
import phone from '../public/icons/phone.svg';
import barcode from '../public/icons/qr.png';
import appStore from '../public/icons/AppStore.png';
import playStore from '../public/icons/PlayStore.png';
import Otp from '../components/Otp';
import { loginSchema } from '../components/schema';
import FormControl from '../components/FormControl';
import styles from '../styles/login.module.css';
import useLoader from '../hooks/useLoader';
import Auth from '../API/auth';
import Message from '../components/Message';
import init from '../API/init';
import MasterContext from '../components/MasterContext';

function Login() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formUser, setUser] = useState('');
  const [formPassword, setPassword] = useState('');
  const [phNo, setPhNo] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [loader, startLoader, removeLoader] = useLoader();
  const setUserDetails = useContext(MasterContext.UserContext);

  const initialValues = {
    user: '',
    password: '',
  };
  const handleChange = (
    val: string | number | boolean | React.ChangeEvent<HTMLInputElement>,
    name: string,
    formik: any,
  ) => {
    formik.setFieldValue(name, val);
  };
  const toggleIcon = () => {
    setShow(!show);
  };
  const afterValidate = () => {
    startLoader();
    Auth.login(formUser, formPassword)
      .then((res) => {
        init.setToken(res?.token);
        setUserDetails.setUser(res);
        sessionStorage.setItem('user', formUser);
        sessionStorage.setItem('token', res?.token);
        removeLoader();
        router.push('/dashboard');
      })
      .catch((err) => { setErrorMessage(err?.data?.desc); removeLoader(); setErrorOpen(true); console.log('usercontext', setUserDetails); });
  };

  function createTokenApi(user:string, password:string) {
    startLoader();
    Auth.createToken(user, password)
      .then((res) => {
        setPhNo(res.mobileNo);
        setEmail(res.email);
        init.setToken(res.token);
        removeLoader();
        setOpen(true);
      })
      .catch((err) => {
        setErrorMessage(err?.data?.desc);
        removeLoader();
        setErrorOpen(true);
      });
  }
  return (
    <>
      <div className={styles.container}>
        {/* <Image src={FABicon} alt="fab icon" height="62px" width="78px" /> */}
        <Logo
          fill={FillEnum.WHITE}
          height={60}
          width={89}
        />
        <div className={styles.login_logo_text}>Business Banking</div>
      </div>

      <div className={styles.login_div_container}>
        <div className={styles.login_first_card_div}>
          <Card className={styles.login_card_one}>
            <div className={styles.login_card_inside_div}>
              <div className={styles.login_h1_div}>
                <h1 className={styles.login_h1}>
                  Download the Business Banking App
                </h1>
              </div>

              <div className={styles.login_phone_image}>
                <Image src={phone} alt="phone" objectFit="contain" />
              </div>
              <div className={styles.login_barcode_text_div}>
                <div className={styles.login_barcode_image}>
                  <Image src={barcode} alt="barcode" objectFit="contain" />
                </div>

                <div className={styles.login_below_text_div}>
                  <h4 className={styles.login_below_h1_text}>
                    Apply for business products or manage your account with our
                    Business Banking app
                  </h4>
                  <div className={styles.login_below_two_images}>
                    <div className={styles.login_inner_image_div_container}>
                      <Image
                        src={appStore}
                        alt="appStore"
                        objectFit="contain"
                      />
                    </div>
                    <div>
                      <Image
                        src={playStore}
                        alt="appStore"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className={styles.login_space_div} />
        <div className={styles.login_second_card_div}>
          <Card className={styles.login_card_two}>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={(v) => {
                setUser(v.user);
                setPassword(v.password);
                createTokenApi(v.user, v.password);
              }}
            >
              {(formik) => (
                <div>
                  <Form autoComplete="off">
                    <div className={styles.login_form_div}>
                      <div className={styles.login_card_two_inside_div}>
                        <h1 className={styles.login_h1_div_card_two}>
                          Welcome
                        </h1>
                        <p className={styles.login_p_tag}>
                          If you are a registered business banking customer,
                          login now.
                        </p>
                        <div className={styles.login_input_main_div}>
                          <FormControl
                            control="input"
                            id="user"
                            type="text"
                            label="User Id*"
                            name="user"
                            icon="Error"
                            isInvalid={Boolean(
                              formik.errors.user && formik.touched.user,
                            )}
                            width="100%"
                            onChange={(val: string) => handleChange(val, 'user', formik)}
                            tooltip={{
                              i18n: {
                                tooltipDescription: 'Your userID can be found in your email',

                              },
                              placement: 'bottom',
                              width: '200px',
                            }}
                          />
                        </div>
                        <div className={styles.login_input_main_div}>
                          <FormControl
                            control="input"
                            id="password"
                            label="Set Password"
                            name="password"
                            isInvalid={Boolean(
                              formik.errors.password
                                  && formik.touched.password,
                            )}
                            icon={show ? 'View' : 'ViewOff'}
                            onClickIcon={toggleIcon}
                            width="100%"
                            type={!show ? 'password' : 'text'}
                            onChange={(val: string) => handleChange(val, 'password', formik)}
                          />
                        </div>

                        <div className={styles.login_textlink}>
                          <TextLink testId="test-id" onClick={() => router.push('/forgetPassword')}>
                            Unlock account / Forgot password
                          </TextLink>
                        </div>
                        <div className={styles.login_button_div}>
                          <Button
                            testId="test-id"
                            isBlock
                            isDisabled={!(formik.isValid && formik.dirty)}
                          >
                            Login
                          </Button>
                          {open && (
                          <Otp
                            user={formik.values.user}
                            email={email}
                            phone={phNo}
                            min={4}
                            sec={30}
                            setOpen={setOpen}
                            txnCode="LOGIN"
                            afterValidate={afterValidate}
                          />
                          )}
                          {
                            errorOpen && <Message message={errorMessage} setOpen={setErrorOpen} />
                          }
                        </div>

                        <h5 className={styles.login_or_text}>OR</h5>
                        <div className={styles.login_Uae_button}>
                          <Button
                            icon={{
                              name: IconEnum.FINGERPASS,
                              position: IconPositionsEnum.RIGHT,
                            }}
                            variant={ButtonVariantsEnum.PASS}
                            isBlock
                            isDisabled={!(formik.isValid && formik.dirty)}
                          >
                            Login with UAE PASS
                          </Button>
                        </div>
                      </div>
                      <div className={styles.login_below_text_card_two_div}>
                        <p className={styles.login_below_p_tag}>
                          New to online business banking?
                        </p>
                        <div className={styles.login_below_textlink}>
                          <TextLink onClick={() => router.push('./signup')}>
                            Register Now
                            <Icon
                              fill="#0062FF"
                              name={IconEnum.LOGIN}
                              width={24}
                            />
                          </TextLink>

                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </Card>
        </div>
      </div>

      <div className={styles.login_below_card_text_div}>
        <h3 className={styles.login_below_card_h1_text}>
          Do NOT provide any personal, card or account details in response to
          SMS, E-mail or call queries. FAB NEVER requests information this way.
          Online access to First Abu Dhabi Bank is restricted to authorised
          users. Individuals attempting unauthorised access will be prosecuted.
        </h3>
      </div>
      {loader}
    </>
  );
}
export default Login;
