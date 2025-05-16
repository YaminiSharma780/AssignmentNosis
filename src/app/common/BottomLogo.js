import styles from "../page.module.css";
import Image from "next/image";

export default function BottomLogo() {
  return (
    <div className={styles.bottomLogo}>
      <Image
        src="/assets/books/nextgen.svg"
        alt="bottomlogo"
        width={180}
        height={180}
      />
    </div>
  );
}
