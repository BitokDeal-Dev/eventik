import {Button} from "@/components/ui/button";

export const OrganizerCard = ({ title, buttonText, description }:{ title:string, buttonText:string, description:string }) => (
    <article role="group" aria-label="Organizer tools" className="relative lg:col-start-3 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-foreground lg:rounded-t-4xl" />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <header className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h3 className="text-3xl font-bold text-section text-center">
                    {title}
                </h3>
            </header>
            <Button variant="outline" className="mx-5 rounded-full font-bold mt-5 text-lg hover:border-primary hover:text-primary">
                {buttonText}
            </Button>
            <p className="px-8 pt-8 sm:px-10 sm:pt-10 mb-10 text-lg font-bold text-muted text-center">
                {description}
            </p>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-t-4xl" />
    </article>
);