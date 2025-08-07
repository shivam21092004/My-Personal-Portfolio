import Card from "../components/Card";
import { useRef } from "react";  
import { Globe } from "../components/Globe";
import { Framework } from "../components/Framework";

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing scroll-mt-16">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Shivam Bartwal</p>
            <p className="subtext">An aspiring Computer Science Engineer currently pursuing my B.Tech at Graphic Era Hill University, with a strong foundation in machine learning and software development. I have applied these skills in real-world projects.I'm passionate about building impactful, data-driven solutions and continuously expanding my knowledge through certifications and hands-on experience. </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        <div ref={grid2Container} className="grid-default-color grid-2">
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-4xl text-gray-500">Code Is A Craft</p>
            <Card
              style={{ rotate: "45deg", top: "10%", left: "20%" }}
              text="Dream"
              contatnerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "60%", left: "45%" }}
              text="Build"
              contatnerRef={grid2Container}
            />
            <Card
              style={{ rotate: "55deg", top: "32%", left: "60%" }}
              text="Render"
              contatnerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "30%", left: "0%" }}
              text="Design"
              contatnerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "70%", left: "10%" }}
              text="Deploy"
              contatnerRef={grid2Container}
            />
          </div>
        </div>

        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I,m based in India and currently open to work worldwide.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        <div
          className="grid-gray-color grid-5 relative"
          style={{ minHeight: "20rem" }}
        >
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext"> I bring a strong command of modern technologies with hands-on experience in software development, machine learning, and data-driven system design.</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Framework />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .grid-5 {
            grid-column: 1 / -1;
            position: relative;
            min-height: 20rem; /* rectangle height */
          }
        }
      `}</style>
    </section>
  );
};

export default About;
