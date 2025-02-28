import { SocialLinks } from "./social-links";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <h1
          className="mb-0 text-3xl font-semibold uppercase leading-relaxed tracking-[0.5rem] text-pink-700 font-source-code-pro"
          style={{
            textShadow: "0 0 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          {"<Hello World!/>"}
        </h1>
        <p className="max-w-screen-md px-12 py-0 text-center text-2xl font-light leading-normal tracking-widest text-white">
          {`I'm`} <span style={{ color: "#cc005f" }}>Tanmoy Banik</span> a
          passionate full-stack engineer who has experience building modern &
          highly scalable web apps and services.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};
