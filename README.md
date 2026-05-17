PT Aruna Nusantara – Website
Website company profile PT Aruna Nusantara, dibangun dengan React + Vite + Tailwind CSS.
Prerequisites
Pastikan sudah terinstall di komputer sebelum memulai:

Node.js versi 18 atau lebih baru → Download di nodejs.org (pilih versi LTS)
npm versi 9+ (sudah otomatis terinstall bersama Node.js)

Cek versi yang terinstall:
bashnode -v   # minimal v18.0.0
npm -v    # minimal v9.0.0
Tech Stack

React 18 – UI library
Vite 5 – Build tool & dev server
Tailwind CSS 3 – Utility-first CSS framework

Struktur Project
aruna-nusantara/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx        # Entry point
    ├── App.jsx         # Komponen utama & semua section
    └── index.css       # Tailwind directives + global styles
Cara Menjalankan
1. Extract project
bashunzip aruna-nusantara-project.zip
cd aruna-nusantara
2. Install dependencies
bashnpm install
3. Jalankan development server
bashnpm run dev
Buka browser di http://localhost:5173
4. Build untuk production
bashnpm run build
Output akan ada di folder dist/.
5. Preview build production
bashnpm run preview
Sections
SectionIDDeskripsiNavbar–Navigasi sticky dengan mobile menuHero–Banner utama dengan statistik perusahaanTentang#tentangProfil & nilai perusahaanLayanan#layanan6 layanan utama perusahaanTim#tim4 anggota tim intiKlien#klienDaftar klien & mitraKontak#kontakForm kontak & informasi kantorFooter–Copyright & tautan legal
Kustomisasi

Warna utama: #B5550A (Burnt Orange) – ubah di src/App.jsx
Data layanan: Edit array services di src/App.jsx
Data tim: Edit array team di src/App.jsx
Data klien: Edit array clients di src/App.jsx
