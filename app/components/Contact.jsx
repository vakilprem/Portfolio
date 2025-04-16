import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [result, setResult] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "09c2d057-9793-4f1c-925f-5517a6809f5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false); // Hide tooltip after 3 seconds
      }, 3000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
  id="contact"
  className="relative w-full px-[12%] py-4 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

      <motion.h4
        className="text-center mt-[5px] mb-2 text-lg font-Ovo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Connect With me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mb-1 font-Ovo mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I'd love to hear from you! If you have any Questions, comments, or
        feedback, please use the form below
      </motion.p>
      <motion.form
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-5 mb-0 ">
          <input
            type="text"
            placeholder="Enter your Name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white/90  dark:bg-darkHover/30 dark:border-white/90"
          />
          <textarea
            rows={4}
            placeholder="Enter your message"
            required
            name="message"
            className="w-full col-span-full p-4 outline-none border-[0.5px] border-gray-400 roundedbg-white mb-6  dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <motion.button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        {showTooltip && (
          <div className="mt-2 text-green-600 text-sm text-center transition-opacity duration-300">
            ✅ Email sent successfully!
          </div>
        )}

        

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
