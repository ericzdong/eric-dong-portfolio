import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Project } from '@/content/portfolio'

type ProjectCardProps = { project: Project; index: number }

export function ProjectCard({ project, index }: ProjectCardProps) {
  const card = (
      <Card className="project-card">
        <CardContent className="project-card-content">
          <div className="project-index">0{index + 1}</div>
          <div className="project-main">
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-meta">
            {project.href
              ? <ArrowUpRight className="project-arrow" aria-hidden="true" />
              : <span className="project-status">Case study available on request</span>}
            <div className="project-tags">
            {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </div>
        </CardContent>
      </Card>
  )

  if (!project.href) return <article className="project-link project-link-static">{card}</article>

  return <a className="project-link group" href={project.href} target="_blank" rel="noreferrer">{card}</a>
}
