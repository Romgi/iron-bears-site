import Container from "@/components/Container";

const milestones = [
    { year: "Founded", text: "Team formed and began competing in FIRST Robotics." },
    { year: "Growth", text: "Expanded student roles, mentors, and outreach." },
    { year: "Competition", text: "Built stronger robots, improved strategy and scouting." },
    { year: "Today", text: "Focused on performance, learning, and community impact." },
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
                        A quick overview of our team’s journey. (Swap these placeholders with
                        real season highlights, awards, and memorable builds.)
                    </p>

                    <div className="mt-10 space-y-4">
                        {milestones.map((m) => (
                            <div
                                key={m.year}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <div className="text-sm font-semibold text-blue-300">{m.year}</div>
                                <div className="mt-1 text-sm text-zinc-300">{m.text}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950/40 p-6">
                        <h2 className="text-base font-semibold">Add a Season Archive</h2>
                        <p className="mt-2 text-sm text-zinc-300">
                            You can list each year with the game name, robot features, results,
                            and links to photos/videos.
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}
