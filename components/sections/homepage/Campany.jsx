import Image from "next/image";

export default function CampanySections() {
  return (
    <section className="bg-primary py-16 m-0 p-0">
      <div className="text-center">
        <h3 className="text-secondary-300 opacity-80  text-3xl ">
          <i>More than 150 happy clients</i>
        </h3>
        <div className="flex flex-wrap sm:flex-nowrap lg:ml-0 sm:ml-10 md:ml-8 sm:w-2/4 lg:w-full justify-center mt-10 gap-10">
          {Array(7)
            .fill("null")
            .map((v, i) => {
              return (
                <Image
                  key={i}
                  src={`/assets/img/campy${i + 1}.svg`}
                  width={100}
                  height={100}
                  alt=""
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
