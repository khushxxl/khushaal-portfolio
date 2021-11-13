/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { GitHub, OpenInBrowser, Public } from "@material-ui/icons";
import { projectData } from "../projectData";
import Link from "next/link";
import Footer from "./Footer";
const Projects = () => {
  return (
    <div className="flex m-20 flex-col items-center md:items-start justify-start max-w-4xl w-[320px] mt-20  sm:w-[500px] md:w-[900px] ">
      <div>
        <h1 className="text-2xl font-bold mb-10">Some Awesome Projects ✨</h1>
      </div>
      <div className="grid">
        {projectData.map((data) => {
          return (
            <div
              key={data.id}
              className="grid grid-cols-1 place-content-center space-x-0 md:space-x-40  place-items-center justify-center items-center md:grid-cols-2"
            >
              <div className="max-w-lg mb-10">
                <h1
                  className="text-xl text-blue-300 font-semibold"
                  key={data.id}
                >
                  {data.name}⚡️
                </h1>
                <div>
                  <p className="mt-2">{data.description}</p>
                  <p className="mt-2">{data.tech}</p>
                  <div className="mt-4  flex justify-evenly  rounded-2xl cursor-pointer">
                    <div className="flex border w-24 p-3 rounded-xl">
                      <Link href={data.gitRepoLink}>
                        <GitHub />
                      </Link>
                      <p className="ml-2">Code</p>
                    </div>
                    <div className="flex border w-24 p-3 rounded-xl">
                      <Link href={data.deployedLink}>
                        <Public />
                      </Link>

                      <p className="ml-2">View</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Link href={data.deployedLink}>
                  <img
                    src={data.image}
                    alt=""
                    className="rounded-xl mb-10 w-3/2 border-2 p-2 border-yellow-300 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Projects;
