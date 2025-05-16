"use client";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBook,
  faQuestionCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <nav className={styles.sidebar}>
      <div className={styles.routes}>
        <div className={styles.logo}>
          <Image src="/assets/sun.svg" alt="sun" width={25} height={25} />
          <Image src="/assets/nosis.svg" alt="nosis" width={45} height={25} />
        </div>
        <div className={styles.routesDiv}>
          <div className={styles.route}>
            <FontAwesomeIcon icon={faHome} />
            <Link
              className={pathname === "/home" ? styles.active : ""}
              href="/home"
            >
              Home
            </Link>
          </div>
          <div className={styles.route}>
            <FontAwesomeIcon icon={faSearch} />
            <Link href="/explore">Explore</Link>
          </div>
          <div className={styles.route}>
            <FontAwesomeIcon icon={faBook} />
            <Link
              className={pathname === "/library" ? styles.active : ""}
              href="/library"
            >
              Library
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.invite}>
          <FontAwesomeIcon icon={faHome} />
          <button>Invite Friends</button>
        </div>
        <div className={styles.routesDiv}>
          <div className={styles.route}>
            <FontAwesomeIcon size={20} icon={faQuestionCircle} />
            <Link href="/">Request a book</Link>
          </div>
          <div className={styles.route}>
            <FontAwesomeIcon size={20} icon={faUser} />
            <Link href="/">About Us</Link>
          </div>
          <div className={styles.route}>
            <FontAwesomeIcon size={20} icon={faUser} />
            <Link href="/">My Account</Link>
          </div>
        </div>
        <div className={styles.socials}>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </nav>
  );
}
