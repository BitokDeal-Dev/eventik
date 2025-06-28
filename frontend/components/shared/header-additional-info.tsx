import React from 'react';

export const HeaderAdditionalInfo = () => {
    return (
        <nav className="flex justify-between items-center px-16 mb-3 flex-wrap gap-2">
            <p className="hidden md:block text-sm font-medium text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Про нас</p>
            <p className="hidden md:block text-sm font-medium text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Як це працює</p>
            <p className="hidden md:block text-sm font-medium text-muted cursor-pointer hover:opacity-70 transition-all duration-100">FAQ / Питання</p>
            <p className="hidden text-sm font-medium md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Для організаторів</p>
            <p className="hidden text-sm font-medium md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Контакти</p>
            <p className="hidden text-sm font-medium md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Новини</p>
            <p className="hidden text-sm font-medium md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Блог</p>
            <p className="hidden text-sm font-medium md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Огляди подій</p>
            <p className="hidden text-sm font-medium md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Стати спонсором</p>

            <div className="hidden md:flex items-center gap-2 ml-6 mr-3">
                <p className="text-muted text-sm font-medium cursor-pointer transition-all duration-100">Обране місто:</p>
                <p className="text-primary font-semibold">Лондон</p>
            </div>
        </nav>
    );
};