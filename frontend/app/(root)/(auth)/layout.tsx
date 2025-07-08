import {AuthLayout} from "@/components/shared";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
