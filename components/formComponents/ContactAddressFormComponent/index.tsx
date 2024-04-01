import { useContext } from 'react';
import {
  Button, ButtonVariantsEnum, Card, DatepickerTypeEnum, Radio, RadioGroup, Text,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import styles from '../../businessProductForm/AboutYourCompanyForm.module.css';
import FormControl from '../../FormControl';
import ContactandAddressSchema from './ContactandAddressSchema';
import MasterContext from '../../MasterContext';
import { AddressDataSetProps, AddressDetailProps } from '../../businessProductForm/PropDataType';

type Props = {
  initialValues?:AddressDetailProps,
  onSubmit:(val:AddressDataSetProps) => void,
};
function ContactandAddress({ initialValues, onSubmit }: Props) {
  const List = useContext(MasterContext.DropdownContext);
  const formValue = {
    addressiOrderId: initialValues?.addressiOrderId || '',
    addressType: initialValues?.addressType || '',
    buildingNumber: initialValues?.buildingNumber || '',
    buildingName: initialValues?.buildingName || '',
    streetName: initialValues?.streetName || '',
    nearestLandmark: initialValues?.nearestLandmark || '',
    locationArea: initialValues?.locationArea || '',
    country: initialValues?.country || '',
    townCity: initialValues?.townCity || '',
    zipCode: initialValues?.zipCode || '',
    addressEmirate: initialValues?.addressEmirate || '',
    addressPoBox: initialValues?.addressPoBox || '',
    addressStayingAtThis: initialValues?.addressStayingAtThis || '',
    mailingAddress: initialValues?.mailingAddress || '',
    primaryMobileNumber: initialValues?.primaryMobileNumber || '',
    officeTelephoneNumber: initialValues?.officeTelephoneNumber || '',
    homeTelephoneNumber: initialValues?.homeTelephoneNumber || '',
    fax: initialValues?.fax || '',
    emailAddress: initialValues?.emailAddress || '',
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
          <Text color="blackGrey.200" family="gh" size="xSmall" weight="medium">
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
            Contact & Address Information
          </Text>
        </div>
        <Formik
          initialValues={formValue}
          validationSchema={ContactandAddressSchema}
          validateOnBlur
          onSubmit={(val) => onSubmit({ address: [val] })}
        >
          {(formik) => (
            <Form autoComplete="off">
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'addressType', formik);
                      }
                    }}
                    label="Address Type*"
                    name="addressType"
                    list={List['ADDRESS-TYPE']}
                    isInvalid={Boolean(
                      formik.errors.addressType && formik.touched.addressType,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Building Number"
                    name="buildingNumber"
                    onChange={(val: string) => handleChange(val, 'buildingNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors.buildingNumber
                      && formik.touched.buildingNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Building Name"
                    name="buildingName"
                    onChange={(val: string) => handleChange(val, 'buildingName', formik)}
                    isInvalid={Boolean(
                      formik.errors.buildingName && formik.touched.buildingName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Street Name"
                    name="streetName"
                    onChange={(val: string) => handleChange(val, 'streetName', formik)}
                    isInvalid={Boolean(
                      formik.errors.streetName && formik.touched.streetName,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
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
                    label="Location/Area"
                    name="locationArea"
                    onChange={(val: string) => handleChange(val, 'locationArea', formik)}
                    isInvalid={Boolean(
                      formik.errors.locationArea
                      && formik.touched.locationArea,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'country', formik);
                      }
                    }}
                    label="Country*"
                    name="country"
                    list={List['COUNTRY-MAST']}
                    isInvalid={Boolean(
                      formik.errors.country && formik.touched.country,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => handleChange(val, 'townCity', formik)}
                    label="Town/City*"
                    name="townCity"
                    isInvalid={Boolean(
                      formik.errors.townCity && formik.touched.townCity,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="Number"
                    label="ZipCode"
                    name="zipCode"
                    onChange={(val: string) => handleChange(val, 'zipCode', formik)}
                    isInvalid={Boolean(
                      formik.errors.zipCode && formik.touched.zipCode,
                    )}
                  />
                </div>
                {/* {formik.values.country === 'UNITED ARAB EMIRATES' && ( */}
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string) => {
                      handleChange(val[0], 'addressEmirate', formik);
                    }}
                    label="Emirate*"
                    name="addressEmirate"
                    list={List.EMIRATE}
                    isInvalid={Boolean(
                      formik.errors.addressEmirate && formik.touched.addressEmirate,
                    )}
                  />
                </div>
                {/* )} */}
                {/* {formik.values.addressType && ( */}
                <div>
                  <FormControl
                    control="input"
                    type="text"
                    label="PO Box"
                    name="addressPoBox"
                    onChange={(val: string) => handleChange(val, 'addressPoBox', formik)}
                    isInvalid={Boolean(
                      formik.errors.addressPoBox && formik.touched.addressPoBox,
                    )}
                  />
                </div>
                {/* )} */}
                <div>
                  <FormControl
                    key="addressStayingAtThis"
                    onBlur={formik.handleBlur}
                    id="addressStayingAtThis"
                    name="addressStayingAtThis"
                    control="date"
                    fontFamily="Graphik"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Address Staying at this"
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
                <div>
                  <div style={{ paddingLeft: '20px', paddingTop: '5px' }}>
                    <Text
                      color="blackGrey.200"
                      size="small"
                    >
                      Mailing Address
                    </Text>
                    <RadioGroup onChange={(e:string) => handleChange(e, 'mailingAddress', formik)}>
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
                <div>
                  <FormControl
                    control="input"
                    type="tel"
                    onChange={(val: string) => {
                      handleChange(val, 'primaryMobileNumber', formik);
                    }}
                    label="Primary Mobile Number*"
                    name="primaryMobileNumber"
                    isInvalid={Boolean(
                      formik.errors.primaryMobileNumber
                      && formik.touched.primaryMobileNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="tel"
                    onChange={(val: string) => {
                      handleChange(val, 'officeTelephoneNumber', formik);
                    }}
                    label="Office Telephone Number*"
                    name="officeTelephoneNumber"
                    isInvalid={Boolean(
                      formik.errors.officeTelephoneNumber
                      && formik.touched.officeTelephoneNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="tel"
                    onChange={(val: string) => {
                      handleChange(val, 'homeTelephoneNumber', formik);
                    }}
                    label="Home Telephone Number*"
                    name="homeTelephoneNumber"
                    isInvalid={Boolean(
                      formik.errors.homeTelephoneNumber
                      && formik.touched.homeTelephoneNumber,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="text"
                    label="Fax"
                    name="fax"
                    onChange={(val: string) => handleChange(val, 'fax', formik)}
                    isInvalid={Boolean(formik.errors.fax && formik.touched.fax)}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="text"
                    label="Email Address"
                    name="emailAddress"
                    onChange={(val: string) => handleChange(val, 'emailAddress', formik)}
                    isInvalid={Boolean(
                      formik.errors.emailAddress && formik.touched.emailAddress,
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
export default ContactandAddress;
