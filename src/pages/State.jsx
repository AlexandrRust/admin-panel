import CreateStateForm from 'components/createStateForm/CreateStateForm';
import Modal from 'components/modal/Modal';
import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageHeader } from 'components/pageHeader/PageHeader.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import StateTable from 'components/stateTable/StateTable';
import TablePagination from 'components/tablePagination/TablePagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { stateOperations, stateSelectors } from 'redux/state';
import theme from 'theme/theme';

const State = () => {
  const currentPage = useSelector(stateSelectors.getCurrentPage);
  const [countryName, setCountryName] = useState('');
  const [page, setPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const titlePage = useSelector(stateSelectors.getTitle);
  const btnTitle = useSelector(stateSelectors.getBtnTitle);
  const isCreate = useSelector(stateSelectors.getIsCreate);
  const stateList = useSelector(stateSelectors.getStateList);
  const total = useSelector(stateSelectors.getTotalPage);
  useEffect(() => {
    if (stateList.length > 0) {
      setCountryName(stateList[0].country_id);
    }
  }, [stateList]);
  useEffect(() => {
    dispatch(stateOperations.getStates(page));
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
      toast.success('State was added');
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
          <StateTable
            list={stateList}
            title={titlePage}
            btnTitle={btnTitle}
            prevPath={location.pathname}
          />
          <TablePagination
            allPage={total}
            list={stateList}
            onChange={handelClick}
            page={currentPage}
          />
        </Section>
      </PageContentBox>
      {modalShow && (
        <Modal
          handelModalClose={handelModalClose}
          children={<CreateStateForm countryName={countryName} />}
          title={titlePage}
        ></Modal>
      )}
    </>
  );
};

export default State;
