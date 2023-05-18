import { useDispatch } from 'react-redux';
import { Burger } from './common/Burger.styled';
import { HeaderBox } from './common/HeaderBox.styled';
import { HeaderTitle } from './common/HeaderTitle.styled';

import { authOperations } from '../../redux/auth';
import theme from 'theme/theme';

const Header = ({ openNavBar, isOpen }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <HeaderBox>
      <Burger onClick={openNavBar} />
      <HeaderTitle>Home</HeaderTitle>
      <button style={theme.btn.btnGreen} type="button" onClick={handleClick}>
        Вихід
      </button>
    </HeaderBox>
  );
};
export default Header;
