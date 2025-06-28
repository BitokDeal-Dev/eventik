import {Header, HeaderAdditionalInfo} from "@/components/shared";

const HeaderModule = () => {
    return (
        <header className='w-full bg-section rounded-lg flex flex-col'>
            <Header />
            <HeaderAdditionalInfo />
        </header>
    );
};

export default HeaderModule;