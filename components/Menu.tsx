"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="padding-container absolute top-0 left-0 z-10 bg-main w-full h-full flex flex-col justify-center items-center">
      <ul className="flex flex-col gap-[32px] justify-center items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-messina text-white uppercase bold-24 transition hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="absolute padding-container bottom-[80px] font-messina regular-12 text-white text-center uppercase">
        © Yacht ape 2024 all rights reserved
      </p>
    </div>
  );
};

export default Menu;
