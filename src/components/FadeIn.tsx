'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
