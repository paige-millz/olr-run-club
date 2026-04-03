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
                ice, a handmade sign. No catch. No sign-up. Just cold water for
                anyone putting in the miles.
              </p>
              <p>
                Stickers showed up at a local shop. People started waving. A
                little community formed around none of this being a big deal.
                That&rsquo;s the whole story.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <blockquote className="text-3xl md:text-4xl font-black text-cream leading-tight">
              &ldquo;The road takes care of you.
              <br />
              We take care of the road.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Section divider */}
        <div className="flex justify-center mt-20">
          <Image
            src="/assets/RR_Crossing_Icon.svg"
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 opacity-30"
          />
        </div>
      </div>
    </section>
  );
}
