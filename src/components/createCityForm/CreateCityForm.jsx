import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { Formik } from 'formik';
import { GrCircleQuestion } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { citySelectors } from 'redux/city';
import theme from 'theme/theme';

const CreateCityForm = () => {
  const dispatch = useDispatch();
  const btnTitle = useSelector(citySelectors.getBtnTitle);
  const formFields = useSelector(citySelectors.getFieldsForm);

  const filterFields = formFields.filter(elem => elem === Object(elem));
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
      initialValues={res}
      onSubmit={async (values, actions) => {
        console.log(values);
        // dispatch(languagesOperations.addLanguages(values));
        // dispatch(usersOperations.addUser(values));
        // navigate(path);
        // submitForm(values);
        // actions.resetForm();
        // console.log(status);
      }}
    >
      {props => (
        <FormStyle onSubmit={props.handleSubmit} id="usersForm">
          {filterFields.map(elem => (
            <FormBox key={elem.id}>
              <LabelStyle style={{ marginRight: 'auto' }} htmlFor={elem.id}>
                {elem.label}
                <sup style={{ color: 'red', fontWeight: 'inherit' }}>*</sup>
                {elem.tooltip && (
                  <GrCircleQuestion
                    style={{ cursor: 'pointer' }}
                    title={elem.tooltip}
                  />
                )}
              </LabelStyle>

              <InputStyle
                type={elem.type}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={elem.value}
                id={elem.id}
                name={elem.id}
                placeholder={elem.id}
              />
            </FormBox>
          ))}
          <button style={theme.btn.btnGreen} type="submit">
            {btnTitle}
          </button>
        </FormStyle>
      )}
    </Formik>
  );
};

export default CreateCityForm;
