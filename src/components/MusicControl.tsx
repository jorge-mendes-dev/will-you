interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicControl({ isPlaying, onToggle }: MusicControlProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-8 right-8 z-40 bg-rose-600 text-white p-4 rounded-full shadow-lg hover:bg-rose-700 hover:scale-110 transition-all duration-200 animate-fadeInUp"
      aria-label={isPlaying ? 'Pausar música' : 'Reproduzir música'}
    >
      {isPlaying ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
