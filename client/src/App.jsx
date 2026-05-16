import { useState } from "react";

const services = [
  { icon: "📊", title: "Konsultansi Strategi", desc: "Analisis mendalam terhadap kondisi bisnis Anda dan penyusunan roadmap strategis jangka panjang." },
  { icon: "💻", title: "Pengembangan Teknologi", desc: "Pembangunan sistem informasi, aplikasi web, dan platform digital yang scalable dan andal." },
  { icon: "🚀", title: "Transformasi Digital", desc: "Pendampingan proses digitalisasi menyeluruh dari operasional hingga pengalaman pelanggan." },
  { icon: "📈", title: "Pemasaran Digital", desc: "Strategi SEO, iklan digital, dan manajemen media sosial untuk meningkatkan visibilitas brand." },
  { icon: "🔐", title: "Keamanan Siber", desc: "Audit keamanan, penetration testing, dan implementasi kebijakan keamanan data perusahaan." },
  { icon: "🎓", title: "Pelatihan & SDM", desc: "Program pelatihan karyawan dan pengembangan kompetensi digital untuk tim internal Anda." },
];

const team = [
  { initials: "AN", name: "Ahmad Nugroho",  role: "CEO & Founder",            bg: "#FFF0E6", color: "#B5550A" },
  { initials: "SR", name: "Siti Rahayu",    role: "Chief Technology Officer",  bg: "#E1F5EE", color: "#0F6E56" },
  { initials: "BP", name: "Budi Prasetyo",  role: "Head of Consulting",        bg: "#EEEDFE", color: "#534AB7" },
  { initials: "DL", name: "Dewi Lestari",   role: "Creative Director",         bg: "#E6F1FB", color: "#185FA5" },
];

const clients = ["Bank Nusantara", "Telkom Group", "Astra Digital", "Pertamina", "Tokopedia", "Kemkominfo RI"];

const values = [
  { title: "Integritas", desc: "Kami beroperasi dengan transparansi penuh dan kejujuran dalam setiap aspek kerja sama." },
  { title: "Inovasi",    desc: "Solusi kami selalu mengadopsi teknologi terkini untuk hasil yang optimal dan kompetitif." },
  { title: "Kolaborasi", desc: "Kami percaya bahwa hasil terbaik lahir dari kemitraan yang erat antara tim kami dan klien." },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ background: "#FAF8F4", borderBottom: "1px solid #E8E3D9", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 800, color: "#1A1816" }}>
          Aruna <span style={{ color: "#B5550A" }}>Nusantara</span>
        </span>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {["Tentang", "Layanan", "Tim", "Klien", "Kontak"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{ fontSize: "0.85rem", color: "#6B6660", textDecoration: "none", fontWeight: 500 }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          style={{ background: "#B5550A", color: "#fff", border: "none", padding: "0.55rem 1.4rem", borderRadius: 8, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}
          className="hidden md:block"
        >
          Hubungi Kami
        </button>
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", fontSize: "1.25rem", cursor: "pointer", color: "#1A1816" }} className="md:hidden">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div style={{ padding: "1rem 2rem 1.5rem", borderTop: "1px solid #E8E3D9", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {["Tentang", "Layanan", "Tim", "Klien", "Kontak"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} style={{ fontSize: "0.875rem", color: "#6B6660", textDecoration: "none" }}>
              {item}
            </a>
          ))}
          <button style={{ background: "#B5550A", color: "#fff", border: "none", padding: "0.65rem", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
            Hubungi Kami
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#1A1816", minHeight: 500 }}>
      <div style={{ padding: "5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(181,85,10,0.18)", border: "1px solid rgba(181,85,10,0.35)", borderRadius: 100, padding: "0.3rem 1rem", fontSize: "0.7rem", color: "#E07A3A", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem", width: "fit-content" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E07A3A", display: "inline-block" }}></span>
          Est. 2010 · Jakarta, Indonesia
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "3.5rem", fontWeight: 800, color: "#F5F0E8", lineHeight: 1.08, letterSpacing: "-1px", marginBottom: "1.5rem" }}>
          Membangun{" "}
          <span style={{ color: "#E07A3A" }}>Bisnis</span>
          <br />yang Lebih Baik
        </h1>
        <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.45)", lineHeight: 1.75, maxWidth: 400, fontWeight: 300, marginBottom: "2.5rem" }}>
          PT Aruna Nusantara adalah perusahaan konsultansi dan teknologi yang mendampingi bisnis Indonesia tumbuh dengan strategi tepat dan solusi digital terpadu.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button style={{ background: "#B5550A", color: "#fff", border: "none", padding: "0.85rem 1.75rem", borderRadius: 10, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>
            Lihat Layanan Kami
          </button>
          <button style={{ background: "transparent", color: "rgba(245,240,232,0.6)", border: "1px solid rgba(245,240,232,0.15)", padding: "0.85rem 1.6rem", borderRadius: 10, fontSize: "0.9rem", cursor: "pointer" }}>
            Unduh Company Profile
          </button>
        </div>
      </div>
      <div style={{ background: "#241F1A", display: "flex", alignItems: "flex-end", padding: "2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#1A1816", width: "100%", borderRadius: 12, overflow: "hidden" }}>
          {[
            { value: "14+", label: "Tahun pengalaman" },
            { value: "320", label: "Proyek selesai" },
            { value: "85+", label: "Klien aktif" },
            { value: "48",  label: "Profesional berpengalaman" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#2E2720", padding: "1.75rem" }}>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#E07A3A", margin: 0 }}>{s.value}</p>
              <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.35)", marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5550A", marginBottom: "0.75rem" }}>Tentang Kami</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#1A1816", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
            Mitra Terpercaya untuk Transformasi Bisnis
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#7A746C", lineHeight: 1.75, maxWidth: 460, fontWeight: 300, marginBottom: "2rem" }}>
            Sejak 2010, kami telah mendampingi ratusan perusahaan di Indonesia — dari startup hingga korporasi multinasional — untuk mencapai pertumbuhan yang berkelanjutan.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {values.map((v) => (
              <div key={v.title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <span style={{ width: 10, height: 10, minWidth: 10, borderRadius: "50%", background: "#B5550A", marginTop: 5, display: "inline-block" }}></span>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1816", marginBottom: 2 }}>{v.title}</p>
                  <p style={{ fontSize: "0.8rem", color: "#7A746C", lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#241F1A", borderRadius: 16, height: 360, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "#B5550A", color: "#fff", borderRadius: 10, padding: "0.75rem 1rem", textAlign: "center" }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "1.75rem", fontWeight: 800, margin: 0, lineHeight: 1 }}>14</p>
            <p style={{ fontSize: "0.55rem", opacity: 0.7, letterSpacing: "0.1em", textTransform: "uppercase", margin: "2px 0 0" }}>Years</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "4rem", display: "block", marginBottom: "0.75rem" }}>🏢</span>
            <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>PT Aruna Nusantara</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="layanan" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem", borderTop: "1px solid #E8E3D9" }}>
      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5550A", marginBottom: "0.75rem" }}>Layanan Kami</p>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#1A1816", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "0.75rem" }}>
        Solusi Lengkap untuk<br />Pertumbuhan Bisnis
      </h2>
      <p style={{ fontSize: "0.9rem", color: "#7A746C", maxWidth: 460, lineHeight: 1.75, fontWeight: 300, marginBottom: "3rem" }}>
        Kami menawarkan berbagai layanan terintegrasi yang dirancang khusus untuk kebutuhan bisnis Indonesia.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {services.map((s) => (
          <div
            key={s.title}
            style={{ background: "#fff", border: "1px solid #E8E3D9", borderRadius: 14, padding: "1.75rem", transition: "border-color 0.2s", cursor: "default" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#B5550A"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#E8E3D9"}
          >
            <div style={{ width: 42, height: 42, background: "#FFF0E6", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: "1.25rem" }}>
              {s.icon}
            </div>
            <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1816", marginBottom: "0.5rem" }}>{s.title}</p>
            <p style={{ fontSize: "0.8rem", color: "#7A746C", lineHeight: 1.65 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="tim" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem", borderTop: "1px solid #E8E3D9" }}>
      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5550A", marginBottom: "0.75rem" }}>Tim Kami</p>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#1A1816", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "0.75rem" }}>
        Digerakkan oleh<br />Para Profesional
      </h2>
      <p style={{ fontSize: "0.9rem", color: "#7A746C", maxWidth: 460, lineHeight: 1.75, fontWeight: 300, marginBottom: "3rem" }}>
        Tim kami terdiri dari konsultan berpengalaman, engineer senior, dan desainer kreatif yang berdedikasi penuh.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
        {team.map((m) => (
          <div key={m.name} style={{ background: "#fff", border: "1px solid #E8E3D9", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ height: 130, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: m.color }}>
              {m.initials}
            </div>
            <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
              <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1816" }}>{m.name}</p>
              <p style={{ fontSize: "0.75rem", color: "#7A746C", marginTop: 2 }}>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="klien" style={{ margin: "0 2rem", background: "#F0EBE1", borderRadius: 20, padding: "3.5rem 2.5rem", textAlign: "center" }}>
      <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5550A", marginBottom: "0.75rem" }}>Klien & Mitra</p>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 800, color: "#1A1816", marginBottom: "2rem" }}>
        Dipercaya Berbagai Perusahaan
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
        {clients.map((c) => (
          <span key={c} style={{ background: "#fff", border: "1px solid #E8E3D9", borderRadius: 10, padding: "0.65rem 1.4rem", fontSize: "0.8rem", fontWeight: 600, color: "#5A5450", letterSpacing: "0.04em" }}>
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    alert(`Terima kasih, ${form.name}! Pesan Anda telah diterima.`);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%", background: "#FAF8F4", border: "1px solid #E8E3D9",
    borderRadius: 8, padding: "0.65rem 0.9rem", fontSize: "0.875rem",
    color: "#2C2A26", fontFamily: "inherit", outline: "none", boxSizing: "border-box",
  };
  const labelStyle = {
    display: "block", fontSize: "0.7rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A746C", marginBottom: "0.4rem",
  };

  return (
    <section id="kontak" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
      <div>
        <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5550A", marginBottom: "0.75rem" }}>Kontak</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#1A1816", lineHeight: 1.1, marginBottom: "1rem" }}>
          Mari Berdiskusi
        </h2>
        <p style={{ fontSize: "0.9rem", color: "#7A746C", lineHeight: 1.75, maxWidth: 380, fontWeight: 300, marginBottom: "2rem" }}>
          Hubungi kami untuk konsultasi awal tanpa biaya. Tim kami siap membantu menemukan solusi terbaik untuk bisnis Anda.
        </p>
        {[
          { icon: "📍", label: "Alamat",  val: "Jl. Sudirman Kav. 52, Jakarta Selatan 12190" },
          { icon: "📞", label: "Telepon", val: "+62 21 5555 1234" },
          { icon: "✉️", label: "Email",   val: "info@arunanusantara.co.id" },
        ].map((c) => (
          <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", marginBottom: "1.25rem" }}>
            <div style={{ width: 36, height: 36, background: "#FFF0E6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {c.icon}
            </div>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B5550A", margin: "0 0 2px" }}>{c.label}</p>
              <p style={{ fontSize: "0.875rem", color: "#2C2A26", fontWeight: 500, margin: 0 }}>{c.val}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "#fff", border: "1px solid #E8E3D9", borderRadius: 16, padding: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Nama Lengkap</label>
          <input style={inputStyle} type="text" name="name" value={form.name} onChange={handle} placeholder="Nama Anda" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Email</label>
          <input style={inputStyle} type="email" name="email" value={form.email} onChange={handle} placeholder="email@perusahaan.com" />
        </div>
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={labelStyle}>Pesan</label>
          <textarea style={{ ...inputStyle, height: 100, resize: "none" }} name="message" value={form.message} onChange={handle} placeholder="Ceritakan kebutuhan bisnis Anda..." />
        </div>
        <button
          onClick={submit}
          style={{ width: "100%", background: "#B5550A", color: "#fff", border: "none", padding: "0.875rem", borderRadius: 8, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
        >
          Kirim Pesan →
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#1A1816", padding: "2rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 800, color: "#F5F0E8" }}>
          Aruna <span style={{ color: "#E07A3A" }}>Nusantara</span>
        </span>
        <p style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>
          © 2024 PT Aruna Nusantara. Semua hak dilindungi.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Kebijakan Privasi", "Syarat & Ketentuan"].map((l) => (
            <a key={l} href="#" style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.3)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F4", fontFamily: "'Segoe UI', sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}