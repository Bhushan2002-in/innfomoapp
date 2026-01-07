"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, type SVGProps } from "react";

export default function BrandOnboardingPage() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/register/brand/company");
  };

  return (
    <main className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden px-5 pb-12 pt-6">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light pb-2 pt-0 dark:bg-background-dark">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-white/10"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2" aria-label="Progress: step 1 of 4">
            <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
          <div className="w-10" aria-hidden="true" />
        </header>

        <main className="flex flex-1 flex-col pt-4">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
              <BriefcaseIcon className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Brand Account
              </span>
            </div>
            <h1 className="mb-3 text-[32px] font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Basic Information
            </h1>
            <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Let&apos;s start building your brand profile on InnFomo. This information helps fans
              verify your authenticity.
            </p>
          </div>

          <form id="brand-form" className="flex flex-col gap-5 pb-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="brandName"
              >
                Brand Name
              </label>
              <div className="relative">
                <input
                  id="brandName"
                  type="text"
                  placeholder="e.g., Acme Corp"
                  className="h-14 w-full rounded-xl border border-gray-200 bg-white px-5 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-[#1f1c27] dark:text-white dark:placeholder:text-[#a69db9]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Official Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="contact@brand.com"
                  className="h-14 w-full rounded-xl border border-gray-200 bg-white px-5 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-[#1f1c27] dark:text-white dark:placeholder:text-[#a69db9]"
                  required
                />
                <MailIcon className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <div className="flex gap-3">
                <div className="relative w-[100px] shrink-0">
                  <select className="h-14 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-3 pr-8 text-left text-gray-900 shadow-sm transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-[#1f1c27] dark:text-white">
                    <option>🇺🇸 +1</option>
                    <option>🇬🇧 +44</option>
                    <option>🇨🇦 +1</option>
                    <option>🇦🇺 +61</option>
                    <option>🇮🇳 +91</option>
                    <option>🇦🇪 +971</option>
                  </select>
                  <ExpandMoreIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
                <div className="relative flex-1">
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="h-14 w-full rounded-xl border border-gray-200 bg-white px-5 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-[#1f1c27] dark:text-white dark:placeholder:text-[#a69db9]"
                  />
                  <PhoneIcon className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="website"
              >
                Website URL
              </label>
              <div className="relative">
                <input
                  id="website"
                  type="url"
                  placeholder="https://yourbrand.com"
                  className="h-14 w-full rounded-xl border border-gray-200 bg-white px-5 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-[#1f1c27] dark:text-white dark:placeholder:text-[#a69db9]"
                />
                <LanguageIcon className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="date"
              >
                Date of Establishment
              </label>
              <div className="group relative">
                <input
                  id="date"
                  type="date"
                  className="h-14 w-full appearance-none rounded-xl border border-gray-200 bg-white px-5 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-[#1f1c27] dark:text-white dark:placeholder:text-[#a69db9]"
                />
                <CalendarIcon className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
          </form>
        </main>

        <div className="mt-8 w-full pb-4">
          <button
            type="submit"
            form="brand-form"
            className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-lg font-bold text-white shadow-[0_8px_20px_-6px_rgba(108,43,238,0.5)] transition-transform duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]"
          >
            <span>Continue</span>
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </main>
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

function LanguageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
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

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="3.75" y="7.75" width="16.5" height="11.5" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.75V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.5h16.5" />
    </svg>
  );
}
