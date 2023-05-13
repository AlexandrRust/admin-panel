import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { cityOperations, citySelectors } from 'redux/city';

import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';

import theme from 'theme/theme';
import TablePagination from 'components/tablePagination/TablePagination';
import CityTable from 'components/cityTable/CityTable';

const City = () => {
  const currentPage = useSelector(citySelectors.getCurrentPage);
  const [page, setPage] = useState(currentPage);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(citySelectors.getTitle);
  const btnTitle = useSelector(citySelectors.getBtnTitle);
  const formFields = useSelector(citySelectors.getFieldsForm);
  const languagesList = useSelector(citySelectors.getCityList);
  const total = useSelector(citySelectors.getTotalPage);

  useEffect(() => {
    dispatch(cityOperations.getCity(page));
  }, [dispatch, page]);

  const handelClick = (e, page) => {
    if (currentPage !== page) {
      setPage(page);
    }
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
        <CityTable
          list={languagesList}
          title={titlePage}
          btnTitle={btnTitle}
          prevPath={location.pathname}
        />
        <TablePagination
          allPage={total}
          list={languagesList}
          onChange={handelClick}
          page={page}
        />
      </Section>
    </PageContentBox>
  );
};

export default City;
