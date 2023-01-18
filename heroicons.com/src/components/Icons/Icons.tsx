import { outlineIcons, solidIcons, miniIcons } from "./outline";
import Image from "next/image";

type IconsProps = {
  filter: string;
  search: string;
};

export const Icons = ({ filter, search }: IconsProps) => {
  return (
    <div className="mx-4 grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-8 overflow-hidden pt-10 pb-16 sm:mx-6 sm:pt-11 md:mx-8 md:pt-12">
      {(filter === "outline" && (
        <Tiles icons={outlineIcons} search={search} />
      )) ||
        (filter === "solid" && <Tiles icons={solidIcons} search={search} />) ||
        (filter === "mini" && <Tiles icons={miniIcons} search={search} />)}
    </div>
  );
};

const Tiles = ({ icons, search }: { icons: string[]; search: string }) => {
  const getName = (path: string) => {
    return path.split("/").slice(-1)[0]?.replace(".svg", "");
  };

  const iconNames = outlineIcons.map((path) => {
    return getName(path);
  });

  const searchIcons = icons.filter((_, i) => {
    return iconNames[i]?.includes(search.replace(" ", "-"));
  });

  return (
    <>
      {searchIcons.map((path, i) => (
        <div key={i}>
          <div className="grid h-[8.5rem] place-content-center rounded-xl border border-slate-100">
            <Image src={path} width="24" height="24" alt={path} />
          </div>
          <p className="mt-3 truncate text-center text-[0.8125rem] leading-6 text-slate-500">
            {getName(path)}
          </p>
        </div>
      ))}
    </>
  );
};
