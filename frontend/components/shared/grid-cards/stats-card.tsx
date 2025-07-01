export const StatsCard = ({ percentage, message, videoSrc }:{ percentage:number, message:string, videoSrc:string }) => (
    <article role="group" aria-label="Statistics showcase" className="relative lg:col-start-3 lg:row-start-1">
        <div className="absolute inset-px rounded-lg bg-section" />
        <div className="relative flex h-full flex-col justify-center items-center overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div className="flex flex-col sm:flex-row justify-center items-center p-5">
                <video
                    src={videoSrc}
                    className="w-64 h-auto mx-auto"
                    autoPlay
                    muted
                    playsInline
                    loop
                />
                <div className="text-center sm:text-right">
                    <h3 className="mt-2 max-w-lg text-[92px] text-right text-primary font-bold max-lg:text-center">{percentage}%</h3>
                    <p className="mt-2 max-w-lg text-4xl text-right mr-2 text-primary font-bold max-lg:text-center">{message}</p>
                </div>
            </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
    </article>
);
