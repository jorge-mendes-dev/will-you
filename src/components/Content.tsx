import { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';
import img_01 from 'assets/01.jpg';
import img_02 from 'assets/02.jpg';
import img_03 from 'assets/03.jpg';
import img_04 from 'assets/04.jpg';
import backgroundMusic from 'assets/young-and-beautiful-official-instrumental.mp3';
import { siteConfig } from '../config';

export default function Content() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = () => {
    if (audioRef.current && !musicStarted) {
      audioRef.current.volume = siteConfig.audio.volume;
      audioRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
      setMusicStarted(true);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowConfetti(true);
  };

  const handleMouseEnter = () => {
    const randomTop = Math.random() * (window.innerHeight - 100);
    const randomLeft = Math.random() * (window.innerWidth - 200);
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  const handleMouseLeave = () => {
    setButtonPosition({ top: 0, left: 0 });
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, siteConfig.confetti.duration);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="overflow-hidden bg-linear-to-br from-rose-50 via-white to-pink-50 py-32">
      <audio ref={audioRef} loop={siteConfig.audio.loop}>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
      
      {!musicStarted && (
        <div 
          onClick={startMusic}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer animate-fadeInUp"
        >
          <div className="text-center">
            <h3 className="cursive-font text-white text-4xl sm:text-6xl mb-4">{siteConfig.overlay.emoji}</h3>
            <p className="text-white text-xl sm:text-2xl font-light mb-6">{siteConfig.overlay.enterText}</p>
          </div>
        </div>
      )}
      
      {showConfetti && <Confetti />}
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-9xl italian-font mb-2 font-semibold tracking-tight text-red-700 sm:text-5xl animate-fadeInUp animate-pulse-slow">{siteConfig.title}</h2>
            <p className="mt-8 cursive-font text-xl/8 text-gray-700 italic animate-fadeInUp animation-delay-200">
              {siteConfig.message}
            </p>
            <div className="mt-10 flex gap-4 animate-fadeInUp animation-delay-400">
              <button
                onClick={handleClick}
                className="rounded-md bg-red-700 px-4.5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-red-600 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-transform duration-200 animate-float"
              >
                {siteConfig.buttons.accept}
              </button>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: buttonPosition.top !== 0 || buttonPosition.left !== 0 ? 'fixed' : 'relative',
                  top: buttonPosition.top !== 0 ? `${buttonPosition.top}px` : 'auto',
                  left: buttonPosition.left !== 0 ? `${buttonPosition.left}px` : 'auto',
                  transition: 'top 1.5s ease, left 1.5s ease, background-color 0.3s ease'
                }}
                className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                {siteConfig.buttons.reject}
              </button>

            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt={siteConfig.images.image1}
                src={img_01}
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120 animate-scaleIn animation-delay-400 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <img
                  alt={siteConfig.images.image2}
                  src={img_02}
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover animate-scaleIn animation-delay-600 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt={siteConfig.images.image3}
                  src={img_03}
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120 animate-scaleIn animation-delay-800 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt={siteConfig.images.image4}
                  src={img_04}
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover animate-scaleIn animation-delay-1000 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
