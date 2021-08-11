import React from 'react';
import block from 'bem-cn';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconClose from 'assets/icons/close.svg';
import './CustomModal.scss';

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  label: React.ReactElement;
  children: React.ReactElement;
}

const CustomModal = ({
  open,
  handleClose,
  label,
  children
}: CustomModalProps) => {
  const b = block('CustomModal');

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={b()}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      hideBackdrop
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={b('body')}>
          <div className={b('header')}>
            {label}
            <button className={b('closeBtn')} onClick={handleClose}>
              <img src={IconClose} alt="icon close" />
            </button>
          </div>

          <div className={b('content')}>{children}</div>
        </div>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
