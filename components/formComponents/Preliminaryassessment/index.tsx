import {
  Button, ButtonSizesEnum, ButtonVariantsEnum, Card,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { PreliminaryTaxAssesmentDataProps } from '../../businessProductForm/PropDataType';
import FormControl from '../../FormControl';
import MasterContext from '../../MasterContext';
import validationSchema from './schema/preliminaryassessmentschema';

type Props = {
  initialValues?: PreliminaryTaxAssesmentDataProps,
  onFormSubmit:(val:PreliminaryTaxAssesmentDataProps)=> void,
};

function Preliminar({ initialValues, onFormSubmit }: Props) {
  const List = useContext(MasterContext.DropdownContext);

  const formikInitialValues = {
    preliminaryTaxAssesmentiOrderID: initialValues?.preliminaryTaxAssesmentiOrderID || '',
    standingInstructionsToUS: initialValues?.standingInstructionsToUS || '',
    soleAddressofTheEntity: initialValues?.soleAddressofTheEntity || '',
    usTaxForm: initialValues?.usTaxForm || '',
    isUSResident: initialValues?.isUSResident || '',
    isUSCitizen: initialValues?.isUSCitizen || '',
    isGreenCardHolder: initialValues?.isGreenCardHolder || '',
    countryOfBirth: initialValues?.countryOfBirth || '',
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
            initialValues={formikInitialValues}
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
                        name="standingInstructionsToUS"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="Does the client have any standing instructions to the US?"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'standingInstructionsToUS', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors.standingInstructionsToUS
                          && formik.touched.standingInstructionsToUS,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="soleAddressofTheEntity"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="Does the client have an in case of/ Hold mail"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'soleAddressofTheEntity', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors.soleAddressofTheEntity
                          && formik.touched.soleAddressofTheEntity,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="usTaxForm"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="Do you have a US Tax Form from the client ?* "
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'usTaxForm', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors.usTaxForm && formik.touched.usTaxForm,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="isUSResident"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="US Resident ?*"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'isUSResident', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors.isUSResident && formik.touched.isUSResident,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="isUSCitizen"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="US Citizen ?*"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'isUSCitizen', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors.isUSCitizen && formik.touched.isUSCitizen,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="isGreenCardHolder"
                        name="isGreenCardHolder"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="US Green Card Holder ?*"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'isGreenCardHolder', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors.isGreenCardHolder && formik.touched.isGreenCardHolder,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        id="countryOfBirth"
                        name="countryOfBirth"
                        control="select"
                        fontFamily="Graphik"
                        list={List['COUNTRY-MAST']}
                        label="Country of Birth ?*"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'countryOfBirth', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors.countryOfBirth && formik.touched.countryOfBirth,
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

export default Preliminar;
