import React from 'react';
import {headerAdditionData} from "@/data/layout-data";

export const HeaderAdditionalInfo = () => {
    return (
        <nav
            className="flex justify-between items-center px-16 mb-3 flex-wrap gap-2">
            {headerAdditionData.map((item) => (
                <p key={item.name}
                   className="hidden md:block text-sm font-medium text-muted cursor-pointer hover:opacity-70 transition-all duration-100">{item.name}</p>
            ))}

            <div className="hidden md:flex items-center gap-2 ml-6 mr-3">
                <p className="text-muted text-sm font-medium transition-all duration-100">Обране
                    місто:</p>
                <p className="text-primary text-sm font-semibold cursor-pointer">Лондон</p>
            </div>
        </nav>
    );
};