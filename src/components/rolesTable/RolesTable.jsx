import { PageTableStyle } from 'components/pageTable/common/PageTableStyle.styled';
import { TableTd } from 'components/pageTable/common/TableTd.style';
import { TableTh } from 'components/pageTable/common/TableTh.style';
import { TableThBox } from 'components/pageTable/common/TableThBox.styled';
import { BiEditAlt, BiXCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { rolesOperations } from 'redux/roles';

const RolesTable = ({ list, title, btnTitle, prevPath }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    const id = e.currentTarget.dataset.value;
    dispatch(rolesOperations.getRoleForm(id));
  };
  const deleteRole = id => {
    dispatch(rolesOperations.RoleDelete(id));
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
                      }}
                      to={`update/${elem.title}`}
                      data-value={elem.id}
                      onClick={handleClick}
                      state={{
                        title: title,
                        btnTitle: btnTitle,
                        prevPath: prevPath,
                        idRole: elem.id,
                      }}
                    >
                      <BiEditAlt
                        fill="blue"
                        data-value={elem.id}
                        title="Update user"
                        style={{ width: '20px', height: '20px' }}
                      />
                    </Link>

                    {/* <Link
                      to={`/userShow/${elem.nickname}`}
                      state={{
                        prevPath: location.pathname,
                        nickName: elem.nickname,
                      }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <BiIdCard
                        fill="blue"
                        style={{ width: '20px', height: '20px' }}
                        title="Show user info"
                      />
                    </Link> */}
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

export default RolesTable;
