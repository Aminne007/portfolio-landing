export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <header className="section-heading">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
