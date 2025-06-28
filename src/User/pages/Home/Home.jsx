import { Button } from "../../components"
import { profile } from "../../../assets"
import { Link } from "react-scroll"

const Home = () => {

    ////////////////////////////// VARIABLES //////////////////////////////////////

    ////////////////////////////// STATES /////////////////////////////////////////

    ////////////////////////////// USE EFFECTS ////////////////////////////////////

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////


    return (
        <main name="home" className="w-full flex lg:flex-row flex-col gap-12 justify-between items-center bg-white rounded-xl shadow-md px-6 py-16">
            <div className="flex flex-col lg:w-[39rem] w-full items-start justify-center gap-6">
                <h6 className="text-lg font-semibold uppercase tracking-widest text-gray-500">Halo</h6>
                <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
                    I'm <span className="text-orange">Mohd Allifyan Baitul Nesam</span>
                </h1>
                <h2 className="text-2xl font-medium tracking-wide text-gray-700">
                    Informatics Engineering Student & Web/Mobile Developer
                </h2>
                <p className="mt-4 text-gray-700 text-lg max-w-xl">
                    Saya adalah mahasiswa teknik informatika yang antusias dalam pengembangan web dan mobile. Saya suka belajar hal baru, berkontribusi pada proyek open-source, dan membangun solusi digital yang berdampak. Portofolio ini berisi karya, pengalaman, dan perjalanan saya dalam dunia teknologi.
                </p>
                <div className="flex gap-4 mt-8">
                    <Link to='contact' className="btn bg-black text-white border-none rounded-full px-8 py-3 font-semibold hover:bg-gray-900 hover:text-orange transition">
                        Hubungi Saya
                    </Link>
                    <Link to='projects' className="btn bg-gray-100 text-gray-900 border-none rounded-full px-8 py-3 font-normal hover:bg-gray-200 hover:text-orange transition">
                        Lihat Karya
                    </Link>
                </div>
            </div>
            <div className="relative lg:w-[50%] flex justify-end w-full z-10 p-4">
                <img src={profile} alt="profile-image" className="lg:w-full max-w-full sm:w-[90%] w-[90%] h-[32rem] object-cover rounded-xl shadow" />
            </div>
        </main>
    )
}

export default Home