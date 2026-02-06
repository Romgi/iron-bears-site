import Image from "next/image";
import Container from "@/components/Container";

type Sponsor = {
    name: string;
    logo: string;
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
                { name: "Optimist International", logo: "/images/sponsors/optimist.png" },
                { name: "Gene Haas Foundation", logo: "/images/sponsors/haas.png" },
                { name: "Hatch", logo: "/images/sponsors/hatch.png" },
            ],
        },
        {
            tier: "Silver Sponsors",
            amount: "$1500+",
            sponsors: [
                { name: "JRoberts Defence", logo: "/images/sponsors/JRoberts.png" },
                { name: "FIRST Canada", logo: "/images/sponsors/FIRSTCanada.png" },
                { name: "Studio Black Box", logo: "/images/sponsors/studioblackbox.png" },
                { name: "HamiCo", logo: "/images/sponsors/hamico.png" },
                { name: "Wellness Tree", logo: "/images/sponsors/wellnesstree.png" },
            ],
        },
        {
            tier: "Bronze Sponsors",
            amount: "$500+",
            sponsors: [
                { name: "Right Tech Auto Repair", logo: "/images/sponsors/righttech.png" },
                { name: "S&C Electric Canada", logo: "/images/sponsors/s&c.png" },
            ],
        },
    ];

const additionalSponsors: Sponsor[] = [
    { name: "Frontier Metrology", logo: "/images/sponsors/frontier.png" },
    { name: "Baskin Robbins", logo: "/images/sponsors/BaskinRobbins.png" },
    { name: "TDSB", logo: "/images/sponsors/tdsb.png" },
];

function LogoCard({ sponsor }: { sponsor: Sponsor }) {
    return (
        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-primary/60 hover:bg-white/10">
            <div className="relative h-16 w-56 sm:h-20 sm:w-72">
                <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain"
                />
            </div>
        </div>
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
                        and outreach. Thank you for supporting <span className="text-primary font-semibold">Team 854</span>.
                    </p>

                    <div className="mt-12 space-y-16">
                        {/* Tiered sponsors */}
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

                        {/* Additional supporters */}
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

                        {/* Call to action */}
                        <div className="rounded-2xl border border-primary/35 bg-black/40 p-6">
                            <h3 className="text-base font-semibold text-primary">
                                Become a Sponsor
                            </h3>
                            <p className="mt-2 max-w-3xl text-sm text-zinc-300">
                                Interested in supporting Iron Bears Robotics? We would love to
                                partner with you and share a sponsorship package outlining
                                benefits and impact. If you would like to contribute your skills to the team, we are always looking for new mentors!
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
