import {Button} from "@/components/ui/button";

export const EventsCard = ({ title, iconSrc, iconAlt, buttonText, footerText }:{ title:string, iconSrc:string, iconAlt:string, buttonText:string, footerText:string }) => (
    <article role="group" aria-label="Discover events" className="relative lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-primary" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div className="flex flex-col md:flex-row justify-between items-center p-5">
                <div>
                    <h3 className="text-2xl font-bold text-white text-center md:text-left">
                        {title}
                    </h3>
                </div>
                <img src={iconSrc} alt={iconAlt} className="w-16 h-auto ml-2" />
            </div>
            <Button variant="outline" className="mx-5 rounded-full font-bold text-lg">
                {buttonText}
            </Button>
            <p className="mt-4 mb-10 max-w-lg text-lg text-white font-bold text-center px-8">
                {footerText}
            </p>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
    </article>
);