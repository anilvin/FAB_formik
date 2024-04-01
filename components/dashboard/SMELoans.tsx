import Card from '@genieology/gtb-ui/dist/components/Card';
import Image from 'next/image';
import Button from '@genieology/gtb-ui/dist/components/Button';
import styles from './SmeLoan.module.css';
import getImage from '../../public/icons/GetImage.png';

type Props = {
  onApply:(val:string)=> void;
};
function SMELoans({ onApply }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.login_h1}>
        SME Business Accounts
      </h1>
      <h4 className={styles.login_below_h1_text}>
        Grow your business and achieve your corporate goals
        with our range of finance products and services specially designed for growing businesses.
      </h4>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1rem',
      }}
      >
        <div style={{ width: '22rem', marginTop: '1rem', marginRight: '1rem' }}>
          <Card style={{ backgroundColor: '#F5F9FF' }}>
            <div
              style={{
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Image
                src={getImage}
                alt="fab icon"
                height="60px"
                width="60px"
              />

              <span style={{ fontSize: '16px', fontWeight: '600', marginLeft: '1rem' }}>
                POS Loan
              </span>
            </div>
            <div
              style={{
                margin: '1rem',
                fontSize: '15px',
                color: '#4C4E54',
                fontWeight: 400,
                marginTop: '-2rem',
                padding: '1.5rem',
              }}
            >
              <h2>
                If you use credit card point-of-sale (POS)
                machines for daily business transaction you can
                maximise the value of your POS receivables to speed up your
                financing with a POS loan. Medium and long-term loans are available,
                giving you access to your cash quicker than ever

              </h2>
              <br />
              <h2>What are the benefits of a POS loan?</h2>
              <br />
              <ul>
                <li>High loan amount</li>
                <br />
                <li>Flexible duration and payment plans</li>
                <br />
                <li> Competitive interest rates</li>
                <br />
                <li>Easy and hassle free documentation</li>
                <br />
                <li>Quick turnaround time</li>
                <br />
                <h2>
                  Contact us today to learn how
                  a POS loan could help to fuel your
                  business ambitions
                </h2>
              </ul>
              <div style={{ padding: '1.3rem' }}>
                <Button isBlock onClick={() => onApply('POS')}>
                  Apply
                </Button>
              </div>
            </div>

          </Card>
        </div>
        <div style={{ width: '22rem', marginTop: '1rem' }}>
          <Card style={{ backgroundColor: '#F5F9FF' }}>
            <div
              style={{
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src={getImage}
                alt="fab icon"
                height="60px"
                width="60px"
              />

              <span style={{ fontSize: '16px', fontWeight: '600', marginLeft: '1rem' }}>
                MBBF Loan
              </span>
            </div>
            <div
              style={{
                margin: '1rem',
                fontSize: '15px',
                color: '#4C4E54',
                fontWeight: 400,
                marginTop: '-2rem',
                padding: '1.5rem',
              }}
            >
              <h2 style={{ marginBottom: '1.6rem' }}>
                Move up the property ladder with a flexible,
                commercial or residential mortgage loan for businesses
                and business owners.
                Take a step closer to your corporate and personal goals

              </h2>
              <br />
              <h2>What are the benefits of a commercial or residential mortgage loan with FAB?</h2>
              <br />
              <ul>
                <li>High loan amount</li>
                <br />
                <li>Flexible duration and payment plans</li>
                <br />
                <li> Competitive interest rates</li>
                <br />
                <li>Easy and hassle free documentation</li>
                <br />
                <li>Quick turnaround time</li>
                <br />
                <br />
              </ul>
              <br />
              <div style={{ padding: '1.3rem' }}>
                <br />
                <Button isBlock onClick={() => onApply('MBBF')}>
                  Apply
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
}

export default SMELoans;
