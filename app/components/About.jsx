// import { assets, infoList } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";

// function About() {
//   return (
//     <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
//       <h2 className="text-center text-5xl font-Ovo">About Me</h2>

//       <div className="flex w-full flex-col lg:flex-row items-center gap-2 my-20">
//         <div className="w-64 sm:w-80 rounded-3xl max-w-none">
//           <Image
//             src={assets.user_image}
//             alt="user"
//             className="w-full rounded-3xl"
//           />
//         </div>
//         <div className="flex-1">
//           {/* <p className="text-lg font-Ovo text-gray-600 mb-10"> */}
//           <p className="mb-10 font-Ovo max-w-2xl">
//             I am expireanced Developer with one year Expirance working in react
//             js and next js as well{" "}
//           </p>
//           <ul>
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <li key={index}>
//                 <Image src={icon} alt={title} />
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

// import { assets, infoList, toolsData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "motion/react";

// function About({ isDarkMode }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 2.5 }}
//       id="about"
//       className="w-full px-[12%] py-10 scroll-mt-20"
//     >
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         Introduction
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         About Me
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1, y: 1 }}
//         transition={{ duration: 0.8 }}
//         className="flex w-full flex-col lg:flex-row items-center gap-10 my-20"
//       >
//         {/* Image Container */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, sacle: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-64 sm:w-80 rounded-3xl max-w-none mb-8 lg:mb-0"
//         >
//           {" "}
//           {/* Added margin-bottom for spacing in mobile view */}
//           <Image
//             src={assets.user_image}
//             alt="user"
//             className="w-full rounded-3xl"
//           />
//         </motion.div>

//         {/* Description Container */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="flex-1"
//         >
//           <p className="mb-10 font-Ovo max-w-2xl">
//             I am an experienced Developer with one year of experience working
//             with React JS and Next.js as well.
//           </p>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6"
//           >
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <motion.li
//                 whileInView={{ scale: 1.5 }}
//                 key={index}
//                 className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
//               >
//                 {/* Added margin for spacing between icon and text */}
//                 <Image
//                   src={isDarkMode ? iconDark : icon}
//                   alt={title}
//                   className="w-7 mt-3"
//                 />{" "}
//                 {/* Adjusted icon size */}
//                 <div>
//                   <h3 className="font-semibold my-4 text-gray-700 dark:text-white">
//                     {title}
//                   </h3>
//                   <p className="text-gray-600 text-sm dark:text-white/80">
//                     {description}
//                   </p>
//                 </div>
//               </motion.li>
//             ))}
//           </motion.ul>
//           <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
//             Tools i Used
//           </h4>
//           <ul className="flex items-center gap-3 sm:gap-5">
//             {toolsData.map((tool, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 cursor-pointer hover:-translate-y-1 duration-500"
//               >
//                 <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default About;

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; 

function About({ isDarkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-4"
    >
      {/* Section Titles */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-10 my-1"
      >
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none mb-8 lg:mb-0"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* Description Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className=" mx-auto font-Ovo mb-2"
          >
            I am a skilled frontend developer with expertise in React.js,
            Next.js, and modern web technologies. Passionate about crafting
            seamless, visually engaging, and high-performance user experiences.
            Always eager to learn and innovate in the ever-evolving web
            development landscape.
          </motion.p>

          {/* Info List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={index}
                className="border border-gray-400 rounded-xl p-6 cursor-pointer 
                    hover:bg-lightHover hover:-translate-y-1 duration-500 
                    hover:shadow-md dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <div>
                  <h3 className="font-semibold my-4 text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I Use
          </h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                    border border-gray-400 rounded-lg cursor-pointer 
                    hover:-translate-y-1 duration-500 hover:shadow-md"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
