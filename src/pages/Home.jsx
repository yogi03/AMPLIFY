import CurrentServiceCard from '../components/CurrentServiceCard';
import FreelancerCard from '../components/FreelancerCard';

import thumbnailImage from '../assets/thumbnail.png';
import researchImage from '../assets/research.webp';
// import editingImage from '../assets/editing.png';

import avatar1 from '../assets/av1.jpeg';
import avatar2 from '../assets/av2.jpeg';
import avatar3 from '../assets/av3.jpeg';

export default function Home() {
  const curr_services = [
    {
      title: 'Thumbnail',
      // description: 'We will design eye-catchy thumbnail for your video',
      deliveryDate: '2025-05-20',
      image: thumbnailImage,
    },
    {
      title: 'Research',
      // description: 'We’ll find latest trends, video ideas for you',
      deliveryDate: '2025-05-25',
      image: researchImage,
    },
    // {
    //   title: 'Video Editing',
    //   description: 'We’ll find latest trends, video ideas for you',
    //   deliveryDate: '2025-06-01',
    //   image: editingImage,
    // },
  ];

  const freelancers = [
    { avatar: avatar1, title: 'Graphic Designer', description: 'Expert in creating eye-catchy thumbnails' },
    { avatar: avatar2, title: 'Graphic Designer', description: 'Creating stunning visuals' },
    { avatar: avatar3, title: 'Content Writer', description: 'Crafting compelling stories' },
  ];

  return (
    <div className="min-h-screen py-24 px-4 space-y-4 bg-[#212121]">
      <h1 className="pb-8 text-3xl font-bold text-white tracking-[0.2em] text-center">CURRENT SERVICES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 gap-x-0 justify-center">
        {curr_services.map((s, i) => (
          <CurrentServiceCard
            key={i}
            title={s.title}
            // description={s.description}
            deliveryDate={s.deliveryDate}
            image={s.image}
          />
        ))}
      </div>

      <h1 className="pt-12 pb-8 text-3xl font-bold text-white tracking-[0.2em] text-center">FREELANCER</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center pb-16">
        {freelancers.map((freelancer, index) => (
          <FreelancerCard
            key={index}
            avatar={freelancer.avatar}
            title={freelancer.title}
            description={freelancer.description}
          />
        ))}
      </div>
    </div>
  );
}
