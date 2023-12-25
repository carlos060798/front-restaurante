import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import LoginForm from "../pages/login";
import LayautPublic from "../pages/layautpublic";


function RoutesApp() {
    return ( <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayautPublic/>}>
          <Route index element={<HomePage />} />
          <Route path="/inicio" element={<HomePage/>} />
          <Route path="/login" element={<LoginForm />} />
                </Route>
    
      </Routes>
    </BrowserRouter>
    </> );
}

export default RoutesApp;