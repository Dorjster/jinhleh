"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className="w-[600px] text-3xl text-green-600 hover:text-neutral-700 transition-colors duration-300 ease-in-out"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
