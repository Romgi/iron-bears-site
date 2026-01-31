"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
    { href: "/about", label: "About" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/history", label: "History" },
    { href: "/contact", label: "Contact" },
] as const;

function cx(...classes: Array<string | false | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isHome = pathname === "/";
    const brandHref = "/";
    const brand = "Iron Bears";

    const activeHref = useMemo(() => {
        const exact = navItems.find((i) => i.href === pathname)?.href;
        return exact ?? null;
    }, [pathname]);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                    <Link
                        href={brandHref}
                        className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-white/5"
                        aria-label="Home"
                    >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold">
                            854
                        </span>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold tracking-tight">{brand}</div>
                            <div className="text-xs text-zinc-400">FRC Team</div>
                        </div>
                    </Link>
                </div>

                <nav className="hidden items-center gap-1 md:flex">
                    <Link
                        href="/"
                        className={cx(
                            "rounded-xl px-3 py-2 text-sm font-medium transition",
                            isHome
                                ? "bg-white/10 text-white"
                                : "text-zinc-300 hover:bg-white/5 hover:text-white"
                        )}
                    >
                        Home
                    </Link>
                    {navItems.map((item) => {
                        const active = activeHref === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cx(
                                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                                    active
                                        ? "bg-white/10 text-white"
                                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 md:hidden"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-zinc-950 md:hidden">
                    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
                        <div className="grid gap-2">
                            <Link
                                href="/"
                                className={cx(
                                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                                    isHome
                                        ? "bg-white/10 text-white"
                                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                Home
                            </Link>
                            {navItems.map((item) => {
                                const active = activeHref === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cx(
                                            "rounded-xl px-3 py-2 text-sm font-medium transition",
                                            active
                                                ? "bg-white/10 text-white"
                                                : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
