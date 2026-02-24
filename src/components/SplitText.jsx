import { motion } from 'framer-motion';

export default function SplitText({ text, className = "", delay = 0 }) {
  const words = text.split(" ");
  
  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`word-${i}`}
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1.2,
            delay: delay + i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
