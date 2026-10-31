import { hotel, photos } from '../data/hotelData';
import Button from '../components/common/Button';
import Reveal from '../components/common/Reveal';
import PageIntro from '../components/common/PageIntro';
import Eyebrow from '../components/common/Eyebrow';

export default function About() {
  return <>
    <PageIntro number="01" title={<>A warm welcome<br/><em>to Pattaya.</em></>} intro="Get to know Asanzo Beach Hotel, a welcoming place to stay in the heart of Pattaya." />
    <section className="about-layout section-pad">
      <Reveal><img className="about-photo" src={photos.hotel} alt="Asanzo Beach Hotel exterior in Pattaya" /></Reveal>
      <Reveal className="about-copy"><Eyebrow>Our place in the city</Eyebrow><h2>Comfort, with<br/><em>room to breathe.</em></h2><p>Opened in {hotel.opened}, Asanzo Beach Hotel has {hotel.roomsCount} rooms and a Pattaya address that places you approximately 1.8 km from the beach. We look forward to welcoming you.</p><Button to="/contact">Speak with reception</Button></Reveal>
    </section>
    <section className="facts-strip"><div><strong>{hotel.opened}</strong><span>Opened</span></div><div><strong>{hotel.roomsCount}</strong><span>Rooms</span></div><div><strong>1.8 km</strong><span>Approx. distance to beach</span></div></section>
    <section className="about-quote"><Eyebrow>Asanzo Beach Hotel · Pattaya</Eyebrow><p>Come as you are.<br/><em>Stay at your own pace.</em></p></section>
  </>;
}
