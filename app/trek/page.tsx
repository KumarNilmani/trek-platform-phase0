import Card from "../components/Card"

export default function TrekPage() {
  return (
    <div style={{ display: "grid", gap: "22px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Trek by Region
      </h1>

      <Card
        title="Himachal Pradesh"
        description="High altitude alpine treks"
        link="/trek/himachal"
      />

      <Card
        title="Uttarakhand"
        description="Classic Himalayan beginner treks"
        link="/trek/uttarakhand"
      />

      <Card
        title="Ladakh"
        description="Cold desert and remote treks"
        link="/trek/ladakh"
      />

      <Card
        title="Sikkim"
        description="Eastern Himalayan biodiversity"
        link="/trek/sikkim"
      />

      <Card
        title="South India"
        description="Western Ghats rainforest treks"
        link="/trek/south-india"
      />
    </div>
  )
}