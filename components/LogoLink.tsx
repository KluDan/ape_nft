"use client";
import { useState } from "react";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";

interface CustomLinkProps {
  href: string;
  isMenuOpen?: boolean;
  children: React.ReactNode;
}

const LogoLink = ({ href, children, isMenuOpen }: CustomLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useWindowSize();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`square-frame transition ${
        isHovered ? "text-white" : "text-textBlack"
      } ${
        isMenuOpen ? "text-white bg-gray" : "text-textBlack bg-opacityBlack"
      } ${isMenuOpen && isHovered && "text-primary"}`}
    >
      {children}
    </Link>
  );
};

export default LogoLink;
