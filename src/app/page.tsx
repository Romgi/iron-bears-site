import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-primary/50 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight group-hover:text-primary transition">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-300">{desc}</p>
        </div>
        <span className="text-sm text-zinc-400 transition group-hover:text-primary">
          →
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute top-24 left-1/3 h-64 w-80 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <Container>
          <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Robotics • Community • Competition
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-primary">FRC 854</span> — Iron Bears Robotics
              </h1>

              <p className="mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">
                We design, build, and program competitive robots while developing
                real engineering skills, leadership, and community impact.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-primary-dark"
                >
                  Learn about the team
                </Link>

                <Link
                  href="/sponsors"
                  className="inline-flex items-center justify-center rounded-xl border border-primary/50 bg-black px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
                >
                  Sponsor us
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Card title="About" desc="Mission, values, and what we do." href="/about" />
                <Card title="Sponsors" desc="Supporters and ways to partner." href="/sponsors" />
                <Card title="History" desc="Robots by year + game archive." href="/history" />
                <Card title="Contact" desc="Reach out to collaborate or visit." href="/contact" />
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-primary/35 bg-white/5">
                <Image
                  src="/images/about/hero.jpg"
                  alt="Team 854 robot on the field"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-3 text-xs text-zinc-400">
                <span className="text-primary font-semibold">In action</span> • Team robot on the field
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-2">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight">
              What is <span className="text-primary">FIRST</span> Robotics?
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-zinc-300">
              FIRST Robotics Competition is a high-school robotics league where
              teams build large robots to compete in a new game each season—like
              a sport, but with engineering.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-primary/25 bg-black/40 p-4">
                <div className="text-sm font-semibold text-primary">Build</div>
                <div className="mt-1 text-sm text-zinc-300">
                  Mechanical design, CAD, fabrication, wiring.
                </div>
              </div>

              <div className="rounded-xl border border-primary/25 bg-black/40 p-4">
                <div className="text-sm font-semibold text-primary">Code</div>
                <div className="mt-1 text-sm text-zinc-300">
                  Controls, autonomy, vision, and strategy.
                </div>
              </div>

              <div className="rounded-xl border border-primary/25 bg-black/40 p-4">
                <div className="text-sm font-semibold text-primary">Lead</div>
                <div className="mt-1 text-sm text-zinc-300">
                  Outreach, sponsorships, teamwork, and impact.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
