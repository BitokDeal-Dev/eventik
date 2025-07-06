import React from 'react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Button} from "@/components/ui/button";

export const HoverLoginPrompt = ({trigger}: { trigger: React.ReactNode }) => {
    return (
        <HoverCard openDelay={100}>
            <HoverCardTrigger>
                {trigger}
            </HoverCardTrigger>
            <HoverCardContent className='flex flex-col gap-5'>
                <p>Увійдіть або зареєструйтесь
                    щоб переглядати івенти у вашому місті, додавати друзів та
                    зберігати улюблені події.
                    Після входу ви зможете створити публічний профіль та
                    залишати відгуки.</p>
                <Button className='py-4!'>
                    <a href='/signin'>
                        Увійти або зареєструватись
                    </a>
                </Button>
                <Button variant='secondary' className='py-4!'>
                    <a href='/me'>
                        Особистий кабінет
                    </a>
                </Button>
            </HoverCardContent>

        </HoverCard>
    );
};
