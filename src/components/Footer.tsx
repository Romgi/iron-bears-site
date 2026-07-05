import Container from "./Container";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-white/10">
            <Container>
                <div className="py-10 text-sm text-zinc-400">
                    © {new Date().getFullYear()} FRC 854 — Iron Bears Robotics
                </div>
            </Container>
        </footer>
    );
}
