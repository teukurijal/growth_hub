import { Inter } from "next/font/google";
import { Icon } from "@iconify-icon/react";
import { palette } from "@/constans/color";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const menus = [
    {
      key: 1,
      label: "Home",
      icon: "iconamoon:home-light",
      path: "#",
    },
    {
      key: 2,
      label: "Skill",
      icon: "carbon:idea",
      path: "#",
    },
    {
      key: 3,
      label: "Well+",
      icon: "solar:health-broken",
      path: "#",
    },
    {
      key: 4,
      label: "Shelf",
      icon: "icon-park-outline:bookshelf",
      path: "#",
    },
    {
      key: 5,
      label: "habit",
      icon: "material-symbols:routine-outline",
      path: "#",
    },
  ];
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-[20px] fixed left-0 top-0 flex w-full p-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Growth Hub
        </p>

        <div className="fixed grid grid-cols-5 bottom-0 left-0 flex  w-full items-end justify-center bg-white text-black from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {menus?.map((menu) => (
            <>
              <a
                key={menu.key}
                className="justify-center text-[12px] pointer-events-none flex flex-col place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
                href="#"
                rel="noopener noreferrer"
              >
                <Icon
                  width={30}
                  height={30}
                  icon={menu.icon}
                  style={{ color: palette.secondary }}
                />
                <p style={{ color: palette.secondary }}>{menu.label}</p>
              </a>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
