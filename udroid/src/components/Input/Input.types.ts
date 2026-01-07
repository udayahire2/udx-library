import { InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { inputVariants } from './Input.styles';

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<VariantProps<typeof inputVariants>, 'error'> {
    /**
     * Label to display above the input
     */
    label?: string;
    /**
     * Helper text to display below the input
     */
    helperText?: string;
    /**
     * Error state. If a string is provided, it will be displayed as an error message.
     * If true, the input will show error styles but no specific message (unless helperText is hijacked, but usually separate).
     */
    error?: string | boolean;
    /**
     * Success state.
     */
    success?: boolean;
    /**
     * Start icon or content
     */
    startContent?: React.ReactNode;
    /**
     * End icon or content
     */
    endContent?: React.ReactNode;
}
