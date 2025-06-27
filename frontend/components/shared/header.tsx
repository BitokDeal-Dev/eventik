import React from 'react';
import {IconWithTitle} from "@/components/shared/icon-with-title";
import {DotsIcon, HeartIcon, UserIcon} from "@/components/shared/icons";
import HeaderInput from "@/components/shared/header-input";
import {Button} from "@/components/ui/button";

export const Header = () => {
    return (
        <header className='w-full bg-section rounded-lg flex flex-col'>
            <nav className="flex items-center  gap-4 py-2">
                <div className="flex">
                    <img src="/logo.svg" alt="eventik-logo"/>
                </div>

                <div className="flex-[2]">
                    <HeaderInput/>
                </div>

                <div className="flex justify-end mr-4">
                    <div className="flex gap-3 md:gap-8 items-center">
                        <IconWithTitle icon={<UserIcon/>} title="Увійти"/>
                        <IconWithTitle icon={<HeartIcon/>} title="Збережені"/>
                        <Button>
                            <div className="flex items-center gap-0 md:gap-1">
                                <DotsIcon />
                                <p className="hidden md:block">
                                    Створити подію
                                </p>
                            </div>
                        </Button>
                    </div>
                </div>
            </nav>
            <nav className="flex justify-between px-16 mb-3 flex-wrap gap-2">
                <p className="md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Про нас</p>
                <p className="md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Як це працює</p>
                <p className="md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">FAQ / Питання</p>
                <p className="hidden md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Для організаторів</p>
                <p className="hidden md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Контакти</p>
                <p className="hidden md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Новини</p>
                <p className="hidden md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Блог</p>
                <p className="hidden md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Огляди подій</p>
                <p className="hidden md:block text-muted cursor-pointer hover:opacity-70 transition-all duration-100">Стати спонсором</p>

                <div className="flex items-center gap-2 ml-6 mr-3">
                    <p className="text-muted cursor-pointer transition-all duration-100">Обране місто:</p>
                    <p className="text-primary font-semibold">Лондон</p>
                </div>
            </nav>

        </header>
    );
};