"use client";

import { useRouter } from "next/navigation";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type SVGProps,
  type CSSProperties,
} from "react";

const panPattern = /^[A-Z]{0,5}[0-9]{0,4}[A-Z]?$/i;

export default function CreatorIdentityPage() {
  const router = useRouter();
  const [pan, setPan] = useState("");
  const [otp, setOtp] = useState("");

  const handlePanChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    if (panPattern.test(value)) {
      setPan(value.slice(0, 10));
    }
  };

  const handleOtpChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    setOtp(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit KYC step here, then continue to next step.
    router.push("/register/creator/profile");
  };

  return (
    <main className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden px-4 py-6">
        <div className="flex items-center justify-between pb-8 pt-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light text-gray-900 transition-colors hover:bg-gray-100 dark:bg-surface-dark dark:text-white dark:hover:bg-gray-800"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>

          <div className="flex gap-2" aria-label="Progress: step 4 of 5">
            <div className="h-2 w-2 rounded-full bg-primary/30" />
            <div className="h-2 w-2 rounded-full bg-primary/30" />
            <div className="h-2 w-2 rounded-full bg-primary/30" />
            <div className="h-2 w-8 rounded-full bg-primary" />
            <div className="h-2 w-2 rounded-full border border-gray-700 bg-surface-dark" />
          </div>

          <div className="w-10" aria-hidden="true" />
        </div>

        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
            <ShieldIcon className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              Identity Verification
            </span>
          </div>
          <h1 className="mb-3 text-[32px] font-bold leading-tight tracking-tight">
            Let&apos;s verify your PAN
          </h1>
          <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-[#a69db9]">
            We need to verify your identity to enable monetization features. Please enter your
            PAN number and the OTP sent to your phone.
          </p>
        </div>

        <form className="flex flex-1 flex-col gap-6" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <label className="ml-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Permanent Account Number (PAN)
            </label>
            <div className="group relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 transition-colors group-focus-within:text-primary">
                <IdCardIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                inputMode="text"
                maxLength={10}
                placeholder="ABCDE1234F"
                value={pan}
                onChange={handlePanChange}
                className="w-full rounded-xl border-2 border-transparent bg-surface-light px-12 py-4 font-bold tracking-widest uppercase text-gray-900 shadow-sm transition-all outline-none focus:border-primary focus:ring-0 dark:bg-surface-dark dark:text-white"
              />
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-green-500">
                {/* Reserved for validation state */}
              </span>
            </div>
            <p className="ml-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <InfoIcon className="h-4 w-4" />
              Format: 5 letters, 4 numbers, 1 letter
            </p>
          </div>

          <div className="space-y-3">
            <div className="ml-1 flex items-end justify-between">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Verification Code
              </label>
              <button
                type="button"
                className="text-xs font-bold text-primary transition-colors hover:text-primary/80"
              >
                Resend OTP
              </button>
            </div>
            <div className="group relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 transition-colors group-focus-within:text-primary">
                <LockIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                placeholder="••••••"
                value={otp}
                onChange={handleOtpChange}
                className="w-full rounded-xl border-2 border-transparent bg-surface-light px-12 py-4 text-lg font-bold tracking-[0.5em] text-gray-900 shadow-sm transition-all outline-none focus:border-primary focus:ring-0 placeholder:text-gray-500 dark:bg-surface-dark dark:text-white"
              />
            </div>
            <p className="ml-1 text-xs text-gray-500 dark:text-gray-400">
              Enter the 6-digit code sent to +1 (555) ***-8899
            </p>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4">
            <ShieldLockIcon className="mt-0.5 h-5 w-5 text-primary" />
            <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
              Your information is encrypted and securely stored. We only use this for regulatory
              compliance and identity verification purposes.
            </p>
          </div>

          <div className="flex-1" />

          <div className="pb-8 pt-4">
            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-4 text-lg font-bold text-white shadow-[0_8px_20px_-6px_rgba(108,43,238,0.5)] transition-transform active:scale-[0.98] hover:bg-primary/90"
            >
              <span
                className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"
                style={shimmerStyle}
                aria-hidden="true"
              />
              <span className="relative">Continue</span>
              <ArrowRightIcon className="relative h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-center text-xs text-gray-400">
              By continuing, you agree to our{" "}
              <a className="text-primary hover:underline" href="#">
                Terms of Service
              </a>
            </p>
          </div>
        </form>
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}

const shimmerStyle: CSSProperties = {
  animationTimingFunction: "ease",
  animationFillMode: "forwards",
};

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

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5 5 6.5v5.75c0 3.9 3.15 6.3 7 8.25 3.85-1.95 7-4.35 7-8.25V6.5l-7-3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.25 11 14l3.75-4.25" />
    </svg>
  );
}

function IdCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="3.75" y="5.75" width="16.5" height="12.5" rx="2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h4.5M8 14.5h2.75" />
      <circle cx="16" cy="12" r="1.8" />
    </svg>
  );
}

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M11.5 11.5h1v4" />
    </svg>
  );
}

function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="4.75" y="10.5" width="14.5" height="10" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 10.25V8a3.5 3.5 0 0 1 7 0v2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5v2" />
    </svg>
  );
}

function ShieldLockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.25 4.75 6.5v6.5c0 4.2 3.7 6.35 7.25 8.25 3.55-1.9 7.25-4.05 7.25-8.25V6.5L12 3.25Z"
      />
      <rect x="8.75" y="10.75" width="6.5" height="5.5" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v-1.5" />
    </svg>
  );
}
