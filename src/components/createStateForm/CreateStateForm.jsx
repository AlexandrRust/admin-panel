import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { stateOperations, stateSelectors } from 'redux/state';
import theme from 'theme/theme';

const CreateStateForm = ({ countryName }) => {
  const dispatch = useDispatch();

  const btnTitle = useSelector(stateSelectors.getBtnTitle);
  const formFields = useSelector(stateSelectors.getFieldsForm);
  const filterFields = formFields.filter(elem => elem === Object(elem));

  // const countryName = stateList.length > 0 ? stateList[0].country_id : null;
  const res = filterFields.reduce((acc, { id, value }) => {
    if (!value) {
      acc[id] = '';
    } else {
      acc[id] = value;
    }
    return acc;
  }, {});
  return (
    <Formik
      initialValues={{ name: res.name, country: countryName }}
      onSubmit={async (values, actions) => {
        console.log(values);
        dispatch(stateOperations.addState(values));
        // dispatch(usersOperations.addUser(values));
        // navigate(path);
        // submitForm(values);
        // actions.resetForm();
        // console.log(status);
      }}
    >
      {props => (
        <FormStyle onSubmit={props.handleSubmit}>
          <FormBox>
            <LabelStyle style={{ marginRight: 'auto' }} htmlFor="name">
              Name
              <sup style={{ color: 'red', fontWeight: 'inherit' }}>*</sup>
            </LabelStyle>

            <InputStyle
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
              placeholder="name"
            />
          </FormBox>
          <FormBox>
            <LabelStyle style={{ marginRight: 'auto' }} htmlFor="country">
              Country
              <sup style={{ color: 'red', fontWeight: 'inherit' }}>*</sup>
            </LabelStyle>

            <InputStyle
              // type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.country}
              name="country"
              placeholder="country"
            />
          </FormBox>
          <button style={theme.btn.btnGreen} type="submit">
            {btnTitle}
          </button>
        </FormStyle>
      )}
    </Formik>
  );
};

export default CreateStateForm;
