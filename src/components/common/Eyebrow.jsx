import { motion, useReducedMotion } from 'framer-motion';

export default function Eyebrow({ children, className = '' }) {
  const reduceMotion = useReducedMotion();

  return <motion.span
    className={`eyebrow ${className}`.trim()}
    initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
    whileInView={reduceMotion ? undefined : { opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
    whileHover={reduceMotion ? undefined : { y: -2 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  ><span className="eyebrow-copy">{children}</span></motion.span>;
}
