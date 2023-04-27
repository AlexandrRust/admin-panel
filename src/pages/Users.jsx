import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { PageContentBox } from '../components/pageContentBox/PageContentBox.styled';
import { PageHeader } from '../components/pageHeader/PageHeader.styled';
import PageTable from '../components/pageTable/PageTable';
import { PageTitle } from '../components/pageTitle/PageTtitle.styled';
import { Section } from '../components/section/Section.styled';
import theme from '../theme/theme';
import { usersOperations, usersSelectors } from 'redux/users';
import { useEffect, useState } from 'react';
import SearchUser from 'components/searchUser/searchUser';
import TablePagination from 'components/tablePagination/TablePagination';

const Users = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const dispath = useDispatch();
  const total = useSelector(usersSelectors.getTotalPage);
  const usersList = useSelector(usersSelectors.GetUsersList);
  const title = useSelector(usersSelectors.getTitle);
  const btnTitle = useSelector(usersSelectors.getBtnTitle);
  const formFields = useSelector(usersSelectors.GetFieldsForm);
  const status = useSelector(usersSelectors.getStatus);
  useEffect(() => {
    dispath(usersOperations.getUsers(page));
  }, [dispath, page]);

  const handelClick = (e, page) => {
    setPage(page);
  };
  return (
    <PageContentBox>
      {!status ? (
        <div>Не має доступу</div>
      ) : (
        <>
          <Section>
            <PageHeader>
              <PageTitle>{title}</PageTitle>
              <Link
                style={theme.btn.btnGreen}
                to={`create`}
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
          <Section style={{ borderBottom: 'none' }}>
            <SearchUser />

            <PageTable
              list={usersList}
              title={title}
              formFields={formFields}
              btnTitle={btnTitle}
            />
            <TablePagination
              allPage={total}
              list={usersList}
              onChange={handelClick}
              page={page}
            />
          </Section>
        </>
      )}
    </PageContentBox>
  );
};

export default Users;
