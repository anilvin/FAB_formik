import React from 'react';
import SetPasswordForm from '../components/setPassword';

function SetYourPassword() {
  return (
    <SetPasswordForm
      hasUserID
      onSubmit={async () => null}
      onCancel={() => 'Cancel'}
      firstName=""
      lastName=""
      userID=""
    />
  );
}

export default SetYourPassword;
