import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

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
const Roles = lazy(() => import('./pages/Roles'));
const Permissions = lazy(() => import('./pages/Permissions'));
const Products = lazy(() => import('./pages/Products'));
const CreateProduct = lazy(() => import('./pages/CreateProduct'));
const CategoryProducts = lazy(() => import('./pages/CategoryProducts'));
const CreateCategoryProducts = lazy(() =>
  import('./pages/CreateCategoryProducts')
);

export const App = () => {
  return (
    <>
      <Suspense>
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
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/news" element={<News />} />
            <Route path="/bunners" element={<Bunners />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/menus/create" element={<CreateMenus />} />
            <Route path="/users" element={<Users />} />
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

          {/* <Route
            path="/"
            element={
              <PrivateRoute redirectTo="auths/login">
                <SharedLayout />
              </PrivateRoute>
            }
          /> */}
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
  );
};
