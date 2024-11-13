import { useSocket } from "@/utils/useSocket";
import React, { useCallback, useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import styles from "./PrintList.module.css";

type ExportConfirmation = {
  message: string;
  messageId: string;
  jobId: string;
};

const PrintList: React.FC = () => {
  const socket = useSocket();
  const [messages, setMessages] = useState<
    { id: number; message: string; isPrinted: boolean }[]
  >([{ id: 1, message: "", isPrinted: false }]);
  const [wsResponses, setWsResponses] = useState<ExportConfirmation[]>([]);
  const handleAddMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, message: "", isPrinted: false },
    ]);
  };

  const handleMessageChange = (id: number, message: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) => (msg.id === id ? { ...msg, message } : msg))
    );
  };

  const handlePrint = (id: number) => {
    const messageToPrint = messages.find((msg) => msg.id === id);
    if (messageToPrint) {
      socket.send(
        JSON.stringify({
          action: "generatePDF",
          data: { value: messageToPrint.message, messageId: id },
        })
      );
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === id ? { ...msg, isPrinted: true } : msg
        )
      );
    }
  };

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
    <div className={styles.page}>
      <h1 className={styles.heading}>Motivation Message Generator</h1>
      <div className={styles.container}>
        <div className={styles.messageList}>
          {messages.map((msg) => (
            <MessageBox
              key={msg.id}
              id={msg.id}
              message={msg.message}
              onMessageChange={handleMessageChange}
              onPrint={handlePrint}
              isPrinted={msg.isPrinted}
            />
          ))}
        </div>
        <button onClick={handleAddMessage} className={styles.addButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default PrintList;
