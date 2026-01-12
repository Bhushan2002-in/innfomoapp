"use client";

import Link from "next/link";
import type { SVGProps } from "react";

type Tile = {
  id: string;
  image: string;
  alt: string;
  aspect: string;
  badge?: string;
  hot?: boolean;
  live?: boolean;
  carousel?: boolean;
};

const tiles: Tile[] = [
  {
    id: "video-fashion",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_UQzgYH45536ICQ3KmEy2R-j_Cl21PRXT3wy1SctcU8dwHyVizIK-YzrLiTmTMIiJwH9Mq17uYTIz25PAvzbIpwzQoobqNt3MBCfWhWig-Owqg-1QanfZEdrFiVXQ0-JMiGLoomSv1ElrFeLA2pnzwd0jt3QWlMtCagUZ1o5de_4bkaVx_cQ0KjJnJI1OA9qk9zKL1MHRBoNJLXcUz9jZ5CYehqXviVtEpWen5JtboSgMZpi6D7MnRTOcHTutPXpl-FSnSFtXp7Hy",
    alt: "Fashion model portrait with neon lighting",
    aspect: "aspect-[9/14]",
  },
  {
    id: "carousel-dog",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_FP8Kfra0i9GLdHBzB25NclY_ntSKEQLxOH6Dd-Eq2KaMeffjoaxNr_7Uu38E4cCSV0gPcXnIzPYTd6-A-JbR2oVzK4adJdtgG8BQpHY31e5KQCeL2QEF1sZdh11fGXCRm3y0OEvDvIyUNBKP9Ww-dwA20GbA4ZHGuX3unWALciEPnOIGZ7GAfc-zERrFUiWtZh_7TWw7WdzDSn2s70Q__86fX544y2gn4P7r8uqKc7rpf4sOEphwDZ32eAmGGQ3eX-wbEDVxdBbD",
    alt: "Cute dog running in a park",
    aspect: "aspect-square",
    carousel: true,
  },
  {
    id: "exclusive-urban",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcqcGZg_FDc8MFobKY3gvhWsk817SnOb7vK7o4ME8_Y6eeTQXWrvjq8-cpxL3iWPd8LmWhzJ6Z-ZGOU8gvt7fW0taptWrM-wHmz8HpmltZzgiLcbOKgrxjBBJ2vYYOPsM5MP7nq25tu6E9_88IUdHq5UBiyX555NZGnzp2znmtXDgdcUaeVUbXVxcpriDmPMuWOgCDFpoYgzHMCSw0FHAiBK7Q-YROaAfb01WQmWnJYiPvdHrGbnAkBI9gARdSQfOKRYYD292VNOrr",
    alt: "Woman posing in urban setting",
    aspect: "aspect-[9/16]",
    badge: "Subscriber",
  },
  {
    id: "mountain",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3_jkAT32b2S0DGnTfD-76duThoTgCwwMmcpmZSe5KvP2uJw2uwR4G1qv7I9YnggDKzpDSRt7r9Orm332MedlPTYLzF3XOMA-9jf7UU4JgsAkuzKViUK2vw_2shjVWtO6hwDEzOUxY3FKDZsMTOxEqEAnkQ8saSt446MrxKAI8f2pfsKQf31xyjTpgQ2RHsxr2xiRqlT6JmU6UMvp5g2bdyeQs6LDeXS7EQvgHAVRg6vDhrGELZteUYOFxSRuttRXeFRiCuCVVZnyU",
    alt: "Mountain landscape adventure shot",
    aspect: "aspect-[4/3]",
  },
  {
    id: "retro-gaming",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB01l9aAopL6xLFIwE0oPeP9yzc3URKnBxJStQ8Qnr4qNjZB11RKpHLmXV_jwh_BA50iHS-76rNY-Ru9Oni06wnBaswhuR2xuF2KwVhDKU_tuw2LwxcpvpY9kGwnz6rw25HpeNCLkvA5ynl518ZL7H-4qavFjbrFM3w5bicKQe08lwht5CVHTKFOcmC0_DVdLXHMBze72vJ-mXPK05v3suq3C7Bvs5bqI8PtfqkXJrSfLdUvjjEKhW-0-6cJB2AolGLbKPAfCXNHYz6",
    alt: "Retro gaming setup with neon lights",
    aspect: "aspect-square",
    hot: true,
  },
  {
    id: "live-concert",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgQXEbWpHPagHLO0nO6QchOvwIRMMRxy2qI8T7rgbQWihzOBqv49J2Ru7Ql6WiDbZnzSodVZYI4DewCIF03bcNjdsM-Ciy8CQniXu1ZfaOuvj2MWwHkFYpx505V6gjwRTC6lWlUzDYUrK3UMZtJbS4N1XWs5-E77GqWsvJBUAcxtSqkZpyjFCIHapeAaw9_7wm2IF3Kn_Zpeg7QrAnGWGcBf7YJVjTUVTqnomY7nCElmTmBQdzEmuNTi7cJHZCJlkZPUPhSkX5MpUM",
    alt: "Concert crowd with stage lights",
    aspect: "aspect-[3/4]",
    live: true,
  },
  {
    id: "abstract-art",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZ30ETV66w8ObffZifi_kIN44k7pN1TVpnecA138MWUvipEC9v8xitoSKKZq1C5bLI30z7w7P5o3VHn1--7QhXULGkCdnllMHGBvh3JZHB1VCHDkD87HUuuBRWhCInH2Cyndd3owKlsoRUycMRuuQ_cXAgo_I-JdlzJTro8KeXA9xFTq0ed8rn8rn8HmxtKJSdRm6ewSJnHdRjfk95iFnZfLO5HB3wYn9a_UkaPtrQ6JGrM2ihXaeMs01w5nOGmLZKbigOLDrtTPG",
    alt: "Abstract colorful oil painting",
    aspect: "aspect-square",
  },
  {
    id: "paris-night",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-g1OOK7h6BavVO2eo53X6TmorKooxJxsetPPWzyWae9oOWYpJ81lKBNhuxu35YFj4ukKZOT15XT0E7fQB9Kt0h3GdgovQRivBUZN7zxy4xGgX5kM-mh3zHawOk2mYK0tLladKMalnJsayXZdD2uhz3zAVNI4aJK3WXclyWnJBM05gq7e7VOJG7mNwlxYSF-JbvKvSV9rGPHm7Nf1rMlffdcY-diB4xL7vdc9F56BZOpLvM71zw2SzvBlv3F3ULBfllKn5vltuDqMj",
    alt: "Paris city street view at night",
    aspect: "aspect-[9/16]",
    carousel: true,
  },
  {
    id: "food-dish",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLRyku13DA-iGkMuUVVFl9lZbZMMECvHhVYiwUEtdTmSNdML0dH_OVsm1miKjVgoIceAtrQBHR7H2l7LoULYKYMShfmLsJC2-8u2aQQcoxBBuExbissqMWuqCssbQRqfah3PRJCYg1EchUPm9elH0C2GHPvwn0G4bRa07IM2wo1HIXowGU-BYMXats8y6AJbvZv95-hQVMRdA6ywZDFH-lsJRJPHPli0GqchyatRCkCi4SDolQ5wnV4z4nIsJe6CtKyuxelElFh8tp",
    alt: "Gourmet dish plating top view",
    aspect: "aspect-[4/3]",
  },
];

const chips = [
  { label: "For You", active: true },
  { label: "Trending", icon: <TrendingIcon />, active: false },
  { label: "Creators", active: false },
  { label: "Exclusive", icon: <DiamondIcon />, active: false, badge: true },
  { label: "Live Now", icon: <LiveIcon />, active: false },
  { label: "Gaming", active: false },
];

export default function SearchPage() {
  return (
    <main className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-white pb-24">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-background-light/95 pb-2 pt-safe-top backdrop-blur-md transition-colors dark:border-white/5 dark:bg-background-dark/95">
        <div className="px-4 py-3">
          <label className="group flex w-full flex-col">
            <div className="flex h-12 w-full items-center rounded-full bg-white px-4 shadow-sm ring-1 ring-gray-200 transition-all focus-within:ring-2 focus-within:ring-primary dark:bg-surface-dark dark:ring-white/5">
              <SearchIcon className="h-5 w-5 text-gray-400 dark:text-text-muted" />
              <input
                className="h-full flex-1 border-none bg-transparent px-3 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:text-white dark:placeholder:text-text-muted"
                placeholder="Search InnFomo"
                type="text"
              />
              <MicIcon className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-primary dark:text-text-muted" />
            </div>
          </label>
        </div>
        <div className="hide-scrollbar flex gap-2 overflow-x-auto px-4 pb-2">
          {chips.map(({ label, icon, active, badge }) => (
            <button
              key={label}
              className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 transition-transform active:scale-95 ${
                active
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : badge
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-300"
                    : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-surface-dark dark:text-white dark:hover:bg-white/10 border border-gray-200 dark:border-white/5"
              }`}
            >
              {icon && <span className="mr-1 flex h-4 w-4 items-center justify-center">{icon}</span>}
              <p className="text-sm font-medium whitespace-nowrap">{label}</p>
            </button>
          ))}
        </div>
      </header>

      <main className="px-2 py-3">
        <div className="columns-2 gap-2 space-y-2">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
        <div className="mt-4 flex justify-center pb-8">
          <ProgressIcon className="h-6 w-6 animate-spin text-primary" />
        </div>
      </main>

      <nav className="fixed bottom-0 z-40 flex w-full items-center justify-between border-t border-slate-200 bg-background-light pb-6 pt-3 px-6 dark:border-white/5 dark:bg-background-dark lg:hidden">
        <Link
          href="/home"
          className="flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200"
          aria-label="Home"
        >
          <HomeIcon className="h-7 w-7" />
        </Link>
        <Link
          href="/search"
          className="flex flex-col items-center gap-1 text-primary transition-colors"
          aria-label="Search"
        >
          <ExploreIcon className="h-7 w-7" />
        </Link>
        <div className="-mt-6 flex flex-col items-center justify-center">
          <Link
            href="/create"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-transform hover:scale-105"
            aria-label="Create"
          >
            <AddIcon className="h-8 w-8" />
          </Link>
        </div>
        <Link
          href="/messages"
          className="flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200"
          aria-label="Messages"
        >
          <MessageIcon className="h-7 w-7" />
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200"
          aria-label="Profile"
        >
          <PersonIcon className="h-7 w-7" />
        </Link>
      </nav>
    </main>
  );
}

function TileCard({ tile }: { tile: Tile }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-surface-dark break-inside-avoid">
      <div
        className={`w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 ${tile.aspect}`}
        style={{ backgroundImage: `url("${tile.image}")` }}
        aria-label={tile.alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
      {tile.carousel && (
        <span className="material-symbols-outlined absolute right-2 top-2 text-white drop-shadow-md">
          filter_none
        </span>
      )}
      {tile.badge && (
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full border border-primary/50 bg-black/60 px-2 py-1 backdrop-blur-md">
          <DiamondIcon className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">{tile.badge}</span>
        </div>
      )}
      {tile.hot && (
        <div className="absolute right-2 top-2 rounded-full bg-red-500/90 px-2 py-0.5 text-[10px] font-bold text-white">
          HOT
        </div>
      )}
      {tile.live && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-red-600 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
          LIVE NOW
        </div>
      )}
      <div className="absolute bottom-2 left-2 flex items-center gap-1">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          {tile.badge ? (
            <DiamondIcon className="h-4 w-4 text-white" />
          ) : (
            <PlayIcon className="h-4 w-4 text-white" />
          )}
        </div>
        <span className="text-xs font-medium text-white">254K</span>
      </div>
    </div>
  );
}

// Icons
function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="11" cy="11" r="6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m16 16 3 3" />
    </svg>
  );
}

function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v3M8 13.5a4 4 0 0 0 8 0" />
    </svg>
  );
}

function TrendingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 15.5 9.5 10 13 13.5 20 7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 7.5h6v6" />
    </svg>
  );
}

function DiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-6 12-6-12Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 7 6 12 6-12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7 12 4l3 3" />
    </svg>
  );
}

function LiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function ProgressIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6 7.7 7.7M16.3 16.3 18.4 18.4M5.6 18.4 7.7 16.3M16.3 7.7 18.4 5.6" />
    </svg>
  );
}

function AddIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 11 7-6 7 6v7a1 1 0 0 1-1 1h-4v-4H10v4H6a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function ExploreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 14 1-4 4-1-1 4-4 1Z" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 7.5c0-.97.78-1.75 1.75-1.75h10.5c.97 0 1.75.78 1.75 1.75v7c0 .97-.78 1.75-1.75 1.75H9.8a2 2 0 0 0-1.28.47L6 18.75V7.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6M9 13h3" />
    </svg>
  );
}

function PersonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.5a6 6 0 1 1 12 0" />
    </svg>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
