"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, type SVGProps, useState } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-white">
      <div className="pointer-events-none absolute top-[-22%] right-[-16%] h-[320px] w-[320px] rounded-full bg-primary/20 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-14%] left-[-14%] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[90px]" />

      <section className="relative z-10 flex min-h-screen w-full max-w-md flex-col px-6 pb-12 pt-6 sm:pt-10">
        <header className="flex items-center justify-between pb-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex size-12 items-center justify-center rounded-full text-slate-900 transition-colors hover:bg-white/70 active:bg-white/90 dark:text-white dark:hover:bg-surface-dark/70 dark:active:bg-surface-dark"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        </header>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-primary to-purple-400 shadow-[0_20px_50px_-25px_rgba(108,43,238,0.55)]">
              <HeartIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tight">
              InnFomo
            </h1>
            <p className="mt-2 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
              Welcome back to the creator economy.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="sr-only">Email or Phone Number</span>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-slate-500">
                  <MailIcon className="h-5 w-5" />
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email or Phone Number"
                  className="block w-full rounded-2xl border border-slate-200 bg-white/90 py-4 pl-12 pr-4 text-base text-slate-900 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary/80 dark:border-input-border dark:bg-surface-dark dark:text-white"
                />
              </div>
            </label>

            <div className="space-y-2">
              <label className="block">
                <span className="sr-only">Password</span>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-slate-500">
                    <LockIcon className="h-5 w-5" />
                  </span>
                  <input
                    required
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Password"
                    className="block w-full rounded-2xl border border-slate-200 bg-white/90 py-4 pl-12 pr-12 text-base text-slate-900 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary/80 dark:border-input-border dark:bg-surface-dark dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 transition hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 dark:text-slate-500 dark:hover:text-slate-300"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </label>
              <div className="flex justify-end">
                <a
                  className="text-sm font-medium text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-white"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center rounded-full bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-[0.98]"
            >
              Log In
            </button>
          </form>

          <div className="mt-9 space-y-4">
            <div className="relative flex items-center py-2">
              <span className="flex-grow border-t border-slate-200 dark:border-slate-700" />
              <span className="mx-4 flex-shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Or continue with
              </span>
              <span className="flex-grow border-t border-slate-200 dark:border-slate-700" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:translate-y-0 dark:border-input-border dark:bg-surface-dark dark:text-white dark:hover:bg-surface-dark/80"
              >
                <GoogleIcon className="mr-2 h-5 w-5 text-[#4285F4]" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:translate-y-0 dark:border-input-border dark:bg-surface-dark dark:text-white dark:hover:bg-surface-dark/80"
              >
                <AppleIcon className="mr-2 h-5 w-5" />
                Apple
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            New to InnFomo?
            <Link
              className="ml-1 font-semibold text-primary hover:underline"
              href="/register"
            >
              Register
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}

function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.75 16 6.75 12l4-4" />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      {...props}
    >
      <rect x="3.5" y="5.75" width="17" height="12.5" rx="2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 8 7 5 7-5" />
    </svg>
  );
}

function LockIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      {...props}
    >
      <rect x="4.75" y="10.5" width="14.5" height="10" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 10.25V8a3.5 3.5 0 0 1 7 0v2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5v2" />
    </svg>
  );
}

function EyeIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.75 12S6 6.75 12 6.75 21.25 12 21.25 12 18 17.25 12 17.25 2.75 12 2.75 12Z"
      />
      <circle cx="12" cy="12" r="2.25" />
    </svg>
  );
}

function EyeOffIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 7s2.7-3.25 8.25-3.25c2.7 0 4.71.86 6.23 1.88"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 17s-2.7 3.25-8.25 3.25c-2.7 0-4.71-.86-6.23-1.88"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 20 16-16" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.25 13.89A2.24 2.24 0 0 1 12 9.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.75 10.11A2.24 2.24 0 0 1 12 14.25"
      />
    </svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      <path d="M12 21s-6.75-4-9-9.2C1.46 8.6 3.4 5.5 6.5 5.5c2.02 0 3.35 1.14 4 2.17.65-1.03 1.98-2.17 4-2.17 3.1 0 5.04 3.1 3.5 6.3C18.75 17 12 21 12 21Z" />
    </svg>
  );
}

function GoogleIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 12c0-5.52-4.48-10-10-10S1 6.48 1 12s4.48 10 10 10c5.66 0 9.43-3.99 9.43-9.61 0-.58-.05-.96-.11-1.39H12v3.15h5.51c-.23 1.36-1.8 3.94-5.51 3.94-3.32 0-6.02-2.75-6.02-6.09 0-3.33 2.7-6.08 6.02-6.08 1.9 0 3.17.82 3.89 1.53l2.65-2.54C17.21 3.34 14.92 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.76 0 9.5-4 9.5-10Z" />
    </svg>
  );
}

function AppleIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.36 1.43c-.95.06-2.12.64-2.82 1.43-.62.69-1.16 1.82-.96 2.89 1.09.03 2.22-.56 2.93-1.35.63-.7 1.15-1.85.85-2.97Zm2.88 9.25c-1.1-.88-2.54-.99-3.68-.36-.47.26-.85.4-1.17.4-.35 0-.73-.14-1.22-.4-1.39-.76-3.06-.24-4.04.78-1.76 1.83-1.5 5.28.28 8.03.63.98 1.48 2.07 2.55 2.08.48 0 .76-.13 1.08-.28.31-.14.64-.29 1.23-.29.57 0 .89.15 1.19.3.3.13.58.25 1.04.24 1.08-.02 1.83-1.09 2.46-2.08.42-.64.58-.95.9-1.65-1.65-.64-2.36-2.42-2.38-2.47-.04-.07-.22-.62-.25-.7-.03-.09-.09-.09-.11-.09-.24.03-.46.1-.67.2-.33.14-.67.28-1.23.28-.58 0-.93-.14-1.26-.28a2.9 2.9 0 0 0-.34-.13c-.06-.02-.1 0-.12.05-.02.04-.48 1.14-.36 2.25.3.27 1 .78 1.98.78.38 0 .67-.08.96-.16.3-.09.6-.18 1-.18.4 0 .68.09.96.17.31.1.62.2 1.09.19.7-.01 1.26-.32 1.73-.95.5-.68.7-1.62.7-1.66.02-.05.14-.52.21-.97.01-.08-.04-.17-.1-.21Z" />
    </svg>
  );
}
