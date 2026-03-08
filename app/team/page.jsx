import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BookingCTA from "@/components/BookingCTA";
import { ChevronRight, Award, GraduationCap } from "lucide-react";

const team = [
  {
    name: "Dr. Aisha Kapoor",
    role: "Chief Dental Officer",
    specialization: "Cosmetic Dentistry",
    experience: "18 Years",
    education: "BDS — KGMU Lucknow, MDS — AIIMS Delhi",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    achievements: [
      "Fellow of the Indian Dental Association",
      "Trained in smile design at NYU",
      "500+ smile makeovers completed",
    ],
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Senior Implantologist",
    specialization: "Dental Implants",
    experience: "14 Years",
    education: "BDS — Lucknow University, MDS — PGI Chandigarh",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    achievements: [
      "1200+ implants placed successfully",
      "Certified by Straumann Institute",
      "International implantology speaker",
    ],
  },
  {
    name: "Dr. Priya Nair",
    role: "Orthodontic Specialist",
    specialization: "Braces & Aligners",
    experience: "11 Years",
    education: "BDS — Manipal University, MDS — Orthodontics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
    achievements: [
      "Invisalign certified provider",
      "Treated 800+ orthodontic cases",
      "Member of Indian Orthodontic Society",
    ],
  },
  {
    name: "Dr. Arjun Sharma",
    role: "Endodontist",
    specialization: "Root Canal Therapy",
    experience: "10 Years",
    education: "BDS — KGMU Lucknow, MDS — Endodontics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    achievements: [
      "2000+ root canals performed",
      "Painless dentistry specialist",
      "Rotary endodontics expert",
    ],
  },
  {
    name: "Dr. Meera Joshi",
    role: "Pediatric Dentist",
    specialization: "Children's Dentistry",
    experience: "9 Years",
    education: "BDS — Lucknow University, MDS — Pedodontics",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&q=80",
    achievements: [
      "Child friendly clinic specialist",
      "Certified in behavior management",
      "3000+ young patients treated",
    ],
  },
  {
    name: "Dr. Vikram Singh",
    role: "Oral Surgeon",
    specialization: "Oral Surgery",
    experience: "13 Years",
    education: "BDS — KGMU Lucknow, MDS — Oral Surgery",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80",
    achievements: [
      "Complex extraction specialist",
      "Jaw surgery and bone grafting",
      "Trained at Tata Memorial Hospital",
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
            alt="Our team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">
            The People Behind Your Smile
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-sm text-white/60 max-w-md leading-relaxed">
            Eight specialist dentists united by one mission — delivering exceptional care with a gentle human touch.
          </p>
          <div className="flex items-center gap-2 mt-6 text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Team</span>
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-accent mb-3">
              Our Specialists
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              Expert Dentists, Gentle Hands
            </h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
              Each member of our team brings world-class training and a genuine passion for transforming smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((doctor) => (
              <Card key={doctor.name} className="border border-border rounded-sm overflow-hidden group p-0">

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent text-white border-0 rounded-sm text-xs tracking-wide">
                      {doctor.specialization}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl text-primary">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-accent tracking-wide mt-0.5">
                        {doctor.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl text-primary">{doctor.experience}</p>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex items-start gap-2 mb-4">
                    <GraduationCap size={14} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {doctor.education}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {doctor.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2">
                        <Award size={13} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <BookingCTA />

    </div>
  );
}