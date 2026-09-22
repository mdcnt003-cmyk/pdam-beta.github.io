# PDAM Tirta Digital - Sistem Layanan Air Minum Berbasis NIK KTP

Website aplikasi layanan mandiri PDAM (Perusahaan Daerah Air Minum) modern dengan antarmuka animasi bertema air (*water theme*), login menggunakan **NIK KTP 16-digit**, dan arsitektur data terstruktur yang siap di-hosting di berbagai platform (*Vercel, Netlify, cPanel, Docker, VPS*).

---

## 🌟 Fitur Utama

1. **Autentikasi Berbasis NIK KTP**:
   - Validasi format e-KTP 16 digit angka dengan auto-spacing.
   - Deteksi otomatis profil pelanggan, nomor sambungan meter, golongan tarif, dan zona distribusi pipa.
   - Pilihan akun demo cepat 1-klik untuk pengujian instan (Rumah Tangga 1, Rumah Tangga 2, Niaga, dan Akun Petugas/Admin).
   - Registrasi pengajuan pasang baru sambungan air.

2. **Antarmuka & Animasi Bertema Air**:
   - **Interactive Liquid Wave Canvas**: Efek gelombang air dinamis multi-layer dengan partikel gelembung dan respon kursor mouse.
   - **Animated Mechanical Water Meter Dial**: Dial meteran air odometer m³ (digit hitam & merah) dengan flow wheel berputar real-time dan indikator tekanan Bar.
   - **Water Quality Telemetry Widget**: Monitoring real-time pH, Kekeruhan (NTU), Sisa Klor, dan TDS terstandarisasi Permenkes.
   - **Floating Bubbles Background**: Partikel gelembung air melayang transparan di seluruh halaman.

3. **Portal Pelanggan Lengkap**:
   - **Cek & Bayar Tagihan (Billing)**: Rincian biaya tarif blok progresif (Blok 1, 2, 3, 4, abonemen, admin, pemeliharaan meter), simulasi pembayaran instan (QRIS barcode countdown & Virtual Account Bank BCA/Mandiri/BRI), serta cetak struk/invoice resmi.
   - **Catat Meter Mandiri (Self Water Reading)**: Formulir input stand meter terkini, kalkulasi selisih kubikasi, upload foto meteran air, dan riwayat verifikasi.
   - **Pusat Pengaduan Gangguan Pipa (Ticketing)**: Form laporan pipa bocor, air keruh, mati air, atau meteran rusak dengan timeline tracking progress teknisi lapangan (*Terkirim -> Diverifikasi -> Petugas Ditugaskan -> Selesai*).
   - **Kalkulator & Simulasi Tarif Air**: Simulator perhitungan tarif blok progresif dengan slider m³ dan tips hemat air.
   - **Informasi & Jadwal Pemeliharaan Pipa**: Papan pengumuman pemadaman distribusi air dan zona terdampak.

4. **Backoffice / Panel Petugas PDAM**:
   - Manajemen database seluruh pelanggan berbasis NIK.
   - Verifikasi dan persetujuan angka meter mandiri pelanggan.
   - Penugasan teknisi dan eskalasi status tiket pengaduan pipa.
   - Penerbitan tagihan rekening air bulanan baru.

5. **Data Terstruktur & Siap Hosting**:
   - Dilengkapi penyimpanan terisolasi `localStorage` dan REST backend `server.js`.
   - Fitur Backup Database (`.JSON`) dan Restore/Reset data demo.
   - Konfigurasi siap deploy untuk **Vercel** (`vercel.json`), **Netlify** (`netlify.toml`), **cPanel** (`.htaccess`), dan **Docker** (`Dockerfile`).

---

## 🚀 Panduan Menjalankan di Lokal

### 1. Masuk ke folder proyek
```bash
cd D:\CODING\SMT3\pdam-tirta
```

### 2. Install dependensi
```bash
npm install
```

### 3. Jalankan server pengembangan (Development)
```bash
npm run dev
```
Buka browser pada URL yang tampil di terminal (biasanya `http://localhost:5173`).

### 4. Build untuk Produksi
```bash
npm run build
```

### 5. Jalankan Server Produksi Node.js
```bash
npm start
```
Akses di `http://localhost:3000`.

---

## 🌐 Panduan Hosting

### Opsi A: Hosting Gratis di Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Jalankan perintah:
   ```bash
   vercel
   ```
3. Konfigurasi `vercel.json` sudah tersedia secara otomatis.

### Opsi B: Hosting di Netlify
1. Upload folder `pdam-tirta` ke GitHub / Netlify.
2. Konfigurasi `netlify.toml` otomatis mendeteksi build `dist` dan routing SPA.

### Opsi C: Shared Hosting / cPanel (Apache)
1. Jalankan `npm run build`.
2. Buka folder `dist`.
3. Upload seluruh isi folder `dist` (termasuk file `.htaccess` dan `index.html`) ke direktori `public_html` di cPanel File Manager.

### Opsi D: VPS / Docker
1. Build docker image:
   ```bash
   docker build -t pdam-tirta .
   ```
2. Jalankan container:
   ```bash
   docker run -p 3000:3000 -d pdam-tirta
   ```

---

## 🔑 Akun Demo untuk Pengujian Cepat

| Jenis Akun | Nama Pelanggan | NIK KTP (16 Digit) | Golongan Tarif | No. Sambungan |
| :--- | :--- | :--- | :--- | :--- |
| **Pelanggan 1** | Budi Santoso, S.T. | `3201012304900001` | 2A - Rumah Tangga 1 | `2024-001928` |
| **Pelanggan 2** | Siti Rahmawati | `3201015508850002` | 2B - Rumah Tangga 2 | `2023-004812` |
| **Pelanggan 3** | H. Bambang (Resto) | `3201011112950003` | 3A - Niaga Kecil | `2022-009104` |
| **Petugas / Admin** | Admin Pengendali | `3201019999990000` | Pusat Kontrol | `ADM-TIRTA-01` |

*(Tersedia tombol pemilih akun cepat 1-klik di jendela pop-up Login).*
