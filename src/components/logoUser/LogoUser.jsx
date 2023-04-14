import { Logo } from 'components/logo/common/Logo.styled';
import { LogoBoxStyle } from 'components/logo/common/LogoWrapper.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const LogoUser = ({ isOpen, bigNavBar }) => {
  const userNikName = useSelector(authSelectors.getUserNickName);
  const userAvatar = useSelector(authSelectors.getUserAvatar);
  return (
    <LogoBoxStyle>
      <Logo to={'/userInfo'}>
        <img
          src={userAvatar}
          alt="avatar"
          height={33}
          style={{ borderRadius: '50%' }}
        />
        <h3
          style={
            isOpen === bigNavBar
              ? { width: '180px', opacity: '1' }
              : { opacity: '0' }
          }
        >
          {userNikName}
        </h3>
      </Logo>
    </LogoBoxStyle>
  );
};

export default LogoUser;
