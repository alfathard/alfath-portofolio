"use client"

import * as React from "react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { designWorks, type DesignWork } from "@/lib/data"

export function Gallery() {
  const [selected, setSelected] = React.useState<DesignWork | null>(null)

  return (
    <section
      id="gallery"
      className="mx-auto w-full max-w-5xl scroll-mt-20 border-t border-border/60 px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Galeri desain
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Portofolio desain Poster, Banner, Instagram Post, Flyer.
      </p>

      <div className="mt-8 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {designWorks.map((work) => (
          <button
            key={work.slug}
            type="button"
            onClick={() => setSelected(work)}
            className="group relative block w-full overflow-hidden rounded-xl ring-1 ring-foreground/10 transition-all hover:ring-foreground/25 focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Image
              src={work.image}
              alt={work.title}
              width={work.orientation === "portrait" ? 600 : 800}
              height={work.orientation === "portrait" ? 800 : 600}
              sizes="(min-width: 768px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-white">
                {work.title}
              </span>
              <span className="text-xs text-white/70">
                {work.type} · {work.year}
              </span>
            </span>
          </button>
        ))}
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      >
        <DialogContent className="max-w-[calc(100%-2rem)] gap-3 sm:max-w-3xl">
          {selected ? (
            <>
              <div className="overflow-hidden rounded-lg bg-muted">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={selected.orientation === "portrait" ? 900 : 1200}
                  height={selected.orientation === "portrait" ? 1200 : 900}
                  sizes="(min-width: 640px) 768px, 100vw"
                  className="h-auto max-h-[70vh] w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <DialogTitle>{selected.title}</DialogTitle>
                  <DialogDescription>{selected.year}</DialogDescription>
                </div>
                <Badge variant="outline">{selected.type}</Badge>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
