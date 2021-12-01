import Footer from './Footer'
import Hero from './Hero'
import { motion } from 'framer-motion'

/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <div id="about">
      <div className="flex m-10 flex-col space-x-10  items-center  md:items-start md:text-start md:flex-row justify-between max-w-4xl w-[320px] mt-10  sm:w-[500px] md:w-[900px]">
        {/* Text Div  */}

        <div className="">
          <div>
            <p className="font-bold text-3xl mb-5">About Me </p>
          </div>
          <div className="font-semibold text-lg">
            Hi there 👋 ,<br /> I am Khushaal
          </div>
          <p className="max-w-sm">
            Welcome to my side of internet.I am a web and app developer residing
            in India.I like to learn about startups and how to make tech better
            and better.
            <br />
          </p>
          <p className="mt-5 text-white font-semibold">
            I want to build tools which help people change their lives!
          </p>
        </div>

        {/* Text Div  */}

        {/* Image Div  */}
        <motion.div
          className="mt-20 lg:mt-5 cursor-pointer items-center justify-center"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
        >
          <img
            src="https://pbs.twimg.com/profile_images/1458835398319218703/oX3WAyP-_400x400.jpg"
            alt="some image"
            className="rounded-full w-40 p-2 border-4 border-yellow-300 ml-20 lg:ml-0 flex items-center justify-center "
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About

// grid grid-cols-1 place-content-center md:grid-cols-2 mt-20
