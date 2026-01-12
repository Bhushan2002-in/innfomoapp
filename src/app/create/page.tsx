import Link from "next/link";

export default function CreatePage() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light text-gray-900 shadow-2xl dark:bg-background-dark dark:text-white lg:max-w-5xl xl:max-w-6xl">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-background-light/95 p-4 pb-2 backdrop-blur-md dark:border-white/5 dark:bg-background-dark/95">
        <Link
          href="/home"
          className="flex size-10 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
          aria-label="Close"
        >
          <CloseIcon className="h-5 w-5" />
        </Link>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight">New Post</h2>
        <button className="flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
          Post
        </button>
      </header>

      <main className="flex flex-1 flex-col pb-24">
        <div className="p-4">
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl ring-1 ring-black/5 transition dark:bg-surface-dark dark:ring-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEOUnw7-CswNpuARviIe01ctwtekUj_tksbQ5THoqbgEPsYF-UJj-sFezUDkQ5ks0w2HgFHA-Y-oWNIiyKNwHF2C18N7UN4niEWZooe4Q-uc7EAvg4NIV5UBiTim3yVColcVdRU4ETCCqUfMmer7jK8aW_Wace_InhQ7P_YQrxSeKueloGR-ExZhH8lwSqclpY0uFf9yJTen3-G0_l2fXza1djIyitx7mbAGkSRjinQNm2gjtD9MXuQp3_xwzGrPBDtvmIgfnqQTnx')",
              }}
              aria-label="Preview media"
            />
            <div className="absolute top-4 right-4 flex flex-col gap-3">
              <button className="flex size-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60">
                <EditIcon className="h-5 w-5" />
              </button>
              <button className="flex size-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60">
                <CropIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              <GalleryIcon className="h-4 w-4" />
              <span>1/1</span>
            </div>
          </div>
        </div>

        <div className="hide-scrollbar flex min-w-max gap-3 overflow-x-auto px-4 pb-2">
          <Chip label="Public" icon={<WorldIcon className="h-4 w-4" />} />
          <Chip label="Subscribers Only" icon={<StarIcon className="h-4 w-4" />} active />
          <Chip label="Schedule" icon={<TimerIcon className="h-4 w-4" />} />
        </div>

        <div className="px-4 py-2">
          <textarea
            className="min-h-[120px] w-full resize-none border-none bg-transparent p-0 text-lg leading-relaxed text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:text-white dark:placeholder:text-gray-500"
            placeholder="Write a captivating caption... #hashtags @mentions"
          />
        </div>

        <div className="mx-4 my-2 h-px bg-gray-200 dark:bg-white/5" />

        <div className="flex flex-col gap-1 pb-4">
          <ActionRow
            label="Tag Creators"
            icon={<PersonAddIcon className="h-5 w-5" />}
            iconClass="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
          />
          <ActionRow
            label="Add Location"
            icon={<LocationIcon className="h-5 w-5" />}
            iconClass="bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white"
          />
          <ActionRow
            label="Add Music"
            icon={<MusicIcon className="h-5 w-5" />}
            iconClass="bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white"
          />

          <div className="mt-2 flex items-center justify-between px-4 py-3">
            <div className="flex flex-col">
              <p className="text-base font-medium text-gray-900 dark:text-white">Turn off commenting</p>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">You can change this later</p>
            </div>
            <Toggle />
          </div>
        </div>
      </main>

      <div className="sticky bottom-0 z-40 w-full border-t border-gray-200 bg-background-light p-4 pb-8 dark:border-white/5 dark:bg-background-dark">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center justify-center gap-1 text-primary">
            <ImageIcon className="h-6 w-6" />
            <span className="text-[10px] font-medium">Gallery</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-gray-500 transition-colors hover:text-white dark:text-gray-400">
            <CameraIcon className="h-6 w-6" />
            <span className="text-[10px] font-medium">Camera</span>
          </div>
          <div className="flex-1" />
          <button className="flex items-center justify-center gap-2 rounded-full bg-surface-dark px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/20 dark:bg-[#2e2839]">
            <MagicIcon className="h-5 w-5" />
            <span>AI Caption</span>
          </button>
        </div>
      </div>

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
          className="flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200"
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
    </div>
  );
}

function Chip({ label, icon, active }: { label: string; icon: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`group flex h-9 shrink-0 items-center gap-2 rounded-full border px-4 transition ${
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-transparent bg-surface-dark text-white hover:border-primary/50 dark:bg-[#2e2839]"
      }`}
    >
      <span className="text-white/80 transition group-hover:text-primary">{icon}</span>
      <p className={`text-sm font-medium ${active ? "text-primary" : "text-white"}`}>{label}</p>
    </button>
  );
}

function ActionRow({
  label,
  icon,
  iconClass,
}: {
  label: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <button className="group flex items-center gap-4 px-4 py-3 transition-colors hover:bg-black/5 dark:hover:bg-white/5">
      <div className={`flex size-10 items-center justify-center rounded-full ${iconClass} transition-colors`}>{icon}</div>
      <div className="flex flex-1 flex-col items-start">
        <p className="text-base font-medium text-gray-900 dark:text-white">{label}</p>
      </div>
      <ChevronRightIcon className="h-5 w-5 text-gray-400" />
    </button>
  );
}

function Toggle() {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input className="peer sr-only" type="checkbox" />
      <div className="h-6 w-11 rounded-full bg-gray-200 transition-all peer-checked:bg-primary dark:bg-gray-700" />
      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:translate-x-5" />
    </label>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6 18 18M6 18 18 6" />
    </svg>
  );
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17h3l8.5-8.5a1.5 1.5 0 0 0-2-2L8 15.5V19" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20h13" />
    </svg>
  );
}

function CropIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v14a2 2 0 0 0 2 2h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 17V3a2 2 0 0 0-2-2H5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h4M17 17v-4" />
    </svg>
  );
}

function GalleryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 12 7 15l-2-2" />
      <circle cx="17" cy="9" r="1.5" />
    </svg>
  );
}

function WorldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.5 2.6 5.27 5.82.84-4.21 4.1.99 5.8-5.2-2.73-5.2 2.73.99-5.8L3.6 8.61l5.82-.84Z" />
    </svg>
  );
}

function TimerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <circle cx="12" cy="13" r="7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13V9M15.5 5.5 14 7" />
    </svg>
  );
}

function PersonAddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <circle cx="10" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19a6 6 0 0 1 11 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8v6M21 11h-6" />
    </svg>
  );
}

function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function MusicIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V6l10-2v12" />
      <circle cx="9" cy="18" r="2.5" />
      <circle cx="19" cy="16" r="2.5" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 7 5 5-5 5" />
    </svg>
  );
}

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 13 2-2 3 3 2-3 2 3" />
      <circle cx="9" cy="9" r="1.5" />
    </svg>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1L9 4h6l1.5 2H18A2.5 2.5 0 0 1 20.5 8.5v7A2.5 2.5 0 0 1 18 18H6a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function MagicIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 20 7-7m0 0 9-9-4 9-9 4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 10 4 4" />
    </svg>
  );
}

function AddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
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
