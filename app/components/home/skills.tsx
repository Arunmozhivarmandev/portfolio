'use client';

import { useRef } from 'react';
import CaseSvg from '../svg/skillcase';

export default function Skills() {
  const caseRef = useRef<SVGPathElement | null>(null);
  return (
    <section className="relative flex w-full items-center py-3">
      <div className="flex w-full flex-col items-center gap-8 md:w-1/2 md:flex-row">
        {/* Left Ring - Half Circle */}
          <CaseSvg ref={caseRef} />
        <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
          {/* You will rotate this container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Place logos around a half-circle using absolute + transform */}
            {/* Each logo will be in a fixed angle like a clock hand */}
            {/* Use GSAP or Framer Motion to rotate this parent */}
            {/* Use refs and active state logic */}
          </div>
        </div>

        {/* Right Description Panel */}
        <div className="px-5 text-left md:w-1/2">
          <h2 className="text-primary mb-4 text-3xl font-bold">
            My Core Skills
          </h2>
          <div className="text-muted-foreground space-y-2">
            {/* Dynamic content — update this based on the active skill */}
            <p>1. ...</p>
            <p>2. ...</p>
            <p>3. ...</p>
            <p>4. ...</p>
            <p>5. ...</p>
            <p>6. ...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
