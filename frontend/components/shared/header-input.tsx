'use client'

import React from 'react';
import {Search} from "lucide-react";
import {useWindowWidth} from "@/hooks/useWindowWidth";
import {SearchScopeSelector} from "@/components/shared/";

export const HeaderInput = () => {
    const width = useWindowWidth()
    return (
        <div className="flex items-center p-[3px] bg-primary rounded-[12px]">

            <div
                className='w-full border-input flex h-9 gap-3 items-center bg-section min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'>
                <div className='hidden md:block'>
                <SearchScopeSelector />
                </div>
                <input   className="w-full border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-none"
                         placeholder='Шукати на Eventik...'/>
            </div>
            <div
                className="justify-center items-center mx-2 md:mx-5 cursor-pointer">
                <Search size={width && width < 450 ? 15 : 25}
                        className="text-white"/>
            </div>
        </div>
    );
};
