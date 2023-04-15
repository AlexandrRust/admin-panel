import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { PageContentBox } from '../components/pageContentBox/PageContentBox.styled';
import { PageHeader } from '../components/pageHeader/PageHeader.styled';
import PageTable from '../components/pageTable/PageTable';
import { PageTitle } from '../components/pageTitle/PageTtitle.styled';
import { Section } from '../components/section/Section.styled';
import theme from '../theme/theme';
import { usersOperations, usersSelectors } from 'redux/users';
import { useEffect, useState } from 'react';
import InputFilter from 'components/inputFilter/InputSearch';
import SelectFilter from 'components/selectFilter/SelectFilter';
import { FilterBox } from 'components/filterBox/FilterBox.styled';
import { PaginationBox } from 'components/paginationPage/PaginationBox';
import InputSearch from 'components/inputFilter/InputSearch';

const Users = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const dispath = useDispatch();
  const perPage = useSelector(usersSelectors.getPerPage);
  const usersList = useSelector(usersSelectors.GetUsersList);
  const title = useSelector(usersSelectors.getTitle);
  const btnTitle = useSelector(usersSelectors.getBtnTitle);
  const formFields = useSelector(usersSelectors.GetFieldsForm);

  useEffect(() => {
    dispath(usersOperations.getUsers(page));
  }, [dispath, page]);

  const handelClick = (e, page) => {
    setPage(page);
  };
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
      <Section style={{ borderBottom: 'none' }}>
        <FilterBox>
          <InputSearch placeholder="User name" />
          <button
            style={theme.btn.btnGreen}
            type="submit"
            form="search-nickName"
          >
            Search
          </button>
          <SelectFilter />
        </FilterBox>

        <PageTable list={usersList} />
        {!perPage || perPage === 1 ? (
          <PaginationBox></PaginationBox>
        ) : (
          <PaginationBox>
            <div>
              <p>{`${page} page of ${perPage} pages`}</p>
            </div>
            <Stack spacing={2}>
              <Pagination
                // getItemAriaLabel={handelClick}
                onChange={handelClick}
                count={perPage}
                shape="rounded"
              />
            </Stack>
          </PaginationBox>
        )}
      </Section>
    </PageContentBox>
  );
};

export default Users;
