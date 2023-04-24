import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import FormUsers from 'components/formUsers/FormUsers';
import { useLocation, useNavigate } from 'react-router-dom';
import theme from 'theme/theme';
import { BiArrowBack } from 'react-icons/bi';

const CreateUsers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, fields, btnTitle, prevPath } = location.state;
  const backIcon = () => {
    navigate(prevPath);
  };
  return (
    <PageContentBox>
      <Section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <BiArrowBack style={{ cursor: 'pointer' }} onClick={backIcon} />
          <PageTitle>{title}</PageTitle>
        </div>
      </Section>
      {fields.lenght === 0 ? (
        navigate(prevPath)
      ) : (
        <Section style={{ borderBottom: 'none' }}>
          <FormUsers fields={fields} path={prevPath} />
          <button style={theme.btn.btnGreen} form="usersForm" type="submit">
            {btnTitle}
          </button>
        </Section>
      )}
    </PageContentBox>
  );
};

export default CreateUsers;
