import Particles, { initParticlesEngine } from "@tsparticles/react";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export const ParticleAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const initParticles = () => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(initParticles, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(initParticles, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 100,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: ["#8a2be2", "#9400d3"], // BlueViolet and DarkViolet
        },
        links: {
          color: "#7b68ee", // MediumSlateBlue
          distance: 20,
          enable: false,
          opacity: 0.1,
          width: 0.5,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 1.5 },
        },
      },
      detectRetina: true,
      fullScreen: {
        enable: false,
      },
      style: {
        position: "absolute",
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles id="tsparticles" options={options} className="w-full h-full" />
    );
  }

  return <></>;
};
