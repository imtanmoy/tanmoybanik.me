import { BlinkingLight } from "./blinking-light";
import { ParticleAnimation } from "./particle-animation";
import { SocialLinks } from "./social-links";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
      <div className="absolute inset-0">
        <ParticleAnimation />
      </div>
      <div className="w-full py-16 text-center text-[#e6d4ff]" id="home">
        <div className="absolute inset-0 flex items-top justify-center top-0">
          <BlinkingLight />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto px-4">
          <h1
            className="text-4xl font-bold tracking-wide text-violet-500 font-source-code-pro"
            style={{
              textShadow: "0 0 10px rgba(138, 43, 226, 0.4)",
            }}
          >
            Tanmoy Banik
          </h1>
          <p className="px-4 py-0 text-center text-2xl font-light leading-normal tracking-widest text-white">
            A passionate full-stack engineer who has experience building modern
            & highly scalable web apps and services.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
