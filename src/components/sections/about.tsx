import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { profile, skills } from "@/lib/data"

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 border-t border-border/60 px-6 py-16"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tentang saya
          </h2>
          <p className="mt-4 text-muted-foreground">{profile.bio}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.area}>
              <CardHeader>
                <CardTitle className="text-base">{group.area}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
