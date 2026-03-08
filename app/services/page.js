import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookingCTA from "@/components/BookingCTA";
import { ChevronRight, Clock, CheckCircle } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const services = [
  {
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    badge: "Most Popular",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    desc: "Professional whitening treatments that remove years of staining and discoloration, giving you a dramatically brighter smile in just one session.",
    benefits: [
      "Up to 8 shades whiter in one session",
      "Safe and pain free procedure",
      "Long lasting results up to 2 years",
      "Custom fitted whitening trays",
    ],
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    badge: "Permanent Solution",
    duration: "2-3 Hours",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    desc: "Permanent tooth replacement solutions that look, feel and function exactly like natural teeth. The gold standard in modern dentistry.",
    benefits: [
      "Looks and feels like natural teeth",
      "Lasts a lifetime with proper care",
      "Preserves jawbone structure",
      "No adhesives or removable parts",
    ],
  },
  {
    title: "Orthodontics",
    slug: "orthodontics",
    badge: "For All Ages",
    duration: "12-24 Months",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
    desc: "Traditional braces and modern clear aligners to straighten your teeth, correct your bite and give you the confidence of a perfectly aligned smile.",
    benefits: [
      "Traditional and clear aligner options",
      "Suitable for children and adults",
      "Improves bite and jaw alignment",
      "Boosts long term oral health",
    ],
  },
  {
    title: "Root Canal",
    slug: "root-canal",
    badge: "Pain Free",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1657313611708-17639e445455?q=80&w=1284&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Modern root canal treatments are nothing like the horror stories. Using the latest techniques and anesthesia, we make the procedure completely comfortable.",
    benefits: [
      "Completely painless procedure",
      "Saves your natural tooth",
      "Single session treatment",
      "Fast recovery time",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    badge: "Smile Makeover",
    duration: "Varies",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    desc: "From porcelain veneers to composite bonding, our cosmetic treatments are tailored to your unique facial features for a natural yet stunning result.",
    benefits: [
      "Porcelain veneers and bonding",
      "Gum contouring and reshaping",
      "Full smile makeover planning",
      "Natural looking results",
    ],
  },
  {
    title: "General Checkup",
    slug: "general-checkup",
    badge: "Preventive Care",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    desc: "Regular dental exams and professional cleanings are the foundation of great oral health. We recommend visiting us every six months to stay ahead of any issues.",
    benefits: [
      "Full mouth examination",
      "Professional scaling and cleaning",
      "Digital X-rays if needed",
      "Personalized oral care advice",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
            alt="Dental services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">
            What We Offer
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Our Services
          </h1>
          <p className="text-sm text-white/60 max-w-md leading-relaxed">
            Comprehensive dental care under one roof. From routine checkups to complete smile transformations.
          </p>
          <div className="flex items-center gap-2 mt-6 text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Services</span>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      
  {/* ── SERVICES LIST ── */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-col gap-20">
      {services.map((service, index) => (
        <FadeUp key={service.slug} delay={0.1}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >

            <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-white border-0 rounded-sm text-xs tracking-wide">
                    {service.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-3 py-2 flex items-center gap-2">
                  <Clock size={13} className="text-accent" />
                  <span className="text-xs text-primary font-medium">{service.duration}</span>
                </div>
              </div>
            </div>

            <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              <p className="text-xs tracking-widest uppercase text-accent mb-3">
                0{index + 1}
              </p>
              <h2 className="font-display text-4xl text-primary mb-4">
                {service.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {service.desc}
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle size={15} className="text-accent shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 py-5 text-sm tracking-wide">
                Book This Service
              </Button>
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