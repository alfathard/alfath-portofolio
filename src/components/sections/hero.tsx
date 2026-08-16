import { ArrowRight, FileText, Palette } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/data"
import Image from "next/image"
import avatar from "@/app/avatar.jpg"

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
      {profile.available ? (
        <Badge variant="outline" className="mb-6 gap-2">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Open to work
        </Badge>
      ) : null}

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <div className="h-28 w-28 overflow-hidden rounded-full sm:h-48 sm:w-48">
          <Image
            src={avatar}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {profile.role} berbasis di {profile.location}. Saya menangani project dari
            eksplorasi visual sampai implementasi kode produksi.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">
                Coding Project
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#gallery">
                <Palette data-icon="inline-start" />
                Galeri desain
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a
                href="https://drive.google.com/file/d/1iO_r4uJ2SXBHtsI0aHSINjSYFNyCLrk4/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FileText data-icon="inline-start" />
                Curriculum Vitae
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
