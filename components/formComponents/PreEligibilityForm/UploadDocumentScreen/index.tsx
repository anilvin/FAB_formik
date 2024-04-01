/* eslint-disable @typescript-eslint/quotes */
import {
  Button,
  ButtonVariantsEnum,
  Icon, IconEnum, Text, TextLink,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { details } from '../../../../API';
import FormControl from '../../../FormControl';
import MasterContext from '../../../MasterContext';
import styles from './UploadDocument.module.css';
import { UploadDocumentSchema } from './UploadDocumentSchema';

type Props = {
  foldId : string,
};

function UploadDocument({ foldId }: Props) {
  const userDetail = useContext(MasterContext.UserContext);
  const [partnerVisa, setPartnerVisa] = useState([
    {
      id: 1,
      fileName: '',
    },
  ]);
  const [partnetPassport, setPartnerPassport] = useState([
    {
      id: 1,
      fileName: '',
    },
  ]);
  const [partnetEmirateID, setPartnetEmirateID] = useState([
    {
      id: 1,
      fileName: '',
    },
  ]);
  const initialValues = {
    tradeLicense: '',
    partnerVisa: '',
    partnerPassport: '',
    parrtnerEmirateID: '',
  };
  const addAnotherVisa = () => {
    setPartnerVisa((prevState) => [...prevState, { id: 2, fileName: '' }]);
  };
  const addAnotherPassport = () => {
    setPartnerPassport((prevState) => [...prevState, { id: 2, fileName: '' }]);
  };
  const addAnotherEmirateID = () => {
    setPartnetEmirateID((prevState) => [...prevState, { id: 2, fileName: '' }]);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (
    val: any | number | boolean,
    name: string,
    formik: any,
  ) => {
    formik.setFieldValue(name, val);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const doUpload = (event: Event, key:string, formik:any) => {
    if ((event?.target as HTMLInputElement)?.files) {
      const file = (event?.target as HTMLInputElement)?.files![0];
      // const docExt = file.name.split('.').pop();
      const formData = new FormData();
      formData.append(`file`, file);
      formData.append(`docName`, 'Share Register Certificate');
      formData.append(`uName`, userDetail.userName);
      formData.append(`source`, 'P');
      formData.append(`foldId`, foldId);
      formData.append(`docExt`, 'Pdf');
      formData.append(`isFolReq`, 'N');
      formData.append(`isDocFor`, 'pap');
      formData.append(`comments`, 'test');
      formData.append(`sysRefNo`, Date.now().toString());
      formData.append(`channel`, 'Portal');
      // const data = {
      //   docName: key,
      //   file,
      //   docExt,
      //   foldId: '6221',
      //   isFolReq: 'N',
      // };
      details.uploadFile(formData).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
    }
  };
  return (
    <>
      <div className={styles.FabHeading}>Upload Supporting Documents</div>
      <div className={styles.subHead}>
        Upload files will be safely stored in the documents vault in your
        account so you can easily access them later.
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={UploadDocumentSchema}
        onSubmit={(v) => {
          // onSubmit(v);
          console.log(v, 'FORMIKDATA');
        }}
      >
        {(formik) => {
          console.log(formik.isValid, formik.dirty);
          return (
            <Form autoComplete="off">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ paddingTop: '10px', width: '420px' }}>
                  <div style={{ padding: '15px' }}>
                    <div
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Text color="blackGrey.100" size="small">
                        Trade License
                      </Text>
                      <div
                        style={{
                          marginRight: '1rem',
                        }}
                      >
                        <Icon
                          fill="black"
                          name={IconEnum.INFORMATION}
                          width={24}
                        />
                      </div>
                    </div>
                    <FormControl
                      onChange={(event: any) => {
                        event?.isPropagationStopped();
                        doUpload(event, 'tradeLicense', formik);
                        // handleChange(val, 'tradeLicense', formik);
                      }}
                      control="file"
                      // onChange={(event:any) => {
                      //   console.log(event?.isPropagationStopped());
                      // }}
                      name="tradeLicense"
                      text="Attach / upload a file"
                      uploadProgress={0}
                      isInvalid={Boolean(
                        formik.errors.tradeLicense && formik.touched.tradeLicense,
                      )}
                    />
                  </div>
                  <div style={{ padding: '15px' }}>
                    <Text color="blackGrey.100" size="small">
                      Connected Parties/Partner Visa
                    </Text>
                    {partnerVisa.map((visa) => (
                      <div style={{ padding: '5px' }}>
                        <FormControl
                          onChange={(event: any) => {
                            event?.isPropagationStopped();
                            doUpload(event, 'partnerVisa', formik);
                            // handleChange(val, 'tradeLicense', formik);
                          }}
                          // onChange={(val: any) => {
                          //   handleChange(val, 'partnerVisa', formik);
                          // }}
                          control="file"
                          name="partnerVisa"
                          text="Attach / upload a file"
                          isInvalid={Boolean(
                            formik.errors.partnerVisa && formik.touched.partnerVisa,
                          )}
                          value={visa.fileName}
                        />
                      </div>
                    ))}
                    <div
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          marginRight: '1rem',
                        }}
                      >
                        <Icon
                          fill="blue"
                          name={IconEnum.ADDOUTLINE}
                          width={24}
                          onClick={addAnotherVisa}
                        />
                      </div>
                      <Text color="blue" size="small">
                        Add another Visa
                      </Text>
                    </div>
                  </div>
                  <div style={{ padding: '15px' }}>
                    <Text color="blackGrey.100" size="small">
                      Connected Parties/Partner Passport
                    </Text>
                    {partnetPassport.map((visa) => (
                      <div style={{ padding: '5px' }}>
                        <FormControl
                          onChange={(event: any) => {
                            event?.isPropagationStopped();
                            doUpload(event, 'partnerVisa', formik);
                            // handleChange(val, 'tradeLicense', formik);
                          }}
                          // onChange={(val: any) => {
                          //   handleChange(val, 'partnerVisa', formik);
                          // }}
                          control="file"
                          name="partnerPassport"
                          text="Attach / upload a file"
                          isInvalid={Boolean(
                            formik.errors.partnerVisa && formik.touched.partnerVisa,
                          )}
                          value={visa.fileName}
                        />
                      </div>
                    ))}
                    <div
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          marginRight: '1rem',
                        }}
                      >
                        <Icon
                          fill="blue"
                          name={IconEnum.ADDOUTLINE}
                          width={24}
                          onClick={addAnotherPassport}
                        />
                      </div>
                      <Text color="blue" size="small">
                        Add another Passport
                      </Text>
                    </div>
                  </div>
                  <div style={{ padding: '15px' }}>
                    <Text color="blackGrey.100" size="small">
                      Connected Parties/Partner Emirate ID
                    </Text>
                    {partnetEmirateID.map((visa) => (
                      <div style={{ padding: '5px' }}>
                        <FormControl
                          onChange={(event: any) => {
                            event?.isPropagationStopped();
                            doUpload(event, 'partnerEmirateID', formik);
                            // handleChange(val, 'tradeLicense', formik);
                          }}
                          // onChange={(val: any) => {
                          //   handleChange(val, 'partnerVisa', formik);
                          // }}
                          control="file"
                          name="partnerEmirateID"
                          text="Attach / upload a file"
                          isInvalid={Boolean(
                            formik.errors.partnerVisa && formik.touched.partnerVisa,
                          )}
                          value={visa.fileName}
                        />
                      </div>
                    ))}
                    <div
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          marginRight: '1rem',
                        }}
                      >
                        <Icon
                          fill="blue"
                          name={IconEnum.ADDOUTLINE}
                          width={24}
                          onClick={addAnotherEmirateID}
                        />
                      </div>
                      <Text color="blue" size="small">
                        Add another Emirate ID
                      </Text>
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '50%',
                  marginTop: '1.5rem',
                }}
                >
                  <div style={{ fontSize: '20px', fontFamily: 'Graphik', fontWeight: '600' }}>Document Status</div>
                  <div style={{ fontFamily: 'Graphik', fontWeight: '600', paddingTop: '1rem' }}>Required documents for POS Loan application</div>
                  <div style={{ paddingTop: '7px' }}>
                    <span style={{ display: 'flex', gap: '10px' }}>
                      {formik.errors.tradeLicense
                    || formik.values.tradeLicense !== '' ? (
                      <Icon
                        name={IconEnum.SUCCESSOUTLINE}
                        width={20}
                        fill={
                         (formik.values.tradeLicense)
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
                      Trade License
                    </span>
                    <span style={{ display: 'flex', gap: '10px' }}>
                      {formik.errors.partnerVisa
                    || formik.values.partnerVisa !== '' ? (
                      <Icon
                        name={IconEnum.SUCCESSOUTLINE}
                        width={20}
                        fill={
                          regexlength.test(formik.values.partnerVisa)
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
                      UBOs / Partner Visa
                    </span>
                    <span style={{ display: 'flex', gap: '10px' }}>
                      {formik.errors.partnerPassport
                    || formik.values.partnerPassport !== '' ? (
                      <Icon
                        name={IconEnum.SUCCESSOUTLINE}
                        width={20}
                        fill={
                          regexlength.test(formik.values.partnerPassport)
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
                      UBOs / Partner Passport
                    </span>
                    <span style={{ display: 'flex', gap: '10px' }}>
                      {formik.errors.parrtnerEmirateID
                    || formik.values.parrtnerEmirateID !== '' ? (
                      <Icon
                        name={IconEnum.SUCCESSOUTLINE}
                        width={20}
                        fill={
                          regexlength.test(formik.values.parrtnerEmirateID)
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
                      UBOs / Partner EmirateID
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ lineHeight: '19px' }}>
                By selecting Submit, you consent to FAB conducting the
                necessary check the applicable in the&nbsp;
                <TextLink textSize="small">Terms and Conditions</TextLink>
              </div>
              <div className={styles.btnContainer}>
                <div className={styles.btns}>
                  <Button
                    variant={ButtonVariantsEnum.SECONDARY}
                  >
                          &nbsp;Save and Continue later&nbsp;
                  </Button>
                  <div style={{ paddingLeft: '1rem' }}>
                    <Button isDisabled={!formik.isValid} type="submit">
                      Continue
                    </Button>
                  </div>
                </div>
                {/* <div
                    style={{
                      color: '#0866fe',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <strong>&#60; Back </strong>
                  </div> */}
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
export default UploadDocument;
