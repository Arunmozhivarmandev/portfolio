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
} from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: 1,
    phase: 'Getting Started',
    title: 'Junior Frontend Developer',
    period: 'Jan 2022 - Jun 2022',
    icon: Code,
    description:
      'Started my journey learning the codebase and company workflows. Focused on building foundational skills and contributing to smaller features under mentorship.',
    achievements: [
      'Completed onboarding and learned company tech stack',
      'Fixed 50+ bugs and implemented minor UI improvements',
      'Built responsive components using React and Tailwind CSS',
      'Participated in code reviews and learned best practices',
    ],
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Tailwind CSS'],
  },
  {
    id: 2,
    phase: 'Building Confidence',
    title: 'Frontend Developer',
    period: 'Jul 2022 - Dec 2022',
    icon: Zap,
    description:
      'Gained confidence and started taking on more complex features. Began working independently on user-facing components and improving application performance.',
    achievements: [
      'Developed 3 major feature modules from scratch',
      'Improved page load times by 40% through optimization',
      'Collaborated with design team on UI/UX improvements',
      'Started mentoring new interns joining the team',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'SASS',
      'Redux',
      'API Integration',
    ],
  },
  {
    id: 3,
    phase: 'Taking Ownership',
    title: 'Frontend Developer',
    period: 'Jan 2023 - Jun 2023',
    icon: Users,
    description:
      'Took ownership of larger projects and started leading frontend initiatives. Became the go-to person for complex UI challenges and cross-team collaboration.',
    achievements: [
      'Led complete redesign of user dashboard (10k+ daily users)',
      'Implemented automated testing reducing bugs by 60%',
      'Collaborated with backend team on API design',
      'Presented technical solutions to stakeholders',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Jest',
      'Cypress',
      'GraphQL',
      'Figma',
    ],
  },
  {
    id: 4,
    phase: 'Leadership & Growth',
    title: 'Senior Frontend Developer',
    period: 'Jul 2023 - Present',
    icon: Trophy,
    description:
      'Promoted to senior role, now leading frontend architecture decisions and mentoring junior developers. Focus on scalability and team productivity.',
    achievements: [
      'Architected new component library used across 5 products',
      'Reduced development time by 30% through better tooling',
      'Mentoring 2 junior developers and conducting interviews',
      'Leading migration to modern tech stack and best practices',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Storybook',
      'Docker',
      'AWS',
      'Team Leadership',
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
      className="min-h-screen px-4 py-20 transition-colors duration-300"
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
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
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
        <div ref={timelineRef} className="relative">
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
                    <div className="phase-icon flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-900 bg-white dark:border-white dark:bg-card">
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
                            className={`mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-card/8 backdrop-blur-sm`}
                          >
                            {exp.phase}
                          </div>
                          <h3 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                            {exp.period}
                          </p>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="achievement-item flex items-start gap-3 text-gray-700 dark:text-gray-300"
                              >
                                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-gray-500" />
                                <span>{achievement}</span>
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
                              className="tech-item rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
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
