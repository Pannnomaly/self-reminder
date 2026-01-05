import { Link } from "react-router-dom";

export default function Navbar ()
{
    return (
        <nav className="bg-pink-200 shadow-md text-navbar font-bold flex justify-between items-center h-20 text-2xl px-10">
            <div className="flex items-center">
                <Link to = "/">
                    <div className="flex items-center gap-x-5">
                        <img src="PannProfile002.PNG" alt="Pann's logo" className="w-15" />
                        <p>
                            Pannnomaly
                        </p>
                    </div>
                </Link>
            </div>
            <div className=" flex items-center gap-x-5">
                <div className="px-5 py-3 rounded-md hover:bg-pink-300 hover:text-pink-100 transition duration-300 ease-in-out cursor-pointer">
                    <Link to = "developer_acts">
                        <p>The Acts of the Developers</p>
                    </Link>
                </div>
                <div className="px-5 py-3 rounded-md hover:bg-pink-300 hover:text-pink-100 transition duration-300 ease-in-out cursor-pointer">
                    <Link to = "about_me">
                        <p>About me</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}