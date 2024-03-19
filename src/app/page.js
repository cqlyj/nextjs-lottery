"use client";
import Image from "next/image";
import Header from "./components/Header";
import { MoralisProvider } from "react-moralis";

export default function Home() {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          Hello, world!
        </main>
      </MoralisProvider>
    </>
  );
}
