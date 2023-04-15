import { InputFilterStyle } from './common/InputFilterStyle.styled';
import { Formik } from 'formik';
import { usersOperations } from 'redux/users';
import { useDispatch } from 'react-redux';

const InputSearch = ({ placeholder }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ nickName: '' }}
      onSubmit={(values, actions) => {
        dispatch(usersOperations.getUserByNickName(values));
        actions.resetForm();
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} id="search-nickName">
          <InputFilterStyle
            type="text"
            placeholder={placeholder}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.nickName}
            name="nickName"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
        </form>
      )}
    </Formik>
    // <form id="search-nickName" onSubmit={handelSubmit}>
    //   <InputFilterStyle
    //     placeholder={placeholder}
    //     type={'search'}
    //     // onChange={e.target.value}
    //   />
    // </form>
  );
};

export default InputSearch;
