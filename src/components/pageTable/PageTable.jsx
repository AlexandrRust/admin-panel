import { PageTableStyle } from './common/PageTableStyle.styled';
import { TableTh } from './common/TableTh.style';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { TableTd } from './common/TableTd.style';
import { IconBox } from './common/IconBox.styled';
import { TableThBox } from './common/TableThBox.styled';
import { useState } from 'react';

const PageTable = ({ list }) => {
  // const [sortList, setSortList] = useState(list);

  // const HahdleSort = () => {
  //   console.log(sortList);
  //   console.log(listArray.sort(listArray.name).reverse());
  // };

  return (
    <PageTableStyle>
      <thead>
        <tr>
          <TableTh style={{ width: '8%' }}>
            <TableThBox>
              ID
              <IconBox>
                <FiArrowUp
                  style={{
                    height: '12px',
                    width: '12px',
                    opacity: '0.3',
                    cursor: 'pointer',
                  }}
                />
                <FiArrowDown
                  style={{
                    height: '12px',
                    width: '12px',
                    opacity: '0.3',
                    cursor: 'pointer',
                  }}
                />
              </IconBox>
            </TableThBox>
          </TableTh>
          <TableTh>
            Назва
            <FiArrowUp />
            <FiArrowDown />
          </TableTh>
          <TableTh>
            Псевдонім
            <FiArrowUp />
            <FiArrowDown />
          </TableTh>
          <TableTh>
            Дії
            <FiArrowUp />
            <FiArrowDown />
          </TableTh>
        </tr>
      </thead>
      <tbody>
        {list.map(elem => (
          <tr key={elem.id}>
            <TableTd>{elem.id}</TableTd>
            <TableTd>{elem.firstname}</TableTd>
            <TableTd>{elem.email}</TableTd>
            <TableTd>{elem.nickname}</TableTd>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <TableTh>ID</TableTh>
          <TableTh>firstname</TableTh>
          <TableTh>lastname</TableTh>
          <TableTh>email</TableTh>
        </tr>
      </tfoot>
    </PageTableStyle>
  );
};

export default PageTable;
