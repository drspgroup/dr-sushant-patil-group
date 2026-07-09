export default function WariSection() {

    return (
        <>
            <section className="relative z-10 bg-[#F4F3F0] px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                        {/* ── Left: content ── */}
                        <div>
                            <p className="mb-3 font-medium text-zinc-500 text-sm md:text-base lg:text-lg">
                                Wari Seva 2026
                            </p>
                            <h2 className="mb-4 font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                                In Service of the Wari
                            </h2>
                            <p className="mb-8 max-w-md text-body text-zinc-500 text-sm md:text-base lg:text-lg">
                                The Dr. Sushant Patil Group stands in service of the sacred Pandharpur Wari — supporting the millions of devotees who make the pilgrimage each year.
                            </p>
                        </div>

                        {/* ── Right: video thumbnail ── */}
                        <button
                            // onClick={() => setActiveVideo(YOUTUBE_VIDEO)}
                            className="group relative block w-full overflow-hidden rounded-2xl text-left"
                        >
                            <div className="relative aspect-video w-full">
                                <img
                                    src="/vari-seva-poster.webp"
                                    alt="Podcast with Adv. Anuja Sushant Patil"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                                />
                            </div>
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}
