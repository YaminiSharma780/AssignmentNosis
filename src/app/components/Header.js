import styles from "../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerSearch}>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search for books" />
      </div>
      <div className={styles.headerLang}>
        <FontAwesomeIcon icon={faSearch} />
        <select name="lang" id="lang">
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className={styles.headerSignin}>
        <button>Signin</button>
      </div>
    </header>
  );
}
