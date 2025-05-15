"use client"
import dynamic from "next/dynamic";
const ReactAllPlayer = dynamic(() => import('react-all-player'), {
  ssr: false,
});

export default function ReactAllPlayerDemo() {
    return (
        <ReactAllPlayer
            sources={[
                {
                file: 'https://ezy.ovh/5rGlD',
                label: '1080p'
                },
                {
                file: 'https://ezy.ovh/hsPA0',
                label: '720p'
                }
            ]}
            subtitles={[
                {
                lang: 'en',
                language: 'English',
                file: 'https://ezy.ovh/1PQZY',
                },
                {
                lang: 'fr',
                language: 'French',
                file: 'https://ezy.ovh/cQLFa',
                },
            ]}
            // TODO: issue in player thumbnail="https://pub-1ee15f86c7e94066bcff56e6e7ce5c02.r2.dev/View_From_A_Blue_Moon_Trailer-HD.jpg"
/>
    )
}