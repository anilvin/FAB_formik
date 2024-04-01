/* eslint-disable react/jsx-no-constructed-context-values */
import '../styles/globals.css';
import { ThemeProvider } from '@genieology/gtb-ui';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect, useState } from 'react';
import FooterNav from '../components/footer/FooterNav';
import CustomHeader from '../components/Header/CustomHeader';
import master from '../API/master';
import MasterContext from '../components/MasterContext';
import useLoader from '../hooks/useLoader';
import Message from '../components/Message';
import TopHeader from '../components/Header/TopHeader';

function MyApp({ Component, pageProps }: AppProps) {
  const [md3, setMd3] = useState<any>('');
  const [user, setUser] = useState<any>('');
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [messageContent, setMessageContent] = useState<string>('');
  const [loader, startLoader, removeLoader] = useLoader();
  const { RmdContext, UserContext } = MasterContext;

  useEffect(() => {
    startLoader();
    master.masterApi3('56C2A259C2AF3B', '761AC28A63C2B1')
      .then((res) => { setMd3(res); removeLoader(); })
      .catch((err) => {
        setMessageContent(err?.data?.mdmResponse?.output);
        setOpenMessage(true);
        removeLoader();
      });
  }, []);

  useEffect(() => {
    console.log(user, 'user from app.tsx');
  }, [user]);
  return (
    <ThemeProvider fontUri={process.env.FONT_URL}>
      {loader}
      {openMessage && <Message setOpen={setOpenMessage} message={messageContent} />}
      <RmdContext.Provider value={md3}>
        <UserContext.Provider value={{ setUser, user }}>
          {user ? <TopHeader userDetails={user} pageTitle="" /> : <CustomHeader /> }
          <Component {...pageProps} />
          <FooterNav />
        </UserContext.Provider>
      </RmdContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
