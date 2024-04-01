import React, { useContext } from 'react';
import {
  Button, ButtonSizesEnum, ButtonVariantsEnum, Card, DatepickerTypeEnum,
} from '@genieology/gtb-ui';
import {
  Form, Formik, FieldArray,
} from 'formik';
import FormControl from '../../FormControl';
import { AddressDetailProps } from '../../businessProductForm/PropDataType';
import validationSchema from './KCPAddressdetailesSchema';
import MasterContext from '../../MasterContext';

type Props = {
  initialValues?:AddressDetailProps,
  onFormSubmit:(val:AddressDetailProps)=> void,
};
function KcpAddress({ initialValues, onFormSubmit }:Props) {
  const List = useContext(MasterContext.DropdownContext);
  const formdata = {
    addressType: initialValues?.addressType || '',
    kcpAddressIOrderId: initialValues?.kcpAddressIOrderId || '',
    addressiOrderId: initialValues?.addressiOrderId || '',
    buildingNumber: initialValues?.buildingNumber || '',
    buildingName: initialValues?.buildingName || '',
    streetName: initialValues?.streetName || '',
    locationArea: initialValues?.locationArea || '',
    townCity: initialValues?.townCity || '',
    zipCode: initialValues?.zipCode || '',
    addressEmirate: initialValues?.addressEmirate || '',
    addressPoBox: initialValues?.addressPoBox || '',
    country: initialValues?.country || '',
    addressStayingAtThis: initialValues?.addressStayingAtThis || '',
    mailingAddress: initialValues?.mailingAddress || '',
    primaryMobileNumber: initialValues?.primaryMobileNumber || '',
    officeTelephoneNumber: initialValues?.officeTelephoneNumber || '',
    homeTelephoneNumber: initialValues?.homeTelephoneNumber || '',
    fax: initialValues?.fax || '',
    emailAddress: initialValues?.emailAddress || '',
    nearestLandmark: initialValues?.nearestLandmark || '',
    address: [''],
  };
  const handleChange = (
    val: string | number | boolean,
    name: string,
    formik: any,
  ) => {
    formik.setFieldValue(name, val);
  };
  return (
    <Card>
      <Formik
        initialValues={formdata}
        validationSchema={validationSchema}
        onSubmit={(val:any) => { onFormSubmit(val); }}
      >
        {(formik) => (
          <Form autoComplete="off">
            <Card>
              <div className="FormControl_row">
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="addressType"
                    control="select"
                    fontFamily="Graphik"
                    list={List['ADDRESS-TYPE']}
                    label="Address Type"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'addressType', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors?.addressType
                               && formik.touched?.addressType,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    control="input"
                    id="buildingNumber"
                    type="text"
                    name="buildingNumber"
                    onBlur={formik.handleBlur}
                    fontFamily="Graphik"
                    label="Building Number"
                    onChange={(val: any) => handleChange(val, 'buildingNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors?.buildingNumber
                               && formik.touched?.buildingNumber,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="buildingName"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Building Name"
                    onChange={(val: any) => handleChange(val, 'buildingName', formik)}
                    isInvalid={Boolean(
                      formik.errors?.buildingName
                             && formik.touched?.buildingName,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    name="streetName"
                    control="input"
                    fontFamily="Graphik"
                    label="Street Name"
                    onChange={(val: any) => handleChange(val, 'streetName', formik)}
                    isInvalid={Boolean(
                      formik.errors?.streetName
                             && formik.touched?.streetName,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="nearestLandmark"
                    name="nearestLandmark"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Nearest Landmark"
                    onChange={(val: any) => handleChange(val, 'nearestLandmark', formik)}
                    isInvalid={Boolean(
                      formik.errors?.nearestLandmark
                             && formik.touched?.nearestLandmark,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="locationArea"
                    name="locationArea"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Location / Area"
                    onChange={(val: any) => handleChange(val, 'locationArea', formik)}
                    isInvalid={Boolean(
                      formik.errors?.locationArea
                             && formik.touched?.locationArea,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="townCity"
                    name="townCity"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Town / City"
                    onChange={(val: any) => handleChange(val, 'townCity', formik)}
                    isInvalid={Boolean(
                      formik.errors?.townCity
                             && formik.touched?.townCity,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="zipCode"
                    name="zipCode"
                    control="input"
                    fontFamily="Graphik"
                    type="number"
                    label="Zip Code"
                    onChange={(val:any) => handleChange(val, 'zipCode', formik)}
                    isInvalid={Boolean(
                      formik.errors?.zipCode
                             && formik.touched?.zipCode,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="addressEmirate"
                    name="addressEmirate"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Emirate"
                    onChange={(val:any) => handleChange(val, 'addressEmirate', formik)}
                    isInvalid={Boolean(
                      formik.errors?.addressEmirate
                             && formik.touched?.addressEmirate,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="addressPoBox"
                    name="addressPoBox"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="PO Box"
                    onChange={(val:any) => handleChange(val, 'addressPoBox', formik)}
                    isInvalid={Boolean(
                      formik.errors?.addressPoBox
                             && formik.touched?.addressPoBox,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="country"
                    name="country"
                    control="select"
                    fontFamily="Graphik"
                    list={List['COUNTRY-MAST']}
                    label="Country"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'country', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors?.country
                             && formik.touched?.country,
                    )}
                  />
                </div>

                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="addressStayingAtThis"
                    name="addressStayingAtThis"
                    control="date"
                    startDate={formik.values.addressStayingAtThis}
                    type={DatepickerTypeEnum.SINGLE}
                    fontFamily="Graphik"
                    label="Staying at this address Since"
                    onChange={(val:any) => handleChange(val.startDate, 'addressStayingAtThis', formik)}
                    isInvalid={Boolean(
                      formik.errors?.addressStayingAtThis
                             && formik.touched?.addressStayingAtThis,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="mailingAddress"
                    name="mailingAddress"
                    control="select"
                    fontFamily="Graphik"
                    list={List['ADDRESS-TYPE']} // << This will be change for sure
                    label="Mailing Address"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'mailingAddress', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors?.mailingAddress
                             && formik.touched?.mailingAddress,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="primaryMobileNumber"
                    name="primaryMobileNumber"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Primary Mobile Number"
                    onChange={(val:any) => handleChange(val, 'primaryMobileNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors?.primaryMobileNumber
                             && formik.touched?.primaryMobileNumber,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="officeTelephoneNumber"
                    name="officeTelephoneNumber"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Office Telephone Number"
                    onChange={(val:any) => handleChange(val, 'officeTelephoneNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors?.officeTelephoneNumber
                             && formik.touched?.officeTelephoneNumber,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="homeTelephoneNumber"
                    name="homeTelephoneNumber"
                    control="input"
                    fontFamily="Graphik"
                    type="text"
                    label="Home Telephone Number"
                    onChange={(val:any) => handleChange(val, 'homeTelephoneNumber', formik)}
                    isInvalid={Boolean(
                      formik.errors?.homeTelephoneNumber
                             && formik.touched?.homeTelephoneNumber,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="fax"
                    name="fax"
                    control="input"
                    fontFamily="Graphik"
                    text="type"
                    label="Fax"
                    onChange={(val:any) => handleChange(val, 'fax', formik)}
                    isInvalid={Boolean(
                      formik.errors?.fax
                             && formik.touched?.fax,
                    )}
                  />
                </div>
                <div className="FormControl_column">
                  <FormControl
                    onBlur={formik.handleBlur}
                    id="emailAddress"
                    name="emailAddress"
                    control="input"
                    fontFamily="Graphik"
                    text="type"
                    label="Email Address"
                    onChange={(val:any) => handleChange(val, 'emailAddress', formik)}
                    isInvalid={Boolean(
                      formik.errors?.emailAddress
                             && formik.touched?.emailAddress,
                    )}
                  />
                </div>

                <div className="FormControl_column">
                  <FieldArray name="initial">
                    { (fieldarraysProps:any) => {
                      const { push, remove, form } = fieldarraysProps;
                      const { values } = form;
                      const { initial } = values;
                      return (
                        <div className="FormControl_column">
                          {initial?.map((val:any, index:any) => (
                            <div key={`address[${index + 1}]`}>
                              <FormControl
                                name={`address[${index}]`}
                                onBlur={formik.handleBlur}
                                fontFamily="Graphik"
                              />
                              <Button type="button" onClick={() => remove(index)}> sub</Button>
                              <Button type="button" onClick={() => push('')}> ADD </Button>

                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>

                <div className="FormControl_column">
                  {/* <div className={styles.chid} /> */}
                  <div className="FormControl_column">
                    <div className="FormControl_FooterButton">
                      <div style={{ margin: '9px', padding: '19px' }}>
                        <Button
                          variant={ButtonVariantsEnum.SECONDARY}
                          type="button"
                        >
                          Cancel

                        </Button>
                      </div>
                      <Button
                        testId="test-id"
                        type="submit"
                        size={ButtonSizesEnum.LARGE}
                        variant={ButtonVariantsEnum.PRIMARY}
                        // isDisabled={!formik.isValid}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Form>
        )}
      </Formik>
    </Card>

  );
}

export default KcpAddress;
