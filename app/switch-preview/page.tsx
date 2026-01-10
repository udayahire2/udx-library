"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "../../udroid/src/components/switch/switch";
import { Label } from "../../udroid/src/components/label/label";
import { Sun, Moon, Plane, Bluetooth, Bell, Shield } from "lucide-react";
import { cn } from "../../udroid/src/utils/cn"; // Importing cn for cleaner class conditional logic

export default function SwitchPreviewPage() {
    // Individual state for each switch to drive row-level styling
    const [airplaneMode, setAirplaneMode] = useState(false);
    const [bluetooth, setBluetooth] = useState(true);
    const [notifications, setNotifications] = useState(false);
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

    // Helper to get row classes based on active state
    const getRowClasses = (isActive: boolean) => {
        return cn(
            "flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group",
            isActive
                ? "border-primary/10 bg-primary/5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] dark:bg-white/5 dark:border-white/10"
                : "border-transparent hover:bg-muted/30"
        );
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
            <h1 className="text-3xl font-bold text-primary">Switch Component</h1>

            <div className="flex flex-col gap-2 w-full max-w-md">
                {/* Airplane Mode */}
                <div className={getRowClasses(airplaneMode)}>
                    <div className="flex items-center gap-3">
                        <Plane className={cn("size-4 transition-colors", airplaneMode ? "text-primary" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                        <Label htmlFor="airplane-mode" className={cn("font-medium text-sm cursor-pointer transition-colors", airplaneMode ? "text-primary" : "text-foreground/90")}>Airplane Mode</Label>
                    </div>
                    <Switch id="airplane-mode" checked={airplaneMode} onCheckedChange={setAirplaneMode} />
                </div>

                {/* Bluetooth */}
                <div className={getRowClasses(bluetooth)}>
                    <div className="flex items-center gap-3">
                        <Bluetooth className={cn("size-4 transition-colors", bluetooth ? "text-blue-500" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                        <Label htmlFor="bluetooth" className="font-medium text-sm cursor-pointer text-foreground/90">Bluetooth</Label>
                    </div>
                    <Switch id="bluetooth" checked={bluetooth} onCheckedChange={setBluetooth} />
                </div>

                {/* Notifications */}
                <div className={getRowClasses(notifications)}>
                    <div className="flex items-center gap-3">
                        <Bell className={cn("size-4 transition-colors", notifications ? "text-amber-500" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                        <Label htmlFor="notifications" className="font-medium text-sm cursor-pointer text-foreground/90">Notifications</Label>
                    </div>
                    <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
                </div>

                {/* Disabled Option - Intentional 'Locked' State */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-transparent opacity-40 cursor-not-allowed select-none grayscale">
                    <div className="flex items-center gap-3">
                        <Shield className="size-4 text-muted-foreground/80" />
                        <div className="flex flex-col">
                            <Label htmlFor="disabled-setting" className="font-medium text-sm text-muted-foreground">Secure Boot</Label>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/80">Locked by Admin</span>
                        </div>
                    </div>
                    <Switch id="disabled-setting" disabled checked />
                </div>
            </div>

            <div className="mt-8 p-0 w-full max-w-md relative group">
                {/* Connecting the aesthetic of the list to this card with similar rounding and padding */}
                <div className="flex items-center justify-between p-5 rounded-2xl bg-zinc-950 dark:bg-black shadow-2xl ring-1 ring-white/10 overflow-hidden relative transition-transform hover:scale-[1.01] duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent opacity-100 pointer-events-none" />

                    <div className="flex flex-col items-start gap-1 relative z-10">
                        <span className="font-semibold text-base text-white tracking-tight">ProMotion Display</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-indigo-200 bg-indigo-500/20 px-1.5 py-0.5 rounded">120Hz</span>
                            <span className="text-xs text-zinc-500">Ultra smooth visuals</span>
                        </div>
                    </div>
                    <Switch id="premium-switch" variant="premium" defaultChecked className="relative z-20" />
                </div>
            </div>
        </div>
    );
}
