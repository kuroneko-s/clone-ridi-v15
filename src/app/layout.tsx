import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import SideBar from "@/components/common/SideBar";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                       contents
                                   }: Readonly<{
    children: React.ReactNode,
    contents: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased container`}
        >
        <Header/>
        {children}
        <SideBar/>
        {contents}
        <Footer/>
        </body>
        </html>
    );
}
