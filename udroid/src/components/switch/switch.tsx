"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../utils/cn";
import { switchRootVariants, switchThumbVariants } from "./switch.styles";
import { SwitchProps } from "./switch.types";

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    SwitchProps
>(({ className, variant, size, ...props }, ref) => (
    <SwitchPrimitive.Root
        className={cn(switchRootVariants({ variant, className }))}
        {...props}
        ref={ref}
    >
        <SwitchPrimitive.Thumb
            className={cn(switchThumbVariants({ variant }))}
        />
    </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
