import React from "react";
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
  message,
  onMessageChange,
  onPrint,
  isPrinted,
  error,
  status,
  pdfUrl,
}) => {
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
        onChange={(e) => onMessageChange(id, e.target.value)}
        disabled={isPrinted}
        className={styles.textBox}
      />
      <button type="submit" disabled={isPrinted} className={styles.button}>
        Print
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
