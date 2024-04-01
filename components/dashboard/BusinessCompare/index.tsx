import { Button, ButtonVariantsEnum } from '@genieology/gtb-ui';
import Image from 'next/image';
import BusinessAccount from '../../../public/icons/BusinessAccounts.svg';
import style from './BusinessCompare.module.css';

type Props = {
  sectionToDisplay: number[];
  back:any
};

function BusinessCompare({ sectionToDisplay = [0, 1, 2], back }: Props) {
  return (
    <div className={style.compareBox}>
      <table cellSpacing={0} style={{ width: '100%' }}>

        <tr>
          <th> </th>
          {sectionToDisplay?.includes(0) ? (
            <td>
              <div className={style.heading}>
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
            </td>
          ) : null}
          {sectionToDisplay?.includes(1) ? (
            <td>
              <div className={style.heading}>
                <Image
                  src={BusinessAccount}
                  alt="fab icon"
                  height="55px"
                  width="70px"
                />

                <span style={{ fontSize: '16px', fontWeight: '600' }}>
                  Business Advantage Account
                </span>
              </div>
            </td>
          ) : null}
          {sectionToDisplay?.includes(2) ? (
            <td>
              <div className={style.heading}>
                <Image
                  src={BusinessAccount}
                  alt="fab icon"
                  height="55px"
                  width="70px"
                />

                <span style={{ fontSize: '16px', fontWeight: '600' }}>
                  Business Preffered Account
                </span>
              </div>
            </td>
          ) : null}
        </tr>
        <tr>
          <th>Product</th>
          {sectionToDisplay?.includes(0) ? (
            <td>One account to cover all your basic needs</td>
          ) : null}
          {sectionToDisplay?.includes(1) ? (
            <td>One account to cover all your basic needs</td>
          ) : null}
          {sectionToDisplay?.includes(2) ? (
            <td>One account to cover all your basic needs</td>
          ) : null}
        </tr>
        <tr>
          <th>Overview</th>
          {sectionToDisplay?.includes(0) ? (
            <td className={style.pointer}>
              AED and multi-currency options (inc.USD,GBP,JPY,EUR)
            </td>
          ) : null}
          {sectionToDisplay?.includes(1) ? (
            <td className={style.pointer}>
              AED and multi-currency options (inc.USD,GBP,JPY,EUR)
            </td>
          ) : null}
          {sectionToDisplay?.includes(2) ? (
            <td className={style.pointer}>
              AED and multi-currency options (inc.USD,GBP,JPY,EUR)
            </td>
          ) : null}
        </tr>
        <tr>
          <th> </th>
          {sectionToDisplay?.includes(0) ? (
            <td className={style.pointer}>Reduced rates on banking services</td>
          ) : null}
          {sectionToDisplay?.includes(1) ? (
            <td className={style.pointer}>Reduced rates on banking services</td>
          ) : null}
          {sectionToDisplay?.includes(2) ? (
            <td className={style.pointer}>Reduced rates on banking services</td>
          ) : null}
        </tr>
        <tr>
          <th>Average Balance</th>
          {sectionToDisplay?.includes(0) ? (
            <td className={style.pointer}>AED 50,000 minimum average monthly balance</td>
          ) : null}
          {sectionToDisplay?.includes(1) ? (
            <td className={style.pointer}>AED 50,000 minimum average monthly balance</td>
          ) : null}
          {sectionToDisplay?.includes(2) ? (
            <td className={style.pointer}>AED 50,000 minimum average monthly balance</td>
          ) : null}
        </tr>
        <tr>
          <th>Transaction Limit</th>
          {sectionToDisplay?.includes(0) ? (
            <td className={style.pointer}>
              Free inward remittances for both local and foreign currencies
            </td>
          ) : null}
          {sectionToDisplay?.includes(1) ? (
            <td className={style.pointer}>
              Free inward remittances for both local and foreign currencies
            </td>
          ) : null}
          {sectionToDisplay?.includes(2) ? (
            <td className={style.pointer}>
              Free inward remittances for both local and foreign currencies
            </td>
          ) : null}
        </tr>
        <tr>
          <th>Special Benefits</th>
          {sectionToDisplay?.includes(0) ? (
            <td className={style.pointer}>
              Wide network of branches, ATMs and cash deposit machines across the UAE
            </td>
          ) : null}
          {sectionToDisplay?.includes(1) ? (
            <td className={style.pointer}>
              Wide network of branches, ATMs and cash deposit machines across the UAE
            </td>
          ) : null}
          {sectionToDisplay?.includes(2) ? (
            <td className={style.pointer}>
              Wide network of branches, ATMs and cash deposit machines across the UAE
            </td>
          ) : null}
        </tr>
        <tr>
          <th> </th>
          {sectionToDisplay?.includes(0) ? (<td><Button isBlock>Apply</Button></td>) : null}
          {sectionToDisplay?.includes(1) ? (<td><Button isBlock>Apply</Button></td>) : null}
          {sectionToDisplay?.includes(2) ? (<td><Button isBlock>Apply</Button></td>) : null}
        </tr>
      </table>
      <div style={{ marginRight: '1rem', marginTop: '2rem' }}>
        <Button
          variant={ButtonVariantsEnum.SECONDARY}
          type="button"
          onClick={() => back(false)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default BusinessCompare;
