import Image from "next/image";

export default function SupportChat() {
  return (
    <div className="bg-secondary-200 fixed bottom-5 left-10 cursor-pointer  hover:scale-110 duration-100  flex justify-center items-center p-2 w-[2.8125rem] h-[2.8125rem] rounded-full">
      <Image
        className="invert"
        src="/assets/img/support.svg"
        alt=""
        width={22}
        height={23.29}
      />
    </div>
  );
}
