import { InputFilterStyle } from 'components/inputFilter/common/InputFilterStyle.styled';
import { SearchBox } from 'components/searchBox/SearchBox.styled';
import { SelectFilterStyle } from 'components/selectFilter/common/SelectFilterStyle.styled';
import { SelectOptionTitle } from 'components/selectFilter/common/SelectOptionTitle.styled';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelectors, usersOperations } from 'redux/users';
import theme from 'theme/theme';

const SearchUser = () => {
  const selectOptions = useSelector(usersSelectors.GetRoles);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ nickName: '', role: '0' }}
      onSubmit={(values, actions) => {
        dispatch(usersOperations.getUserByNickName(values));
      }}
    >
      {props => (
        <Form>
          <SearchBox>
            <InputFilterStyle
              placeholder="User name"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.nickName}
              name="nickName"
            />
            <SelectFilterStyle
              name="role"
              as="select"
              onChange={props.handleChange}
              value={props.values.role}
            >
              <SelectOptionTitle value="0">User role</SelectOptionTitle>
              {selectOptions.map(elem => (
                <option key={elem.id} value={elem.id}>
                  {elem.title}
                </option>
              ))}
            </SelectFilterStyle>
            <button style={theme.btn.btnGreen} type="submit">
              Search
            </button>
            <button
              style={theme.btn.btnGreen}
              type="reset"
              onClick={() => props.resetForm}
              // onSubmit={handleClick}
            >
              Clear
            </button>
          </SearchBox>
        </Form>
      )}
    </Formik>
  );
};

export default SearchUser;
