"use client";

import { useSocket } from "@/utils/useSocket";
import React, { useCallback, useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import styles from "./PrintList.module.css";

type WsResponseData = {
  jobId: string;
  messageId: number;
  status: "errored" | "success" | "started";
  error?: string;
  pdfUrl?: string;
};

type Message = {
  id: number;
  message: string;
  isPrinted: boolean;
  status?: "errored" | "success" | "started";
  error?: string;
  pdfUrl?: string;
};

const PrintList: React.FC = () => {
  const socket = useSocket();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, message: "", isPrinted: false },
  ]);
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
    const data: WsResponseData = JSON.parse(message?.data);
    // Use a callback so we are not affected by stale state
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === data.messageId
          ? {
              ...msg,
              status: data.status,
              error: data.error,
              pdfUrl: data.pdfUrl,
            }
          : msg
      )
    );
  }, []);

  useEffect(() => {
    socket.addEventListener("message", onMessage);

    return () => {
      socket.removeEventListener("message", onMessage);
    };
  }, [socket, onMessage]);

  return (
    <>
      {messages.map((msg) => (
        <MessageBox
          key={msg.id}
          id={msg.id}
          message={msg.message}
          status={msg.status}
          error={msg.error}
          pdfUrl={msg.pdfUrl}
          onMessageChange={handleMessageChange}
          onPrint={handlePrint}
          isPrinted={msg.isPrinted}
        />
      ))}
      <button onClick={handleAddMessage} className={styles.addButton}>
        +
      </button>
    </>
  );
};

export default PrintList;
