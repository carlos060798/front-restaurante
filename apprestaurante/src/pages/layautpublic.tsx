import { Outlet } from "react-router-dom";
import { Menu} from "../compont/general/menu";
function LayautPublic() {
    return ( <>
     <Menu/>
     <Outlet/>

    </> );
}

export default LayautPublic;