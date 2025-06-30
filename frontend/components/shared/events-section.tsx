import React from 'react';
import {EventsSectionType} from "@/pages/home.page";

export const EventsSection = ({
                                  events,
                                  sectionImg,
                                  slug,
                                  title
                              }: EventsSectionType) => {
    return (
        <article className='flex flex-col md:flex-row items-center md:items-start w-full bg-section gap-5 rounded-[20px] p-5'>
            <img
                src={sectionImg}
                alt={title}
                className='rounded-4xl w-80'
            />

            <div className='h-full flex flex-col w-full items-center md:items-start'>
                <div className='flex flex-col md:flex-row gap-5 w-full items-center md:items-start text-center md:text-left'>
                    <h2 className="max-w-lg text-3xl font-bold text-alternative">
                        {title}
                    </h2>
                    <a
                        className='bg-alternative-foreground text-center p-1 text-alternative font-bold text-base rounded-[12px]'
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