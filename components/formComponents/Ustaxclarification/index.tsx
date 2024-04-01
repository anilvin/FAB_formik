import {
  Button, ButtonSizesEnum, ButtonVariantsEnum, Card, DatepickerTypeEnum,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { UsTaxClaasificationDataProps } from '../../businessProductForm/PropDataType';
import FormControl from '../../FormControl';
import MasterContext from '../../MasterContext';
import validationSchema from './schema/UstaxClarificationSchema';

  type Props = {
    initialValues?: UsTaxClaasificationDataProps,
    onFormSubmit:(val:UsTaxClaasificationDataProps)=> void,
  };

function UsTaxclarification({ initialValues, onFormSubmit }: Props) {
  const List = useContext(MasterContext.DropdownContext);
  const formikInitialValues = {
    usTaxClaasificationiOrderID: initialValues?.usTaxClaasificationiOrderID || '',
    chapterThreeStatus: initialValues?.chapterThreeStatus || '',
    exemptionFromFATCA: initialValues?.exemptionFromFATCA || '',
    usTaxPersonStatus: initialValues?.usTaxPersonStatus || '',
    taxFormSignedDate: initialValues?.taxFormSignedDate || '',
    reportable: initialValues?.reportable || '',
    taxFormType: initialValues?.taxFormType || '',
    chapterFourStatus: initialValues?.chapterFourStatus || '',
    startupDate: initialValues?.startupDate || '',
    bankruptDate: initialValues?.bankruptDate || '',
    sponsoringEntity: initialValues?.sponsoringEntity || '',
    onshoreObligation: initialValues?.onshoreObligation || '',
    isDisregardedEntity: initialValues?.isDisregardedEntity || '',
    taxFormReceivedDate: initialValues?.taxFormReceivedDate || '',

  };

  const handleChange = (
    val: string | number | boolean | Date,
    name: string,
    formik: any,
  ) => {
    formik.setFieldValue(name, val);
  };

  return (
    <Formik
      initialValues={formikInitialValues}
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
                  name="chapterThreeStatus"
                  control="select"
                  fontFamily="Graphik"
                  list={List['CHAPTER4-FATCA-STATUS']}
                  label="Chapter 3 Status"
                  onChange={(val: string[]) => {
                    if (val?.length > 0) {
                      handleChange(val[0], 'chapterThreeStatus', formik);
                    }
                  }}
                  isInvalid={Boolean(
                    formik.errors.chapterThreeStatus
                          && formik.touched.chapterThreeStatus,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  name="exemptionFromFATCA"
                  control="select"
                  fontFamily="Graphik"
                  list={List['W9-FATCA']}
                  label="Form W-9 - Exemption from FATCA Reporting Code"
                  onChange={(val: string[]) => {
                    if (val?.length > 0) {
                      handleChange(val[0], 'exemptionFromFATCA', formik);
                    }
                  }}
                  isInvalid={Boolean(
                    formik.errors.exemptionFromFATCA
                          && formik.touched.exemptionFromFATCA,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  name="usTaxPersonStatus"
                  control="select"
                  fontFamily="Graphik"
                  list={List['US-TAX-PERSON-STATUS']}
                  label="US Tax Person Status"
                  onChange={(val: string[]) => {
                    if (val?.length > 0) {
                      handleChange(val[0], 'usTaxPersonStatus', formik);
                    }
                  }}
                  isInvalid={Boolean(
                    formik.errors.usTaxPersonStatus
                          && formik.touched.usTaxPersonStatus,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  key="taxFormSignedDate"
                  onBlur={formik.handleBlur}
                  id="taxFormSignedDate"
                  name="taxFormSignedDate"
                  control="date"
                  fontFamily="Graphik"
                  type={DatepickerTypeEnum.SINGLE}
                  label="Tax Form Signed Date"
                  startDate={
                    formik.values.taxFormSignedDate?.length > 0
                      ? new Date(formik.values.taxFormSignedDate) : null
                  }
                  onChange={(val:any) => handleChange(val.startDate.toUTCString(), 'taxFormSignedDate', formik)}
                  isInvalid={Boolean(
                    formik.errors.taxFormSignedDate
                          && formik.touched.taxFormSignedDate,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  name="reportable"
                  control="input"
                  fontFamily="Graphik"
                  type="text"
                  label="Reportable"
                  onChange={(val: any) => handleChange(val, 'reportable', formik)}
                  isInvalid={Boolean(
                    formik.errors.reportable
                          && formik.touched.reportable,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  id="taxFormType"
                  name="taxFormType"
                  control="select"
                  fontFamily="Graphik"
                  list={List['TAX-FORM-TYPE']}
                  label="Tax Form Type"
                  onChange={(val: string[]) => {
                    if (val?.length > 0) {
                      handleChange(val[0], 'taxFormType', formik);
                    }
                  }}
                  isInvalid={Boolean(
                    formik.errors.taxFormType
                          && formik.touched.taxFormType,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  name="chapterFourStatus"
                  control="input"
                  type="text"
                  fontFamily="Graphik"
                  label="Chapter 4 FATCA Status"
                  onChange={(val: any) => handleChange(val, 'chapterFourStatus', formik)}
                  isInvalid={Boolean(
                    formik.errors.chapterFourStatus
                          && formik.touched.chapterFourStatus,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  id="startupDate"
                  name="startupDate"
                  control="date"
                  key="startupDate"
                  fontFamily="Graphik"
                  type={DatepickerTypeEnum.SINGLE}
                  label="Startup Date"
                  onChange={(val: any) => handleChange(val.startDate, 'startupDate', formik)}
                  isInvalid={Boolean(
                    formik.errors.startupDate
                          && formik.touched.startupDate,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  id="bankruptDate"
                  name="bankruptDate"
                  key="bankruptDate"
                  control="date"
                  fontFamily="Graphik"
                  type={DatepickerTypeEnum.SINGLE}
                  label="Bankruptcy Date"
                  onChange={(val: any) => handleChange(val.startDate, 'bankruptDate', formik)}
                  isInvalid={Boolean(
                    formik.errors.bankruptDate
                          && formik.touched.bankruptDate,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  id="sponsoringEntity"
                  name="sponsoringEntity"
                  control="input"
                  type="text"
                  fontFamily="Graphik"
                  label="Name of Sponsoring Entity"
                  onChange={(val: any) => handleChange(val, 'sponsoringEntity', formik)}
                  isInvalid={Boolean(
                    formik.errors.sponsoringEntity
                          && formik.touched.sponsoringEntity,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  id="onshoreObligation"
                  name="onshoreObligation"
                  control="select"
                  fontFamily="Graphik"
                  list={List.YES_NO}
                  label="US Onshore Obligation"
                  onChange={(val: string[]) => {
                    if (val?.length > 0) {
                      handleChange(val[0], 'onshoreObligation', formik);
                    }
                  }}
                  isInvalid={Boolean(
                    formik.errors.onshoreObligation
                          && formik.touched.onshoreObligation,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  id="isDisregardedEntity"
                  name="isDisregardedEntity"
                  control="select"
                  fontFamily="Graphik"
                  list={List.YES_NO}
                  label="Is this entity a disregarded entity?"
                  onChange={(val: string[]) => {
                    if (val?.length > 0) {
                      handleChange(val[0], 'isDisregardedEntity', formik);
                    }
                  }}
                  isInvalid={Boolean(
                    formik.errors.isDisregardedEntity
                          && formik.touched.isDisregardedEntity,
                  )}
                />

              </div>
              <div className="FormControl_column">
                <FormControl
                  onBlur={formik.handleBlur}
                  id="taxFormReceivedDate"
                  key="taxFormReceivedDate"
                  name="taxFormReceivedDate"
                  control="date"
                  fontFamily="Graphik"
                  label="Tax Form Received Date"
                  onChange={(val: any) => handleChange(val, 'taxFormReceivedDate', formik)}
                  isInvalid={Boolean(
                    formik.errors?.taxFormReceivedDate
                          && formik.touched?.taxFormReceivedDate,
                  )}
                />

              </div>
              <div className="FormControl_column">
                {/* <div className="FormControl_column" /> */}
                <div className="FormControl_FooterButton">
                  <div style={{ margin: '9px', padding: '9px' }}>
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
  );
}

export default UsTaxclarification;
