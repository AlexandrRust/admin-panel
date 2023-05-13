import { PageTableStyle } from 'components/pageTable/common/PageTableStyle.styled';
import { TableTd } from 'components/pageTable/common/TableTd.style';
import { TableTh } from 'components/pageTable/common/TableTh.style';
import { TableThBox } from 'components/pageTable/common/TableThBox.styled';
import { BiEditAlt, BiXCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { menusOperations } from 'redux/menus';

const MenusTable = ({ list, title, btnTitle, prevPath }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    const id = e.currentTarget.dataset.value;
    // dispatch(rolesOperations.getRoleForm(id));
  };
  const deleteRole = id => {
    dispatch(menusOperations.menusDelete(id));
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
                      <BiEditAlt
                        fill="blue"
                        data-value={elem.id}
                        title="Update user"
                        style={{ width: '20px', height: '20px' }}
                      />
                    </Link>

                    <BiXCircle
                      fill="blue"
                      style={{
                        cursor: 'pointer',
                        width: '20px',
                        height: '20px',
                      }}
                      type="button"
                      onClick={() => deleteRole(elem.id)}
                      title="Delete user"
                    />
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
