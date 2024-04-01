import {
  Button,
  ButtonSizesEnum,
  Modal,
  ModalCloseIcon,
  ModalContent,
  ModalFooter,
  ModalSizesEnum,
} from '@genieology/gtb-ui';

import React from 'react';

  type MessagePropsTypes = {
    message: string;
    onSuccess: (val:any) => void;
    onCancel:() => void;
    setOpen: (val:boolean) => void;
    prevAppData:any,
  };

function ConfirmationModal({
  setOpen, onCancel, onSuccess, message, prevAppData,
}: MessagePropsTypes) {
  return (
    <Modal open size={ModalSizesEnum.MD} testId="test-id">
      <div
        style={{
          display: 'flex',

          justifyContent: 'flex-end',

          paddingRight: '1rem',
        }}
      >
        <ModalCloseIcon
          onClose={() => {
            setOpen(false);
          }}
          testId="modal"
        />
      </div>
      <div style={{ paddingTop: '1.5rem' }}>
        <ModalContent maxHeight={200}>{message}</ModalContent>
      </div>
      {' '}
      <div
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <ModalFooter>
          <Button
            style={{ margin: '0 1rem' }}
            onClick={() => onSuccess(prevAppData)}
            size={ButtonSizesEnum.SMALL}
          >
            Yes
          </Button>
          <Button
            style={{ margin: '0 1rem' }}
            onClick={onCancel}
            size={ButtonSizesEnum.SMALL}
          >
            No
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
