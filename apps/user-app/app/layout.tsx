import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import AppbarClient from "../component/appbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wallet App",
    description: "Payment wallet application",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-orange-50 min-h-screen`}>
                <Providers>
                    <AppbarClient />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
