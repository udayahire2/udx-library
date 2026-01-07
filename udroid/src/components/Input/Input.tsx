'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { inputVariants } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      label,
      helperText,
      error,
      success,
      id,
      startContent,
      endContent,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const isError = !!error;
    const errorMessage = typeof error === 'string' ? error : undefined;

    // Accessibility: Resolve aria-describedby
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ');

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
          >
            {label}
          </label>
        )}

        <div className="relative flex w-full items-center">
          {startContent && (
            <div className={cn(
              "absolute flex items-center justify-center text-neutral-500 dark:text-neutral-400 pointer-events-none",
              size === 'sm' ? "left-2" : size === 'lg' ? "left-4" : "left-3"
            )}>
              {startContent}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            aria-invalid={isError ? 'true' : undefined}
            aria-describedby={describedBy || undefined}
            className={cn(
              inputVariants({ variant, size, error: isError, success: !isError && success }),
              startContent && (size === 'sm' ? 'pl-8' : size === 'lg' ? 'pl-11' : 'pl-10'),
              endContent && (size === 'sm' ? 'pr-8' : size === 'lg' ? 'pr-11' : 'pr-10'),
              className
            )}
            {...props}
          />

          {endContent && (
            <div className={cn(
              "absolute flex items-center justify-center text-neutral-500 dark:text-neutral-400 pointer-events-none",
              size === 'sm' ? "right-2" : size === 'lg' ? "right-4" : "right-3"
            )}>
              {endContent}
            </div>
          )}
        </div>

        {errorMessage ? (
          <p
            id={errorId}
            className="text-xs text-red-500 mt-0.5"
            role="alert"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={helperId}
            className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
