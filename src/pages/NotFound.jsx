import Button from "../components/common/Button";
import Eyebrow from "../components/common/Eyebrow";
export default function NotFound() {
  return (
    <section className="not-found">
      <Eyebrow>404 · Page not found</Eyebrow>
      <h1>
        That page
        <br />
        <em>has wandered off.</em>
      </h1>
      <Button to="/">Return home</Button>
    </section>
  );
}
