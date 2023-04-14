import { FormBox } from 'components/form/common/FormBox.styled';
import { InputStyle } from 'components/form/common/InputStyle.styled';
import { LabelStyle } from 'components/form/common/LabelStyle.styled';
import { FormStyle } from 'components/form/FormStyle.styled';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { GrCircleQuestion } from 'react-icons/gr';

const FormUsers = ({ fields, path }) => {
  const navigate = useNavigate();
  const res = fields.reduce((acc, { id }) => {
    acc[id] = '';
    return acc;
  }, {});

  return (
    <Formik
      initialValues={res}
      onSubmit={(values, actions) => {
        console.log(values);
        navigate(path);
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
                {elem.tooltip && <GrCircleQuestion />}
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
