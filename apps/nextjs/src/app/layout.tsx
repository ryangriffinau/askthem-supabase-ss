// import {
//   createBrowserSupabaseClient,
//   type Session,
// } from "@supabase/auth-helpers-nextjs";

// import { SessionContextProvider } from "@supabase/auth-helpers-react";

import type { Metadata } from "next";

// import { Inter } from "next/font/google";

import "~/styles/globals.css";

import { headers } from "next/headers";

import { SupabaseProvider, TRPCReactProvider } from "./providers";

// const fontSans = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const meta = {
  title: "AskThem - from Next.js Subscription Starter",
  description: "Brought to you by Vercel, Stripe, and Supabase.",
  cardImage: "/askthem-cardImage.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
  url: "https://subscription-starter.vercel.app",
  type: "website",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    // cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title,
    siteName: "Create T3 Turbo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vercel",
    title: meta.title,
    description: meta.description,
    // cardImage: meta.cardImage,
    creator: "@jullerino",
  },
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"font-sans"}>
        {/* <body className={["font-sans", fontSans.variable].join(" ")}> */}
        <SupabaseProvider>
          <TRPCReactProvider headers={headers()}>
            {props.children}
          </TRPCReactProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
