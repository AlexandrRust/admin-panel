import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';

import { countryOperations, countrySelectors } from 'redux/country';
import theme from 'theme/theme';
import TablePagination from 'components/tablePagination/TablePagination';
import CountryTable from 'components/countryTable/CountryTable';
import Modal from '../components/modal/Modal';

import CreateCountryForm from 'components/createCountryForm/CreateCountryForm';

const Country = () => {
  const currentPage = useSelector(countrySelectors.getCurrentPage);
  const [page, setPage] = useState(currentPage);
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(countrySelectors.getTitle);
  const btnTitle = useSelector(countrySelectors.getBtnTitle);
  const isCreate = useSelector(countrySelectors.getIsCreate);
  // const formFields = useSelector(countrySelectors.getFieldsForm);
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
  const handelModalShow = () => {
    setModalShow(true);
  };
  const handelModalClose = () => {
    setModalShow(false);
  };
  useEffect(() => {
    if (isCreate) {
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
      {modalShow && (
        <Modal
          handelModalClose={handelModalClose}
          children={<CreateCountryForm />}
          title={titlePage}
        ></Modal>
      )}
    </>
  );
};

export default Country;
