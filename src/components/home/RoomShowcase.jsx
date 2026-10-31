import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { rooms } from "../../data/roomsData";
import { Link } from "react-router-dom";
import Eyebrow from "../common/Eyebrow";

export default function RoomShowcase() {
  const [active, setActive] = useState(0);
  const room = rooms[active];
  const go = (direction) =>
    setActive((current) => (current + direction + rooms.length) % rooms.length);

  return (
    <section className="rooms-showcase" aria-label="Featured rooms">
      <div className="rooms-showcase-heading">
        <div>
          <Eyebrow>A room for your stay</Eyebrow>
          <h2>
            Find your place
            <br />
            <em>to settle in.</em>
          </h2>
        </div>
        <p>
          Three room categories, with clear nightly prices.
          <br />
          Contact reception with any room enquiry.
        </p>
      </div>
      <div className="room-feature-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={room.name}
            className="room-feature-content"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32 }}
          >
            <div className="room-feature-top">
              <div>
                <span className="room-number">0{active + 1}</span>
                <span className="room-category">{room.name}</span>
              </div>
              <img src={room.image} alt={room.alt} loading="lazy" />
            </div>
            <div className="room-feature-bottom">
              <h3>
                {room.name.split(" ").slice(0, -1).join(" ")}
                <br />
                <em>{room.name.split(" ").at(-1)}</em>
              </h3>
              <div className="room-feature-actions">
                <p>
                  <strong>{room.price}</strong>
                  <span> THB / night</span>
                </p>
                <Link to="/contact" className="room-enquire">
                  Ask about this room <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="room-feature-controls">
          <span>
            0{active + 1} <i>/</i> 0{rooms.length}
          </span>
          <div>
            <button aria-label="Previous room" onClick={() => go(-1)}>
              <ArrowLeft size={17} />
            </button>
            <button aria-label="Next room" onClick={() => go(1)}>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
