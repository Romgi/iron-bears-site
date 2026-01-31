import Image from "next/image";
import Container from "@/components/Container";

export default function ContactPage() {
    return (
        <main>
            <Container>
                <div className="py-12 sm:py-16">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Contact
                    </h1>

                    <p className="mt-4 max-w-3xl text-zinc-300">
                        Want to sponsor, mentor, collaborate, or invite us to an event?
                        Reach out.
                    </p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl border border-primary/25 bg-white/5 p-6">
                            <h2 className="text-base font-semibold text-primary">Email</h2>
                            <div className="mt-3 space-y-2 text-sm text-zinc-300">
                                <div>
                                    Team:{" "}
                                    <span className="font-semibold text-primary">
                                        mci.robotics@gmail.com
                                    </span>
                                </div>
                                <div>
                                    School:{" "}
                                    <span className="font-semibold text-primary">
                                        Martingrove@tdsb.on.ca
                                    </span>
                                </div>
                            </div>

                            <h2 className="mt-6 text-base font-semibold text-primary">Social</h2>
                            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                                <li>Instagram: @team854</li>
                                <li>YouTube: Martingrove Robotics</li>
                                <li>GitHub: github.com/team854</li>
                            </ul>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-primary/25 bg-white/5">
                            <Image
                                src="/images/about/teamphoto.jpg"
                                alt="Team 854 group photo"
                                width={1600}
                                height={1000}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
