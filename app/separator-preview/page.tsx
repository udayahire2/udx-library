"use client";

import React, { useState, useEffect } from "react";
import { Separator } from "../../udroid/src/components/separator/separator";
import { Sun, Moon } from "lucide-react";

export default function SeparatorPreviewPage() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="min-h-screen bg-background p-10 flex flex-col gap-10 items-center justify-center transition-colors duration-300">
            <div className="absolute right-4 top-4">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                    {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>
            </div>
            <h1 className="text-3xl font-bold text-primary">Separator Component</h1>

            <div className="flex flex-col gap-8 w-full max-w-2xl">

                {/* Horizontal Section */}
                <div className="flex flex-col gap-4 p-6 border rounded-xl bg-card">
                    <h2 className="font-semibold text-lg">Horizontal Variants</h2>

                    <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Default</p>
                        <Separator />
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Muted</p>
                        <Separator variant="muted" />
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Dashed</p>
                        <Separator variant="dashed" />
                    </div>
                </div>

                {/* Vertical Section */}
                <div className="flex gap-4 p-6 border rounded-xl bg-card h-32 items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium">Standard</span>
                        <div className="flex h-10 items-center gap-4 text-sm">
                            <span>Blog</span>
                            <Separator orientation="vertical" />
                            <span>Docs</span>
                            <Separator orientation="vertical" />
                            <span>Source</span>
                        </div>
                    </div>
                </div>

                {/* Practical Example: Header */}
                <div className="flex flex-col p-6 border rounded-xl bg-card gap-4">
                    <h2 className="font-semibold text-lg">Practical: Header</h2>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium">Settings</h4>
                            <span className="text-xs text-muted-foreground">v1.0.0</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Manage your account settings and preferences.</p>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-sm">
                            <span>Profile</span>
                            <span className="text-muted-foreground text-xs">Edit</span>
                        </div>
                        <Separator variant="muted" />
                        <div className="flex items-center justify-between text-sm">
                            <span>Notifications</span>
                            <span className="text-muted-foreground text-xs">Manage</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
