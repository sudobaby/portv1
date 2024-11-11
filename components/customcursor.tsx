import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Update cursor position
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  const cursorStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  };

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 bg-[#8000ff] rounded-full pointer-events-none mix-blend-difference transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={cursorStyle}
    ></div>
  );
};

export default CustomCursor;
