import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TrackMeta from "./TrackMeta";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

function PlayIcon() {
  return (
    <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor">
      <path d="M0 0.5L12.5 7.5L0 14.5V0.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="12" height="15" viewBox="0 0 12 15" fill="currentColor">
      <rect width="3.5" height="15" />
      <rect x="8.5" width="3.5" height="15" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 1.5H10.5V8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 1.5L1.5 10.5" strokeLinecap="round" />
    </svg>
  );
}

export default function SongPlayer({ track, accentClass = "", panelClass = "" }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [audioError, setAudioError] = useState(false);
  const panel = `rounded-2xl border border-current/10 p-5 ${panelClass} ${accentClass}`;

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setAudioError(false);
  }, [track.id]);

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

  const handleSeek = (e) => {
    const value = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleVolume = (e) => {
    const value = Number(e.target.value);
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value;
  };

  // Only trust `audio` once we know the browser actually found the file.
  // A configured-but-missing file falls straight into the "not set up" state
  // below instead of showing controls that quietly do nothing.
  const hasWorkingAudio = Boolean(track.audio) && !audioError;

  // Nothing playable — say so plainly instead of faking a player.
  if (!hasWorkingAudio && !track.embed) {
    return (
      <div className={panel}>
        <TrackMeta index={track.index} title={track.title} artist={track.artist} />
        <p className="mt-3 text-xs opacity-45 font-sans">
          {audioError
            ? "couldn't load this track — check that the file exists at the path set in src/data/album.js."
            : "playback isn't configured for this track yet — see the README to add a file or a Spotify link."}
        </p>
        {/* Hidden probe: lets a configured-but-missing file fall back above. */}
        {track.audio && (
          <audio src={track.audio} preload="metadata" className="hidden" onError={() => setAudioError(true)} />
        )}
      </div>
    );
  }

  // Legally-licensed source you don't control the raw file for: link or embed out to it.
  if (!hasWorkingAudio && track.embed) {
    return (
      <div className={panel}>
        <TrackMeta index={track.index} title={track.title} artist={track.artist} />
        {track.embed.type === "iframe" ? (
          <iframe
            className="mt-4 w-full rounded-lg"
            src={track.embed.url}
            height="80"
            title={`${track.title} on Spotify`}
            loading="lazy"
            allow="encrypted-media"
          />
        ) : (
          <a
            href={track.embed.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-sans tracking-wide border-b border-current/30 pb-0.5 hover:border-current/70 transition-colors"
          >
            listen on Spotify <ExternalIcon />
          </a>
        )}
      </div>
    );
  }

  // Full custom player for a track you have the rights to serve directly.
  return (
    <div className={panel}>
      <audio
        ref={audioRef}
        src={track.audio}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setAudioError(true)}
      />
      <div className="flex items-center gap-4">
        <motion.button
          type="button"
          onClick={togglePlay}
          whileTap={{ scale: 0.88 }}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/25 hover:border-current/60 transition-colors"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </motion.button>
        <TrackMeta index={track.index} title={track.title} artist={track.artist} />
      </div>

      <div className="mt-4 flex items-center gap-3 font-sans text-[0.7rem] tabular-nums opacity-70">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          className="album-range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Seek"
        />
        <span>{formatTime(duration)}</span>
      </div>

      <div className="mt-3 hidden sm:flex items-center gap-2 w-28 opacity-60">
        <input
          type="range"
          className="album-range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolume}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
