import { Backdrop } from './common/Backdrop.styled';
import { ModalStyle } from './common/ModalStyle.styled';
import { ModalCloseIcon } from './common/ModalCloseIcon.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';

const Modal = ({ handelModalClose, children, title }) => {
  return (
    <Backdrop>
      <ModalStyle>
        <ModalCloseIcon type="button" onClick={handelModalClose} />
        <PageTitle>{title}</PageTitle>
        {children}
      </ModalStyle>
    </Backdrop>
  );
};

export default Modal;
