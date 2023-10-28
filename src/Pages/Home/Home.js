import Banner from "../../components/Banner/Banner";
import BannerImg from "../../images/pexels-tuấn-kiệt-jr-1549974.jpg";

export default function Home(){
    return(
        <div className="md:mx-32 my-10">
            <div>
                <Banner />
            </div>
            <section className="mt-20">
                <div className="flex flex-col items-center mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="mb-5 text-2xl text-slate-700 uppercase font-extrabold md:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-red-400">May formations :</span> Centre de formations à La Réunion</h2>
                        <p className="text-justify">
                            <span className="uppercase font-extrabold text-pink-300  ">May formations</span>, créé en Août 2023, s’est positionné sur le champ de la professionnalisation avec comme activités principales les formations liées à la Petite Enfance.
                            Le positionnement de notre structure est articulé aujourd’hui autour de la « formation tout au long de la vie ».
                        </p>
                    </div>
                    <div className="rounded-full">
                        <img src={BannerImg} className=" aspect-video" alt="enfant autour d'une table" />
                    </div>
                </div>
            </section>
            <div className="div">
                <h2 className="font-extrabold text-2xl md:text-6xl text-blue-700 mt-10">Prochaines formations</h2>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}