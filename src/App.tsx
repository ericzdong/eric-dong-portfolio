import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Download, Mail, MapPin, Menu } from 'lucide-react'
import { PerformanceCarousel } from '@/components/PerformanceCarousel'
import { ProjectCard } from '@/components/ProjectCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { portfolio } from '@/content/portfolio'
import asianNight1 from '@/assets/liondance-web/asian-night-1.jpg'
import asianNight3 from '@/assets/liondance-web/asian-night-3.jpg'
import asianNight4 from '@/assets/liondance-web/asian-night-4.jpg'
import cincinnati1 from '@/assets/liondance-web/cincinnati-1.jpg'
import cincinnati2 from '@/assets/liondance-web/cincinnati-2.jpg'
import cincinnati3 from '@/assets/liondance-web/cincinnati-3.jpg'
import gala1 from '@/assets/liondance-web/gala-1.jpg'
import gala2 from '@/assets/liondance-web/gala-2.jpg'
import gala3 from '@/assets/liondance-web/gala-3.jpg'
import teamPhoto from '@/assets/liondance-web/team.jpg'
import './App.css'

const dayNavItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const nightNavItems = [
  { label: 'Featured performances', href: '#performances' },
  { label: 'Why I lion dance', href: '#lion-story' },
  { label: 'Connect', href: '#lion-connect' },
]

const performances = [
  {
    year: '2026',
    title: 'Asian Night Market',
    location: 'Fourth Street Live! · Louisville, KY',
    description: 'Performed a traditional table routine at the 2026 Asian Night Market, celebrating the Mid-Autumn Festival hosted by Asia Institute–Crane House at Fourth Street Live!',
    images: [
      { src: asianNight1, alt: 'River Lotus lion dancers performing at the 2026 Asian Night Market.' },
      { src: asianNight3, alt: 'Traditional table routine at the 2026 Asian Night Market.' },
      { src: asianNight4, alt: 'River Lotus performers engaging the crowd at the 2026 Asian Night Market.' },
    ],
  },
  {
    year: '2025',
    title: 'Asia Institute–Crane House Annual Gala',
    location: 'Louisville, KY',
    description: 'Brought energy and tradition to the annual gala through a featured lion dance performance, supporting Asia Institute–Crane House and its fundraising mission.',
    images: [
      { src: gala1, alt: 'River Lotus lion dance performance at the 2025 Asia Institute–Crane House Annual Gala.' },
      { src: gala2, alt: 'Featured lion dance during the 2025 Asia Institute–Crane House Annual Gala.' },
      { src: gala3, alt: 'River Lotus performers at the 2025 Asia Institute–Crane House Annual Gala.' },
    ],
  },
  {
    year: '2024',
    title: 'Asianati Night Market',
    location: 'Cincinnati, OH',
    description: 'Showcased the energy and tradition of lion dancing for the Cincinnati community during the BLINK Asian Night Market.',
    images: [
      { src: cincinnati1, alt: 'River Lotus performing at the 2024 Asianati Night Market in Cincinnati.' },
      { src: cincinnati2, alt: 'Lion dancers moving through the crowd at the 2024 Asianati Night Market.' },
      { src: cincinnati3, alt: 'Lion dance performance during the BLINK Asian Night Market in Cincinnati.' },
    ],
  },
]

const currentYear = new Date().getFullYear()
type PortfolioMode = 'day' | 'night'

function App() {
  const [mode, setMode] = useState<PortfolioMode>('day')
  const navItems = mode === 'day' ? dayNavItems : nightNavItems

  return (
    <div className="site-shell" data-mode={mode} id="page-top">
      <header className="site-header">
        <a className="brand" href="#page-top" aria-label={`${portfolio.name}, home`}>
          <span>eric@portfolio:~</span><span className="terminal-cursor" aria-hidden="true" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="identity-switch header-identity" role="group" aria-label="Choose portfolio">
          <button type="button" aria-pressed={mode === 'day'} onClick={() => setMode('day')}>
            Computer science student by day
          </button>
          <span className="identity-divider" aria-hidden="true">·</span>
          <button type="button" aria-pressed={mode === 'night'} onClick={() => setMode('night')}>
            Lion dancer by night
          </button>
        </div>
        <Sheet>
          <SheetTrigger className="mobile-menu-button" aria-label="Open navigation"><Menu /></SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader><SheetTitle>{portfolio.name}</SheetTitle><SheetDescription>{portfolio.role}</SheetDescription></SheetHeader>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <SheetClose key={item.href} nativeButton={false} render={<a href={item.href} />}><span>0{index + 1}</span> {item.label}</SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <p className="sr-only" aria-live="polite">{mode === 'day' ? 'Computer science portfolio active' : 'Lion dance portfolio active'}</p>

      <main className="day-portfolio">
        <section className="hero-section section-wrap">
          <div className="availability-pill"><span className="status-dot" /> {portfolio.availability}</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>{portfolio.name}</h1>
              <p className="hero-role">Software developer · researcher · builder</p>
              <p className="hero-intro">{portfolio.intro}</p>
              <div className="hero-actions">
                <Button nativeButton={false} render={<a href="#work" />} size="lg" className="primary-action">Explore my work <ArrowDownRight /></Button>
                <Button nativeButton={false} render={<a href={portfolio.resumeUrl} target="_blank" rel="noreferrer" />} variant="ghost" size="lg"><Download /> Résumé</Button>
              </div>
            </div>
            <div className="hero-art">
              <Card className="profile-panel">
                <CardContent className="profile-content">
                  <div className="profile-top">
                    <div className="profile-monogram" aria-hidden="true">{portfolio.initials}</div>
                    <Badge variant="secondary" className="profile-badge"><span /> Open to opportunities</Badge>
                  </div>
                  <div className="profile-copy">
                    <p>Current</p>
                    <h2>Computer Science at the University of Louisville.</h2>
                  </div>
                  <div className="profile-list">
                    <span><CheckCircle2 /> AWS certified</span>
                    <span><CheckCircle2 /> React + Flask</span>
                    <span><CheckCircle2 /> Research experience</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="hero-meta">
            <span><MapPin /> {portfolio.location}</span><span className="meta-line" /><span>{portfolio.currentFocus}</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><p className="section-number">01</p><p className="eyebrow">Selected technical work</p><h2>Projects</h2></div>
            <p>Developer tooling, cloud infrastructure, embedded systems, and computational projects grounded in practical outcomes.</p>
          </div>
          <div className="project-grid">{portfolio.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div><p className="section-number light">02</p><p className="eyebrow light">About & skills</p><h2>{portfolio.aboutHeading}</h2></div>
            <div className="about-copy">
              {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="skill-list" aria-label="Skills">{portfolio.skills.map((skill) => <Badge key={skill} variant="outline">{skill}</Badge>)}</div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading compact"><div><p className="section-number">03</p><p className="eyebrow">Where I&apos;ve worked</p><h2>Experience</h2></div></div>
          <div className="experience-list">
            {portfolio.experience.map((item, index) => (
              <article className="experience-row" key={`${item.company}-${item.role}-${item.period}`}>
                <span className="experience-number">0{index + 1}</span>
                <div><h3>{item.role}</h3><p>{item.company}</p></div>
                <ul className="experience-bullets">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><span className="experience-period">{item.period}</span>
              </article>
            ))}
          </div>
          <div className="credentials-grid">
            <Card className="credential-card">
              <CardContent>
                <p>Education</p>
                <h3>{portfolio.education.degree}</h3>
                <span>{portfolio.education.school}</span>
                <strong>{portfolio.education.graduation}</strong>
              </CardContent>
            </Card>
            <Card className="credential-card">
              <CardContent>
                <p>Certification</p>
                <h3>{portfolio.certification.name}</h3>
                <span>{portfolio.certification.issuer}</span>
                <strong>{portfolio.certification.earned}</strong>
              </CardContent>
            </Card>
            <Card className="credential-card">
              <CardContent>
                <p>Community</p>
                {portfolio.organizations.map((organization) => <h3 key={organization}>{organization}</h3>)}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="section-number light">04</p>
            <p className="eyebrow light">Let&apos;s connect</p>
            <h2>Have an opportunity or an idea? I&apos;d love to hear from you.</h2>
            <p className="contact-note">I&apos;m always happy to talk about software, research, internships, or interesting problems worth solving.</p>
            <div className="contact-links">
              <a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email} <ArrowUpRight /></a>
            </div>
            <Separator className="contact-separator" />
            <footer>
              <div className="footer-brand"><span className="brand-mark inverse">{portfolio.initials}</span><span>Built with care and plenty of coffee.</span></div>
              <div className="social-links">
                <a href={portfolio.socials.github} aria-label="GitHub"><span>GH</span></a>
                <a href={portfolio.socials.linkedin} aria-label="LinkedIn"><span>IN</span></a>
                <a href={`mailto:${portfolio.email}`} aria-label="Email"><Mail /></a>
              </div>
              <p>© {currentYear} {portfolio.name}</p>
            </footer>
          </div>
        </section>
      </main>

      <main className="night-portfolio">
        <section className="night-hero section-wrap">
          <div>
            <Badge variant="outline" className="night-kicker">Lead Dancer · River Lotus Lion Dance</Badge>
            <h1>Culture<br />Rhythm<br /><em>Community</em></h1>
            <p>By night, I help bring the lion to life. Since 2023, I&apos;ve grown with River Lotus Lion Dance into a Lead Dancer—combining movement, music, culture, and teamwork in performances for the communities in Louisville and Cincinnati.</p>
            <figure className="team-photo">
              <img src={teamPhoto} alt="River Lotus Lion Dance team portrait." />
              <figcaption>River Lotus Lion Dance</figcaption>
            </figure>
          </div>
        </section>

        <section className="night-section section-wrap" id="performances">
          <div className="night-section-heading">
            <div><p className="section-number">01</p><p className="eyebrow">Performance archive</p><h2>Featured performances.</h2></div>
            <div className="performance-intro">
              <p>Selected events from my time with River Lotus, pairing each performance story with space for its photographs.</p>
              <a href="https://www.instagram.com/klp.visuals/" target="_blank" rel="noreferrer">Photography by @klp.visuals <ArrowUpRight /></a>
            </div>
          </div>
          <div className="performance-list">
            {performances.map((performance, index) => (
              <Card className="performance-card" key={`${performance.year}-${performance.title}`}>
                <PerformanceCarousel images={performance.images} title={performance.title} />
                <CardContent>
                  <div className="performance-meta"><Badge>{performance.year}</Badge><span>0{index + 1} · {performance.location}</span></div>
                  <h3>{performance.title}</h3>
                  <p>{performance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="lion-story-section" id="lion-story">
          <div className="section-wrap lion-story-grid">
            <div><p className="section-number light">02</p><p className="eyebrow light">Why I lion dance</p><h2>More Than Just a Performance</h2></div>
            <div className="lion-story-copy">
              <p>Lion dance has given me so much. It has introduced me to lifelong friendships, strengthened my discipline, sharpened my attention to detail, helped me refine my craftsmanship within this art form, and taught me the importance of preserving and sharing my culture.</p>
              <p>Performing with a lion dance partner requires complete trust. Every movement must be synchronized, from matching each other&apos;s footsteps to executing difficult routines safely. Attention to detail is essential, especially during stunts when your partner is balanced above you and trusts you to keep them secure. That connection creates a strong bond built on communication, teamwork, and responsibility.</p>
              <p>Whether I am performing at a wedding, Lunar New Year celebration, or Mid-Autumn Festival, I have the privilege of sharing the spirit of lion dance with people who may be experiencing it for the first time. The energy it brings to every event is truly special. For me, lion dance represents prosperity, good fortune, cultural pride, and the importance of giving back to the community.</p>
            </div>
          </div>
        </section>

        <section className="lion-connect-section" id="lion-connect">
          <div className="section-wrap lion-connect-inner">
            <p className="section-number">04</p>
            <p className="eyebrow">Let&apos;s connect</p>
            <div className="lion-connect-actions">
              <Button nativeButton={false} render={<a href={`mailto:${portfolio.email}`} />} size="lg">Say hello <Mail /></Button>
              <Button nativeButton={false} render={<a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" />} variant="outline" size="lg">Connect on LinkedIn <ArrowUpRight /></Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
