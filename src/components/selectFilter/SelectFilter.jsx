import { SelectFilterStyle } from './common/SelectFilterStyle.styled';
import { usersSelectors } from 'redux/users';
import { useSelector } from 'react-redux';
import { SelectOptionTitle } from './common/SelectOptionTitle.styled';

const SelectFilter = () => {
  const selectOptions = useSelector(usersSelectors.GetRoles);
  const handelSelect = e => {
    // console.log(e.target.value);
  };
  return (
    <SelectFilterStyle name="select" onChange={handelSelect}>
      <SelectOptionTitle value="">User role</SelectOptionTitle>
      {selectOptions.map(elem => (
        <option key={elem.id} value={elem.title}>
          {elem.title}
        </option>
      ))}
    </SelectFilterStyle>
  );
};

export default SelectFilter;
