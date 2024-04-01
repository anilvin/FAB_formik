import CustomDetailFormComponent from '../formComponents/CustomDetailFormComponent';
import ContactAddressFormComponent from '../formComponents/ContactAddressFormComponent';
import IdentityInfo from '../formComponents/IdentityInfoForm';
import {
  AboutYourCompanyDataProps,
  AddressDataSetProps,
  CustomerDetailProps, IdentityDataProps,
} from './PropDataType';
import Review from '../formComponents/ReviewAboutYourCompany';

type ReturnTypeProps = {
  data:IdentityDataProps | AddressDataSetProps | CustomerDetailProps,
  type: string,
};

type Props = {
  childIdx: number,
  initData?: AboutYourCompanyDataProps | any,
  onFormSubmit:(val:ReturnTypeProps) => void,
};
function AboutYourCompanyForm({ initData, childIdx, onFormSubmit }: Props) {
  const submitVal = (data:any, type:string) => {
    onFormSubmit({ data, type });
  };
  const returnForm = () => {
    switch (childIdx) {
      case 0:
        return (
          <CustomDetailFormComponent
            initialValues={initData?.customerDetail}
            onSubmit={(val) => submitVal(val, 'customerDetail')}
          />
        );
      case 1:
        return (
          <ContactAddressFormComponent
            initialValues={initData?.addressDetails?.address[0]}
            onSubmit={(val) => submitVal(val, 'addressDetails')}
          />
        );
      case 2:
        return (
          <IdentityInfo
            initialValues={initData?.identityDetails?.identity[0]}
            onFormSubmit={(val) => submitVal(val, 'identityDetails')}
          />
        );
      case 3:
        return (
          <Review initData={initData} />
        );

      default:
        return null;
    }
  };

  return (
    returnForm()
  );
}

export default AboutYourCompanyForm;
