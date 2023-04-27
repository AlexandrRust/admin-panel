import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';
import { PageTitle } from 'components/pageTitle/PageTtitle.styled';
import { Section } from 'components/section/Section.styled';
import { UserShowAvatarBox } from 'components/userShowAvatarBox/UserShowAvatarBox.styled';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { usersOperations, usersSelectors } from 'redux/users';
import { UserShowBox } from 'userShowBox/UserShowBox.styled';
import { UserShowCard } from 'userShowCard/UserShowCard.styled';
import { UserShowItemTitle } from 'userShowListItem/common/UserShowItemTitle.styled';
import { UserShowListItem } from 'userShowListItem/UserShowListItem.styled';
import noLogo from '../image/no-image.jpg';

const UserInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userShow = useSelector(usersSelectors.getUserShow);
  const { prevPath, nickName } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersOperations.getUserShow({ nickName }));
  }, [dispatch, nickName]);
  const backIcon = () => {
    navigate(prevPath);
  };
  return (
    <PageContentBox>
      <Section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <BiArrowBack style={{ cursor: 'pointer' }} onClick={backIcon} />
          <PageTitle>User Info</PageTitle>
        </div>
      </Section>
      <UserShowBox>
        <UserShowCard>
          <UserShowAvatarBox>
            {!userShow.avatar ? (
              <img src={noLogo} alt="avatar" height={'250px'} />
            ) : (
              <img src={userShow.avatar} height={'250px'} alt="avatar" />
            )}
          </UserShowAvatarBox>
          <ul
            style={{
              padding: '20px',
              margin: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <UserShowListItem>
              <UserShowItemTitle>Firs name:</UserShowItemTitle>
              <span>{userShow.firstname}</span>
            </UserShowListItem>
            <UserShowListItem>
              <UserShowItemTitle>Last name:</UserShowItemTitle>
              <span>{userShow.lastname}</span>
            </UserShowListItem>
            <UserShowListItem>
              <UserShowItemTitle>Nick name:</UserShowItemTitle>
              <span>{userShow.nickname}</span>
            </UserShowListItem>
            <UserShowListItem>
              <UserShowItemTitle>Email:</UserShowItemTitle>
              <span>{userShow.email}</span>
            </UserShowListItem>
            <UserShowListItem>
              <UserShowItemTitle>Phone:</UserShowItemTitle>
              <span>{userShow.phone}</span>
            </UserShowListItem>
          </ul>
        </UserShowCard>
      </UserShowBox>
    </PageContentBox>
  );
};

export default UserInfo;
