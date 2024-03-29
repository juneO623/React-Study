import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/">
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about">
        <span className={router.pathname === "/about" ? "active" : ""}>
          About
        </span>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        span {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
