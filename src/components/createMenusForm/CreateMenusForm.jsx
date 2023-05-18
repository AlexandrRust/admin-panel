import { MenuItem, Select } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import { GrCircleQuestion } from 'react-icons/gr';
import { FormBox } from '../form/common/FormBox.styled';
import { InputStyle } from '../form/common/InputStyle.styled';
import { LabelStyle } from '../form/common/LabelStyle.styled';
import { FormStyle } from '../form/FormStyle.styled';

const CreateMenusForm = ({ fields, submitForm, menuList }) => {
  const [parent, setParent] = useState('');
  // console.log(menuList);
  const filterFields = fields.filter(elem => elem === Object(elem));
  const changeSelect = e => {
    setParent(e.target.value);
  };
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
        const getValues = { ...values, parent: parent };
        submitForm(getValues);
        actions.resetForm();
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
              {elem.element === 'input' ? (
                <InputStyle
                  type={elem.type}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={elem.value}
                  id={elem.id}
                  name={elem.id}
                  placeholder={elem.id}
                />
              ) : (
                <>
                  <Select
                    value={parent}
                    onChange={changeSelect}
                    style={{ width: '100%', fontSize: '1rem', height: '38px' }}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {menuList.map(elem => (
                      <MenuItem key={elem.id} value={elem.id}>
                        {elem.title}
                      </MenuItem>
                    ))}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </>
                // <select
                //   type={elem.type}
                //   onChange={props.handleChange}
                //   onBlur={props.handleBlur}
                //   value={elem.value}
                //   id={elem.id}
                //   name={elem.id}
                //   placeholder={elem.id}
                // />
              )}
            </FormBox>
          ))}
        </FormStyle>
      )}
    </Formik>
  );
};

export default CreateMenusForm;
