import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import img_01 from '../assets/01.jpg';
import img_02 from '../assets/02.jpg';
import img_03 from '../assets/03.jpg';
import img_04 from '../assets/04.jpg';

export default function Content() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

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
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="overflow-hidden bg-white py-32">
      {showConfetti && <Confetti />}
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl cursive-font mb-2 font-semibold tracking-tight text-red-700 sm:text-5xl">Quer se casar comigo?</h2>
            <p className="mt-8 text-xl/8 text-gray-700 italic">
              Meu amor, muito obrigado por tudo o que vivemos nesses seis anos, pelas coisas boas e pelas difíceis também. Escrevo esta carta para tentar expressar o quanto te amo, o quanto você é importante para mim e o quanto não consigo imaginar minha vida sem você.
            </p>
            <div className="mt-10 flex gap-4">
              <button
                onClick={handleClick}
                className="rounded-md bg-red-700 px-4.5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Aceito
              </button>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: buttonPosition.top !== 0 || buttonPosition.left !== 0 ? 'fixed' : 'relative',
                  top: buttonPosition.top !== 0 ? `${buttonPosition.top}px` : 'auto',
                  left: buttonPosition.left !== 0 ? `${buttonPosition.left}px` : 'auto',
                  transition: 'top 0.3s ease, left 0.3s ease, background-color 0.3s ease'
                }}
                className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Não aceito
              </button>

            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt="Momento especial do nosso relacionamento"
                src={img_01}
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <img
                  alt="Lembrança feliz dos nossos momentos juntos"
                  src={img_02}
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt="Nosso amor em uma foto"
                  src={img_03}
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt="Sempre juntos, para sempre"
                  src={img_04}
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
