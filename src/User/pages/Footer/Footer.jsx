import { ArrowRightAlt, Email, LocationCity, Phone, } from "@mui/icons-material"
import { icons } from '../../../data'
import { IconButton } from "@mui/material"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

const Footer = () => {

    ////////////////////////////// VARIABLES //////////////////////////////////////
    const links = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: 'services' },
        { name: 'Skills', link: 'skills' },
        { name: 'Projects', link: 'proejcts' },
        { name: 'Contact', link: 'contact' },
    ]
    const services = [
        { name: 'MERN Stack Dev', link: 'services' },
        { name: 'Web Development', link: 'services' },
        { name: 'API Integration', link: 'services' },
        { name: 'Frontend Development', link: 'services' },
        { name: 'Backend Development', link: 'services' },
    ]
    const contacts = [
        { text: 'Sector H-12 Islamabad', link: '', icon: <LocationCity /> },
        { text: '+923055712534', link: '', icon: <Phone /> },
        { text: 'naumanch969@gmail.com', link: '', icon: <Email /> },
    ]

    ////////////////////////////// STATES /////////////////////////////////////////

    ////////////////////////////// USE EFFECTS ////////////////////////////////////

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////


    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
            className="flex flex-col mt-16 items-center w-full gap-12 mb-4 bg-white border-t border-gray-200 py-8"
        >
            <div className="flex flex-col w-full md:flex-row lg:flex-nowrap md:flex-wrap lg:justify-between md:justify-around justify-start md:p-0 sm:px-8 sm:py-4 sm:gap-6 p-4 gap-6 lg:gap-2 md:gap-8">
                <div className="text-gray-600 flex justify-start md:flex-nowrap flex-wrap flex-col md:gap-4 sm:gap-3 gap-3 lg:w-fit md:w-60 lg:max-w-60">
                    <div className='flex flex-col w-full gap-4'>
                        <h3 className="text-lg font-semibold w-full">About</h3>
                        <div className="flex flex-col jutify-between items-start gap-6 w-full">
                            <p>Saya adalah mahasiswa teknik informatika.</p>
                        </div>
                    </div>
                </div>

                <div className="text-gray-600 flex justify-start md:flex-nowrap flex-wrap flex-col md:gap-4 sm:gap-3 gap-3 lg:w-fit md:w-60 lg:max-w-60">
                    <h3 className="text-lg font-semibold">Links</h3>
                    <div className="flex flex-col gap-4">
                        <Link
                            to="https://www.instagram.com/fybane_"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-100}
                            duration={300}
                        >
                            Instagram
                        </Link>
                        <Link
                            to="https://github.com/fyban3"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-100}
                            duration={300}
                        >
                            GitHub
                        </Link>
                    </div>
                </div>

                <div className="text-gray-600 flex justify-start md:flex-nowrap flex-wrap flex-col md:gap-4 sm:gap-3 gap-3 lg:w-fit md:w-60 lg:max-w-60">
                    <h3 className="text-lg font-semibold">Services</h3>
                    <div className='flex flex-col gap-4'>
                        {
                            services.map((service, index) => (
                                <Link
                                    key={index}
                                    to={service.link}
                                    activeClass="activet"
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={300}
                                    className={`hover:text-orange flex items-center ${service.link && 'cursor-pointer'} text-gray-600 text-sm gap-1`}
                                >
                                    <button className=''><ArrowRightAlt className='text-gray-600' /></button>
                                    <p>{service.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="text-gray-600 flex justify-start md:flex-nowrap flex-wrap flex-col md:gap-4 sm:gap-3 gap-3 lg:w-fit md:w-60 lg:max-w-60">
                    <h3 className="text-lg font-semibold">Have a Question?</h3>
                    <div className="flex flex-col gap-4">
                        {
                            contacts.map((contact, index) => (
                                <Link to="" key={index} className={`flex items-center ${contact?.link && 'cursor-pointer'} text-gray-600 text-sm gap-1`}>
                                    {contact.icon}
                                    <p>{contact.text}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Mohd Allifyan Baitul Nesam. All Rights Reserved.</p>
            </div>

        </motion.div>
    )
}

export default Footer

