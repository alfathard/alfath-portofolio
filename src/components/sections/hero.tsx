import { ArrowRight, Mail, Palette } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/data"

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
      {profile.available ? (
        <Badge variant="outline" className="mb-6 gap-2">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Terbuka untuk proyek baru
        </Badge>
      ) : null}

      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        {profile.headline}
      </h1>

      <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
        {profile.role} berbasis di {profile.location}. Saya menangani project dari
        eksplorasi visual sampai implementasi kode produksi.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button size="lg" asChild>
          <a href="#projects">
            Lihat project
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
          <a href="#contact">
            <Mail data-icon="inline-start" />
            Hubungi saya
          </a>
        </Button>
      </div>

      {/* <dl className="mt-14 grid grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:max-w-md">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-xs text-muted-foreground sm:text-sm">
              {stat.label}
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl> */}
    </section>
  )
}
