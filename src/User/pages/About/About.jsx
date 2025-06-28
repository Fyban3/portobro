import { profile } from "../../../assets"
import { MainHeading, Button } from "../../components"
import { motion } from "framer-motion"

const About = () => {

    /////////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// STATES //////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// USE EFFECTS /////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////////////////////////////////

    return (
        <motion.section
            name="about"
            className="h-auto w-full flex bg-white rounded-xl shadow py-10 px-5"
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
        >
            <div className="mx-4 px-4 lg:w-[50%] lg:block hidden justify-center">
                <img src={profile} alt="profileImage" className="w-[28rem] h-[28rem] object-cover rounded-xl shadow" />
            </div>
            <div className="flex lg:w-[50%] flex-col md:px-8 justify-center">
                <div className="w-full flex justify-center">
                    <MainHeading
                        forwardHeading={<span className="text-orange">About Me</span>}
                        backHeading='About'
                        detail={`
                        Halo,<br/>
                        Saya MOHD ALLIFYAN B.N, mahasiswa teknik informatika dengan semangat untuk menciptakan pengalaman digital yang luar biasa. Saya senang belajar hal baru dan berkontribusi pada proyek open-source.<br/>
                        Terima kasih telah mengunjungi portofolio saya. Jangan ragu untuk menghubungi saya melalui Instagram atau GitHub.<br/>
                        Salam hangat,<br/>
                        MOHD ALLIFYAN B.N
                    `}
                        alignStart
                        className="text-orange font-extrabold shadow-none"
                    />
                </div>
            </div>
        </motion.section>
    )
}

export default About
