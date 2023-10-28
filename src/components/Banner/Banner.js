import { NavLink } from "react-router-dom";
import LogoSansText from "../../images/mayformation-no-text.svg"

export default function Banner(){
    return(
        <>
        <section className="rounded-lg text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <div className="flex justify-center mb-8">
                    <img src={LogoSansText} alt="May Logo" className="h-32 text-center"/>
                </div>
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-slate-100 md:text-5xl lg:text-6xl dark:text-white">MAY FORMATIONS</h1>
                <p className="mb-8 text-lg font-normal text-slate-200 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Centre de formation dans le domaine de la petite enfance et la pratique de la pédagogie Montessori</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <NavLink to="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-pink-800 hover:border-pink-800 duration-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Consulter les formations
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </NavLink>
                    <NavLink to="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-100 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-slate-800 duration-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Prendre contact
                    </NavLink>  
                </div>
            </div>
        </section>
        </>
    )
}