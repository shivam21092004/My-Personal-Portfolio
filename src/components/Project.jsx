import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  coverImage,
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col cursor-pointer">
        <img
          src={coverImage} 
          alt={`${title} cover`}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110 h-48"
        />
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>

          {/* Tags and Read More in one row */}
          <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium border rounded-full bg-purple/20 text-secondary-foreground"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <button
              onClick={() => setIsHidden(true)}
              className="flex items-center gap-1 cursor-pointer hover-animation"
            >
              Read More
              <img src="/assets/arrow-right.svg" alt="arrow" className="w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          coverImage={coverImage}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
