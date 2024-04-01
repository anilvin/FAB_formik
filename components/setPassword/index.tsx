import { Card, FillEnum, Logo } from '@genieology/gtb-ui';
import React, { Dispatch, SetStateAction } from 'react';
import SetPassword from './SetPassowd';
import styles from '../../styles/setPassword.module.css';

type SetPasswordProps = {
  hasUserID: Boolean;
  firstName: string;
  lastName: string;
  userID: string;
  onSubmit: (val: any) => void;
  onCancel: Dispatch<SetStateAction<boolean>>;
};
function SetPasswordForm({
  hasUserID,
  onSubmit,
  onCancel,
  firstName,
  lastName,
  userID,
}: SetPasswordProps) {
  console.log(userID);

  return (
    <div>
      <div className={styles.container}>
        <Logo fill={FillEnum.WHITE} height={60} width={89} />
        <div className={styles.setPassword_logo_text}>Business Banking</div>
      </div>
      <div
        style={{
          display: 'flex',
          borderRadius: '2.5rem',
          marginLeft: '21.5rem',
          marginBottom: '5rem',
          marginRight: '2rem',
        }}
      >
        <Card style={{ height: '600px', marginTop: '-7rem' }} testId="example">
          <SetPassword
            hasUserID={hasUserID}
            onSubmit={onSubmit}
            onCancel={onCancel}
            firstName={firstName}
            lastName={lastName}
            userID={userID}
          />
        </Card>
      </div>
    </div>
  );
}
export default SetPasswordForm;
