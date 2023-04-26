import TablePagination from 'components/tablePagination/TablePagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { rolesOperations, rolesSelectors } from 'redux/roles';
import RolesTable from 'rolesTable/RolesTable';
import { PageContentBox } from '../components/pageContentBox/PageContentBox.styled';
import { PageHeader } from '../components/pageHeader/PageHeader.styled';
import { PageTitle } from '../components/pageTitle/PageTtitle.styled';
import { Section } from '../components/section/Section.styled';
import theme from '../theme/theme';

const Roles = () => {
  const currentPage = useSelector(rolesSelectors.getCurrentPage);
  const [page, setPage] = useState(1);
  // const [allPages, setAllPages] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(rolesSelectors.getTitle);
  const btnTitle = useSelector(rolesSelectors.getBtnTitle);
  const roleList = useSelector(rolesSelectors.getRolesList);
  const formFields = useSelector(rolesSelectors.getFieldsForm);
  const total = useSelector(rolesSelectors.getTotalPage);

  const getPerPage = useSelector(rolesSelectors.getPerPage);
  // const allPages = Math.ceil(total / getPerPage);

  useEffect(() => {
    dispatch(rolesOperations.getRoles(page));
    // const allPages = Math.ceil(total / getPerPage);
    // setAllPages(allPages);
    // setPage(currentPage);
  }, [dispatch, page]);
  const handelClick = (e, page) => {
    setPage(page);
  };
  return (
    <PageContentBox>
      <Section>
        <PageHeader>
          <PageTitle>{titlePage}</PageTitle>
          <Link
            style={theme.btn.btnGreen}
            to={`create`}
            state={{
              title: titlePage,
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
        <RolesTable
          list={roleList}
          title={titlePage}
          btnTitle={btnTitle}
          prevPath={location.pathname}
        />
        <TablePagination
          allPage={total}
          list={roleList}
          onChange={handelClick}
          page={page}
        />
      </Section>
    </PageContentBox>
  );
};

export default Roles;
