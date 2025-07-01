import React from 'react';
import {EventsSectionType} from "@/pages/home.page";

interface Props extends EventsSectionType {
    mainColor?: 'blue' | 'pink';
}

export const EventsSection = ({
                                  events,
                                  sectionImg,
                                  slug,
                                  title,
    mainColor='pink'
                              }: Props) => {

    const colorClasses = {
        blue: {bg:'bg-primary-foreground', text:'text-primary'},
        pink: {bg:'bg-alternative-foreground', text:'text-alternative'},
    };


    return (
        <article className='flex flex-col md:flex-row items-center md:items-start w-full bg-section gap-5 rounded-[20px] p-5'>
            <img
                src={sectionImg}
                alt={title}
                className='rounded-4xl w-80'
            />

            <div className='h-full flex flex-col w-full items-center md:items-start'>
                <div className='flex flex-col md:flex-row gap-5 w-full items-center md:items-start text-center md:text-left'>
                    <h2 className={`${colorClasses[mainColor].text} max-w-lg text-3xl font-bold`}>
                        {title}
                    </h2>
                    <a
                        className={`${colorClasses[mainColor].text} ${colorClasses[mainColor].bg} text-center p-1 font-bold text-base rounded-[12px]`}
                        href={`/events/${slug}`}
                    >
                        Дивитись більше
                    </a>
                </div>

                <div className='w-full'>
                    {events.length === 0 && (
                        <div className='flex justify-center items-center min-h-[200px]'>
                            <h2 className='font-bold text-3xl'>На жаль ми не знайшли івентів</h2>
                        </div>
                    )}
                </div>
            </div>
        </article>

    );
};