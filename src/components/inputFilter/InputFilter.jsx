import { InputFilterStyle } from './common/InputFilterStyle.styled';
import { addFilterInput } from 'redux/users/users-slice';
import { useDispatch } from 'react-redux';

const InputFilter = ({ placeholder }) => {
  const dispatch = useDispatch();
  const handelChange = e => {
    const filter = e.target.value;
    dispatch(addFilterInput(filter));
  };
  return (
    <InputFilterStyle
      placeholder={placeholder}
      type={'search'}
      onChange={handelChange}
    />
  );
};

export default InputFilter;
