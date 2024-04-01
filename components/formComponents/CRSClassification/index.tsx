import {
  Button, ButtonSizesEnum, ButtonVariantsEnum, Card, DatepickerTypeEnum,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import { CRSClaasificationDataProps } from '../../businessProductForm/PropDataType';
import FormControl from '../../FormControl';
import validationSchema from './schema/CRscschema';

    type Props = {
      initialValues?: CRSClaasificationDataProps,
      onFormSubmit: (val:CRSClaasificationDataProps) => void,
    };

function CRSClassification({ initialValues, onFormSubmit }: Props) {
  const formdata = {
    crsClaasificationiOrderID: initialValues?.crsClaasificationiOrderID || '',
    crsEntityType: initialValues?.crsEntityType || '',
    crsDocumentType: initialValues?.crsDocumentType || '',
    crsDocumentSignedDate: initialValues?.crsDocumentSignedDate || '',
    crsDocumentReceivedDate: initialValues?.crsDocumentReceivedDate || '',
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
                        id="crsEntityType"
                        name="crsEntityType"
                        control="input"
                        fontFamily="Graphik"
                        type="text"
                        label="CRS Classification"
                        onChange={(val: any) => handleChange(val, 'crsEntityType', formik)}
                        isInvalid={Boolean(
                          formik.errors?.crsEntityType
                              && formik.touched?.crsEntityType,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        control="input"
                        id="crsDocumentType"
                        type="text"
                        name="crsDocumentType"
                        onBlur={formik.handleBlur}
                        fontFamily="Graphik"
                        label="CRS Classification Document Type"
                        onChange={(val: any) => handleChange(val, 'crsDocumentType', formik)}
                        isInvalid={Boolean(
                          formik.errors?.crsDocumentType
                              && formik.touched?.crsDocumentType,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="crsDocumentSignedDate"
                        control="date"
                        fontFamily="Graphik"
                        type={DatepickerTypeEnum.SINGLE}
                        label="CRS Classification Document Signed Date "
                        onChange={(val: any) => handleChange(val.startDate, 'crsDocumentSignedDate', formik)}
                        isInvalid={Boolean(
                          formik.errors?.crsDocumentSignedDate
                            && formik.touched?.crsDocumentSignedDate,
                        )}
                      />
                    </div>
                    <div className="FormControl_column">
                      <FormControl
                        onBlur={formik.handleBlur}
                        name="countryOfTax"
                        control="date"
                        fontFamily="Graphik"
                        type={DatepickerTypeEnum.SINGLE}
                        label="CRS Classification Document Received Date"
                        onChange={(val: any) => handleChange(val.startDate, 'countryOfTax', formik)}
                        isInvalid={Boolean(
                          formik.errors?.crsDocumentReceivedDate
                            && formik.touched?.crsDocumentSignedDate,
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

export default CRSClassification;
