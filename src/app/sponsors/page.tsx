import Container from "@/components/Container";

const sponsorTiers = [
    {
        tier: "Platinum",
        perks: ["Largest logo placement", "Robot + pit branding", "Event shout-outs"],
    },
    {
        tier: "Gold",
        perks: ["Large logo placement", "Social media features", "Newsletter mention"],
    },
    {
        tier: "Silver",
        perks: ["Logo placement", "Thank-you post", "Website listing"],
    },
    {
        tier: "Bronze",
        perks: ["Website listing", "Team thank-you", "Sponsor certificate"],
    },
] as const;

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
                        If you’d like to support the team, we’d love to partner with you.
                    </p>

                    <div className="mt-10 grid gap-4 lg:grid-cols-2">
                        {sponsorTiers.map((t) => (
                            <div
                                key={t.tier}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <h2 className="text-base font-semibold">{t.tier} Tier</h2>
                                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                                    {t.perks.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950/40 p-6">
                        <h2 className="text-base font-semibold">How to Sponsor</h2>
                        <p className="mt-2 max-w-3xl text-sm text-zinc-300">
                            Email us to request a sponsorship package, discuss tier benefits,
                            or arrange in-kind donations (materials, machining, electronics,
                            software, etc.).
                        </p>
                        <div className="mt-4 text-sm text-zinc-300">
                            Contact:{" "}
                            <span className="font-medium text-white">
                                sponsors@yourteamdomain.com
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
