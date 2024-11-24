"use client";

import React, { useState } from "react";
import styles from "./MessageBox.module.css";
import Link from "next/link";

type MessageBoxProps = {
  id: number;
  message: string;
  onMessageChange: (id: number, message: string) => void;
  onPrint: (id: number) => void;
  isPrinted: boolean;
  error?: string;
  status?: "errored" | "success" | "started";
  pdfUrl?: string;
};

const MessageBox: React.FC<MessageBoxProps> = ({
  id,
  message: initialMessage,
  onMessageChange,
  onPrint,
  isPrinted,
  error,
  status,
  pdfUrl,
}) => {
  const [message, setMessage] = useState(initialMessage);

  const fetchMessage = async () => {
    try {
      const response = await fetch(
        "https://s9cg48z2mi.execute-api.ap-southeast-2.amazonaws.com/prod/"
      );
      const data = await response.text();
      console.log("data", data);
      setMessage(data);
      onMessageChange(id, data);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  return (
    <form
      className={styles.row}
      onSubmit={(e) => {
        e.preventDefault();
        onPrint(id);
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          onMessageChange(id, e.target.value);
        }}
        disabled={isPrinted}
        className={styles.textBox}
      />
      <button type="submit" disabled={isPrinted} className={styles.button}>
        Print
      </button>
      <button
        type="button"
        onClick={fetchMessage}
        disabled={isPrinted}
        className={styles.button}
      >
        Random...
      </button>
      <div className={styles.status}>
        {status === "success" && pdfUrl && (
          <Link href={pdfUrl} passHref legacyBehavior>
            <a
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </Link>
        )}
        {status === "started" && <span className={styles.spinner}>🔄</span>}
        {status === "errored" && <p className={styles.error}>❗ {error}</p>}
      </div>
    </form>
  );
};

export default MessageBox;
