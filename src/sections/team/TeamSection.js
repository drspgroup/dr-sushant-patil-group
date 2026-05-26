import Image from 'next/image'
import { teamGroups } from '@/data/team'

function MemberCard({ member }) {
  return (
    <div className="member-card">
      {/* Photo slot — dark placeholder if no photo */}
      <div className="relative mb-3 md:mb-3.5 w-full overflow-hidden bg-[#1a1728]">
        <div className="aspect-[3/4] w-full relative">
          {member.photo && (
            <Image
              src={member.photo}
              alt={member.name}
              fill

              className="object-cover"
            />
          )}
        </div>
      </div>
      {/* Name + role */}
      {/* text-[1.9rem] leading-[1.1] tracking-tight md:text-[2.4rem] */}
      <p className="text-sm md:text-base lg:text-lg font-medium leading-snug text-zinc-900">{member.name}</p>
      <p className="mt-1 text-sm md:text-base lg:text-lg font-medium leading-snug text-zinc-500">
        {member.role}
      </p>
    </div>
  )
}

export default function TeamSection() {
  return (
    <>
      {/* ── Team Section ── */}
      <section className="relative z-10 border-b border-zinc-200 bg-white px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16">
        <div className="mx-auto max-w-7xl space-y-10 md:space-y-14 lg:space-y-16">

          {teamGroups.map((group) => (
            <div key={group.id}>

              {/* Group label */}
              <h3 className="mb-5 md:mb-7 border-b border-zinc-200 pb-4 font-extrabold leading-snug uppercase text-xl md:text-2xl lg:text-3xl text-zinc-900">
                {group.label}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
                  {group.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>

            </div>
          ))}

        </div>
      </section>
    </>
  )
}
