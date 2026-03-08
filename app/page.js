"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import FadeUp from "@/components/FadeUp";
import BookingCTA from "@/components/BookingCTA";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Smile,
  Zap,
  Heart,
  Microscope,
} from "lucide-react";

const services = [
  {
    icon: <Smile size={28} />,
    title: "Teeth Whitening",
    desc: "Professional whitening treatments that give you a brighter smile in just one session.",
    href: "/services/teeth-whitening",
  },
  {
    icon: <Shield size={28} />,
    title: "Dental Implants",
    desc: "Permanent tooth replacement solutions that look, feel and function like natural teeth.",
    href: "/services/dental-implants",
  },
  {
    icon: <Zap size={28} />,
    title: "Orthodontics",
    desc: "Braces and clear aligners to straighten your teeth and perfect your bite.",
    href: "/services/orthodontics",
  },
  {
    icon: <Heart size={28} />,
    title: "Root Canal",
    desc: "Pain-free root canal treatments using the latest technology for fast recovery.",
    href: "/services/root-canal",
  },
  {
    icon: <Microscope size={28} />,
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding and smile makeovers tailored to your unique facial features.",
    href: "/services/cosmetic-dentistry",
  },
  {
    icon: <Award size={28} />,
    title: "General Checkup",
    desc: "Comprehensive dental exams and cleanings to keep your oral health in top shape.",
    href: "/services/general-checkup",
  },
];

const stats = [
  { number: "2,400+", label: "Happy Patients" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "8", label: "Expert Dentists" },
];

const steps = [
  {
    number: "01",
    title: "Book Appointment",
    desc: "Schedule online or via WhatsApp in under 2 minutes.",
  },
  {
    number: "02",
    title: "Consultation",
    desc: "Meet your dentist, discuss concerns and get a full diagnosis.",
  },
  {
    number: "03",
    title: "Treatment",
    desc: "Receive expert care using modern, pain-free techniques.",
  },
  {
    number: "04",
    title: "Follow Up",
    desc: "We check in after every procedure to ensure full recovery.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Lucknow",
    review:
      "Best dental experience I have ever had. The team was gentle, professional and the clinic is spotless. My smile has never looked better.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    location: "Kanpur",
    review:
      "I was terrified of dentists but PureSmile changed that completely. The root canal was completely painless and the staff made me feel at ease.",
    rating: 5,
  },
  {
    name: "Anjali Singh",
    location: "Lucknow",
    review:
      "Got my teeth whitened before my wedding and the results were stunning. Highly recommend the cosmetic dentistry services here.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-white pt-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Badge className="mb-6 bg-accent/10 text-accent border-0 rounded-sm px-3 py-1 text-xs tracking-widest uppercase">
                Trusted by 2400+ Patients
              </Badge>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-tight mb-6">
                Your Perfect
                <span className="block italic text-accent">Smile Starts</span>
                Here
              </h1>

              <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-8">
                Expert dental care with a gentle touch. From routine checkups to complete smile makeovers — we bring world-class dentistry to Lucknow.
              </p>

              <div className="flex items-center gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 py-6 text-sm tracking-wide">
                  Book Appointment
                </Button>
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>View Services</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-primary">{stat.number}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="w-[420px] h-[520px] bg-accent/5 border border-border flex items-center justify-center">
                <span className="text-8xl">🦷</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 w-48">
                <p className="font-display text-4xl text-accent">15+</p>
                <p className="text-xs text-white/60 mt-1 tracking-wide uppercase">Years of Excellence</p>
              </div>
              <div className="absolute top-8 -right-6 bg-white border border-border shadow-lg p-4 w-44">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs text-primary font-medium">Google Rated 5★</p>
                <p className="text-xs text-muted-foreground">Based on 400+ reviews</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-primary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-xs tracking-widest uppercase text-white/60">2400+ Happy Patients</span>
              <span className="text-accent">✦</span>
              <span className="text-xs tracking-widest uppercase text-white/60">15 Years Experience</span>
              <span className="text-accent">✦</span>
              <span className="text-xs tracking-widest uppercase text-white/60">Google Rated 5 Stars</span>
              <span className="text-accent">✦</span>
              <span className="text-xs tracking-widest uppercase text-white/60">Pain Free Treatments</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs tracking-widest uppercase text-accent mb-3">What We Offer</p>
                <h2 className="font-display text-4xl md:text-5xl text-primary">
                  Our Services
                </h2>
              </div>
              <Link
                href="/services"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span>View All Services</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeUp key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                  <Card className="group border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 rounded-sm h-full">
                    <CardContent className="p-8">
                      <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="font-display text-xl text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="mt-6 flex items-center gap-1 text-xs text-accent font-medium">
                        <span>Learn More</span>
                        <ChevronRight size={14} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <FadeUp key={stat.label}>
                <div className="text-center">
                  <p className="font-display text-5xl text-accent">{stat.number}</p>
                  <Separator className="bg-white/10 my-4" />
                  <p className="text-xs tracking-widest uppercase text-white/50">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-widest uppercase text-accent mb-3">How It Works</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary">
                Your Journey With Us
              </h2>
              <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
                From your first visit to your final follow-up, we make every step simple and stress-free.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <FadeUp>
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
                  alt="Dental clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/30" />
                <div className="absolute bottom-6 left-6 bg-white p-5 w-52">
                  <p className="font-display text-3xl text-accent">98%</p>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                    Patient Satisfaction
                  </p>
                </div>
              </div>
            </FadeUp>

            <div className="flex flex-col justify-center gap-8 pl-0 lg:pl-8">
              {steps.map((step, index) => (
                <FadeUp key={step.number} delay={index * 0.1}>
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border border-accent/40 flex items-center justify-center shrink-0">
                        <span className="font-display text-xl text-accent">{step.number}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-px h-8 bg-border mt-2" />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-display text-xl text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">

          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-widest uppercase text-accent mb-3">Patient Stories</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary">
                What Our Patients Say
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <FadeUp key={t.name} delay={index * 0.1}>
                <Card className="border border-border rounded-sm">
                  <CardContent className="p-8">
                    <div className="flex gap-0.5 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                      "{t.review}"
                    </p>
                    <Separator className="mb-6" />
                    <div>
                      <p className="text-sm font-medium text-primary">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <BookingCTA />

    </div>
  );
}