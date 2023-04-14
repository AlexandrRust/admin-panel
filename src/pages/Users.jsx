import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { PageContentBox } from '../components/pageContentBox/PageContentBox.styled';
import { PageHeader } from '../components/pageHeader/PageHeader.styled';
import PageTable from '../components/pageTable/PageTable';
import { PageTitle } from '../components/pageTitle/PageTtitle.styled';
import { Section } from '../components/section/Section.styled';
import theme from '../theme/theme';
import { usersOperations, usersSelectors } from 'redux/users';
import { useEffect } from 'react';
import InputFilter from 'components/inputFilter/InputFilter';
import SelectFilter from 'components/selectFilter/SelectFilter';
import { FilterBox } from 'components/filterBox/FilterBox.styled';

const Users = () => {
  const location = useLocation();
  const dispath = useDispatch();
  const usersList = useSelector(usersSelectors.GetUsersList);
  const title = useSelector(usersSelectors.getTitle);
  const btnTitle = useSelector(usersSelectors.getBtnTitle);
  const formFields = useSelector(usersSelectors.GetFieldsForm);
  const filter = useSelector(usersSelectors.GetFilterInput);
  useEffect(() => {
    dispath(usersOperations.getUsers());
  }, [dispath]);
  // const getVisibleUsersInput = () => {
  //   const normalizeFilter = filter.toLocaleLowerCase();
  //   return usersList.filter(user =>
  //     user.firstname.toLocaleLowerCase().includes(normalizeFilter)
  //   );
  // };
  return (
    <PageContentBox>
      <Section>
        <PageHeader>
          <PageTitle>{title}</PageTitle>
          <Link
            style={theme.btn.btnGreen}
            to={`${location.pathname}/create`}
            state={{
              title: title,
              fields: formFields,
              btnTitle: btnTitle,
              prevPath: location.pathname,
            }}
          >
            {btnTitle}
          </Link>
        </PageHeader>
      </Section>
      <Section>
        <FilterBox>
          <InputFilter filter={filter} placeholder="User name" />
          <SelectFilter />
        </FilterBox>

        <PageTable list={usersList} />
      </Section>
    </PageContentBox>
  );
};

export default Users;
