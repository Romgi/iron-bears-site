import Image from "next/image";
import Container from "@/components/Container";

type Sponsor = {
    name: string;
    logo: string;
    url: string;
};

const tiers: Array<{
    tier: string;
    amount: string;
    sponsors: Sponsor[];
}> = [
        {
            tier: "Gold Sponsors",
            amount: "$3000+",
            sponsors: [
                {
                    name: "Optimist International",
                    logo: "/images/sponsors/optimist.png",
                    url: "https://www.optimist.org",
                },
                {
                    name: "Gene Haas Foundation",
                    logo: "/images/sponsors/haas.png",
                    url: "https://www.ghaasfoundation.org",
                },
                {
                    name: "Hatch",
                    logo: "/images/sponsors/hatch.png",
                    url: "https://www.hatch.com",
                },
            ],
        },
        {
            tier: "Silver Sponsors",
            amount: "$1500+",
            sponsors: [
                {
                    name: "JRoberts Defence",
                    logo: "/images/sponsors/jroberts.png",
                    url: "https://www.jrobertsdefence.com",
                },
                {
                    name: "FIRST Canada",
                    logo: "/images/sponsors/firstcanada.png",
                    url: "https://www.firstcanada.org",
                },
                {
                    name: "Studio Black Box",
                    logo: "/images/sponsors/studioblackbox.png",
                    url: "https://www.studioblackbox.com",
                },
                {
                    name: "HamiCo",
                    logo: "/images/sponsors/hamico.png",
                    url: "https://www.team854.org/sponsors",
                },
                {
                    name: "Wellness Tree Therapy",
                    logo: "/images/sponsors/wellnesstree.png",
                    url: "https://www.team854.org/sponsors",
                },
            ],
        },
        {
            tier: "Bronze Sponsors",
            amount: "$500+",
            sponsors: [
                {
                    name: "Right Tech Auto Repair",
                    logo: "/images/sponsors/righttech.png",
                    url: "https://righttech.ca",
                },
                {
                    name: "S&C Electric Canada",
                    logo: "/images/sponsors/sandc.png",
                    url: "https://www.sandc.com",
                },
            ],
        },
    ];

const additionalSponsors: Sponsor[] = [
    {
        name: "Frontier Metrology",
        logo: "/images/sponsors/frontier.png",
        url: "https://www.frontiermetrology.com",
    },
    {
        name: "Baskin Robbins",
        logo: "/images/sponsors/baskinrobbins.png",
        url: "https://www.baskinrobbins.com",
    },
    {
        name: "TDSB",
        logo: "/images/sponsors/tdsb.png",
        url: "https://www.tdsb.on.ca",
    },
    {
        name: "Martingrove Collegiate Institute",
        logo: "/images/sponsors/martingrove.png",
        url: "https://schoolweb.tdsb.on.ca/martingrove",
    },
];

function LogoCard({ sponsor }: { sponsor: Sponsor }) {
    return (
        <a
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${sponsor.name} website`}
            className="group flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 transition
                 hover:border-primary/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60"
        >
            <div className="relative h-16 w-56 sm:h-20 sm:w-72">
                <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
                    className="object-contain transition group-hover:scale-[1.03]"
                />
            </div>
        </a>
    );
}

export default function SponsorsPage() {
    return (
        <main>
            <Container>
                <div className="py-12 sm:py-16">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Sponsors
                    </h1>

                    <p className="mt-4 max-w-3xl text-zinc-300">
                        Sponsors make our season possible — supporting tools, parts, funding,
                        and outreach. Thank you for supporting{" "}
                        <span className="text-primary font-semibold">Team 854</span>.
                    </p>

                    <div className="mt-12 space-y-16">
                        {tiers.map((t) => (
                            <section key={t.tier}>
                                <div className="text-center">
                                    <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                                        {t.tier}
                                    </h2>

                                    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-primary/70" />

                                    <div className="mt-3 text-sm text-zinc-200">
                                        <span className="rounded-full border border-primary/60 bg-primary/15 px-4 py-1 font-semibold text-primary">
                                            {t.amount}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {t.sponsors.map((s) => (
                                        <LogoCard key={s.name} sponsor={s} />
                                    ))}
                                </div>
                            </section>
                        ))}

                        <section>
                            <div className="text-center">
                                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                                    Additional Supporters
                                </h2>

                                <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-primary/70" />
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {additionalSponsors.map((s) => (
                                    <LogoCard key={s.name} sponsor={s} />
                                ))}
                            </div>
                        </section>

                        <div className="rounded-2xl border border-primary/35 bg-black/40 p-6">
                            <h3 className="text-base font-semibold text-primary">
                                Become a Sponsor
                            </h3>
                            <p className="mt-2 max-w-3xl text-sm text-zinc-300">
                                Interested in supporting Iron Bears Robotics? We would love to
                                partner with you and share a sponsorship package outlining
                                benefits and impact. If you would like to contribute your skills
                                to the team, we are always looking for new mentors!
                            </p>
                            <div className="mt-4 text-sm text-zinc-300">
                                Email:{" "}
                                <span className="font-semibold text-primary">
                                    mci.robotics@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
