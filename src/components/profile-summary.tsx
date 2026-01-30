import { portfolioData } from "../data/portfolio";
import { AnimateOnScroll } from "./animate-on-scroll";
import { Balancer, Provider } from "react-wrap-balancer";

export const ProfileSummary = () => {
  return (
    <AnimateOnScroll id="profile-summary">
      <div
        className="max-w-2xl lg:max-w-3xl text-white/50 font-light font-inter flex flex-col mx-auto justify-center text-center gap-4 mb-10 pt-16 px-4"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-emerald-500/50 mr-4"></div>
          <h2
            id="profile-summary-heading"
            className="text-3xl font-semibold text-white text-center"
          >
            Profile Summary
          </h2>
          <div className="h-px w-12 bg-emerald-500/50 ml-4"></div>
        </div>
        <Provider>
          {portfolioData.profileSummary.map((paragraph, index) => (
            <p key={index} className="min-h-[2.5rem]">
              <Balancer>{paragraph}</Balancer>
            </p>
          ))}
        </Provider>
      </div>
    </AnimateOnScroll>
  );
};

export default ProfileSummary;
