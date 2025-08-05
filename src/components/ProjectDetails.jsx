import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  coverImage,
  tags,
  href,
  closeModal,
}) => {
  return (
    <>
      {coverImage && (
        <div className="fixed inset-0 z-40 overflow-hidden">
          <img
            src={coverImage}
            alt={`${title} cover background`}
            className="w-full h-full object-cover blur-sm opacity-30"
          />
        </div>
      )}
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
        <motion.div
          className="relative max-w-2xl border shadow-sm rounded-2xl bg-midnight bg-opacity-90 border-white/10 overflow-y-auto max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <button
            onClick={closeModal}
            className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-30"
            aria-label="Close modal"
          >
            <img src="/assets/close.svg" alt="Close" className="w-6 h-6" />
          </button>

          <div className="p-5 space-y-4">
            {image && image !== coverImage && (
              <img
                src={image}
                alt={title}
                className="w-full rounded-xl border border-white/10"
              />
            )}

            <h5 className="text-2xl font-bold text-white">{title}</h5>
            <p className="text-neutral-300 font-semibold text-base">{description}</p>

            {subDescription.map((subDesc, i) => (
              <p key={i} className="font-normal text-neutral-400">
                {subDesc}
              </p>
            ))}

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg w-10 h-10 hover:scale-110 transition-transform"
                  />
                ))}
              </div>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover:underline"
              >
                View Project
                <img src="/assets/arrow-up.svg" alt="arrow" className="w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;