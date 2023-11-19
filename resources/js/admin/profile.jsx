import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "./sidebar";
import Dashboard  from "./dashboard";

export default function Profile() {
    return (
        <div>
            <div><Header/></div>
            <div className="flex">
                <div className='basis-[12%] h-[100vh] border'>
                    <Sidebar/>
                </div>
                <div className='basis-[88%] border'>
                    <Dashboard/>
                </div>
            </div> 
            <div><Footer/></div>
        </div>
    );
}
