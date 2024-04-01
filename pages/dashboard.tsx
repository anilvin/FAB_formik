import { useState, useEffect, useContext } from 'react';

import useLoader from '../hooks/useLoader';
import {
  master, init, auth,
} from '../API';
import Message from '../components/Message';
import MasterContext from '../components/MasterContext';
import DashboardPageComponent from '../components/DashboardPageComponent';

function DashboardPage() {
  const [m2, setm2] = useState<any>('');
  const [m3, setm3] = useState<any>('');
  const [tempUser, setTempUser] = useState();
  const [userDetail, setUserDetail] = useState({});
  const [dropDownData, setDropDownData] = useState({});
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [messageContent, setMessageContent] = useState<string>('');
  const [loader, startLoader, removeLoader] = useLoader();
  const { DropdownContext, UserContext } = MasterContext;
  const userFromLogin = useContext(UserContext);

  useEffect(() => {
    console.log('userfromLogin', userFromLogin);
    init.setSop('ASTA');
    startLoader();
    auth.fetchUserDetails(userFromLogin?.user?.userName || 'sanjay11')
      .then((res) => {
        setTempUser(res);
        removeLoader();
      })
      .catch((err) => {
        setMessageContent(err?.data?.mdmResponse?.output);
        setOpenMessage(true);
        removeLoader();
      });

    master.masterApi1(userFromLogin?.user?.userName || 'sanjay11')
      .then((res) => {
        setm2(res);
        removeLoader();
      })
      .catch((err) => {
        setMessageContent(err?.data?.mdmResponse?.output);
        setOpenMessage(true);
        removeLoader();
      });
    master.masterApi2(userFromLogin?.user?.userName || 'sanjay11')
      .then((res) => { setm3(res); removeLoader(); })
      .catch((err) => {
        setMessageContent(err?.data?.mdmResponse?.output);
        setOpenMessage(true);
        removeLoader();
      });
  }, []);

  useEffect(() => {
    if (m3 !== '') {
      const m3Obj = m3?.mdmResponse?.output?.records;
      const m3dataKeys = Object.keys(m3Obj);
      const m3Lists = m3dataKeys.map((x:string) => ({
        [x]: m3Obj[x].map((y:any, index:number) => ({
          id: index,
          title: y.DESCRIPTIONS,
          value: y.CODE,
        })),
      }));
      const a2 = m3Lists.map((x) => Object.entries(x)).flat();
      const o = Object.fromEntries(a2);
      setDropDownData({ ...dropDownData, ...o });
    }
  }, [m3]);

  useEffect(() => {
    if (tempUser) {
      setUserDetail(tempUser);
    }
  }, [tempUser]);

  useEffect(() => {
    if (m2 !== '') {
      const m2Obj = m2?.mdmResponse?.output?.records;
      const m2dataKeys = Object.keys(m2Obj);
      const m2Lists = m2dataKeys.map((x:string) => ({
        [x]: m2Obj[x].map((y:any, index:number) => ({
          id: index,
          title: y.DESCRIPTIONS,
          value: y.CODE,
        })),
      }));
      const a2 = m2Lists.map((x) => Object.entries(x)).flat();
      const o = Object.fromEntries(a2);
      setDropDownData({ ...dropDownData, ...o });
    }
  }, [m2]);

  return (
    <DropdownContext.Provider value={dropDownData}>
      <UserContext.Provider value={userDetail}>
        {loader}
        {openMessage && <Message setOpen={setOpenMessage} message={messageContent} />}
        <DashboardPageComponent />
      </UserContext.Provider>
    </DropdownContext.Provider>

  );
}
export default DashboardPage;
