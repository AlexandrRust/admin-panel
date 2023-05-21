import FormCreateUsers from 'components/formCreateUsers/FormCreateUsers';
import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { rolesOperations, rolesSelectors } from 'redux/roles';
import theme from 'theme/theme';

const CreateRoles = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCreate = useSelector(rolesSelectors.getIsCreate);
  const { title, fields, btnTitle, prevPath } = location.state;
  const backIcon = () => {
    navigate(prevPath);
  };
  const submitForm = values => {
    dispatch(rolesOperations.addRoles(values));
  };
  useEffect(() => {
    if (isCreate) {
      toast.success('Role was added');
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
          <FormCreateUsers
            fields={fields}
            path={prevPath}
            submitForm={submitForm}
          />
          <button style={theme.btn.btnGreen} form="usersForm" type="submit">
            {btnTitle}
          </button>
        </Section>
      )}
    </PageContentBox>
  );
};

export default CreateRoles;
