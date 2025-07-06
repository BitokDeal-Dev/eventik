import React from 'react';
import OutlineInput from "@/components/ui/outline-input";
import {ErrorMessage} from "@/components/shared";
import {FieldError} from "react-hook-form";

export const FormInput = ({
                              name,
                              placeholder,
                              type,
                              disabled,
                              register,
                              error,
                              onChange,
                              className = ""
                          }: {
    name:string,
    placeholder:string,
    type:string,
    disabled:boolean,
    register:any,
    error: FieldError | undefined,
    onChange:(e: any) => void,
    className?:string
}) => (
    <>
        <OutlineInput
            {...register(name, {onChange})}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            className={className}
        />
        {error && <ErrorMessage className='mt-1'>{error.message}</ErrorMessage>}
    </>
);
