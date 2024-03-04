import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout()
{
    return(<div className="app-container">
    <Sidebar/>
    
        <Outlet/>
   
    </div>)
}
export default Layout;