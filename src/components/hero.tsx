import { ParticleAnimation } from "./particle-animation";
import { BlinkingLight } from "./blinking-light";
import { SocialLinks } from "./social-links";

// Stars component for corner decorations
const Stars = () => {
  return (
    <>
      <div className="h-1.5 bg-[#8a2be2] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -top-[3.5px]"></div>
      <div className="h-1.5 bg-[#8a2be2] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -top-[3.5px]"></div>
      <div className="h-1.5 bg-[#8a2be2] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -bottom-[3.5px]"></div>
      <div className="h-1.5 bg-[#8a2be2] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -bottom-[3.5px]"></div>
    </>
  );
};

// Gradient mask styles
const toTop = {
  mask: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  WebkitMask: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};

const toBottom = {
  mask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  WebkitMask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};

const toLeft = {
  mask: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  WebkitMask: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};

const toRight = {
  mask: "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  WebkitMask: "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};

const toTopLeft = {
  mask: "linear-gradient(150deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
  WebkitMask: "linear-gradient(150deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
};

const toTopRight = {
  mask: "linear-gradient(210deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
  WebkitMask: "linear-gradient(210deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
};

const tubLight = {
  mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%, rgb(0,0,0) 50%,rgba(0,0,0,0) 100%)",
  WebkitMask: "linear-gradient(90deg,rgba(0,0,0,0) 0%, rgb(0,0,0) 50%,rgba(0,0,0,0) 100%)",
};

export const Hero = () => {
  return (
    <div className="relative h-auto overflow-hidden">
      <div className="absolute inset-0">
        <ParticleAnimation />
      </div>

      <div className="grid grid-cols-8 sm:grid-cols-12 pt-16 text-center items-center text-[#e6d4ff]" id="home">
        <div className="absolute inset-0 flex items-top justify-center top-0">
          <BlinkingLight />
        </div>
        <div className="col-span-12 flex justify-center">
          <div
            className="bg-violet-400 w-[316px] h-1 relative animate-pulse"
            style={tubLight}
          ></div>
        </div>
        
        {/* 1st row */}
        <div
          className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-b border-r"
          style={toTopLeft}
        ></div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div
          className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16 border-white border-opacity-10 border-b border-l border-r relative"
          style={toTop}
        ></div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div
          className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-l border-b"
          style={toTopRight}
        ></div>
        
        {/* 2nd row */}
        <div
          className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-b border-r"
          style={toLeft}
        ></div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16 border-white border-opacity-10 border-b border-l border-r flex items-center justify-center">
          <p className="text-lg">Hi there, I&apos;m</p>
        </div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div
          className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-l border-b"
          style={toRight}
        ></div>
        
        {/* 3rd row */}
        <div
          className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-b border-r"
          style={toLeft}
        ></div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16 border-white border-opacity-10 border-b border-l border-r relative flex items-start justify-center p-4">
          <Stars />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
            <span className="text-violet-500">Tan</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-300 to-violet-500">moy</span>
            <div className="absolute -inset-1 blur-sm bg-violet-500/20 rounded-lg -z-10"></div>
          </h1>
        </div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div
          className="hidden sm:block col-span-2 h-full border-l border-white border-opacity-10 border-b"
          style={toRight}
        ></div>
        
        {/* 4th row */}
        <div
          className="hidden sm:block h-full col-span-2 border-b border-white border-opacity-10 border-r"
          style={toLeft}
        ></div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16 border-white border-opacity-10 border-b border-l border-r relative flex justify-center py-4 px-8">
          <Stars />
          <p className="text-lg font-extralight">
            A passionate full-stack engineer with 6+ years of experience building modern & highly scalable web apps and services.
          </p>
        </div>
        <div className="hidden sm:block h-full border-white border-opacity-10 border-b"></div>
        <div
          className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-b border-l"
          style={toRight}
        ></div>
        
        {/* 5th row */}
        <div
          className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-r"
          style={toBottom}
        ></div>
        <div className="hidden sm:block h-full"></div>
        <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 relative">
          <div
            className="absolute inset-0 border-white border-opacity-10 border-l border-r"
            style={toBottom}
          ></div>

          <div className="relative flex items-center justify-center h-full py-8">
            <SocialLinks />
          </div>
        </div>
        <div className="hidden sm:block h-full"></div>
        <div
          className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-l"
          style={toBottom}
        ></div>
      </div>
    </div>
  );
};