import {
  Button, ButtonSizesEnum, ButtonVariantsEnum, Card,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { AdditionalFATCADataProps } from '../../businessProductForm/PropDataType';
import FormControl from '../../FormControl';
import MasterContext from '../../MasterContext';
import validationSchema from './schema/AdditionaCrscheme';

      type Props = {
        initialValues?: AdditionalFATCADataProps,
        onFormSubmit: (val:AdditionalFATCADataProps) => void,
      };

function AdditionalCRSClassification({ initialValues, onFormSubmit }: Props) {
  const List = useContext(MasterContext.DropdownContext);
  const formdata = {
    crsClaasificationiOrderID: '',
    additionalFATCAiOrderID: '',
    fullnameOfUBO: initialValues?.fullnameOfUBO || '',
    isResidencyVisaValid: initialValues?.isResidencyVisaValid || '',
    uaeTaxResidency: initialValues?.uaeTaxResidency || '',
    isResidnetOfJurisdictions: initialValues?.isResidnetOfJurisdictions || '',
    jurisdictionsPersonalIncomeTax: initialValues?.jurisdictionsPersonalIncomeTax || '',
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
                        id="fullnameOfUBO"
                        name="fullnameOfUBO"
                        control="input"
                        fontFamily="Graphik"
                        label="Full Name of the UBO / Controlling Person"
                        onChange={(val: any) => handleChange(val, 'fullnameOfUBO', formik)}
                        isInvalid={Boolean(
                          formik.errors?.fullnameOfUBO
                                && formik.touched?.fullnameOfUBO,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        control="select"
                        id="isResidencyVisaValid"
                        name="isResidencyVisaValid"
                        list={List.YES_NO}
                        onBlur={formik.handleBlur}
                        fontFamily="Graphik"
                        label="Residency Visa valid for 5 years or more?"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'isResidencyVisaValid', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.isResidencyVisaValid
                                && formik.touched?.isResidencyVisaValid,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="uaeTaxResidency"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="Obtained UAE tax residency by investement scheme "
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'uaeTaxResidency', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.uaeTaxResidency
                              && formik.touched?.uaeTaxResidency,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="isResidnetOfJurisdictions"
                        control="select"
                        fontFamily="Graphik"
                        list={List.YES_NO}
                        label="Are you a resident in other Jurisdictions"
                        onChange={(val: string[]) => {
                          if (val?.length > 0) {
                            handleChange(val[0], 'isResidnetOfJurisdictions', formik);
                          }
                        }}
                        isInvalid={Boolean(
                          formik.errors?.isResidnetOfJurisdictions
                              && formik.touched?.isResidnetOfJurisdictions,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="jurisdictionsPersonalIncomeTax"
                        control="input"
                        fontFamily="Graphik"
                        type="text"
                        label="In which jurisdiction(s) have you been subject to personal income tax during the previous calendar year?"
                        onChange={(val: any) => handleChange(val, 'jurisdictionsPersonalIncomeTax', formik)}
                        isInvalid={Boolean(
                          formik.errors?.jurisdictionsPersonalIncomeTax
                              && formik.touched?.jurisdictionsPersonalIncomeTax,
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

export default AdditionalCRSClassification;
