import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usersOperations, usersSelectors } from 'redux/users';

import { GrCircleQuestion } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const FormUsers = ({ fields, path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCreate = useSelector(usersSelectors.getIsCreate);

  const res = fields.reduce((acc, { id, value }) => {
    if (!value) {
      acc[id] = '';
    } else {
      acc[id] = value;
    }
    return acc;
  }, {});
  useEffect(() => {
    if (isCreate) {
      navigate(path);
    }
  }, [navigate, path, isCreate]);

  return (
    <Formik
      initialValues={res}
      onSubmit={async (values, actions) => {
        dispatch(usersOperations.addUser(values));
        // navigate(path);
        actions.resetForm();
        // console.log(status);
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
                value={elem.value}
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
