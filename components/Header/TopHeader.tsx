import React, { useContext, useState } from 'react';
import { PrimaryHeader } from '@genieology/gtb-ui';
import { useRouter } from 'next/router';
import MasterContext from '../MasterContext';
import { auth } from '../../API';
import Auth from '../../API/init';
import Message from '../Message';
import useLoader from '../../hooks/useLoader';

type TopHeaderProps = {
  pageTitle: string;
  userDetails:any;
};

function TopHeader({ pageTitle, userDetails }: TopHeaderProps) {
  const [errorMsg, setErrorMsg] = useState('');
  const [MsgOpen, setMsgOpen] = useState(false);
  const router = useRouter();
  const User = useContext(MasterContext.UserContext);
  const [loader, startLoader, removeLoader] = useLoader();

  const logout = () => {
    startLoader();
    auth.logOut(userDetails?.userName).then(() => {
      console.log(User, 'user from header');
      User.setUser('');
      console.log(User, 'user from header');
      Auth.setToken('');
      removeLoader();
      router.push('./login');
    }).catch((err) => {
      console.log(err, 'err in logout');
      setErrorMsg('Error while doing Logout');
      removeLoader();
      setMsgOpen(true);
    });
  };

  const userName = userDetails?.userName || 'User name';
  const lastLoginTime = userDetails?.lastLoginTime || '25 September 2020, at 12:55pm GMT';
  // const [changeDefaultProfile, setChangeDefaultProfile] = React.useState(true);
  const i18n = {
    primaryHeaderAppName: pageTitle,
    primaryHeaderLastLogin: 'Last login: ',
    primaryHeaderLoginHistory: 'Login history',
    primaryHeaderMyProfiles: 'My Profiles',
    primaryHeaderUserId: 'User Name: ',
    defaultProfileModalTitle: 'Default Profile ',
    defaultProfileModalDescription:
      ' Your default profile will be reflected on your dashboard automatically after login',
    defaultProfileModalButtonText: 'Set as default profile 45454',
    profileListManageProfileButtonText: 'Default Profile ',
    profileListChangeButtonText: 'Default Profile ',
    profileListDefaultMakerText: 'Default Profile ',
    profileListSwitchText: 'Default Profile ',
  };
  return (
    <div
      style={{
        top: '0px', width: '100%', zIndex: '99999', position: 'fixed',
      }}
    >
      {loader}
      { MsgOpen
      && <Message setOpen={setMsgOpen} message={errorMsg} />}
      <PrimaryHeader
        onClickAvatar={() => null}
        avatarText="DK"
        // companyName="056267xxxx"
        i18n={i18n}
        lastLogin={lastLoginTime}
        onClickLogout={logout}
        testId="primary-header"
        userId={userName}
      />
    </div>
  );
}

export default TopHeader;
