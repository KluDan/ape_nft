"use client";
import { NAV_LINKS } from "@/constants";
import useWindowSize from "@/hooks/useWindowSize";
import { Logo, LogoDiscord, LogoMark, LogoX } from "@/public/icons";
import Link from "next/link";
import { useState } from "react";
import LogoLink from "./LogoLink";
import Menu from "./Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useWindowSize();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="padding-wrapper fixed top-[62px] md:top-[66px] xl:top-[40px] z-20 px-3 w-full max-w-[1440px]">
        <nav className="padding-header flex w-full justify-between items-center z-100">
          <Link href="/">
            <Logo
              className={`w-[48px] h-[32px] xl:w-[72px] xl:h-[50px] transition ${
                isMenuOpen && isSmallScreen
                  ? "text-white hover:text-primary "
                  : "text-textBlack  hover:text-white "
              }`}
            />
          </Link>
          <div className="relative">
            <div
              className={`mb-[8px] xl:mb-[16px] bold-12 xl:bold-16 font-messina ${
                isMenuOpen &&
                !isSmallScreen &&
                "flex flex-row-reverse items-center bg-opacityBlack rounded-xl pl-[5px] xl:pl-[15px] py-[14.5px] h-[48px] xl:h-20"
              }`}
            >
              <button
                onClick={toggleMenu}
                className={`${
                  isMenuOpen && !isSmallScreen && "bg-transparent"
                } ml-[10px] uppercase cursor-pointer transition  hover:underline ${
                  isMenuOpen && isSmallScreen
                    ? "square-frame-blur bg-gray text-white hover:text-primary"
                    : "square-frame bg-opacityBlack text-textBlack hover:text-white"
                }`}
              >
                {isMenuOpen ? "close" : "menu"}
              </button>
              {!isSmallScreen && isMenuOpen && (
                <ul className="flex gap-[10px] md:gap-[16px] xl:gap-[39px] justify-center items-center h-auto leading-none">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-textBlack uppercase transition hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className="absolute right-0 flex flex-col gap-[8px] xl:gap-[16px]">
              <li>
                <LogoLink
                  href="https://discord.com/"
                  isMenuOpen={isSmallScreen ? isMenuOpen : undefined}
                >
                  <LogoDiscord className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                </LogoLink>
              </li>
              <li>
                <LogoLink
                  href="/"
                  isMenuOpen={isSmallScreen ? isMenuOpen : undefined}
                >
                  <LogoMark className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                </LogoLink>
              </li>
              <li>
                <LogoLink
                  href="https://twitter.com/"
                  isMenuOpen={isSmallScreen ? isMenuOpen : undefined}
                >
                  <LogoX className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                </LogoLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isMenuOpen && isSmallScreen && <Menu />}
    </>
  );
};

export default Header;
