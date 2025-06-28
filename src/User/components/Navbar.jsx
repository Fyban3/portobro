import { useNavigate, useLocation } from "react-router-dom"
import { Close, Dehaze, Logout, Person, SwitchLeftOutlined } from "@mui/icons-material"
import { useDispatch } from 'react-redux'
import { IconButton } from "@mui/material"
import { Link } from "react-scroll"
import { useState } from "react"
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import { logout } from '../../redux/actions/user'
import Button from './Button'
import { useStateContext } from "../../contexts/ContextProvider"

const Navbar = ({ navbarMenuRef, showMenu, setShowMenu }) => {


    const { setMode, initialUserState, initialErrorObj, setErrorObj } = useStateContext()
    ////////////////////////////// VARIABLES //////////////////////////////////////
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loggedUser } = useSelector(state => state.user)
    const navLinks = [
        "home",
        "about",
        "services",
        "skills",
        "projects",
        "blogs",
        "testimonials",
        "contact",
    ]

    ////////////////////////////// STATES /////////////////////////////////////////
    const [showNavbar, setShowNavbar] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)

    ////////////////////////////// USE EFFECTS ////////////////////////////////////


    ////////////////////////////// FUNCTIONS ///////////////////////////////////////
    // 1)
    const toggleShowNavbar = () => {
        setShowNavbar((prev) => !prev)
    }
    // 1)
    const toggleShowAccountMenu = () => {
        setShowAccountMenu((prev) => !prev)
    }
    // 2)
    const navigateToRegister = () => {
        navigate('/auth/register')
        setErrorObj(initialErrorObj)
    }
    // 3)
    const navigateToLogin = () => {
        navigate('/auth/login')
        setErrorObj(initialErrorObj)
    }
    // 4)
    const navigateToAccount = () => {
        navigate('/account');
        setShowMenu(false)
    }
    // 5)
    const switchMode = () => {
        setMode('admin');
        navigate('/');
        setShowMenu(false)
        localStorage.setItem('mode', 'admin')
    }
    // 6)
    const logoutFunc = () => {
        dispatch(logout(navigate))
        setShowMenu(false)
    }




    return (
        <>
            {/* desktop navbar */}
            <nav className="lg:flex lg:flex-col hidden justify-between min-h-[5rem] items-center bg-white text-black border-b border-gray-200 shadow-sm">
                <div className="w-full flex justify-between items-center py-4 px-12">
                    <Link to="/" className="">
                        <h3 className="text-3xl font-bold cursor-pointer text-black tracking-tight">Fyan</h3>
                    </Link>
                    {
                        pathname == '/' &&
                        <div className="flex justify-center items-center gap-8">
                            {
                                navLinks.map((link, index) => (
                                    <div key={index} className="flex flex-col justify-center items-center w-auto">
                                        <Link
                                            id="link"
                                            to={`${link.toLowerCase()}`}
                                            activeClass="active"
                                            smooth={true}
                                            spy={true}
                                            offset={-100}
                                            duration={300}
                                            className="capitalize text-gray-700 cursor-pointer text-lg font-medium hover:text-black hover:underline transition"
                                        >
                                            {link}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    }
                    <div className="flex justify-between">
                        {
                            loggedUser
                                ?
                                <div className="flex items-center gap-4">
                                    <p className="text-lg capitalize">{loggedUser?.name?.split(' ')[0]}</p>
                                    <div className="relative">
                                        <span onClick={() => { setShowMenu(pre => !pre); }} className="flex justify-center items-center bg-orange rounded-full w-10 h-10 text-lg capitalize cursor-pointer text-white">{loggedUser?.name?.charAt(0)}</span>
                                        {
                                            showMenu &&
                                            <motion.div
                                                ref={navbarMenuRef}
                                                animate={{ x: [100, 0], opacity: [0, 1] }}
                                                className="absolute top-[120%] right-[50%] border border-gray-200 bg-white p-3 gap-2 rounded-md flex flex-col shadow"
                                            >
                                                {loggedUser.role == 'admin' && <button onClick={switchMode} className="flex gap-2 w-full min-w-max hover:bg-gray-100 p-2 rounded-md text-gray-700">Switch Mode</button>}
                                                <button onClick={logoutFunc} className="flex gap-2 w-full min-w-max hover:bg-gray-100 p-2 rounded-md text-gray-700">Logout</button>
                                            </motion.div>
                                        }
                                    </div>
                                </div>
                                :
                                <div className="flex gap-4">
                                    <button onClick={navigateToLogin} className="btn bg-white text-black border border-gray-300 rounded-full px-6 py-2 font-normal hover:bg-gray-100 hover:text-orange transition">
                                        Login
                                    </button>
                                    <button onClick={navigateToRegister} className="btn bg-orange text-white border-none rounded-full px-6 py-2 font-semibold hover:bg-black hover:text-orange transition">
                                        Register
                                    </button>
                                </div>
                        }
                    </div>
                </div>
            </nav>

            {/* mobile navbar */}
            <div className="flex lg:hidden w-full bg-black flex-col items-end sticky top-0 left-0 z-50 px-[2rem] py-[12px] " >
                <div className="flex justify-between w-full items-center " >
                    <Link to="home" className="" >
                        <h3 onClick={() => navigate('/')} style={{ fontFamily: 'cursive' }} className=" text-3xl font-bold cursor-pointer text-orange " >Fyan</h3>
                    </Link>
                    <div className='flex ' >
                        <IconButton onClick={toggleShowNavbar} >
                            {
                                showNavbar
                                    ?
                                    <Close className="text-white text-4 " />
                                    :
                                    <Dehaze className="text-white text-4 " />}
                        </IconButton>
                    </div>
                </div>
                {
                    showNavbar &&
                    <motion.nav
                        animate={{ x: [200, 0], duration: '100' }}
                        className="absolute top-0 right-0 min-w-[16rem] pt-[1rem] h-screen flex flex-col justify-start w-fit gap-[2rem] items-start bg-lightGray text-white p-[1rem] rounded-[8px]"
                    >
                        <button className="w-full flex justify-end items-center relative top-[4px] right-[1rem] " onClick={toggleShowNavbar}  >
                            <Close className="text-white text-4 " />
                        </button>
                        {
                            pathname == '/' &&
                            <div className='flex flex-col justify-start gap-[1rem] w-full ' >
                                {
                                    navLinks.map((link, index) => (
                                        <div key={index} className="flex flex-col items-start justify-start w-full " >
                                            <Link
                                                id="link"
                                                to={link.link}
                                                activeClass="active"
                                                smooth={true}
                                                spy={true}
                                                offset={-100}
                                                duration={300}
                                                onClick={toggleShowNavbar}
                                                className="capitalize text-white cursor-pointer text-[20px] font-medium hover:text-[#938f8e] hover:scale-110 duration-500 "
                                            >
                                                {link}
                                            </Link>
                                        </div>))
                                }
                            </div>
                        }
                        <div className='flex flex-col gap-[1rem] ' >
                            {
                                loggedUser ?
                                    <>
                                        <button onClick={logoutFunc} className="flex gap-[8px] w-full min-w-max hover:bg-darkGray px-[4px] rounded-[4px] " ><Logout className="" />Logout</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={navigateToLogin} className="cursor-pointer capitalize text-[20px] px-[20px] py-[4px] rounded-[8px] text-white border-[1px] border-white " >login</button>
                                        <button onClick={navigateToRegister} className="cursor-pointer capitalize text-[20px] px-[20px] py-[4px] rounded-[8px] bg-orange text-black border-[1px] border-white font-light " >Register</button>
                                    </>
                            }
                            <button onClick={() => { setMode('admin'); toggleShowNavbar() }} className="flex justify-start items-center gap-[8px] text-[1rem] px-[4px] hover:text-orange hover:scale-110 duration-500" >
                                <SwitchLeftOutlined className="" /><p>Switch Mode</p>
                            </button>
                        </div>
                    </motion.nav>
                }
            </div>


        </>
    )
}

export default Navbar