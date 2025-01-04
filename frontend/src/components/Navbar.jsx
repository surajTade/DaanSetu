import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar () {

    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar flex flex-row justify-start items-center bg-black text-white p-4">
                <img src={logo} alt="logo" className="h-14 m-4" />
                
                <ul className="flex flex-row space-x-5 ml-10">
                    <li onClick={() => navigate("/")} className="text-2xl hover:text-blue-300 hover:transform hover:cursor-pointer hover:-translate-y-1 transition-transform duration-300">Home</li>
                    <li onClick={() => navigate("/search")} className="text-2xl hover:text-blue-300 hover:transform hover:cursor-pointer hover:-translate-y-1 transition-transform duration-300">NGO's</li>
                    <li className="text-2xl hover:text-blue-300 hover:transform hover:cursor-pointer hover:-translate-y-1 transition-transform duration-300">Donation</li>
                    <li className="text-2xl hover:text-blue-300 hover:transform hover:cursor-pointer hover:-translate-y-1 transition-transform duration-300">Profile</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
