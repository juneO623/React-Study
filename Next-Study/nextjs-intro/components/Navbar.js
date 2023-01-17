import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/">
        <span
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </span>
      </Link>
      <Link href="/about">
        <span
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </span>
      </Link>
    </nav>
  );
}
