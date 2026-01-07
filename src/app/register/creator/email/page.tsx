"use client";

import { useRouter } from "next/navigation";
import { useState, type ChangeEvent, type FormEvent, type SVGProps } from "react";

const codeInputClass =
  "block w-full rounded-2xl border-0 bg-surface-light py-6 text-center text-4xl font-bold tracking-[1rem] indent-[1rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all placeholder:text-gray-200 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary outline-none dark:bg-surface-dark dark:text-white dark:placeholder:text-gray-700 dark:ring-surface-dark";

export default function CreatorEmailVerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sanitized = event.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    setCode(sanitized);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real flow, validate email code then proceed to next onboarding step.
    router.push("/register/creator/identity");
  };

  return (
    <main className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden px-4 py-6">
        <div className="flex items-center justify-between pb-6 pt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-surface-light dark:hover:bg-surface-dark"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-1.5" aria-label="Progress: step 3 of 4">
            <div className="h-1.5 w-6 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
            <div className="h-1.5 w-6 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
            <div className="h-1.5 w-6 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
            <div className="h-1.5 w-6 rounded-full bg-gray-200 dark:bg-surface-dark/50" />
          </div>
          <div className="w-8" aria-hidden="true" />
        </div>

        <div className="flex flex-1 flex-col px-2">
          <div className="mb-10 mt-4">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-surface-light text-primary shadow-sm dark:border-white/5 dark:bg-surface-dark">
              <MailIcon className="h-8 w-8" />
            </div>
            <h1 className="mb-3 text-[32px] font-bold leading-tight tracking-tight">
              Check your email
            </h1>
            <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-[#a69db9]">
              We&apos;ve sent a 4-digit verification code to{" "}
              <span className="font-bold text-gray-900 dark:text-white">creator@innfomo.com</span>
            </p>
          </div>

          <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
            <div className="mb-8 w-full">
              <label className="mb-4 block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Enter Verification Code
              </label>
              <div className="group relative">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                  placeholder="0000"
                  className={codeInputClass}
                  value={code}
                  onChange={handleChange}
                  autoFocus
                  aria-label="Email verification code"
                />
                <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-primary/20 blur opacity-0 transition duration-500 group-focus-within:opacity-100" />
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="text-sm text-gray-500 dark:text-[#a69db9]">
                  I didn&apos;t receive a code.
                </span>
                <button
                  type="button"
                  className="text-sm font-bold text-primary transition-colors hover:text-primary/80"
                >
                  Resend
                </button>
              </div>
            </div>

            <div className="mt-auto pb-4 pt-6">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-[0_4px_20px_rgba(108,43,238,0.35)] transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_6px_25px_rgba(108,43,238,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]"
              >
                Continue
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
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

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="5.75" width="17" height="12.5" rx="2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 8 7 5 7-5" />
    </svg>
  );
}
