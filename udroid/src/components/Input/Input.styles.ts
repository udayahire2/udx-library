import { cva } from 'class-variance-authority';

export const inputVariants = cva(
    'flex w-full rounded-lg border bg-transparent transition-all duration-200 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:border-neutral-300 dark:shadow-none dark:hover:border-neutral-700',
    {
        variants: {
            variant: {
                default:
                    'border-neutral-200 bg-white text-neutral-900 focus-visible:border-neutral-900 focus-visible:ring-1 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/20 dark:focus-visible:ring-offset-neutral-950',
                filled:
                    'border-transparent bg-neutral-100/50 text-neutral-900 hover:bg-neutral-100 focus-visible:bg-white focus-visible:border-neutral-900 focus-visible:ring-1 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2 dark:bg-neutral-900/50 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:focus-visible:bg-neutral-950 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/20 dark:focus-visible:ring-offset-neutral-950',
            },
            error: {
                true: 'border-red-500/80 text-neutral-900 focus-visible:border-red-500 focus-visible:ring-1 focus-visible:ring-red-500/20 focus-visible:ring-offset-2 dark:border-red-500/80 dark:text-neutral-100 dark:focus-visible:border-red-500 dark:focus-visible:ring-red-500/20 dark:focus-visible:ring-offset-neutral-950',
            },
            success: {
                true: 'border-emerald-500/80 text-neutral-900 focus-visible:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500/20 focus-visible:ring-offset-2 dark:border-emerald-500/80 dark:text-neutral-100 dark:focus-visible:border-emerald-500 dark:focus-visible:ring-emerald-500/20 dark:focus-visible:ring-offset-neutral-950',
            },
            size: {
                sm: 'h-8 px-2.5 text-[13px]', // Slightly more padding
                md: 'h-10 px-3.5 text-sm',    // Standard
                lg: 'h-12 px-4 text-base',    // Large
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
);
