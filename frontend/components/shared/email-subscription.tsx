import React from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export const EmailSubscription = () => {
        return (
            <article
                className="p-5 rounded-2xl items-center overflow-hidden bg-foreground flex flex-col md:flex-row gap-5 justify-between">
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <h2 className="mt-2 max-w-lg text-5xl font-bold text-section text-center lg:text-left">
                       Не пропусти найцікавіше!
                    </h2>

                    <h2 className="mt-2 max-w-lg text-xl font-bold text-muted text-center lg:text-left">
                        Підписуйся на розсилку — отримуй найкращі івенти першими.
                    </h2>
                </div>
                <div className='flex justify-center items-center w-full max-w-xl flex-col gap-5'>
                    <Input className='w-full text-2xl font-bold' type='email ' />
                    <Button className='w-full text-2xl font-bold'>Підписатись</Button>
                </div>

            </article>
        );
    }
;

