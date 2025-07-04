'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Code,
  Users,
  Zap,
  Trophy,
  ArrowLeft,
} from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: 1,
    phase: 'Foundation & Upskilling',
    title: 'Junior Frontend Developer',
    period: 'Aug 2023 - Nov 2023',
    icon: Code,
    description:
      'Focused on building solid frontend fundamentals with React and JavaScript. Worked on UI components and practiced integrating APIs in personal and client-assisted projects.',
    achievements: [
      'Built reusable components using React and Tailwind CSS',
      'Integrated third-party REST APIs in multiple UIs',
      'Strengthened fundamentals in JavaScript and Git',
      'Explored Next.js basics and SSR concepts',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Git',
      'API Integration',
    ],
  },
  {
    id: 2,
    phase: 'Going Full Stack',
    title: 'Full Stack Developer',
    period: 'Nov 2023 - Aug 2024',
    icon: Zap,
    description:
      'Took on full-stack responsibilities using Express.js and MySQL. Delivered admin panels and CMS-like dashboards with complete CRUD functionality and dynamic routes.',
    achievements: [
      'Developed React + Vite admin panel with dynamic routing',
      'Created REST APIs using Express.js and MySQL2',
      'Handled image storage and retrieval using Cloudinary',
      'Worked on banner/product modules using array mapping',
    ],
    technologies: [
      'React',
      'Vite',
      'Express.js',
      'MySQL2',
      'Cloudinary',
      'Bootstrap',
    ],
  },
  {
    id: 3,
    phase: 'Scaling & Optimization',
    title: 'Frontend Developer',
    period: 'Aug 2024 - Jan 2024',
    icon: Users,
    description:
      'Focused on performance, modular code, and collaborating with backend and design teams. Led the UI for core modules and refactored legacy features for better performance.',
    achievements: [
      'Refactored dashboard components for reusability',
      'Improved loading speed with code-splitting and lazy loading',
      'Implemented protected routes and token-based auth UI',
      'Collaborated on API designs and error handling strategies',
    ],
    technologies: [
      'React',
      'Next.js',
      'Redux Toolkit',
      'TypeScript',
      'Axios',
      'SASS',
    ],
  },
  {
    id: 4,
    phase: 'Modern Stack & Team Leadership',
    title: 'Senior Full Stack Developer',
    period: 'Jan 2023 - Present',
    icon: Trophy,
    description:
      'Worked as a full stack developer using modern technologies like Prisma and PostgreSQL on the backend. Led the frontend React team, focusing on scalable architecture, UI consistency, and code quality across the project.',
    achievements: [
      'Led the frontend team and established scalable component patterns',
      'Integrated Prisma ORM with PostgreSQL for robust data handling',
      'Built a dynamic CMS dashboard with nested routing and access control',
      'Improved developer experience with shadcn/ui and Tailwind CSS',
      'Mentored junior developers and reviewed code for quality',
      'Set up GitHub Actions for CI/CD automation',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'shadcn/ui',
      'Tailwind CSS',
      'GitHub Actions',
    ],
  },
];

const companyInfo = {
  name: 'Zinavo Pvt Ltd',
  location: 'Bangalore, Karnataka',
  totalPeriod: 'Aug 2023 - Present (1.8 years)',
  role: 'Frontend Developer → Fullstack Developer',
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Company info animation
      gsap.fromTo(
        companyRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: companyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Timeline line animation
      gsap.fromTo(
        lineRef.current,
        {
          scaleY: 0,
          transformOrigin: 'top',
        },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        },
      );

      // Experience items animation
      experienceRefs.current.forEach((item, index) => {
        if (item) {
          const isEven = index % 2 === 0;

          // Main content animation
          gsap.fromTo(
            item.querySelector('.experience-content'),
            {
              opacity: 0,
              x: isEven ? -100 : 100,
              y: 50,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            },
          );

          // Icon animation
          const icon = item.querySelector('.phase-icon');
          if (icon) {
            gsap.fromTo(
              icon,
              {
                scale: 0,
                rotation: -180,
              },
              {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 75%',
                  toggleActions: 'play none none reverse',
                },
              },
            );
          }

          // Dot animation
          const dot = dotsRef.current[index];
          if (dot) {
            gsap.fromTo(
              dot,
              {
                scale: 0,
                opacity: 0,
              },
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 75%',
                  toggleActions: 'play none none reverse',
                },
              },
            );
          }

          // Achievements stagger animation
          const achievements = item.querySelectorAll('.achievement-item');
          gsap.fromTo(
            achievements,
            {
              opacity: 0,
              x: isEven ? -30 : 30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            },
          );

          // Technologies stagger animation
          const techs = item.querySelectorAll('.tech-item');
          gsap.fromTo(
            techs,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 65%',
                toggleActions: 'play none none reverse',
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToExperienceRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      experienceRefs.current[index] = el;
    }
  };

  const addToDotRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      dotsRef.current[index] = el;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen overflow-x-hidden px-4 py-20 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 ref={titleRef} className="text-primary mb-12 text-3xl font-bold">
            My Journey
          </h2>

          <div ref={companyRef} className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {companyInfo.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {companyInfo.totalPeriod}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {companyInfo.location}
              </div>
            </div>
            <p className="mt-4 text-[17px] font-medium text-gray-700 dark:text-white">
              {companyInfo.role}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative pt-8">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-px -translate-x-1/2 transform bg-gray-200 dark:bg-gray-700">
            <div
              ref={lineRef}
              className="w-full origin-top bg-gray-900 dark:bg-white"
              style={{ height: '100%' }}
            />
          </div>

          {/* Experience items */}
          <div className="space-y-32">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = exp.icon;

              return (
                <div
                  key={exp.id}
                  ref={(el) => addToExperienceRefs(el, index)}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    ref={(el) => addToDotRefs(el, index)}
                    className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full bg-gray-900 dark:bg-white"
                  />

                  {/* Phase icon */}
                  <div className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-8 transform">
                    <div className="phase-icon dark:bg-card flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-900 bg-white dark:border-white">
                      <IconComponent className="h-6 w-6 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`experience-content grid grid-cols-1 gap-8 lg:grid-cols-2 ${
                      isEven ? 'lg:text-right' : ''
                    }`}
                  >
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="space-y-6 pt-8">
                        <div>
                          <div
                            className={`shadow-lg" mb-3 inline-block rounded-full border-0 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-sm text-white backdrop-blur-sm`}
                          >
                            {exp.phase}
                          </div>
                          <h3 className="text-primary mb-2 text-[25px] font-bold">
                            {exp.title}
                          </h3>
                          <p className="mb-6 text-lg">{exp.period}</p>
                        </div>

                        <p className="text-[17px] leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-[16px] font-medium text-gray-900 dark:text-white">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2 text-right">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className={`achievement-item flex items-start ${index % 2 === 0 ? 'justify-end' : 'justify-start'} gap-3`}
                              >
                                {index % 2 !== 0 && (
                                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 dark:text-white" />
                                )}
                                <span>{achievement}</span>
                                {index % 2 === 0 && (
                                  <ArrowLeft className="mt-1 h-4 w-4 flex-shrink-0 dark:text-white" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div
                          className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}
                        >
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="tech-item dark:bg-muted/30 rounded-full bg-gray-200 px-3 py-1 text-sm dark:text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      {/* Empty space for alternating layout */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
