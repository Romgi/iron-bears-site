import Image from "next/image";
import Container from "@/components/Container";

type Season = {
    year: number;
    game: string;
    image: string;
};

const seasons: Season[] = [
    { year: 2026, game: "REBUILT - Coming Soon!", image: "/images/history/2026.jpg" },
    { year: 2025, game: "REEFSCAPE", image: "/images/history/2025.jpg" },
    { year: 2024, game: "CRESCENDO", image: "/images/history/2024.jpg" },
    { year: 2020, game: "Infinite Recharge", image: "/images/history/2020.jpg" },
    { year: 2019, game: "Destination: Deep Space", image: "/images/history/2019.jpg" },
    { year: 2018, game: "Power Up", image: "/images/history/2018.jpg" },
    { year: 2017, game: "Steamworks", image: "/images/history/2017.jpg" },
    { year: 2016, game: "Stronghold", image: "/images/history/2016.jpg" },
    { year: 2015, game: "Recycle Rush", image: "/images/history/2015.jpg" },
    { year: 2012, game: "Rebound Rumble", image: "/images/history/2012.jpg" },
    { year: 2009, game: "Lunacy", image: "/images/history/2009.jpg" },
    { year: 2007, game: "Rack 'n Roll", image: "/images/history/2007.jpg" },
    { year: 2003, game: "Stack Attack", image: "/images/history/2003.jpg" },
];

export default function HistoryPage() {
    return (
        <main>
            <Container>
                <div className="py-12 sm:py-16">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        History
                    </h1>

                    <p className="mt-4 max-w-3xl text-zinc-300">
                        Our robots by season. Click a year to view Team 854 on{" "}
                        <span className="text-primary font-semibold">The Blue Alliance</span>.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {seasons.map((s) => {
                            const isComingSoon = s.year === 2026;

                            // Blue Alliance link for each year
                            const tbaUrl = `https://www.thebluealliance.com/team/854/${s.year}`;

                            // Shared tile styling
                            const tileClasses =
                                "overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition";

                            // If it's coming soon, disable link behavior
                            if (isComingSoon) {
                                return (
                                    <div
                                        key={s.year}
                                        className={`${tileClasses} opacity-60 cursor-not-allowed`}
                                    >
                                        <div className="relative h-44 w-full sm:h-48">
                                            <Image
                                                src={s.image}
                                                alt={`Team 854 robot from ${s.year}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="border-t border-white/10 p-4">
                                            <div className="flex items-baseline justify-between gap-3">
                                                <div className="text-sm font-semibold text-primary">
                                                    {s.year}
                                                </div>
                                                <div className="text-sm font-semibold">{s.game}</div>
                                            </div>

                                            <div className="mt-2 text-xs text-zinc-400">
                                                Blue Alliance page not available yet
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            // Normal clickable tile
                            return (
                                <a
                                    key={s.year}
                                    href={tbaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${tileClasses} hover:border-primary/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60`}
                                    aria-label={`View Team 854 ${s.year} season on The Blue Alliance`}
                                >
                                    <div className="relative h-44 w-full sm:h-48">
                                        <Image
                                            src={s.image}
                                            alt={`Team 854 robot from ${s.year}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="border-t border-white/10 p-4">
                                        <div className="flex items-baseline justify-between gap-3">
                                            <div className="text-sm font-semibold text-primary">
                                                {s.year}
                                            </div>
                                            <div className="text-sm font-semibold">{s.game}</div>
                                        </div>

                                        <div className="mt-2 text-xs text-zinc-400">
                                            View season on The Blue Alliance →
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </main>
    );
}
