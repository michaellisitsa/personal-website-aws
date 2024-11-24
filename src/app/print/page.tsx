"use client";

import { SocketProvider } from "@/utils/SocketProvider";
import PrintList from "@/components/print/PrintList";
import FullPage from "@/components/navigation/FullPage";
import PrintPage from "@/components/print/PrintPage";

export default function Home() {
  return (
    <FullPage>
      <PrintPage>
        <SocketProvider>
          <PrintList />
        </SocketProvider>
      </PrintPage>
    </FullPage>
  );
}
