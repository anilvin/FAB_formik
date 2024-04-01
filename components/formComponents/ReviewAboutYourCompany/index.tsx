import {
  Accordion, AccordionSizeEnum, AccordionVariantEnum, Text,
} from '@genieology/gtb-ui';
import { AboutYourCompanyDataProps } from '../../businessProductForm/PropDataType';
import ContactAddress from './ContactAddress';
import CustomerDetail from './CustomerDetail';
import IdentityDetail from './IdentityDetail';

type Props = {
  initData: AboutYourCompanyDataProps
};

function Review({ initData }: Props) {
//   const dataObj = props.location.state;
  return (
    <div style={{ display: 'block', width: '50vw' }}>
      <div style={{ paddingBottom: '2rem' }}>
        <Text
          color="blackGrey.200"
          family="gh"
          size="large"
          weight="semibold"
        >
          Review
        </Text>
      </div>
      <Accordion
        allowMultiple
        allowToggle
        data={[
          {
            content: <CustomerDetail initVal={initData?.customerDetail} />,
            id: 1,
            title: 'Customer Information ',

          },
          {
            content: <ContactAddress initVal={initData?.addressDetails?.address[0]} />,
            id: 2,
            title: 'Contact And Address Information',
          },
          {
            content: <IdentityDetail initVal={initData?.identityDetails?.identity[0]} />,
            id: 3,
            title: 'Identity Details',
          },
        ]}
        onChange={(v: any) => console.log(v)}
        size={AccordionSizeEnum.TALL}
        variant={AccordionVariantEnum.DEFAULT}
      />

    </div>
  );
}
export default Review;
