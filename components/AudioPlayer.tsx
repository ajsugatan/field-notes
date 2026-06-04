"use client";

import { useRef, useState, useEffect } from "react";

type Props = {
  src: string;
  label: string;
};

export default function AudioPlayer({ src, label }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [fileError, setFileError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);

    // Attempt autoplay; most browsers will block unless muted — fail gracefully
    audio.play().then(() => setPlaying(true)).catch(() => {
      // Autoplay blocked: button stays visible for manual start
    });

    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || fileError) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setFileError(true);
      }
    }
  };

  // Only hide the player if the file itself is broken
  if (fileError) return null;

  return (
    <div className="flex items-center gap-3">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onError={() => setFileError(true)}
      />
      <button
        onClick={toggle}
        type="button"
        className="mono normal-case tracking-mono text-ink-soft hover:text-red transition-colors cursor-pointer bg-transparent border border-hairline hover:border-red px-3 py-1.5"
        aria-label={playing ? `pause ${label}` : `play ${label}`}
      >
        <span className="inline-block w-[0.6rem] mr-2 text-center text-red">
          {playing ? "◼" : "▶"}
        </span>
        {playing ? "PAUSE" : "PLAY"} — {label}
      </button>
    </div>
  );
}
