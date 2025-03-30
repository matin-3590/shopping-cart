import { NavLink } from "react-router"

interface HeaderMenuLinksProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const HeaderMenuLinks = ({ isOpen, setIsOpen }: HeaderMenuLinksProps) => {
    return (
        <div className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden fixed top-17 left-0 right-0 bg-gray-800 shadow-2xl z-20 transition-all duration-300 ease-in`}>
            <div className='max-w-[1300px] mx-auto px-4 pb-4'>
                <ul className="space-y-4">
                    <li>
                        <NavLink onClick={() => setIsOpen(false)} className={(navData) => navData.isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-gray-50 transition-colors duration-200'} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setIsOpen(false)} className={(navData) => navData.isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-gray-50 transition-colors duration-200'} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderMenuLinks