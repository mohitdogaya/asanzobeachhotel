import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "../../data/testimonialsData";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

export default function GuestStories() {
  const [page, setPage] = useState(0);
  const visibleTestimonials = testimonials.slice(page * 3, page * 3 + 3);
  const changePage = (direction) =>
    setPage((currentPage) => (currentPage + direction + 2) % 2);

  return (
    <section
      className="guest-stories"
      id="guest-stories"
      aria-labelledby="guest-stories-title"
    >
      <Reveal className="guest-stories-heading">
        <div>
          <Eyebrow>Guest stories</Eyebrow>
          <h2 id="guest-stories-title">
            IN THEIR <em>own words.</em>
          </h2>
        </div>
        <p>Layout preview · guest feedback will be added once approved.</p>
      </Reveal>
      <div className="guest-stories-grid">
        {visibleTestimonials.map((item) => (
          <Reveal className="guest-card" key={item.id}>
            <div className="guest-card-meta">
              <span>FEEDBACK SLOT</span>
              <span>0{item.id} / 06</span>
            </div>
            <blockquote>{item.quote}</blockquote>
            <div className="guest-card-person">
              <strong>{item.guestName}</strong>
              <span>{item.location}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="guest-stories-controls">
        <span>
          0{page + 1} <i>/</i> 02
        </span>
        <div>
          <button
            onClick={() => changePage(-1)}
            aria-label="Show previous guest stories"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => changePage(1)}
            aria-label="Show next guest stories"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
