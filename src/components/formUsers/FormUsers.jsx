import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usersOperations } from 'redux/users';

import { GrCircleQuestion } from 'react-icons/gr';
import { useDispatch } from 'react-redux';

const FormUsers = ({ fields, path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = fields.reduce((acc, { id }) => {
    acc[id] = '';
    return acc;
  }, {});
  console.log(fields);
  return (
    <Formik
      initialValues={res}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(usersOperations.addUser(values));
        // navigate(path);
        actions.resetForm();
      }}
    >
      {props => (
        <FormStyle onSubmit={props.handleSubmit} id="usersForm">
          {fields.map(elem => (
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
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                // value={}
                id={elem.id}
                name={elem.id}
              />
            </FormBox>
          ))}
        </FormStyle>
      )}
    </Formik>
  );
};

export default FormUsers;
