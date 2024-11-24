import styles from "./NavBar.module.css";

import Link from "next/link";

type NavigationItem = {
  href: string;
  name: string;
};

const navigation: NavigationItem[] = [
  { href: "/", name: "Home" },
  { href: "/print", name: "Print" },
];

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul>
        {navigation.map(({ href, name }) => (
          <li key={href}>
            <Link href={href}>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
