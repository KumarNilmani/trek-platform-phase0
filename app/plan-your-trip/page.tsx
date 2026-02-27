export default function PlanYourTripPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Plan Your Trip</h1>
      <p style={{ marginTop: 8 }}>
        Submit your idea. We’ll refine it and suggest the best trek/tour options.
      </p>

      <form style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <label>
          Trip Type
          <select style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}>
            <option>Trek</option>
            <option>Travel</option>
            <option>Not sure</option>
          </select>
        </label>

        <label>
          Destination / Region / State
          <input style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }} placeholder="Eg: Ladakh / Kerala" />
        </label>

        <label>
          Notes
          <textarea style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }} rows={4} />
        </label>

        <button type="button" style={{ padding: 10, fontWeight: 600 }}>
          Submit (Phase 0)
        </button>
      </form>
    </div>
  );
}