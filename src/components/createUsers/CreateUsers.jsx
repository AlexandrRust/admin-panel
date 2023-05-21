import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import theme from 'theme/theme';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { usersOperations, usersSelectors } from 'redux/users';
import { useEffect } from 'react';
import FormCreateUsers from 'components/formCreateUsers/FormCreateUsers';
import { toast } from 'react-toastify';

const CreateUsers = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isCreate = useSelector(usersSelectors.getIsCreate);
  const { title, fields, btnTitle, prevPath } = location.state;

  const backIcon = () => {
    navigate(prevPath);
  };
  const submitForm = values => {
    dispatch(usersOperations.addUser(values));
  };
  useEffect(() => {
    if (isCreate) {
      toast.success('User was added');
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
          <FormCreateUsers fields={fields} submitForm={submitForm} />
          <button style={theme.btn.btnGreen} form="usersForm" type="submit">
            {btnTitle}
          </button>
        </Section>
      )}
    </PageContentBox>
  );
};

export default CreateUsers;
