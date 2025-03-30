import { NavLink } from "react-router"

const HeaderLinks = () => {
    return (
        <div className="text-[17px]">
            <ul className="hidden md:flex items-start gap-x-8">
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-gray-50 transition-colors duration-200'} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-gray-50 transition-colors duration-200'} to="/products">Products</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HeaderLinks