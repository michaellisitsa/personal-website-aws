import React, { useCallback, useEffect, useState } from "react";
import styles from "./MessageBox.module.css";

type MessageBoxProps = {
  id: number;
  message: string;
  onMessageChange: (id: number, message: string) => void;
  onPrint: (id: number) => void;
  isPrinted: boolean;
};

const MessageBox: React.FC<MessageBoxProps> = ({
  id,
  message,
  onMessageChange,
  onPrint,
  isPrinted,
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
    </form>
  );
};

export default MessageBox;
