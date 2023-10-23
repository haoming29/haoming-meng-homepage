import { motion } from "framer-motion";

const MotionPage = ({
  children,
  key = "uniqueString",
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  transition = { ease: "easeInOut", duration: 0.5 },
}) => {
  return (
    <motion.div
      key={key}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionPage;
