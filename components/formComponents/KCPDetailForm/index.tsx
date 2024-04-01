import { useContext } from 'react';
import {
  Button, ButtonSizesEnum, ButtonVariantsEnum, Card,
} from '@genieology/gtb-ui';
import { Form, Formik } from 'formik';
import FormControl from '../../FormControl';
import { KCPApplicantDataProps } from '../../businessProductForm/PropDataType';
import validationSchema from './Kycdetailes';
import MasterContext from '../../MasterContext';

type Props = {
  initialValues?:KCPApplicantDataProps,
  onFormSubmit:(val:KCPApplicantDataProps)=> void,
};
function KcpDetails({ initialValues, onFormSubmit }:Props) {
  const List = useContext(MasterContext.DropdownContext);
  const kcpdetailsform = {
    title: initialValues?.title || '',
    fullName: initialValues?.fullName || '',
    firstName: initialValues?.firstName || '',
    lastName: initialValues?.lastName || '',
    gender: initialValues?.gender || '',
    mothersMaidenName: initialValues?.mothersMaidenName || '',
    dateOfbirth: initialValues?.dateOfbirth || '',
    countryOfBirth: initialValues?.countryOfBirth || '',
    placeOfBirth: initialValues?.placeOfBirth || '',
    countryOfResidence: initialValues?.countryOfResidence || '',
    nationality_Citizenship: initialValues?.nationality_Citizenship || '',
    otherNationality: initialValues?.otherNationality || '',
    residentStatus: initialValues?.residentStatus || '',
    yearsOfResidenceinUae: initialValues?.yearsOfResidenceinUae || '',
    yearsInBusiness: initialValues?.yearsInBusiness || '',
    maritalStatus: initialValues?.maritalStatus || '',
    numberOfDependents: initialValues?.numberOfDependents || '',
    designation: initialValues?.designation || '',
  };
  // }
  const handleChange = (
    val: string | number | boolean,
    name: string,
    formik: any,
  ) => {
    formik.setFieldValue(name, val);
  };
  return (
    <>
      <Card>
        <Formik
          initialValues={kcpdetailsform}
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
                      name="title"
                      control="select"
                      fontFamily="Graphik"
                      list={List['ADDRESS-TYPE']} // < Changes Source
                      // list={titlelist}
                      label="Title"
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'title', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors?.title
                            && formik.touched.title,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      control="input"
                      id="fullName"
                      type="text"
                      name="fullName"
                      onBlur={formik.handleBlur}
                      fontFamily="Graphik"
                      label="Full Name"
                      onChange={(val: any) => handleChange(val, 'fullName', formik)}
                      isInvalid={Boolean(
                        formik.errors?.fullName
                            && formik.touched?.fullName,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      name="firstName"
                      control="input"
                      fontFamily="Graphik"
                      type="text"
                      label="First Name"
                      onChange={(val: any) => handleChange(val, 'firstName', formik)}
                      isInvalid={Boolean(
                        formik.errors?.firstName
                          && formik.touched?.firstName,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      name="lastName"
                      control="input"
                      fontFamily="Graphik"
                      label="Last Name"
                      onChange={(val: any) => handleChange(val, 'lastName', formik)}
                      isInvalid={Boolean(
                        formik.errors?.lastName
                          && formik.touched?.lastName,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      name="gender"
                      control="select"
                      fontFamily="Graphik"
                      // list={genderlist}
                      list={List['COUNTRY-MAST']} // << Correct Source need to mapped
                      label="Gender"
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'gender', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors?.gender
                          && formik.touched?.gender,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      name="mothersMaidenName"
                      control="input"
                      fontFamily="Graphik"
                      type="text"
                      label="Mothers MaidenName"
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'mothersMaidenName', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors?.mothersMaidenName
                          && formik.touched?.mothersMaidenName,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="testId"
                      control="date"
                      name="dateOfbirth"
                      dateFormat="MMMM d, yyyy"
                      fontFamily="Graphik"
                      label="Date of Birth"
                      onChange={(val:any) => handleChange(val.startDate, 'dateOfbirth', formik)}
                      isInvalid={Boolean(
                        formik.errors?.dateOfbirth
                          && formik.touched?.dateOfbirth,
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
                      label="Country Of Birth"
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'countryOfBirth', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors?.countryOfBirth
                          && formik.touched?.countryOfBirth,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="placeOfBirth"
                      name="placeOfBirth"
                      control="input"
                      fontFamily="Graphik"
                      type="text"
                      label="Place Of Birth"
                      onChange={(val:any) => handleChange(val, 'placeOfBirth', formik)}
                      isInvalid={Boolean(
                        formik.errors?.placeOfBirth
                          && formik.touched?.placeOfBirth,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      name="countryOfResidence"
                      control="select"
                      fontFamily="Graphik"
                      list={List['COUNTRY-MAST']}
                      label="Nationality"
                      onChange={(val: string[]) => {
                        if (val?.length > 0) {
                          handleChange(val[0], 'countryOfResidence', formik);
                        }
                      }}
                      isInvalid={Boolean(
                        formik.errors?.countryOfResidence
                          && formik.touched?.countryOfResidence,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="nationality_Citizenship"
                      name="nationality_Citizenship"
                      control="select"
                      fontFamily="Graphik"
                      list={List['COUNTRY-MAST']}
                      label="Nationality Citizenship"
                      onChange={(val:any) => handleChange(val, 'nationality_Citizenship', formik)}
                      isInvalid={Boolean(
                        formik.errors?.nationality_Citizenship
                          && formik.touched?.nationality_Citizenship,
                      )}
                    />
                  </div>

                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="otherNationality"
                      name="otherNationality"
                      control="select"
                      fontFamily="Graphik"
                      list={List['COUNTRY-MAST']} // << Correct Source need to mapped
                      label="Nationality Citizenship"
                      onChange={(val:any) => handleChange(val, 'otherNationality', formik)}
                      isInvalid={Boolean(
                        formik.errors?.otherNationality
                          && formik.touched?.otherNationality,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="residentStatus"
                      name="residentStatus"
                      control="select"
                      fontFamily="Graphik"
                      list={List['COUNTRY-MAST']} // << Correct Source need to mapped
                      label="Resident Status"
                      onChange={(val:any) => handleChange(val, 'residentStatus', formik)}
                      isInvalid={Boolean(
                        formik.errors?.residentStatus
                          && formik.touched?.residentStatus,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="yearsOfResidenceinUae"
                      name="yearsOfResidenceinUae"
                      control="input"
                      fontFamily="Graphik"
                      type="text"
                      label="Year of ResidenceinUAE"
                      onChange={(val:any) => handleChange(val, 'yearsOfResidenceinUae', formik)}
                      isInvalid={Boolean(
                        formik.errors?.yearsOfResidenceinUae
                          && formik.touched?.yearsOfResidenceinUae,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="yearsInBusiness"
                      name="yearsInBusiness"
                      control="input"
                      fontFamily="Graphik"
                      type="text"
                      label="Year In Business"
                      onChange={(val:any) => handleChange(val, 'yearsInBusiness', formik)}
                      isInvalid={Boolean(
                        formik.errors?.yearsInBusiness
                          && formik.touched?.yearsInBusiness,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="maritalStatus"
                      name="maritalStatus"
                      control="select"
                      fontFamily="Graphik"
                      // list={martiallist}
                      list={List['COUNTRY-MAST']} // << Correct Source need to mapped
                      label="Year In Business"
                      onChange={(val:any) => handleChange(val, 'yearsInBusiness', formik)}
                      isInvalid={Boolean(
                        formik.errors?.yearsInBusiness
                          && formik.touched?.yearsInBusiness,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="numberOfDependents"
                      name="numberOfDependents"
                      control="input"
                      fontFamily="Graphik"
                      text="type"
                      label="Number Of Dependents"
                      onChange={(val:any) => handleChange(val, 'numberOfDependents', formik)}
                      isInvalid={Boolean(
                        formik.errors?.numberOfDependents
                          && formik.touched?.numberOfDependents,
                      )}
                    />
                  </div>
                  <div className="FormControl_column">
                    <FormControl
                      onBlur={formik.handleBlur}
                      id="designation"
                      name="designation"
                      control="input"
                      fontFamily="Graphik"
                      text="type"
                      label="Designation"
                      onChange={(val:any) => handleChange(val, 'designation', formik)}
                      isInvalid={Boolean(
                        formik.errors?.designation
                          && formik.touched?.designation,
                      )}
                    />
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
                          isDisabled={!formik.isValid}
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
      {/* </div>
    </div> */}
    </>
  );
}

export default KcpDetails;
