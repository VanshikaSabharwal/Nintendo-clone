"use client"; // Ensures this module is parsed and executed as client-side only
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [language, setLanguage] = useState("allcategories"); // Ensure the initial state matches one of the option values

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <div className="nav">
        <div className="logoSearch">
          <div className="logo">
            <Link href="/" className="logoImg">
              <img
                src="images/nintendo-logo-red-background.jpg"
                alt="Nintendo Logo"
              />
            </Link>
          </div>
          <div className="search">
            <form action="#">
              <button type="submit">
                <div className="searchImg">
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
                  <span
                    style={{
                      color: "#9b9b9b",
                      fontWeight: "300",
                    }}
                  >
                    Search
                  </span>
                </div>
              </button>
              <select
                name="language"
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="navSelect"
              >
                <option value="allcategories">All categories</option>
                <option value="games">Games</option>
                <option value="hardware">Hardware</option>
                <option value="merchandise">Merchandise</option>
                <option value="news&events">News & Events</option>
                <option value="support">Support</option>
              </select>
              <input type="text" />
            </form>
          </div>
        </div>
        <div className="links">
          <ul>
            <li className="row">
              <Link href="/support">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-question-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 118 1a7 7 0 018 8zm-.11-3.004a.61.61 0 00.11.004.5.5 0 00.5-.5V8.5a.5.5 0 00-.5-.5h-.5a.5.5 0 00-.5.5v1a1.993 1.993 0 01-.601 1.416c-.395.41-.73.584-.73 1.09zm0-6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  />
                </svg>
                Support
              </Link>
            </li>
            <li className="row">
              <Link href="/wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                Wishlist
              </Link>
            </li>
            <li className="row">
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                Cart
              </Link>
            </li>
            <li className="row">
              <Link href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                Login/Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
