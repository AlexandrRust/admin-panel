import { useDispatch } from 'react-redux';
import { Burger } from './common/Burger.styled';
import { HeaderBox } from './common/HeaderBox.styled';
import { HeaderTitle } from './common/HeaderTitle.styled';

import { authOperations } from '../../redux/auth';
import { ButtonLogout } from 'components/button/ButtonLogout.styled';

const Header = ({ openNavBar, isOpen }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <HeaderBox>
      <Burger onClick={openNavBar} />
      <HeaderTitle>Home</HeaderTitle>

      <ButtonLogout type="button" onClick={handleClick}>
        Вихід
      </ButtonLogout>
    </HeaderBox>
  );
};
export default Header;
