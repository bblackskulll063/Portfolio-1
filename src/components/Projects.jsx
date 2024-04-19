import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                height={150}
                width={150}
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg-w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 px-2 py-1 rounded bg-neutral-900 text-sm font-medium text-purple-900'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
