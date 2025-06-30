'use client'

import React, {useEffect, useState} from 'react';
import {IStories, stories} from "@/data/stories";
import ReactInstaStories from "react-insta-stories";
import {X} from "lucide-react";

export const Stories = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedStory, setSelectedStory] = useState<IStories | null>(null)

    const onClickStory = (story: IStories) => {
        setSelectedStory(story)
        if (story.items.length > 0) {
            setOpen(true);
        }
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <article className='flex flex-col gap-5 p-5 rounded-[20px] bg-section w-full'>
                <h2 className="max-w-lg text-3xl font-bold">
                    Ваші історії
                </h2>
                <section className='flex flex-wrap justify-between items-center md:items-start'>
                    {stories.map((item, i) => (
                        <img
                            key={i}
                            src={item.previewImage}
                            onClick={() => onClickStory(item)}
                            alt={`stories ${i}`}
                            height={250}
                            width={200}
                            className='rounded-md cursor-pointer'
                        />
                    ))}
                </section>
            </article>

            {open && selectedStory && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-5 right-5 z-[101] text-white hover:opacity-80"
                    >
                        <X size={32} />
                    </button>
                    <div className="w-full h-full max-w-[420px] sm:max-w-[600px] sm:h-auto">
                        <ReactInstaStories
                        stories={selectedStory?.items.map((item) => ({url: item.sourceUrl})) || []}
                        onAllStoriesEnd={() => setOpen(false)}
                        defaultInterval={3000}
                        width={500}
                        height={650}
                        storyStyles={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
