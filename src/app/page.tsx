"use client";
import Head from "next/head";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Twiddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className="text-center py-10 text-white">
        <image></image>
        <h1 className="text-4xl font-bold">Twiddy</h1>
        <p className="text-xl mt-2">Over 1,000 Outer Banks vacation rentals</p>
      </header> */}

      <main className="flex-1 container mx-auto mt-4">
        <Chatbot />
      </main>
    </div>
  );
}
