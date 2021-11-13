/* eslint-disable no-unused-vars */
import React from "react";
import { businessData } from "../projectData";
import Image from "next/image";

const Business = () => {
  return (
    <div
      id="services"
      className="max-w-sm flex flex-col items-center justify-center   md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl rounded-lg  w-full  min-w-max bg-opacity-25 ml-5"
    >
      <div>
        <p className="text-center font-bold text-xl md:text-2xl">
          How can I help you skyrocket your business 🚀 ?
        </p>
      </div>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:space-x-4 items-center place-content-center place-items-center space-x-6">
        {businessData.map((data) => {
          return (
            <div key={data.id}>
              <div className="m-7 flex items-center justify-center flex-col text-center space-x-5 ">
                <Image
                  src={data.image}
                  height={130}
                  width={130}
                  layout="fixed"
                  alt=""
                  className="space-x-5"
                />
                <p className="font-semibold text-lg mt-2">{data.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Business;

// {businessData.map((data) => {
//   return (
//     <div
//       key={data.id}
//       className="grid grid-cols-2 items-center justify-center"
//     >
//       <div className=" flex flex-col items-center justify-center ">
//         {data.title}
//         <Image
//           src={data.image}
//           height={100}
//           width={100}
//           layout="fixed"
//         />
//       </div>
//     </div>
//   )
// })}
