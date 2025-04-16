// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "motion/react";

// function Header() {
//   return (
//     <div className="w-12/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-10">
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//       >
//         {/* <Image alt="" src={assets.profile_img} className="rounded-full w-32" /> */}
//         <Image alt="" src={assets.mw} className="rounded-full w-32" />
//       </motion.div>
//       <motion.h3
//         initial={{ y: -30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
//       >
//         Hi I'm Premal Vakil{" "}
//         <Image src={assets.hand_icon} alt="" className="w-6"></Image>
//       </motion.h3>
//       <motion.h1
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
//       >
//         {" "}
//         FrontEnd Devloper
//       </motion.h1>
//       <motion.p
//         initial={{ y: -30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.7 }}
//         className="max-w-2xl mx-auto font-Ovo"
//       >
//         I am Frontend developer with a passion for creating user-friendly and
//         visually appealing web applications.
//       </motion.p>
//       <div className="flex flex-col sm:flex-row items-center  gap-4 mt-4">
//         <motion.a
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 1 }}
//           href="#contact"
//           className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
//         >
//           Contact Me{" "}
//           <Image alt="" src={assets.right_arrow_white} className="w-4" />
//         </motion.a>
//         <motion.a
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 1.2 }}
//           alt="/sample-resume.pdf"
//           download
//           className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
//         >
//           My Resume
//           <Image src={assets.download_icon} alt="" className="w-4" />
//           {/* <button>
//           </button> */}
//         </motion.a>
//       </div>
//     </div>
//   );
// }

// export default Header;

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="w-12/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-10">
     <motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
>
  <Image
    alt="Profile Picture"
    src={assets.profile_img}
    className="rounded-full w-48 h-48 -ml-4" // Moves image slightly left
  />
</motion.div>

      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi, I'm Premal Vakil
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Frontend Developer
      </motion.h1>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Passionate frontend developer with experience in React.js, Next.js, and modern web technologies, crafting intuitive and visually engaging user experiences.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image alt="Right Arrow" src={assets.right_arrow_white} className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Vakil_Premal_ReactJS.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;