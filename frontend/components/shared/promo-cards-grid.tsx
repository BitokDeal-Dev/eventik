import React from 'react';
import {HeroCard, CommunityCard, EventsCard, StatsCard, OrganizerCard} from "@/components/shared/grid-cards";

export const PromoCardsGrid = () => {
    return (
        <section className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3 lg:grid-rows-2">
            <HeroCard headline='Хтось внизу вже знайшов свій івент. Твоя черга.' imageSrc='/pig.png' altText='Illustration of a person celebrating' />
            <CommunityCard
                title="Тут люди, які тебе зрозуміють."
                buttonText="Створити аккаунт"
                description="Зроби перший крок до спільноти"
            />
            <EventsCard
                title="Що цікавого сьогодні в місті?"
                iconSrc="/Eyes.svg"
                iconAlt="Icon of eyes"
                buttonText="Шукати івенти"
                footerText="Відкривай події поруч, запрошуй друзів та знаходьте нових."
            />
            <StatsCard
                percentage={99}
                message="знайшли івент по вайбу"
                videoSrc="/emoji-light.MP4"
            />
            <OrganizerCard
                title="Організовуй. Розвивай. Залучай."
                buttonText="Створити івент"
                description="Реєструй події, відстежуй учасників, керуй реєстраціями."
            />
        </section>
    );
};

