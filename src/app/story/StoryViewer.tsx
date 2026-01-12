"use client";

import Link from "next/link";
import { useEffect, useState, type SVGProps } from "react";

type Story = {
  name: string;
  avatar: string;
  location: string;
  time: string;
  slides: Array<{ media: string; alt: string }>;
};

const STORY_DURATION_MS = 10_000;

const stories: Story[] = [
  {
    name: "@ArtByAnya",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS066nwzw0WWXNDkJIOuh-fxJEuj3H_A-VC8YZq99uN1w62kQLZdr3W72_fR3Fv9lc4824PK7JHemhI7w6ShiOjMHwnsFwqR2YNNa7SFb-b4JvMcHgIEyGUd9hCALN7mjuv3YA7DWYjh9oOHKcBvsU9jUpkuSODnsixLaO6wa7tj_TtMpphzYNdsO2ZMKkqAqQCQV7jXnaH9hFQWnPWQtCuaHQHUqfP3s9q4Q9ZW5neZEh5RQt3uGD6ao1SUqBO2N8eD9PuQZXcVVK",
    location: "Paris, France",
    time: "2h ago",
    slides: [
      {
        media:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBjdINxDR68gSdTN5vrUQfM8I2GzTdFtvd8Yg2EePRZVNhuH9LSQrELMRb9_6OsyWn8JEgg7hKi0Dd0f_1NNIiPU_71qRB1aUZDrIxqX_6fD1cfsbauG5J6cOsvNpY9MKacmXuk_vXwOjvSzW0WrS6N4WNMVuJzzl1s9QLNAmdCk8u5VurcvPY5bQ0m82vR_jrnUFg2DG_N7waGJ6M8o2EdO83xy2YqdxL_8aXn-rrAJpshSw8xMAVtHps8m8z8aGBDrK23W2MogdrL",
        alt: "Portrait of a female model with neon lighting",
      },
      {
        media:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        alt: "Moody portrait in purple lighting",
      },
    ],
  },
  {
    name: "@JessicaVlogs",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3CTcIBKGjaE172VMRuwEkd_xooiMcMTgjV3TqdaMCeW4hmJpO5DJQ3rWBPq6fohEX7tb0obLxvJP3czdN37tT7D-u72lxa1i8CUyaf_oxUTGGJuqqZFyGT_nKXL4BFbTRS-_5MY8r2NrcyPmmNmUd472I6-outsmkGrb8jDe5YZAGUBevLBWESNGv_Y7-0q64yCS030slq-LSEVQumEplKwjpZtAeU_xF81T-pCaUaejluG015l1mdOC8QmKj9yhmqc3Y-0BS7vjg",
    location: "Singapore",
    time: "1h ago",
    slides: [
      {
        media:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zhy-diVn077BHW_UZiN05qHQWbZQNegucAhjnIC9dVtnU7IiFkyF2Y6WVI47sIWaTPpaxMV0tNIIShf2yEzTOaG7C2MGVG7BPwwqvJuYKfwdVsWTCJ3RgqVpGFHgRydJ8LZAilWdbyt5MewStOcFPBpLdeKg8LXgRUAPj9pv-R6ZTTvnPfNCwVG22u2a-AaBGl9jehjELbDXVCfxOJMIcLN0ioQ3zQ8i6XcTE3Ypd9AGyyhsFchWCcVziUbmbAJTJ-h7Kk4FRPH",
        alt: "Night skyline with city lights in Singapore",
      },
      {
        media: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Ocean waves at dusk",
      },
    ],
  },
  {
    name: "@StreetStyle",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    location: "New York City",
    time: "45m ago",
    slides: [
      {
        media: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80",
        alt: "Street fashion look with urban backdrop",
      },
      {
        media: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1200&q=80",
        alt: "Urban skyline at golden hour",
      },
    ],
  },
  {
    name: "@IndieBeats",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    location: "Berlin",
    time: "30m ago",
    slides: [
      {
        media: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
        alt: "Close-up of a guitar in warm lighting",
      },
      {
        media: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=80",
        alt: "Musician performing on stage",
      },
    ],
  },
];

export default function StoryViewer() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const storySlides = stories[activeStoryIndex].slides;
      const hasNextSlide = activeSlideIndex + 1 < storySlides.length;

      if (hasNextSlide) {
        setActiveSlideIndex((prev) => prev + 1);
      } else {
        setActiveStoryIndex((prevStory) => (prevStory + 1) % stories.length);
        setActiveSlideIndex(0);
      }
    }, STORY_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [activeSlideIndex, activeStoryIndex]);

  const currentStory = stories[activeStoryIndex];
  const currentSlide = currentStory.slides[activeSlideIndex];

  const goNext = () => {
    const totalSlides = currentStory.slides.length;
    const hasNextSlide = activeSlideIndex + 1 < totalSlides;

    if (hasNextSlide) {
      setActiveSlideIndex(activeSlideIndex + 1);
      return;
    }

    const nextStoryIndex = (activeStoryIndex + 1) % stories.length;
    setActiveStoryIndex(nextStoryIndex);
    setActiveSlideIndex(0);
  };

  const goPrev = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
      return;
    }

    const previousStoryIndex = (activeStoryIndex - 1 + stories.length) % stories.length;
    setActiveStoryIndex(previousStoryIndex);
    setActiveSlideIndex(stories[previousStoryIndex].slides.length - 1);
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black text-white"
      style={{ minHeight: "max(884px, 100dvh)" }}
    >
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <img src={currentSlide.media} alt={currentSlide.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/5 opacity-50 mix-blend-overlay" />
        </div>
      </div>

      <div className="absolute inset-0 z-10 grid grid-cols-3">
        <button onClick={goPrev} aria-label="Previous story area" className="h-full w-full" />
        <button aria-label="Pause story area" className="h-full w-full" />
        <button onClick={goNext} aria-label="Next story area" className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/60 to-transparent pb-12 pt-5">
        <div className="pointer-events-auto flex w-full flex-col gap-3 px-3">
          <div className="flex h-3 w-full items-center gap-2 px-3">
            {currentStory.slides.map((slide, index) => (
              <div
                key={slide.media}
                className="flex-1 overflow-hidden rounded-full bg-white/20 ring-1 ring-white/25 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
                aria-label={`Progress for ${currentStory.name} slide ${index + 1}`}
              >
                <div
                  className={`h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] ${
                    index === activeSlideIndex ? "story-progress-fill" : ""
                  }`}
                  style={{
                    width: index < activeSlideIndex ? "100%" : index === activeSlideIndex ? "100%" : "0%",
                    animationDuration: index === activeSlideIndex ? `${STORY_DURATION_MS}ms` : undefined,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1 flex items-center justify-between px-2">
            <div className="flex cursor-pointer items-center gap-3">
              <div className="relative">
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary ring-offset-2 ring-offset-black/20"
                  style={{ backgroundImage: `url('${currentStory.avatar}')` }}
                />
              </div>
              <div className="flex flex-col drop-shadow-md">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold tracking-wide text-white">{currentStory.name}</span>
                  <span className="text-xs font-medium text-white/60">• {currentStory.time}</span>
                </div>
                <span className="text-xs font-medium text-white/80">
                  {currentStory.location} • {activeSlideIndex + 1}/{currentStory.slides.length}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
                aria-label="More actions"
              >
                <MoreIcon className="h-6 w-6" />
              </button>
              <Link
                href="/home"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
                aria-label="Close story"
              >
                <CloseIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent pb-8 pt-16">
        <div className="pointer-events-auto flex w-full flex-col gap-5 px-4">
          <div className="flex w-full items-end justify-end gap-4 pr-1">
            <GiftPill label="₹5" />
            <GiftPill label="₹10" />
            <GiftPill label="₹50" highlight />
            <button
              type="button"
              className="ml-1 flex h-14 w-10 items-center justify-center transition-transform duration-200 active:scale-125"
              aria-label="Like story"
            >
              <HeartIcon className="h-10 w-10 text-white drop-shadow-md transition-colors hover:text-red-500" />
            </button>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Send a message..."
                className="relative w-full rounded-full border border-white/10 bg-black/30 px-5 py-3.5 text-[15px] text-white placeholder:text-white/50 backdrop-blur-xl outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="button"
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-all active:scale-95 hover:bg-white/20"
              aria-label="Send message"
            >
              <SendIcon className="h-6 w-6 text-white -translate-x-0.5 -rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GiftPill({ label, highlight }: { label: string; highlight?: boolean }) {
  if (highlight) {
    return (
      <button
        type="button"
        className="group flex flex-col items-center gap-1 transition-transform duration-200 active:scale-90"
        aria-label={`Send gift ${label}`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-[#8e52f5] ring-2 ring-white/10 shadow-[0_4px_14px_0_rgba(108,43,238,0.39)] transition-all group-hover:shadow-[0_6px_20px_rgba(108,43,238,0.23)]">
          <span className="text-base font-bold text-white">{label}</span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      className="group flex flex-col items-center gap-1 transition-transform duration-200 active:scale-90"
      aria-label={`Send gift ${label}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-black/40 backdrop-blur-md shadow-lg transition-all group-hover:border-primary group-hover:bg-primary">
        <span className="text-sm font-bold text-white">{label}</span>
      </div>
    </button>
  );
}

function MoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6 18 18M6 18 18 6" />
    </svg>
  );
}

function SendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75 19 5.5a.5.5 0 0 1 .7.55l-2.4 11.01a.5.5 0 0 1-.72.34l-4.38-2.63a.5.5 0 0 0-.5 0l-2.12 1.28c-.42.25-.95-.1-.86-.57l.8-4.04a.5.5 0 0 0-.2-.49L4.6 9.35a.5.5 0 0 1 .01-.83l14.5-8.42"
      />
    </svg>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M12 21s-6.75-4-9-9.2C1.46 8.6 3.4 5.5 6.5 5.5c2.02 0 3.35 1.14 4 2.17.65-1.03 1.98-2.17 4-2.17 3.1 0 5.04 3.1 3.5 6.3C18.75 17 12 21 12 21Z" />
    </svg>
  );
}
