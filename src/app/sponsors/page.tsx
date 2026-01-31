import Image from "next/image";
import Container from "@/components/Container";

type Sponsor = { name: string; logo: string };

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
            ],
        },
        {
            tier: "Silver Sponsors",
            amount: "$1500",
            sponsors: [
                { name: "JRoberts Defence", logo: "/images/sponsors/JRoberts.png" },
                { name: "FIRST Canada", logo: "/images/sponsors/FIRSTCanada.png" },
            ],
        },
        {
            tier: "Bronze Sponsors",
            amount: "$500",
            sponsors: [
                { name: "Right Tech Auto Repair", logo: "/images/sponsors/righttech.jpg" },
                { name: "S&C Electric Canada", logo: "/images/sponsors/s&c.png" },
            ],
        },
    ];

function LogoCard({ sponsor }: { sponsor: Sponsor }) {
    return (
        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-primary/50 hover:bg-white/10">
            <div className="relative h-16 w-56 sm:h-20 sm:w-64">
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
                        Sponsors make our season possible—tools, parts, travel, and outreach.
                        Thank you for supporting Team 854.
                    </p>

                    <div className="mt-10 space-y-12">
                        {tiers.map((t) => (
                            <section key={t.tier}>
                                <div className="text-center">
                                    <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                                        {t.tier}
                                    </h2>
                                    <div className="mt-2 text-sm text-zinc-300">
                                        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1">
                                            {t.amount}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {t.sponsors.map((s) => (
                                        <LogoCard key={s.name} sponsor={s} />
                                    ))}
                                </div>
                            </section>
                        ))}

                        <div className="rounded-2xl border border-primary/25 bg-black/40 p-6">
                            <h3 className="text-base font-semibold text-primary">Sponsor Us</h3>
                            <p className="mt-2 max-w-3xl text-sm text-zinc-300">
                                Interested in supporting the team? We can share a sponsorship
                                package and discuss benefits for your organization.
                            </p>
                            <div className="mt-4 text-sm text-zinc-300">
                                Email:{" "}
                                <span className="font-semibold text-primary">
                                    sponsors@yourteamdomain.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
