"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { z } from "zod";

const FadeInSchema = z.object({
  className: z.string().optional(),
});

type FadeProps = z.infer<typeof FadeInSchema>;

export default function FadeIn({ children, className }: PropsWithChildren<FadeProps>) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
