import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
      >
        <div
          className="
        flex flex-col items-center gap-4
        rounded-[60px] border border-[#E5E5E5] px-4 py-3
        md:flex-row md:justify-center md:gap-0 md:px-6
      "
        >
          <Link href="/" className="flex items-center gap-2 md:pr-6">
            <Image
              src="/assets/logo.svg"
              alt="Payslate logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-secondary font-medium text-[20px] text-gray-900">
              Pay<span className="text-[#804FB0]">slate</span>
            </span>
          </Link>

          <ul
            className="
          flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-700
          md:ml-6 md:flex-nowrap md:gap-8
        "
          >
            <li>
              <Link href="/" className="font-medium text-[16px]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" className="font-medium text-[16px]">
                Features
              </Link>
            </li>

            <li>
              <Link href="/how-it-works" className="font-medium text-[16px]">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="font-medium text-[16px]">
                Testimonials
              </Link>
            </li>
            <li>
              <Button label="Download APP" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
