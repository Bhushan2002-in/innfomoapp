import Link from "next/link";

type Post = {
  src: string;
  alt: string;
  badge?: "collection" | "video" | "pinned" | "locked";
  likes?: string;
  location?: string;
};

const posts: Post[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhVsv3cdPQ-_NbMK4Q5_HEmIYHmrXxgB-N3wqZG5cJLa2kY1kouuWiM3CQa7t3RE2GU7GOUPiRzwyDRsQsLwSpYu1gmGTjOyOUPM4DdOp9OU3-0_Mtr49dZzIvh_aUPiPq8iuJsmtdB--6oK_mo1qMK6xloe061dztsytCKU5PuDmkjZ8O4CxMwlUbbTCbRE1zpmlPYAO6og7WH97kvoIZWZzgipJB3dTzlZvROde2PJynvERr5eI0-RVK50ruDwE-L0IVUQkdrQDw",
    alt: "Abstract purple liquid art",
    badge: "collection",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd6Oc4fH9ZherWgIm_wm2PFm28qzXYN5kIvLfUnAdeVbdnIu26AZks0iz3gqg5QSDWO4jAtFNzH-iW3OYiLZ-6qqSJaftaBxSIVGdoiT8ilJq9JPFjcCTEWINl6i9ESYhkvXgLHNptap_sZFM1aY1UNZubkzPi5h-5jPVYGVZ08KuuMQqF2jLymF_Qamz9Tr5NB8tnR60jkC4GalHnrrAHgpBH5ttKWjonoUYrrzd0cFeutldFxyRDiO77ncxzPo1XpQ2VM8Oeeht9",
    alt: "Neon lit city street at night",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq3ur3AEmqWk0lj8pnmm-gA2aA86vDwNSEJqcqfYCEuqwzmPnLn0Q5Yr21hjTZd729YZEmW6IllZYxqbGYDPlK-EK8ZlfMM9kOZ2phhgYBp_9Lz7Ty-JMtA1yXZzd8PGzXztZ2gEcOqh03w96CEQ4375Czph3UFIVeJtNZGRIr1UijIMpxpa8ld3djOFU4mIz3BhxfRmzVNN6ZkxQL60XXClf8pOi0l8faMRMowIiNy3g4gWtXWUUZLCCa_dFP1a8rjFFOfIpg9MDn",
    alt: "Minimalist desk setup with laptop",
    badge: "pinned",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyCItvBNf83oe-43T2s4vuLVKMAmBi_UOZPZSp1YhHZOeVkae-g9XtvofGnXtayKJEB2P5kkxbWG2DqTYZ74bp3354M7dVFufRW6ExXQHuthhAM2z9BHjHkdUDsok0m07iOmSt-oBVMjLaCs4Gw7IXN25agmfTbrW0GyAGAAUrzQlh5p0O0NwjXJA9rytAdpaioUdkdSKX5enVrVt2309oc6Z90puGtCFIJiyQ9o8Xk8Zz5YvJiTwfHt8HbRz2voauWj_aBHP3-B79",
    alt: "Pink and blue gradient texture",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2XCVLVn8Ofj7yK7xxyZvcOdu4CbTojT12Gf6uzX1gP_rKcysK8cxk9QOCu04aAaUghOnP1V-UFlAcsBS2UciL55_pkSULh4iarqwALUXIrJeLpyNrcBRBCFiYvdFRHjUCDgsO-4L-kp4Lyl-CmAot0i7cCqkt3EO9ZtpvGEgu4HlCo5SZ-IqlDkvFHOIzfejpLDWzPQdbKR8u9E2gytAerqyjx49widX5PhYLUA1ZANvwKN2EQGwL_yiPYX1VIHbUZ-MCGL7QSpTg",
    alt: "Close up portrait of a woman",
    badge: "video",
    likes: "12k",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXsDqZBT0_TIh7Ss40Xx5kPKY_Od12LHQ3cndo6A8ItPNXAHgWEAE27-Nw7xDLHzJDAlvy1O2g_OUyGQmZsG8pSYP6u34wXkYiqh9_zt0_T3NnOod9XwhOG2NF4ApQ3vFKvwD5kwdq0HLZJfQ9Z23eSl30ZqUzdzU29Rh3JLP3L0SJrrh_k5j-x9dQj2awiZw8XRgwjDsHStRT7hcMz9Eqz6uSHNpkFqDeergi4snxL-iVRpPn5ZFjngEUQKd8pCJqsOcmQ6iheHng",
    alt: "Dog running in a park",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxoyiQvOYuZ06mQC5xe47j7tbYq1AkKSMie6YEmEPSdfalNQ0cUfytzw32yMwsl1CgEgRwTPHqOT_Z9fLC1Sa__G7N1jnvZ0dysEzIo1wrboEZjrMUFlFAphx64ScpSnyJaApBqrRUg97hmI5Vb_c7poCfx6QCYFLF15-zSbs_GN624TmxCIaENbBuINfufvZXLWcut1C2et6HK3ewmNFRpwmfnocpOjx4XReH00vqtEF4it2gh6T0uEmbCUg-nmB6GU5AF28fRiiW",
    alt: "Retro computer setup",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXclGs9zQKt26zKfVubLD4pVVMQGU2iitPO7_OvRf35xgaxaanjLAnwe61Nv_Zlik5kl3NYLPMqdNzkTjdr8iPdgqMogwiz0hO7U4uBKGD4x2CI3YHdUlgzoyDCp2IQS1qIEtTe5nj_ibH_wMY9_nRxG0lxdPM4qA-RSU0pR_DNsGW2X1lHOwA4B-FMMzNdtMCzP91AEAGLn-P_BwjkLFVJlroAKxDKaZkej5SwiP60GHpJOW_8u5M6j0UTD_L5KNuJ-zECL-t0qI7",
    alt: "Aerial view of Paris at night",
    location: "Paris, France",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJerfiPjgfJXLVpflFeUVPKaI9aP19EfvnZPtM5Fr8x7iqEcV5BET7XvDeJNgAvtvetwaj4D03F1TFwNwL0PooP7fZcgmv23WuuJPCYvNi9EOBehDJqVLkWxFBq5jLdL-Z-KBjYggGUsy3CRobsNRd04N-tfE8kSAfuP6TcbMFtId2dIWhsshxruCadch_VRx0NZpSTACV1C0lcjjCbLXajSFGGLQkMJytxxkZH6uZIAeXQ9k9O3hKwRha5247kbdQ7dz6a1WJW8sG",
    alt: "Blurred exclusive content preview",
    badge: "locked",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpUS_cTG_VN8r1sn6gvnDmyj50Hm8mPiKofgxReJV_fyONPbiDDa2-cWwP1oNJkj5Oxtuf0N3Loc32JOAbm6VMkAC1peoEOI5QyRC21irr9aFgpUrLOhcHO5bLSlySGDoy6RuoaMHGvGhmJCD7aJVa5mWNlYvpW7z3q86la9m_r_nne2pc_kuGigmWt000sY-b28AhkM-Fb8cUSGJ4VKJ64tKoaZ0MbLs2zdaVqMhteZwZPQ_AqpUdzgSTmeJLQqPy6Z497UlsV2Cs",
    alt: "Cyberpunk style street market",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY-DYcZ0J1-Wh2zfniCjdVynRCpaaHdm0QPh1jhT-F8LiIfbB37fMZGpJqExxeLVWMY1F5Jxjhbd98_lYtx_2pH9TPN_Dtm2VSR0xOOXT2Ovf3XeftyOc02YoayL7RDesDV5GHAXQPN9khJn7QfuwMq9VwHx64W3YTB9kMVvoMwttYOwpyg1yxuDsm69ofdOYpK7L26dbUJJmgfLgXxxOQuAbVQfF5X-iD7kpWWDLZMarObfag6oIpVAZRAUpKlWc_Z4gRF0v7fQHs",
    alt: "Mountain landscape with sunset",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhRJJEnjjdZOhv0HxrDabhdwcxFcayvYo8o_80ofxEkMoMIy6aSSKfMdsa5SL6G1k2pFFBKBogA4xOTCU7Dceda-iRFUNsHrc0-YudRUSFg04ItxyNxc890srFCbeowSIG3HF18UGrBy8puOpoBisF_gVVZnEZke4tsyWwsF2QKJ2uH8lVbsCZTgYVRoPCm12zK4ZnukOKbTFNfcGVHYkMEL583Hz0--EQASuZjmpJL3Jlfa7buMLHIbj68fJxJFZcKo5a5fExRrux",
    alt: "Travel photo of alpine lake",
  },
];

export default function ProfilePage() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light px-4 text-slate-900 shadow-2xl dark:bg-background-dark dark:text-white sm:px-6 lg:max-w-5xl xl:max-w-6xl">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-background-light/80 px-4 py-3 backdrop-blur-md dark:bg-background-dark/80">
        <Link
          href="/home"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <div className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Sarah Jenkins</div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
          aria-label="More options"
        >
          <MoreIcon className="h-5 w-5" />
        </button>
      </header>

      <section className="flex flex-col items-center pt-4 pb-6 lg:flex-row lg:items-start lg:gap-8">
        <div className="relative mb-4">
          <div className="absolute -inset-[3px] animate-pulse rounded-full bg-gradient-to-tr from-primary via-purple-400 to-pink-500" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-background-light bg-slate-800 dark:border-background-dark">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdE-gEfLEqwldc4OCbt8W2vK39SpS7k3UxufDT_Z0lhtceiTm2vKBwtY1KTIfPsJJXIcqb-0Smg5ChHt2eN4lk2UabRkVdHKHMbVPO-h6HbbGTuRjnojuv90wfycjf9d5qZK4PAJrXRD3GPPSLZx7K2alYWmD5Ibsh-elHGrLRRzZYTOWV_jw_2kPE9SFVESa447tgmhDJsRIyGKAAQM_1TKb4WsCV1WPvGt8pBnAr--IPnEm3_bobCbsxfdaDm5sihdPs6BlnE6fK"
              alt="Portrait of Sarah Jenkins"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 rounded-full border-2 border-background-light bg-primary px-2 py-0.5 text-[10px] font-bold text-white shadow-sm dark:border-background-dark">
            LIVE
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div className="mb-1 flex items-center gap-1.5">
            <h1 className="text-2xl font-bold tracking-tight">Sarah Jenkins</h1>
            <VerifiedIcon className="h-5 w-5 text-primary" />
          </div>
          <p className="mb-4 text-sm font-medium text-slate-500 dark:text-gray-400">Digital Artist &amp; Vlogger</p>

          <div className="mb-6 grid w-full max-w-xs grid-cols-3 gap-8 px-4 lg:max-w-full lg:px-0">
            <Stat label="Posts" value="1.2k" />
            <Stat label="Followers" value="540k" />
            <Stat label="Following" value="120" />
          </div>

          <p className="mb-3 max-w-xl text-center text-sm leading-relaxed text-slate-700 dark:text-slate-300 lg:text-left">
            Creating immersive worlds 🌍 and sharing the journey. Check out my latest tutorial series below! 👇
          </p>

          <a
            className="mb-6 flex items-center gap-1 text-sm font-semibold text-primary transition hover:underline"
            href="#"
          >
            <LinkIcon className="h-4 w-4 -rotate-45" />
            innfomo.com/sarahj
          </a>

          <div className="flex w-full max-w-xs items-center gap-3 lg:max-w-md">
            <button className="flex-1 h-11 rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95">
              Follow
            </button>
            <button className="flex-1 h-11 rounded-full bg-slate-200 text-sm font-bold text-slate-900 transition-all hover:bg-slate-300 active:scale-95 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
              Message
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-500 transition hover:bg-amber-500/20"
              title="Propose Collaboration"
            >
              <HandshakeIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="sticky top-[60px] z-20 border-b border-slate-200 bg-background-light px-1 dark:border-slate-800/50 dark:bg-background-dark">
        <div className="flex w-full">
          <button className="flex flex-1 flex-col items-center justify-center py-3 text-primary">
            <GridIcon className="mb-1 h-5 w-5" />
          </button>
          <button className="flex flex-1 flex-col items-center justify-center py-3 text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200">
            <LockIcon className="mb-1 h-5 w-5" />
          </button>
          <button className="flex flex-1 flex-col items-center justify-center py-3 text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200">
            <TrophyIcon className="mb-1 h-5 w-5" />
          </button>
        </div>
      </div>

      <main className="flex-1 pb-24">
        <div className="grid grid-cols-3 gap-0.5 sm:grid-cols-4 lg:grid-cols-5">
          {posts.map((post) => (
            <div key={post.src} className="group relative aspect-square cursor-pointer overflow-hidden bg-slate-800">
              <img src={post.src} alt={post.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              {post.badge === "collection" && (
                <span className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white shadow">
                  <CollectionIcon className="h-4 w-4" />
                </span>
              )}
              {post.badge === "pinned" && (
                <span className="absolute right-2 top-2 rotate-45 text-white drop-shadow" aria-label="Pinned">
                  <PinIcon className="h-4 w-4" />
                </span>
              )}
              {post.badge === "video" && (
                <span className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white shadow">
                  <PlayIcon className="h-4 w-4" />
                </span>
              )}
              {post.badge === "locked" && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-white">
                  <LockIcon className="h-5 w-5" />
                </span>
              )}
              {post.likes && (
                <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[11px] font-semibold text-white shadow">
                  <HeartIcon className="h-3.5 w-3.5" />
                  {post.likes}
                </div>
              )}
              {post.location && (
                <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-[11px] font-semibold text-white shadow">
                  {post.location}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <button
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/40 transition-all duration-300 hover:scale-110 active:scale-95 lg:right-10"
        aria-label="Send gift"
      >
        <GiftIcon className="h-7 w-7" />
        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-pink-500 shadow-lg" />
      </button>

      <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-gray-200 bg-white px-6 pb-6 pt-3 shadow-lg dark:border-white/5 dark:bg-surface-dark sm:max-w-lg md:max-w-xl lg:hidden">
        <div className="flex items-center justify-between">
          <NavButton href="/home" label="Home">
            <HomeIcon className="h-6 w-6" />
          </NavButton>
          <NavButton href="/search" label="Search">
            <ExploreIcon className="h-6 w-6" />
          </NavButton>
          <NavButton href="/messages" label="Messages">
            <MessageIcon className="h-6 w-6" />
          </NavButton>
          <NavButton href="/profile" label="Profile" active>
            <PersonIcon className="h-6 w-6" />
          </NavButton>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  href,
  label,
  active,
  children,
}: {
  href: string;
  label: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex w-16 flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
        active ? "text-primary" : "text-gray-400 dark:text-gray-500 hover:text-primary"
      }`}
      aria-label={label}
    >
      <div className="relative">
        {children}
        {active && <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500" />}
      </div>
      <span>{label}</span>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xl font-bold">{value}</span>
      <span className="text-xs font-medium text-slate-500 dark:text-gray-400">{label}</span>
    </div>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.75 16 6.75 12l4-4" />
    </svg>
  );
}

function MoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}

function VerifiedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m10.6 16.2 6.15-6.15a.75.75 0 0 0-1.06-1.06l-5.09 5.1-2.25-2.26a.75.75 0 1 0-1.06 1.06l2.78 2.78a.75.75 0 0 0 1.06 0Z" />
      <path
        fillRule="evenodd"
        d="M12 3c-.9 0-1.74.36-2.35.98l-.72.73-.98.72a3.5 3.5 0 0 0-1.38 2.83v1.24l-.36 1.17a3.5 3.5 0 0 0 .67 3.06l.78.98.54 1.07a3.5 3.5 0 0 0 2.45 1.9l1.36.26 1.36-.26a3.5 3.5 0 0 0 2.45-1.9l.54-1.07.78-.98a3.5 3.5 0 0 0 .67-3.06l-.36-1.17V8.26a3.5 3.5 0 0 0-1.38-2.83l-.98-.72-.72-.73A3.31 3.31 0 0 0 12 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5 13.5 10M7 17l-1.5 1.5a3.54 3.54 0 0 0 0 5 3.54 3.54 0 0 0 5 0L12 22" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 10.5 12 8m2-5 1.5-1.5a3.54 3.54 0 0 1 5 0 3.54 3.54 0 0 1 0 5L17 8" />
    </svg>
  );
}

function HandshakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.5 8.5-3.65-2.6a2 2 0 0 0-2.35 0L7 9m12 4-4.26 4.26a1.5 1.5 0 0 1-2.12 0L11 15.63m-2-.63-2.29 2.29a1.8 1.8 0 1 0 2.55 2.55l.49-.49m7.29-4.97 1.96-1.46A2 2 0 0 0 20 9.62l-2.55-1.91m-9.95 6.54-3-2.25a2 2 0 0 1-.5-2.79l.75-1.05"
      />
    </svg>
  );
}

function GridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10V8a3 3 0 0 1 6 0v2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v2" />
    </svg>
  );
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M10 17.5h4" />
      <path d="M7 3.5h10v5.75a5 5 0 0 1-10 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 5.5h3v2a3.5 3.5 0 0 1-3-2Zm17 0h-3v2a3.5 3.5 0 0 0 3-2Z" />
    </svg>
  );
}

function CollectionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <rect x="4" y="7" width="14" height="11" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8" />
    </svg>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2 4.5 5.5h-3v4l2.5 3.5H8l2.5-3.5v-4h-3Z" />
      <path d="M12 21v-6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5.5v13l10-6.5Z" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 21s-6.75-4-9-9.2C1.46 8.6 3.4 5.5 6.5 5.5c2.02 0 3.35 1.14 4 2.17.65-1.03 1.98-2.17 4-2.17 3.1 0 5.04 3.1 3.5 6.3C18.75 17 12 21 12 21Z" />
    </svg>
  );
}

function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16v11H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v11M4 13.5h16" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9H6.8a2.3 2.3 0 1 1 0-4.6c1.83 0 4.2 2.24 5.2 4.6 1-2.36 3.37-4.6 5.2-4.6a2.3 2.3 0 1 1 0 4.6H12Z"
      />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 11 7-6 7 6v7a1 1 0 0 1-1 1h-4v-4H10v4H6a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function ExploreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 14 1-4 4-1-1 4-4 1Z" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
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

function PersonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.5a6 6 0 1 1 12 0" />
    </svg>
  );
}
