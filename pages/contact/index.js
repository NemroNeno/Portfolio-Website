import { fadeIn } from "../../variants";
import Circles from "./../../components/Circles";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xovqlpwr");
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const onSubmit = async (e) => {
  
    handleSubmit(e); 
    if (state.succeeded) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h-full bg-primary/60"
    >
      <div className="container mx-auto text-center xl:text-left flex items-start justify-start h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Let&apos;s <span className="text-accent">Connect.</span>
          </h2>
          <form
            ref={form}
            onSubmit={onSubmit}
            className="flex-l flex flex-col gap-6 w-full mx-auto !z-50"
          >
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex gap-x-8 w-full"
            >
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
                inputMode="text"
                autoCorrect="off"
                ref={nameRef}
              />
              <input
                type="email"
                placeholder="email"
                className="input"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
                inputMode="email"
                name="from_name"
                ref={emailRef}
              />
            </motion.div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              inputMode="text"
              name="subject"
              ref={subjectRef}
            />
            <textarea
              placeholder="message"
              className="textarea"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
               ref={messageRef}
              name="message" ></textarea>
            <button  type="submit" className="btn rounded-full border border-white/40 w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk{" "}
              </span>
              <BsArrowRight className="absolute opacity-0 group-hover:opacity-100 text-[22px] duration-300 -translate-y-[120%] group-hover:flex group-hover:-translate-y-0 transition-all" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
