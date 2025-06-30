import React from 'react';
import {EventsSection, WelcomeSection} from "@/components/shared";

export type EventsSectionType = {
    slug: string;
    title: string;
    sectionImg: string;
    events: []
}

const EVENTS_DUMMY_DATA: EventsSectionType[] = [
    {
        title: 'Події поруч',
        events: [],
        sectionImg: '/events-nearby-poster.jpg',
        slug: 'some-slug'
    }
]

const HomePage = () => {
    return (
        <div className='flex flex-col gap-5 mt-5'>
            <WelcomeSection/>
            <EventsSection key={EVENTS_DUMMY_DATA[0].slug}
                           slug={EVENTS_DUMMY_DATA[0].slug}
                           title={EVENTS_DUMMY_DATA[0].title}
                           sectionImg={EVENTS_DUMMY_DATA[0].sectionImg}
                           events={EVENTS_DUMMY_DATA[0].events}/>

        </div>
    );
};

export default HomePage;