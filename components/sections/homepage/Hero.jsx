import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="background-gradient pt-36 md:pt-40">
      <div className="max-w-screen-2xl pl-8 pr-8 md:pr-0  md:pl-14  m-auto grid grid-cols-1  lg:grid-cols-2">
        <div className="">
          <h1 className="text-6xl md:text-[5.625rem] background-paragraph-imgage bg-secondary bg-paragraph-bg  mb-10 leading-[1.1em] font-bold font-sans-144 ">
            Your design <br /> team for the cost <br /> of a salary.
          </h1>
          <p className="text-3xl md:text-[2.5rem] background-paragraph-imgage bg-gray bg-paragraph-bg opacity-80 font-semibold md:leading-[52px]">
            Full-service design support that <br /> growing B2B and non-profit{" "}
            <br />
            organizations need. Are you strained <br /> because you should have
            a design <br /> team but you don{"'"}t?
          </p>
          <button className="bg-img  my-16 py-6 font-semibold uppercase tracking-wider font-geomanist text-white px-8 rounded-lg text-xl w-full md:w-5/6">
            See how we work & what we can do
          </button>
        </div>
        <div className=" md:hidden block overflow-hidden">
          <Image
            className="relative top-10 z-10"
            src="/assets/img/img1.png"
            alt=""
            width={946.13}
            height={860.5}
          />
        </div>

        <div className="relative overflow-hidden">
          <Image
            className="absolute left-28  -bottom-20 z-10"
            src="/assets/img/img1.png"
            alt=""
            width={946.13}
            height={860.5}
          />
        </div>
      </div>
    </section>
  );
}
