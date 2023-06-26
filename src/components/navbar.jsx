import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="w-full h-3 px-10 pt-5 flex flex-row justify-between bg-white">
                <h1 className="text-center font-extrabold text-3xl">Project E-Mobility</h1>

                <nav className="bg-white w-[60%]">
                    <ul className="flex flex-row justify-around [&>li]:py-2 [&>li]:px-3">
                        <li>
                            <Link to="/authors">Autoren</Link>
                        </li>
                        <li>
                            <Link to="/cars">Fahrzeuge</Link>
                        </li>
                        <li>
                            <Link to="/documentation">Dokumentation</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className=" bg-green-300 rounded-lg">
                            <Link className=" font-semibold" to="/datahub">Data Hub</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}