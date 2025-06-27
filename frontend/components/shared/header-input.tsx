import React from 'react';
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

const HeaderInput = () => {
    return (
        <div className="flex items-center p-[3px] bg-primary rounded-[12px]">
            <Input className="w-full" />
            <div className="justify-center items-center mx-2 md:mx-5 cursor-pointer">
                <Search className="text-white" />
            </div>
        </div>
    );
};

export default HeaderInput;