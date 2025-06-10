import { forwardRef } from 'react';

const HeroSvg = forwardRef(function HeroSvg(
  { circleRef }: { circleRef: React.Ref<SVGPathElement> },
  heroRef: React.Ref<SVGPathElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="290"
      className="overflow-visible"
      viewBox="0 0 300 290"
      fill="none"
    >
      <path
        ref={circleRef}
        // className='fill-primary'
        fill="#b292ff"
        d="M235 140.649c0 44.459-36.041 80.5-80.5 80.5s-80.5-36.041-80.5-80.5 36.041-80.5 80.5-80.5 80.5 36.041 80.5 80.5z"
        />
      <path
        ref={heroRef}
        fillRule="evenodd"
        clipRule="evenodd"
        className="opacity-0"
        d="M178.449 12.313C231.026 4.33956 289.336 -13.7022 331.794 18.3164C377.15 52.5196 392.159 114.906 389.755 171.662C387.446 226.192 358.273 274.303 319.334 312.547C280.803 350.389 232.121 385.2 178.449 379.194C127.733 373.519 99.191 322.886 65.919 284.191C36.4549 249.925 0.0863102 216.854 0.000174852 171.662C-0.0860628 126.416 31.7407 88.8386 65.4893 58.7022C97.052 30.5177 136.612 18.6577 178.449 12.313Z"
        fill="#58039B"
      />
    </svg>
  );
});

export default HeroSvg;
