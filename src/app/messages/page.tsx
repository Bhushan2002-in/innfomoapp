import Link from "next/link";

type Conversation = {
  name: string;
  avatar: string;
  message: string;
  time: string;
  unread?: number;
  online?: boolean;
  verified?: boolean;
  badge?: "brand" | "vip";
};

const filters = ["All", "Unread", "VIP / Subscribers", "Requests"];

const conversations: Conversation[] = [
  {
    name: "Sarah Jenkins",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRPHRsQU8i4HBPXicIaKLvqJhRPWO1bgMwjk7Mz6ixXn5ULOyfQiW8CS8AYZAYFMN_v_1UqHdRSt2zU9Bpi0EBA_zK750bJFejMsS05zg182zfWl_xyYHpZ1IftbZ-x5e2N-W21mTHJnI1OpLkR83vl1oNyPzeVXcHhluHeEUX_QYeAJLaXaFsCgM9V5hTy16_wykEXzbVsQGwc8kxrbzFDjJiHWv4GQYNEuKzhbCFKrbwrwiY3uTCkjcwjICGbNc8-X2AXFFhUJ7k",
    message: "Thanks for the gift! I'll be streaming later... ❤️",
    time: "10m",
    unread: 2,
    online: true,
    verified: true,
  },
  {
    name: "TechGear Official",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALblYcckkz9BWo9G4iRoqBwnqu8H6aSvON_pOh3XDHDrbzlpJjserWSG1bMkUZ-RwDofenrXbMhfUXP91ODCPiSXabk8G4pFd3wy-QZ3Tee7gQa4EsAq1UjEvG9Kj85mGJupY9VQpO_5UOJuMe8qKp6_AgW--OwiEgVv3erVUbSk1xd6SUqFOMQkIjz9YOwQVFEN1kAD1N2WMLl-icvtT_l4cnDWA_J95aOCsGm8Q1kTGQlZACMhs6L2vHCRiieYPNx04LmQMN65SK",
    message: "Your sponsorship proposal has been approved.",
    time: "2h",
    badge: "brand",
  },
  {
    name: "Marcus Chen",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBbq0cQESeE9BwKbZ5_5KB-enCKrPugMOjXl3tb5UvTWzKHUQ6nUpXalTLi6XHikwTzWWjXbdAnCMTNp8El5o3jiCg6USNzGiiji0NUJn7_L7W3qXVDBl3WK3rJFTpQ1-EmPWDmHAjELjy5YlT2Lh8qxLqAb8S3qFhodooj9rqFf-4nQzF2ISJZUEUufZYqC46ZxSSs7C2WKet1uzhoKgMWi4JZ9pbt8JSrQmcP20FaQcJ2NF08dj9GKWMmCfu9Q6uift4kD93S8ZA",
    message: "Hey! Just subscribed to your exclusive tier.",
    time: "Yesterday",
    badge: "vip",
  },
  {
    name: "Emily Rose",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrInKEakPZPqhT24-RRenzs4fkHxxTW0OskdpnVtRpYP2L1k7LBIKhuRNAAXJJ9Q5Wcv0_C9jBHgoR8bmbYiUCiEvYkGZtt5cKAYwXtRNb5ijAIf1WYJVIfC2PGpx7kn0h6u5cG3NWr1LorVAe1xDkmv6n5Ttzbqh_TbAzSOFxZyS0K3rdZxrMkYxMkkMow-5k1y06v_CC-SaoI5MKwhCgmk1SWD-xWBZacczpXr-pkn4pMHfIdtn7rVwzj4KAaFt9UlhuPx8ybTqP",
    message: "Can you check my latest post?",
    time: "Mon",
  },
  {
    name: "David Kim",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_gMUALrjPw4bogKg9H25jXT0n9RbiwZNQtShtMwLXLZ5y-pmJvANVpMCmtUJRx1r588p0db4LR_Lbo76GE9Z98v_hqf7nAekpf2w53iV0eKIUb6dwjbXnM3i0gnsO2MCS59hm9K9rMs7JE3McpbBJTYUCslhIYuz8Yl10OtFeXnjaGwonMSpLu87dwY9_oZ9NCYsC2JJJ6XWIXZUi-dlpNhK4sCL1Um4Yh0J7JDvyUdF8QlTKtIWEP9EkDAeLk15EMtpApw8_JNkl",
    message: "Sent a photo.",
    time: "Sat",
    online: true,
  },
  {
    name: "Jessica Hall",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8KBfpILW1krSI9jwZIFoCJqaQ05yvPqPbsnKZGbKXNFKv0KtOXWgNHuzP4YpP5ZDLLgCpAZtLbWQrIQlOc5dFRlea9QfO4Z1C6FEHXWBRwrNtfRF1Ds6x05ul6jxtXjfkoW0lM5KipvLGkKBBWpO5CPhKEAfJnN8DHCoR50wjK-sN5-UbaRwrdF-gYViAgfmzicvoZtjKqKsKpJKsA2Aa3KoqZT0FyxSozLNAlZaLodpDbN-U6iA5fCC1HVg_TuPV0GCahCwXIXDa",
    message: "See you at the event!",
    time: "Jun 12",
  },
];

export default function MessagesPage() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light text-gray-900 shadow-2xl dark:bg-background-dark dark:text-white px-4 sm:px-6 lg:max-w-5xl xl:max-w-6xl">
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-background-light/95 pb-2 backdrop-blur-md dark:border-white/5 dark:bg-background-dark/95">
        <div className="flex items-center justify-between px-1 pt-10 pb-2 sm:pt-12">
          <h2 className="flex-1 text-2xl font-bold leading-tight tracking-tight">Messages</h2>
          <div className="flex items-center justify-end">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
              <EditIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="px-1 pb-2">
          <label className="flex h-12 w-full flex-col">
            <div className="flex h-full items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm transition-colors duration-200 focus-within:border-primary dark:border-transparent dark:bg-surface-dark">
              <div className="flex items-center justify-center px-4 text-gray-400 dark:text-text-secondary">
                <SearchIcon className="h-5 w-5" />
              </div>
              <input
                className="flex w-full min-w-0 flex-1 border-none bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:text-white dark:placeholder:text-text-secondary"
                placeholder="Search creators or fans..."
              />
            </div>
          </label>
        </div>

        <div className="flex gap-2 overflow-x-auto px-1 pb-3 sm:pb-4">
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
      </div>

      <div className="flex flex-col space-y-1 pb-28 sm:pb-32">
        {conversations.map((item) => (
          <div
            key={item.name}
            className="group relative flex cursor-pointer items-center gap-4 px-1 py-4 transition-colors duration-200 hover:bg-gray-100 active:scale-[0.99] dark:hover:bg-white/5"
          >
            <div className="relative shrink-0">
              <div
                className={`h-14 w-14 rounded-full bg-cover bg-center ${item.badge === "vip" ? "ring-2 ring-primary/60" : ""} ${
                  item.badge === "brand" ? "border border-gray-300 dark:border-gray-700" : ""
                }`}
                style={{ backgroundImage: `url('${item.avatar}')` }}
              />
              {item.online && (
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-background-light bg-green-500 dark:border-background-dark" />
              )}
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <div className="mb-0.5 flex items-center gap-2">
                <p className="truncate text-base font-bold leading-tight text-gray-900 dark:text-white">{item.name}</p>
                {item.verified && <VerifiedIcon className="h-4 w-4 text-blue-400" />}
                {item.badge === "brand" && (
                  <span className="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:bg-white/10 dark:text-gray-300">
                    Brand
                  </span>
                )}
                {item.badge === "vip" && <StarIcon className="h-4 w-4 text-yellow-400" />}
              </div>
              <p className="truncate text-sm font-medium leading-normal text-gray-600 transition-colors group-hover:text-gray-900 dark:text-text-secondary dark:group-hover:text-gray-200">
                {item.message}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1.5">
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500">{item.time}</p>
              {item.unread ? (
                <div className="flex min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {item.unread}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <button
        className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-transform active:scale-95 sm:hidden"
        aria-label="Compose message"
      >
        <EditIcon className="h-6 w-6" />
      </button>

      <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-gray-200 bg-white px-6 pb-6 pt-3 shadow-lg dark:border-white/5 dark:bg-surface-dark sm:max-w-lg md:max-w-xl lg:hidden">
        <div className="flex items-center justify-between">
          <NavButton href="/home" label="Home">
            <HomeIcon className="h-6 w-6" />
          </NavButton>
          <NavButton href="/search" label="Search">
            <ExploreIcon className="h-6 w-6" />
          </NavButton>
          <NavButton href="/messages" label="Messages" active>
            <MessageIcon className="h-6 w-6" />
          </NavButton>
          <NavButton href="/profile" label="Profile">
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

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17h3l8.5-8.5a1.5 1.5 0 0 0-2-2L8 15.5V19" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20h13" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.5 15.5 3 3" />
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

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.5 2.6 5.27 5.82.84-4.21 4.1.99 5.8-5.2-2.73-5.2 2.73.99-5.8L3.6 8.61l5.82-.84Z" />
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
