import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { RootState } from "../../app/store";


interface HeaderToggleProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const HeaderToggle = ({ isOpen, setIsOpen }: HeaderToggleProps) => {

    const { items } = useSelector((state: RootState) => state.cart)

    return (
        <div className="flex items-center gap-3">
            <NavLink to='/cart' className={({ isActive }) => `group flex items-center gap-x-1 ${isActive ? 'text-white font-bold' : 'text-gray-400'}`}>
                {({ isActive }) => (
                    <>
                        <div className={`badge font-medium rounded-full border-none px-2 badge-sm ${isActive
                            ? "bg-blue-600 text-white"
                            : "bg-blue-500 text-gray-100"
                            }`}
                        >
                            {items.length}
                        </div>
                        <FaShoppingBasket className="text-2xl md:text-3xl transition-colors duration-300 group-hover:text-white" />
                    </>
                )}
            </NavLink>
            <div className="relative md:hidden w-9 h-9 cursor-pointer hover:bg-blue-300/50 active:bg-blue-300/50 rounded-lg flex items-center justify-center transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}>
                <div className="flex flex-col justify-center items-center gap-1.5">
                    <span
                        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
                    ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-0 scale-0' : ''}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out
                    ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderToggle