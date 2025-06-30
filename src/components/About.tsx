import React from "react";
import Title from "./UI/Title";
import Image from "next/image";
import { MotionDiv, MotionP } from "./UI/MotionComponents";
import AboutParallax from "./AboutParallax";

const About = () => {
  return (
    <section id="about" className="relative pt-24">
      <AboutParallax />

      <div className="wrapper">
        <Title label="ABOUT ME" />

        <div className="max-w-[840px] mx-auto text-center font-medium text-2xl text-[#8F8F8F]">
          <MotionP
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm <span className="text-primary">Yunusov Abdulmajid</span>. I am{" "}
            <span className="text-primary">20</span> years old and a{" "}
            <span className="text-primary">Backend</span> Developer. I like learning more
            and more about programming—challenges that take me out of my comfort zone
            are the best.
          </MotionP>

          <MotionP
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            I make and maintain{" "}
            <span className="text-primary">high-performance web applications</span>,{" "}
            sometimes <span className="text-primary">Telegram bots</span>, and{" "}
            <span className="text-primary">projects in other directions</span> using{" "}
            <span className="text-primary">Python</span>,{" "}
            <span className="text-primary">SQL</span>,{" "}
            <span className="text-primary">Django</span>, and{" "}
            <span className="text-primary">DRF</span>. I’ve completed several{" "}
            <span className="text-primary">custom backend projects</span> and have some{" "}
            <span className="text-primary">personal ideas in progress</span>.
          </MotionP>
        </div>
      </div>

      <div className="relative bg-dark mt-20 pt-20 pb-32">
        <MotionDiv
          initial={{ scale: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, filter: "blur(0)" }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-4xl text-center font-bold">My Services</h4>
        </MotionDiv>

        <div className="about-services wrapper mt-12 grid grid-cols-2 text-3xl place-items-center font-semibold">
          <MotionDiv
            initial={{ translateX: -250, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0)" }}
            transition={{ delay: 0.5 }}
          >
            <h5>
              <i className="fa-solid fa-plug text-primary text-4xl mr-4" />
              Backend APIs
            </h5>

            <h5 className="mt-20 -ml-1">
              <i className="fa-brands fa-telegram text-primary text-4xl mr-4" />
              Telegram Bots
            </h5>
          </MotionDiv>

          <MotionDiv
            initial={{ translateX: 250, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0)" }}
            transition={{ delay: 0.5 }}
            className="about-mobileMargin"
          >
            <h5>
              <i className="fa-solid fa-database text-primary text-4xl mr-4" />
              Data Parsers
            </h5>

            <h5 className="mt-20">
              <i className="fa-solid fa-gears text-primary text-4xl mr-4" />
              Automations
            </h5>
          </MotionDiv>
        </div>


        <MotionDiv
          initial={{ bottom: "50px" }}
          whileInView={{ bottom: "-110px" }}
          transition={{ delay: 0.3 }}
          className="absolute -z-10 right-[40px]"
        >
          <Image
            src="/about_element.svg"
            alt="about_element"
            width={120}
            height={100}
          />
        </MotionDiv>

        <MotionDiv
          initial={{ top: "50px" }}
          whileInView={{ top: "-100px" }}
          transition={{ delay: 0.3 }}
          className="absolute -z-10 left-[-10px]"
        >
          <Image
            src="/about_element.svg"
            alt="about_element"
            width={120}
            height={100}
          />
        </MotionDiv>
      </div>

      <div className="about-experence wrapper mt-20 pb-40 grid grid-cols-2 place-items-center">
        <div>
          <MotionDiv
            initial={{ scale: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, filter: "blur(0)" }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-4xl mb-8 font-bold">Education</h4>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl font-semibold">June 2023 - August 2023</p>
            <h5 className="text-3xl text-primary my-2">
              Computer Science Foundation
            </h5>
            <h6 className="text-2xl text-lightGray">PDP Academy</h6>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-2xl font-semibold">September 2023 - August 2024</p>
            <h5 className="text-3xl text-primary my-2">Python Backend Development</h5>
            <h6 className="text-2xl text-lightGray">PDP Academy</h6>
          </MotionDiv>
        </div>

        <div>
          <MotionDiv
            initial={{ scale: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, filter: "blur(0)" }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-4xl mb-8 font-bold">Job Experience</h4>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-2xl font-semibold">
              Aprel 2025 - May 2025
            </p>
            <h5 className="text-3xl text-primary my-2">Backend Developer</h5>
            <h6 className="text-2xl text-lightGray">Madad IT Academy</h6>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
