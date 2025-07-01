import React from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {IStories} from "@/data/stories";


export const StoriesCarousel = ({stories, onClickStory}: { stories: IStories[], onClickStory:(item:IStories) => void }) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent className="gap-1 sm:gap-2 md:gap-4">
                {stories.map((item, i) => (
                    <CarouselItem
                        key={item.id}
                        className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                    >
                        <img
                            src={item.previewImage}
                            onClick={() => onClickStory(item)}
                            alt={`stories ${i}`}
                            height={250}
                            width={200}
                            className="rounded-md cursor-pointer w-full object-cover"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    );
};

