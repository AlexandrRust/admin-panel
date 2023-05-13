import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';

import { countryOperations, countrySelectors } from 'redux/country';
import theme from 'theme/theme';
import TablePagination from 'components/tablePagination/TablePagination';
import CountryTable from 'components/countryTable/CountryTable';

const Country = () => {
  const currentPage = useSelector(countrySelectors.getCurrentPage);
  const [page, setPage] = useState(currentPage);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(countrySelectors.getTitle);
  const btnTitle = useSelector(countrySelectors.getBtnTitle);
  const formFields = useSelector(countrySelectors.getFieldsForm);
  const languagesList = useSelector(countrySelectors.getCountryList);
  const total = useSelector(countrySelectors.getTotalPage);

  useEffect(() => {
    dispatch(countryOperations.getCountry(page));
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
        <CountryTable
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

export default Country;
