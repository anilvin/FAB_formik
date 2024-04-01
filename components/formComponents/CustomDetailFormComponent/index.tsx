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
import { CustomerDetailProps } from '../../businessProductForm/PropDataType';
// import CustomerInfoSchema from './customerInfoSchema';
import MasterContext from '../../MasterContext';

type Props = {
  initialValues?:CustomerDetailProps,
  onSubmit:(val:CustomerDetailProps) => void,
};

function CustomerInfo({ initialValues, onSubmit }: Props) {
  const List = useContext(MasterContext.DropdownContext);

  const formValue = {
    customeriOrderId: initialValues?.customeriOrderId || '',
    legal_entity_name: initialValues?.legal_entity_name || '',
    short_name: initialValues?.short_name || '',
    group_name: initialValues?.group_name || '',
    country_of_incorporation: initialValues?.country_of_incorporation || '',
    country_of_domiciles: initialValues?.country_of_domiciles || '',
    business_operation: initialValues?.business_operation || '',
    date_of_incorporation: initialValues?.date_of_incorporation || '',
    website_address: initialValues?.website_address || '',
    emirate_of_registration: initialValues?.emirate_of_registration || '',
    registration_of_authority: initialValues?.registration_of_authority || '',
    registration_authority_name: initialValues?.registration_authority_name || '',
    legal_entity_type: initialValues?.legal_entity_type || '',
    legal_entity_category: initialValues?.legal_entity_category || '',
    vat: initialValues?.vat || '',
    primary_industry: initialValues?.primary_industry || '',
    secondary_industry: initialValues?.secondary_industry || '',
    sector: initialValues?.sector || '',
    business_details_description: initialValues?.business_details_description || '',
    number_of_employes: initialValues?.number_of_employes || '',
    current_company_turnoer: initialValues?.current_company_turnoer || '',
    projected_company_turnover: initialValues?.projected_company_turnover || '',
    AuthorizedCapital: initialValues?.AuthorizedCapital || '',
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
            Customer Information
          </Text>
        </div>
        <Formik
          initialValues={formValue}
          // validationSchema={CustomerInfoSchema}
          // validateOnChange={false}
          // validateOnMount={false}
          validateOnBlur
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <div className={styles.gridContainer}>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'legal_entity_name', formik);
                    }}
                    label="LegalEntityName*"
                    name="legal_entity_name"
                    isInvalid={Boolean(
                      formik.errors.legal_entity_name
                          && formik.touched.legal_entity_name,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'short_name', formik);
                    }}
                    label="ShortName*"
                    name="short_name"
                    isInvalid={Boolean(
                      formik.errors.short_name && formik.touched.short_name,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    onChange={(val: string) => {
                      handleChange(val, 'group_name', formik);
                    }}
                    label="GroupName*"
                    name="group_name"
                    isInvalid={Boolean(
                      formik.errors.group_name && formik.touched.group_name,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'country_of_incorporation', formik);
                      }
                    }}
                    width="100%"
                    label="Country Of Incorporation*"
                    name="country_of_incorporation"
                    list={List['COUNTRY-MAST']}
                    isInvalid={Boolean(
                      formik.errors.country_of_incorporation
                          && formik.touched.country_of_incorporation,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'country_of_domiciles', formik);
                      }
                    }}
                    label="Country Of Domicile*"
                    name="country_of_domiciles"
                    list={List['COUNTRY-MAST']}
                    isInvalid={Boolean(
                      formik.errors.country_of_domiciles
                          && formik.touched.country_of_domiciles,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(
                          val[0],
                          'business_operation',
                          formik,
                        );
                      }
                    }}
                    label="Countries Of Business Operations*"
                    multiChoice
                    hasSelectAll
                    name="business_operation"
                    list={List['COUNTRY-MAST']}
                    isInvalid={Boolean(
                      formik.errors.business_operation
                          && formik.touched.business_operation,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    key="date_of_incorporation"
                    onBlur={formik.handleBlur}
                    id="date_of_incorporation"
                    name="date_of_incorporation"
                    control="date"
                    maxBookingDate={new Date()}
                    fontFamily="Graphik"
                    type={DatepickerTypeEnum.SINGLE}
                    label="Date Of Incorporation"
                    startDate={
                    formik.values.date_of_incorporation?.length > 0
                      ? new Date(formik.values.date_of_incorporation) : null
                  }
                    onChange={(val:any) => {
                      handleChange(val.startDate.toISOString(), 'date_of_incorporation', formik, true);
                    }}
                    isInvalid={Boolean(
                      formik.errors.date_of_incorporation
                          && formik.touched.date_of_incorporation,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Website Address"
                    name="website_address"
                    onChange={(val: string) => handleChange(val, 'website_address', formik)}
                    isInvalid={Boolean(
                      formik.errors.website_address
                          && formik.touched.website_address,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    type="text"
                      // disabled={formik.values.country_of_incorporation
                        // !== 'AE'}
                    fontFamily="Graphik"
                    label="Emirate Of Registration"
                    name="emirate_of_registration"
                    list={List['EMIRATES-REG']}
                    validateOnChange
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'emirate_of_registration', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors.emirate_of_registration
                          && formik.touched.emirate_of_registration,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                      // disabled={formik.values.emirate_of_registration?.length === 0}
                    type="text"
                    fontFamily="Graphik"
                    label="Registration Authority"
                    name="registration_of_authority"
                    list={List['REGISTRATION-AUTHORITY']}
                    validateOnChange
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'registration_of_authority', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors.registration_of_authority
                          && formik.touched.registration_of_authority,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Registration Authority Name(if Others)"
                    name="registration_authority_name"
                    onChange={(val: string) => handleChange(val, 'registration_authority_name', formik)}
                    isInvalid={Boolean(
                      formik.errors.registration_authority_name
                          && formik.touched.registration_authority_name,
                    )}
                  />
                </div>

                <div>
                  <FormControl
                    control="select"
                    type="text"
                    fontFamily="Graphik"
                    label="Legal Entity Type"
                    name="legal_entity_type"
                    validateOnChange
                    list={List['COMP-LEG-ENT-TYP']}
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'legal_entity_type', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors.legal_entity_type
                          && formik.touched.legal_entity_type,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                      // disabled={formik?.values?.legal_entity_type?.length === 0}
                    control="select"
                    type="text"
                    fontFamily="Graphik"
                    label="Legal Entity Category"
                    name="legal_entity_category"
                    list={List['LEG-ENT-CAT']}
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'legal_entity_category', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors.legal_entity_category
                            && formik.touched.legal_entity_category,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    type="text"
                    label="Vat Number"
                    name="vat"
                    onChange={(val: string) => handleChange(val, 'vat', formik)}
                    isInvalid={Boolean(
                      formik.errors.vat && formik.touched.vat,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    label="Primary Industry"
                    name="primary_industry"
                    list={List['PRI-SEC-INDUSTY']}
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'primary_industry', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors.primary_industry
                        && formik.touched.primary_industry,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    label="Secondary Industry"
                    name="secondary_industry"
                    list={List['PRI-SEC-INDUSTY']}
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'secondary_industry', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors.secondary_industry
                          && formik.touched.secondary_industry,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="select"
                    label="Sector"
                    name="sector"
                    list={List['SECTOR-MAST']}
                    onChange={(val: string[]) => {
                      if (val?.length > 0) {
                        handleChange(val[0], 'sector', formik);
                      }
                    }}
                    isInvalid={Boolean(
                      formik.errors.sector && formik.touched.sector,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Business Details Description"
                    name="business_details_description"
                    onChange={(val: string) => handleChange(val, 'business_details_description', formik)}
                    isInvalid={Boolean(
                      formik.errors.business_details_description
                          && formik.touched.business_details_description,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="NumberOfEmployees"
                    name="number_of_employes"
                    onChange={(val: string) => handleChange(val, 'number_of_employes', formik)}
                    isInvalid={Boolean(
                      formik.errors.number_of_employes
                          && formik.touched.number_of_employes,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Current Company Turnover"
                    name="current_company_turnoer"
                    onChange={(val: string) => handleChange(val, 'current_company_turnoer', formik)}
                    isInvalid={Boolean(
                      formik.errors.current_company_turnoer
                          && formik.touched.current_company_turnoer,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Projected Company Turnover"
                    name="projected_company_turnover"
                    onChange={(val: string) => handleChange(val, 'projected_company_turnover', formik)}
                    isInvalid={Boolean(
                      formik.errors.projected_company_turnover
                          && formik.touched.projected_company_turnover,
                    )}
                  />
                </div>
                <div>
                  <FormControl
                    control="input"
                    label="Authorized Capital"
                    name="AuthorizedCapital"
                    onChange={(val: string) => handleChange(val, 'AuthorizedCapital', formik)}
                    isInvalid={Boolean(
                      formik.errors.AuthorizedCapital
                      && formik.touched.AuthorizedCapital,
                    )}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '8rem',
                  marginLeft: '38rem',
                }}
              >
                <div style={{ marginRight: '1rem' }}>
                  <Button variant={ButtonVariantsEnum.SECONDARY} type="button">
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button isDisabled={!formik.isValid} type="submit">Next</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default CustomerInfo;
