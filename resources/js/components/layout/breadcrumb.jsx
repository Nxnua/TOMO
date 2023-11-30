import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function BreadCrumb() {
    return (
        <div>
            <div className="ml-28 w-100 flex justify-start whitespace-nowrap">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item icon={HiHome}>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        <Link to="/trips">Trips</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Golden Eagle Festival</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    );
}
