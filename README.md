# Portofolio

Website portofolio statis modern, terinspirasi dari [brittanychiang.com](https://brittanychiang.com/). Dibangun dengan **Astro** dan **Tailwind CSS 4**, siap di-deploy ke **GitHub Pages**.

## Fitur

- **Dua bahasa (i18n)**: Indonesia (default, `/`) dan English (`/en/`) dengan pengalih bahasa di sidebar
- Layout split-screen 2 kolom ala brittanychiang.com: sidebar sticky kiri (nama, jabatan, menu nav, sosial) + konten kanan
- Section Tentang, Pengalaman, dan Proyek — daftar vertikal rapi dengan efek hover
- Tema gelap navy/teal mengikuti palet brittanychiang.com (slate-900 + aksen teal), font Plus Jakarta Sans yang nyaman dibaca
- **Scrollspy**: menu sidebar menyorot section yang sedang aktif (garis indikator memanjang + menyala) saat di-scroll
- Responsif penuh (mobile, tablet, desktop) — sticky label section di mobile
- Tautan sosial (GitHub, LinkedIn, Medium, YouTube) di sidebar

## Menjalankan di Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321/portofolio/` di browser. Untuk build produksi:

```bash
npm run build      # output di folder dist/
npm run preview    # pratinjau hasil build
```

## Mengubah Konten

Konten dikelola di dua file:

| File            | Isi                                                |
| --------------- | -------------------------------------------------- |
| `src/data/site.ts` | Profil, bio, skill, pengalaman, proyek, sosial — **bilingual** (`id`/`en`) |
| `src/i18n.ts`   | Terjemahan string antar-muka (menu, judul section, footer, dll.) |

Nama & jabatan ada di `profile`; bio & skill di `profile.bio`/`profile.skills`; pengalaman di `experience`; proyek di `projects`. Field teks yang berbahasa memakai objek `{ id, en }` — isi kedua variannya.

Screenshot proyek: isi field `image` di `src/data/site.ts` (contoh: `/images/project-a.png`) dan letakkan gambar di `public/images/`.

Menambah halaman bahasa: tambah locale di `astro.config.mjs` (`i18n.locales`) + buat folder `src/pages/<locale>/`.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub (contoh nama: `portofolio`), lalu push proyek ini:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. Di GitHub, buka **Settings → Pages**:
   - **Build and deployment** → pilih **GitHub Actions** (bukan branch). Workflow `.github/workflows/deploy.yml` sudah tersedia.
3. Push ke `main` akan otomatis build & deploy. Statusnya bisa dilihat di tab **Actions**.
4. Situs live di: `https://<username>.github.io/<repo>/`

### Penting: atur `base` di `astro.config.mjs`

- Repo bernama `<username>.github.io` → gunakan `base: '/'`
- Repo lain (misal `portofolio`) → gunakan `base: '/portofolio/'` (sudah default di sini)

Sesuaikan juga `site: 'https://<username>.github.io'` dengan username GitHub Anda.