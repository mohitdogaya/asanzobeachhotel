import Eyebrow from './Eyebrow';
export default function PageIntro({ number, title, intro }) { return <section className="page-intro"><Eyebrow>{number} / Asanzo Beach Hotel</Eyebrow><h1>{title}</h1>{intro&&<p>{intro}</p>}</section>; }
