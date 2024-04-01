import Card from '@genieology/gtb-ui/dist/components/Card';
import Image from 'next/image';
import Button, {
  ButtonVariantsEnum,
} from '@genieology/gtb-ui/dist/components/Button';
import TextLink from '@genieology/gtb-ui/dist/components/TextLink';
import SidePanel from '@genieology/gtb-ui/dist/components/SidePanel';
import { useState } from 'react';
import Checkbox from '@genieology/gtb-ui/dist/components/Checkbox';
import styles from './SmeLoan.module.css';

import BusinessAccount from '../../public/icons/BusinessAccounts.svg';
import AdvantageAccount from './SidePanel/AdvantageAccount';
import BasicAccount from './SidePanel/BasicAccount';
import PreferredAccount from './SidePanel/PreferredAccount';
import BusinessCompare from './BusinessCompare';

type Props = {
  onApply:(val:string)=> void;
};

function SMEBussinessAccounts({ onApply }: Props) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [compareButton, setCompareButton] = useState(false);
  const [showData, setShowData] = useState<any>([]);
  const toggleCheck = [
    {
      id: 0,
      displayName: 'Business Basic Accounts',
    },
    {
      id: 1,
      displayName: 'Business Advantage Accounts',
    },
    {
      id: 2,
      displayName: 'Business Preferred Accounts',
    },
  ];

  const compareArray = (obj:any) => {
    if (showData?.length > 0) {
      const index = showData?.findIndex((tmp:any) => tmp.id === obj.id);
      if (index > -1) {
        const temp = [...showData];
        temp.splice(index, 1);
        setShowData(temp);
      } else {
        setShowData((oldItem: any) => [...oldItem, obj]);
      }
    } else {
      setShowData([obj]);
    }
  };
  const onChangeSidePanel1 = () => {
    setOpen(true);
  };
  const onChangeSidePanel2 = () => {
    setOpen1(true);
  };
  const onChangeSidePanel3 = () => {
    setOpen2(true);
  };
  const onCloseControlSidePanel = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  };

  const onChangeCompareButton = () => {
    setCompareButton(true);
  };
  const clearCompare = () => {
    setShowData([]);
  };
  return !compareButton ? (
    <div className={styles.container}>
      <h1 className={styles.login_h1}>SME Business Accounts</h1>
      <h4 className={styles.login_below_h1_text}>
        Grow your business and achieve your corporate goals with our range of
        finance products and services specially designed for growing businesses.
      </h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '1rem',
        }}
      >
        <div style={{ marginTop: '1rem', marginRight: '1rem' }}>
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
                src={BusinessAccount}
                alt="fab icon"
                height="55px"
                width="70px"
              />

              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                Business Basic Account
              </span>
            </div>
            <div
              style={{
                margin: '1rem',
                fontSize: '14px',
                color: '#4C4E54',
                fontWeight: 400,
                marginTop: '-2rem',
                padding: '2rem',
              }}
            >
              <h2>One account to cover all your basic banking needs.</h2>
              <br />
              <ul>
                <li>AED and multi-currency options (inc.USD,GBP,JPY,EUR)</li>
                <br />
                <li>Reduced rates on banking services</li>
                <br />
                <li>AED 50,000 minimum average monthly balance</li>
              </ul>
            </div>
            <div style={{ padding: '1rem' }}>
              <Button isBlock onClick={() => onApply('MBBF-BASIC_ACCOUNT')}>Apply</Button>
            </div>
            <div className={styles.login_textlink}>
              <TextLink testId="test-id" onClick={onChangeSidePanel1}>
                See Full Details
              </TextLink>
              <SidePanel
                contentRef={{
                  current: '[Circular]',
                }}
                isOpen={open}
                onCloseControl={onCloseControlSidePanel}
                data={{
                  defaultData: {
                    title: 'Business Basic Account',
                    body: <BasicAccount onApply={() => onApply('MBBF-BASIC_ACCOUNT')} />,
                  },
                }}
              />
            </div>
          </Card>
        </div>
        <div style={{ marginTop: '1rem', marginRight: '1rem' }}>
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

              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                Business Advantage Accounts
              </span>
            </div>
            <div
              style={{
                margin: '1rem',
                fontSize: '14px',
                color: '#4C4E54',
                fontWeight: 400,
                marginTop: '-2rem',
                padding: '2rem',
              }}
            >
              <h2>One account to cover all your basic banking needs.</h2>
              <br />
              <ul>
                <li>AED and multi-currency options (inc.USD,GBP,JPY,EUR)</li>
                <br />
                <li>Reduced rates on banking services</li>
                <br />
                <li>AED 50,000 minimum average monthly balance</li>
              </ul>
            </div>
            <div style={{ padding: '1rem' }}>
              <Button isBlock onClick={() => onApply('MBBF-ADVANTAGE ACCOUNT')}>Apply</Button>
            </div>
            <div className={styles.login_textlink}>
              <TextLink testId="test-id" onClick={onChangeSidePanel2}>
                See Full Details
              </TextLink>
              <SidePanel
                contentRef={{
                  current: '[Circular]',
                }}
                data={{
                  defaultData: {
                    title: 'Business Advantage Accounts',
                    body: <AdvantageAccount onApply={() => onApply('MBBF-ADVANTAGE ACCOUNT')} />,
                  },
                }}
                isOpen={open1}
                onCloseControl={onCloseControlSidePanel}
              />
            </div>
          </Card>
        </div>
        <div style={{ marginTop: '1rem' }}>
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

              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                Business Preferred Account
              </span>
            </div>
            <div
              style={{
                margin: '1rem',
                fontSize: '14px',
                color: '#4C4E54',
                fontWeight: 400,
                marginTop: '-2rem',
                padding: '2rem',
              }}
            >
              <h2>One account to cover all your basic banking needs.</h2>
              <br />
              <ul>
                <li>AED and multi-currency options (inc.USD,GBP,JPY,EUR)</li>
                <br />
                <li>Reduced rates on banking services</li>
                <br />
                <li>AED 50,000 minimum average monthly balance</li>
              </ul>
            </div>
            <div style={{ padding: '1rem' }}>
              <Button isBlock onClick={() => onApply('MBBF-PREFERRED ACCOUNT')}>Apply</Button>
            </div>
            <div className={styles.login_textlink}>
              <TextLink testId="test-id" onClick={onChangeSidePanel3}>
                See Full Details
              </TextLink>
              <SidePanel
                contentRef={{
                  current: '[Circular]',
                }}
                data={{
                  defaultData: {
                    title: 'Business Preferred Account',
                    body: <PreferredAccount onApply={() => onApply('MBBF-PREFERRED ACCOUNT')} />,
                  },
                }}
                isOpen={open2}
                onCloseControl={onCloseControlSidePanel}
              />
            </div>
          </Card>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '3.5rem',
          marginRight: '16rem',
        }}
      >
        {toggleCheck.map((obj) => (
          <Checkbox
            id={String(obj.id)}
            key={String(obj.id)}
            isChecked={showData?.findIndex((tmp:any) => tmp.id === obj.id) > -1}
            name={obj.displayName}
            onChange={() => compareArray(obj)}
          >
            Compare
          </Checkbox>
        ))}
      </div>
      {showData.length > 1 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '7rem',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginRight: '2rem',
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            {showData?.map((obj: any) => (

              <h4 style={{ marginRight: ' 1rem', marginLeft: '0.5rem' }}>
                {obj.displayName}
              </h4>
            ))}
          </div>
          <div style={{ marginRight: '1rem' }}>
            <Button variant={ButtonVariantsEnum.SECONDARY} type="button" onClick={clearCompare}>
              Cancel
            </Button>
          </div>
          <div>
            <Button onClick={onChangeCompareButton}>Compare Products</Button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div>
      <BusinessCompare
        sectionToDisplay={showData?.map((obj:any) => obj.id)}
        back={setCompareButton}
      />
    </div>
  );
}

export default SMEBussinessAccounts;
