import Fetch from '../init';

const returnCommanObj = (user:string) => ({
  source: 'P',
  userName: user,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
});

const dedupeCheck = (user:string, productType:any) => {
  const commanBody = returnCommanObj(user);
  return Fetch.post('/api/smeapp/ptdc', {
    ...commanBody,
    ...productType,
  });
};
const fetchWorkItems = (user:string, workItemName: string) => {
  const commanBody = returnCommanObj(user);
  return Fetch.post('/api/smeapp/fetch-wi', {
    ...commanBody,
    wiName: workItemName,
  });
};

const fetchConnectedParties = (user:string, workItemName: string) => {
  const commanBody = returnCommanObj(user);
  return Fetch.post('/api/smeapp/fetch-cp', {
    ...commanBody,
    wiName: workItemName,
  });
};

const createWorkItem = (data:any) => (
  Fetch.post('/api/smeapp/cwi', {
    ...data,
  }));
const checkEligibilty = (data:any, user: string) => {
  const commanBody = returnCommanObj(user);
  return Fetch.post('/api/smeapp/rmsb', {
    ...commanBody,
    ...data,

  });
};

const uploadFile = (file:any) => (Fetch.upload('/api/docs/uldmp', file));

export default {
  dedupeCheck,
  fetchWorkItems,
  createWorkItem,
  checkEligibilty,
  uploadFile,
  fetchConnectedParties,
};
