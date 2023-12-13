import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import axios from "axios";

export default function AdminLayout(){
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        checkUser()
    },[])
    const checkUser = async () => {
        const user = await new Promise((resolve, reject) => auth.onAuthStateChanged((user) => resolve(user), (e) => reject(e)));
        if(!user) navigate("/")
        const { data } = await axios.get("/api/check-admin", {
            params: {
                uid: user.uid
            }
        })
        if(!(Array.isArray(data.result) && data.result.length > 0)) navigate("/")
        setLoading(false)
    }

    if(loading) {
        return <div>Loading !</div>
    } else {
        return <Outlet />
    }
}