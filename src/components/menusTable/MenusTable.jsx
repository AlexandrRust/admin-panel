import { PageTableStyle } from 'components/pageTable/common/PageTableStyle.styled';
import { TableTd } from 'components/pageTable/common/TableTd.style';
import { TableTh } from 'components/pageTable/common/TableTh.style';
import { TableThBox } from 'components/pageTable/common/TableThBox.styled';
import { BiEditAlt, BiXCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { menusOperations } from 'redux/menus';
import theme from 'theme/theme';

const MenusTable = ({ list, title, btnTitle, prevPath }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    // const id = e.currentTarget.dataset.value;
    // dispatch(rolesOperations.getRoleForm(id));
  };
  const deleteMenusItem = (id, name) => {
    // eslint-disable-next-line no-restricted-globals
    const getconfirm = confirm(
      `Вы действительно хотите удалить пункт меню ${name}`
    );
    if (getconfirm) {
      dispatch(menusOperations.menusDelete(id));
    }
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
                <TableTd>{elem.title}</TableTd>
                <TableTd>{elem.path}</TableTd>
                <TableTd>{elem.parent}</TableTd>
                <TableTd>{elem.type}</TableTd>
                <TableTd>{elem.sort_order}</TableTd>
                <TableTd style={{ width: '8%' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                      }}
                      to={`update/${elem.title.toLowerCase()}`}
                      data-value={elem.id}
                      onClick={handleClick}
                      state={{
                        title: title,
                        btnTitle: btnTitle,
                        prevPath: prevPath,
                        idMenus: elem.id,
                        list: list,
                      }}
                    >
                      <button style={theme.btn.btnEdit} type="button">
                        Update
                      </button>
                    </Link>
                    <button
                      style={theme.btn.btnRed}
                      type="button"
                      onClick={() => deleteMenusItem(elem.nickname)}
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

export default MenusTable;
