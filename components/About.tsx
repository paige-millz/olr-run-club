import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-cream mb-8">
              The Road
            </h2>
            <div className="space-y-5 text-cream/70 text-base leading-relaxed">
              <p>
                Old LaGrange Road runs through Crestwood, Kentucky — about 3.2
                miles of flat, fast pavement that runners and cyclists have
                quietly claimed as their own. More feet hit this road than tires
                most mornings.
              </p>
              <p>
                We both grew up in Pennsylvania, where we each had a spot in our
                neighborhood to ride our bikes to for water — a place that gave
                the ride a destination, something worth pedaling to. Those little
                stops made the adventure feel real.
              </p>
              <p>
                We bought 5890 Old LaGrange Road in October 2023 and fell in
                love with this little road full of runners and cyclists. So we
                took that childhood feeling — a cold drink at the end of the
                push — and put a cooler at the end of the driveway. Mini waters,
                ice. no catch. No sign-up. Just cold water for anyone putting
                in the miles.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <blockquote className="text-2xl md:text-3xl font-black text-cream leading-tight">
              Just a cooler at the end of 5890.
              <br />
              Because we appreciate the hustle.
            </blockquote>
            <Image
              src="/assets/RR_Crossing_Icon.svg"
              alt=""
              width={120}
              height={120}
              className="w-28 h-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
