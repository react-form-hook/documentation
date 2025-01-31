import Link from "next/link"
import nav from "../data/nav"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <Link href="/">{nav.home}</Link>
        </li>
        <li>
          <Link href="/get-started">{nav.getStarted}</Link>
        </li>
        <li>
          <Link href="/docs">API</Link>
        </li>
        <li>
          <Link href="/ts">TS</Link>
        </li>
        <li>
          <Link href="/advanced-usage">{nav.advanced}</Link>
        </li>
        <li>
          <Link href="/faqs">{nav.faqs}</Link>
        </li>
        <li>
          <Link href="/form-builder">{nav.builder}</Link>
        </li>
        <li>
          <Link href="/dev-tools">DevTools</Link>
        </li>
        <li>
          <Link href="/resources/articles">{nav.resources}</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/media">Media</Link>
        </li>
      </ul>
      <p>
        React Hook Form is an awesome Library by {" "}
        <a
          href="https://www.beekai.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="BEEKAI Form builder"
        >
          <b>BEEKAI</b>
        </a>{" "}
        | Please support them by leaving a ★{" "}
        <a
          href="https://github.com/react-hook-form/react-hook-form"
          target="_blank"
          rel="noreferrer noopener"
        >
          @github
        </a>
      </p>
    </footer>
  )
}
