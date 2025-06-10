'use client';

import gsap from 'gsap';
import { useRef } from 'react';
import HeroSvg from '../svg/hero';
import { useGSAP } from '@gsap/react';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

export default function HeroBg() {
  const heroRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (heroRef.current && circleRef.current) {
      gsap.to(circleRef.current, {
        duration: 0.5,
        morphSVG: heroRef.current,
        // fill: getComputedStyle(document.documentElement).getPropertyValue('--primary') ,
      });
    }
  }, []);

  return (
    <div className='translate-y-[20px] w-full h-full'>
      <HeroSvg ref={heroRef} circleRef={circleRef} />
    </div>
  );
}
