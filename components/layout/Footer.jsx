import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E4DED5]">
      <div className="max-w-6xl px-5 m-auto text-center">
        <div className="md:flex justify-between pt-16 pb-5 md:py-16 border-b-2 border-[#d4ac8e]">
          <div className="md:flex md:space-x-20 justify-between">
            <Image
              src="/assets/img/logo-black.svg"
              className=" m-auto md:m-0 md:mb-0 mb-4"
              width={72.81}
              height={50}
              alt=""
            />
            <ul className="md:flex md:m-auto mb-10 md:space-x-5 my-auto text-[#B55730] text-xs">
              {["About", "Services", "Work", "Blog", "Contact"].map((v, i) => {
                return (
                  <Link key={i} href={`/${v}`}>
                    <li className="mb-2 md:mb-0">{v}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="my-auto  lg:flex md:space-x-10">
            <div className="flex space-x-2 md:mb-0 mb-5  m-auto w-fit">
              <Image
                src="/assets/img/sm.webp"
                className="mb-3 lg:mb-0 "
                width={20}
                height={20}
                alt=""
              />
              <p className="text-[#D90F54] text-sm">
                San Diego Digital Designers
              </p>
            </div>
            <div className="flex space-x-3 m-auto w-fit">
              {Array(7)
                .fill("")
                .map((v, i) => {
                  return (
                    <div
                      style={{
                        backgroundColor: `${
                          i + 1 === 1
                            ? "#1DA1F2"
                            : i + 1 === 2
                            ? "#2977C9"
                            : i + 1 === 3
                            ? "#4267B2"
                            : i + 1 === 4
                            ? "#E4405F"
                            : i + 1 === 5
                            ? "#C4302B"
                            : i + 1 === 6
                            ? "#16313A"
                            : "#223240"
                        }`,
                      }}
                      className=" flex justify-center px-1.5 py-1 rounded"
                      key={i}
                    >
                      <Image
                        src={`/assets/img/so (${i + 1}).svg`}
                        alt=""
                        width={12}
                        height={10}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="md:flex m-auto justify-between">
          <div className="md:flex-nowrap justify-center w-fit m-auto md:mx-0 flex-wrap flex space-x-6 my-8">
            {Array(3)
              .fill(null)
              .map((v, i) => {
                return (
                  <Image
                    key={i}
                    src={`/assets/img/logoc${i + 1}.webp`}
                    alt=""
                    width={140}
                    height={100}
                  />
                );
              })}
          </div>
          <div className="lg:flex md:space-x-10 my-auto ">
            <p className="md:text-right text-xs">
              Made with ❤️ in beautiful, sunny San Diego. ©2021
            </p>
            <ul className="flex w-fit m-auto py-10 md:py-0 space-x-1 lg:space-x-7 text-[#B55730] text-xs">
              <li>Privacy </li>
              <li>Photo credit</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
