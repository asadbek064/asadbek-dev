"use client";

export default function CloudflareBadge() {
  return (
    <img
      key={Date.now()}
      src={`https://anitrek-traffic.asadbekasadbek.workers.dev?v=${Date.now()}`}
      alt="Cloudflare Stats"
      width={290}
      height={60}
    />
  );
}