import Fetch from '../init';

type ValidateUserProps = {
  user: string,
  EmailAddress:string,
  PhoneNumber:string,
};

type DedupeSignupProps = {
  EmailAddress:string,
  PhoneNumber: string,
  EmiratesID:string,
  TradeLicenceNo:string,
  isUAEResident:Boolean
};
type SignupProps = {
  EmailAddress:string,
  PhoneNumber: string,
  user: string,
  EmiratesID:string,
  TradeLicenceNo:string,
  isUAEResident:Boolean,
  FirstName: string,
  LastName: string,
  CompanyName: string,
  CompanyType:string,
  CountryCode:string,
  password: string,
};

type ForgotPasswordProps = {
  user: string,
  password:string
};
const createToken = (user:string, password:string) => Fetch.post('/api/users/ct', {
  source: 'P',
  sysRefNo: Date.now().toString(),
  userName: user,
  password,
  channel: 'Portal',
  isFacedIdTurnedOn: 'N',
  faceIdKey: 'N',
  otpCnt: '1',
  deviceInfo: {
    deviceType: 'device Type',
    macKey: 'mac Key',
    ipAddress: 'ip Address',
    location: ' location 28',
    deviceId: 'device Id',
  },
});
const login = (user:string, password:string) => Fetch.post('/api/users/signin', {
  source: 'P',
  userName: user,
  password,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
  isFacedIdTurnedOn: 'N',
  faceIdKey: 'N',
  deviceInfo: {
    deviceType: 'device Type',
    macKey: 'mac Key',
    ipAddress: 'ip Address',
    location: ' location  28',
    deviceId: 'device Id',
  },

});

const validateUser = ({
  user, EmailAddress, PhoneNumber,
}:ValidateUserProps) => Fetch.post('/api/users/vdu', {
  source: 'P',
  userName: user,
  email: EmailAddress,
  phoneNo: PhoneNumber,
  validUserFor: 'ForgotPassword',
  sysRefNo: Date.now().toString(),
  channel: 'Portal',

});
const dedupeSignup = ({
  EmailAddress, PhoneNumber, EmiratesID, TradeLicenceNo, isUAEResident,
}:DedupeSignupProps) => Fetch.post('/api/users/prvc', {
  source: 'P',
  email: EmailAddress,
  phoneNo: PhoneNumber,
  emiratesId: EmiratesID,
  tlNo: TradeLicenceNo,
  isUAEResident: isUAEResident ? 'Y' : 'N',
  validUserFor: 'REGISTRATION',
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
  deviceInfo: {
    deviceType: 'device Type',
    macKey: 'mac Key',
    ipAddress: 'ip Address',
    location: ' location  28',
    deviceId: 'device Id',
  },
});

const signup = ({
  EmailAddress,
  PhoneNumber,
  user,
  EmiratesID,
  TradeLicenceNo,
  isUAEResident,
  FirstName,
  LastName,
  CompanyName,
  CompanyType,
  CountryCode,
  password,
}:SignupProps) => Fetch.post('/api/users/signup', {
  source: 'P',
  email: EmailAddress,
  userName: user,
  mobileNo: PhoneNumber,
  emiratesId: EmiratesID,
  firstName: FirstName,
  lastName: LastName,
  companyType: CompanyType,
  companyName: CompanyName,
  countryCode: CountryCode,
  password,
  tlNo: TradeLicenceNo,
  isUAEResident: isUAEResident ? 'Y' : 'N',
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
});
const forgot = ({
  user, password,
}:ForgotPasswordProps) => Fetch.put('/api/users/forgot/updpwd', {
  source: 'P',
  userName: user,
  password,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
});
const generateOTP = (user :string, txnCode:string, otpCnt:number) => Fetch.post('/otp/obapi/og', {
  sysRefNo: Date.now().toString(),
  source: 'P',
  channel: 'Mobile',
  otpServiceName: 'SENDOTP',
  txnCode,
  otpCnt,
  userName: user,
  deviceInfo: null,

});
const validateOTP = (user :string, otpEntered:string, otpRefNum:string, txnCode:string) => Fetch.post('/otp/obapi/ov', {
  source: 'P',
  userName: user,
  sysRefNo: Date.now().toString(),
  channel: 'Mobile',
  otpServiceName: 'VALIDATEOTP',
  txnCode,
  otpRefNo: otpRefNum,
  otp: otpEntered,
  deviceInfo: {
    deviceType: 'device Type',
    macKey: 'mac Key',
    ipAddress: 'ip Address',
    location: ' location  28',
    deviceId: 'device Id',
  },
});

const fetchUserDetails = (user:string) => Fetch.post('/api/users/fetchcuruserdtls', {
  source: 'P',
  userName: user,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
});

const logOut = (user:string) => Fetch.post('/api/users/signout', {
  source: 'P',
  userName: user,
  sysRefNo: Date.now().toString(),
  channel: 'Portal',
  deviceInfo: {
    deviceType: 'device Type',
    macKey: 'mac Key',
    ipAddress: 'ip Address',
    location: ' location  28',
    deviceId: 'device Id',
  },

});

export default {
  login,
  validateUser,
  dedupeSignup,
  generateOTP,
  validateOTP,
  createToken,
  signup,
  forgot,
  fetchUserDetails,
  logOut,
};
