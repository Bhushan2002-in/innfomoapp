"use client";

import Link from "next/link";
import { useState, type SVGProps } from "react";

type Media = { url: string; alt: string; type?: "image" | "video" };
type Post = {
  name: string;
  avatar: string;
  verifiedColor: string;
  time: string;
  actionLabel: string;
  actionVariant?: "solid" | "outline";
  badge: string | null;
  likes: string;
  comments: string;
  caption: string;
  tags: string;
  medias: Media[];
};

const stories: Array<{ name: string; image: string; seen?: boolean }> = [
  {
    name: "Creator One",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATVA4UXOvUz-tjv8ju_iWDceao5LtIvqIdzaBuZ3u3P3B1XC2gqgv1qK66ZNIJQdXEjqC-VCQMoifPq9wsJf7db-Qpn8tPmgcEOjIRF4h_iP0IcA4cR471OlHqqsxwNssG4gPrfwG1oqfJKqnPp9dagW2k3eQXpzJPJuGeLthxhaB_BdFCT7j4hEXY4uh2-yprFtYqjTowDnZBZwpk_IanqAySvdcW9Q_v1UHmrDec3JquFQP4vhSw9LDmJRXHy50M2QYHnqqixOeN",
  },
  {
    name: "Brand X",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBonJSkBpz0m7AStIYxopMz-MA6hEaTxY1Z2jQN7woe38V6Cwxrigpa8_x_d6r44hsUjFIfhClbwI4hoHxcoG6wu6h6KX6ywqQtamp4IDK2VYla9Kx1WO4ohCUWpk-wBXFkha2DlH7iuzOkcWNoEV3TMKAySDuMcCwtVJ2aBx3yKpv36uJg-6C9JwVzNhC5tNrOmjaCWqaIlHYuKlaIQaVOjPWCT5FQthIOjAhkVxwTTDrvsTgLwf305mU7cvW5HEsN_119k20wjj7e",
  },
  {
    name: "Artist Y",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2GFyblp9i6XwrHAzX79591YspHPLJLURnG2LkZFJJ6CFnAij7Cc1CKttKXHK7CjMZNzsWmLzLvlIeQSEziGV5r0GwRfJZHtbGlgz3uQ1gtfHJOCq-Sn-c7u1a6r2YNy1vkrAUDFHQp0AyRSKyJMu7GDQ20dWxsGV8eGKYEg2neCJscAQNTKcTvlqPIm8lulF9UUlkrk7uAsV3MavAihnS06CIKskDkYHgArq5RrqHNZtLLuQAgoyXKzSpQQFu67insVZreRLNaAYx",
    seen: true,
  },
  {
    name: "Influencer Z",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Y6vfznxq08RDW2Ig0fOSIX2bynuAqBHrMQCo0xZhCZbvX7kXg7xCpJ_-VITTnhX8hqjAjgI-U8ySU2sHBASzxFPIDJPnUbAa78-mxKINsNyRxGZZbpf2YH6uWDqylkMI6gycXs1wdyUoVNwvgYJzwYl3uNNNkcztPBcoTELZ0eCnxEVUPLsJdPcKIIxB9R1Ql7M4RTfEJTRuRIRrJ--T7fmnBF6fl53BqVwzlHytcYxmjJFuI4ueYCQe9F1gsPD5rijHV8q8gw-9",
  },
];

const posts: Post[] = [
  {
    name: "Jessica Vlogs",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3CTcIBKGjaE172VMRuwEkd_xooiMcMTgjV3TqdaMCeW4hmJpO5DJQ3rWBPq6fohEX7tb0obLxvJP3czdN37tT7D-u72lxa1i8CUyaf_oxUTGGJuqqZFyGT_nKXL4BFbTRS-_5MY8r2NrcyPmmNmUd472I6-outsmkGrb8jDe5YZAGUBevLBWESNGv_Y7-0q64yCS030slq-LSEVQumEplKwjpZtAeU_xF81T-pCaUaejluG015l1mdOC8QmKj9yhmqc3Y-0BS7vjg",
    verifiedColor: "text-blue-400",
    time: "Singapore • 2h ago",
    actionLabel: "Subscribe",
    badge: "@travelsg",
    likes: "4.2k",
    comments: "300",
    caption: "Checking out the night lights! The scenery was absolutely stunning...",
    tags: "#travel #singapore #innfomo",
    medias: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zhy-diVn077BHW_UZiN05qHQWbZQNegucAhjnIC9dVtnU7IiFkyF2Y6WVI47sIWaTPpaxMV0tNIIShf2yEzTOaG7C2MGVG7BPwwqvJuYKfwdVsWTCJ3RgqVpGFHgRydJ8LZAilWdbyt5MewStOcFPBpLdeKg8LXgRUAPj9pv-R6ZTTvnPfNCwVG22u2a-AaBGl9jehjELbDXVCfxOJMIcLN0ioQ3zQ8i6XcTE3Ypd9AGyyhsFchWCcVziUbmbAJTJ-h7Kk4FRPH",
        alt: "Marina Bay lights at night",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        alt: "City skyline",
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Ocean waves at dusk",
        type: "video",
      },
    ],
  },
  {
    name: "TechBrand X",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQAlJSdyrwm641VpQxWnQ49hDH5FaQxovOVMHBGP-W_RhOFnXNgSju-IICgVbbGoqHh7coojKot3G-q7chdze4UhOxTnWe3mEpcChLPee2iqDkOGsUNiKuSqtvzZ9fNMH9eoppNmt0NddU39LNkN195BZhYKifztkYJr6G88qXHbAN34Bdchgb_YL2EBNb5xapSQf46Gfpgnlqh1vrSfeETaaRAokuku2p79m8lvdTQjm_SmJ_te4sHTBdBghAKVDVIW6Yd-2p_dm_",
    verifiedColor: "text-yellow-500",
    time: "Sponsored • Just now",
    actionLabel: "Shop Now",
    actionVariant: "outline",
    badge: null,
    likes: "12.5k",
    comments: "892",
    caption: "Experience the future of connectivity. The new Series 5 is here. 🚀",
    tags: "#tech #future #series5",
    medias: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWnlaWCbxadYQcJFsGBlbukTFaKdZeLhe-PxnrBJYl88J9aq5sowkvk0ImwxhLrmpS2ePccniFzdpfSWoWBU5UmFqVQSKDtmd0S-j5Hlkdlga2hUnGRHOChLSn_KJ4lVsEFGUrwzkU-3vf8Zlh4OwzotvS7r2W4J6GWL1-P_Ee_upiVXUHXu9VBZW-edaiWRN0JiZxpZjQiRRqmWgGCothIKplOYENr8XudTPuJ0Rs29oUwfYkYo7WeVAAQ2fECCQ_cmlyTgF78jsl",
        alt: "Futuristic gadget close-up",
      },
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        alt: "Neon tech product",
      },
    ],
  },
  {
    name: "Culinary Lab",
    avatar: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Paris • 1h ago",
    actionLabel: "Subscribe",
    badge: "@chefmarie",
    likes: "3.1k",
    comments: "210",
    caption: "New tasting menu drops tonight. Truffle lovers, this one’s for you.",
    tags: "#food #chef #paris",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        alt: "Gourmet dish",
      },
      {
        url: "https://images.unsplash.com/photo-1504674900247-0833f8341f5e?auto=format&fit=crop&w=1200&q=80",
        alt: "Restaurant interior",
      },
    ],
  },
  {
    name: "StreetStyle",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "NYC • 4h ago",
    actionLabel: "Subscribe",
    badge: "@nylook",
    likes: "6.7k",
    comments: "1.1k",
    caption: "Layered fits for the fall drop.",
    tags: "#fashion #streetwear",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80",
        alt: "Street fashion look",
      },
      {
        url: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1200&q=80",
        alt: "Urban skyline",
        type: "video",
      },
    ],
  },
  {
    name: "Motion Studio",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Remote • 30m ago",
    actionLabel: "Subscribe",
    badge: "@framebyframe",
    likes: "2.4k",
    comments: "180",
    caption: "Behind the scenes of our latest animation reel.",
    tags: "#motiondesign #bts",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80",
        alt: "Animation workspace",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        alt: "Creative team",
      },
    ],
  },
  {
    name: "Wellness Co",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Remote • 10m ago",
    actionLabel: "Subscribe",
    badge: "@calmwithus",
    likes: "1.9k",
    comments: "98",
    caption: "15-minute stretches you can do at your desk.",
    tags: "#wellness #stretch",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1552053560-4890cf4a5b67?auto=format&fit=crop&w=1200&q=80",
        alt: "Person stretching",
      },
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
        alt: "Yoga mat and tea",
      },
    ],
  },
  {
    name: "Indie Beats",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Berlin • 3h ago",
    actionLabel: "Subscribe",
    badge: "@soundcraft",
    likes: "5.2k",
    comments: "640",
    caption: "Dropping an exclusive acoustic set tonight. Tune in!",
    tags: "#music #indie",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
        alt: "Guitar close-up",
      },
      {
        url: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=80",
        alt: "Musician performing",
        type: "video",
      },
    ],
  },
  {
    name: "Travel Tales",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Bali • 1d ago",
    actionLabel: "Subscribe",
    badge: "@wanderwithme",
    likes: "7.9k",
    comments: "1.4k",
    caption: "Sunrise over the rice terraces—never gets old.",
    tags: "#travel #bali #sunrise",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        alt: "Rice terraces at sunrise",
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Ocean view",
      },
    ],
  },
  {
    name: "Design Daily",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Remote • 6h ago",
    actionLabel: "Subscribe",
    badge: "@uidesign",
    likes: "3.8k",
    comments: "420",
    caption: "5 micro-interactions that level up your product.",
    tags: "#design #ux",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
        alt: "Design sketches",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        alt: "Laptop on desk",
      },
    ],
  },
  {
    name: "Maker Lab",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Remote • 8h ago",
    actionLabel: "Subscribe",
    badge: "@hardwarehack",
    likes: "1.2k",
    comments: "90",
    caption: "3D printed a new rig—sharing files with members.",
    tags: "#maker #3dprinting",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1508051123996-69f8caf4891e?auto=format&fit=crop&w=1200&q=80",
        alt: "3D printer in action",
      },
      {
        url: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=80",
        alt: "Workspace tools",
      },
    ],
  },
  {
    name: "Studio Bloom",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
    verifiedColor: "text-blue-400",
    time: "Remote • 12h ago",
    actionLabel: "Subscribe",
    badge: "@petals",
    likes: "2.2k",
    comments: "160",
    caption: "Floral art workshop replay now live for members.",
    tags: "#art #floral",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
        alt: "Floral arrangement",
      },
      {
        url: "https://images.unsplash.com/photo-1523419400524-16e18d476498?auto=format&fit=crop&w=1200&q=80",
        alt: "Flower studio",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-white min-h-screen pb-20">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-background-light/90 px-5 py-3 backdrop-blur-md transition-colors duration-300 dark:border-white/5 dark:bg-background-dark/90">
        <div className="flex items-center justify-between">
          <div className="w-10" />
          <h1 className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent">
            InnFomo
          </h1>
          <div className="flex items-center gap-4 w-auto justify-end">
            <button className="relative text-slate-600 transition-colors hover:text-primary dark:text-slate-300">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0.5 block h-2.5 w-2.5 rounded-full border-2 border-background-light bg-red-500 dark:border-background-dark" />
            </button>
            <div
              className="h-9 w-9 cursor-pointer rounded-full bg-cover bg-center bg-slate-200 ring-2 ring-transparent transition-all hover:ring-primary dark:bg-slate-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqqHtv17USiomHhbgNk1Tc3f2cJuE-AUv4eJSi3vTdMtSvSvwZmPGY50SyQt_1WUrVyBmzpbGDUH_Jz_qB7EWz4kYOwkSo8udU4UE4T6PbpCoTTiBtNv5nJ0dXb750JY9PbaejzvwdaPxcF92XuMAxgAQ9lUX0mBsbyBcufCyzU_B3I_vdMDoFovJiqQEVVs98tbjlETjqMsbybADxzIkBxex5jCwuIL5tLdAcSlUWvS8XwLbQ27kiOAW2Zq9MWE8aEgswjqNmOnbF')",
              }}
              aria-label="Profile"
            />
          </div>
        </div>
      </header>

      <section className="w-full pt-4 pb-2">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4">
          <StoryAdd />
          {stories.map((story) => (
            <StoryItem key={story.name} name={story.name} image={story.image} seen={story.seen ?? false} />
          ))}
        </div>
      </section>

      <main className="mt-4 flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.name + post.time} {...post} />
        ))}
      </main>

      <nav className="fixed bottom-0 z-40 flex w-full items-center justify-between border-t border-slate-200 bg-background-light pb-6 pt-3 px-6 dark:border-white/5 dark:bg-background-dark">
        <Link
          href="/home"
          className="flex flex-col items-center gap-1 text-primary transition-colors"
          aria-label="Home"
        >
          <HomeIcon className="h-7 w-7" />
        </Link>
        <Link
          href="/search"
          className="flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200"
          aria-label="Search"
        >
          <ExploreIcon className="h-7 w-7" />
        </Link>
        <div className="flex flex-col items-center justify-center -mt-6">
          <Link
            href="/create"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-transform hover:scale-105"
            aria-label="Create"
          >
            <AddIcon className="h-8 w-8" />
          </Link>
        </div>
        <Link
          href="/notifications"
          className="flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200"
          aria-label="Notifications"
        >
          <BellIcon className="h-7 w-7" />
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

function StoryAdd() {
  return (
    <div className="flex shrink-0 snap-start flex-col items-center gap-1.5">
      <div className="relative h-[72px] w-[72px]">
        <div
          className="h-full w-full rounded-full border-2 border-slate-200 bg-cover bg-center dark:border-slate-700"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5R6RuMbgGZxyrOI3uLdeQ6DprZ0zQRx9_9AjnAFFISQGBFzFKpYAvYNLw9AuHAM_eSSnKPn4DoM68-jUFQWKC6IuXuQoUbkdz-0_wcNk6BrfHR3Cm5HrlKe6DNCyAyxqMrszShApBnLPJWSZXeCuLViBUd9JizZIZBorM1D2HMUUheMG8o8VLWTqySz5UDg7rNqmOqFTrsiktnVIjR7if1JSJ4uXHUonUklHMXTkxiKTK1kllxmyXlxnhu7h991g2u937hINxNSxX')",
          }}
        />
        <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full border-2 border-background-light bg-primary p-1 text-white shadow dark:border-background-dark">
          <AddIcon className="h-4 w-4" />
        </div>
      </div>
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Add Story</p>
    </div>
  );
}

function StoryItem({ name, image, seen }: { name: string; image: string; seen: boolean }) {
  return (
    <Link
      href="/story"
      className="group flex shrink-0 snap-start cursor-pointer flex-col items-center gap-1.5"
      aria-label={`View ${name}'s story`}
    >
      <div
        className={`h-[72px] w-[72px] rounded-full p-[2px] transition-transform group-hover:scale-105 ${
          seen ? "bg-slate-300 dark:bg-slate-700" : "bg-gradient-to-tr from-primary to-purple-400"
        }`}
      >
        <div
          className="h-full w-full rounded-full border-2 border-background-light bg-cover bg-center dark:border-background-dark"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
      <p className="text-xs font-medium text-slate-700 dark:text-slate-200">{name}</p>
    </Link>
  );
}

function PostCard({
  name,
  avatar,
  verifiedColor,
  time,
  actionLabel,
  actionVariant = "solid",
  media,
  medias,
  badge,
  likes,
  comments,
  caption,
  tags,
}: Post & { media?: string }) {
  const [active, setActive] = useState(0);
  const items = medias ?? [{ url: media ?? "", alt: name }];
  const current = items[active];
  const showControls = items.length > 1;

  const actionClasses =
    actionVariant === "outline"
      ? "border border-primary text-primary hover:bg-primary hover:text-white"
      : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20";

  return (
    <article className="group flex flex-col overflow-hidden border-y border-slate-100 bg-white shadow-sm dark:border-white/5 dark:bg-surface-dark sm:mx-4 sm:rounded-3xl sm:border">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url('${avatar || current.url}')` }}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{name}</h3>
              <VerifiedIcon className={`h-4 w-4 ${verifiedColor}`} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{time}</p>
          </div>
        </div>
        <button
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${actionClasses}`}
        >
          {actionLabel}
        </button>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-900">
        <div
          className="aspect-[4/5] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${current.url}')` }}
          aria-label={current.alt}
        />
        {current.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <PlayIcon className="h-16 w-16 text-white drop-shadow-lg" />
          </div>
        )}
        {badge && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
            <PersonIcon className="h-4 w-4 text-white" />
            <span className="text-xs font-medium text-white">{badge}</span>
          </div>
        )}
        {showControls && (
          <>
            <button
              type="button"
              onClick={() => setActive((prev) => (prev - 1 + items.length) % items.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
              aria-label="Previous media"
            >
              <ArrowBackIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setActive((prev) => (prev + 1) % items.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
              aria-label="Next media"
            >
              <ArrowForwardIcon className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to media ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === active ? "w-3 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-4">
          <button className="group flex items-center gap-1.5 text-slate-900 dark:text-white">
            <HeartIcon className="h-6 w-6 transition-colors group-hover:text-red-500" />
            <span className="text-sm font-semibold">{likes}</span>
          </button>
          <button className="group flex items-center gap-1.5 text-slate-900 dark:text-white">
            <ChatIcon className="h-6 w-6 transition-colors group-hover:text-primary" />
            <span className="text-sm font-semibold">{comments}</span>
          </button>
          <button className="text-slate-900 transition-colors hover:text-primary dark:text-white dark:hover:text-primary">
            <SendIcon className="h-6 w-6 -rotate-12" />
          </button>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all active:scale-95 hover:bg-primary/90">
          <GiftIcon className="h-5 w-5" />
          Gift
        </button>
      </div>

      <div className="px-4 pb-4 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
        <div className="mb-2">
          <span className="mr-1 font-bold">{name}</span>
          {caption} <span className="cursor-pointer text-slate-500 dark:text-slate-400">more</span>
          <div className="mt-1 block text-primary">{tags}</div>
        </div>
        <button className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300">
          View all {comments} comments
        </button>
      </div>
    </article>
  );
}

// Icons
function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 9.5A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 5.5 5.5V13l1.5 3H5l1.5-3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 16.5a2.5 2.5 0 0 0 5 0" />
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

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6.5-3.5-8.5-8.5C2.6 9 4.5 6 7.5 6c1.9 0 3.1 1 3.5 2 .4-1 1.6-2 3.5-2C17.5 6 19.4 9 20.5 12.5 18.5 17.5 12 21 12 21Z"
      />
    </svg>
  );
}

function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 17H4.5v2.5L8 17h8.5A2.5 2.5 0 0 0 19 14.5V8A2.5 2.5 0 0 0 16.5 5h-9A2.5 2.5 0 0 0 5 7.5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5h8M8 13h5" />
    </svg>
  );
}

function SendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 4 16 8-16 8 4-8-4-8Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.5 20 12M8 12l4 2.5" />
    </svg>
  );
}

function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v12M4 12h16" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.5 0-3.5-.8-3.5-2.5S10 3 12 5.5C14 3 15.5 3 15.5 5.5 15.5 7.2 13.5 8 12 8Z"
      />
    </svg>
  );
}

function VerifiedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5 7.5 6.5 5 11.25 7.5 16l4.5 2 4.5-2L19 11.25 16.5 6.5 12 4.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 11.75 1.75 1.75 3-3.5" />
    </svg>
  );
}

function ArrowBackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10.75 16-4-4 4-4" />
    </svg>
  );
}

function ArrowForwardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12h-10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m13.25 8 4 4-4 4" />
    </svg>
  );
}
