import Container from "./Container";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-white/10">
            <Container>
                <div className="flex flex-col gap-2 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} FRC 854 — Iron Bears Robotics
                    </div>
                    <div className="text-sm text-zinc-400">
                        Jonathan Graydon - github.com/Romgi
                    </div>
                </div>
            </Container>
        </footer>
    );
}
