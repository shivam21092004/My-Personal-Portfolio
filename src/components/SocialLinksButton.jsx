import { motion } from "framer-motion"; // Correct import path
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinksButton = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/your-linkedin-username",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/your-github-username",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ name, icon, url }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-3 text-sm text-center text-white rounded-full bg-primary font-extralight cursor-pointer"
        >
          {icon}
          {name}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinksButton;
