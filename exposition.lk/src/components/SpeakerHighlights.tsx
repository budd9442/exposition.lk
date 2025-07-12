import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import speaker1 from '../assets/speakers/1.jpeg';
import speaker2 from '../assets/speakers/2.jpg';
import speaker3 from '../assets/speakers/3.jpg';
import speaker4 from '../assets/speakers/4.jpg';

const speakers = [
  {
    name: 'Andy Lark',
    title: 'Global Brand & Marketing Expert',
    photo: speaker1,
    leftLabel: 'Exposition',
    rightLabel: 'Issue 20',
    description:
      'Globally awarded leader and entrepreneur, Amazon bestselling author, speaker, futurist and consultant on brand, marketing, digital and customer experience.',
    bio:
      'Andy has worked with some of the world\'s most innovative companies, helping them transform their marketing and digital strategies. He is passionate about the intersection of technology and creativity, and is a frequent keynote speaker at international conferences.',
    quote:
      "",
  },
  {
    name: 'Dr. Maya Patel',
    title: 'AI Researcher & Keynote Speaker',
    photo: speaker2,
    leftLabel: 'Exposition',
    rightLabel: 'Issue 19',
    description:
      'Dr. Patel is a leading expert in artificial intelligence, with over 15 years of experience bridging academia and industry. Her work focuses on ethical AI and real-world applications.',
    bio:
      'She has published over 50 papers in top journals and is a mentor to young women in STEM. Her recent projects include AI for healthcare and sustainable development.',
    quote: '',
  },
  {
    name: 'Prof. John Smith',
    title: 'Dean of Engineering, Tech University',
    photo: speaker3,
    leftLabel: 'Exposition',
    rightLabel: 'Issue 18',
    description:
      'Prof. Smith has pioneered research in sustainable engineering and is passionate about mentoring the next generation of innovators.',
    bio:
      'He leads several international collaborations and is an advocate for green technology. His teaching style is known for blending theory with real-world impact.',
    quote: '',
  },
  {
    name: 'Ms. Aisha Rahman',
    title: 'Entrepreneur & Industry Leader',
    photo: speaker4,
    leftLabel: 'Exposition',
    rightLabel: 'Issue 17',
    description:
      'Aisha is the founder of several successful startups and a champion for diversity in tech. She brings a wealth of industry insight to our event.',
    bio:
      'Her initiatives have empowered hundreds of women to pursue careers in technology. She regularly consults for Fortune 500 companies on innovation and leadership.',
    quote: '',
  },
];

const SpeakerHighlights = () => {
  const [current, setCurrent] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);

  const nextSpeaker = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % speakers.length);
      setIsFadingOut(false);
      setIsFadingIn(true);
      setTimeout(() => {
        setIsFadingIn(false);
      }, 300);
    }, 300);
  };

  const prevSpeaker = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + speakers.length) % speakers.length);
      setIsFadingOut(false);
      setIsFadingIn(true);
      setTimeout(() => {
        setIsFadingIn(false);
      }, 300);
    }, 300);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFadingOut && !isFadingIn) {
        nextSpeaker();
      }
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [isFadingOut, isFadingIn]);

  const speaker = speakers[current];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Keynote Highlights
            </span>
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[80vw] max-w-none h-[40vw] max-h-[900px] min-h-[500px] flex flex-row items-stretch rounded-3xl shadow-2xl overflow-hidden">
            {/* Left: Text Content */}
            <div className={`flex flex-col justify-between bg-black rounded-l-3xl p-16 md:p-20 w-1/2 h-full transition-opacity duration-300 ease-in-out ${
              isFadingOut ? 'opacity-0' : isFadingIn ? 'opacity-70' : 'opacity-100'
            }`}>
              <div>
                <div className="uppercase tracking-widest text-2xl text-amber-400 font-semibold flex items-center gap-2 mb-6">
                  <span>{speaker.leftLabel}</span>
                  <span className="inline-block w-16 h-1 bg-amber-400 mx-2 align-middle" />
                  <span>{speaker.rightLabel}</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                  {speaker.name}
                </h2>
                {speaker.title && (
                  <div className="text-2xl text-amber-300 font-medium mb-8">{speaker.title}</div>
                )}
                <p className="text-2xl text-gray-200 mb-8">
                  {speaker.description}
                </p>
                {speaker.bio && (
                  <p className="text-xl text-gray-400 mb-10">{speaker.bio}</p>
                )}
                {speaker.quote && (
                  <div className="mb-10">
                    <p className="italic text-amber-300 text-2xl border-l-4 border-amber-400 pl-8">
                      {speaker.quote}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex space-x-8 mt-8">
                <button
                  onClick={prevSpeaker}
                  className="p-4 bg-black/60 hover:bg-black/80 rounded-full text-white transition-all duration-300"
                  aria-label="Previous Speaker"
                  disabled={isFadingOut || isFadingIn}
                >
                  <ChevronLeft className="h-10 w-10" />
                </button>
                <button
                  onClick={nextSpeaker}
                  className="p-4 bg-black/60 hover:bg-black/80 rounded-full text-white transition-all duration-300"
                  aria-label="Next Speaker"
                  disabled={isFadingOut || isFadingIn}
                >
                  <ChevronRight className="h-10 w-10" />
                </button>
                <span className="ml-8 text-2xl text-gray-400 self-center">
                  {current + 1} / {speakers.length}
                </span>
              </div>
            </div>
            {/* Right: Speaker Photo */}
            <div className="flex items-stretch justify-center bg-black rounded-r-3xl w-1/2 h-full">
              <img
                src={speaker.photo}
                alt={speaker.name}
                className={`w-full h-full object-cover object-center grayscale contrast-125 brightness-110 rounded-r-3xl transition-opacity duration-300 ease-in-out ${
                  isFadingOut ? 'opacity-0' : isFadingIn ? 'opacity-70' : 'opacity-100'
                }`}
                style={{ minWidth: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerHighlights; 