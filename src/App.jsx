import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
// import { useSelector } from 'react-redux';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const SharedLayout = lazy(() => import('./layout/SharedLayout'));
const UserInfo = lazy(() => import('./pages/UserInfo'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Pages = lazy(() => import('./pages/Pages'));
const News = lazy(() => import('./pages/News'));
const Bunners = lazy(() => import('./pages/Banners'));
const Menus = lazy(() => import('./pages/Menus'));
const CreateMenus = lazy(() => import('./pages/CreateMenus'));
const Users = lazy(() => import('./pages/Users'));
const CreateUsers = lazy(() => import('./components/createUsers/CreateUsers'));
const UpdateUser = lazy(() => import('components/updateUser/UpdateUser'));
const Roles = lazy(() => import('./pages/Roles'));
const Permissions = lazy(() => import('./pages/Permissions'));
const Products = lazy(() => import('./pages/Products'));
const CreateProduct = lazy(() => import('./pages/CreateProduct'));
const CategoryProducts = lazy(() => import('./pages/CategoryProducts'));
const CreateCategoryProducts = lazy(() =>
  import('./pages/CreateCategoryProducts')
);

export const App = () => {
  const dispatch = useDispatch();
  // const IsRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);
  useEffect(() => {
    // dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* {IsRefreshingUser ? (
        <div>Load...</div>
      ) : ( */}
      <>
        <Suspense
          fallback={
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
          }
        >
          <Routes>
            <Route
              path="auths/login"
              element={
                <PublicRoute restricted redirectTo="/">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="auths/login">
                  <SharedLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="/userShow/:user" element={<UserInfo />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/news" element={<News />} />
              <Route path="/bunners" element={<Bunners />} />
              <Route path="/menus" element={<Menus />} />
              <Route path="/menus/create" element={<CreateMenus />} />
              <Route path="/users" element={<Users />} />
              <Route path=":path/create" element={<CreateUsers />} />
              <Route path=":path/update/:user" element={<UpdateUser />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/permissions" element={<Permissions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/create" element={<CreateProduct />} />
              <Route path="/categoryProducts" element={<CategoryProducts />} />
              <Route
                path="/categoryProducts/create"
                element={<CreateCategoryProducts />}
              />
            </Route>
            <Route path="*" element={<div></div>} />
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
      {/* )} */}
    </>
  );
};
