import { myProjects } from "../constants";
import Project from "../components/Project";
import { Particles } from "../components/Particles";

const Projects = () => {
  return (
   <section id="project" className="relative mt-16 mb-2 px-12">
       <Particles
              className="absolute inset-0 -z-50"
              quantity={100}
              ease={80}
              color={"#ffffff"}
              refresh
            />
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            subDescription={project.subDescription}
            image={project.image}
            coverImage={project.coverImage}
            tags={project.tags}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;