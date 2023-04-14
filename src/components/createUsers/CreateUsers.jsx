import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import FormUsers from 'components/formUsers/FormUsers';
import { useLocation } from 'react-router-dom';
import theme from 'theme/theme';

const CreateUsers = () => {
  const location = useLocation();
  const { title, fields, btnTitle, prevPath } = location.state;
  return (
    <PageContentBox>
      <Section>
        <PageHeader>
          <PageTitle>{title}</PageTitle>
        </PageHeader>
      </Section>
      <Section style={{ borderBottom: 'none' }}>
        <FormUsers fields={fields} path={prevPath} />
        <button style={theme.btn.btnGreen} form="usersForm" type="submit">
          {btnTitle}
        </button>
      </Section>
    </PageContentBox>
  );
};

export default CreateUsers;
