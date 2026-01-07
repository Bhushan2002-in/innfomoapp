"use client";

import { useRouter } from "next/navigation";
import {
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  type SVGProps,
  useRef,
} from "react";

const otpInputClass =
  "w-full aspect-[4/5] rounded-2xl bg-surface-light dark:bg-surface-dark border-2 border-transparent focus:border-primary focus:ring-0 text-center text-3xl font-bold text-gray-900 dark:text-white caret-primary transition-all shadow-sm outline-none placeholder-gray-300 dark:placeholder-gray-700 ring-1 ring-gray-100 dark:ring-gray-800";

export default function CreatorVerifyPage() {
  const router = useRouter();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const focusNext = (index: number) => {
    const next = inputsRef.current[index + 1];
    if (next) next.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    event.target.value = value.slice(-1);
    if (value) focusNext(index);
  };

  const handleBackspace = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace" && !event.currentTarget.value && index > 0) {
      const prev = inputsRef.current[index - 1];
      if (prev) prev.focus();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/register/creator/email");
  };

  return (
    <main className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden px-6 py-6">
        <div className="flex items-center justify-between pt-4 pb-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-surface-dark"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2" aria-label="Progress: step 2 of 3">
            <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
            <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
            <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
          <div className="w-12" aria-hidden="true" />
        </div>

        <div className="mt-8 flex flex-col flex-1">
          <div className="mb-6 flex justify-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-surface-light text-primary shadow-[0_4px_20px_-4px_rgba(108,43,238,0.15)] dark:border-gray-800 dark:bg-surface-dark">
              <MailIcon className="h-8 w-8" />
            </div>
          </div>

          <div className="mb-10">
            <h1 className="mb-3 text-[32px] font-bold leading-tight tracking-tight">
              Verify it&apos;s you
            </h1>
            <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-[#a69db9]">
              We&apos;ve sent a 4-digit verification code to <br />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                +1 (555) 000-0000
              </span>
            </p>
            <button
              type="button"
              className="mt-2 text-sm font-semibold text-primary transition hover:underline"
              onClick={() => router.back()}
            >
              Wrong number?
            </button>
          </div>

          <form
            id="otp-form"
            className="mb-8 flex w-full justify-between gap-4"
            onSubmit={handleSubmit}
          >
            {Array.from({ length: 4 }).map((_, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                placeholder="-"
                className={otpInputClass}
                autoFocus={idx === 0}
                onChange={(event) => handleChange(event, idx)}
                onKeyDown={(event) => handleBackspace(event, idx)}
                aria-label={`Digit ${idx + 1}`}
              />
            ))}
          </form>

          <div className="text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-[#a69db9]">
              Didn&apos;t receive the code?
              <button
                type="button"
                className="ml-1 cursor-not-allowed font-bold text-gray-400 dark:text-gray-600"
                disabled
              >
                Resend in 00:30
              </button>
            </p>
          </div>
        </div>

        <div className="mt-auto pt-6 pb-4">
          <button
            type="submit"
            form="otp-form"
            className="group relative flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-5 text-lg font-bold text-white shadow-[0_10px_30px_-10px_rgba(108,43,238,0.6)] transition-all duration-300 hover:bg-[#5820c6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]"
          >
            <span>Continue</span>
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="h-2" />
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
