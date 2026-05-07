"use client";

export default function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft orb — top centre */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(96,165,250,0.22) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary orb — bottom left */}
      <div
        className="absolute bottom-0 -left-40 w-[600px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(96,165,250,0.18) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Tertiary orb — right */}
      <div
        className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(147,197,253,0.15) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Very subtle grid — much more toned down */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient overlay — fade bottom third so content reads cleanly */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{ background: "linear-gradient(to bottom, transparent, #0d1420)" }}
      />
    </div>
  );
}
