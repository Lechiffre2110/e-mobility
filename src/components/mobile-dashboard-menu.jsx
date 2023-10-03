import { useState } from "react"

export default function MobileDashboardMenu() {
    const [showMenu, setShowMenu] = useState(false);
    
    function toggleMenu() {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    return (
        <>
            <div className="fixed flex items-center justify-center text-white bg-[#333] bottom-3 lg:hidden w-[50px] h-[50px] rounded-full text-2xl" onClick={toggleMenu}>
                +
            </div>

            {showMenu && (
                <div className="fixed bottom-16 left-16 w-[200px] h-[300px] bg-[#333] lg:hidden text-white rounded-3xl px-5 py-3 flex flex-col justify-around">
                    <p>Dashboard</p>
                    <p>Onboarding</p>
                    <p>Download</p>
                    <p>Upload</p>
                    <p>Contribution</p>
                    <p>Bugs</p>
                </div>
            )}
        </>
    )
}