export interface Article {
  slug: string;
  title: string;
  description: string;
  tag: string;
  score: string;
  date: string;
  toolUrl: string;
}

export const articles: Article[] = [
  {
    slug: "canva",
    title: "Canva Review 2026: Design Everything Without Design Skills",
    description: "We tested Canva's AI features for 2 weeks — Magic Design, AI image generator, background remover.",
    tag: "Design & Graphics",
    score: "9.0/10",
    date: "Apr 2, 2026",
    toolUrl: "https://www.canva.com"
  },
  {
    slug: "speechify",
    title: "Speechify Review 2026: Turn Any Text Into Audio",
    description: "We tested Speechify for 2 weeks — natural AI voices, voice cloning, audiobook creation.",
    tag: "Voice & TTS",
    score: "8.8/10",
    date: "Apr 2, 2026",
    toolUrl: "https://speechify.com/affiliates/"
  },
  {
    slug: "synthesia",
    title: "Synthesia Review 2026: Create Videos Without Cameras",
    description: "We tested Synthesia for 2 weeks — AI avatars, multilingual support, corporate training videos.",
    tag: "Video & Avatar",
    score: "8.5/10",
    date: "Apr 2, 2026",
    toolUrl: "https://synthesia.io"
  },
  {
    slug: "elevenlabs",
    title: "ElevenLabs Review 2026: Best AI Voice Generator?",
    description: "We tested ElevenLabs for 2 weeks — voice cloning, text-to-speech, multilingual support.",
    tag: "Voice & TTS",
    score: "9.1/10",
    date: "Apr 2, 2026",
    toolUrl: "https://elevenlabs.io/affiliates"
  },
  {
    slug: "writesonic",
    title: "Writesonic Review 2026: AI Content Writer Worth It?",
    description: "Honest Writesonic review — features, pricing, GPT-4 quality, and whether it beats Jasper and Copy.ai.",
    tag: "AI Writing",
    score: "8.0/10",
    date: "Apr 2, 2026",
    toolUrl: "https://writesonic.com"
  },
  {
    slug: "copy-ai",
    title: "Copy.ai Review 2026: Is It the Best AI Writing Tool?",
    description: "In-depth Copy.ai review after 2 weeks of testing. Features, pricing, pros & cons.",
    tag: "AI Writing",
    score: "8.2/10",
    date: "Apr 2, 2026",
    toolUrl: "https://copy.ai"
  }
];