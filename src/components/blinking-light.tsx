export const BlinkingLight = () => {
  return (
    <div className="w-full top-0 absolute blur-[19px] flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 649 382"
        className="w-full max-w-2xl h-80 blur-lg animate-tubelight"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lightGradient" x1="0.5" x2="0.5" y1="0" y2="1">
            <stop
              offset="0"
              stopColor="rgba(138, 43, 226, 0.62)"
              stopOpacity="0.62"
            ></stop>
            <stop
              offset="1"
              stopColor="rgba(148, 87, 235, 0)"
              stopOpacity="0"
            ></stop>
          </linearGradient>
        </defs>
        <path
          d="M 169.29 55 L 479.781 55 L 648.75 382 L 0.75 382 Z"
          fill="url(#lightGradient)"
        ></path>
      </svg>
    </div>
  );
};