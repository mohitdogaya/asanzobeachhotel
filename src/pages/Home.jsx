import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, CarFront, Dumbbell, Utensils, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import { hotel, photos } from '../data/hotelData';
import Button from '../components/common/Button';
import Reveal from '../components/common/Reveal';
import Eyebrow from '../components/common/Eyebrow';
import RoomShowcase from '../components/home/RoomShowcase';
import GuestStories from '../components/home/GuestStories';

export default function Home() {
  return <>
    <section className="hero" style={{ '--hero-image': `url(${photos.hero})` }}>
      <div className="hero-shade" />
      <div className="hero-meta">
        <div className="hero-meta-block"><span>Est. {hotel.opened}</span><strong>Asanzo Beach Hotel</strong></div>
        <div className="hero-meta-block hero-meta-right"><span>Pattaya</span><strong>Thailand</strong></div>
      </div>
      <motion.div className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .9, ease: [.22, 1, .36, 1] }}>
        <h1>Stay a little<br /><em>closer to calm.</em></h1>
      </motion.div>
      <div className="hero-aside"><p>A welcoming place to pause, settle in, and discover Pattaya at your own pace.</p><div className="hero-actions"><Button to="/rooms">Explore rooms</Button><Link to="/contact" className="hero-contact-link">Contact reception <ArrowUpRight size={16}/></Link></div></div>
      <div className="hero-bottom"><a href="#intro" aria-label="Scroll to introduction"><span>Scroll to discover</span><ArrowDown size={16} /></a></div>
    </section>

    <section id="intro" className="ease-section">
      <Reveal className="ease-copy"><Eyebrow>A place to feel at ease</Eyebrow><h2>Settle in.<br /><em>Explore Pattaya.</em></h2><p>Asanzo Beach Hotel opened in {hotel.opened} and has {hotel.roomsCount} rooms. The beach is approximately 1.8 km away.</p><Button to="/about">Discover the hotel</Button></Reveal>
      <Reveal className="ease-visual"><img src={photos.hotel} alt="Asanzo Beach Hotel exterior in Pattaya" loading="lazy" /><span className="ease-stamp">PATTAYA<br />THAILAND</span><span className="ease-image-note">ASANZO BEACH HOTEL · PATTAYA</span></Reveal>
      <div className="ease-facts"><span><strong>{hotel.roomsCount}</strong> rooms</span><span><strong>{hotel.opened}</strong> opened</span><span><strong>Approx. 1.8 km</strong> from the beach</span></div>
    </section>

    <section className="stay-story">
      <Reveal className="stay-story-image"><img src={photos.detail} alt="Balcony at Asanzo Beach Hotel" loading="lazy" /><span>ASANZO BEACH HOTEL</span></Reveal>
      <Reveal className="stay-story-copy"><Eyebrow>A Pattaya address</Eyebrow><h2>Easy to find.<br /><em>Yours to explore.</em></h2><p>{hotel.address}</p><p className="stay-story-distance">{hotel.beachDistance}.</p><Link to="/contact" className="text-link">Get directions <ArrowRight size={15} /></Link></Reveal>
    </section>

    <RoomShowcase />

    <section className="amenities-feature">
      <div className="amenities-feature-top"><Reveal><Eyebrow>Facilities & services</Eyebrow><h2>Made for the<br /><em>everyday stay.</em></h2></Reveal><Reveal><p>Find the facilities listed for Asanzo Beach Hotel, including Wi-Fi, dining, fitness and transport services.</p><Button to="/amenities">View all facilities</Button></Reveal></div>
      <div className="amenity-highlight-grid">
        <Reveal className="amenity-highlight"><Wifi /><div><span>Stay connected</span><strong>Wi-Fi & LAN</strong></div></Reveal>
        <Reveal className="amenity-highlight"><Utensils /><div><span>Food & drink</span><strong>Restaurant, bar & lounge</strong></div></Reveal>
        <Reveal className="amenity-highlight"><Dumbbell /><div><span>Wellbeing</span><strong>Fitness centre</strong></div></Reveal>
        <Reveal className="amenity-highlight"><CarFront /><div><span>Getting around</span><strong>Parking & transfers</strong></div></Reveal>
      </div>
    </section>

    <GuestStories />

    <section className="contact-cta contact-cta-modern"><div className="cta-art" style={{ '--cta-image': `url(${photos.coast})` }} aria-hidden="true"><span className="cta-orbit cta-orbit-one" /><span className="cta-art-label">PATTAYA · THAILAND<br />PATTAYA BEACH</span></div><div className="cta-content"><Eyebrow>Speak with reception</Eyebrow><h2>Questions about<br /><em>your stay?</em></h2><p>Ask us about room prices, hotel facilities, or directions to Asanzo Beach Hotel.</p><div className="cta-actions"><Button to="/contact" light>Contact reception</Button><a href={`tel:${hotel.phoneLink}`} className="cta-phone">Call {hotel.phone}</a></div></div><span className="cta-address">279/121 Soi Somprasong · Pattaya</span></section>
  </>;
}
