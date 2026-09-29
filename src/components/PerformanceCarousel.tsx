import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type PerformanceImage = {
  src: string
  alt: string
}

type PerformanceCarouselProps = {
  images: PerformanceImage[]
  title: string
}

export function PerformanceCarousel({ images, title }: PerformanceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const showPrevious = () => setActiveIndex((activeIndex - 1 + images.length) % images.length)
  const showNext = () => setActiveIndex((activeIndex + 1) % images.length)

  return (
    <div className="performance-carousel" aria-roledescription="carousel" aria-label={`${title} photographs`}>
      <button className="carousel-image-button" type="button" onClick={showNext} aria-label={`Show next ${title} photograph`}>
        <img src={images[activeIndex].src} alt={images[activeIndex].alt} loading="lazy" />
        <span className="carousel-click-hint">Click photo for next</span>
      </button>
      <div className="carousel-controls">
        <Button type="button" variant="outline" size="icon" onClick={showPrevious} aria-label={`Show previous ${title} photograph`}>
          <ChevronLeft />
        </Button>
        <div className="carousel-dots" aria-label={`Photograph ${activeIndex + 1} of ${images.length}`}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photograph ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
        <span className="carousel-count">{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
        <Button type="button" variant="outline" size="icon" onClick={showNext} aria-label={`Show next ${title} photograph`}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
