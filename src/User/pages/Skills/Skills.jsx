import { motion } from "framer-motion"

import { MainHeading } from "../../components"
import Skillbar from './Skillbar'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSkills } from '../../../redux/actions/skill'

const Skills = () => {

    ////////////////////////////// VARIABLES //////////////////////////////////////
    const dispatch = useDispatch()
    const { skills } = useSelector(state => state.skill)

    ////////////////////////////// STATES /////////////////////////////////////////

    ////////////////////////////// USE EFFECTS ////////////////////////////////////
    useEffect(() => {
        dispatch(getSkills())
    }, [])

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////
    console.log("Skills data:", skills); // Tambahkan log untuk memeriksa data

    return (
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
            name="skills"
            className="bg-white text-black py-10 px-5"
        >
            <div className="w-full flex justify-center">
                <MainHeading
                    forwardHeading={<span className="text-orange">Skills</span>}
                    backHeading="Skills"
                    detail="I specialize in web development with expertise in various technologies. My focus is on creating responsive and user-friendly applications while continuously improving my skills and staying updated with the latest technologies."
                    className="text-orange font-extrabold shadow-none text-center"
                />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
                {
                    skills.length > 0 ? (
                        skills.map((skill, index) => (
                            <Skillbar key={index} skill={skill} className="bg-gray-100 text-gray-800 rounded-md shadow-md" />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No skills available. Add some skills to display here.</p>
                    )
                }
            </div>
        </motion.section>
    )
}

export default Skills;