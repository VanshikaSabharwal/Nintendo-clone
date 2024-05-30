import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const support = () => {
  return (
    <div className={styles.support}>
      <div className={styles.supportContainer}>
        <div className={styles.topSupport}>
          <div className={styles.supportLogo}>
            <Link href="/" className="logoImg">
              <img
                src="images/nintendo-logo-red-background.jpg"
                alt="Nintendo Logo"
              />
            </Link>
          </div>
          <div className={styles.supportLogin}>
            <Link href="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              Login/Sign Up
            </Link>
          </div>
        </div>
        <div className={styles.mainSupport}>
          <div className={styles.supportHeadingContainer}>
            <div className={styles.supportHeading}>
              <h1>
                Welcome to <br /> Customer Support
              </h1>
            </div>
            <div className={styles.supportSearch}>
              <form action="https://en-americas-support.nintendo.com/app/answers/list/kw">
                <input
                  type="text"
                  id="searchBar"
                  name="q"
                  placeholder="Search Support"
                />
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className={styles.supportImg}>
            <Image
              src="/images/marioFunImg.png"
              objectFit="cover"
              width={500}
              height={300}
              quality={100}
              alt="mario img"
            />
          </div>
        </div>
      </div>
      <div className={styles.supportTrendingArticle}>
        <h1>Trending Articles</h1>
        <ul>
          <li>
            <Link href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/15997">
              Nintendo Account FAQ
            </Link>
          </li>
          <li>
            <Link href="https://en-americas-support.nintendo.com/app/ask/ht/887">
              Link to a URL Nintendo Switch Bundle Download Code Insert Is
              Scratched, Damaged, or Not Working
            </Link>
          </li>
          <li>
            <Link href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/22542">
              The Nintendo Switch Console Cannot Find Your Wireless Network
            </Link>
          </li>
          <li>
            <Link href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/59077">
              Issues Signing in to a Nintendo Account
            </Link>
          </li>
          <li>
            <a href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/22502">
              Nintendo Switch System Has No Power, a Blank Screen, or Won't Wake
              Up from Sleep Mode
            </a>
          </li>
          <li>
            <Link href="https://en-americas-support.nintendo.com/app/ask/ht/788">
              Nintendo eShop Prepaid Card Is Scratched, Damaged or Not Working
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.supportContainerlinks}>
        <ul>
          <li>
            <Image src="" width={250} height={250} alt="img" />
            <div className={styles.supportTitle}>
              <h1></h1>
              <ul className={styles.supportLinks}>
                <li>
                  <Link href="" />
                </li>
                <li>
                  <Link href="" />
                </li>
                <li>
                  <Link href="" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Image src="" width={250} height={250} alt="img" />
            <div className={styles.supportTitle}>
              <h1></h1>
              <ul className={styles.supportLinks}>
                <li>
                  <Link href="" />
                </li>
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Image src="" width={250} height={250} alt="img" />
            <div className={styles.supportTitle}>
              <h1></h1>
              <ul className={styles.supportLinks}>
                <li>
                  <Link href="" />
                </li>
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Image src="" width={250} height={250} alt="img" />
            <div className={styles.supportTitle}>
              <h1></h1>
              <ul className={styles.supportLinks}>
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Image src="" width={250} height={250} alt="img" />
            <div className={styles.supportTitle}>
              <h1></h1>
              <ul className={styles.supportLinks}>
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Image src="" width={250} height={250} alt="img" />
            <div className={styles.supportTitle}>
              <h1></h1>
              <ul className={styles.supportLinks}>
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>{" "}
                <li>
                  <Link href="" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.supportQuickLinks}>
        <ul>
          <li>
            <Link href="">
              <Image
                src="/images/oceanimg.png"
                width={300}
                height={300}
                alt="img"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src="" width={300} height={300} alt="img" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src="" width={300} height={300} alt="img" />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src="" width={300} height={300} alt="img" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default support;
