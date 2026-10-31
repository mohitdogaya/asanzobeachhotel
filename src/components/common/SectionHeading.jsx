import Eyebrow from "./Eyebrow";
export default function SectionHeading({ eyebrow, children }) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{children}</h2>
    </div>
  );
}
