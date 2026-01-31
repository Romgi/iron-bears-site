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

    const LinkItem = ({
        href,
        label,
        active,
    }: {
        href: string;
        label: string;
        active: boolean;
    }) => (
        <Link
            href={href}
            className={cx(
                "relative rounded-xl px-3 py-2 text-sm font-medium transition",
                active
                    ? "text-primary"
                    : "text-zinc-300 hover:text-primary hover:bg-primary/10"
            )}
        >
            {label}
            <span
                className={cx(
                    "pointer-events-none absolute left-3 right-3 -bottom-1 h-[2px] rounded-full transition",
                    active ? "bg-primary opacity-100" : "bg-transparent opacity-0"
                )}
            />
        </Link>
    );

    return (
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-primary/25">
            <div className="h-1.5 w-full bg-primary" />

            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-white/5"
                    aria-label="Home"
                >
                    <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-primary/40 bg-white/5 shadow-[0_0_0_1px_rgba(242,97,0,0.08)]">
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
                    <LinkItem href="/" label="Home" active={isHome} />
                    {navItems.map((item) => (
                        <LinkItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            active={activeHref === item.href}
                        />
                    ))}
                </nav>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-primary/40 bg-primary/10 px-3 py-2 text-sm font-medium text-white hover:bg-primary/20 md:hidden"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {open && (
                <div className="border-t border-primary/25 bg-black md:hidden">
                    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
                        <div className="grid gap-2">
                            <LinkItem href="/" label="Home" active={isHome} />
                            {navItems.map((item) => (
                                <LinkItem
                                    key={item.href}
                                    href={item.href}
                                    label={item.label}
                                    active={activeHref === item.href}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
