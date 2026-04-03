import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-cream/10">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <Image
          src="/assets/favicon.png"
          alt="OLR Run Club Runner"
          width={80}
          height={80}
          className="w-20 h-20 mx-auto mb-6 rounded-full"
        />
        <p className="text-cream/40 text-sm">
          Old LaGrange Road &middot; Crestwood, KY
        </p>
        <p className="text-cream/30 text-xs">Free water since 2026</p>
        <p className="text-cream/20 text-xs">
          Made by the house at the top of the hill
        </p>
      </div>
    </footer>
  );
}
