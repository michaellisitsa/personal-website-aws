import { useSocket } from "@/utils/useSocket";
import React, { useCallback, useEffect, useState } from "react";

type ExportConfirmation = {
  message: string;
  jobId: string;
};

function PrintList() {
  const socket = useSocket();
  const [wsResponses, setWsResponses] = useState<ExportConfirmation[]>([]);

  const onMessage = useCallback((message: any) => {
    const data = JSON.parse(message?.data);
    // Use a callback so we are not affected by stale state
    setWsResponses((prevResponses) => [...prevResponses, data]);
  }, []);

  useEffect(() => {
    socket.addEventListener("message", onMessage);

    return () => {
      socket.removeEventListener("message", onMessage);
    };
  }, [socket, onMessage]);

  return (
    <>
      <header>
        <h1> Print List</h1>
      </header>
      <div>
        <button
          onClick={() => {
            socket.send(
              JSON.stringify({
                action: "generatePDF",
                data: { value: "Hello from lisitsa.dev" },
              })
            );
          }}
        >
          Send Print Message
        </button>
        <ul>
          {wsResponses.map((exportConfirmation, idx) => (
            <div key={idx}>
              {exportConfirmation.jobId}: {exportConfirmation.message}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PrintList;
