import JSEncrypt from 'jsencrypt';

const useEncryption = (val: string): string | boolean => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(process.env.PUBLIC_KEY || '');

  return encrypt.encrypt(val);
};

export default useEncryption;
