import React, { useState, useEffect, useRef } from "react";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  // Update the mouse position
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Listen to mouse move events
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    // Update cursor position when mouse moves
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${mousePosition.x - 15}px, ${mousePosition.y - 15}px, 0)`;
    }
  }, [mousePosition]);

  return (
    <div
      ref={cursorRef}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: "rgba(20, 20, 20, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        border: "1px solid rgba(20, 20, 20, 1)",
        boxShadow: "0 0 10px rgba(20, 20, 20, 0.5)",
        zIndex: 9999,
        transition: "transform 100ms ease-out",
      }}
      className="custom-cursor hidden sm:block"  // Hide on small screens and show on larger screens
    ></div>
  );
}

export default CustomCursor;
