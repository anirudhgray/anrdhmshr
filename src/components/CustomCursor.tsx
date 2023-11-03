// CustomCursor.tsx
import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });
  const [isPointer, setIsPointer] = useState(false);
  const [isSpecialElement, setIsSpecialElement] = useState(false);

  // Check if the device has a mouse
  const hasMouse = window.matchMedia('(pointer:fine)').matches;

  useEffect(() => {
    if (hasMouse) {
      const updatePosition = (e: MouseEvent | Event) => {
        setPosition({
          x: (e as MouseEvent).clientX,
          y: (e as MouseEvent).clientY,
        });
        console.log('update');
      };
      document.addEventListener('pointermove', updatePosition);

      const checkIfPointer = (e: MouseEvent) => {
        setIsPointer(
          //   getComputedStyle(e.target as Element).cursor === 'pointer',
          (e.target as Element).classList.contains('pointer-cursor-element'),
        );
        setIsSpecialElement(
          (e.target as Element).classList.contains('special-cursor-element'),
        );
      };
      document.addEventListener('mouseover', checkIfPointer);
      document.addEventListener('mouseout', checkIfPointer);

      return () => {
        document.removeEventListener('pointermove', updatePosition);
        document.removeEventListener('scroll', updatePosition);
        document.removeEventListener('mouseover', checkIfPointer);
        document.removeEventListener('mouseout', checkIfPointer);
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
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
      } ${`${
        isSpecialElement
          ? 'special-cursor dark:bg-[#ffffff36] bg-[#0000000e]'
          : ''
      }`}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="dot dark:bg-white bg-black" />
    </div>
  );
};

export default CustomCursor;
