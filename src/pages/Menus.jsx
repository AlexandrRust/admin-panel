import MenusTable from 'components/menusTable/MenusTable';
import TablePagination from 'components/tablePagination/TablePagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { menusOperations, menusSelectors } from 'redux/menus';
import { PageContentBox } from '../components/pageContentBox/PageContentBox.styled';
import { PageHeader } from '../components/pageHeader/PageHeader.styled';
import { PageTitle } from '../components/pageTitle/PageTtitle.styled';
import { Section } from '../components/section/Section.styled';
import theme from '../theme/theme';

const Menus = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const location = useLocation();
  const titlePage = useSelector(menusSelectors.getTitle);
  const btnTitle = useSelector(menusSelectors.getBtnTitle);
  const menuList = useSelector(menusSelectors.getMenusList);
  const formFields = useSelector(menusSelectors.GetFieldsForm);
  const total = useSelector(menusSelectors.getTotalPage);

  useEffect(() => {
    dispatch(menusOperations.getMenus(page));
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
              menuList: menuList,
            }}
          >
            {btnTitle}
          </Link>
        </PageHeader>
      </Section>
      <Section>
        <MenusTable
          list={menuList}
          title={titlePage}
          btnTitle={btnTitle}
          prevPath={location.pathname}
        />
        <TablePagination
          allPage={total}
          list={menuList}
          onChange={handelClick}
          page={page}
        />
      </Section>
    </PageContentBox>
  );
};

export default Menus;
