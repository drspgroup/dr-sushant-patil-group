import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-12 text-center md:pt-28 lg:pt-32 xl:pt-36">
      <h1 className="mb-4 text-2xl font-bold text-zinc-800 md:text-3xl">
        404 - Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-body text-zinc-500 text-sm md:text-base">
        Looks like you're lost. The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-700 transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-zinc-900"
      >
        Back to Home
      </Link>
    </main>
  )
}
