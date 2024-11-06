import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from 'react';
import { tsParticles } from "tsparticles-engine";

export interface ConfettiProps {
  active?: boolean;
  duration?: number;
  onComplete?: () => void;
  className?: string;
}

const defaultOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.9,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 4.5,
      random: true,
      anim: {
        enable: false,
        speed: 3,
        size_min: 0.15,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 5,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  retina_detect: true,
  background: {
    color: "transparent",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
};

export function Confetti({ active = false, duration = 3000, onComplete, className = "" }: ConfettiProps) {
  const [initialized, setInitialized] = useState(false);
  const containerId = "confetti-container";

  const initParticles = useCallback(async () => {
    await loadSlim(tsParticles);
    setInitialized(true);
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  useEffect(() => {
    if (!active || !initialized) return;

    let container: any = null;

    const startConfetti = async () => {
      container = await tsParticles.load(containerId, defaultOptions);
    };

    startConfetti();

    const timer = setTimeout(() => {
      if (container) {
        container.destroy();
      }
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(timer);
      if (container) {
        container.destroy();
      }
    };
  }, [active, duration, onComplete, initialized]);

  if (!active || !initialized) return null;

  return (
    <div
      id={containerId}
      className={`fixed inset-0 pointer-events-none ${className}`}
    />
  );
}