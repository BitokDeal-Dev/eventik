'use client'

import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';

export interface EmailCodeInputRef {
    getCode: () => string;
}

interface Props {
    onChange?: (code: string) => void;
}

export const EmailCodeInput = forwardRef<EmailCodeInputRef, Props>(({ onChange }, ref) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [values, setValues] = useState(['', '', '', '']);
    EmailCodeInput.displayName = "EmailCodeInput";
    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;

        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        const code = newValues.join('');
        onChange?.(code);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    useImperativeHandle(ref, () => ({
        getCode: () => values.join('')
    }));

    return (
        <div className="flex w-full justify-between">
            {values.map((val, i) => (
                <input
                    key={i}
                    // @ts-expect-error: assigning ref manually to array element
                    ref={(el) => (inputRefs.current[i] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-16 h-16 text-center text-2xl font-bold border-2 border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={val}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                />
            ))}
        </div>
    );
});
