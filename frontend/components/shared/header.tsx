'use client'

import React, {useState} from 'react';
import {
    DotsIcon,
    HeartIcon,
    UserIcon,
    HeaderInput,
    IconWithTitle, MobileMenu, HoverLoginPrompt
} from "@/components/shared/";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import Link from 'next/link';

export const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleMenu = () => setIsOpenModal(!isOpenModal);

    return (
        <nav className="flex items-center  gap-4 py-2">
            <Link href='/' className="flex">
                <img src="/logo.svg" alt="eventik-logo"/>
            </Link>

            <div className="flex-[2]">
                <HeaderInput/>
            </div>

            <div className="flex justify-end mr-4">
                <div className="hidden md:flex gap-3 md:gap-8 items-center">
                    <HoverLoginPrompt
                        trigger={
                            <IconWithTitle
                                icon={<UserIcon />}
                                title="Увійти"
                            />
                        }
                    />
                    <IconWithTitle icon={<HeartIcon/>} title="Збережені"/>
                    <Button>
                        <div className="flex items-center gap-0 md:gap-1">
                            <DotsIcon/>
                            <p className="hidden md:block text-[15px]">
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