# 📘 LESSON — Pertemuan 1: CREATE

**Topik:** Menyimpan Data ke Firebase Firestore  
**Durasi:** 90 Menit  
**Level:** Pemula (SMP–SMA, tanpa pengalaman coding)

---

## 🎯 Tujuan Pembelajaran

Setelah pertemuan ini, siswa mampu:
- Memahami apa itu database dan Firebase Firestore
- Membaca dan memahami kode HTML form sederhana
- Menjalankan project web menggunakan Live Server
- Menyimpan data ke Firestore menggunakan `addDoc()`

---

## ⏱️ Rencana Waktu (90 Menit)

| Waktu | Aktivitas |
|---|---|
| 0–15 menit | Pengenalan: Apa itu Firebase & Firestore? |
| 15–25 menit | Setup: buat project Firebase, aktifkan Firestore, isi config |
| 25–40 menit | Jalankan project, lihat tampilan form di browser |
| 40–65 menit | Bedah kode `script.js` bersama-sama |
| 65–80 menit | Coba tambah data sendiri, cek di Firebase Console |
| 80–90 menit | Review & tanya jawab |

---

## 💡 Penjelasan Konsep untuk Siswa

### Apa itu Firestore?
> "Bayangkan Firestore itu seperti Google Sheets yang ada di cloud. Kita bisa menyimpan, membaca, mengubah, dan menghapus data dari mana saja, bahkan dari aplikasi web kita!"

### Apa itu `addDoc()`?
> "addDoc artinya 'add document' — kita menambahkan satu baris data baru ke dalam database. Satu dokumen = satu data anime."

### Apa itu `collection`?
> "Collection itu seperti 'folder' di dalam Firestore. Kita simpan semua data anime di dalam collection bernama `anime-list`."

---

## 🔍 Bagian Kode yang Perlu Dijelaskan

### 1. Import Firebase (baris 1–11)
```js
import { initializeApp } from "...firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "...firebase-firestore.js";
import { firebaseConfig } from "../../firebase-config.js";
```
**Jelaskan:** Kita "meminjam" fitur Firebase dari internet, seperti menginstall aplikasi.

### 2. Koneksi ke Firestore (baris 14–16)
```js
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
```
**Jelaskan:** `app` adalah koneksi ke Firebase, `db` adalah koneksi ke databasenya.

### 3. Simpan Data — addDoc (baris 71–77)
```js
await addDoc(collection(db, COLLECTION), data);
```
**Jelaskan:** Ini perintah untuk menyimpan data ke Firestore. `await` artinya kita tunggu sampai selesai.

### 4. Star Rating
**Jelaskan:** Ini fitur bonus JS murni — saat bintang diklik, nilai disimpan ke input tersembunyi.

---

## ✅ Checklist Siswa Pertemuan 1

- [ ] Project Firebase sudah dibuat
- [ ] Firestore Database sudah diaktifkan (mode pengujian)
- [ ] File `firebase-config.js` sudah diisi dengan konfigurasi sendiri
- [ ] Live Server berhasil dijalankan
- [ ] Berhasil menambah minimal 3 anime ke Firestore
- [ ] Data muncul di Firebase Console → Firestore Database → `anime-list`

---

## 🚀 PR / Tantangan Rumah

> "Coba tambah field baru, misalnya **tahun rilis** anime. Ubah di `index.html` (tambah input) dan di `script.js` (tambah ke object `data`)!"

---

## ⚠️ Masalah Umum & Solusinya

| Masalah | Solusi |
|---|---|
| Halaman blank / error CORS | Buka via Live Server, bukan klik file langsung |
| "Firebase config is not defined" | Pastikan `firebase-config.js` sudah dibuat (bukan hanya `.example.js`) |
| Data tidak masuk Firestore | Cek Firestore Rules → harus `allow write: if true` |
| Bintang tidak bisa diklik | Pastikan file `script.js` di-load dengan `type="module"` |
