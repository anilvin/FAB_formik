import Image from 'next/image';
import Icon, { IconEnum } from '@genieology/gtb-ui/dist/components/Icon';
import Card from '@genieology/gtb-ui/dist/components/Card';
import Button from '@genieology/gtb-ui/dist/components/Button';
import { Text } from '@genieology/gtb-ui';
import BusinessAccount from '../../../public/icons/BusinessAccounts.svg';

function SubmissionScreen() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <div style={{ paddingLeft: '33rem' }}>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Icon fill="#000000" name={IconEnum.SUCCESSOUTLINE} width={24} />
        </div>
      </div>
      <div style={{ paddingLeft: '19rem' }}>
        <Text color="blackGrey.200" family="gh" size="large" weight="semibold">
          Your pre-screening application has been
        </Text>
        <div style={{ paddingLeft: '5.2rem' }}>
          <Text
            color="blackGrey.200"
            family="gh"
            size="large"
            weight="semibold"
          >
            Successfully Submitted!
          </Text>
        </div>
      </div>
      <p style={{ paddingLeft: '13rem' }}>
        An Email confirmation has been to send to you. Once your application has
        been processed,
        {' '}
      </p>
      <p style={{ paddingLeft: '25rem' }}>
        you will recieve further communication.
      </p>
      <p style={{ paddingLeft: '29rem' }}>Ref: 478578738758</p>
      <div style={{ paddingLeft: '31rem', paddingTop: '2rem' }}>
        <Button>Close</Button>
      </div>
      <div
        style={
          {
            // paddingTop: '7rem'
          }
        }
      >
        <div style={{ padding: '1.5rem' }}>
          <strong>You may also be interested in this products</strong>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '-1rem',
            marginLeft: '-0.7rem',
          }}
        >
          <div style={{ width: '20rem', marginTop: '1rem' }}>
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
                <span style={{ fontSize: '18px' }}>Business Accounts</span>
              </div>
              <div
                style={{
                  margin: '1rem',
                  fontSize: '14px',
                  color: '#4C4E54',
                  fontWeight: 400,
                }}
              >
                <p>One account to cover all your Business banking Needs</p>
                <div
                  style={{
                    paddingTop: '1rem',
                    color: 'blue',
                    fontSize: '12px',
                  }}
                >
                  <strong> see more details</strong>
                </div>
              </div>
            </Card>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '3rem',
                justifyContent: 'space-between',
              }}
            />
          </div>
          <div style={{ width: '3rem' }} />
          <div style={{ width: '20rem', marginTop: '1rem' }}>
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
                  Business Advantage Accounts
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
                  Manage your Business with flexibility and ease, with
                  preferential rates and other privileges.
                </p>
                <div
                  style={{
                    padding: '0.2rem',
                    color: 'blue',
                    fontSize: '12px',
                  }}
                >
                  <strong> see more details</strong>
                </div>
              </div>
            </Card>
          </div>
          <div
            style={{ width: '20rem', marginTop: '1rem', marginLeft: '3rem' }}
          >
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
                  Business Preffered Accounts
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
                <p>A comperhensive primium account with exclusive pricing</p>
                <div
                  style={{
                    paddingTop: '1rem',
                    color: 'blue',
                    fontSize: '12px',
                  }}
                >
                  <strong> see more details</strong>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SubmissionScreen;
