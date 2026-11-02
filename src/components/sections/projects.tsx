import { ProjectCard } from "@/components/project-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl scroll-mt-20 border-t border-border/60 px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Project pengembangan
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Aplikasi web dan project UI/UX.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.slug}
            delay={(index % 4) * 120}
            className="h-full"
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
