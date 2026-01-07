"use client";

import { useRouter } from "next/navigation";
import { type SVGProps } from "react";

const inputClass =
  "w-full bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-white border border-transparent focus:border-primary/50 ring-1 ring-gray-200 dark:ring-gray-800 focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3.5 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600";

export default function CreatorOnboardingPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/register/creator/verify");
  };

  return (
    <main className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-y-auto px-5 pb-12 pt-6">
        <div className="flex items-center justify-between pb-6 pt-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200 transition-colors dark:hover:bg-surface-dark"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex gap-2" aria-label="Progress: Step 1 of 4">
            <div className="h-1.5 w-8 rounded-full bg-primary" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
          <div className="w-10" aria-hidden="true" />
        </div>

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
            <MovieFilterIcon className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              Creator Account
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight">
            Basic Information
          </h1>
          <p className="mt-2 text-base font-medium text-gray-500 dark:text-[#a69db9]">
            Let&apos;s get to know you better. Your identity helps us match you with
            the right brands.
          </p>
        </div>

        <form
          id="creator-form"
          className="flex flex-1 flex-col gap-5 pb-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="ml-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                First Name
              </label>
              <input
                required
                type="text"
                placeholder="Jane"
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label className="ml-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Last Name
              </label>
              <input
                required
                type="text"
                placeholder="Doe"
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Email Address
            </label>
            <div className="group relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                <MailIcon className="h-5 w-5" />
              </span>
              <input
                required
                type="email"
                placeholder="jane.doe@example.com"
                className={`${inputClass} pl-11`}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Phone Number
            </label>
            <div className="flex gap-3">
              <div className="relative w-28 shrink-0">
                <select className="h-14 w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 text-left font-medium text-gray-900 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-input-border dark:bg-surface-dark dark:text-white">
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                  <option>🇨🇦 +1</option>
                  <option>🇦🇺 +61</option>
                  <option>🇮🇳 +91</option>
                  <option>🇦🇪 +971</option>
                </select>
                <ExpandMoreIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              </div>
              <div className="group relative flex-1">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Date of Birth
            </label>
            <div className="group relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                <CalendarIcon className="h-5 w-5" />
              </span>
              <input
                required
                type="date"
                className={`${inputClass} pl-11 [color-scheme:dark] dark:[color-scheme:dark]`}
              />
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <label className="ml-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-3">
              <GenderOption value="male" label="Male" />
              <GenderOption value="female" label="Female" />
              <GenderOption value="lgbtq" label="LGBTQ++" />
              <GenderOption value="notsay" label="Rather not to say" />
            </div>
          </div>

        </form>
        <div className="mt-8 w-full pb-4">
          <button
            type="submit"
            form="creator-form"
            className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-lg font-bold text-white shadow-[0_8px_20px_-6px_rgba(108,43,238,0.5)] transition-transform duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]"
          >
            Continue
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </main>
  );
}

function GenderOption({ value, label }: { value: string; label: string }) {
  return (
    <label className="group relative cursor-pointer">
      <input className="peer sr-only" name="gender" type="radio" value={value} />
      <div className="flex items-center justify-center rounded-xl bg-surface-light p-3.5 ring-1 ring-gray-200 transition-all peer-checked:bg-primary/5 peer-checked:ring-2 peer-checked:ring-primary dark:bg-surface-dark dark:ring-gray-800">
        <span className="text-sm font-semibold text-gray-600 transition-colors peer-checked:text-primary dark:text-gray-400">
          {label}
        </span>
      </div>
    </label>
  );
}

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10.75 16-4-4 4-4" />
    </svg>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function MovieFilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="4.5" y="5.5" width="15" height="13" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.5v-2m6 2v-2M8 10h8M8 14h5" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="5.75" width="17" height="12.5" rx="2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 8 7 5 7-5" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 3.75H8a2.25 2.25 0 0 0-2.25 2.25v12a2.25 2.25 0 0 0 2.25 2.25h8A2.25 2.25 0 0 0 18.25 18V6A2.25 2.25 0 0 0 16 3.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75h4.5" />
      <circle cx="12" cy="17" r="0.9" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="4.25" y="5" width="15.5" height="15.5" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.75V6M16 3.75V6M4.25 9.5h15.5" />
    </svg>
  );
}

function ExpandMoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
    </svg>
  );
}
