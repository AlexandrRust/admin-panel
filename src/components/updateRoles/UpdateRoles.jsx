import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { rolesOperations, rolesSelectors } from 'redux/roles';
import theme from 'theme/theme';

const UpdateRoles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const formFields = useSelector(rolesSelectors.getFieldsForm);
  const { title, btnTitle, prevPath, idRole } = location.state;
  const isUpdate = useSelector(rolesSelectors.getIsUpdate);
  console.log(idRole);
  const backIcon = () => {
    navigate(prevPath);
  };
  const res = formFields.reduce((acc, { id, value }) => {
    if (!value) {
      acc[id] = '';
    } else {
      acc[id] = value;
    }
    return acc;
  }, {});

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
          <PageTitle>{title}</PageTitle>
        </div>
      </Section>
      <Section style={{ borderBottom: 'none' }}>
        <Formik
          initialValues={{
            title: res.title,
            alias: res.alias,
          }}
          enableReinitialize
          onSubmit={async (values, actions) => {
            console.log(values);
            const { title, alias } = values;
            dispatch(rolesOperations.updateRole({ title, alias, idRole }));
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
                <LabelStyle htmlFor="alias">Alias</LabelStyle>
                <InputStyle
                  type="alias"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.alias}
                  name="alias"
                  placeholder="alias"
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

export default UpdateRoles;
