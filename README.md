# Website Ucapan Sempro untuk Robiadut

Website personal bertema minimalist romantic menggunakan Next.js, Tailwind CSS, dan Framer Motion.

## Menjalankan di komputer

1. Install Node.js versi 20 atau lebih baru.
2. Ekstrak folder proyek.
3. Buka terminal di folder proyek.
4. Jalankan:

```bash
npm install
npm run dev
```

5. Buka http://localhost:3000

## Mengganti foto

Dua foto yang diberikan sudah dimasukkan ke galeri:
- `public/photos/photo-1.jpeg`
- `public/photos/photo-2.jpeg`

Slot foto ketiga masih berupa placeholder. Untuk menggantinya, tambahkan `photo-3.jpeg` ke folder `public/photos/` dan isi properti `file` pada daftar `photos` di `app/page.tsx`.

## Musik YouTube

Bagian musik sudah menggunakan video YouTube yang diberikan: `https://youtu.be/RO75uUZiAw0`. Pengunjung menekan tombol Play untuk membuka pemutar YouTube yang tertanam di halaman. Koneksi internet diperlukan dan pemutaran mengikuti ketersediaan video serta pengaturan YouTube.

## Mengubah isi ucapan

Edit teks di `app/page.tsx`. Nama penerima saat ini adalah Robiadut.

## Build untuk deployment

```bash
npm run build
npm run start
```

Proyek dapat di-deploy ke Vercel dengan menghubungkan repository Git.
