import CreateLanguagesForm from 'components/createLanguagesForm/CreateLanguagesForm';
import LanguagesTable from 'components/languagesTable/LanguagesTable';
import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import TablePagination from 'components/tablePagination/TablePagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { languagesOperations, languagesSelectors } from 'redux/languages';
import theme from 'theme/theme';

import Modal from '../components/modal/Modal';

const Languages = () => {
  const currentPage = useSelector(languagesSelectors.getCurrentPage);
  const [page, setPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(languagesSelectors.getTitle);
  const btnTitle = useSelector(languagesSelectors.getBtnTitle);
  const isCreate = useSelector(languagesSelectors.getIsCreate);
  // const formFields = useSelector(languagesSelectors.getFieldsForm);
  const languagesList = useSelector(languagesSelectors.getLanguagesList);
  const total = useSelector(languagesSelectors.getTotalPage);

  useEffect(() => {
    dispatch(languagesOperations.getLanguages(page));
  }, [dispatch, page]);
  const handelClick = (e, page) => {
    if (currentPage !== page) {
      setPage(page);
    }
    console.log(page);
    // setPage(page);
  };
  const handelModalShow = () => {
    setModalShow(true);
  };
  const handelModalClose = () => {
    setModalShow(false);
  };
  useEffect(() => {
    if (isCreate) {
      // console.log(true);
      handelModalClose();
    }
  }, [isCreate]);
  return (
    <>
      <PageContentBox>
        <Section>
          <PageHeader>
            <PageTitle>{titlePage}</PageTitle>
            <button style={theme.btn.btnGreen} onClick={handelModalShow}>
              {btnTitle}
            </button>
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
            page={currentPage}
          />
        </Section>
      </PageContentBox>
      {modalShow && (
        <Modal
          handelModalClose={handelModalClose}
          children={<CreateLanguagesForm />}
          title={titlePage}
        ></Modal>
      )}
    </>
  );
};

export default Languages;
