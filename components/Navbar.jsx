"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white text-sm font-display font-semibold">P</span>
            </div>
            <span className="font-display text-xl text-primary">
              Pure<span className="text-accent">Smile</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-body transition-colors duration-200 relative group ${pathname === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-200 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919999999999" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone size={14} />
              <span>+91 99999 99999</span>
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-5">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-30 bg-white border-b border-border shadow-lg md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-body py-1 transition-colors ${pathname === link.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-primary text-white rounded-sm mt-2">
                Book Appointment
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}