import styles from "./NavBar.module.css";

import Link from "next/link";
import NavigationItem from "./NavigationItem";

type NavigationItem = {
  href: string;
  name: string;
};

const navigation: NavigationItem[] = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
  { href: "/blog", name: "Blog" },
];

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        {navigation.map(({ href, name }) => (
          <NavigationItem key={href} href={href} name={name} />
        ))}
      </ul>
    </nav>
  );
}
