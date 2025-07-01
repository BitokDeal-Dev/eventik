export const HeroCard = ({ headline, imageSrc, altText }:{headline:string, imageSrc:string, altText:string}) => (
    <article role="group" aria-label="Hero promotion" className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-foreground lg:rounded-l-4xl" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <header className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <h2 className="mt-2 max-w-lg text-5xl font-bold text-section text-center lg:text-left">
                    {headline}
                </h2>
            </header>
            <div className="@container relative w-full grow mx-auto max-w-sm lg:mx-0 lg:max-w-none">
                <img src={imageSrc} alt={altText} className="object-cover object-top w-full h-full" />
            </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
    </article>
);
