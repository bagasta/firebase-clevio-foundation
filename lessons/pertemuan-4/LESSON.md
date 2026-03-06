# 📘 LESSON — Pertemuan 4: DELETE + Final CRUD

**Topik:** Menghapus Data & Menyelesaikan Aplikasi CRUD Lengkap  
**Durasi:** 90 Menit  
**Level:** Pemula (SMP–SMA)

---

## 🎯 Tujuan Pembelajaran

Setelah pertemuan ini, siswa mampu:
- Menghapus data dari Firestore menggunakan `deleteDoc()`
- Memahami pentingnya konfirmasi sebelum menghapus data
- Membangun UI modal konfirmasi dari nol
- Menghitung statistik sederhana dari data Firestore
- Menyelesaikan aplikasi CRUD yang fungsional penuh

---

## ⚠️ Catatan Penting untuk Guru

> Pertemuan 4 adalah versi **FINAL** dan **LENGKAP** dari Anime Watch Tracker.  
> Semua fitur CREATE, READ, UPDATE sudah ada — kita tambah DELETE dan statistik.  
> Ini juga pertemuan penutup, beri waktu untuk siswa **showcase project mereka!**

---

## ⏱️ Rencana Waktu (90 Menit)

| Waktu | Aktivitas |
|---|---|
| 0–10 menit | Review P1–P3 — recap perjalanan 4 sesi |
| 10–25 menit | Demo fitur hapus + modal konfirmasi |
| 25–45 menit | Bedah kode: `deleteDoc`, modal, dan statistik |
| 45–65 menit | Siswa praktek: hapus, edit, tambah data bebas |
| 65–80 menit | **Showcase:** presentasi project tiap siswa |
| 80–90 menit | Penutupan, next steps, tanya jawab |

---

## 💡 Penjelasan Konsep untuk Siswa

### Apa itu `deleteDoc()`?
> "`deleteDoc` artinya hapus dokumen dari Firestore. Kita kasih ID dokumen yang mau dihapus, dan Firestore akan menghapusnya permanen. Hati-hati — **tidak bisa dikembalikan!**"

### Kenapa perlu Modal Konfirmasi?
> "Good practice di semua aplikasi: sebelum menghapus data penting, selalu minta konfirmasi dari pengguna. Ini mencegah data terhapus karena salah klik."

### Apa itu Statistik di Sini?
> "Kita hitung langsung dari data yang ada: berapa total anime, berapa yang sudah ditonton, dan berapa rata-rata rating. Semuanya update otomatis setiap data berubah karena kita hitung di dalam `onSnapshot`."

---

## 🔍 Bagian Kode yang Perlu Dijelaskan

### 1. deleteDoc (inti P4)
```js
await deleteDoc(doc(db, COLLECTION, idYangDihapus));
```
**Jelaskan:** Cukup satu baris! Kita tunjuk dokumen berdasarkan ID, lalu hapus.

### 2. Modal — buka & tutup
```js
function bukaModal(id, judul) {
    idYangDihapus = id;         // Simpan ID yang mau dihapus
    modalOverlay.classList.add("show"); // Tampilkan modal
}
function tutupModal() {
    idYangDihapus = null;
    modalOverlay.classList.remove("show");
}
```
**Jelaskan:** Modal dikontrol dengan class CSS. Tambah class `show` → modal muncul. Hapus class → modal hilang.

### 3. Statistik — updateStats()
```js
function updateStats(docs) {
    const total    = docs.length;
    const sudah    = docs.filter(d => d.data().status === "Sudah Nonton").length;
    const rataRata = ratings.reduce((a, b) => a + b, 0) / ratings.length;
}
```
**Jelaskan:** Fungsi ini dipanggil setiap kali data berubah. Kita hitung statistik dari array dokumen dan tampilkan ke layar.

---

## 🎤 Panduan Sesi Showcase (15 Menit)

Minta setiap siswa untuk:
1. Menampilkan koleksi anime mereka di layar
2. Demo semua 4 fitur: tambah, tampil, edit, hapus
3. Menjelaskan **satu bagian kode** yang mereka pahami

Pertanyaan pemandu untuk siswa:
- "Apa perbedaan `addDoc` dan `updateDoc`?"
- "Kenapa kita pakai `onSnapshot` bukan ambil data sekali saja?"
- "Apa yang terjadi kalau kita hapus data? Bisa dikembalikan?"

---

## ✅ Checklist Siswa Pertemuan 4

- [ ] Tombol 🗑️ muncul di setiap kartu
- [ ] Modal konfirmasi muncul saat tombol 🗑️ diklik
- [ ] Data berhasil dihapus setelah konfirmasi
- [ ] Statistik (total, sudah nonton, rata-rata rating) tampil & update otomatis
- [ ] Bisa demo semua 4 fitur CRUD kepada guru/teman

---

## 🚀 Tantangan Lanjutan (Bonus)

1. **Filter data:** Tambah dropdown untuk filter berdasarkan status ("Mau Nonton", "Lagi Nonton", dll)
2. **Search:** Tambah input pencarian untuk cari anime berdasarkan judul
3. **Sort:** Tambah opsi urut berdasarkan rating atau genre
4. **Deploy:** Upload ke Firebase Hosting agar bisa diakses online!

---

## ⚠️ Masalah Umum & Solusinya

| Masalah | Solusi |
|---|---|
| Hapus tidak bekerja | Pastikan `idYangDihapus` terisi sebelum `deleteDoc` dipanggil |
| Modal tidak muncul | Cek apakah class `show` berhasil ditambah di elemen `.modal-overlay` |
| Statistik tidak update | Pastikan `updateStats(docs)` dipanggil di dalam `onSnapshot` |
| Error "Missing or insufficient permissions" | Ubah Firestore Rules: `allow delete: if true` |

---

## 🎉 Penutup

Selamat! Siswa kamu sudah berhasil membangun aplikasi full-stack pertama mereka menggunakan:
- **HTML** untuk struktur
- **CSS** untuk tampilan
- **JavaScript** untuk logika
- **Firebase Firestore** untuk database cloud

**Next Steps** yang bisa kamu rekomendasikan ke siswa:
- Belajar **Firebase Authentication** (login dengan Google)
- Belajar **Firebase Hosting** (deploy ke internet gratis)
- Belajar **React.js** untuk membuat aplikasi yang lebih besar
