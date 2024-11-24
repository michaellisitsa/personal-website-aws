import NavBar from "./NavBar";
import styles from "./FullPage.module.css";

export default function FullPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
}
