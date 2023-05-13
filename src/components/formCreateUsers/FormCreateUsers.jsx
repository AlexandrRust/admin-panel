import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { Formik } from 'formik';

import { GrCircleQuestion } from 'react-icons/gr';

const FormCreateUsers = ({ fields, submitForm }) => {
  const filterFields = fields.filter(elem => elem === Object(elem));
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
        // dispatch(usersOperations.addUser(values));
        // navigate(path);
        submitForm(values);
        actions.resetForm();
        // console.log(status);
      }}
    >
      {props => (
        <FormStyle onSubmit={props.handleSubmit} id="usersForm">
          {filterFields.map(elem => (
            <FormBox key={elem.id}>
              <LabelStyle htmlFor={elem.id}>
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
        </FormStyle>
      )}
    </Formik>
  );
};

export default FormCreateUsers;
