"use client";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoDark from "@/public/logo.png";
import logoLight from "@/public/logow.png";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [logo, setLogo] = useState(logoDark);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setLogo(logoLight);
    } else {
      setLogo(logoDark);
    }
  }, [resolvedTheme]);
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href={"/"} className="text-2xl font-bold text-primary">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="hover:cursor-pointer transition-all hover:opacity-60 hover:animate-pulse hover:duration-1000 hover:ease-in-out"
            />
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
};

export default Navbar;
