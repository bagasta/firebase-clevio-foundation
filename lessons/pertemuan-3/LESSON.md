# 📘 LESSON — Pertemuan 3: UPDATE

**Topik:** Mengubah Data yang Sudah Ada di Firestore  
**Durasi:** 90 Menit  
**Level:** Pemula (SMP–SMA)

---

## 🎯 Tujuan Pembelajaran

Setelah pertemuan ini, siswa mampu:
- Memahami konsep "state" dalam pemrograman (mode tambah vs mode edit)
- Mengisi ulang form secara otomatis dari data yang ada (`pre-fill form`)
- Mengubah data di Firestore menggunakan `updateDoc()`
- Membaca alur logika kondisi `if (idYangDiedit)` vs `else`

---

## ⚠️ Catatan Penting untuk Guru

> Pertemuan 3 **sudah termasuk fitur CREATE dan READ** dari pertemuan sebelumnya.  
> Semua data yang sudah tersimpan **tetap ada** — kita hanya menambah kemampuan EDIT.

---

## ⏱️ Rencana Waktu (90 Menit)

| Waktu | Aktivitas |
|---|---|
| 0–10 menit | Review P1 & P2 — tanya jawab singkat |
| 10–20 menit | Demo fitur edit: klik tombol ✏️, form terisi otomatis |
| 20–40 menit | Bedah konsep "state" — variabel `idYangDiedit` |
| 40–60 menit | Bedah fungsi `setModeEdit()` dan `resetModeEdit()` |
| 60–75 menit | Bedah perbedaan `addDoc` vs `updateDoc` |
| 75–90 menit | Siswa praktek edit data, review bersama |

---

## 💡 Penjelasan Konsep untuk Siswa

### Apa itu "State"?
> "State itu artinya kondisi aplikasi saat ini. Aplikasi kita punya 2 kondisi: **mode tambah** (form kosong, tombol = 'Simpan') dan **mode edit** (form terisi, tombol = 'Simpan Perubahan'). Variabel `idYangDiedit` yang menentukan kita sedang di mode mana."

### Apa itu `updateDoc()`?
> "`updateDoc` artinya update dokumen. Kita kasih tahu Firestore: 'cari dokumen dengan ID ini, lalu ubah isinya.' Berbeda dengan `addDoc` yang membuat dokumen baru."

### Kenapa pakai `doc(db, COLLECTION, id)`?
> "Ini cara kita menunjuk satu dokumen spesifik di Firestore berdasarkan ID-nya. Seperti nunjuk baris tertentu di spreadsheet."

---

## 🔍 Bagian Kode yang Perlu Dijelaskan

### 1. State variabel (BARU di P3)
```js
let idYangDiedit = null; // null = mode tambah, berisi ID = mode edit
```
**Jelaskan:** Ini adalah "memori" aplikasi. Saat `null`, kita tambah data baru. Saat berisi ID, kita sedang edit.

### 2. Fungsi setModeEdit() — aktifkan mode edit
```js
function setModeEdit(id, data) {
    idYangDiedit = id;
    document.getElementById("judul").value  = data.judul;  // isi form otomatis
    document.getElementById("genre").value  = data.genre;
    document.getElementById("status").value = data.status;
    // ... ubah tampilan tombol & card
}
```
**Jelaskan:** Fungsi ini dipanggil saat tombol ✏️ diklik. Isinya: simpan ID, lalu isi form dari data yang ada.

### 3. Kondisi di form submit (BARU di P3)
```js
if (idYangDiedit) {
    await updateDoc(doc(db, COLLECTION, idYangDiedit), data); // UPDATE
} else {
    await addDoc(collection(db, COLLECTION), data);           // TAMBAH BARU
}
```
**Jelaskan:** Satu form, dua fungsi. Tergantung kondisi `idYangDiedit`.

---

## ✅ Checklist Siswa Pertemuan 3

- [ ] Tombol ✏️ muncul di setiap kartu anime
- [ ] Saat diklik, form terisi otomatis dengan data anime tersebut
- [ ] Card form berubah warna (kuning) saat mode edit aktif
- [ ] Tombol "Batal" berfungsi — kembali ke mode tambah
- [ ] Data berhasil diubah dan langsung update di daftar

---

## 🚀 Tantangan

> "Coba tambahkan konfirmasi sebelum mode edit aktif:  
> `if (confirm('Yakin mau edit ' + judul + '?')) setModeEdit(...)`"

---

## ⚠️ Masalah Umum & Solusinya

| Masalah | Solusi |
|---|---|
| Edit tidak berubah di Firestore | Pastikan `idYangDiedit` terisi saat submit |
| Form tidak terisi otomatis | Cek nama field di `doc.data()` harus sama persis |
| Tombol batal tidak reset form | Pastikan `resetModeEdit()` dipanggil di event listener |
