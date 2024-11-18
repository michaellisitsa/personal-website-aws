import Head from "next/head";
import { SocketProvider } from "@/utils/SocketProvider";
import PrintList from "@/components/PrintList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lisitsa.dev</title>
        <meta name="description" content="Michael Lisitsa's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <SocketProvider>
            <PrintList />
          </SocketProvider>
        </main>
      </div>
    </>
  );
}
