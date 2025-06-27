import {Header} from "@/components/shared";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='fluid-padding'>
            <Header />
            {children}
        </main>
    );
}
