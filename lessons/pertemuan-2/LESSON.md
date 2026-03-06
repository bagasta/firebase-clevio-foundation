# 📘 LESSON — Pertemuan 2: READ

**Topik:** Menampilkan Data dari Firestore Secara Real-time  
**Durasi:** 90 Menit  
**Level:** Pemula (SMP–SMA)

---

## 🎯 Tujuan Pembelajaran

Setelah pertemuan ini, siswa mampu:
- Memahami konsep *real-time listener* di Firestore
- Menampilkan data dari Firestore ke halaman web secara otomatis
- Memahami cara membuat elemen HTML dinamis lewat JavaScript (`createElement`)
- Membaca kode `onSnapshot`, `query`, dan `orderBy`

---

## ⚠️ Catatan Penting untuk Guru

> Pertemuan 2 ini **sudah termasuk fitur CREATE** dari pertemuan 1.  
> Siswa tidak perlu khawatir — data yang sudah ditambah di pertemuan 1 **masih ada di Firestore**  
> karena kita menggunakan collection yang sama (`anime-list`).

---

## ⏱️ Rencana Waktu (90 Menit)

| Waktu | Aktivitas |
|---|---|
| 0–10 menit | Review pertemuan 1 — tanya jawab singkat |
| 10–20 menit | Demo: buka halaman P2, tunjukkan data muncul otomatis |
| 20–40 menit | Bedah konsep `onSnapshot` — "kenapa data langsung muncul?" |
| 40–60 menit | Bedah fungsi `buatKartu()` — cara buat HTML lewat JS |
| 60–75 menit | Siswa coding: ubah tampilan kartu (warna, teks, ikon) |
| 75–90 menit | Review & tanya jawab |

---

## 💡 Penjelasan Konsep untuk Siswa

### Apa itu `onSnapshot()`?
> "Bayangkan kamu subscribe notifikasi YouTube. Setiap ada video baru, kamu langsung dapat notif. `onSnapshot` persis seperti itu — setiap ada data baru di Firestore, halaman web langsung diperbarui otomatis, tanpa perlu refresh!"

### Apa itu `query` dan `orderBy`?
> "Query itu artinya 'pertanyaan ke database'. `orderBy('createdAt', 'desc')` artinya: 'tampilkan data yang paling baru di atas.'"

### Apa itu `createElement` dan `innerHTML`?
> "Kita membuat kartu anime menggunakan JavaScript. `createElement('div')` membuat kotak baru, lalu `innerHTML` mengisi isinya dengan kode HTML."

---

## 🔍 Bagian Kode yang Perlu Dijelaskan

### 1. Import tambahan (baris baru di P2)
```js
import { ..., onSnapshot, query, orderBy } from "...firebase-firestore.js";
```
**Jelaskan:** Kita tambah 3 fitur baru dari Firestore untuk keperluan READ.

### 2. Fungsi buatKartu() — render satu kartu anime
```js
function buatKartu(doc) {
    const { judul, genre, rating, status } = doc.data();
    const kartu = document.createElement("div");
    kartu.className = "anime-card";
    kartu.innerHTML = `...`;
    return kartu;
}
```
**Jelaskan:** Fungsi ini menerima data satu anime dari Firestore, lalu membuat elemen HTML kartu.

### 3. Fungsi dengarkanData() — listener utama
```js
function dengarkanData() {
    const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
        snapshot.forEach(doc => animeList.appendChild(buatKartu(doc)));
    });
}
```
**Jelaskan:** Fungsi ini "mendengarkan" Firestore. Setiap ada perubahan data, kartu-kartu diperbarui otomatis.

---

## ✅ Checklist Siswa Pertemuan 2

- [ ] Bisa membuka `pertemuan-2/` dengan Live Server
- [ ] Data anime dari pertemuan 1 muncul otomatis di halaman
- [ ] Coba buka 2 browser bersamaan — tambah data di satu browser, lihat muncul di browser lain secara real-time
- [ ] Bisa menjelaskan dengan kata sendiri: "apa itu `onSnapshot`?"

---

## 🚀 Tantangan

> "Coba tambahkan teks '**Tidak ada anime**' saat belum ada data.  
> Hint: cek `if (snapshot.empty)` di dalam `onSnapshot`!"

---

## ⚠️ Masalah Umum & Solusinya

| Masalah | Solusi |
|---|---|
| Data tidak muncul | Cek Firestore Rules (`allow read: if true`) |
| "Cannot read properties of undefined" | Pastikan nama field di `doc.data()` sama dengan yang disimpan |
| Duplikat kartu muncul | Pastikan ada `animeList.innerHTML = ""` sebelum render ulang |
