import { PageTableStyle } from './common/PageTableStyle.styled';
import { TableTh } from './common/TableTh.style';
import { TableTd } from './common/TableTd.style';
import { TableThBox } from './common/TableThBox.styled';
import { useDispatch } from 'react-redux';
import { usersOperations } from 'redux/users';
import { Link, useLocation } from 'react-router-dom';
import theme from 'theme/theme';

const PageTable = ({ list, title, btnTitle }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const deleteUser = nickName => {
    // eslint-disable-next-line no-restricted-globals
    const getconfirm = confirm(
      `Вы действительно хотите удалить пользователя ${nickName}`
    );
    if (getconfirm) {
      dispatch(usersOperations.UserDelete(nickName));
    }
  };

  const handleClick = e => {
    const nickName = e.currentTarget.dataset.value;
    dispatch(usersOperations.UserFormGet(nickName));
  };
  return (
    <>
      {list.length === 0 ? (
        <div>Нечего нет</div>
      ) : (
        <PageTableStyle>
          <thead>
            <tr>
              <TableTh>
                <TableThBox>Firstname</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Lastname</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Nickname</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Email</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Phone</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Actions</TableThBox>
              </TableTh>
            </tr>
          </thead>
          <tbody>
            {list.map(elem => (
              <tr key={elem.id}>
                <TableTd>{elem.firstname}</TableTd>
                <TableTd>{elem.lastname}</TableTd>
                <TableTd>{elem.nickname}</TableTd>
                <TableTd>{elem.email}</TableTd>
                <TableTd>{elem.phone}</TableTd>
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
                        // textAlign: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        // gap: '5px',
                      }}
                      to={`update/${elem.nickname}`}
                      data-value={elem.nickname}
                      onClick={handleClick}
                      state={{
                        title: title,
                        // fields: formFields,
                        btnTitle: btnTitle,
                        prevPath: location.pathname,
                        nickName: elem.nickname,
                      }}
                    >
                      <button style={theme.btn.btnEdit} type="button">
                        Update
                      </button>
                    </Link>
                    <Link
                      to={`/userShow/${elem.nickname}`}
                      state={{
                        prevPath: location.pathname,
                        nickName: elem.nickname,
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                      }}
                    >
                      <button style={theme.btn.btnBlue} type="button">
                        Show
                      </button>
                    </Link>
                    <button
                      style={theme.btn.btnRed}
                      type="button"
                      onClick={() => deleteUser(elem.nickname)}
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
              <TableTh>
                <TableThBox>Firstname</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Lastname</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Email</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Phone</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Nickname</TableThBox>
              </TableTh>
              <TableTh>
                <TableThBox>Actions</TableThBox>
              </TableTh>
            </tr>
          </tfoot>
        </PageTableStyle>
      )}
    </>
  );
};

export default PageTable;
