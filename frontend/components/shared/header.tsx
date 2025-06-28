'use client'

import React, {useState} from 'react';
import {
    DotsIcon,
    HeartIcon,
    UserIcon,
    HeaderInput,
    IconWithTitle, MobileMenu
} from "@/components/shared/";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";

export const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleMenu = () => setIsOpenModal(!isOpenModal);

    return (
        <nav className="flex items-center  gap-4 py-2">
            <div className="flex">
                <img src="/logo.svg" alt="eventik-logo"/>
            </div>

            <div className="flex-[2]">
                <HeaderInput/>
            </div>

            <div className="flex justify-end mr-4">
                <div className="hidden md:flex gap-3 md:gap-8 items-center">
                    <IconWithTitle icon={<UserIcon/>} title="Увійти"/>
                    <IconWithTitle icon={<HeartIcon/>} title="Збережені"/>
                    <Button>
                        <div className="flex items-center gap-0 md:gap-1">
                            <DotsIcon/>
                            <p className="hidden md:block">
                                Створити подію
                            </p>
                        </div>
                    </Button>
                </div>
            </div>
            <button className='md:hidden mr-4' onClick={toggleMenu}>
                {isOpenModal ? <X size={24}/> : <Menu size={24}/>}
            </button>


            {isOpenModal && (
                <MobileMenu onCloseAction={toggleMenu} />
            )}
        </nav>
    );
};