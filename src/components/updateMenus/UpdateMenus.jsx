import { MenuItem, Select } from '@mui/material';
import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { menusOperations, menusSelectors } from 'redux/menus';
import theme from 'theme/theme';

const UpdateMenus = () => {
  const [parent, setParent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const formFields = useSelector(menusSelectors.GetFieldsForm);
  const { title, btnTitle, prevPath, idMenus, list } = location.state;
  const isUpdate = useSelector(menusSelectors.getIsUpdate);
  const backIcon = () => {
    navigate(prevPath);
  };
  const changeSelect = e => {
    setParent(e.target.value);
  };
  const filterFields = formFields.filter(elem => elem === Object(elem));
  const res = filterFields.reduce((acc, { id, value }) => {
    if (!value) {
      acc[id] = '';
    } else {
      acc[id] = value;
    }
    return acc;
  }, {});
  useEffect(() => {
    dispatch(menusOperations.getMenusFrom(idMenus));
  }, [dispatch, idMenus]);

  useEffect(() => {
    if (isUpdate || formFields.length === 0) {
      navigate(prevPath);
    }
  }, [formFields.length, isUpdate, navigate, prevPath]);
  return (
    <PageContentBox>
      <Section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <BiArrowBack style={{ cursor: 'pointer' }} onClick={backIcon} />
          <PageTitle>{title} Update</PageTitle>
        </div>
      </Section>
      <Section style={{ borderBottom: 'none' }}>
        <Formik
          initialValues={{
            title: res.title,
            path: res.path,
            parent: res.parent,
            type: res.type,
            sortOrder: res.sortOrder,
          }}
          enableReinitialize
          onSubmit={async (values, actions) => {
            const formValues = { ...values, parent, idMenus };
            dispatch(menusOperations.updateMenus(formValues));
          }}
        >
          {props => (
            <FormStyle onSubmit={props.handleSubmit} id="roleFormUpdate">
              <FormBox>
                <LabelStyle htmlFor="title">Title</LabelStyle>
                <InputStyle
                  type="title"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.title}
                  name="title"
                  placeholder="title"
                />
              </FormBox>
              <FormBox>
                <LabelStyle htmlFor="path">Path</LabelStyle>
                <InputStyle
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.path}
                  name="path"
                  placeholder="path"
                />
              </FormBox>
              <FormBox>
                <LabelStyle htmlFor="parent">Parent</LabelStyle>
                <Select
                  value={parent}
                  name="parent"
                  onChange={changeSelect}
                  style={{ width: '100%', fontSize: '1rem', height: '38px' }}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {list.map(elem => (
                    <MenuItem key={elem.id} value={elem.id}>
                      {elem.title}
                    </MenuItem>
                  ))}
                  {/* <LabelStyle htmlFor="parent">Parent</LabelStyle>
                <InputStyle
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.parent}
                  name="parent"
                  placeholder="parent"
                /> */}
                </Select>
              </FormBox>
              <FormBox>
                <LabelStyle htmlFor="type">Type</LabelStyle>
                <InputStyle
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.type}
                  name="type"
                  placeholder="type"
                />
              </FormBox>
              <FormBox>
                <LabelStyle htmlFor="sortOrder">SortOrder</LabelStyle>
                <InputStyle
                  type="number"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.sortOrder}
                  name="sortOrder"
                  placeholder="sortOrder"
                />
              </FormBox>
            </FormStyle>
          )}
        </Formik>
        <button style={theme.btn.btnGreen} form="roleFormUpdate" type="submit">
          {btnTitle}
        </button>
      </Section>
    </PageContentBox>
  );
};

export default UpdateMenus;
