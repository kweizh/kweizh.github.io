"use client"

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        // Using transparent background as the gradient is set on the parent section
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Keep this false unless you want interaction
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab", // Subtle interaction on hover
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
           grab: {
            distance: 150, // Distance for grab line
            links: {
              opacity: 0.5, // Opacity of the grab line
              color: "#bd93f9" // Color of the grab line
            }
          },
        },
      },
      particles: {
        color: {
          value: ["#bd93f9", "#ff79c6", "#ffffff"], // Particle colors matching the theme/image
        },
        links: {
          color: "#ffffff", // Line color between particles
          distance: 150, // Max distance to draw lines
          enable: true,
          opacity: 0.05, // Line opacity (Reduced from 0.2)
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Keep particles within bounds
          },
          random: true, // Random movement direction
          speed: 0.5, // Slower speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Adjust density
          },
          value: 80, // Number of particles
        },
        opacity: {
          value: 0.2, // Particle opacity (Reduced from 0.5)
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // Small particle size
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0" // Position behind content
      />
    );
  }

  return <></>;
}; 