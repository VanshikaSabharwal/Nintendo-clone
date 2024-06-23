"use client";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { TbCloudCode } from "react-icons/tb";
import { PiPlusBold, PiMouseMiddleClickDuotone } from "react-icons/pi";
import { BiSolidCommentDetail } from "react-icons/bi";
import { RiStarSmileFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import { IoStar, IoPricetag } from "react-icons/io5";
import { MdSmartToy } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const LowerNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  return (
    <>
      <div className="lowerNav flex justify-center flex-row gap-12">
        <div className="flex justify-center flex-row items-center redClrHover gap-x-4">
          <TbCloudCode className="redClrHover" />
          <button
            className="flex items-center justify-center flex-row cursor-pointer redClrHover"
            onClick={() => toggleDropdown("store")}
          >
            My Nintendo Store
            {activeDropdown === "store" ? (
              <AiOutlineCaretUp />
            ) : (
              <AiOutlineCaretDown />
            )}
          </button>
        </div>
        <div className="flex relative flex-row justify-center items-center redClrHover gap-x-4">
          <PiPlusBold className="redClrHover" />
          <button
            className="flex items-center justify-center flex-row cursor-pointer redClrHover"
            onClick={() => toggleDropdown("games")}
          >
            Games
            {activeDropdown === "games" ? (
              <AiOutlineCaretUp />
            ) : (
              <AiOutlineCaretDown />
            )}
          </button>
        </div>
        <div className="flex relative flex-row justify-center items-center redClrHover">
          <PiMouseMiddleClickDuotone className="redClrHover" />
          <button
            className="flex items-center justify-center flex-row cursor-pointer redClrHover"
            onClick={() => toggleDropdown("switch")}
          >
            Nintendo Switch
            {activeDropdown === "switch" ? (
              <AiOutlineCaretUp />
            ) : (
              <AiOutlineCaretDown />
            )}
          </button>
        </div>
        <div className="flex justify-center flex-row items-center redClrHover">
          <BiSolidCommentDetail />
          <button
            className="flex items-center justify-center flex-row cursor-pointer redClrHover"
            onClick={() => toggleDropdown("play")}
          >
            <Link href="/">News & Events</Link>
          </button>
        </div>
        <div className="flex justify-center flex-row items-center redClrHover">
          <RiStarSmileFill className="redClrHover" />
          <button
            className="flex items-center justify-center flex-row cursor-pointer redClrHover"
            onClick={() => toggleDropdown("play")}
          >
            Play Nintendo
            {activeDropdown === "play" ? (
              <AiOutlineCaretUp />
            ) : (
              <AiOutlineCaretDown />
            )}
          </button>
        </div>
      </div>

      {activeDropdown === "store" && (
        <motion.div
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="dropdownContent flex justify-center"
        >
          <div className="widthFull storeSection">
            <div className="topSection">
              <TbCloudCode />
              <p>My Nintendo Store</p>
            </div>

            <div className="middleSection flex">
              <div className="linkMiddleSection gamesSectionLink">
                <div className="headingMiddleSection">
                  <PiPlusBold />
                  <h2>Games</h2>
                </div>
                <div className="linksMiddleSection">
                  <a href="">Nintendo Switch games</a>
                  <a href="">New releases</a>
                  <a href="">Sales & deals</a>
                </div>
              </div>
              <div className="linkMiddleSection hardwareSectionLink">
                <div className="headingMiddleSection">
                  <IoLogoGameControllerB />
                  <h2>Hardware</h2>
                </div>
                <div className="linksMiddleSection">
                  <a href="">Nintendo Switch systems</a>
                  <a href="">Joy-con & controllers</a>
                  <a href="">Cases & more</a>
                  <a href="">amiibo</a>
                </div>
              </div>
              <div className="linkMiddleSection merchandise">
                <div className="headingMiddleSection">
                  <FaTshirt />
                  <h2>Merchandise</h2>
                </div>
                <div className="linksMiddleSection">
                  <a href="">Apparel & accessories</a>
                  <a href="">Home & office</a>
                  <a href="">Plush</a>
                  <a href="">Toys</a>
                </div>
              </div>
              <div className="linkMiddleSection storeExclusives">
                <div className="headingMiddleSection">
                  <IoStar />
                  <h2>Store exclusives</h2>
                </div>
                <div className="linksMiddleSection">
                  <a href="">Exclusive products</a>
                  <a href="">My Nintendo rewards</a>
                  <a href="">Nintendo Switch Online offers</a>
                </div>
              </div>
              <div className="linkMiddleSection characters">
                <div className="headingMiddleSection">
                  <MdSmartToy />
                  <h2>Characters</h2>
                </div>
                <div className="linksMiddleSection">
                  <a href="">Pikmin</a>
                  <a href="">Splatoon</a>
                  <a href="">Super Mario</a>
                  <a href="">The Legend of Zelda</a>
                </div>
              </div>
              <div className="linkMiddleSection salesDeals">
                <div className="headingMiddleSection">
                  <IoPricetag />
                  <h2>Sales & deals</h2>
                </div>
              </div>
            </div>

            <div className="lowerSection">
              <button>
                <a href="">Shop all</a>
              </button>
            </div>
          </div>
        </motion.div>
      )}
      {activeDropdown === "games" && (
        <div className="dropdownContent flex justify-center">
          <div className="gamesSection">
            <div className="gamesbtn">
              <button>
                <Link href="">
                  <Image
                    src="/images/nintendo-switch.png"
                    width={32}
                    height={16}
                    className="contrast-0"
                    alt=""
                  />
                </Link>
              </button>
              <p>Nintendo Switch games</p>
            </div>
            <div className="gamesbtn">
              <button>
                <Link href="">
                  <Image
                    src="/images/speaker.png"
                    width={32}
                    height={16}
                    className="contrast-0"
                    alt=""
                  />
                </Link>
              </button>
              <p>New releases</p>
            </div>
            <div className="gamesbtn">
              <button>
                <Link href="">
                  <Image
                    src="/images/calendar.png"
                    width={32}
                    height={16}
                    className="contrast-0"
                    alt=""
                  />
                </Link>
              </button>
              <p>Coming soon</p>
            </div>
            <div className="gamesbtn">
              <button>
                <Link href="">
                  <Image
                    src="/images/plus.png"
                    width={32}
                    height={16}
                    className="contrast-0"
                    alt=""
                  />
                </Link>
              </button>
              <p>Shop games</p>
            </div>
          </div>
        </div>
      )}
      {activeDropdown === "switch" && (
        <div className="dropdownContent flex justify-center">
          <div className="gamesSection">
            <div className="gamesbtn">
              <button>
                <Link href="Link">
                  <Image
                    src="/images/mobileConsoles.png"
                    width={128}
                    height={128}
                    alt=""
                  />
                </Link>
              </button>
              <p>Nintendo Switch lineup</p>
            </div>
            <div className="gamesbtn">
              <button>
                <Link href="">
                  <Image
                    src="/images/twoArrows.png"
                    width={80}
                    height={80}
                    className="contrast-0"
                    alt=""
                  />
                </Link>
              </button>
              <p>Compare systems</p>
            </div>
            <div className="gamesbtn">
              <button>
                <Link href="">
                  <Image
                    src="/images/onlineimg.png"
                    width={80}
                    height={80}
                    className="p-4"
                    alt=""
                  />
                </Link>
              </button>
              <p>Online service</p>
            </div>
            <div className="gamesbtn">
              <button>
                <a href="">
                  <Image
                    src="/images/gameConsole.png"
                    width={80}
                    height={80}
                    alt=""
                  />
                </a>
              </button>
              <p>Accessories</p>
            </div>
            <div className="gamesbtn">
              <button>
                <Link href="">
                  <Image
                    src="/images/accessories.png"
                    width={80}
                    height={80}
                    alt=""
                  />
                </Link>
              </button>
              <p>Shop systems</p>
            </div>
          </div>
        </div>
      )}
      {activeDropdown === "play" && (
        <div className="dropdownContent flex justify-center">
          <div className="playSection">
            <div className="playBtn">
              <button>
                <Link href="/">
                  <Image
                    src="/images/twoSmileyFace.png"
                    width={128}
                    height={128}
                  />
                </Link>
              </button>
              <p>For kids</p>
            </div>
            <div className="playBtn">
              <button>
                <Link href="/">
                  <Image
                    src="/images/momSonSmiley.png"
                    width={128}
                    height={128}
                  />
                </Link>
              </button>
              <p>For parents</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LowerNavbar;
