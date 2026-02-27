export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border p-8">
        <h1 className="text-4xl font-bold">Trek. Travel. DIY Itineraries.</h1>
        <p className="mt-3 text-lg text-gray-700">
          Explore region-wise treks and state-wise travel ideas. Submit your plan — we refine it.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/trek" className="rounded bg-black text-white px-5 py-2">Explore Treks</a>
          <a href="/travel" className="rounded border px-5 py-2">Explore Travel</a>
          <a href="/plan-your-trip" className="rounded border px-5 py-2 font-semibold">Plan Your Trip</a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">Trek by Region</h2>
          <p className="mt-2 text-gray-700">HP, UK, Ladakh, Sikkim, South India</p>
          <a className="mt-4 inline-block underline" href="/trek">View Regions →</a>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">Travel by State</h2>
          <p className="mt-2 text-gray-700">States now, circuits later.</p>
          <a className="mt-4 inline-block underline" href="/travel">View States →</a>
        </div>
      </section>
    </div>
  );
}