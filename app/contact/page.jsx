import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91 99999 99999",
    sub: "Mon to Sat, 9am to 7pm",
    href: "tel:+919999999999",
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "hello@puresmile.in",
    sub: "We reply within 24 hours",
    href: "mailto:hello@puresmile.in",
  },
  {
    icon: <MessageCircle size={20} />,
    title: "WhatsApp",
    value: "+91 99999 99999",
    sub: "Quick replies on WhatsApp",
    href: "https://wa.me/919999999999",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "123 Dental Street, Lucknow",
    sub: "Uttar Pradesh 226001",
    href: "https://maps.google.com",
  },
];

const hours = [
  { day: "Monday — Friday", time: "9:00 AM — 7:00 PM" },
  { day: "Saturday", time: "9:00 AM — 5:00 PM" },
  { day: "Sunday", time: "10:00 AM — 2:00 PM (Emergency)" },
];

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-sm text-white/60 max-w-md leading-relaxed">
            Have a question or ready to book? We would love to hear from you.
          </p>
          <div className="flex items-center gap-2 mt-6 text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Contact</span>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item) => (
              <a  key={item.title}
                href={item.href}
                target={item.title === "Location" || item.title === "WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border border-border rounded-sm h-full group-hover:border-accent/40 group-hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-accent mb-4">
                      {item.icon}
                    </div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      {item.title}
                    </p>
                    <p className="text-sm font-medium text-primary mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.sub}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── FORM ── */}
            <div>
              <p className="text-xs tracking-widest uppercase text-accent mb-3">
                Send A Message
              </p>
              <h2 className="font-display text-4xl text-primary mb-8">
                Book An Appointment
              </h2>

              <div className="flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase text-muted-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Rahul"
                      className="border border-border px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase text-muted-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      className="border border-border px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 99999 99999"
                    className="border border-border px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@email.com"
                    className="border border-border px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-muted-foreground">
                    Service Required
                  </label>
                  <select className="border border-border px-4 py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors bg-white">
                    <option value="">Select a service</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="rootcanal">Root Canal</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="checkup">General Checkup</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your concern or preferred appointment time..."
                    className="border border-border px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm py-6 text-sm tracking-wide">
                  Send Message
                </Button>

              </div>
            </div>

            {/* ── HOURS + MAP ── */}
            <div className="flex flex-col gap-8">

              <div>
                <p className="text-xs tracking-widest uppercase text-accent mb-3">
                  Working Hours
                </p>
                <h2 className="font-display text-4xl text-primary mb-6">
                  When To Visit Us
                </h2>

                <div className="flex flex-col gap-0">
                  {hours.map((hour, index) => (
                    <div key={hour.day}>
                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                          <Clock size={14} className="text-accent" />
                          <span className="text-sm text-primary">{hour.day}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{hour.time}</span>
                      </div>
                      {index < hours.length - 1 && (
                        <Separator />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-accent mb-3">
                  Find Us
                </p>
                <div className="relative h-72 border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114990.40202899625!2d80.86046895!3d26.8466937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}