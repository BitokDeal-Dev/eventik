import React from 'react';
import {
    EventsSection,
    PromoCardsGrid, EmailSubscription,
    Stories, Faq,
} from "@/components/shared";
import {faqs} from "@/data/faq";

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
    },
    {
        title: 'Найочікуваніші події',
        events: [],
        sectionImg: '/most_anticipated_events_banner.jpg',
        slug: '/most_anticipated_events'
    }
]

const HomePage = () => {
    return (
        <div className='flex flex-col gap-5 mt-5'>
            <Stories />
            <PromoCardsGrid/>
            <EventsSection
                key={EVENTS_DUMMY_DATA[0].slug}
                slug={EVENTS_DUMMY_DATA[0].slug}
                title={EVENTS_DUMMY_DATA[0].title}
                sectionImg={EVENTS_DUMMY_DATA[0].sectionImg}
                events={EVENTS_DUMMY_DATA[0].events}
            />
            <EmailSubscription />
            <EventsSection
                key={EVENTS_DUMMY_DATA[1].slug}
                slug={EVENTS_DUMMY_DATA[1].slug}
                title={EVENTS_DUMMY_DATA[1].title}
                sectionImg={EVENTS_DUMMY_DATA[1].sectionImg}
                events={EVENTS_DUMMY_DATA[1].events}
                mainColor='blue'
            />
            <Faq questions={faqs} />
        </div>
    );
};

export default HomePage;