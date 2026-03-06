# Firebase CRUD — Anime Watch Tracker

Kurikulum 4 pertemuan untuk belajar Firebase Firestore dari nol.
Target siswa: SMP–SMA, tanpa pengalaman coding sebelumnya.

---

## Struktur Belajar

Setiap pertemuan **menambah fitur** di atas pertemuan sebelumnya.
Data di Firestore **tetap tersimpan** dari sesi ke sesi — siswa tidak perlu mengulang dari awal.

```
Pertemuan 1   →   Pertemuan 2   →   Pertemuan 3   →   Pertemuan 4
  CREATE           + READ            + UPDATE           + DELETE
 (Simpan)        (Tampilkan)         (Ubah)             (Hapus)
```

---

## Cara Menjalankan

1. Buka folder `firebase-db/` di VS Code
2. Buat file `firebase-config.js` dari template `firebase-config.example.js`
3. Isi konfigurasi Firebase project kamu di dalamnya
4. Buka file `lessons/pertemuan-X/index.html` di sidebar VS Code
5. Klik tombol **Go Live** di pojok kanan bawah VS Code
6. Browser terbuka di `http://127.0.0.1:5500/lessons/pertemuan-X/index.html`

> File ini tidak bisa dibuka langsung dengan klik dua kali — wajib lewat Live Server.

---

## Pertemuan 1 — CREATE

**Durasi:** 90 menit  
**Firebase API:** `addDoc()`, `serverTimestamp()`

Yang dipelajari:
- Apa itu database dan Firestore
- Cara menghubungkan web ke Firebase
- Struktur data (collection dan document)
- Menyimpan data dari form ke Firestore
- Validasi input sederhana

Hasil akhir: Siswa berhasil menyimpan data anime ke Firestore dan melihatnya di Firebase Console.

---

## Pertemuan 2 — READ

**Durasi:** 90 menit  
**Firebase API:** `onSnapshot()`, `query()`, `orderBy()`

Yang dipelajari:
- Konsep real-time listener
- Menampilkan data dari Firestore ke halaman web secara otomatis
- Membuat elemen HTML dinamis lewat JavaScript (`createElement`)
- Perbedaan "ambil data sekali" vs "dengarkan perubahan"

Hasil akhir: Data yang disimpan di P1 muncul otomatis di halaman. Jika data berubah, tampilan update tanpa reload.

---

## Pertemuan 3 — UPDATE

**Durasi:** 90 menit  
**Firebase API:** `updateDoc()`, `doc()`

Yang dipelajari:
- Konsep "state" dalam aplikasi (mode tambah vs mode edit)
- Mengisi form secara otomatis dari data yang ada
- Mengubah dokumen spesifik di Firestore berdasarkan ID
- Menulis logika kondisi `if / else` untuk dua mode berbeda

Hasil akhir: Siswa bisa mengklik tombol edit di kartu anime, mengubah datanya, dan melihat perubahan langsung di daftar.

---

## Pertemuan 4 — DELETE + Final

**Durasi:** 90 menit  
**Firebase API:** `deleteDoc()`

Yang dipelajari:
- Menghapus dokumen dari Firestore
- Membangun modal konfirmasi sebelum hapus
- Menghitung statistik sederhana dari data (total, sudah ditonton, rata-rata rating)
- Review keseluruhan konsep CRUD

Hasil akhir: Aplikasi CRUD selesai dan berfungsi penuh. Siswa presentasi project masing-masing.

---

## Setup Firebase (Lakukan Sebelum Pertemuan 1)

1. Buka [console.firebase.google.com](https://console.firebase.google.com)
2. Buat project baru
3. Aktifkan **Firestore Database** — pilih "mode pengujian"
4. Buka Project Settings, daftarkan aplikasi Web
5. Copy konfigurasi `firebaseConfig`
6. Buka file `firebase-config.example.js`, duplikat, rename jadi `firebase-config.js`
7. Paste konfigurasi ke dalamnya

File `firebase-config.js` sudah masuk `.gitignore` — tidak akan ikut ke GitHub.

---

## Struktur File

```
lessons/
├── README.md                       Panduan ini
├── firebase-config.example.js      Template konfigurasi
├── firebase-config.js              Konfigurasi pribadi (tidak di GitHub)
├── pertemuan-1/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── LESSON.md                   Panduan mengajar detail
├── pertemuan-2/
│   └── ...
├── pertemuan-3/
│   └── ...
└── pertemuan-4/
    └── ...
```
