import type { Metadata } from "next";
import Link from "next/link";
import { type ReactNode, type SVGProps } from "react";

export const metadata: Metadata = {
  title: "InnFomo | Choose your role",
  description: "Select your account type to start onboarding on InnFomo.",
};

type IconProps = SVGProps<SVGSVGElement>;

const creatorImage =
  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAkoNbPD46SFoH1X4MzOlBkMh6LEDhFtHXVCC43ykaasxy7RNf7gXk0sL9QSUKtdqPouQMtVb_3MYIIganL7f0vIvVf4Nyv_WdJUiiizBxWuowoYEIvcfm0HhIR0KV_D0bnQjFsfpqTr9RvFSloFE6Xhz02U5XCp1i6ZzJ7rgkrumSvQnKwyWCioj3qF40mnrKKDhxmmIQIzyv-dAsVKaOJiLJJwlPoZxr2feeZza4kgriIxk_lROSUNsTaYxoPy5nGfL-ke4Uv9S_")';

const fanImage =
  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTtwXD4zg5xeslOFZz9AZgGQ3lp0s-jYkvAYqARVCcyl4Q76YPkNwJp6-VQcE3tM6GlyJA9auppR33nFimeOkHTqkbG6ZHFU5OKekPDHdU45kRV9UhDmNdQeSacLwDKo_q0xpYWW1e_I0vx2ik-pTEhvAhn0XRJRofwKz7PalwUD8n1BvVR_-DD0bniTblG1EMyZoNOt3mMNIQhlNyJZxQbfEq258Q5Uf8lmXq6KbuuQc7xvyoZ8FEYyILGYizyiNqo1QzrlIVGaQ_")';

const brandImage =
  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBftwWdDxPJipfdTtX5SajVCPNLXqd2NlShgnU60swaEVbqNFEl7J3zrLdeGiHv-vcRakiJKLMfuws4x5rDEjqGjUOibwjTM0gKHtAHI5Ys-SCnRCYBqVx5O8saOiTtXFEBQvL5LUSoz1h4bLXZ5TnoIiYsDxTmmYhxdCf244PARoPqkFGMboP2nHYzSP_IswsPLMTiM62FK_IfRK5hN-u2aFLH58cXsy_maImNmqjvfdDo-6QPgSO4qOUe0Pv_4vCiyclHOdB__SGz")';

export default function RegisterRolePage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background-light px-6 py-6 text-slate-900 dark:bg-background-dark dark:text-white">
      <div className="pointer-events-none absolute top-[-18%] right-[-16%] h-[260px] w-[260px] rounded-full bg-primary/15 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[-12%] left-[-16%] h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-[80px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col">
        <header className="flex flex-col items-center justify-center pt-6 pb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-[var(--shadow-glow)]">
              <InfinityIcon className="h-[26px] w-[26px]" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">InnFomo</h2>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Choose your role
            </h1>
            <p className="mx-auto max-w-[280px] text-[15px] font-medium leading-relaxed text-gray-500 dark:text-[#a69db9]">
              Select your account type to start your onboarding process.
            </p>
          </div>
        </header>

        <div className="relative z-10 flex flex-1 flex-col gap-4 pb-6">
          <RoleCard
            title="Creator"
            description="Share content & earn subscriptions from your fans."
            icon={<MovieFilterIcon className="h-5 w-5" />}
            iconTint="bg-purple-100 dark:bg-purple-900/30 text-primary"
            image={creatorImage}
            href="/register/creator"
          />
          <RoleCard
            title="Fan"
            description="Discover exclusives, gift, and support creators."
            icon={<HeartIcon className="h-5 w-5" />}
            iconTint="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
            image={fanImage}
            href="/register/fan"
          />
          <RoleCard
            title="Brand"
            description="Collaborate with talent & grow your reach."
            icon={<BriefcaseIcon className="h-5 w-5" />}
            iconTint="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            image={brandImage}
            href="/register/brand"
          />
        </div>

        <footer className="relative z-10 mt-auto py-6 text-center">
          <p className="text-[14px] font-medium text-gray-500 dark:text-[#a69db9]">
            Already a member?
            <Link
              className="ml-1 inline-flex items-center font-bold text-primary transition-colors hover:text-primary/80"
              href="/"
            >
              Login
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}

function RoleCard({
  title,
  description,
  icon,
  iconTint,
  image,
  href,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  iconTint: string;
  image: string;
  href?: string;
}) {
  const baseClasses =
    "group relative flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white/90 p-3 pl-4 text-left shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:border-primary/60 hover:shadow-[0_0_0_4px_rgba(108,43,238,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 active:scale-[0.98] dark:border-white/5 dark:bg-surface-dark dark:hover:border-primary/60";

  const content = (
    <>
      <div className="flex flex-1 flex-col justify-center gap-1.5 pr-4">
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center justify-center rounded-lg p-1.5 ${iconTint}`}
            aria-hidden="true"
          >
            {icon}
          </span>
          <p className="text-[17px] font-bold text-gray-900 dark:text-white">
            {title}
          </p>
        </div>
        <p className="text-xs font-medium leading-relaxed text-gray-500 dark:text-[#a69db9]">
          {description}
        </p>
      </div>
      <div
        className="h-20 w-20 flex-shrink-0 rounded-lg bg-cover bg-center bg-no-repeat grayscale-[12%] transition-all duration-500 group-hover:grayscale-0"
        style={{ backgroundImage: image }}
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses}>
      {content}
    </button>
  );
}

function InfinityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 16c2 0 3.5-2 5.5-4s3.5-4 5.5-4c1.93 0 3.5 1.79 3.5 4s-1.57 4-3.5 4c-2 0-3.5-2-5.5-4s-3.5-4-5.5-4C4.57 8 3 9.79 3 12s1.57 4 3.5 4Z"
      />
    </svg>
  );
}

function MovieFilterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="4.5" y="5.5" width="15" height="13" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.5v-2m6 2v-2M8 10h8M8 14h5" />
    </svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20s-6-3.7-8-8.5C3.35 8 5.25 5.5 8 5.5c1.6 0 2.82.9 3.5 2 0 0 1.2-2 3.5-2 2.76 0 4.65 2.54 4 6-1 4.8-8 8.5-8 8.5Z"
      />
    </svg>
  );
}

function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="3.75" y="7.75" width="16.5" height="11.5" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.75V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.5h16.5" />
    </svg>
  );
}
