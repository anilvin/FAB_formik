import { Button, List, ListTypesEnum } from '@genieology/gtb-ui';

type Props = {
  onApply:()=>void;
};
function BasicAccount({ onApply }: Props) {
  return (
    <>
      <div
        style={{
          margin: '1rem',
          fontSize: '14px',
          color: '#4C4E54',
          fontWeight: 400,
          marginTop: '0rem',
        }}
      >
        <List
          style={{ justifyContent: 'space-between' }}
          list={[
            {
              subList: [
                {
                  text: 'AED and multi-currency options (inc.USD,GBP,JPY,EUR)',
                },
                {
                  text: 'Reduced rates on banking services',
                },
                {
                  text: 'AED 50,000 minimum average monthly balance',
                },
                {
                  text: 'Free inward remittances for both local and foreign currencies',
                },
                {
                  text: 'Wide network of branches,ATMs and cash deposit machines across the UAE',
                },
              ],
              text: ' One account to cover all your basic banking needs.',
            },
          ]}
          testId="example"
          type={ListTypesEnum.UNORDERED}
        />
      </div>
      <div style={{ padding: '1rem', marginTop: '7rem' }}>
        <Button isBlock onClick={onApply}>
          Open Business Basic Account
        </Button>
      </div>

    </>
  );
}
export default BasicAccount;
