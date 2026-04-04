import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-cream/10">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <Image
          src="/assets/OLR RC wOLD Runner.png"
          alt="OLR Run Club Runner"
          width={160}
          height={160}
          className="w-40 h-40 mx-auto mb-6"
        />
        <p className="text-cream/40 text-sm">
          Old LaGrange Road &middot; Crestwood, KY
        </p>
        <p className="text-cream/30 text-xs">Free water since 2026</p>
        <p className="text-cream/20 text-xs">
          From the folks at 5890
        </p>
      </div>
    </footer>
  );
}
