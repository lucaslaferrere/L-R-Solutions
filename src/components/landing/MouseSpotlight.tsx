import { useEffect, useRef } from "react";

const MouseSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(200, 80%, 55%, 0.04) 0%, transparent 70%)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
      }}
    />
  );
};

export default MouseSpotlight;
