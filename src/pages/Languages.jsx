import LanguagesTable from 'components/languagesTable/LanguagesTable';
import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import TablePagination from 'components/tablePagination/TablePagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { languagesOperations, languagesSelectors } from 'redux/languages';
import theme from 'theme/theme';

const Languages = () => {
  const currentPage = useSelector(languagesSelectors.getCurrentPage);
  const [page, setPage] = useState(currentPage);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(languagesSelectors.getTitle);
  const btnTitle = useSelector(languagesSelectors.getBtnTitle);
  const formFields = useSelector(languagesSelectors.getFieldsForm);
  const languagesList = useSelector(languagesSelectors.getLanguagesList);
  const total = useSelector(languagesSelectors.getTotalPage);

  useEffect(() => {
    dispatch(languagesOperations.getLanguages(page));
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
        <LanguagesTable
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

export default Languages;