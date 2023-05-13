import { PageContentBox } from '../pageContentBox/PageContentBox.styled';
import { PageTitle } from '../pageTitle/PageTtitle.styled';
import { Section } from '../section/Section.styled';
import theme from '../../theme/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { menusOperations, menusSelectors } from 'redux/menus';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import CreateMenusForm from 'components/createMenusForm/CreateMenusForm';

const CreateMenus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCreate = useSelector(menusSelectors.getIsCreate);
  const { title, fields, btnTitle, prevPath, menuList } = location.state;
  const backIcon = () => {
    navigate(prevPath);
  };
  const submitForm = values => {
    dispatch(menusOperations.addMenus(values));
  };
  useEffect(() => {
    if (isCreate) {
      navigate(prevPath);
    }
  }, [navigate, prevPath, isCreate]);

  return (
    <PageContentBox>
      <Section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <BiArrowBack style={{ cursor: 'pointer' }} onClick={backIcon} />
          <PageTitle>{title} Create</PageTitle>
        </div>
      </Section>
      {fields.lenght === 0 ? (
        navigate(prevPath)
      ) : (
        <Section style={{ borderBottom: 'none' }}>
          <CreateMenusForm
            fields={fields}
            submitForm={submitForm}
            menuList={menuList}
          />
          <button style={theme.btn.btnGreen} form="usersForm" type="submit">
            {btnTitle}
          </button>
        </Section>
      )}
    </PageContentBox>
  );
};

export default CreateMenus;
