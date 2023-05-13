import { Logo } from './common/Logo.styled';
import { LogoBoxStyle } from './common/LogoWrapper.styled';
import logo from '../../image/logo192.png';

const LogoBox = ({ isOpen, bigNavBar }) => {
  return (
    <LogoBoxStyle>
      <Logo to={'/'}>
        <img
          src={logo}
          alt="AdminLTE Logo"
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
          AdminLTE
        </h3>
      </Logo>
    </LogoBoxStyle>
  );
};
export default LogoBox;
