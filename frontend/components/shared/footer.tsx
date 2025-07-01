import {FooterSection, Title} from "@/components/shared/";
import {
    footerAbout,
    footerSupport, footerUseful,
    footerUser
} from "@/data/layout-data";
import React from "react";

export const Footer = () => {
    return (
        <footer className='flex flex-col mt-10'>
            <section className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col gap-5'>
                    <Title className='font-black'>Про Eventik</Title>
                    <FooterSection items={footerAbout}/>

                </div>

                <div className='flex flex-col gap-5'>
                    <Title className='font-black'>Корисне</Title>
                    <FooterSection items={footerUseful}/>
                </div>
                <div className='flex flex-col gap-5'>
                    <Title className='font-black'>Підтримка</Title>
                    <FooterSection items={footerSupport}/>
                </div>

            </section>

            <Title className='font-black mt-21'>Для користувачів</Title>
            <FooterSection className='flex-row flex-wrap my-5'
                           items={footerUser}/>

            <div className='flex items-center'>
                <a href='/' className="flex">
                    <img src="/logo.svg" alt="eventik-logo"/>
                </a>
                <p className='text-muted text-sm'>© 2025 Eventic. Всі права захищені.</p>
            </div>
        </footer>
    );
};