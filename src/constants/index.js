export const myProjects = [
  {
    id: 1,
    title: "Human Detection and Counting System using OpenCV and HOG",
    description:
      "This project is a Real-Time Human Detection System using OpenCV HOG (Histogram of Oriented Gradients) and SVM (Support Vector Machine) to identify people in images, video files, or through a webcam feed.",
    subDescription: [
      "Developed a real-time human detection system using Python and OpenCV HOG + SVM pipeline.",
      "Integrated image, video, and webcam input modes to provide flexible detection capabilities.",
      "Implemented accurate bounding box visualization and person count display per frame.Used cv2.HOGDescriptor_getDefaultPeopleDetector() for person detection and imutils for image resizing.",
      "Designed command-line support with argparse to handle input/output paths and camera mode.",
      "Enhanced user interaction by adding live person count, status overlays, and real-time detection feedback.",
    ],
    href: "https://github.com/shivam21092004/Human-Detection-and-Counting-sytem-",
    logo: "",
    image: "/assets/projects/human-detection.png",
    coverImage: "/assets/projects/human.jpg", 
    tags: [
      {
        id: 1,
        name: "python",
        path: "/public/logos/python5.svg",
      },
      {
        id: 2,
        name: "numpy",
        path: "public/logos/numpy.svg",
      },
      {
        id: 3,
        name: "OpenCV2",
        path: "public/logos/opencv.png",
      },
      {
        id: 4,
        name: "imutils",
        path: "public/logos/imutils.png",
      },
    ],
  },
  {
    id: 2,
    title: "Earthquake Magnitude Prediction and Classification",
    description:
      "A machine learning-based system for predicting earthquake magnitudes and classifying seismic events using geospatial and seismic data.",
    subDescription: [
 "Preprocessed and cleaned seismic datasets with pandas and numpy for accurate modeling.",
   "Built regression models (Linear Regression, SVR, Random Forest) to predict earthquake magnitudes.",
   "Implemented classification models (SVM, Random Forest) to categorize earthquakes into magnitude-based classes.",
   "Applied K-Means clustering and PCA for spatial pattern detection and visualization of seismic clusters.",
   "Evaluated models using metrics like MSE, R², accuracy, confusion matrix, and precision-recall curves.",
   "Visualized model results and feature importances with matplotlib and seaborn for interpretability.",
    ],
    href: "https://github.com/shivam21092004/eartquake-predection-model",
    logo: "",
    image: "/assets/projects/earthquake1.jpg",
    coverImage: "public/logos/earthquake.jpg", 
    tags: [
      {
        id: 1,
        name: "pandas",
        path: "public/logos/pandas.svg",
      },
      {
        id: 2,
        name: "numpy",
        path: "public/logos/numpy.svg",
      },
      {
        id: 3,
        name: "matplotlib",
        path: "public/logos/mata.svg",
      },
      {
        id: 4,
        name: "seaborn",
        path: "public/logos/seaborn.png",
      },
    ],
  },
  {
    id: 3,
    title: "File Encryption & Decryption",
    description:
      "The application is a secure web-based tool that enables users to encrypt, decrypt, and verify file integrity using password-based encryption, providing local and cloud-based file handling.",
   subDescription: [
  "Collaboratively developed a secure web app for file encryption and decryption using React and TypeScript.",
  "Divided frontend responsibilities across team members, focusing on modular components like drag-and-drop UI, password meter, and file integrity checker.",
  "Integrated Web Crypto API to perform AES-based client-side encryption and decryption with post-operation verification.",
  "Implemented file upload and drag-and-drop handling for an intuitive user experience with responsive feedback.",
  "Developed reusable and maintainable components using a shared UI system powered by Tailwind CSS.",
  "Worked on integrity verification logic comparing original and decrypted files using ArrayBuffer comparison.",
  "Collaborated via version control (Git) and regular code reviews to ensure consistent quality and functionality across the project.",
],
    href: "https://drive.google.com/file/d/1x4mLr7qWERUwJfWCZLiXWtEhBF-Jhvpb/view?usp=sharing",
    logo: "",
    image: "/assets/projects/decrypt.png",
    coverImage: "/assets/projects/encrypt.jpg", 
    tags: [
      {
        id: 1,
        name: "React",
        path: "public/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "public/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "public/logos/js.svg",
      },
    ],
  },
];

export const mySocials = [
  {
  name: "WhatsApp",
  href: "https://wa.me/917906933812",
  icon: "public/logos/whatsApp.svg", 
},
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shivam-bartwal-9b810624b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: "public/logos/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shivambartwal15?igsh=YmZnNWhmYTJrbnAw",
    icon: "public/logos/instagram.svg",
  },
];
