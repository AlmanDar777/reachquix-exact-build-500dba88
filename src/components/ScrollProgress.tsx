import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
