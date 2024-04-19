import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";
import { motion } from "framer-motion"

const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
});
const Technologies = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                animate={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Technologies
            </motion.h1>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                animate={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-4">
                <motion.div
                    variants={iconVariant(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariant(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className='text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVariant(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                variants={iconVariant(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <SiTailwindcss className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div 
                variants={iconVariant(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <TbBrandNodejs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                variants={iconVariant(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <TbBrandMysql className='text-7xl text-cyan-700' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
