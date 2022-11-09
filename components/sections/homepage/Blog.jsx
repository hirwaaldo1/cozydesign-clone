import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute w-full h-full block bg-black opacity-80 -z-10"></div>
      <video
        className="absolute w-full h-full top-0 object-cover  -z-20"
        src="/assets/video/1.mp4"
        loop
        muted
        autoPlay
        controls=""
      ></video>
      <div className="max-w-4xl m-auto gap-24 flex-col lg:flex-row flex py-32">
        <div className="m-auto w-1/4">
          <Image
            src="/assets/img/logo1.svg"
            alt=""
            width={420}
            height={102.53}
          />
        </div>
        <div className="w-4/5 lg:w-full m-auto">
          <h1 className="text-gray italic text-4xl md:text-6xl font-semibold">
            Psst… <br /> are you a designer?
          </h1>
          <p className="text-gray font-semibold text-lg mt-4">
            Consider joining our{" "}
            <abbr className="text-[#D90F54]"> San Diego Design Designers </abbr>{" "}
            group. More than 700 people, we meet online via Slack and in person
            at social events around the city. It{"’"}s a great opportunity to
            share ideas, get inspired, find support, and celebrate great design.
          </p>
        </div>
      </div>
    </section>
  );
}
