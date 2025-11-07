import { useId, useMemo, useState } from 'react';
import Icon from './Icon.jsx';

export default function ProjectCarousel({ title, images = [], placeholder }) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselLabelId = useId();

  if (slides.length === 0) {
    return (
      <div className="project-media">
        <div className="project-placeholder">{placeholder}</div>
      </div>
    );
  }

  const showControls = slides.length > 1;
  const goTo = (index) => {
    if (!showControls) return;
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <div className="project-media project-carousel">
      <div className="sr-only" id={carouselLabelId}>
        {title} gallery
      </div>
      <div className="project-carousel-track" role="group" aria-labelledby={carouselLabelId}>
        {slides.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={`${title} visual ${index + 1}`}
            className={index === activeIndex ? 'is-active' : ''}
            aria-hidden={index !== activeIndex}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      {showControls && (
        <>
          <button
            type="button"
            className="carousel-control prev"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Show previous project image"
          >
            <Icon name="arrow-left" />
          </button>
          <button
            type="button"
            className="carousel-control next"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Show next project image"
          >
            <Icon name="arrow-right" />
          </button>
          <div className="project-carousel-dots" role="tablist" aria-label={`${title} slides`}>
            {slides.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                className={`carousel-dot${index === activeIndex ? ' is-active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
