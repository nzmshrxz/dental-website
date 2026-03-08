import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BookingCTA from "@/components/BookingCTA";
import { ChevronRight, Award, Heart, Shield, Users } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const values = [
  {
    icon: <Heart size={24} />,
    title: "Patient First",
    desc: "Every decision we make is centered around your comfort, safety and long term oral health.",
  },
  {
    icon: <Shield size={24} />,
    title: "Clinical Excellence",
    desc: "We use only the latest technology and evidence based techniques to deliver the best outcomes.",
  },
  {
    icon: <Users size={24} />,
    title: "Gentle Care",
    desc: "We understand dental anxiety. Our team is trained to make every visit calm and stress free.",
  },
  {
    icon: <Award size={24} />,
    title: "Continuous Learning",
    desc: "Our dentists regularly attend international training programs to stay at the forefront of dentistry.",
  },
];

const milestones = [
  { year: "2010", event: "PureSmile Dental founded in Lucknow" },
  { year: "2013", event: "Expanded to a full multi-specialty clinic" },
  { year: "2016", event: "Introduced digital X-ray and CAD/CAM technology" },
  { year: "2019", event: "Crossed 1000 happy patients milestone" },
  { year: "2022", event: "Launched painless root canal treatment program" },
  { year: "2024", event: "Rated the top dental clinic in Lucknow on Google" },
];

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      
      <section className="relative h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1600&q=80"
            alt="About PureSmile"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            About Us
          </h1>
          <p className="text-sm text-white/60 max-w-md leading-relaxed">
            15 years of trusted dental care built on compassion, precision and a genuine love for healthy smiles.
          </p>
          <div className="flex items-center gap-2 mt-6 text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">About</span>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <FadeUp>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-xs tracking-widest uppercase text-accent mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
                Dentistry With a
                <span className="block italic text-accent">Human Touch</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                PureSmile Dental was founded in 2010 with a simple belief — that every person deserves access to world-class dental care delivered with genuine compassion. What started as a small two-chair clinic in Lucknow has grown into a full multi-specialty dental centre trusted by over 2400 patients.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Our team of 8 specialist dentists brings together decades of experience across cosmetic dentistry, orthodontics, implantology and preventive care. We invest heavily in the latest technology so that every treatment is precise, comfortable and long lasting.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-border p-5">
                  <p className="font-display text-4xl text-accent">2400+</p>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">Happy Patients</p>
                </div>
                <div className="border border-border p-5">
                  <p className="font-display text-4xl text-accent">15+</p>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                alt="Our clinic"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 w-52">
                <p className="font-display text-3xl text-accent">98%</p>
                <p className="text-xs text-white/60 mt-1 tracking-wide uppercase">Satisfaction Rate</p>
              </div>
            </div>

          </div>

        </div>
      </section>
</FadeUp>
      {/* ── VALUES ── */}
      <FadeUp>
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-accent mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border border-border rounded-sm">
                <CardContent className="p-8">
                  <div className="text-accent mb-5">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
</FadeUp>
      {/* ── TIMELINE ── */}
     
{/* ── TIMELINE ── */}
<section className="py-24 bg-primary">
  <div className="max-w-7xl mx-auto px-6">

    <FadeUp>
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest uppercase text-accent mb-3">
          Our Journey
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white">
          15 Years of Excellence
        </h2>
        <p className="text-sm text-white/50 mt-4 max-w-md mx-auto leading-relaxed">
          From a small two-chair clinic to Lucknow's most trusted dental centre.
        </p>
      </div>
    </FadeUp>

    <div className="max-w-4xl mx-auto">
      {milestones.map((milestone, index) => (
        <FadeUp key={milestone.year} delay={index * 0.15}>
          <div className="grid grid-cols-[1fr_60px_1fr] gap-4 items-start">

            <div className={`py-6 ${index % 2 === 0 ? "text-right" : ""}`}>
              {index % 2 === 0 ? (
                <div className="inline-block border border-white/10 bg-white/5 px-6 py-5 text-right">
                  <p className="text-sm text-white font-medium leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              ) : (
                <div />
              )}
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-accent/60 bg-primary flex items-center justify-center shrink-0 z-10">
                <span className="font-display text-xs text-accent">{milestone.year}</span>
              </div>
              {index < milestones.length - 1 && (
                <div className="w-px flex-1 min-h-[40px] bg-white/10 mt-1" />
              )}
            </div>

            <div className="py-6">
              {index % 2 !== 0 ? (
                <div className="inline-block border border-white/10 bg-white/5 px-6 py-5">
                  <p className="text-sm text-white font-medium leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              ) : (
                <div />
              )}
            </div>

          </div>
        </FadeUp>
      ))}
    </div>

  </div>
</section>

<FadeUp>
      <BookingCTA />
</FadeUp>
    </div>
  );
}