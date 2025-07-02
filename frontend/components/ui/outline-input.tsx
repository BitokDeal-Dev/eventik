import React from 'react';
import {cn} from "@/lib/utils";

interface CustomInputProps extends React.ComponentProps<"input"> {
    className?: string
}

const OutlineInput = (props:CustomInputProps) => {
    return (
        <input {...props} className={cn('px-2 py-3 border-2 border-primary rounded-[10px] focus:outline-none focus:ring-0 placeholder:text-muted', props.className)} />
    );
};

export default OutlineInput;