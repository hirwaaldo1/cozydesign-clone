import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="background-about">
      <div className="max-w-6xl m-auto gap-24 flex-wrap md:flex-nowrap  lg:flex py-36 md:py-48">
        <div className="pl-10 pr-10 md:pr-0 lg:mb-0 mb-10 md:pl-28 flex-1">
          <h3 className="text-3xl font-geomanist font-semibold text-primary-50">
            🌴🐻🇺🇸
          </h3>
          <h2 className="text-primary-50 text-7xl font-semibold mt-14">
            Get Cozy
          </h2>
          <p className="text-secondary-50 mt-2 text-4xl leading-[3.375rem]">
            Design & digital marketing <br /> in San Diego, California
          </p>
          <p className="text-primary-50 text-2xl mt-10">
            We{"’"}re an award-winning design shop based in South Park, San
            Diego. We efficiently combine the best parts of user experience (UX)
            with creative design and execution to create effective collateral
            that connects with the human beings who interact with them. 🤯
          </p>
          <p className="text-primary-50 text-2xl mt-5">
            No epic quests for inspiration. Just pragmatic collaboration and
            efficient results from big-agency graduates with decades of
            experience.
          </p>
          <button className="bg-secondary-100 mt-10  py-6 font-semibold uppercase tracking-wider font-geomanist text-white px-8 rounded-lg text-xl">
            Why we do what we do
          </button>
        </div>
        <div className="w-fit m-auto">
          <div className="flex-col md:flex-row md:flex gap-10">
            <div className="flex mb-10 md:mb-0 my-auto flex-col gap-8">
              {[
                "/assets/img/img2.webp",
                "/assets/img/img9.webp",
                "/assets/img/img3.webp",
                "/assets/img/img4.webp",
              ].map((v, i) => {
                return (
                  <Image key={i} src={v} alt="" width={140} height={140} />
                );
              })}
            </div>
            <div className="flex flex-col gap-8">
              {[
                "/assets/img/svg1.svg",
                "/assets/img/img5.webp",
                "/assets/img/img6.webp",
                "/assets/img/img7.webp",
                "/assets/img/img8.webp",
              ].map((v, i) => {
                return (
                  <Image key={i} src={v} alt="" width={140} height={140} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
