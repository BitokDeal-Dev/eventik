"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IInterest } from "@/data/interests";

export const ParallaxScroll = ({
                                   items,
                                   renderItem,
                                   className,
                               }: {
    items: IInterest[];
    renderItem: (item: IInterest) => React.ReactNode;
    className?: string;
}) => {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(items.length / 3);
    const firstPart = items.slice(0, third);
    const secondPart = items.slice(third, 2 * third);
    const thirdPart = items.slice(2 * third);

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
            ref={gridRef}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                            {renderItem(el)}
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10 mt-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            {renderItem(el)}
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            {renderItem(el)}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
