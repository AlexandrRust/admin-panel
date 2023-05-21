import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { Container } from '../components/container/Container.styled';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NavBar from '../components/navBar/NavBar';
import { PageContentBox } from 'components/pageContentBox/PageContentBox.styled';

const SharedLayout = () => {
  const [isOpen, setIsopen] = useState(true);

  const openCloseNavBar = () => {
    setIsopen(!isOpen);
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          // width: '100%',
          boxSizing: 'border-box',
          flexBasis: 'calc(100%/2)',
        }}
      >
        <NavBar openNavBar={openCloseNavBar} isOpen={isOpen} />
        <Container>
          <Header openNavBar={openCloseNavBar} isOpen={isOpen} />
          <Suspense
            fallback={
              <PageContentBox style={{ position: 'reletive' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translate(0, -50%)',
                  }}
                >
                  <RotatingLines
                    strokeColor="blue"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                </div>
              </PageContentBox>
            }
          >
            <Outlet />
          </Suspense>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default SharedLayout;
