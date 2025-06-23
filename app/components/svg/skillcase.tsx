import { forwardRef } from 'react';

const CaseSvg = forwardRef<SVGPathElement, {}>(function CaseSvg(_, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="839"
      height="377"
      className='scale-110 relative z-10 translate-y-18'
      viewBox="0 0 839 377"
      fill="none"
    >
      <path
        d="M0.0913861 364.775C14.233 263.777 64.3451 171.274 141.221 104.262C218.096 37.2498 316.572 0.228822 418.554 0.0010562C520.537 -0.226709 619.177 36.354 696.351 103.022C773.525 169.691 824.05 261.968 838.642 362.902L757.709 374.603C745.934 293.159 705.165 218.699 642.893 164.904C580.621 111.109 501.027 81.5914 418.737 81.7752C336.446 81.959 256.986 111.831 194.954 165.904C132.923 219.977 92.4867 294.618 81.0757 376.114L0.0913861 364.775Z"
        fill="#A259FF"
      />
    </svg>
  );
});

export default CaseSvg;
