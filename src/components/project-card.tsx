import Image from "next/image"
import Link from "next/link"
import { Code, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/lib/data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover/card:scale-105"
        />
      </div>

      <CardHeader>
        <div className="text-xs text-muted-foreground">
          {project.role} · {project.year}
        </div>
        <CardTitle className="mt-2 text-base">{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      {project.liveUrl || project.repoUrl ? (
        <CardFooter className="gap-2 border-t border-border/60 pt-4">
          {project.liveUrl ? (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink data-icon="inline-start" />
                Lihat
              </Link>
            </Button>
          ) : null}
          {project.repoUrl ? (
            <Button size="sm" variant="ghost" asChild>
              <Link href={project.repoUrl} target="_blank" rel="noreferrer">
                <Code data-icon="inline-start" />
                Kode
              </Link>
            </Button>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  )
}
