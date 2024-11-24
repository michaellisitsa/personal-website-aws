"use client";

import { useActivePath } from "@/utils/useActivePathName";
import Link from "next/link";
import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
  href: string;
  name: string;
}

export default function NavigationItem(props: NavigationItemProps) {
  const checkActivePath = useActivePath();
  return (
    <li
      key={props.href}
      className={`${styles["list-item"]} ${
        checkActivePath(props.href) ? styles.active : ""
      }`}
    >
      <Link
        href={props.href}
        className={`${styles.link} ${
          checkActivePath(props.href) ? "active" : ""
        }`}
      >
        <span>{props.name}</span>
      </Link>
    </li>
  );
}
