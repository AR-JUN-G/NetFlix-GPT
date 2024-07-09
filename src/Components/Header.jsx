import { useNavigate,useLocation } from "react-router-dom";
import { auth } from "../utils/fireBase";
import { signOut } from "firebase/auth";

const Header=()=>{
    const navigate=useNavigate();
    const location = useLocation();

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error")
        });
    }
    return(
        <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44 " 
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
            {location.pathname === '/browse' && (
                <button className="font-bold text-white" onClick={handleSignOut}>SignOut</button>
            )}
        </div>
    )
}

export default Header;