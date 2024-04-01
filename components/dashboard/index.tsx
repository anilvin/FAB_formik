import Image from 'next/image';
import Icon, { IconEnum } from '@genieology/gtb-ui/dist/components/Icon';
import Card from '@genieology/gtb-ui/dist/components/Card';
import Button from '@genieology/gtb-ui/dist/components/Button';
import BusinessAccount from '../../public/icons/BusinessAccounts.svg';
import loans from '../../public/icons/Loans.svg';

type Props = {
  onProductClick:(val: string)=> void,
};

function Dashboard({ onProductClick }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '-1rem',
      }}
    >
      <div style={{ width: '33rem', marginTop: '1rem' }}>
        <Card style={{ backgroundColor: '#F5F9FF' }}>
          <div
            style={{
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src={BusinessAccount}
              alt="fab icon"
              height="55px"
              width="70px"
            />

            <span style={{ fontSize: '18px' }}>
              Business Accounts
            </span>
          </div>
          <div
            style={{
              margin: '1rem',
              fontSize: '14px',
              color: '#4C4E54',
              fontWeight: 400,
            }}
          >
            <p>
              FAB’s range of personalised business account
              solutions help you make the right decisions at the
              right time.
            </p>
          </div>
          <div style={{ padding: '1rem' }}>
            <Button onClick={() => onProductClick('businessForm')}>
              Apply
            </Button>
          </div>
        </Card>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '3rem',

            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginTop: '2rem', padding: '1rem' }}>
            <Card style={{ width: '14rem', padding: '2rem' }}>
              <div
                style={{
                  marginRight: '1rem',
                  borderRadius: '27.5px ',
                  backgroundColor: '#E8DAFF',
                  height: '55px',
                  width: '55px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  fill="purple"
                  name={IconEnum.HELP}
                  width={30}
                />
              </div>
              <h4
                style={{
                  paddingTop: '3rem',
                  color: '#2C2E2F',
                  fontWeight: 500,
                  fontFamily: 'graphik',
                  fontSize: '16px',
                }}
              >
                FAQs
              </h4>
            </Card>
          </div>
          {/* <div style={{ width: "5rem" }}></div> */}
          <div style={{ marginTop: '2rem', padding: '1rem' }}>
            {/* <Card style={{ width: '14rem', padding: '2rem' }}>
              <div
                style={{
                  marginRight: '1rem',
                  borderRadius: '27.5px ',
                  backgroundColor: '#E8DAFF',
                  height: '55px',
                  width: '55px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  fill="purple"
                  name={IconEnum.ACCOUNT}
                  width={30}
                />
              </div>
              <h4
                style={{
                  paddingTop: '3rem',
                  color: '#2C2E2F',
                  fontWeight: 500,
                  fontFamily: 'graphik',
                  fontSize: '16px',
                }}
              >
                Ask FABRIQUE
              </h4>
            </Card> */}
          </div>
          {/* <div style={{ width: "5rem" }}></div> */}
          <div style={{ marginTop: '2rem', padding: '1rem' }}>
            <Card style={{ width: '16rem', padding: '2rem' }}>
              <div
                style={{
                  marginRight: '1rem',
                  borderRadius: '27.5px ',
                  backgroundColor: '#E8DAFF',
                  height: '55px',
                  width: '55px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  fill="purple"
                  name={IconEnum.CALENDAR}
                  width={30}
                />
              </div>
              <h4
                style={{
                  paddingTop: '3rem',
                  color: '#2C2E2F',
                  fontWeight: 500,
                  fontFamily: 'graphik',
                  fontSize: '16px',
                }}
              >
                Request a Callback
              </h4>
            </Card>
          </div>
          {/* <div style={{ width: "4rem" }}></div> */}
          <div style={{ marginTop: '2rem', padding: '1rem' }}>
            <Card style={{ width: '14rem', padding: '2rem' }}>
              <div
                style={{
                  marginRight: '1rem',
                  borderRadius: '27.5px ',
                  backgroundColor: '#E8DAFF',
                  height: '55px',
                  width: '55px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  fill="purple"
                  name={IconEnum.PHONE}
                  width={30}
                />
              </div>
              <h4
                style={{
                  paddingTop: '3rem',
                  color: '#2C2E2F',
                  fontWeight: 500,
                  fontFamily: 'graphik',
                  fontSize: '16px',
                }}
              >
                Call Centre
              </h4>
            </Card>
          </div>
        </div>
      </div>

      <div style={{ width: '3rem' }} />
      <div style={{ width: '33rem', marginTop: '1rem' }}>
        <Card style={{ backgroundColor: '#F5F9FF' }}>
          <div
            style={{
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src={loans}
              alt="fab icon"
              height="55px"
              width="70px"
            />

            <span>SME Loans</span>
          </div>
          <div
            style={{
              margin: '1rem',
              fontSize: '14px',
              color: '#4C4E54',
              fontWeight: 400,
            }}
          >
            <p>
              Finance your business growth with a fixed monthly
              payment loan that suits your needs.
            </p>
          </div>
          <div style={{ padding: '1rem' }}>
            <Button onClick={() => onProductClick('SMEForm')}>
              Apply
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
