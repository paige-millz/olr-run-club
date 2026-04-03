import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/assets/OLR_Bubble_wRunClub.svg"
        alt="OLR Run Club"
        width={96}
        height={96}
        className="w-24 h-24 mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-cream mb-6">
        You just helped stock the cooler.
      </h1>
      <p className="text-cream/60 text-lg max-w-md mb-10">
        Grab a water next time you&rsquo;re on the road.
      </p>
      <Link
        href="/"
        className="text-cream/50 hover:text-cream transition-colors text-sm tracking-widest uppercase"
      >
        &larr; Back to OLR
      </Link>
    </div>
  );
}
