"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, type ChangeEvent, type FormEvent, type SVGProps } from "react";

export default function BrandProfilePage() {
  const router = useRouter();
  const [bio, setBio] = useState("");
  const [handle, setHandle] = useState("");

  const bioCount = useMemo(() => Math.min(bio.length, 150), [bio]);

  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value.slice(0, 150));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <main className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light pb-12 dark:bg-background-dark">
        <header className="sticky top-0 z-50 flex items-center justify-between bg-background-light/95 px-4 pb-2 pt-6 backdrop-blur-sm dark:bg-background-dark/95">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-200 dark:text-white dark:hover:bg-white/10"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex flex-1 items-center justify-center" aria-label="Progress: step 3 of 4">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
              <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
              <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(108,43,238,0.3)]" />
              <div className="h-1.5 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            </div>
          </div>
          <div className="size-10 shrink-0" aria-hidden="true" />
        </header>

        <div className="flex flex-1 flex-col px-6 pb-0">
          <div className="flex flex-col gap-2 pb-6 pt-4">
            <h1 className="text-[28px] font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Define Your Brand Identity
            </h1>
            <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
              Set up how fans and creators will see you on InnFomo.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-4">
            <div className="group relative cursor-pointer">
              <div
                className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-gray-200 bg-gray-300 bg-cover bg-center bg-no-repeat shadow-lg transition-transform group-hover:scale-105 dark:border-[#2b213a] dark:bg-[#2b213a]"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDK_BvLM-EA2wv83vtEuuM2b5MSfZ-WOVJjTqvuYZiNz39nNu21krFSnt2U2f2eivF_03rJ-P-YLXjBGPtpU8iSMg3ryCF8lzPudOSRvYIkUL379JMbZv8N1DzlgHbQrSVD6g41dRsZvSyjy2TMP4cQACBwwcac6vnEYbHg8PHxFYaKOEk9JSW37wy42BF6t7PN2dkr0MLkAfyIdDb8GXEqMSOMRCuUFuXR0_YMMuDHAAvpm7sN-VKjwum8unqCzy19rpUpBx4xBCpW")',
                }}
                aria-label="Brand logo"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 flex items-center justify-center rounded-full border-[3px] border-background-light bg-primary p-2 text-white shadow-md dark:border-background-dark"
                aria-label="Upload brand logo"
              >
                <CameraIcon className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-sm font-semibold text-primary">Upload Brand Logo</p>
          </div>

          <form id="brand-profile-form" className="flex flex-1 flex-col gap-5 pb-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="pl-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Brand Handle
              </label>
              <div className="relative">
                <AlternateEmailIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="brandname"
                  value={handle}
                  onChange={(event) => setHandle(event.target.value)}
                  className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-[#443267] dark:bg-[#221933] dark:text-white dark:placeholder-[#a492c9]"
                />
                {handle.trim().length > 0 ? (
                  <CheckIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="pl-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Display Name
              </label>
              <div className="relative">
                <BadgeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="e.g. Acme Official"
                  className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-[#443267] dark:bg-[#221933] dark:text-white dark:placeholder-[#a492c9]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="pl-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Category
              </label>
              <div className="relative">
                <CategoryIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <select className="w-full appearance-none rounded-full border border-gray-200 bg-white py-3.5 pl-11 pr-10 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-[#443267] dark:bg-[#221933] dark:text-white">
                  <option value="">Select industry</option>
                  <option value="fashion">Fashion &amp; Apparel</option>
                  <option value="tech">Technology &amp; Gadgets</option>
                  <option value="lifestyle">Lifestyle &amp; Wellness</option>
                  <option value="gaming">Gaming &amp; Entertainment</option>
                </select>
                <ExpandMoreIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="pl-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Bio
              </label>
              <textarea
                rows={3}
                placeholder="Tell fans a little about your brand..."
                value={bio}
                onChange={handleBioChange}
                className="min-h-[100px] w-full resize-none rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-900 transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-[#443267] dark:bg-[#221933] dark:text-white dark:placeholder-[#a492c9]"
              />
              <p className="px-1 text-right text-xs text-gray-400 dark:text-gray-500">{bioCount}/150</p>
            </div>

            <div className="mt-2 flex items-start gap-3 px-1">
              <div className="relative flex items-center">
                <input
                  id="brand-terms"
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 bg-white transition-all checked:border-primary checked:bg-primary focus:ring-0 dark:border-[#443267] dark:bg-[#221933]"
                />
                <CheckIcon className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
              </div>
              <label
                htmlFor="brand-terms"
                className="cursor-pointer select-none text-sm leading-snug text-gray-500 dark:text-gray-400"
              >
                I agree to InnFomo’s{" "}
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

        <div className="mt-8 w-full px-6 pb-6">
          <button
            type="submit"
            form="brand-profile-form"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-lg font-bold text-white shadow-[0_8px_20px_-6px_rgba(108,43,238,0.5)] transition-transform duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]"
          >
            <span>Create Account</span>
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

function AlternateEmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5c-4 0-7 2.65-7 7s3.5 7 7 7c3.5 0 6-2.5 6-6.5V11c0-1-.5-1.5-1.5-1.5S15 10 15 11v5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 9.5 12 13l4.5-3.5" />
    </svg>
  );
}

function BadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.75 4.75h8.5a1.5 1.5 0 0 1 1.5 1.5v11.5l-6-3.25-6 3.25V6.25a1.5 1.5 0 0 1 1.5-1.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.75h5M9.5 12h5" />
    </svg>
  );
}

function CategoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 2.5 4.5H9.5L12 3Z" />
      <rect x="5" y="10" width="5" height="5" rx="1.2" />
      <rect x="14" y="10" width="5" height="5" rx="1.2" />
      <rect x="9" y="16" width="6" height="5" rx="1.2" />
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
