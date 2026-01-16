import { useState, useRef, useEffect } from "react";
import jump_cover from "../assets/img/jump_cover.png";
import jump_disk from "../assets/img/jump_disk.png";
import jump_song from "../assets/song/Jump.mp3";
import "./latest.css";

function Latest() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div id="latest" className="my-20 w-11/12 md:w-2/3 mx-auto">
      <h2 className="uppercase text-5xl! gradient-heading my-20 tracking-widest flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
        <span>
          {"LATEST".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </span>{" "}
        <span>
          {"RELEASE".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </span>
      </h2>

      {/* Music Player */}
      <div className="player-container bg-burgundy/80 backdrop-blur-md shadow-md rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
        <audio ref={audioRef} src={jump_song} />

        <div className="flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          {/* Album Cover with Disk */}
          <div className="relative w-72 h-48 md:w-80 md:h-56 shrink-0">
            <div className="absolute left-0 w-48 h-48 md:w-56 md:h-56 cursor-pointer z-20" onClick={togglePlay}>
              <img
                src={jump_cover}
                alt="Jump Cover"
                className="w-full h-full rounded-2xl object-cover shadow-lg"
              />
            </div>
            <img
              src={jump_disk}
              alt="Disk"
              className={`disk absolute top-0 right-0 w-48 h-48 md:w-56 md:h-56 z-10 ${isPlaying ? "spinning" : ""}`}
            />
          </div>

          {/* Info & Controls */}
          <div className="flex flex-col flex-1 w-full gap-6">
            {/* Song Info */}
            <div className="text-center md:text-left">
              <h3 className="font-primetime text-pink-light text-4xl md:text-5xl">Jump</h3>
              <p className="font-primetime text-white/70 text-xl md:text-2xl mt-2">
                BLA<span className="inline-block scale-x-[-1]">C</span>KPI
                <span className="inline-block scale-x-[-1]">N</span>K
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full">
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gradient-to-r from-pink-dark to-pink-light rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex justify-between mt-2 text-white/60 text-sm font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8">
              {/* Prev */}
              <button className="text-white/60 hover:text-pink-light transition-colors">
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.33917 13.7397L12.9664 7.38149C13.2293 7.22152 13.5303 7.13509 13.8381 7.13123C14.1458 7.12737 14.4489 7.20622 14.7157 7.35955C15.0053 7.52815 15.245 7.77036 15.4107 8.0616C15.5763 8.35284 15.6619 8.68272 15.6588 9.01775V13.4657L25.8274 7.3798C26.0903 7.21983 26.3914 7.13341 26.6991 7.12955C27.0068 7.12568 27.3099 7.20454 27.5768 7.35786C27.8663 7.52646 28.1061 7.76867 28.2717 8.05991C28.4373 8.35115 28.5229 8.68103 28.5198 9.01606V21.4512C28.5231 21.7863 28.4376 22.1163 28.2719 22.4077C28.1063 22.699 27.8664 22.9413 27.5768 23.1099C27.3099 23.2632 27.0068 23.3421 26.6991 23.3382C26.3914 23.3344 26.0903 23.2479 25.8274 23.088L15.6588 16.9993V21.4489C15.6625 21.7844 15.5771 22.1149 15.4114 22.4067C15.2458 22.6985 15.0057 22.9411 14.7157 23.1099C14.4489 23.2632 14.1458 23.3421 13.8381 23.3382C13.5303 23.3344 13.2293 23.2479 12.9664 23.088L2.33917 16.7298C2.08653 16.5715 1.87825 16.3516 1.73386 16.0908C1.58948 15.83 1.51373 15.5368 1.51373 15.2387C1.51373 14.9406 1.58948 14.6473 1.73386 14.3865C1.87825 14.1257 2.08653 13.9058 2.33917 13.7476V13.7397Z" fill="currentColor"/>
                </svg>
              </button>

              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-dark to-pink-light flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-pink-dark/50"
              >
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="4" width="4" height="16" rx="1" fill="white"/>
                    <rect x="14" y="4" width="4" height="16" rx="1" fill="white"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.32137 25.586C7.9759 25.5853 7.63655 25.4948 7.33669 25.3232C6.66148 24.9406 6.24173 24.1978 6.24173 23.3915V7.07398C6.24173 6.26542 6.66148 5.52494 7.33669 5.14232C7.64369 4.96589 7.99244 4.87516 8.3465 4.87961C8.70056 4.88407 9.04692 4.98354 9.34938 5.16764L23.2952 13.5155C23.5859 13.6977 23.8255 13.9508 23.9916 14.251C24.1577 14.5511 24.2448 14.8886 24.2448 15.2316C24.2448 15.5747 24.1577 15.9121 23.9916 16.2123C23.8255 16.5125 23.5859 16.7655 23.2952 16.9478L9.34713 25.2979C9.0376 25.485 8.68307 25.5846 8.32137 25.586V25.586Z" fill="white"/>
                  </svg>
                )}
              </button>

              {/* Next */}
              <button className="text-white/60 hover:text-pink-light transition-colors">
                <svg width="28" height="28" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.1426 13.7397L16.5154 7.38149C16.2525 7.22152 15.9514 7.13509 15.6437 7.13123C15.336 7.12737 15.0329 7.20622 14.766 7.35955C14.4765 7.52815 14.2368 7.77036 14.0711 8.0616C13.9055 8.35284 13.8199 8.68272 13.823 9.01775V13.4657L3.65435 7.3798C3.39144 7.21983 3.0904 7.13341 2.78268 7.12955C2.47495 7.12568 2.17183 7.20454 1.905 7.35786C1.61547 7.52646 1.37571 7.76867 1.21008 8.05991C1.04445 8.35115 0.958845 8.68103 0.961955 9.01606V21.4512C0.958745 21.7863 1.0443 22.1163 1.20994 22.4076C1.37558 22.699 1.61538 22.9413 1.905 23.1099C2.17183 23.2632 2.47495 23.3421 2.78268 23.3382C3.0904 23.3344 3.39144 23.2479 3.65435 23.088L13.823 16.9993V21.4489C13.8194 21.7844 13.9048 22.1149 14.0704 22.4066C14.2361 22.6984 14.4761 22.9411 14.766 23.1099C15.0329 23.2632 15.336 23.3421 15.6437 23.3382C15.9514 23.3344 16.2525 23.2479 16.5154 23.088L27.1426 16.7298C27.3953 16.5715 27.6035 16.3516 27.7479 16.0908C27.8923 15.83 27.968 15.5368 27.968 15.2387C27.968 14.9406 27.8923 14.6473 27.7479 14.3865C27.6035 14.1257 27.3953 13.9058 27.1426 13.7476V13.7397Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
