/* eslint-disable prefer-promise-reject-errors */
const resHandler = (res:any) => res.text().then((text:string) => {
  const data = text && JSON.parse(text);

  if (res.ok) return data;

  return Promise.reject({ statusCode: res?.status || null, data });
});

const errHandler = (err:any, config: any) => {
  const statusCode = parseInt(err?.statusCode || null, 10);

  /* redirect to login page if error is 401 */
  if (statusCode === 401) {
    return Promise.reject(err);
  }
  // eslint-disable-next-line max-len
  if (statusCode >= 400 && ![404, 401].includes(statusCode) && config?.redirectToErrorPageIfFailed !== false) {
    console.log('Show errorpage');
  }

  return Promise.reject(err);
};
let token = '457E560CC289680AC28728C28CC29FC39B2B3C04C3BDC29AC2982A4755C29C370FC3803C073D4538C386677E304E2BC384C3937CC28A37C398C3BD0541C3860C033B595AC2A4C39F6EC2B605C3B6C38222726468C39DC2A6C38FC28EC2B00FC3B4C3A8C395C395C281C3BEC399C2BE6E6A29C3B0C2A723C2B93563C298C3915259C3B6004A4A3AC2A0683CC381C388C2B5C2AFC2B40E2175386BC3AB674C2FC3B1C39CC29FC3ACC399C38B6C0651C3B6C295C2B5C3ABC3B54EC2B4C282';
let drc = 'DMRC';
let sop = 'DMRC';
const setToken = (tokenparam:string = token, drcu:string = drc, sopParam:string = sop) => {
  token = tokenparam;
  drc = drcu;
  sop = sopParam;
};

const setSop = (sopParam:string) => {
  sop = sopParam;
  localStorage.setItem('sop', JSON.stringify(sop));
};

const getCommonHeaders = () => ({
  'x-auth-sop': sop, // Date.now().toString(),
  'x-auth-token': token || '123543543543', // that value will be changed
  'x-auth-drc': drc,
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST',
  'Access-Control-Allow-Credentials': 'true',

});

/* request methods */
const get = (url: string, config?: any) => {
  const reqOptions = { method: 'GET', headers: getCommonHeaders() };
  return fetch(url, reqOptions)
    .then(resHandler)
    .catch((...args) => errHandler(...args, config));
};

const post = (url: string, body?:any, config?:any) => {
  const myRequest = new Request(url);
  const reqOptions = {
    method: 'POST',
    headers: getCommonHeaders(),
    body: JSON.stringify(body),
  };
  return fetch(myRequest, reqOptions)
    .then(resHandler)
    .catch((...args) => errHandler(...args, config));
};

const upload = (url: string, body?:any, config?:any) => {
  const myRequest = new Request(url);
  const uploadHeader = {
    'x-auth-token': token || '123543543543', // that value will be changed
    'x-auth-sop': 'ASTA',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST',
    'Access-Control-Allow-Credentials': 'true',
  };
  const reqOptions = {
    method: 'POST',
    headers: uploadHeader,
    body,
  };
  return fetch(myRequest, reqOptions)
    .then(resHandler)
    .catch((...args) => errHandler(...args, config));
};

const put = (url:string, body?:any, config?:any) => {
  const reqOptions = {
    method: 'PUT',
    headers: getCommonHeaders(),
    body: JSON.stringify(body),
  };
  return fetch(url, reqOptions)
    .then(resHandler)
    .catch((...args) => errHandler(...args, config));
};

const Delete = (url:string, config?:any) => {
  const reqOptions = { method: 'DELETE', headers: getCommonHeaders() };
  return fetch(url, reqOptions)
    .then(resHandler)
    .catch((...args) => errHandler(...args, config));
};

const Fetch = {
  get, post, put, delete: Delete, setToken, setSop, upload,
};

export default Fetch;
