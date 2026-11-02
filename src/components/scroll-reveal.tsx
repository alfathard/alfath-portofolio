"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ScrollRevealProps = React.ComponentProps<"div"> & {
  delay?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  style,
  ...props
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current

    if (!element) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => {
        setIsVisible(true)
      })

      return () => window.cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (!entry?.isIntersecting) return

        setIsVisible(true)
        observer.disconnect()
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none data-[visible=false]:translate-y-6 data-[visible=false]:opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
        className
      )}
      style={{
        ...style,
        transitionDelay: isVisible ? `${delay}ms` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
