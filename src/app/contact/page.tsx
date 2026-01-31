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

                    <div className="mt-10 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h2 className="text-base font-semibold">Email</h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                General inquiries:
                                <span className="ml-2 font-medium text-white">
                                    hello@yourteamdomain.com
                                </span>
                            </p>
                            <p className="mt-2 text-sm text-zinc-300">
                                Sponsorships:
                                <span className="ml-2 font-medium text-white">
                                    sponsors@yourteamdomain.com
                                </span>
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h2 className="text-base font-semibold">Social</h2>
                            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                                <li>Instagram: @ironbears854</li>
                                <li>YouTube: Iron Bears Robotics</li>
                                <li>GitHub: github.com/your-org</li>
                            </ul>
                            <p className="mt-4 text-xs text-zinc-400">
                                Replace these with your real links/usernames.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950/40 p-6">
                        <h2 className="text-base font-semibold">Optional: Contact Form</h2>
                        <p className="mt-2 text-sm text-zinc-300">
                            If you want, I can add a real form that sends email using a modern
                            provider (Resend, SendGrid, etc.)—but for now this page stays simple
                            and fast.
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}
