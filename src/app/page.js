"use client";
import Image from "next/image";
import Header from "./components/Header";
import { MoralisProvider } from "react-moralis";
import LotteryEntrance from "./components/LotteryEntrance";
import { NotificationProvider } from "web3uikit";

export default function Home() {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Header />
          <LotteryEntrance />
          <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
        </NotificationProvider>
      </MoralisProvider>
    </>
  );
}
