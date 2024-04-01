import {
  Button, ButtonSizesEnum, ButtonVariantsEnum, Card,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { FATCADetailsDataProps } from '../../businessProductForm/PropDataType';
import FormControl from '../../FormControl';
import MasterContext from '../../MasterContext';
import validationSchema from './schema/FatcaClassification';

  type Props = {
    initialValues?: FATCADetailsDataProps,
    onFormSubmit:(val:FATCADetailsDataProps) => void,
  };

function FtacaClassification({ initialValues, onFormSubmit }: Props) {
  const List = useContext(MasterContext.DropdownContext);
  const formdata = {
    fatcaiOrderID: initialValues?.fatcaiOrderID || '',
    fatcataxIDtype: initialValues?.fatcataxIDtype || '',
    fatcataxIDnumber: initialValues?.fatcataxIDnumber || '',
    isTaxResidentOfOther: initialValues?.isTaxResidentOfOther || '',
    countryOfTax: initialValues?.countryOfTax || '',
    isReportable: initialValues?.isReportable || '',
    status: initialValues?.status || '',
    tinUnavailableReason: initialValues?.tinUnavailableReason || '',
    tinUnavailableRemarks: initialValues?.tinUnavailableRemarks || '',
    fatcaNationality: initialValues?.fatcaNationality || '',
    comments: initialValues?.comments || '',
  };
  const handleChange = (
    val: string | number | boolean,
    name: string,
    formik: any,
  ) => {
    formik.setFieldValue(name, val);
  };
  return (
    <div>
      <div className="boxWindows">
        <Card>
          <Formik
            initialValues={formdata}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
          >
            {(formik) => (
              <Form autoComplete="off">
                <Card>
                  <div className="FormControl_row">
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="fatcataxIDtype"
                        control="select"
                        fontFamily="Graphik"
                        list={List['TAX-ID-TYPE']}
                        label="Tax Identifier Type?"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'fatcataxIDtype', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.fatcataxIDtype
                            && formik.touched.fatcataxIDtype,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        control="input"
                        id="fatcataxIDnumber"
                        type="text"
                        name="fatcataxIDnumber"
                        onBlur={formik.handleBlur}
                        fontFamily="Graphik"
                        label="Tax Identification Number"
                        onChange={(val: any) => handleChange(val, 'fatcataxIDnumber', formik)}
                        isInvalid={Boolean(
                          formik.errors.fatcataxIDnumber
                            && formik.touched.fatcataxIDnumber,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="isTaxResidentOfOther"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="Is Tax Resident of Other Country "
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'isTaxResidentOfOther', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.isTaxResidentOfOther
                          && formik.touched?.isTaxResidentOfOther,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="countryOfTax"
                        control="select"
                        fontFamily="Graphik"
                        list={List['COUNTRY-MAST']}
                        label="Country of Tax Residency"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'countryOfTax', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.countryOfTax
                          && formik.touched?.countryOfTax,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="isReportable"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="Is Reportable"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'isReportable', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.isReportable
                          && formik.touched?.isReportable,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="status"
                        control="select"
                        fontFamily="Graphik"
                        list={List['FATCA-STATUS']}
                        label="FATCA Status"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'status', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.status
                          && formik.touched?.status,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="tinUnavailableRemarks"
                        type="text"
                        control="input"
                        name="tinUnavailableRemarks"
                        fontFamily="Graphik"
                        label="TIN Unavailable Remarks"
                        onChange={(val:string) => handleChange(val, 'tinUnavailableRemarks', formik)}
                        isInvalid={Boolean(
                          formik.errors?.tinUnavailableRemarks
                          && formik.touched?.tinUnavailableRemarks,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="tinUnavailableReason"
                        name="tinUnavailableReason"
                        control="select"
                        fontFamily="Graphik"
                        list={List['TIN-UNAVAILABLE-REASON']}
                        label="TIN Unavailable Reason"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'tinUnavailableReason', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.tinUnavailableReason
                          && formik.touched?.tinUnavailableReason,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="fatcaNationality"
                        control="select"
                        fontFamily="Graphik"
                        list={List['COUNTRY-MAST']}
                        label="Nationality"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'fatcaNationality', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.fatcaNationality
                          && formik.touched?.fatcaNationality,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="comments"
                        name="comments"
                        control="input"
                        fontFamily="Graphik"
                        label="Comments"
                        onChange={(val:any) => handleChange(val, 'comments', formik)}
                        isInvalid={Boolean(
                          formik.errors?.comments
                          && formik.touched?.comments,
                        )}
                      />
                    </div>

                    <div className="FormControl_column" />
                    {/* <div className="FormControl_column" /> */}
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
                          isDisabled={!formik.isValid}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>

                </Card>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
}

export default FtacaClassification;
