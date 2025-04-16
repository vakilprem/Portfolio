import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Footer({ isDarkMode }) {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="flex items-center w-max gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          vakilprem@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Premal Vakil. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
        <li>
  <a target="_blank" href="https://github.com/vakilprem">
    <i class="fab fa-github"></i> GitHub
  </a>
</li>
          <li>
  <a target="_blank" href="https://www.linkedin.com/in/premal-vakil-646404a5" rel="noopener noreferrer">
    <i class="fab fa-linkedin"></i> LinkedIn
  </a>
</li>
          {/* <li>
            <a target="_blank" href="">
              WhatsApp
            </a>
          </li> */}
          <li>
            <a
              target="_blank"
              href="https://wa.me/918866576379?text=Hello%20Premal%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connect."
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
