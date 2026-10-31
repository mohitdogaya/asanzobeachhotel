import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "../data/hotelData";
import Reveal from "../components/common/Reveal";
import PageIntro from "../components/common/PageIntro";

const images = [
  ["Asanzo Beach Hotel exterior", photos.hotel],
  ["Hotel room interior", photos.room],
  ["Hotel room interior", photos.room2],
  ["Hotel room interior", photos.room3],
  ["Balcony at the hotel", photos.detail],
  ["Pattaya beach", photos.coast],
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const isLightboxOpen = activeIndex !== null;

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  return (
    <>
      <PageIntro
        number="04"
        title={
          <>
            A closer look
            <br />
            <em>at your stay.</em>
          </>
        }
        intro="Explore images of Asanzo Beach Hotel, its rooms, and the nearby Pattaya coast."
      />
      <section className="gallery-grid section-pad">
        {images.map(([label, image], i) => (
          <Reveal
            className={`gallery-item gallery-${i + 1}`}
            key={`${label}-${i}`}
          >
            <button
              type="button"
              className="gallery-image-button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View image: ${label}`}
            >
              <img src={image} alt={label} loading="lazy" />
              <span>{label}</span>
            </button>
          </Reveal>
        ))}
      </section>

      {activeIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Hotel image gallery"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="gallery-lightbox-top">
            <p>{images[activeIndex][0]}</p>
            <span>
              {activeIndex + 1} / {images.length}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              className="gallery-lightbox-control gallery-lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image viewer"
            >
              <X />
            </button>
          </div>
          <div className="gallery-lightbox-stage">
            <button
              type="button"
              className="gallery-lightbox-control gallery-lightbox-previous"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <img src={images[activeIndex][1]} alt={images[activeIndex][0]} />
            <button
              type="button"
              className="gallery-lightbox-control gallery-lightbox-next"
              onClick={showNext}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
