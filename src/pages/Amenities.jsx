import {
  Accessibility,
  CarFront,
  ConciergeBell,
  ShieldCheck,
  Snowflake,
  Utensils,
  Wifi,
} from "lucide-react";
import { amenityGroups } from "../data/amenitiesData";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import PageIntro from "../components/common/PageIntro";
import Eyebrow from "../components/common/Eyebrow";
const icons = {
  comfort: Snowflake,
  food: Utensils,
  services: ConciergeBell,
  connectivity: Wifi,
  safety: ShieldCheck,
  transport: CarFront,
  accessibility: Accessibility,
};
export default function Amenities() {
  return (
    <>
      <PageIntro
        number="03"
        title={
          <>
            Considered for
            <br />
            <em>your comfort.</em>
          </>
        }
        intro="Explore the facilities and services listed for Asanzo Beach Hotel."
      />
      <section className="amenities-list amenities-directory section-pad">
        {amenityGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal className="amenity-group" key={group.name}>
              <div className="amenity-group-head">
                <span className="amenity-icon">
                  <Icon size={20} />
                </span>
                <div>
                  <Eyebrow>0{i + 1}</Eyebrow>
                  <h2>{group.name}</h2>
                </div>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </section>
      <section className="amenity-footer-note">
        <p>
          Have a question about a facility?
          <br />
          <em>Reception would be happy to help.</em>
        </p>
        <Button to="/contact">Get in touch</Button>
      </section>
    </>
  );
}
