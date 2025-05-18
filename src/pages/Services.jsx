import ServiceCard from '../components/ServiceCard';

import thumbnailImage from '../assets/thumbnail.png';
import researchImage from '../assets/research.webp';
import editingImage from '../assets/editing.png';

const services = [
    {
      title: 'Thumbnail',
      description: 'We will design eye-catchy thumbnail for your video',
      image: thumbnailImage,
      deliverables: [
        "Trend-based design elements",
        "Platform-optimized dimensions",
        "A/B variant options",
        "Performance consultation",
      ],
    },
    {
      title: 'Research',
      description: 'We’ll find latest trends, video ideas for you',
      image: researchImage,
      deliverables: [
        "SEO-optimized title ideas",
        "Competitor analysis",
        "Audience behavior insights",
        "Hashtag & keyword research",
      ],
    },
    {
      title: 'Video Editing',
      description: 'We’ll find latest trends, video ideas for you',
      image: editingImage,
      deliverables: [
        "Smooth cuts & dynamic transitions",
        "Color grading & audio leveling",
        "Aspect ratio adjustments (YouTube, Shorts, Reels)",
        "Royalty-free music & sound design",
      ],
    },
  ];

export default function Services() {
  return (
    <div className="min-h-screen pt-28 pb-40 px-4 space-y-4 bg-[#212121]">
      <h2 className="pb-8 text-3xl font-bold text-white tracking-[0.2em] text-center">SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 gap-x-0 justify-center">
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            title={s.title}
            description={s.description}
            image={s.image}
            deliverables={s.deliverables}
          />
        ))}
      </div>
    </div>
  );
}
