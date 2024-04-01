import Fetch from '../init';

const getCountryList = () => Fetch.post('/api/m/m2/');

const masterApi1 = (user:string) => Fetch.post('/api/m/m2/', {
  source: 'P',
  userName: user,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
  deviceInfo: null,
});
const masterApi2 = (user:string) => Fetch.post('/api/m/m3/', {
  source: 'P',
  userName: user,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
  deviceInfo: null,
});
const masterApi3 = (user:string, param:string) => Fetch.post('/api/m/rmd/', {
  source: 'P',
  userName: user,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
  param,
  deviceInfo: null,
});

export default {
  getCountryList,
  masterApi1,
  masterApi2,
  masterApi3,
};
