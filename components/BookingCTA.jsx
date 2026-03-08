import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="py-20 bg-accent/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-3">
              Ready To Start?
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-4">
              Book Your Appointment
              <span className="block italic text-accent">Today</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Take the first step towards your perfect smile. Our team is ready to welcome you and make your visit as comfortable as possible.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 py-6 text-sm tracking-wide flex items-center gap-2">
                <Calendar size={16} />
                <span>Book Appointment</span>
              </Button>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+91 99999 99999</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white border border-border p-6">
              <p className="font-display text-3xl text-accent mb-1">Mon — Sat</p>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">Working Days</p>
              <p className="text-sm text-primary font-medium mt-3">9:00 AM — 7:00 PM</p>
            </div>

            <div className="bg-primary p-6">
              <p className="font-display text-3xl text-accent mb-1">Sunday</p>
              <p className="text-xs text-white/50 tracking-wide uppercase">Emergency Only</p>
              <p className="text-sm text-white/70 font-medium mt-3">10:00 AM — 2:00 PM</p>
            </div>

            <div className="bg-white border border-border p-6 col-span-2">
              <p className="text-xs tracking-widest uppercase text-accent mb-3">Our Location</p>
              <p className="text-sm text-primary font-medium">123 Dental Street, Lucknow</p>
              <p className="text-sm text-muted-foreground mt-1">Uttar Pradesh 226001</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors mt-4"
              >
                <span>Get Directions</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}