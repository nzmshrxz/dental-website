import Image from "next/image";
import Link from "next/link";
import BookingCTA from "@/components/BookingCTA";
import { ChevronRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const gallery = [
  {
    category: "Clinic",
    images: [
      {
        src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
        alt: "Modern reception area",
        span: "col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80",
        alt: "Treatment room",
        span: "col-span-1",
      },
      {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        alt: "Dental equipment",
        span: "col-span-1",
      },
      {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
        alt: "Doctor with patient",
        span: "col-span-2",
      },
    ],
  },
  {
    category: "Treatments",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        alt: "Teeth whitening",
        span: "col-span-1",
      },
      {
        src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
        alt: "Dental implant procedure",
        span: "col-span-1",
      },
      {
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
        alt: "Cosmetic dentistry",
        span: "col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
        alt: "Happy patient",
        span: "col-span-1",
      },
      {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        alt: "Orthodontics",
        span: "col-span-1",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
            alt="Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">
            See Our Work
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Gallery
          </h1>
          <p className="text-sm text-white/60 max-w-md leading-relaxed">
            A glimpse into our clinic, our team and the smiles we have transformed over the years.
          </p>
          <div className="flex items-center gap-2 mt-6 text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Gallery</span>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <FadeUp>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {gallery.map((section) => (
            <div key={section.category} className="mb-20">

              <div className="flex items-center gap-4 mb-8">
                <p className="text-xs tracking-widest uppercase text-accent">
                  {section.category}
                </p>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.images.map((image) => (
                  <div
                    key={image.alt}
                    className={`relative h-64 overflow-hidden group ${image.span}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xs text-white tracking-wide">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>
</FadeUp>
<FadeUp>

      <BookingCTA />
</FadeUp>

    </div>
  );
}