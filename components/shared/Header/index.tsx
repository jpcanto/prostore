"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { Btn } from "@/components/ui/Button";
import { APP_NAME } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <ThemeToggle />
          <Btn size="large" variant="text">
            <ShoppingCartIcon className="w-4 h-4 mr-2" />
            Cart
          </Btn>
          <Btn size="large" variant="contained">
            <UserIcon className="w-4 h-4 mr-2" />
            Sign in
          </Btn>
        </div>
      </div>
    </header>
  );
};
