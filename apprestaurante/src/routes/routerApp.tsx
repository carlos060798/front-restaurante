import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayautPublic from '../pages/layautpublic';
import HomePage from '../pages/home';
import LoginForm from '../pages/login';
import LayautAdmin from '../compont/admin/layautadmin';

import Profile from '../compont/general/profile';
import { NotFound404Alternate } from '../compont/general/pagenotfound';
import LoadingSpinner from '../compont/general/loading';


const LazyUserComponent = lazy(() => import('../compont/admin/home'));
const LazyCreateReservationComponent = lazy(() => import('../compont/admin/componet/createreservation'));
const LazyListReservationComponent = lazy(() => import('../compont/admin/componet/listreservation'));
const LazyEmailSentSuccessComponent = lazy(() => import('../compont/general/pagemensage'));
const LazyValidseccionComponent = lazy(() => import('../pages/validationseccion'));

function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayautPublic />}>
            <Route index element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
          </Route>

          <Route
            path="user"
            element={
              <Suspense fallback={<LoadingSpinner/>}>
                <LazyUserComponent element={<LayautAdmin />} />
              </Suspense>
            }
          >
            <Route index element={<LazyCreateReservationComponent />} />
            <Route path="reservation" element={<LazyCreateReservationComponent />} />
            <Route path="listreservation" element={<LazyListReservationComponent />} />
            <Route path="perfil" element={<Profile />} />
          </Route>

          <Route
            path="email-login"
            element={
              <Suspense fallback={<LoadingSpinner/>}>
                <LazyEmailSentSuccessComponent />
              </Suspense>
            }
          />

          <Route
            path="validacion/:token"
            element={
              <Suspense fallback={<LoadingSpinner/>}>
                <LazyValidseccionComponent />
              </Suspense>
            }
          />

          <Route path="*" element={<NotFound404Alternate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
