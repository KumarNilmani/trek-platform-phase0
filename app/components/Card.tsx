type CardProps = {
  title: string
  description: string
  link: string
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <a href={link} style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "16px",
      display: "block",
      textDecoration: "none",
      color: "black"
    }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
        {title}
      </h2>

      <p style={{ marginTop: "8px" }}>
        {description}
      </p>

      <div style={{ marginTop: "10px", textDecoration: "underline" }}>
        Explore →
      </div>
    </a>
  )
}