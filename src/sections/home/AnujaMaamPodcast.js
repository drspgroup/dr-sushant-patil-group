'use client'

import { useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'
import VideoModal from '@/components/shared/VideoModal'

const YOUTUBE_VIDEO = 'https://www.youtube.com/embed/dHXujVtvauQ'

export default function AnujaMaamPodcast() {
    const [activeVideo, setActiveVideo] = useState(null)

    return (
        <>
            <section className="relative z-10 bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                        {/* ── Left: content ── */}
                        <div>
                            <p className="mb-3 font-medium text-zinc-500 text-sm md:text-base lg:text-lg">
                                In Conversation
                            </p>
                            <h2 className="mb-4 font-black leading-tight tracking-tight text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                                Hear from Our Managing Director
                            </h2>
                            <p className="mb-8 max-w-md text-body text-zinc-500 text-sm md:text-base lg:text-lg">
                                Hear our Managing Director share the thinking behind our initiatives and what meaningful, skill-first education looks like in practice.
                            </p>
                            <a
                                href="https://www.youtube.com/watch?v=dHXujVtvauQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-700 transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-zinc-900 sm:px-6 sm:py-3 sm:text-xs"
                            >
                                Watch Full Podcast
                                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-zinc-300 overflow-hidden transition-colors duration-300 group-hover:bg-zinc-900/15">
                                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                                        <ArrowUpRight size={14} />
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                        <ArrowUpRight size={14} />
                                    </span>
                                </span>
                            </a>
                        </div>

                        {/* ── Right: video thumbnail ── */}
                        <button
                            onClick={() => setActiveVideo(YOUTUBE_VIDEO)}
                            className="group relative block w-full overflow-hidden rounded-2xl text-left"
                        >
                            <div className="relative aspect-video w-full">
                                <img
                                    src="/additional-images/podcast-thumbnail.webp"
                                    alt="Podcast with Adv. Anuja Sushant Patil"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 md:h-16 md:w-16">
                                        <Play size={24} fill="white" className="text-white ml-0.5" />
                                    </span>
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
            </section>

            {activeVideo && (
                <VideoModal
                    youtubeVideo={activeVideo}
                    onClose={() => setActiveVideo(null)}
                />
            )}
        </>
    )
}
