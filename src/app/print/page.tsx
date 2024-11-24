"use client";
import Head from "next/head";
import { SocketProvider } from "@/utils/SocketProvider";
import PrintList from "@/components/PrintList";

export default function Home() {
  return (
    <div>
      <main>
        <SocketProvider>
          <PrintList />
        </SocketProvider>
      </main>
    </div>
  );
}
