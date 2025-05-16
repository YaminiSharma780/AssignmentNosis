"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { books } from "../data/books";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../page.module.css";
import {
  faBook,
  faBookmark,
  faChevronLeft,
  faChevronRight,
  faCircleExclamation,
  faClock,
  faEllipsis,
  faHandHoldingDollar,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Link from "next/link";
import BottomLogo from "../common/BottomLogo";
export default function BookPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const book = books.find((b) => String(b.id) === id);
  if (!book) return <div>Book not found.</div>;

  const [toggle, setToggle] = useState(false);
  const moreRef = useRef(null);
  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.library}>
      {/* Back and Selector Buttons */}
      <div className={styles.bookButtons}>
        <Link href="/home" className={styles.bookButtonsBackButton}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>Back</p>
        </Link>
        <div className={styles.bookButtonsSelectorButton}>
          <FontAwesomeIcon
            className={styles.ellipsesSelectorButton}
            icon={faEllipsis}
            onClick={() => setToggle(!toggle)}
            style={{ cursor: "pointer" }}
          />
          <div
            style={{
              display: toggle === true ? "block" : "none",
              cursor: "pointer",
            }}
            className={styles.ellipsesSelector}
          >
            <div>
              <FontAwesomeIcon icon={faCircleExclamation} />
              <p>Report Errors</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faHandHoldingDollar} />
              <p>Claim this page</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <p>Rate this title</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faShare} />
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
      {/* Book Detail */}
      <div className={styles.libBooksDetail}>
        <div className={styles.libBooksDetailContent}>
          <div className={styles.libBooksDetailCard1}>
            <Image src={book.img} alt={book.name} width={180} height={180} />
            <div className={styles.libBooksDetailCardDiv}>
              <h1>{book.name}</h1>
              <p>{book.author}</p>
              <div className={styles.partsAndMins}>
                <div>
                  <FontAwesomeIcon icon={faBook} />
                  <p>{book.parts} parts</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faClock} />
                  <p>{book.minutes} mins</p>
                </div>
              </div>
              <div className={styles.bookTags}>
                <div>
                  <p>Philosophy</p>
                </div>
                <div>
                  <p>Philosophy</p>
                </div>
                <div>
                  <p>Philosophy</p>
                </div>
              </div>
              <div className={styles.libBooksDetailCardBtnsDiv}>
                <div className={styles.libBooksDetailCardButton1}>
                  <FontAwesomeIcon icon={faBook} />
                  <p>Read</p>
                </div>
                <div className={styles.libBooksDetailCardButton2}>
                  <FontAwesomeIcon icon={faBookmark} />
                  <p>Bookmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* Preface */}
      <div className={styles.bookPreface}>
        <div className={styles.booksPrefaceHeading}>
          <h3>Preface</h3>
        </div>
        <div className={styles.booksPrefaceContent}>
          <p>{book.preface}</p>
        </div>
      </div>
      {/* Contents */}
      <div className={styles.bookContents}>
        <div className={styles.booksContentsHeading}>
          <h3>Contents</h3>
        </div>
        <div className={styles.booksContentsContent}>
          {book.contents.map((c) => (
            <div key={c.id} className={styles.booksContentsSection}>
              <p>{c.id}</p>
              <p>{c.topic}</p>
            </div>
          ))}
        </div>
      </div>
      {/* About Author */}
      <div className={styles.bookAuthor}>
        <div className={styles.bookAuthorHeading}>
          <h3>About Author</h3>
        </div>
        <div className={styles.bookAuthorContents}>
          <h4>Viktor E. Frankl</h4>
          <p>{book.aboutAuthor}</p>
        </div>
      </div>
      {/* More like this */}
      <div className={styles.moreLikeThis}>
        <div className={styles.readersDiv1}>
          <h3>More like this</h3>
          <div className={styles.readersDiv1Div}>
            <button onClick={() => scroll(moreRef, "left")}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={() => scroll(moreRef, "right")}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className={styles.readersDiv2} ref={moreRef}>
          {books.map((b) => (
            <Link
              key={b.id}
              href={{
                pathname: "/book",
                query: { id: b.id },
              }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.readersCard}>
                <Image
                  style={{ cursor: "pointer" }}
                  src={b.img}
                  alt={b.name}
                  width={180}
                  height={180}
                />
                <h4>{b.name}</h4>
                <p>{b.author}</p>
                <div>
                  <p>{b.parts} parts</p>
                  <p>{b.minutes} mins</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Bottom Logo */}
      <BottomLogo />
    </div>
  );
}
