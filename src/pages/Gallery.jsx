import { photos } from '../data/hotelData';
import Reveal from '../components/common/Reveal';
import PageIntro from '../components/common/PageIntro';

const images = [
  ['Asanzo Beach Hotel exterior', photos.hotel],
  ['Hotel room interior', photos.room],
  ['Hotel room interior', photos.room2],
  ['Hotel room interior', photos.room3],
  ['Balcony at the hotel', photos.detail],
  ['Pattaya beach', photos.coast],
];

export default function Gallery() {
  return <>
    <PageIntro number="04" title={<>A closer look<br/><em>at your stay.</em></>} intro="Explore images of Asanzo Beach Hotel, its rooms, and the nearby Pattaya coast." />
    <section className="gallery-grid section-pad">{images.map(([label, image], i) => <Reveal className={`gallery-item gallery-${i + 1}`} key={`${label}-${i}`}><img src={image} alt={label} loading="lazy" /><span>{label}</span></Reveal>)}</section>
  </>;
}
