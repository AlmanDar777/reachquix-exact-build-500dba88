import { useIsMobile } from "@/hooks/use-mobile";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

/**
 * Returns framer-motion props optimized for mobile:
 * - On mobile: simple fade only, no stagger delay
 * - On desktop: full animation with translateY and stagger
 */
export const useMobileAnimation = () => {
  const isMobile = useIsMobile();

  const getCardAnimation = (index: number, delayPerItem = 0.1) => ({
    initial: { opacity: 0, ...(isMobile ? {} : { y: 20 }) },
    whileInView: { opacity: 1, ...(isMobile ? {} : { y: 0 }) },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      delay: isMobile ? 0 : index * delayPerItem,
      ease: EASE,
    },
  });

  const getSectionAnimation = () => ({
    initial: { opacity: 0, ...(isMobile ? {} : { y: 20 }) },
    whileInView: { opacity: 1, ...(isMobile ? {} : { y: 0 }) },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: isMobile ? 0.3 : 0.6, ease: EASE },
  });

  const getSlideAnimation = (index: number, direction: "left" | "right" = "left") => ({
    initial: { opacity: 0, ...(isMobile ? {} : { x: direction === "left" ? -40 : 40 }) },
    whileInView: { opacity: 1, ...(isMobile ? {} : { x: 0 }) },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      delay: isMobile ? 0 : index * 0.05,
      ease: EASE,
    },
  });

  return { getCardAnimation, getSectionAnimation, getSlideAnimation, isMobile };
};
