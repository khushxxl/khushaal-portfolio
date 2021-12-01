/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { GitHub, OpenInBrowser, Public } from '@material-ui/icons'
import { projectData } from '../projectData'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Projects = () => {
  const router = useRouter()
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      id="projects"
      className="flex m-20 mt-30 flex-col items-center text-center md:items-center justify-start max-w-4xl w-[320px] mt-5  sm:w-[500px] md:w-[900px] "
    >
      <div>
        <h1 className="text-2xl font-bold mb-3 text-center ">
          Some Awesome Projects ✨
        </h1>
      </div>
      <div className="grid grid-cols-1 place-content-center place-items-center lg:grid-cols-2 gap-x-20 gap-y-10">
        {projectData.map((data) => {
          return (
            <div key={data.id} className="rounded-lg">
              <div className="flex flex-col items-center rounded-lg">
                <p className=" font-bold text-lg text-center mb-3 mt-5">
                  {data.name}
                </p>
                <p className=" font-light text-gray-200 text-sm text-center mb-1 mt-5">
                  {data.tech}
                </p>
                <a href={data.deployedLink}>
                  <img src={data.image} alt="" className="rounded-3xl" />
                </a>
                <p className="m-2 text-gray-600">
                  Click on the image to visit the deployed website/app
                </p>
                <p className="w-[20rem] text-center"> {data.description}</p>
                {/* <p className="w-[20rem] text-center"> {data.tech}</p> */}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Projects
