import { useEffect, useRef, useState } from "react";
import HeaderBrand from "./HeaderBrand"
import HeaderToggle from "./HeaderToggle"
import HeaderMenuLinks from "./HeaderMenuLinks";
import HeaderLinks from "./HeaderLinks";

const HeaderMain = () => {

    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }


        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])



    return (
        <header ref={headerRef} className="bg-gray-800 fixed w-full z-30 top-0 left-0 right-0 shadow-2xl">
            <nav className="max-w-[1300px] mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-16">
                        <HeaderBrand />
                        <HeaderLinks />
                    </div>
                    <HeaderToggle isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </nav>
            <HeaderMenuLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}

export default HeaderMain