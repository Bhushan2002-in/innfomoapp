"use client";

import { useRouter } from "next/navigation";
import type { SVGProps } from "react";

export default function FanProfilePage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <main className="bg-background-light text-gray-900 dark:bg-black dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light pb-12 dark:bg-background-dark">
        <div className="h-12 w-full shrink-0" />

        <div className="flex w-full items-center justify-between px-6 py-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center justify-center rounded-full text-gray-500 transition-colors hover:text-primary dark:text-gray-400"
            aria-label="Go back"
          >
            <ArrowBackIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2" aria-label="Progress: step 4 of 4">
            <div className="h-2 w-2 rounded-full bg-primary/40 dark:bg-primary/30" />
            <div className="h-2 w-2 rounded-full bg-primary/40 dark:bg-primary/30" />
            <div className="h-2 w-2 rounded-full bg-primary/40 dark:bg-primary/30" />
            <div className="h-2 w-6 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.4)]" />
          </div>
          <div className="w-6" aria-hidden="true" />
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="mt-6 mb-8 text-center">
            <h1 className="mb-3 text-[32px] font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              One Last Step!
            </h1>
            <p className="mx-auto max-w-[80%] text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400">
              Set up your profile to start supporting your favorite creators.
            </p>
          </div>

          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="group relative cursor-pointer">
              <div
                className="h-32 w-32 rounded-full border-4 border-white bg-cover bg-center shadow-lg transition-transform group-hover:scale-105 dark:border-[#2a2438]"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApzYmYPQVrKErsMmDGojZiobIzIZ6AHRWRQxMQgnQRb5e8drlUmSnoCZwXCvMOnKUfAWkjhG50zGDAAJVd1oowwrmA1CcIm7cJQ5DhQzjayD_nxmM7aaPNgljFVYmHkYEwB93HaK0TWpl5VoH1gyQIACKdgrf7zZvHPFtD9xh2ENyU0y5VB-lurrE_lpTLtQ-c0jYM1LBghreQ5TpE1safAKtozbfBNfqA7dsQzhiwztfzI5qFG45JVpug91lGFVXvPhh37Sa4QBgo')",
                }}
                aria-label="Profile picture"
              />
              <div className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background-light bg-primary text-white shadow-md dark:border-background-dark">
                <CameraIcon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-primary">Upload Profile Picture</p>
          </div>

          <form className="flex flex-col gap-5" id="fan-profile-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Display Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="h-14 w-full rounded-full border border-gray-300 bg-white px-5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-surface-dark dark:text-white dark:placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="@fan_name"
                  defaultValue="@innfomo_fan"
                  className="h-14 w-full rounded-full border border-gray-300 bg-white pl-5 pr-12 text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-surface-dark dark:text-white dark:placeholder:text-gray-500"
                />
                <div className="pointer-events-none absolute right-4 top-1/2 flex -translate-y-1/2 items-center text-green-500">
                  <CheckIcon className="h-5 w-5" />
                </div>
              </div>
              <p className="ml-2 text-xs font-medium text-green-500">Username is available!</p>
            </div>

            <div className="space-y-2">
              <label className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Bio <span className="font-normal text-gray-400">(Optional)</span>
              </label>
              <textarea
                className="h-28 w-full resize-none rounded-3xl border border-gray-300 bg-white p-5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-[#433b54] dark:bg-surface-dark dark:text-white dark:placeholder:text-gray-500"
                placeholder="Tell us a bit about yourself..."
              />
            </div>

            <div className="mt-2 flex items-start gap-3 px-2">
              <div className="relative flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-400 bg-transparent transition-all checked:border-primary checked:bg-primary dark:border-gray-600"
                />
                <CheckIcon className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
              </div>
              <label
                htmlFor="terms"
                className="text-sm leading-tight text-gray-600 dark:text-gray-400"
              >
                I agree to the{" "}
                <a className="font-medium text-primary hover:underline" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="font-medium text-primary hover:underline" href="#">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </form>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent p-6 pb-8 pt-12 dark:from-background-dark dark:via-background-dark">
          <button
            type="submit"
            form="fan-profile-form"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary py-4 text-lg font-bold text-white shadow-[0_0_25px_rgba(108,43,238,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(108,43,238,0.6)] active:scale-[0.98]"
          >
            <span className="relative z-10">Create Account</span>
            <ArrowRightIcon className="relative z-10 h-5 w-5" />
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>
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

function ArrowBackIcon(props: SVGProps<SVGSVGElement>) {
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

function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 6 1.5-2.5h3L15 6h3a2 2 0 0 1 2 2v10.25A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25V8A2 2 0 0 1 6 6h3Z"
      />
      <circle cx="12" cy="13" r="3.25" />
    </svg>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12.5 10.5 17l7.5-10" />
    </svg>
  );
}
