import Container from "@/components/Container";

export default function AboutPage() {
    return (
        <main>
            <Container>
                <div className="py-12 sm:py-16">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        About
                    </h1>
                    <p className="mt-4 max-w-3xl text-zinc-300">
                        FRC 854 (Iron Bears) is a student-led robotics team that designs,
                        builds, and programs competitive robots each season. Our focus is
                        skill-building, mentorship, and using engineering to create positive
                        community impact.
                    </p>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h2 className="text-base font-semibold">Mission</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Build great robots and better people through teamwork,
                                engineering, and competition.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h2 className="text-base font-semibold">Values</h2>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                                <li>Curiosity & learning</li>
                                <li>Craftsmanship</li>
                                <li>Respect and inclusion</li>
                                <li>Community service</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h2 className="text-base font-semibold">What We Do</h2>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                                <li>CAD and fabrication</li>
                                <li>Electronics and wiring</li>
                                <li>Programming + autonomy</li>
                                <li>Outreach + sponsorship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
