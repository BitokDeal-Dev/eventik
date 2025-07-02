import HeaderModule from "@/modules/header/header.module";
import {Footer} from "@/components/shared";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='fluid-padding'>
            <HeaderModule />
            {children}
            <Footer />
        </main>
    );
}
