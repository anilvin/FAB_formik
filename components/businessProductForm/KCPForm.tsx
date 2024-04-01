import { AddressDataSetProps, KCPAppDetailDataProps, KCPApplicantDataProps } from './PropDataType';
import KcpDetails from '../formComponents/KCPDetailForm';
// import KcpAddress from '../formComponents/KCPAddressDetailForm';

type Props = {
  childIdx: number,
  initData?: KCPAppDetailDataProps,
  onFormSubmit:(val: AddressDataSetProps | KCPApplicantDataProps) => void,
};
function KCPForm({ childIdx, onFormSubmit }: Props) {
  const returnForm = () => {
    switch (childIdx) {
      case 0:
        return <KcpDetails onFormSubmit={onFormSubmit} />;
      // case 1:
      //   return <KcpAddress onFormSubmit={onFormSubmit} />;
      default:
        return null;
    }
  };

  return (
    returnForm()
  );
}

export default KCPForm;
