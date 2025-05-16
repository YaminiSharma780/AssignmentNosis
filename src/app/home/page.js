"use client";
import styles from "../page.module.css";
import { categories } from "../data/categories";
import { books } from "../data/books";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRef } from "react";
import BottomLogo from "../common/BottomLogo";
import Link from "next/link";

export default function HomePage() {
  const readersRef = useRef(null);
  const featuredRef = useRef(null);
  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <main className={styles.main}>
      {/* Readers Choice */}
      <div className={styles.readers}>
        <div className={styles.readersDiv1}>
          <h3>Readers' Choice</h3>
          <div className={styles.readersDiv1Div}>
            <button onClick={() => scroll(readersRef, "left")}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={() => scroll(readersRef, "right")}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className={styles.readersDiv2} ref={readersRef}>
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
      {/* Categories */}
      <div className={styles.categories}>
        <div className={styles.categoriesDiv1}>
          <h3>Categories</h3>
        </div>
        <div className={styles.categoriesDiv2}>
          {categories.map((c) => {
            return (
              <div key={c.id} className={styles.categoriesCard}>
                <FontAwesomeIcon icon={c.icon} />
                <p>{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Books Month */}
      <div className={styles.booksMonth}>
        <div className={styles.booksMonthHeading}>
          <h3>Books Month</h3>
        </div>
        <div className={styles.booksMonthContent}>
          <div className={styles.booksMonthCard1}>
            <Image
              src="/assets/books/book2.png"
              alt="book2"
              width={180}
              height={180}
            />
            <div className={styles.booksMonthCardDiv}>
              <h4>The Blue Zones Solution </h4>
              <p>Dan Buettner</p>
              <p>0 mins</p>
              <div className={styles.booksMonthCardBtnsDiv}>
                <div className={styles.booksMonthCardButton1}>
                  <FontAwesomeIcon icon={faBook} />
                  <p>Read</p>
                </div>
                <div className={styles.booksMonthCardButton2}>
                  <FontAwesomeIcon icon={faBookmark} />
                  <p>Bookmark</p>
                </div>
              </div>
              <p>
                This summary offers a concise overview of *The Blue Zones
                Solution* by Dan Buettner, capturing its k...
              </p>
            </div>
          </div>
          <div className={styles.booksMonthCard2}>
            <Image
              src="/assets/books/book2.png"
              alt="book2"
              width={180}
              height={180}
            />
            <div className={styles.booksMonthCardDiv}>
              <h4>The Blue Zones Solution </h4>
              <p>Dan Buettner</p>
              <p>0 mins</p>
              <div className={styles.booksMonthCardBtnsDiv}>
                <div className={styles.booksMonthCardButton1}>
                  <FontAwesomeIcon icon={faBook} />
                  <p>Read</p>
                </div>
                <div className={styles.booksMonthCardButton2}>
                  <FontAwesomeIcon icon={faBookmark} />
                  <p>Bookmark</p>
                </div>
              </div>
              <p>
                This summary offers a concise overview of *The Blue Zones
                Solution* by Dan Buettner, capturing its k...
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* Featured Books */}
      <div className={styles.featuredBooks}>
        <div className={styles.readersDiv1}>
          <h3>Featured Books</h3>
          <div className={styles.readersDiv1Div}>
            <button onClick={() => scroll(featuredRef, "left")}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={() => scroll(featuredRef, "right")}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className={styles.readersDiv2} ref={featuredRef}>
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
      {/* Curated Pathways */}
      <div className={styles.curatedPathways}>
        <h2>Curated Pathways</h2>
        <p>Carefully crafted learning journeys</p>
        <div className={styles.curatedCardList}>
          <div className={styles.curatedCard}>
            <h2>Healthy Living</h2>
            <p>Healthy Living</p>
            <div className={styles.curatedCardInside}>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book2.png"
                  alt="book2"
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book4.png"
                  alt="book4"
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book1.png"
                  alt="book1"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
          <div className={styles.curatedCard}>
            <h2>Readers' Choice</h2>
            <p>Readers' Choice</p>
            <div className={styles.curatedCardInside}>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book3.png"
                  alt="book3"
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book5.png"
                  alt="book5"
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book2.png"
                  alt="book2"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
          <div className={styles.curatedCard}>
            <h2>Featured Books</h2>
            <p>Featured Books</p>
            <div className={styles.curatedCardInside}>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book4.png"
                  alt="book4"
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book1.png"
                  alt="book1"
                  width={180}
                  height={180}
                />
              </div>
              <div className={styles.curatedCardInsideDiv}>
                <Image
                  src="/assets/books/book5.png"
                  alt="book5"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomLogo />
    </main>
  );
}
