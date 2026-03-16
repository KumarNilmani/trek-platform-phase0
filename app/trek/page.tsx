import Card from "../components/Card"

const regions = [
  {
    title: "Himachal Pradesh",
    description: "High altitude alpine treks",
    link: "/trek/himachal",
  },
  {
    title: "Uttarakhand",
    description: "Classic Himalayan beginner treks",
    link: "/trek/uttarakhand",
  },
  {
    title: "Ladakh",
    description: "Cold desert and remote treks",
    link: "/trek/ladakh",
  },
  {
    title: "Sikkim",
    description: "Eastern Himalayan biodiversity",
    link: "/trek/sikkim",
  },
  {
    title: "South India",
    description: "Western Ghats rainforest treks",
    link: "/trek/south-india",
  },
]

export default function TrekPage() {
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Trek by Region
      </h1>

      {regions.map((region) => (
        <Card
          key={region.link}
          title={region.title}
          description={region.description}
          link={region.link}
        />
      ))}
    </div>
  )
}