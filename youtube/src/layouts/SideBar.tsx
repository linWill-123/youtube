import { Home } from "lucide-react";
import { ElementType } from "react";

export function SideBar() {
  return (
    <aside className="stick top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
      <SmallSideBarItem Icon={Home} title="Home" url="/" />
    </aside>
  );
}

type SmallSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSideBarItem({ Icon, title, url }: SmallSideBarItemProps) {
  return (
    <a href={url} className="">
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
