"use client";

import React, { useState } from 'react';
import { Input } from '@/udroid/src/components/Input';
import { Button } from '@/udroid/src/components/Button';
import { cn } from '@/udroid/src/utils/cn';

// Icons
const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="w-[1em] h-[1em]">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="w-[1em] h-[1em]">
        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6161 13.5966 12.02 13.5966C12.4239 13.5966 12.8213 13.4793 13.15 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Moon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1414C17.9906 14.2661 19.6517 13.7866 21 12.79Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Sun = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function InputPreviewPage() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={cn("min-h-screen transition-colors duration-300 font-sans", isDark ? "dark bg-neutral-950" : "bg-neutral-50")}>
            <div className="min-h-screen p-8 md:p-12 space-y-12">

                {/* Header */}
                <div className="max-w-4xl mx-auto flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">Input Component</h1>
                        <p className="text-neutral-500 dark:text-neutral-400 text-lg">Production-ready, accessible, and dependable.</p>
                    </div>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-3 rounded-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-all cursor-pointer"
                        title="Toggle Dark Mode"
                    >
                        {isDark ? <Sun /> : <Moon />}
                    </button>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Section: Sizes */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">Sizes vs Button Alignment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-neutral-500">Small (32px)</h3>
                                <div className="flex items-center gap-4">
                                    <Input placeholder="Small input" size="sm" className="w-[200px]" />
                                    <Button size="sm">Button</Button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-neutral-500">Medium (40px)</h3>
                                <div className="flex items-center gap-4">
                                    <Input placeholder="Medium input" size="md" className="w-[200px]" />
                                    <Button size="md">Button</Button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-neutral-500">Large (48px)</h3>
                                <div className="flex items-center gap-4">
                                    <Input placeholder="Large input" size="lg" className="w-[200px]" />
                                    <Button size="lg">Button</Button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-neutral-500">XL (56px) - Button Only</h3>
                                <div className="flex items-center gap-4">
                                    <Button size="xl">Extra Large</Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Variants */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">Variants</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Input
                                label="Default Variant"
                                placeholder="Classic border"
                            />
                            <Input
                                label="Filled Variant"
                                variant="filled"
                                placeholder="Background fill"
                            />
                        </div>
                    </section>

                    {/* Section: States */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">States</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <Input
                                label="Error State"
                                error="This email is already in use."
                                placeholder="you@example.com"
                                defaultValue="invalid-email@"
                            />
                            <Input
                                label="Success State"
                                success
                                placeholder="Username available"
                                defaultValue="udayahire2"
                                helperText="Username is available!"
                            />
                            <Input
                                label="Disabled State"
                                disabled
                                placeholder="Cannot type here"
                            />
                            <Input
                                label="Read Only"
                                readOnly
                                defaultValue="Project ID: #123456"
                            />
                        </div>
                    </section>

                    {/* Section: With Content / Icons */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">With Content</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Input
                                label="Search (Start Content)"
                                placeholder="Search documentation..."
                                startContent={<SearchIcon />}
                            />
                            <Input
                                label="Email (Both Content)"
                                placeholder="Email address"
                                startContent={<MailIcon />}
                                endContent={<span className="text-xs font-medium text-neutral-500">Optional</span>}
                            />
                            <Input
                                label="URL (Start String)"
                                placeholder="google.com"
                                startContent={<span className="text-sm text-neutral-500">https://</span>}
                            />
                            <Input
                                label="Price (End String)"
                                placeholder="0.00"
                                endContent={<span className="text-sm text-neutral-500">USD</span>}
                                className="text-right"
                            />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
