import heroImage from '../assets/gubat-surf-hero.png'
import {
  beginnings,
  destination,
  foundation,
  growthTimeline,
  philosophy,
  seasonMonths,
  stats,
  youthMentorship,
  youthStats,
} from '../data/siteContent'

const sectionWidth =
  'mx-auto w-[min(1180px,calc(100%_-_28px))] sm:w-[min(1180px,calc(100%_-_36px))] md:w-[min(1180px,calc(100%_-_48px))]'
const kicker = 'text-xs font-bold uppercase tracking-[0.12em] text-[#0f776f]'
const heading =
  'text-[clamp(38px,6vw,76px)] font-bold leading-none text-[#063f42]'
const lead = 'text-[clamp(18px,2vw,23px)] leading-relaxed'
const sectionPadding = 'py-14 sm:py-16 md:py-24'
const scrollTarget = ''

function Layers() {
  return (
    <>
      <section
        className="relative isolate grid min-h-[88svh] items-end justify-start px-4 pb-12 pt-32 sm:px-5 sm:pt-36 md:min-h-[86svh] md:items-center md:px-8 md:pb-16 md:pt-28"
        id="top"
      >
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          src={heroImage}
          alt="Gentle surf rolling onto a quiet tropical beach with surfboards on the sand"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(251,247,232,0.34),rgba(251,247,232,0.9)_66%,rgba(246,239,217,0.98)),linear-gradient(90deg,rgba(251,247,232,0.74),rgba(251,247,232,0.18))] md:bg-[linear-gradient(90deg,rgba(251,247,232,0.92),rgba(251,247,232,0.74)_32%,rgba(251,247,232,0.18)_68%),linear-gradient(180deg,rgba(251,247,232,0.54),rgba(251,247,232,0.02)_42%,rgba(246,239,217,0.84))]"></div>
        <div className="w-full max-w-[700px] md:ml-[clamp(0px,6vw,88px)] xl:ml-[220px]">
          <p className={kicker}>Riding the Waves of Change</p>
          <h1 className="mt-3 mb-5 max-w-[10ch] text-[clamp(46px,14vw,64px)] font-bold leading-[0.94] text-[#063f42] sm:text-[72px] md:text-[clamp(58px,9vw,120px)] md:leading-[0.92]">
            Gubat Surf School
          </h1>
          <p className="max-w-2xl text-[17px] leading-snug text-[#063f42]/80 sm:text-[19px] md:text-[clamp(20px,2vw,28px)] md:leading-tight">
            From four local surfers in 2010 to a thriving community of over 70
            members, Gubat Surf School is a movement rooted in community,
            environmental stewardship, and the transformative power of the
            Pacific waves in Sorsogon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#063f42] px-5 text-[15px] font-semibold text-[#fbf7e8] no-underline shadow-[0_18px_50px_rgba(6,63,66,0.22)] transition hover:-translate-y-0.5"
              href="#beginnings"
            >
              Read the story
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#fbf7e8]/80 px-5 text-[15px] font-semibold text-[#063f42] no-underline shadow-[inset_0_0_0_1px_rgba(6,63,66,0.14)] transition hover:-translate-y-0.5"
              href="#youth"
            >
              Youth mentorship
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-4 py-5 sm:px-5 sm:py-6 md:px-8 md:py-8"
        aria-label="Gubat Surf School highlights"
      >
        <div className={`${sectionWidth} grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#eadfbd] bg-[#eadfbd] md:grid-cols-4`}>
          {stats.map((item) => (
            <div
              className="bg-white p-5 text-center sm:p-6 md:min-h-36 md:p-8"
              key={item.value}
            >
              <strong className="block text-[clamp(30px,4vw,52px)] leading-none text-[#063f42]">
                {item.value}
              </strong>
              <span className="mx-auto mt-2 block max-w-48 text-[13px] leading-snug text-[#4f6665] sm:mt-3 sm:text-[15px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${sectionWidth} ${sectionPadding} ${scrollTarget}`}
        id="beginnings"
      >
        <p className={kicker}>Our Story</p>
        <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] md:gap-[clamp(32px,7vw,92px)]">
          <h2 className={`${heading} mt-3`}>
            Humble Beginnings: The First Four
          </h2>
          <p className={lead}>
            In 2010, just four surfers hit the water in Gubat, Sorsogon, driven
            by local passion for the Pacific swells and a shared love for the
            ocean.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:grid-cols-4 md:gap-4">
          {beginnings.map((card) => (
            <article
              className="rounded-lg border border-[#eadfbd] bg-[#fbf7e8]/80 p-5 md:min-h-48 md:p-6"
              key={card.title}
            >
              <h3 className="text-[22px] font-semibold leading-tight text-[#063f42]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed">{card.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-[#eadfbd] bg-[#fbf7e8]/85 p-5 md:mt-8 md:p-6">
          <div className="mb-5 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <h3 className="text-xl font-semibold text-[#063f42]">
              Growth Journey
            </h3>
            <p className="text-sm text-[#4f6665]">
              From first waves to a growing local association.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
            {growthTimeline.map((item, index) => (
              <div className="relative" key={item.label}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white ${item.tone}`}
                  >
                    {index + 1}
                  </span>
                  <span className="hidden h-px flex-1 bg-[#eadfbd] md:block"></span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0f776f]">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-[#063f42]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`border-t border-[#eadfbd] bg-[#fbf7e8]/55 ${scrollTarget}`}
        id="foundation"
      >
        <div className={`${sectionWidth} ${sectionPadding}`}>
          <p className={kicker}>Building the Foundation</p>
          <h2 className={`${heading} mt-3 max-w-4xl`}>
            A structured local presence for safe learning.
          </h2>
          <p className={`${lead} mt-8 max-w-3xl`}>
            GSSA was formalized to share the stoke with visitors and build a
            safe, welcoming space for learning on Gubat's sandy-bottom beach.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:grid-cols-4 md:gap-4">
            {foundation.map((card) => (
              <article
                className="rounded-lg border border-[#eadfbd] bg-[#f6efd9]/70 p-5 md:p-6"
                key={card.title}
              >
                <h3 className="text-[22px] font-semibold leading-tight text-[#063f42]">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`grid items-center gap-8 bg-[linear-gradient(135deg,rgba(6,63,66,0.96),rgba(15,119,111,0.9)),linear-gradient(180deg,#063f42,#2b9a8f)] px-4 py-14 text-white sm:px-5 sm:py-16 md:grid-cols-[minmax(0,0.78fr)_minmax(420px,1fr)] md:gap-10 md:px-[max(24px,calc((100vw_-_1180px)/2))] md:py-24 ${scrollTarget}`}
        id="destination"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">
            The Rise of a Surfing Destination
          </p>
          <h2 className="mt-3 text-[clamp(38px,6vw,76px)] font-bold leading-none">
            Gubat Bay gains recognition.
          </h2>
          <p className="mt-6 text-[clamp(18px,2vw,23px)] leading-relaxed text-white/80">
            Surfing season peaks from October to March with consistent Pacific
            swells that draw enthusiasts from across the region.
          </p>
        </div>
        <div className="grid gap-3">
          {destination.map((item) => (
            <div
              className="rounded-lg border border-white/20 bg-white/10 p-5 text-base font-semibold leading-snug text-white"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="md:col-span-2">
          <div className="rounded-lg border border-white/20 bg-white/10 p-5 md:p-6">
            <div className="mb-6 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
              <h3 className="text-xl font-semibold text-white">
                October to March Surf Window
              </h3>
              <p className="text-sm text-white/65">
                Relative swell consistency, not a forecast.
              </p>
            </div>
            <div className="grid grid-cols-2 items-end gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {seasonMonths.map((item) => (
                <div className="grid gap-3" key={item.month}>
                  <div className="flex h-36 items-end rounded-md bg-white/10 p-2 sm:h-40 md:h-48">
                    <div
                      className={`${item.height} w-full rounded bg-gradient-to-t from-[#d98b3a] to-[#fbf7e8]`}
                    ></div>
                  </div>
                  <div className="text-center">
                    <strong className="block text-sm text-white">{item.month}</strong>
                    <span className="text-xs text-white/60">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${sectionWidth} ${sectionPadding} ${scrollTarget}`}
        id="philosophy"
      >
        <p className={kicker}>Our Philosophy</p>
        <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] md:gap-[clamp(32px,7vw,92px)]">
          <h2 className={`${heading} mt-3`}>A community-driven philosophy.</h2>
          <p className={lead}>
            At GSSA, surfing is more than a sport. It is a vehicle for life
            lessons, discipline, and respect.
          </p>
        </div>
        <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4">
          {philosophy.map((card) => (
            <article
              className="rounded-lg border border-[#eadfbd] bg-[#fbf7e8] p-5 md:p-6"
              key={card.title}
            >
              <h3 className="text-[22px] font-semibold leading-tight text-[#063f42]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`bg-[#063f42] px-4 py-14 text-white sm:px-5 sm:py-16 md:px-[max(24px,calc((100vw_-_1180px)/2))] md:py-24 ${scrollTarget}`}
        id="youth"
      >
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/80">
          Youth & Mentorship
        </p>
        <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] md:gap-[clamp(32px,7vw,92px)]">
          <h2 className="mt-3 text-[clamp(38px,6vw,76px)] font-bold leading-none">
            Empowering the next generation.
          </h2>
          <p className="text-[clamp(18px,2vw,23px)] leading-relaxed text-white/75">
            GSSA's mentorship model treats young surfers like family members,
            transforming the sport into a powerful path for personal growth and
            life lessons.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 lg:grid-cols-4">
          {youthStats.map((item) => (
            <div
              className="rounded-lg border border-white/15 bg-white/10 p-5 md:p-6"
              key={item.label}
            >
              <strong className="block text-4xl leading-none md:text-5xl">{item.value}</strong>
              <span className="mt-3 block text-xs font-medium uppercase tracking-[0.12em] text-white/65 md:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {youthMentorship.map((item) => (
            <article
              className="rounded-lg border border-white/15 bg-white/[0.06] p-5"
              key={item.title}
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid min-h-[46svh] place-items-center px-4 py-14 text-center sm:px-5 sm:py-16 md:py-24">
        <div className="max-w-3xl">
          <p className={kicker}>Community Impact</p>
          <h2 className={`${heading} mt-3`}>
            From a few friends to a movement.
          </h2>
          <p className={`${lead} mx-auto mt-6`}>
            What started as four friends chasing swells became the foundation of
            a community-driven surf movement in the Bicol region.
          </p>
          <a
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#063f42] px-5 text-[15px] font-semibold text-[#fbf7e8] no-underline shadow-[0_18px_50px_rgba(6,63,66,0.22)] transition hover:-translate-y-0.5"
            href="https://maps.app.goo.gl/ThDmhrGwNE2oKgHi8"
            target="_blank"
            rel="noreferrer"
          >
            View location
          </a>
        </div>
      </section>
    </>
  )
}

export default Layers
