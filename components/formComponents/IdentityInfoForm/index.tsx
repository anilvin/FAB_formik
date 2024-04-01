import React, { useContext } from 'react';
import {
  Button,
  ButtonVariantsEnum,
  Card,
  DatepickerTypeEnum,
  Text,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';

import styles from '../../businessProductForm/AboutYourCompanyForm.module.css';
import FormControl from '../../FormControl';
import MasterContext from '../../MasterContext';
import { IdentityDataProps, IdentitySingleDataProps } from '../../businessProductForm/PropDataType';
import IdentitySchema from './identitySchema';

type Props = {
  initialValues?: IdentitySingleDataProps,
  onFormSubmit:(val:IdentityDataProps) => void,
};

function IdentityInfo({ initialValues, onFormSubmit }: Props) {
  const List = useContext(MasterContext.DropdownContext);
  const formValue = {
    identifiertype: initialValues?.identifiertype || '',
    number: initialValues?.number || '',
    issuedate: initialValues?.issuedate || '',
    expirydate: initialValues?.expirydate || '',
    placeofissue: initialValues?.placeofissue || '',
    identityiOrderId: initialValues?.identityiOrderId || '',
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
            About Your Company
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
          initialValues={formValue}
          validationSchema={IdentitySchema}
          onSubmit={(val) => onFormSubmit({ identity: [val] })}
        >
          {(formik) => (
            <Form autoComplete="off">
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'identifiertype', formik);
                      }
                    }}
                    label="Identifier Type*"
                    name="identifiertype"
                    list={List['IDENTIFIER-TYPE']}
                    isInvalid={Boolean(
                      formik.errors.identifiertype && formik.touched.identifiertype,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'number', formik);
                    }}
                    label="Number*"
                    name="number"
                    isInvalid={Boolean(
                      formik.errors.number && formik.touched.number,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    key="issuedate"
                    onBlur={formik.handleBlur}
                    id="issuedate"
                    name="issuedate"
                    control="date"
                    fontFamily="Graphik"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Issue Date"
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
                </div>
                <div>
                  <FormControl
                    key="expirydate"
                    onBlur={formik.handleBlur}
                    id="expirydate"
                    name="expirydate"
                    control="date"
                    fontFamily="Graphik"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Expiry date"
                    startDate={
                      formik.values.expirydate?.length > 0
                        ? new Date(formik.values.expirydate) : null
                    }
                    onChange={(val:any) => {
                      handleChange(val.startDate.toISOString(), 'expirydate', formik, true);
                    }}
                    isInvalid={Boolean(
                      formik.errors.expirydate
                            && formik.touched.expirydate,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'placeofissue', formik);
                    }}
                    label="Place Of Issue*"
                    name="placeofissue"
                    isInvalid={Boolean(
                      formik.errors.placeofissue && formik.touched.placeofissue,
                    )}
                  />
                </div>
              </div>
              <div style={{
                display: 'flex', flexDirection: 'row', marginTop: '8rem', marginLeft: '30.5rem',
              }}
              >
                <div style={{ marginRight: '1rem' }}>
                  <Button variant={ButtonVariantsEnum.SECONDARY} type="button">
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button type="submit">Next</Button>
                </div>

              </div>
            </Form>
          )}
        </Formik>

      </Card>

    </div>
  );
}

export default IdentityInfo;
