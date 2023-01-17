import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/">
        <span style={{ color: router.pathname === "/" ? "red" : "blue" }}>
          Home
        </span>
      </Link>
      <Link href="/about">
        <span style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </span>
      </Link>
    </nav>
  );
}
