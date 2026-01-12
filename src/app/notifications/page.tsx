import Link from "next/link";

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  avatar?: string;
  icon?: React.ReactNode;
  badge?: "gift" | "mention" | "follow" | "system";
  unread?: boolean;
  mediaThumb?: string;
};

const filters = ["All", "Mentions", "Gifts", "Follows", "System"];

const notifications: Notification[] = [
  {
    id: "gift",
    title: "New Gift",
    description: "Sarah Jenkins sent you ₹50 on your latest story.",
    time: "2m",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRPHRsQU8i4HBPXicIaKLvqJhRPWO1bgMwjk7Mz6ixXn5ULOyfQiW8CS8AYZAYFMN_v_1UqHdRSt2zU9Bpi0EBA_zK750bJFejMsS05zg182zfWl_xyYHpZ1IftbZ-x5e2N-W21mTHJnI1OpLkR83vl1oNyPzeVXcHhluHeEUX_QYeAJLaXaFsCgM9V5hTy16_wykEXzbVsQGwc8kxrbzFDjJiHWv4GQYNEuKzhbCFKrbwrwiY3uTCkjcwjICGbNc8-X2AXFFhUJ7k",
    badge: "gift",
    unread: true,
  },
  {
    id: "mention",
    title: "Mentioned you",
    description: "TechBrand Official mentioned you in a reel.",
    time: "15m",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALblYcckkz9BWo9G4iRoqBwnqu8H6aSvON_pOh3XDHDrbzlpJjserWSG1bMkUZ-RwDofenrXbMhfUXP91ODCPiSXabk8G4pFd3wy-QZ3Tee7gQa4EsAq1UjEvG9Kj85mGJupY9VQpO_5UOJuMe8qKp6_AgW--OwiEgVv3erVUbSk1xd6SUqFOMQkIjz9YOwQVFEN1kAD1N2WMLl-icvtT_l4cnDWA_J95aOCsGm8Q1kTGQlZACMhs6L2vHCRiieYPNx04LmQMN65SK",
    badge: "mention",
    mediaThumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zhy-diVn077BHW_UZiN05qHQWbZQNegucAhjnIC9dVtnU7IiFkyF2Y6WVI47sIWaTPpaxMV0tNIIShf2yEzTOaG7C2MGVG7BPwwqvJuYKfwdVsWTCJ3RgqVpGFHgRydJ8LZAilWdbyt5MewStOcFPBpLdeKg8LXgRUAPj9pv-R6ZTTvnPfNCwVG22u2a-AaBGl9jehjELbDXVCfxOJMIcLN0ioQ3zQ8i6XcTE3Ypd9AGyyhsFchWCcVziUbmbAJTJ-h7Kk4FRPH",
  },
  {
    id: "follow",
    title: "New follower",
    description: "Marcus Chen started following you.",
    time: "1h",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBbq0cQESeE9BwKbZ5_5KB-enCKrPugMOjXl3tb5UvTWzKHUQ6nUpXalTLi6XHikwTzWWjXbdAnCMTNp8El5o3jiCg6USNzGiiji0NUJn7_L7W3qXVDBl3WK3rJFTpQ1-EmPWDmHAjELjy5YlT2Lh8qxLqAb8S3qFhodooj9rqFf-4nQzF2ISJZUEUufZYqC46ZxSSs7C2WKet1uzhoKgMWi4JZ9pbt8JSrQmcP20FaQcJ2NF08dj9GKWMmCfu9Q6uift4kD93S8ZA",
    badge: "follow",
  },
  {
    id: "system",
    title: "Payout ready",
    description: "Your payout of ₹12,500 is scheduled for Friday.",
    time: "Today",
    icon: <PayoutIcon className="h-6 w-6 text-primary" />,
    badge: "system",
  },
  {
    id: "comment",
    title: "Comment",
    description: "Emily Rose commented on your post: “Loved this shot!”",
    time: "Yesterday",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrInKEakPZPqhT24-RRenzs4fkHxxTW0OskdpnVtRpYP2L1k7LBIKhuRNAAXJJ9Q5Wcv0_C9jBHgoR8bmbYiUCiEvYkGZtt5cKAYwXtRNb5ijAIf1WYJVIfC2PGpx7kn0h6u5cG3NWr1LorVAe1xDkmv6n5Ttzbqh_TbAzSOFxZyS0K3rdZxrMkYxMkkMow-5k1y06v_CC-SaoI5MKwhCgmk1SWD-xWBZacczpXr-pkn4pMHfIdtn7rVwzj4KAaFt9UlhuPx8ybTqP",
  },
];

export default function NotificationsPage() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light text-gray-900 shadow-2xl dark:bg-background-dark dark:text-white px-4 sm:px-6 lg:max-w-5xl xl:max-w-6xl">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-background-light/95 pb-2 pt-10 backdrop-blur-md dark:border-white/5 dark:bg-background-dark/95 sm:pt-12">
        <div className="flex items-center justify-between px-1 pb-2">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Notifications</h2>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-200 dark:text-gray-400 dark:hover:bg-white/10">
              <SettingsIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 sm:pb-4">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 text-sm font-semibold transition ${
                index === 0
                  ? "bg-primary text-white shadow-lg shadow-primary/25 active:scale-95"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 active:scale-95 dark:border-transparent dark:bg-surface-dark dark:text-text-secondary dark:hover:bg-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-col space-y-1 pb-28 sm:pb-32">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`group relative flex items-center gap-4 px-1 py-4 transition-colors duration-200 hover:bg-gray-100 active:scale-[0.99] dark:hover:bg-white/5 ${
              item.unread ? "bg-primary/5 dark:bg-primary/5" : ""
            }`}
          >
            <div className="relative shrink-0">
              {item.avatar ? (
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.avatar}')` }}
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
              )}
              {item.badge === "gift" && <GiftIcon className="absolute -bottom-1 -right-1 h-4 w-4 text-pink-400" />}
              {item.badge === "mention" && (
                <MentionIcon className="absolute -bottom-1 -right-1 h-4 w-4 text-blue-400" />
              )}
              {item.badge === "follow" && <FollowIcon className="absolute -bottom-1 -right-1 h-4 w-4 text-green-400" />}
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                {item.unread && <span className="h-2 w-2 rounded-full bg-primary" />}
              </div>
              <p className="truncate text-sm text-gray-600 dark:text-text-secondary">{item.description}</p>
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500">{item.time}</p>
            </div>

            {item.mediaThumb && (
              <div
                className="h-12 w-12 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${item.mediaThumb}')` }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
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

// Icons
function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 9h16v11H4z" />
      <path d="M12 9v11M4 13.5h16" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M12 9H6.8a2.3 2.3 0 1 1 0-4.6c1.83 0 4.2 2.24 5.2 4.6 1-2.36 3.37-4.6 5.2-4.6a2.3 2.3 0 1 1 0 4.6H12Z"
      />
    </svg>
  );
}

function MentionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9v4.5a1.5 1.5 0 0 0 3 0V12a6 6 0 1 0-3.5 5.5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function FollowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19a6 6 0 0 1 12 0M18 9v4m2-2h-4" />
    </svg>
  );
}

function PayoutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h6m-3-2v4M16 11h2m-2 2h1.5" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.4 14.5-.76-1.3a1 1 0 0 1 .06-1.08l.82-1.13a1 1 0 0 0-.17-1.32l-1.05-.9a1 1 0 0 0-1.1-.12l-1.23.6a1 1 0 0 1-1.02-.08l-1.15-.82a1 1 0 0 0-1.2.02l-1.14.85a1 1 0 0 1-1.03.1l-1.22-.6a1 1 0 0 0-1.1.12l-1.05.9a1 1 0 0 0-.17 1.32l.82 1.13a1 1 0 0 1 .06 1.08l-.76 1.3a1 1 0 0 0 .36 1.37l1.15.7a1 1 0 0 1 .5.86v1.38a1 1 0 0 0 .8.98l1.3.26a1 1 0 0 0 1.04-.4l.82-1.04a1 1 0 0 1 1.2-.27l1.25.58a1 1 0 0 0 1.06-.18l1-.84a1 1 0 0 0 .26-1.18l-.5-1.27a1 1 0 0 1 .3-1.12l1.14-.91a1 1 0 0 0 .22-1.32Z"
      />
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
