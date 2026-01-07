"use client";

import { useRouter } from "next/navigation";
import {
  type ChangeEvent,
  type CSSProperties,
  type SVGProps,
  useMemo,
  useState,
} from "react";

const shimmerStyle: CSSProperties = {
  animationTimingFunction: "ease",
  animationFillMode: "forwards",
};

export default function CreatorProfilePage() {
  const router = useRouter();
  const [bio, setBio] = useState("");

  const bioCount = useMemo(() => Math.min(bio.length, 150), [bio]);

  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value.slice(0, 150));
  };

  return (
    <main className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-y-auto px-5 pb-8 pt-6">
        <div className="mb-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light text-gray-500 transition-colors hover:text-primary dark:bg-surface-dark dark:text-gray-400"
              aria-label="Go back"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5" aria-label="Progress: step 5 of 5">
              <div className="h-1.5 w-8 rounded-full bg-primary/20" />
              <div className="h-1.5 w-8 rounded-full bg-primary/20" />
              <div className="h-1.5 w-8 rounded-full bg-primary/20" />
              <div className="h-1.5 w-8 rounded-full bg-primary/20" />
              <div className="h-1.5 w-8 rounded-full bg-primary" />
            </div>
            <div className="w-10" aria-hidden="true" />
          </div>

          <div>
            <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Set up your profile
            </h1>
            <p className="text-base font-medium text-gray-500 dark:text-[#a69db9]">
              Customize how fans will see you on InnFomo.
            </p>
          </div>
        </div>

        <form className="flex flex-1 flex-col gap-6">
          <div className="mb-2 flex justify-center">
            <div className="group relative cursor-pointer">
              <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-surface-light transition-colors dark:border-border-dark dark:bg-[#2a2435]">
                <div className="flex flex-col items-center gap-1 text-gray-400 transition-colors group-hover:text-primary dark:text-gray-500">
                  <AddPhotoIcon className="h-8 w-8" />
                  <span className="text-xs font-medium">Upload</span>
                </div>
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg"
                aria-label="Edit avatar"
              >
                <EditIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-4 top-[14px] font-medium text-gray-400 dark:text-gray-500">
                @
              </span>
              <input
                type="text"
                placeholder="username"
                className="w-full rounded-xl border-transparent bg-surface-light px-9 py-3.5 font-medium text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:ring-0 dark:bg-[#2a2435] dark:text-white dark:placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
              Display Name
            </label>
            <input
              type="text"
              placeholder="e.g. Sarah Smith"
              className="w-full rounded-xl border-transparent bg-surface-light px-4 py-3.5 font-medium text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:ring-0 dark:bg-[#2a2435] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
              Primary Category
            </label>
            <div className="relative">
              <select className="w-full cursor-pointer appearance-none rounded-xl bg-surface-light px-4 py-3.5 font-medium text-gray-900 transition-all focus:border-primary focus:ring-0 dark:bg-[#2a2435] dark:text-white">
                <option value="">Select a category</option>
                <option value="art">Art &amp; Design</option>
                <option value="music">Music</option>
                <option value="gaming">Gaming</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="tech">Tech</option>
                <option value="fashion">Fashion</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-3.5 text-gray-400 dark:text-gray-500">
                <ExpandMoreIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
              Bio
            </label>
            <textarea
              rows={3}
              placeholder="Tell your fans a bit about yourself..."
              value={bio}
              onChange={handleBioChange}
              className="w-full resize-none rounded-xl border-transparent bg-surface-light px-4 py-3 font-medium text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:ring-0 dark:bg-[#2a2435] dark:text-white dark:placeholder:text-gray-500"
            />
            <div className="px-1 text-right text-xs text-gray-400 dark:text-gray-600">
              {bioCount}/150
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="ml-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
              Website Link
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-xl text-gray-400 dark:text-gray-500">
                <LinkIcon className="h-5 w-5" />
              </span>
              <input
                type="url"
                placeholder="https://website.com"
                className="w-full rounded-xl border-transparent bg-surface-light pl-11 pr-4 py-3.5 font-medium text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:ring-0 dark:bg-[#2a2435] dark:text-white dark:placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="mt-2 flex items-start gap-3 px-1">
            <div className="flex h-6 items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-5 w-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-primary dark:border-border-dark dark:bg-[#2a2435]"
              />
            </div>
            <label
              htmlFor="terms"
              className="pt-0.5 text-sm leading-tight text-gray-500 dark:text-gray-400"
            >
              I agree to InnFomo&apos;s{" "}
              <a className="font-semibold text-primary hover:underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="font-semibold text-primary hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <div className="mt-4 pb-4">
            <button
              type="button"
              className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-[0_4px_14px_0_rgba(108,43,238,0.39)] transition-transform active:scale-[0.98] hover:bg-primary/90"
            >
              <span
                className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"
                style={shimmerStyle}
                aria-hidden="true"
              />
              <span className="relative">Create Account</span>
            </button>
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

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10.75 16-4-4 4-4" />
    </svg>
  );
}

function AddPhotoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25v13.5M18.75 12H5.25" />
      <circle cx="12" cy="12" r="8.75" />
    </svg>
  );
}

function EditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.75 5.25 3 3L8.5 18.5l-3.5.75.75-3.5 10.25-10.5Z"
      />
    </svg>
  );
}

function ExpandMoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 9.5 5.25 5 5.25-5" />
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.75 15.25 7 17c-1.66 1.66-1.66 4.34 0 6 1.66 1.66 4.34 1.66 6 0l1.75-1.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.25 8.75 17 7c1.66-1.66 1.66-4.34 0-6-1.66-1.66-4.34-1.66-6 0L9.25 2.75"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 14.25 4.5-4.5" />
    </svg>
  );
}
