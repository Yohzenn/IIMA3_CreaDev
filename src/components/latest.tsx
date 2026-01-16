import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
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
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
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

  const handleReplay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
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
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      id="latest"
      className="lg:my-20 w-11/12 md:w-2/3 mx-auto flex flex-col justify-center items-center"
    >
      <h2 className="uppercase text-5xl! gradient-heading my-20 tracking-widest flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
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
          <div className="relative w-72 h-48 md:w-80 md:h-56 shrink-0">
            <div
              className="absolute left-0 w-48 h-48 md:w-56 md:h-56 cursor-pointer z-20"
              onClick={togglePlay}
            >
              <img
                src={jump_cover}
                alt="Jump Cover"
                className="w-full h-full rounded-2xl object-cover shadow-lg"
              />
            </div>
            <img
              src={jump_disk}
              alt="Disk"
              className={`disk absolute top-0 right-0 w-48 h-48 md:w-56 md:h-56 z-10 ${
                isPlaying ? "spinning" : ""
              }`}
            />
          </div>

          <div className="flex flex-col flex-1 w-full gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-primetime text-pink-light text-4xl md:text-5xl">
                Jump
              </h3>
              <p className="font-primetime text-white/70 text-xl md:text-2xl mt-2">
                BLA<span className="inline-block scale-x-[-1]">C</span>KPI
                <span className="inline-block scale-x-[-1]">N</span>K
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8">
              {/* Play/Pause */}
              <div
                onClick={togglePlay}
                className="w-16 h-16 flex items-center justify-center cursor-pointer text-white hover:text-pink-light transition-all hover:scale-110"
              >
                {isPlaying ? (
                  <Pause size={32} fill="currentColor" />
                ) : (
                  <Play size={32} fill="currentColor" />
                )}
              </div>
              {/* Replay */}
              <div
                onClick={handleReplay}
                className="cursor-pointer text-white hover:text-pink-light transition-all hover:scale-110"
              >
                <RotateCcw size={28} />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full">
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-linear-to-r from-pink-dark to-pink-light rounded-full transition-all duration-100"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
