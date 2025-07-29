import React, { useEffect, useState } from "react";

export default function VideoBackground({ src, poster }) {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // ✅ לא יטען בצד השרת

  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black"
      style={{ pointerEvents: "none" }}
    >
      {!isLoaded && poster && (
        <img
          src={poster}
          alt="background"
          className="video-bg"
          style={{ filter: "blur(2px)", transition: "opacity 0.5s" }}
        />
      )}

      <video
        className="video-bg"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      />
    </div>
  );
}
