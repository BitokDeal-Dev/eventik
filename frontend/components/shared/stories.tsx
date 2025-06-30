'use client'

import React, {useEffect, useState} from 'react';
import {IStories, stories} from "@/data/stories";
import ReactInstaStories from "react-insta-stories";
import {X} from "lucide-react";

export const Stories = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedStory, setSelectedStory] = useState<IStories>()

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
        <article
            className='flex flex-col gap-5 p-5 rounded-[20px] bg-section w-full'>
            <h2 className="max-w-lg text-3xl font-bold">
                Ваші історії
            </h2>
            <section
                className='flex flex-wrap justify-between items-center md:items-start'>
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

            {open &&
			        <div
				        className='absolute left-0 top-0 w-full h-full bg-black/80 flex items-center justify-center z-30'>
				        <div className="relative" style={{width: 520}}>
					        <button className="absolute -right-10 -top-5 z-30" onClick={() => setOpen(false)}>
						        <X className="absolute top-0 right-0 w-8 h-8 text-white/50"/>
					        </button>

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
            }
        </article>
    );
};
