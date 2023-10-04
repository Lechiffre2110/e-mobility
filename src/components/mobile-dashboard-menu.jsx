import { useState } from "react"
import XIcon from "../assets/xmark-solid.svg"
import MenuIcon from "../assets/ellipsis-solid.svg"
import { useSearchParams } from "react-router-dom";

export default function MobileDashboardMenu() {
    const [searchParams, setSearchParams] = useSearchParams({ menuPage: "dashboard"});
    const [showMenu, setShowMenu] = useState(false);
    
    function toggleMenu() {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    function changeMenuUrl(menuItem) {
        setSearchParams({ menuPage: menuItem })
    }

    return (
        <>
            <div className="fixed flex items-center justify-center text-white bottom-3 right-3 lg:hidden w-[50px] h-[50px] rounded-full text-2xl bg-black" onClick={toggleMenu}>
                <img src={MenuIcon} alt="Compass" className="w-[25px] h-[25px]" />
            </div>

            {showMenu && (
                <div className="fixed bottom-3 right-3 w-[200px] h-[300px] bg-black lg:hidden text-[#fff] rounded-2xl px-5 py-3 flex flex-col justify-around border-black">
                    <div onClick={toggleMenu} className="absolute w-[40px] h-[40px]  rounded-full top-1 right-1 flex justify-center items-center">
                        <img src={XIcon} alt="X" className="w-[20px] h-[20px]" />
                    </div>
                    <a onClick={() => changeMenuUrl("dashboard")}>Dashboard</a>
                    <a onClick={() => changeMenuUrl("bugs")}>Bugs</a>
                    <a onClick={() => changeMenuUrl("onboarding")}>Onboarding</a>
                    <a onClick={() => changeMenuUrl("download")}>Daten herunterladen</a>
                    <a onClick={() => changeMenuUrl("upload")}>Daten hochladen</a>
                    <a onClick={() => changeMenuUrl("contribution")}>Contribution</a>
                </div>
            )}
        </>
    )
}