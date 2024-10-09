"use client";
import { useState } from "react";
import ASILogo from "@/asset/asi_wite_logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const tabList = [
  {
    label: "Services",
    name: "services",
    icon: "fa-brands fa-servicestack",
  },
  {
    label: "Logs",
    name: "logs",
    icon: "fa-solid fa-chart-simple",
  },
  {
    label: "Settings",
    name: "settings",
    icon: "fa-solid fa-gears",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)

  type IActiveTab = "services" | "logs" | "settings";
  const [activeTab, setActiveTab] = useState<IActiveTab>(pathname.substring(1) as IActiveTab);

  const onTabClick = (tab: IActiveTab) => {
    setActiveTab(tab);
    router.push(`/${tab}`);
  };

  return (
    <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
      <section className="sidebar-title items-center p-4">
        <div className="w-[60px] mr-[10px]">
          <Image src={ASILogo} alt={"logo"} width={125} height={80} />
        </div>
        <div className="flex flex-col">
          <span>IT Developer</span>
          <span className="text-xs font-normal text-content2">Team</span>
        </div>
      </section>
      <section className="sidebar-content">
        <nav className="menu rounded-md">
          <section className="menu-section px-4">
            <ul className="menu-items">
              {tabList.map((item) => (
                <li
                  key={item.name}
                  className={`menu-item ${
                    activeTab === item.name ? "menu-active" : ""
                  }`}
                  onClick={() => onTabClick(item.name as IActiveTab)}
                >
                  <i className={item.icon} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </section>
    </aside>
  );
}
