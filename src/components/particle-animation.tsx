import type { ISourceOptions } from "@tsparticles/engine";
import type {
  IParticlesProps,
  IParticlesProviderProps,
} from "@tsparticles/react";
import { useEffect, useMemo, useState, type ComponentType } from "react";

interface ParticlesModules {
  Particles: ComponentType<IParticlesProps>;
  ParticlesProvider: ComponentType<IParticlesProviderProps>;
  loadSlim: IParticlesProviderProps["init"];
}

export const ParticleAnimation = () => {
  const [modules, setModules] = useState<ParticlesModules | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    // Dynamic imports keep tsparticles out of the hero bundle until the browser is idle.
    const initParticles = async () => {
      const [{ Particles, ParticlesProvider }, { loadSlim }] =
        await Promise.all([
          import("@tsparticles/react"),
          import("@tsparticles/slim"),
        ]);
      setModules({ Particles, ParticlesProvider, loadSlim });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(initParticles, { timeout: 1000 });
    } else {
      timeoutId = setTimeout(initParticles, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const options = useMemo<ISourceOptions>(
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
          value: ["#6ee7b7", "#34d399"], // Sky-500 and Sky-600
        },
        links: {
          color: "#a7f3d0", // Sky-400
          distance: 20,
          enable: false,
          opacity: 0.1,
          width: 0.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
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

  if (modules) {
    const { Particles, ParticlesProvider, loadSlim } = modules;
    return (
      <ParticlesProvider init={loadSlim}>
        <Particles
          id="tsparticles"
          options={options}
          className="w-full h-full"
        />
      </ParticlesProvider>
    );
  }

  return <></>;
};
