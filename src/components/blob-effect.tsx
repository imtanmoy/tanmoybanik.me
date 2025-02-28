import { useEffect, useRef } from "react";

export const BlobEffect = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;

    const updateBlobPosition = () => {
      if (blobRef.current && (lastX !== 0 || lastY !== 0)) {
        blobRef.current.animate(
          { left: `${lastX}px`, top: `${lastY}px` },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      lastX = clientX;
      lastY = clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          updateBlobPosition();
          animationFrameId = 0;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background blur - Static position */}
      <div
        className="absolute h-full w-full z-10 backdrop-blur-[12vmax]"
      />

      {/* Animated blob - Clean up styles */}
      <div
        ref={blobRef}
        className="bg-white absolute left-1/2 top-1/2 rounded-full h-[34vmax] blob-animation"
        style={{
          aspectRatio: "1",
          translate: "-50%, -50%",
          background: "linear-gradient(to right, #e81cff, #ff0f7b)",
          opacity: 0.1,
          willChange: "transform",
        }}
      />
    </div>
  );
};
