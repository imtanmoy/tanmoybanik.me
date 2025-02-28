import { AnimateOnScroll } from "./animate-on-scroll";

export const About = () => {
  return (
    <AnimateOnScroll id="about">
      <div className="max-w-2xl lg:max-w-3xl text-white/50 font-light flex flex-col mx-auto justify-center text-center gap-4 mb-10 pt-16 px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-violet-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">About Me</h2>
          <div className="h-px w-12 bg-violet-500/50 ml-4"></div>
        </div>

        <p>
          I began my software engineering journey in 2017, working on full-stack
          applications using MEAN stack and mobile development with IONIC. This
          early experience provided me a solid foundation across different
          platforms.
        </p>

        <p>
          At Cramstack, I progressed from Software Engineer to Lead Software
          Engineer, where I specialized in Natural Language Query (NLQ) systems.
          I built data visualization components, optimized query processing, and
          eventually led teams developing secure document management systems for
          banking clients.
        </p>

        <p>
          My career advanced when I joined MedEase Technology as Senior Software
          Engineer, where I developed HIPAA-compliant healthcare solutions. I
          designed high-performance microservices, integrated banking APIs, and
          significantly improved infrastructure efficiency, reducing SSL
          configuration time by 80%.
        </p>

        <p>
          Currently at Pinwheel, I'm building scalable applications with React,
          React Native, and Node.js. I've implemented WebAuthn authentication,
          developed real-time device update systems using MQTT, and created
          comprehensive testing frameworks to ensure product reliability.
        </p>

        <p>
          Throughout my career, I've specialized in TypeScript, React, Node.js
          (NestJS), GraphQL, and cloud infrastructure with AWS and Docker. I've
          consistently delivered efficient solutions for complex problems, from
          document processing pipelines handling 100K+ documents to optimizing
          CI/CD workflows that reduced deployment times by 50%.
        </p>

        <p>
          With my M.Sc. in Computer Science focused on distributed systems, I
          continuously explore new technologies while applying best practices in
          architecture, security, and performance optimization across all my
          projects.
        </p>

        <p className="text-violet-400">
          Let's build something exceptional together!
        </p>
      </div>
    </AnimateOnScroll>
  );
};

