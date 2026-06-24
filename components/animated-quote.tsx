'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedQuoteProps {
  children: ReactNode;
  className?: string;
  delayOffset?: number;
}

export default function AnimatedQuote({ children, className, delayOffset = 0 }: AnimatedQuoteProps) {
  // If children is a string, we split it into words. If it's React nodes, we animate the whole block.
  // For maximum smoothness, we'll animate line by line or word by word if it's text.
  
  // Since we have mixed HTML nodes (<i> etc) in frame-component1, we'll just animate the container 
  // with a smooth reveal, or we can split strings if passed as string.
  
  if (typeof children === 'string') {
    const words = children.split(' ');
    
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: delayOffset * 0.3 },
      }),
    };
    
    const child = {
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          type: 'spring',
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
        transition: {
          type: 'spring',
          damping: 12,
          stiffness: 100,
        },
      },
    };

    return (
      <motion.div
        className={className}
        style={{ display: 'inline-block', overflow: 'hidden' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Fallback for React nodes
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: delayOffset * 0.2 }}
    >
      {children}
    </motion.div>
  );
}
