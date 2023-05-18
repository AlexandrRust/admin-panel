import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { cityOperations, citySelectors } from 'redux/city';

import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';

import theme from 'theme/theme';
import TablePagination from 'components/tablePagination/TablePagination';
import CityTable from 'components/cityTable/CityTable';
import Modal from '../components/modal/Modal';
import CreateCityForm from 'components/createCityForm/CreateCityForm';

const City = () => {
  const currentPage = useSelector(citySelectors.getCurrentPage);
  const [page, setPage] = useState(currentPage);
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(citySelectors.getTitle);
  const btnTitle = useSelector(citySelectors.getBtnTitle);
  const isCreate = useSelector(citySelectors.getIsCreate);
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
      {modalShow && (
        <Modal
          handelModalClose={handelModalClose}
          children={<CreateCityForm />}
          title={titlePage}
        ></Modal>
      )}
    </>
  );
};

export default City;
