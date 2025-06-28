import HeaderModule from "@/modules/header.module";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='fluid-padding'>
            <HeaderModule />
            {children}
        </main>
    );
}
