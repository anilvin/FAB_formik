import {
  IconEnum,
  InputOTP,
  Modal,
  ModalCloseIcon,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalSizesEnum,
  Text,
  TextLink,
  TextLinkPositionEnum,
} from '@genieology/gtb-ui';
import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { auth } from '../API';
import useLoader from '../hooks/useLoader';
import Message from './Message';

type OtpPropsTypes = {
  user:string;
  email: string;
  phone: string;
  min: number;
  sec: number;
  txnCode:string;
  afterValidate:any
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function Otp(props: OtpPropsTypes) {
  const [otp, setOtp] = useState('');
  const [wrongOtp, setWrongOtp] = useState(false);
  const [minutes, setMinutes] = useState(props.min);
  const [seconds, setSeconds] = useState(props.sec);
  const [otpRefNum, setOtpRefNum] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [MsgOpen, setMsgOpen] = useState(false);
  const [loader, startLoader, removeLoader] = useLoader();
  const [otpCnt, setOtpCnt] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  useEffect(() => {
    startLoader();
    auth.generateOTP(props.user, props.txnCode, otpCnt)
      .then((res) => {
        console.log('generateOtpRes', res);
        setOtpRefNum(res.otpRefNo);
        removeLoader();
      })
      .catch((err) => {
        console.log('generateOtpErr', err);
        setMsgOpen(true);
        setErrorMsg(err?.data?.desc);
        removeLoader();
      });
  }, []);

  useEffect(() => {
    startLoader();
    if (otp.length === 6) {
      auth.validateOTP(props.user, otp, otpRefNum, props.txnCode)
        .then(() => {
          props.afterValidate();
          removeLoader();
          props.setOpen(!true);
        })
        .catch(() => {
          setWrongOtp(true);
          removeLoader();
        });
    }
  }, [otp.length === 6]);

  const resendApi = () => {
    setOtpCnt((p) => p + 1);
    startLoader();
    auth.generateOTP(props.user, props.txnCode, otpCnt)
      .then((res) => {
        setOtpRefNum(res.otpRefNo);
        removeLoader();
        setMinutes(props.min);
        setSeconds(props.sec);
        setOtp('');
        setWrongOtp(false);
      })
      .catch((err) => {
        console.log('resend generateOtpErr', err);
        setMsgOpen(true);
        setErrorMsg(err?.data?.desc);
        removeLoader();
      });
  };

  const email = () => {
    const emailSplit = props.email.split('@');
    const len = emailSplit[0].length;
    const starString = Array(len).fill('*').join('');
    return `${starString}@${emailSplit[1]}`;
  };

  const phone = () => {
    const len = props.phone.length - 6;
    const arr = props.phone.split('');
    const starString = Array(len).fill('*').join('');
    arr.splice(3, len, starString);
    return arr.join('');
  };

  return (
    <>
      {loader}
      <Modal
        open
        size={ModalSizesEnum.MD}
        testId="test-id"
      >
        { MsgOpen
      && <Message setOpen={setMsgOpen} message={errorMsg} />}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '1rem',
          }}
        >
          <ModalCloseIcon onClose={() => props.setOpen(!true)} testId="modal" />
        </div>
        <ModalHeader>
          {/* <ModalLabel label="Optional Label" /> */}

          <Text color="blackGrey.100" size="medium">
            <div style={{ fontWeight: '500' }}>Confirm</div>
          </Text>
        </ModalHeader>
        <ModalContent maxHeight={300}>
          <Text
            color="blackGrey.100"
            size="small"
            style={{
              marginBottom: '1.125rem',
            }}
          >
            We’ve sent an email to
            &nbsp;
            {email()}
            &nbsp;
            and an SMS to
            &nbsp;
            <br />
          &nbsp;
            {phone()}
            &nbsp;
            with
            your OTP code.
          </Text>
          <div style={{ marginTop: '1rem' }}>
            <InputOTP
              isMasked
              value={otp}
              isInvalid={wrongOtp}
              errorMessage="Invalid OTP"
              onChange={(e) => {
                setOtp(e);
              }}
              testId="example"
            />
          </div>
        </ModalContent>
        <div style={{ display: 'flex', width: '60%' }}>
          <ModalFooter>
            <div
              style={{
                display: 'flex',
                color: '#003DA6',
                fontSize: '.75rem',
                fontWeight: '500',
              }}
            >
              {minutes !== 0 || seconds !== 0 ? (
                <div style={{ width: '17rem', color: '#0062ff' }}>
                  OTP will expire in &nbsp;
                  {minutes}
                  m
                  &nbsp;
                  {seconds}
                  s
                </div>
              ) : (
                <div style={{ width: '17rem', color: '#0062ff' }}>OTP is expired due to Time out</div>
              )}
              <div style={{ fontSize: '14px' }}>
                <TextLink
                  icon={{
                    name: IconEnum.REDOFILLED,
                    position: TextLinkPositionEnum.RIGHT,
                  }}
                  testId="test-id"
                  onClick={resendApi}
                >
                  Resend
                </TextLink>
              </div>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}

export default Otp;
