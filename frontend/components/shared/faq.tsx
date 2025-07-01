import React from 'react';
import {IFaq} from "@/data/faq";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const Faq = ({questions}: { questions: IFaq[] }) => {
    return (
        <article className='flex flex-col  w-full bg-section gap-5 rounded-[20px] p-5'>
            <h2 className={`text-3xl font-bold text-center w-full`}>
                Часті запитання
            </h2>
            <Accordion type="single" collapsible>
                {questions.map((question, index) => (
                    <AccordionItem className='mx-5 md:mx-14 lg:mx-28 mt-2 ' value={`item-${index}`} key={index}>
                        <AccordionTrigger className=" text-2xl font-bold text-center lg:text-left">{question.question}</AccordionTrigger>
                        <AccordionContent className='flex justify-center items-center max-w-lg text-base'>
                            {question.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </article>
    );
};

