import { PageTableStyle } from './common/PageTableStyle.styled';
import { TableTh } from './common/TableTh.style';
import { TableTd } from './common/TableTd.style';
import { TableThBox } from './common/TableThBox.styled';
import { useDispatch } from 'react-redux';
import { usersOperations } from 'redux/users';
import { Link, useLocation } from 'react-router-dom';
import { BiEditAlt, BiIdCard, BiXCircle } from 'react-icons/bi';

const PageTable = ({ list, title, btnTitle }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const deleteUser = nickName => {
    dispatch(usersOperations.UserDelete(nickName));
  };

  const handleClick = e => {
    const nickName = e.target.dataset.value;
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
                        display: 'flex',
                        alignItems: 'center',
                        // gap: '5px',
                      }}
                      to={`${location.pathname}/update/${elem.nickname}`}
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
                      <BiEditAlt
                        fill="blue"
                        data-value={elem.nickname}
                        onClick={handleClick}
                        title="Update user"
                        style={{ width: '20px', height: '20px' }}
                      />
                    </Link>
                    {/* <button value={elem.nickname} onClick={handleClick}>
                    change
                  </button> */}
                    <Link
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
                    </Link>
                    <BiXCircle
                      fill="blue"
                      style={{
                        cursor: 'pointer',
                        width: '20px',
                        height: '20px',
                      }}
                      type="button"
                      onClick={() => deleteUser(elem.nickname)}
                      title="Delete user"
                    />
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
