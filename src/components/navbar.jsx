import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="w-full h-3 px-10 pt-5 flex flex-row justify-between bg-white">
                <h1 className="text-center font-extrabold text-3xl">Project E-Mobility</h1>

                <nav className="bg-white w-[60%]">
                    <ul className="flex flex-row justify-around [&>li]:py-2 [&>li]:px-5">
                        <li className="group ease-in duration-300">
                            <Link to="/authors">Autoren</Link>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                        </li>
                        <li className="group ease-in duration-300">
                            <Link to="/cars">Fahrzeuge</Link>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                        </li>
                        <li className="group ease-in duration-300">
                            <Link to="/documentation">Dokumentation</Link>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                        </li>
                        <li className="group ease-in duration-300">
                            <Link to="/blog">Blog</Link>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                        </li>
                        <li className="green-background rounded-full hover:bg-emerald-500">
                            <Link className=" font-semibold" to="/datahub">Data Hub</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}