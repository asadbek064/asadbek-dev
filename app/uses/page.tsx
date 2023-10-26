import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>14&quot; ASUS Zenbook OLED Q409ZA,</li>
          <li>27&quot; Acer - S271HL</li>
          <li>Logitech G403 Mouse</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://gist.github.com/asadbek064/970263b2b42370c01d066545e12bcab4">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: FireFox Dark</li>
          <li>Terminal: Hyper / zsh</li>
        </ul>
        <h3 id="audio-video">Audio / Video</h3>
        <ul>
          <li>Microphone FIFINE K678</li>
          <li>Microdia USB Live camera</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>Bitwarden</li>
          <li>Apple Music</li>
          <li>Grammarly</li>
          <li>Obsidian</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods Pro</li>
          <li>Apple iPhone</li>
        </ul>
      </div>
    </section>
  );
}
