"use client"

import * as React from "react"
import Link from "next/link"
import { Code, Mail, Palette, Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { profile } from "@/lib/data"

export function Contact() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = encodeURIComponent(`Project baru dari ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    toast.success("Aplikasi email dibuka, tinggal kirim pesannya.")
  }

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 border-t border-border/60 px-6 py-16"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Mari bekerja sama
          </h2>
          <p className="mt-4 text-muted-foreground">
            Punya ide produk, kebutuhan redesain, atau butuh bantuan
            implementasi? Ceritakan singkat, saya akan membalas secepatnya.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <div className="mt-2 flex items-center gap-1">
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code data-icon="inline-start" />
                  GitHub
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={profile.socials.dribbble}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Palette data-icon="inline-start" />
                  Dribbble
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nama</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nama kamu"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nama@email.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Ceritakan project kamu..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send data-icon="inline-start" />
                Kirim pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
