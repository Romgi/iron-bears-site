"use client";

import Image from "next/image";
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
    const activeHref = useMemo(
        () => navItems.find((i) => i.href === pathname)?.href ?? null,
        [pathname]
    );

    useEffect(() => setOpen(false), [pathname]);

    return (
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
            {/* Brand accent */}
            <div className="h-1.5 w-full bg-primary" />

            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-white/5"
                    aria-label="Home"
                >
                    <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                        <Image
                            src="/images/logo.png"
                            alt="Iron Bears logo"
                            fill
                            className="object-contain p-1"
                            priority
                        />
                    </span>

                    <div className="leading-tight">
                        <div className="text-sm font-semibold tracking-tight text-white">
                            Iron Bears
                        </div>
                        <div className="text-xs text-zinc-400">
                            <span className="text-primary font-semibold">FRC 854</span> • Robotics
                        </div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    <Link
                        href="/"
                        className={cx(
                            "rounded-xl px-3 py-2 text-sm font-medium transition",
                            isHome ? "text-primary" : "text-zinc-300 hover:text-primary"
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
                                    active ? "text-primary" : "text-zinc-300 hover:text-primary"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-primary/40 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-primary/10 md:hidden"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-black md:hidden">
                    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
                        <div className="grid gap-2">
                            <Link
                                href="/"
                                className={cx(
                                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                                    isHome ? "text-primary" : "text-zinc-300 hover:text-primary"
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
                                            active ? "text-primary" : "text-zinc-300 hover:text-primary"
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
