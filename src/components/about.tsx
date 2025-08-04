import { portfolioData } from "../data/portfolio";
import { AnimateOnScroll } from "./animate-on-scroll";
import { Balancer, Provider } from "react-wrap-balancer";

export const About = () => {
  return (
    <AnimateOnScroll id="about">
      <div className="max-w-2xl lg:max-w-3xl text-white/50 font-light flex flex-col mx-auto justify-center text-center gap-4 mb-10 pt-16 px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-emerald-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">
            About Me
          </h2>
          <div className="h-px w-12 bg-emerald-500/50 ml-4"></div>
        </div>
        <Provider>
          {portfolioData.about.map((paragraph, index) => (
            <p key={index}>
              <Balancer>{paragraph}</Balancer>
            </p>
          ))}
        </Provider>

        <p className="text-zinc-300">
          Let's build something exceptional together!
        </p>
      </div>
    </AnimateOnScroll>
  );
};

export default About;
