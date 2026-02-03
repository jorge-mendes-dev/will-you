import { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';
import img_01 from 'assets/01.jpg';
import img_02 from 'assets/02.jpg';
import img_03 from 'assets/03.jpg';
import img_04 from 'assets/04.jpg';
import backgroundMusic from 'assets/young-and-beautiful-official-instrumental.mp3';
import { siteConfig } from '../config';
import FloatingHearts from './FloatingHearts';
import Stars from './Stars';
import MusicControl from './MusicControl';

export default function Content() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showReasons, setShowReasons] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = () => {
    if (audioRef.current && !musicStarted) {
      audioRef.current.volume = siteConfig.audio.volume;
      audioRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
      setMusicStarted(true);
      setMusicPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        audioRef.current.play();
        setMusicPlaying(true);
      }
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 sm:py-24">
      <Stars />
      <FloatingHearts />
      
      <audio ref={audioRef} loop={siteConfig.audio.loop}>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
      
      {!musicStarted && (
        <div 
          onClick={startMusic}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer animate-fadeInUp"
        >
          <div className="text-center">
            <h3 className="cursive-font text-white text-4xl sm:text-6xl mb-4 animate-pulse-slow">{siteConfig.overlay.emoji}</h3>
            <p className="text-white text-xl sm:text-2xl font-light mb-6">{siteConfig.overlay.enterText}</p>
            <p className="text-white/70 text-sm">🎵 Com música romântica</p>
          </div>
        </div>
      )}
      
      {musicStarted && <MusicControl isPlaying={musicPlaying} onToggle={toggleMusic} />}
      
      {showConfetti && (
        <Confetti
          numberOfPieces={500}
          recycle={false}
          colors={['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']}
          drawShape={ctx => {
            ctx.beginPath();
            const size = 10;
            ctx.moveTo(0, size / 2);
            ctx.bezierCurveTo(size / 2, 0, size, size / 3, size, size / 2);
            ctx.bezierCurveTo(size, 2 * size / 3, size / 2, size, 0, size);
            ctx.bezierCurveTo(-size / 2, size, -size, 2 * size / 3, -size, size / 2);
            ctx.bezierCurveTo(-size, size / 3, -size / 2, 0, 0, size / 2);
            ctx.fill();
            ctx.closePath();
          }}
        />
      )}
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Romantic Quote */}
        <div className="text-center mb-16 animate-fadeInUp">
          <blockquote className="cursive-font text-2xl sm:text-3xl text-rose-700 italic max-w-3xl mx-auto">
            {siteConfig.quote.text}
          </blockquote>
          <p className="mt-4 text-rose-600 font-light">{siteConfig.quote.author}</p>
        </div>
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
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end photo-frame group">
              <div className="relative">
                <img
                  alt={siteConfig.images.image1.alt}
                  src={img_01}
                  className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120 animate-scaleIn animation-delay-400 hover:scale-105 transition-transform duration-300 shadow-lg ring-1 ring-rose-200"
                />
                <div className="photo-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                  <p className="text-white font-semibold">{siteConfig.images.image1.caption}</p>
                  <p className="text-white/80 text-sm">{siteConfig.images.image1.date}</p>
                </div>
              </div>
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto photo-frame group">
                <div className="relative">
                  <img
                    alt={siteConfig.images.image2.alt}
                    src={img_02}
                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover animate-scaleIn animation-delay-600 hover:scale-105 transition-transform duration-300 shadow-lg ring-1 ring-rose-200"
                  />
                  <div className="photo-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                    <p className="text-white font-semibold">{siteConfig.images.image2.caption}</p>
                    <p className="text-white/80 text-sm">{siteConfig.images.image2.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none photo-frame group">
                <div className="relative">
                  <img
                    alt={siteConfig.images.image3.alt}
                    src={img_03}
                    className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120 animate-scaleIn animation-delay-800 hover:scale-105 transition-transform duration-300 shadow-lg ring-1 ring-rose-200"
                  />
                  <div className="photo-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                    <p className="text-white font-semibold">{siteConfig.images.image3.caption}</p>
                    <p className="text-white/80 text-sm">{siteConfig.images.image3.date}</p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none photo-frame group">
                <div className="relative">
                  <img
                    alt={siteConfig.images.image4.alt}
                    src={img_04}
                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover animate-scaleIn animation-delay-1000 hover:scale-105 transition-transform duration-300 shadow-lg ring-1 ring-rose-200"
                  />
                  <div className="photo-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
                    <p className="text-white font-semibold">{siteConfig.images.image4.caption}</p>
                    <p className="text-white/80 text-sm">{siteConfig.images.image4.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reasons Why Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <button
            onClick={() => setShowReasons(!showReasons)}
            className="w-full text-center mb-8 group"
          >
            <h3 className="text-3xl font-bold text-rose-700 mb-2 group-hover:scale-105 transition-transform inline-block cursive-font">
              Por que eu te amo? ❤️
            </h3>
            <p className="text-rose-600 text-sm">{showReasons ? 'Clique para esconder' : 'Clique para descobrir'}</p>
          </button>
          
          {showReasons && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeInUp">
              {siteConfig.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg border-2 border-rose-200 hover:border-rose-400 transition-all hover:scale-105 animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-gray-700 text-center">💝 {reason}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Promises Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-rose-700 mb-8 text-center cursive-font">
            Minhas promessas para você 💍
          </h3>
          <div className="space-y-4">
            {siteConfig.promises.map((promise, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl shadow-md border-l-4 border-rose-500 animate-fadeInLeft"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-gray-700 text-lg">✨ {promise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
