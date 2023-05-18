import { PageTableStyle } from 'components/pageTable/common/PageTableStyle.styled';
import { TableTd } from 'components/pageTable/common/TableTd.style';
import { TableTh } from 'components/pageTable/common/TableTh.style';
import { TableThBox } from 'components/pageTable/common/TableThBox.styled';
import { BiXCircle } from 'react-icons/bi';
import theme from 'theme/theme';

const CountryTable = ({ list, title, btnTitle, prevPath }) => {
  //   const dispatch = useDispatch();
  //   const handleClick = e => {
  //     const id = e.currentTarget.dataset.value;
  //     dispatch(rolesOperations.getRoleForm(id));
  //   };
  const handleDelete = (id, name) => {
    // eslint-disable-next-line no-restricted-globals
    const getconfirm = confirm(
      `Вы действительно хотите удалить страну ${name}`
    );
    if (getconfirm) {
      console.log(id);
    }
    // dispatch(rolesOperations.RoleDelete(id));
    // alert(isAdmin);
  };
  let tableTitles = [];
  if (list.length === 0) {
    return tableTitles;
  } else {
    const tableTitlesFilter = Object.keys(list[0]);
    tableTitles = tableTitlesFilter.filter(
      elem => elem !== 'updated_at' && elem !== 'created_at'
    );
  }

  return (
    <>
      {list.length === 0 ? (
        <div>Нечего нет</div>
      ) : (
        <PageTableStyle>
          <thead>
            <tr>
              {tableTitles.map(elem => (
                <TableTh key={elem}>
                  <TableThBox>{elem}</TableThBox>
                </TableTh>
              ))}
              <TableTh>
                <TableThBox style={{ width: '8%' }}>Actions</TableThBox>
              </TableTh>
            </tr>
          </thead>
          <tbody>
            {list.map(elem => (
              <tr key={elem.id}>
                <TableTd>{elem.id}</TableTd>
                <TableTd>{elem.name.en}</TableTd>
                <TableTd>{elem.shortname}</TableTd>
                <TableTd>{elem.phone_code}</TableTd>
                {/* <TableTd>{elem.status}</TableTd> */}
                <TableTd style={{ width: '8%' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <button
                      style={theme.btn.btnRed}
                      type="button"
                      onClick={() => handleDelete(elem.id, elem.name.en)}
                    >
                      Delete
                    </button>
                  </div>
                </TableTd>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {tableTitles.map(elem => (
                <TableTh key={elem}>
                  <TableThBox>{elem}</TableThBox>
                </TableTh>
              ))}
              <TableTh style={{ width: '8%' }}>
                <TableThBox>Actions</TableThBox>
              </TableTh>
            </tr>
          </tfoot>
        </PageTableStyle>
      )}
    </>
  );
};

export default CountryTable;
