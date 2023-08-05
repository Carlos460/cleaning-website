'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IAnimatePresence {
  delay?: number;
  viewMarginBottom?: number;
  children?: any;
}

export default function AnimatePresence(props: IAnimatePresence) {
  return (
    <motion.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{
        once: true,
        margin: `0px 0px -${
          props.viewMarginBottom ? props.viewMarginBottom : 180
        }px 0px`,
      }}
      transition={{ duration: 0.4, delay: props.delay ? props.delay : 0 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 60 },
      }}
    >
      {props.children}
    </motion.div>
  );
}
