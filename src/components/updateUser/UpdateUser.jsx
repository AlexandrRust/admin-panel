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
import { usersOperations, usersSelectors } from 'redux/users';
import theme from 'theme/theme';

const UpdateUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const formFields = useSelector(usersSelectors.GetFieldsForm);
  const navigate = useNavigate();
  const { title, btnTitle, prevPath } = location.state;
  const isUpdate = useSelector(usersSelectors.getIsUpdate);
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
    if (isUpdate) {
      navigate(prevPath);
    }
  }, [isUpdate, navigate, prevPath]);

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
            firstname: res.firstname,
            lastname: res.lastname,
            email: res.email,
            phone: res.phone,
            password: res.password,
          }}
          enableReinitialize
          onSubmit={async (values, actions) => {
            dispatch(usersOperations.userUpdate(values));
          }}
        >
          {props => (
            <FormStyle onSubmit={props.handleSubmit} id="usersFormUpdate">
              <FormBox>
                <LabelStyle htmlFor="firstname">Firstname</LabelStyle>
                <InputStyle
                  type="firstname"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.firstname}
                  name="firstname"
                  placeholder="firstname"
                />
              </FormBox>
              <FormBox>
                <LabelStyle htmlFor="lastname">Lastname</LabelStyle>
                <InputStyle
                  type="lastname"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.lastname}
                  name="lastname"
                  placeholder="lastname"
                />
              </FormBox>

              <FormBox>
                <LabelStyle htmlFor="email">Email</LabelStyle>
                <InputStyle
                  type="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  placeholder="email"
                />
              </FormBox>
              <FormBox>
                <LabelStyle htmlFor="phone">Phone</LabelStyle>
                <InputStyle
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.phone}
                  name="phone"
                  placeholder="phone"
                />
              </FormBox>
              <FormBox>
                <LabelStyle htmlFor="password">Password</LabelStyle>
                <InputStyle
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                  placeholder="password"
                />
              </FormBox>
            </FormStyle>
          )}
        </Formik>
        <button style={theme.btn.btnGreen} form="usersFormUpdate" type="submit">
          {btnTitle}
        </button>
      </Section>
    </PageContentBox>
  );
};

export default UpdateUser;
