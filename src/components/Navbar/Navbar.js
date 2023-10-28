import { NavLink } from "react-router-dom";
import Logo from "../../images/mayformation-no-text.svg";
export default function Navbar(){
    return(
        <>
        <nav className="sticky top-0 border-gray-200 bg-pink-900 shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/" className="flex flex-col justify-center items-center">
                <img src={Logo} className="h-12" alt="May Logo" />
                <span className="text-xl font-extrabold text-white">May Formations</span>
            </NavLink>
            <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                <span className="sr-only">Ouvrir le menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-light text-white mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                    <NavLink to="/" className="block font-bold py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-pink-500 dark:bg-blue-600 md:dark:bg-transparent">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/nos-valeurs" className="block py-2 pl-3 pr-4 text-slate-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nos valeurs</NavLink>
                </li>
                <li>
                    <NavLink to="/catalogue" className="block py-2 pl-3 pr-4 text-slate-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Catalogue de formations</NavLink>
                </li>
                <li>
                    <NavLink to="/team" className="block py-2 pl-3 pr-4 text-slate-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">L'équipe May Formations</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="block py-2 pl-3 pr-4 text-slate-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        </>
    )
}