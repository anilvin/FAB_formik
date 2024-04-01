import {
  Button,
  ButtonSizesEnum,
  Modal,
  ModalCloseIcon,
  ModalContent,
  ModalFooter,
  ModalSizesEnum,
} from '@genieology/gtb-ui';

import React, { Dispatch, SetStateAction } from 'react';

type MessagePropsTypes = {
  message: string;
  onClick?: () => void;
  forSuccess?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function Message(props: MessagePropsTypes) {
  const close = () => {
    if (props?.forSuccess && props?.onClick) {
      props?.onClick();
    }

    props.setOpen(false);
  };

  return (
    <Modal open size={ModalSizesEnum.MD} testId="test-id">
      <div
        style={{
          display: 'flex',

          justifyContent: 'flex-end',

          paddingRight: '1rem',
        }}
      >
        <ModalCloseIcon onClose={close} testId="modal" />
      </div>
      {/* <ModalHeader>
 <Text color="blackGrey.100" size="medium">
<div style={{ fontWeight: '500', color: 'red' }}>Error!</div>
</Text>
 </ModalHeader> */}
      <div style={{ paddingTop: '1.5rem' }}>
        <ModalContent maxHeight={200}>{props.message}</ModalContent>
      </div>
      {' '}
      <div
        style={{ display: 'flex', width: '60%', justifyContent: 'flex-end' }}
      >
        <ModalFooter>
          <Button onClick={close} size={ButtonSizesEnum.SMALL}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
}

export default Message;
