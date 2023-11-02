// CustomCursor.tsx
import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -10, y: -10 });
  const [isPointer, setIsPointer] = useState(false);

  // Check if the device has a mouse
  const hasMouse = window.matchMedia('(pointer:fine)').matches;

  useEffect(() => {
    if (hasMouse) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        console.log(getComputedStyle(e.target as Element).cursor);
      };
      document.addEventListener('pointermove', updatePosition);

      const checkIfPointer = (e: MouseEvent) => {
        setIsPointer(
          getComputedStyle(e.target as Element).cursor === 'pointer',
        );
      };
      document.addEventListener('mouseover', checkIfPointer);
      document.addEventListener('mouseout', checkIfPointer);

      return () => {
        document.removeEventListener('pointermove', updatePosition);
        document.removeEventListener('mouseover', checkIfPointer);
        document.removeEventListener('mouseout', checkIfPointer);
      };
    }
  }, [hasMouse]);

  if (!hasMouse) {
    // Don't render the custom cursor on touch devices
    return null;
  }

  return (
    <div
      className={`cursor dark:border-white border-black ${
        isPointer ? 'pointer' : ''
      }`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="dot dark:bg-white bg-black" />
    </div>
  );
};

export default CustomCursor;
