'use client';

import gsap from 'gsap';
import Image from 'next/image';
import HeroBg from '../gsap/heroBg';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

export default function Banner() {
  const imageRef = useRef<HTMLImageElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const whiteRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          duration: 0.5,
          yPercent: -10,
          delay: 0.5,
          opacity: 1,
        });
      }

      if (aboutRef.current) {
        const split = new SplitText(aboutRef.current, { type: 'chars' });

        gsap.from(split.chars, {
          opacity: 0,
          duration: 1,
          ease: 'sine.out',
          stagger: 0.05,
        });
      }

      // Animate white text spans
      whiteRef.current.forEach((ref) => {
        if (ref) {
          gsap.to(ref, {
            duration: 2,
            color: 'white',
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container flex h-[calc(100vh-92px)]">
      <div className="flex h-full flex-col justify-center space-y-4 md:w-1/2">
        <h1 ref={aboutRef} className="text-[42px] font-medium text-white">
          Hi, I am Arunmozhivarman
        </h1>
        <p className="text-[17px] leading-10">
          Passionate{' '}
          <span
            ref={(el) => {
              whiteRef.current[0] = el;
            }}
            className="font-medium"
          >
            Full Stack Web Developer
          </span>{' '}
          with{' '}
          <span
            ref={(el) => {
              whiteRef.current[1] = el;
            }}
            className="font-medium"
          >
            2 years
          </span>{' '}
          of hands-on experience. Specialized in building modern web apps using
          React, Next.js & Node.js. Dedicated to crafting clean UI and scalable
          backend systems. Always learning, always building — let's create
          something amazing.
        </p>
      </div>
      <div className="flex h-full items-center justify-center md:w-1/2">
        <div className="pt-25 relative z-10 flex h-[500px] w-[390px] items-end overflow-hidden">
          <HeroBg />
          <Image
            src="/me.png"
            width={700}
            height={700}
            ref={imageRef}
            className="absolute -bottom-[5px] left-[50%] h-auto w-[350px] -translate-x-[51%] translate-y-[10%] object-contain opacity-0"
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}
