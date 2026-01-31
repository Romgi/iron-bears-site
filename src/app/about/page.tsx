import Image from "next/image";
import Container from "@/components/Container";

export default function AboutPage() {
    return (
        <main>
            <Container>
                <div className="py-12 sm:py-16">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        About <span className="text-primary">Team 854</span>
                    </h1>

                    <p className="mt-4 max-w-3xl text-zinc-300">
                        FRC 854 Iron Bears is a student-led robotics team that designs,
                        builds, and programs competitive robots each season. We focus on
                        skill-building, mentorship, and using engineering to create positive
                        community impact.
                    </p>

                    <div className="mt-10 grid gap-4 lg:grid-cols-3">
                        <div className="rounded-2xl border border-primary/25 bg-white/5 p-6">
                            <h2 className="text-base font-semibold text-primary">Mission</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Build great robots and better people through teamwork,
                                engineering, and competition.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-primary/25 bg-white/5 p-6">
                            <h2 className="text-base font-semibold text-primary">Values</h2>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                                <li>Curiosity & learning</li>
                                <li>Craftsmanship</li>
                                <li>Respect and inclusion</li>
                                <li>Community service</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-primary/25 bg-white/5 p-6">
                            <h2 className="text-base font-semibold text-primary">What We Do</h2>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                                <li>CAD and fabrication</li>
                                <li>Electronics and wiring</li>
                                <li>Programming + autonomy</li>
                                <li>Outreach + sponsorship</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 lg:grid-cols-3">
                        {[
                            {
                                src: "/images/about/teamphoto.jpg",
                                alt: "Team 854 group photo",
                                label: "Team",
                            },
                            {
                                src: "/images/about/demonstration.jpg",
                                alt: "CRESCENDO robot showcase",
                                label: "Community",
                            },
                            {
                                src: "/images/about/assembly1.jpg",
                                alt: "REEFSCAPE robot assembly",
                                label: "Build season",
                            },
                        ].map((img) => (
                            <div
                                key={img.src}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-primary/45"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1400}
                                    height={900}
                                    className="h-56 w-full object-cover sm:h-64"
                                />
                                <div className="border-t border-white/10 p-4">
                                    <div className="text-sm font-semibold text-primary">
                                        {img.label}
                                    </div>
                                    <div className="mt-1 text-xs text-zinc-400">{img.alt}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
}
