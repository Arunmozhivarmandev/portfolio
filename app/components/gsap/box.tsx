'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Box() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vw = window.innerWidth;
    const targetX = 400;

    if (boxRef.current) {
      gsap.to(boxRef.current, {
        rotation: 360,
        x: targetX,
        xPercent: -100,
        ease: 'back.out(1.7)',
        duration: 2,
        repeatDelay:1,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);
  return (
    <>
      <div
        ref={boxRef}
        className="bg-primary box m-10 h-[100px] w-[100px] rounded-lg"
      ></div>
    </>
  );
}
