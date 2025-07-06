import type {Metadata} from "next";
import {Onest} from "next/font/google";
import "./globals.css";
import {ThemeProvider, TanstackQueryProvider} from "@/providers/";

const onestSans = Onest({
    variable: "--font-onest-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        absolute: 'Eventik — Знаходь найкращі івенти у своєму місті',
        template: '%s | Концерти, вечірки, виставки та більше'
    },
    description: "Шукай події поруч із тобою разом з Eventik. Концерти, фестивалі, виставки, вечірки — усе в одному місці. Відкрий для себе нові враження вже сьогодні!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${onestSans.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TanstackQueryProvider>
                {children}
            </TanstackQueryProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
