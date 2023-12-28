import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import LoginForm from "../pages/login";
import LayautPublic from "../pages/layautpublic";
import RutaUser from "../compont/admin/home";
import LayautAdmin from "../compont/admin/layautadmin";
import CreateRerseva from "../compont/admin/componet/createreservation";
import ListReservation from "../compont/admin/componet/listreservation";
import Profile from "../compont/general/profile";
import Validseccion from "../pages/validationseccion";
import {NotFound404Alternate} from "../compont/general/pagenotfound";
import EmailSentSuccess from "../compont/general/pagemensage";



function RoutesApp() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayautPublic />}>
          <Route index element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route path="user" element={<RutaUser element={<LayautAdmin />} />}>
          <Route index element={<CreateRerseva/>} />
          <Route path="reservation" element={<CreateRerseva/>} />
          <Route path="listreservation" element={<ListReservation />} />
          <Route path="perfil" element={<Profile/>} />
        </Route>
        <Route path="email-login" element={<EmailSentSuccess />} />
        <Route path="validacion/:token" element={<Validseccion />} />
        <Route path="*" element={<NotFound404Alternate/>} />
      </Routes>

      

  
    </BrowserRouter >
    </> );
}

export default RoutesApp;