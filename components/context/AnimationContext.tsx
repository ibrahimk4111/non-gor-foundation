"use client";

import React, { createContext, useContext } from "react";
import { Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';

// Define the props interface for the AnimationProvider
interface AnimationProviderProps {
  children: React.ReactNode;
}

// Define the AnimationContextProps interface
interface AnimationContextProps {
  parent: Variants;
  children: Variants;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(
  undefined
);

const animationSettings: AnimationContextProps = {
  parent:{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  },
  children:{
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }
};


export const AnimationProvider: React.FC<AnimationProviderProps> = ({children}) => (
  <AnimationContext.Provider value={animationSettings}>
    {children}
  </AnimationContext.Provider>
);

export const useAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return {ref, inView, context};
};
