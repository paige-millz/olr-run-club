import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/assets/OLR_Bubble_wRunClub.svg"
        alt="OLR Run Club"
        width={160}
        height={160}
        className="w-32 h-32 md:w-40 md:h-40 mb-8"
        priority
      />
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-cream leading-none mb-6">
        Free Water.
        <br />
        Old LaGrange Road.
      </h1>
      <p className="text-lg md:text-xl text-cream/60 max-w-md mb-12">
        We put out a cooler every spring. Because runners deserve it.
      </p>
      <a
        href="#about"
        className="text-cream/50 hover:text-cream transition-colors text-sm tracking-widest uppercase"
      >
        Run with us &darr;
      </a>
    </section>
  );
}
