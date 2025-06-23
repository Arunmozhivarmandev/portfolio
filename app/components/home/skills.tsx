'use client';

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CaseSvg from '../svg/skillcase';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rotatingWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const logos = [
    {
      src: '/javascript.png',
      title: 'JavaScript',
      content: [
        'I have strong proficiency in JavaScript, the core language of the web.',
        'I build dynamic interfaces, handle complex logic, and optimize performance.',
        'Familiar with ES6+ features like destructuring, promises, and async/await.',
        'JavaScript is the backbone of my frontend and backend development.',
      ],
    },
    {
      src: '/redux.png',
      title: 'Redux',
      content: [
        'Experienced in managing global state with Redux and Redux Toolkit.',
        'I use actions, reducers, and middleware to streamline app logic.',
        'Skilled in integrating Redux DevTools and handling async flows via Thunks.',
        'Ideal for scaling applications with complex state structures.',
      ],
    },
    {
      src: '/mongodb.png',
      title: 'MongoDB',
      content: [
        'Comfortable with designing NoSQL schemas and working with MongoDB Atlas.',
        'I perform CRUD operations, aggregation pipelines, and indexing.',
        'Used Mongoose for schema modeling in full-stack MERN applications.',
        'Great for handling flexible and unstructured data.',
      ],
    },
    {
      src: '/express.png',
      title: 'Express.js',
      content: [
        'Built multiple REST APIs and middleware with Express.',
        'Familiar with route handling, JWT authentication, and error handling.',
        'Integrates smoothly with MongoDB and MySQL backends.',
        'Ideal for rapid backend development and scalable APIs.',
      ],
    },
    {
      src: '/nextjs.png',
      title: 'Next.js',
      content: [
        'Built full-stack applications with Next.js including SSR and SSG.',
        'Implemented dynamic routes, API routes, and image optimization.',
        'Used middleware and app router for advanced functionality.',
        'Next.js is my go-to framework for SEO-friendly React apps.',
      ],
    },
    {
      src: '/react.png',
      title: 'React.js',
      content: [
        'Built responsive, reusable UI components using React and hooks.',
        'Used React Router, Context API, and component libraries like Shadcn.',
        'I follow best practices like lifting state and separation of concerns.',
        'React is my main frontend library for all interactive apps.',
      ],
    },
    {
      src: '/mysql.png',
      title: 'MySQL',
      content: [
        'Designed and normalized relational databases using MySQL.',
        'Performed joins, subqueries, and indexing for optimized queries.',
        'Integrated MySQL with backend using MySQL2 and Sequelize.',
        'Ideal for projects requiring structured and relational data.',
      ],
    },
    {
      src: '/trpc.png',
      title: 'tRPC',
      content: [
        'Implemented end-to-end typesafe APIs using tRPC with TypeScript.',
        'Eliminated the need for manual API client code and typings.',
        'Simplifies client-server communication in modern web apps.',
        'Perfect for full-stack TypeScript applications with tight integration.',
      ],
    },
    {
      src: '/tailwind.png',
      title: 'Tailwind CSS',
      content: [
        'Styled fully responsive layouts using Tailwind utility-first classes.',
        'I create clean, scalable designs with custom themes and variants.',
        'Integrated Tailwind with frameworks like Next.js and Shadcn UI.',
        'Faster UI development without writing traditional CSS.',
      ],
    },
  ];

  const radius = 420;
  const arcAngle = 180;
  const totalLogos = logos.length;
  const angleStep = arcAngle / (totalLogos - 1);

  useGSAP(() => {
    if (!isClient || !sectionRef.current || !rotatingWrapperRef.current) return;

    // Set initial position to first logo
    gsap.set(rotatingWrapperRef.current, { rotate: -90 });

    // Snap to discrete positions
    const snapPositions = logos.map((_, i) => i / (totalLogos - 1));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * 2}`, // Reduced scroll distance
        scrub: 1,
        snap: {
          snapTo: snapPositions,
          duration: { min: 0.2, max: 0.4 },
          delay: 0.1,
        },
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentStep = Math.round(progress * (totalLogos - 1));
          const rotation = -90 + currentStep * angleStep;

          gsap.to(rotatingWrapperRef.current, {
            rotate: rotation,
            duration: 0.3,
            ease: 'power2.out',
          });

          setActiveIndex(currentStep);
        },
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [isClient, totalLogos, angleStep]);

  if (!isClient) return null;

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-background relative h-[750px] w-full overflow-hidden"
      >
        {/* Header */}
        <div className="m-auto mt-10 w-max text-center">
          <h2 className="text-primary mb-2 text-3xl font-bold">
            My Core Skills
          </h2> 
          <div className="mt-15">
            <div className="bg-card/80 rounded-lg border px-6 py-3 text-center backdrop-blur-sm">
              {logos[activeIndex].content.map((content, index) => (
                <p
                  key={`content_${index}`}
                  className="text-muted-foreground text-sm leading-[25px]"
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* SVG Case */}
        <div className="relative translate-y-10 flex w-full items-center justify-center">
          <CaseSvg />
          {/* Rotating Logo Arc */}
          <div className="translate-y-26 z-20 absolute left-1/2 top-1/2 -translate-x-1/2">
            <div
              ref={rotatingWrapperRef}
              className=" h-[450px] w-[900px]"
              style={{ rotate: '-90deg' }} // Set initial position to first logo
            >
              {logos.map((log, i) => {
                const angleRad =
                  Math.PI / 2 -
                  (arcAngle * Math.PI) / 180 / 2 +
                  (i * angleStep * Math.PI) / 180;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                return (
                  <Image
                    key={i}
                    src={log.src || '/placeholder.svg'}
                    alt={`Logo ${i}`}
                    width={100}
                    height={100}
                    className={`absolute h-13 w-13 transition-all duration-300 
                      ${i === activeIndex
                        ? "scale-140 brightness-110 z-40 drop-shadow-lg"
                        : "z-20"
                      }`}
                    style={{
                      left: `${450 + x - 24}px`,
                      top: `${225 - y - 24}px`,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <Image alt='mask' width={839} height={397} src={'/skillmask.svg'} className='absolute z-30 translate-y-18 scale-110'/>
        </div>

        <div className="absolute -bottom-15 left-[50%] flex h-[400px] w-[400px] -translate-x-1/2 flex-col items-center justify-center bg-[radial-gradient(circle,_rgba(255,223,128)_0%,_rgba(255,225,225,0.1)_0%,_transparent_70%)] bg-blend-lighten">
          <p>2 years of</p>
          <h2 className="mt-2 text-4xl font-bold text-white">EXP</h2>
          <p className="mt-1">
            in{' '}
            <span className="text-primary text-2xl font-bold">
              {logos[activeIndex].title}
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
