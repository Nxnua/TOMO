import Footer from "../components/footer";
import Sidebar from "./sidebar";
import Dashboard  from "./dashboard";
import { Outlet } from "react-router-dom";

export default function Profile() {
    return (
        <div>
            <div className="flex">
                <div className='basis-[12%] h-[100vh] border'>
                    <Sidebar/>
                </div>
                <div className='basis-[88%] border'>
                    <Dashboard/>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div> 
            <div><Footer/></div>
        </div>
    );
}
