import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const services = [
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
  "Root Canal",
  "Cosmetic Dentistry",
  "General Checkup",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <span className="font-display text-2xl">
              Pure<span className="text-accent">Smile</span>
            </span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Delivering world-class dental care with compassion and precision since 2010.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <Clock size={14} />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-5">
              Our Services
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-5">
              Contact Us
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>123 Dental Street, Lucknow, Uttar Pradesh 226001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={15} />
                <a href="tel:+919999999999" className="hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={15} />
                <a href="mailto:hello@puresmile.in" className="hover:text-white transition-colors">
                  hello@puresmile.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>2025 PureSmile Dental. All rights reserved.</p>
          <p>Designed with care for your smile.</p>
        </div>

      </div>
    </footer>
  );
}