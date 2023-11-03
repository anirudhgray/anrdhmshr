// CustomCursor.tsx
import React, { useEffect, useState } from 'react';
import './CustomCursor.css';
import useStore from '../store';

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
  const [isClicked, setIsClicked] = useState(false);

  // Check if the device has a mouse
  const hasMouse = window.matchMedia('(pointer:fine)').matches;

  const { inc } = useStore();

  useEffect(() => {
    if (hasMouse) {
      const updatePosition = (e: MouseEvent | Event) => {
        setPosition({
          x: (e as MouseEvent).clientX,
          y: (e as MouseEvent).clientY,
        });
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

      const handleClick = (e: MouseEvent) => {
        setIsClicked(true);
        if (
          (e.target as Element).classList.contains('special-cursor-element')
        ) {
          setTimeout(() => setIsClicked(false), 200);
          inc();
        } else {
          setTimeout(() => setIsClicked(false), 200);
        }
      };
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('pointermove', updatePosition);
        document.removeEventListener('mouseover', checkIfPointer);
        document.removeEventListener('mouseout', checkIfPointer);
        document.removeEventListener('click', handleClick);
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
      } ${
        isSpecialElement
          ? isClicked
            ? 'special-cursor-clicked dark:bg-[#ffffff36] bg-[#0000000e]'
            : 'special-cursor dark:bg-[#ffffff36] bg-[#0000000e]'
          : ''
      } ${!isSpecialElement ? (isClicked ? 'cursor-clicked' : '') : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="dot dark:bg-white bg-black" />
    </div>
  );
};

export default CustomCursor;
