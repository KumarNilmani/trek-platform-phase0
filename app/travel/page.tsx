import Card from "../components/Card"

export default function TravelPage() {
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Travel by State
      </h1>

      <Card
        title="Rajasthan"
        description="Desert forts, culture and heritage"
        link="/travel/rajasthan"
      />

      <Card
        title="Kerala"
        description="Backwaters, forests and hill stations"
        link="/travel/kerala"
      />

      <Card
        title="Himachal Pradesh"
        description="Mountains, valleys and scenic drives"
        link="/travel/himachal"
      />

      <Card
        title="Uttarakhand"
        description="Spiritual routes and Himalayan landscapes"
        link="/travel/uttarakhand"
      />

      <Card
        title="Sikkim"
        description="Eastern Himalayan culture and monasteries"
        link="/travel/sikkim"
      />
    </div>
  )
}