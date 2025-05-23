import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { Btn } from "@/components/ui/Button";
import { APP_NAME } from "@/lib/constants";

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
          <Btn
            label="Cart"
            variant="text"
            leftIcon={<ShoppingCartIcon className="w-4 h-4" />}
          />
          <Btn
            label="Sign in"
            variant="text"
            leftIcon={<UserIcon className="w-4 h-4" />}
          />
        </div>
      </div>
    </header>
  );
};
