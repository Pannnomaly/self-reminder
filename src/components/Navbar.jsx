import { Link } from "react-router-dom";

export default function Navbar ()
{
    return (
        <nav>
            <div>
                <Link to = "/">
                    <img src="" alt="Pann's logo" />
                </Link>
            </div>
            <div>
                <div>
                    <Link to = "developer_acts">
                        <p>The Acts of the Developers</p>
                    </Link>
                </div>
                <div>
                    <Link to = "about_me">
                        <p>About me</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}