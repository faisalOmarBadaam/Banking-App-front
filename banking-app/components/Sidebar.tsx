"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = (_props: SidebarProps) => {
  const PathName = usePathname();
  return (
    <section className="sticky left-0 top-0 hidden h-screen w-47 flex-col border-r border-gray-200 bg-white px-4 py-6 shadow-form md:flex xl:w-55">
      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto pb-2">
        <Link
          href="/"
          className="mb-8 flex items-center gap-3 rounded-xl px-2 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-25 hover:text-blue-600"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Dashboard"
            className="size-8"
          />
          <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
            B3
          </h1>
        </Link>

        {sidebarLinks.map((link) => {
          const isActive =
            PathName === link.route || PathName.startsWith(link.route);
          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-gray-25",
                {
                  "bg-bank-gradient shadow-form hover:bg-bank-gradient":
                    isActive,
                },
              )}
            >
              <div className="relative size-6 ">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({ "filter brightness-3 invert-0": isActive })}
                />
              </div>

              {isActive && (
                <span className="absolute left-0 top-2 h-[calc(100%-16px)] w-1 rounded-r-full bg-white/70" />
              )}

              <p
                className={cn(
                  "text-16 font-semibold text-black-2 max-xl:hidden",
                  { "text-white!": isActive },
                )}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
