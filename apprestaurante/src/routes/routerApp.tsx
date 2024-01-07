import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayautPublic from "../pages/layautpublic";
import HomePage from "../pages/home";
import LoginForm from "../pages/login";
import LayautUser from "../compont/users/layautuser";
import Profile from "../compont/general/profile";
import { NotFound404Alternate } from "../compont/general/pagenotfound";
import LoadingSpinner from "../compont/general/loading";
import LayautAdmin from "../compont/admin/layautadmin";

const LazyUserComponent = lazy(() => import("../compont/users/home"));
const LazyCreateReservationComponent = lazy(() =>
  import("../compont/users/componet/createreservation")
);
const LazyListReservationComponent = lazy(() =>
  import("../compont/users/componet/listreservation")
);

const LazyAdminComponent = lazy(() => import("../compont/admin/home"));
const LazyListComponent = lazy(() =>
  import("../compont/admin/componet/Listviutdata")
);
const LazyUsersComponent = lazy(() =>
  import("../compont/admin/componet/Listuser")
);

const LazyEmailSentSuccessComponent = lazy(() =>
  import("../compont/general/pagemensage")
);
const LazyValidseccionComponent = lazy(() =>
  import("../pages/validationseccion")
);

const LazyEmailSendchange = lazy(() =>
  import("../compont/general/sendemail")
)
const LazyChangePassword = lazy(() =>
  import("../compont/general/changepassword")
)
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
              <Suspense fallback={<LoadingSpinner />}>
                <LazyUserComponent element={<LayautUser />} />
              </Suspense>
            }
          >
            <Route index element={<LazyCreateReservationComponent />} />
            <Route
              path="reservation"
              element={<LazyCreateReservationComponent />}
            />
            <Route
              path="listreservation"
              element={<LazyListReservationComponent />}
            />
            <Route path="perfil" element={<Profile />} />
          </Route>
          <Route
            path="admin"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyAdminComponent element={<LayautAdmin />} />
              </Suspense>
            }
          >
            <Route index element={<LazyListComponent />} />
            <Route path="listreservations" element={<LazyListComponent />} />
            <Route path="listusers" element={<LazyUsersComponent />} />
            <Route path="perfil" element={<Profile />} />
          </Route>
          <Route
            path="email-login"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyEmailSentSuccessComponent />
              </Suspense>
            }
          />

          <Route
            path="validacion/:token"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyValidseccionComponent />
              </Suspense>
            }
          />

          <Route path="*" element={<NotFound404Alternate />} />
          <Route path="/send-email/password" element={<LazyEmailSendchange />} />
          <Route path="/change-password" element={<LazyChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
