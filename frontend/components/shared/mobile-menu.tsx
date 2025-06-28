'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    IconWithTitle,
    UserIcon,
    HeartIcon,
    DotsIcon
} from "@/components/shared/";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const MobileMenu = ({ onCloseAction }: { onCloseAction: () => void }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <div className="fixed top-0 left-0 w-full h-screen bg-section shadow-md md:hidden z-50 overflow-y-auto">
            <div className="flex justify-end p-4">
                <button onClick={onCloseAction} aria-label="Закрити меню">
                    <X size={20} className="text-muted hover:opacity-70 transition-all duration-150" />
                </button>
            </div>

            <div className="flex flex-col gap-6 px-6 pb-6">
                <IconWithTitle
                    titleClassName="block text-[16px]"
                    className="flex-row gap-2"
                    icon={<UserIcon />}
                    title="Увійти"
                />
                <IconWithTitle
                    titleClassName="block text-[16px]"
                    className="flex-row gap-2"
                    icon={<HeartIcon />}
                    title="Збережені"
                />
                <Button>
                    <div className="flex items-center gap-3">
                        <DotsIcon />
                        <p className="text-[16px]">Створити подію</p>
                    </div>
                </Button>

                {[
                    "Про нас",
                    "Як це працює",
                    "FAQ / Питання",
                    "Для організаторів",
                    "Контакти",
                    "Новини",
                    "Блог",
                    "Огляди подій",
                    "Стати спонсором"
                ].map((text, index) => (
                    <p
                        key={index}
                        className="text-[16px] font-medium text-muted cursor-pointer hover:opacity-70 transition-all duration-100"
                        onClick={onCloseAction}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </div>,
        document.body
    );
};
