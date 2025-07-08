import React, { ChangeEvent } from "react";
import OutlineInput from "@/components/ui/outline-input";
import { ErrorMessage } from "@/components/shared";
import { FieldError, UseFormRegister, FieldValues, Path } from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
    name: Path<T>;
    placeholder: string;
    type: string;
    disabled: boolean;
    register: UseFormRegister<T>;
    error: FieldError | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export function FormInput<T extends FieldValues>({
                                                     name,
                                                     placeholder,
                                                     type,
                                                     disabled,
                                                     register,
                                                     error,
                                                     onChange,
                                                     className = "",
                                                 }: FormInputProps<T>) {
    return (
        <>
            <OutlineInput
                {...register(name, { onChange })}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
                className={className}
            />
            {error && <ErrorMessage className="mt-1">{error.message}</ErrorMessage>}
        </>
    );
}
