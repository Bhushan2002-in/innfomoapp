"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, type SVGProps } from "react";

export default function BrandCompanyDetailsPage() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/register/brand/profile");
  };

  return (
    <main className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden pb-12">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light p-4 pb-2 dark:bg-background-dark">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-slate-900 transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex flex-1 items-center justify-center" aria-label="Progress: step 2 of 4">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
              <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
              <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            </div>
          </div>
          <div className="w-10 shrink-0" aria-hidden="true" />
        </header>

        <main className="flex flex-1 flex-col space-y-6 p-4">
          <div className="mt-2">
            <h2 className="mb-2 text-2xl font-extrabold text-slate-900 dark:text-white">
              Official Business Info
            </h2>
            <p className="text-base font-normal leading-relaxed text-slate-600 dark:text-[#a69db9]">
              Enter your registration details below to verify your business identity and unlock
              Brand features on InnFomo.
            </p>
          </div>

          <form id="brand-company-form" className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="ml-1 text-sm font-semibold leading-normal text-slate-900 dark:text-white">
                Date of Incorporation
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className="peer h-14 w-full rounded-xl border border-gray-300 bg-white px-4 pr-12 text-base text-slate-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-surface-dark dark:text-white dark:placeholder:text-[#a69db9]/50"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400 transition-colors peer-focus:text-primary dark:text-[#a69db9]">
                  <CalendarIcon className="h-5 w-5" />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="ml-1 text-sm font-semibold leading-normal text-slate-900 dark:text-white">
                Company PAN Number
              </label>
              <input
                type="text"
                placeholder="e.g. ABCDE1234F"
                className="flex h-14 w-full rounded-xl border border-gray-300 bg-white px-4 text-base uppercase text-slate-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-surface-dark dark:text-white dark:placeholder:text-[#a69db9]/50"
              />
              <p className="ml-1 text-xs text-slate-500 dark:text-[#a69db9]/70">
                Permanent Account Number (10 alphanumeric characters)
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="ml-1 text-sm font-semibold leading-normal text-slate-900 dark:text-white">
                GSTIN Number
              </label>
              <input
                type="text"
                placeholder="e.g. 22AAAAA0000A1Z5"
                className="flex h-14 w-full rounded-xl border border-gray-300 bg-white px-4 text-base uppercase text-slate-900 placeholder:text-gray-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-surface-dark dark:text-white dark:placeholder:text-[#a69db9]/50"
              />
              <p className="ml-1 text-xs text-slate-500 dark:text-[#a69db9]/70">
                Goods and Services Tax Identification Number
              </p>
            </div>
          </form>
        </main>

        <div className="mt-8 w-full p-4">
          <button
            type="submit"
            form="brand-company-form"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-base font-bold text-white shadow-[0_8px_20px_-6px_rgba(108,43,238,0.5)] transition-transform duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]"
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

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
