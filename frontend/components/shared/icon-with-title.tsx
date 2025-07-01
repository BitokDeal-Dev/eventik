import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface IconWithTitleProps {
    icon: React.ReactNode
    title?: string
    className?: string
    titleClassName?: string
}

export const IconWithTitle = forwardRef<HTMLButtonElement, IconWithTitleProps>(
    ({ icon, title, className, titleClassName }, ref) => (
        <button
            ref={ref}
            className={cn(
                "group flex flex-col items-center justify-center gap-0 cursor-pointer hover:text-primary transition-colors",
                className
            )}
        >
            {icon}
            {title && (
                <p
                    className={cn(
                        "hidden md:block text-[13px] font-medium",
                        titleClassName
                    )}
                >
                    {title}
                </p>
            )}
        </button>
    )
)

IconWithTitle.displayName = "IconWithTitle"
