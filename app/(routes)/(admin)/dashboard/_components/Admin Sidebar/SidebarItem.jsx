"use client";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
const SidebarItem = ({ href, label, Icon }) => {
  const router = useRouter();
  const pathname = usePathname();
  function onClick() {
    router.push(href);
  }
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-pink-700 bg-pink-200/20 hover:bg-pink-200/20 hover:text-pink-700"
      )}
    >
      <div className="flex item-center gap-x-2 py-4 w-full">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-pink-700")}
        />
      {label}
      </div>
      <div
       className={cn("cl-auto opacity-0 border-2 border-pink-700 h-full transition-all",isActive&&" opacity-100")}/>
    </button>
  );
};

export default SidebarItem;
