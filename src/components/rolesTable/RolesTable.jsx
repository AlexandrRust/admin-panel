import { PageTableStyle } from 'components/pageTable/common/PageTableStyle.styled';
import { TableTd } from 'components/pageTable/common/TableTd.style';
import { TableTh } from 'components/pageTable/common/TableTh.style';
import { TableThBox } from 'components/pageTable/common/TableThBox.styled';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { rolesOperations } from 'redux/roles';
import theme from 'theme/theme';

const RolesTable = ({ list, title, btnTitle, prevPath }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    const id = e.currentTarget.dataset.value;
    dispatch(rolesOperations.getRoleForm(id));
  };
  const deleteRole = (title, id) => {
    // eslint-disable-next-line no-restricted-globals
    const getconfirm = confirm(
      `Вы действительно хотите удалить роль "${title}"`
    );
    if (getconfirm) {
      dispatch(rolesOperations.RoleDelete(id));
      toast.success(`${title} has been removed`);
    }
  };
  let tableTitles = [];
  if (list.length === 0) {
    return tableTitles;
  } else {
    tableTitles = Object.keys(list[0]);
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
                <TableTd>{elem.alias}</TableTd>
                <TableTd>{elem.title}</TableTd>
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
                      to={`update/${elem.title}`}
                      data-value={elem.id}
                      onClick={handleClick}
                      state={{
                        title: title,
                        btnTitle: btnTitle,
                        prevPath: prevPath,
                        idRole: elem.id,
                        name: elem.title,
                      }}
                    >
                      <button style={theme.btn.btnEdit} type="button">
                        Update
                      </button>
                    </Link>
                    <button
                      style={theme.btn.btnRed}
                      type="button"
                      onClick={() => deleteRole(elem.title, elem.id)}
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

export default RolesTable;
