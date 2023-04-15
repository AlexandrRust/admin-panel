import { PageTableStyle } from './common/PageTableStyle.styled';
import { TableTh } from './common/TableTh.style';

import { TableTd } from './common/TableTd.style';
import { IconBox } from './common/IconBox.styled';
import { TableThBox } from './common/TableThBox.styled';
import { useState } from 'react';
import { IconArrowUp } from 'components/icons/IconArrowUp.styled';
import { IconArrowDown } from 'components/icons/iconArrowDown.styled';

const PageTable = ({ list }) => {
  // const [sortList, setSortList] = useState(list);

  // const HahdleSort = () => {
  //   console.log(sortList);
  //   console.log(listArray.sort(listArray.name).reverse());
  // };

  return (
    <>
      {!list ? (
        <div>Нечего нет</div>
      ) : (
        <PageTableStyle>
          <thead>
            <tr>
              <TableTh style={{ width: '8%' }}>
                <TableThBox>
                  ID
                  <IconBox>
                    <IconArrowUp />
                    <IconArrowDown />
                  </IconBox>
                </TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>
                  Firstname
                  <IconBox>
                    <IconArrowUp />
                    <IconArrowDown />
                  </IconBox>
                </TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>
                  Lastname
                  <IconBox>
                    <IconArrowUp />
                    <IconArrowDown />
                  </IconBox>
                </TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>
                  Email
                  <IconBox>
                    <IconArrowUp />
                    <IconArrowDown />
                  </IconBox>
                </TableThBox>
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
              <TableTh>Firstname</TableTh>
              <TableTh>Lastname</TableTh>
              <TableTh>Email</TableTh>
            </tr>
          </tfoot>
        </PageTableStyle>
      )}
    </>
  );
};

export default PageTable;
