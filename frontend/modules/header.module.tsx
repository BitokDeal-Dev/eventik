'use client'

import {Header, HeaderAdditionalInfo} from "@/components/shared";
import {
    useScrollDirectionVisibility
} from "@/hooks/useScrollDirectionVisibility";

const HeaderModule = () => {
    const {isVisible} = useScrollDirectionVisibility()

    return (
        <header className={`sticky top-0 z-50 transition-transform duration-300 w-full bg-section rounded-b-lg flex flex-col ${
            isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
            <Header />
            <HeaderAdditionalInfo />
        </header>
    );
};

export default HeaderModule;