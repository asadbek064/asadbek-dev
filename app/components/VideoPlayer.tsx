"use client"
import dynamic from "next/dynamic";
const ReactAllPlayer = dynamic(() => import('react-all-player'), {
  ssr: false,
});

export default function VideoPlayer({ src, type = 'youtube' }: { src: string; type?: string }) {
  return (
    <ReactAllPlayer
      sources={[{ file: src, type }]}
    />
  );
}
