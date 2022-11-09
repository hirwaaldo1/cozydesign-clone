import Image from "next/image";
import Link from "next/link";

export default function Header() {
  let linkMenu = [
    {
      name: "Get Cozy",
      url: "/Get Cozy",
    },
    {
      name: "What we do",
      url: "/What we do",
    },
    ,
    {
      name: "Our work",
      url: "/Our work",
    },
    {
      name: "The blog",
      url: "/The blog",
    },
    {
      name: "Say hi",
      url: "/Say hi",
    },
  ];
  return (
    <header className="w-full fixed z-50 ">
      <div className="background-gradient-header py-5 px-14  flex lg:justify-between">
        <Image
          src="/assets/img/logo.svg"
          className="m-auto lg:m-0 bg-"
          width={100}
          height={68.66}
          alt=""
        />
        <div className="w-fit m-auto block lg:hidden">
          <Image src="/assets/img/menu.svg" alt="" width={30} height={40} />
        </div>
        <ul className="my-auto hidden lg:flex text-gray  space-x-6 font-semibold text-2xl">
          {linkMenu.map((v, i) => {
            return (
              <Link key={i} href={v.url}>
                <li className="tracking-wider">{v.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
