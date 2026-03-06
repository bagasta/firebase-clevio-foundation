# 🎌 Lessons — Firebase CRUD: Anime Watch Tracker

Panduan lengkap untuk guru dalam mengajar Firebase Firestore CRUD selama **4 pertemuan × 90 menit**.

---

## 🎯 Tentang Project Ini

Siswa akan membangun **Anime Watch Tracker** — aplikasi untuk mencatat, menampilkan, mengedit, dan menghapus anime koleksi mereka, menggunakan Firebase Firestore sebagai database cloud.

---

## 📂 Cara Menggunakan Folder Ini

> ⚠️ **Penting untuk Guru:** Setiap folder `pertemuan-X` adalah **versi LENGKAP** aplikasi sampai sesi tersebut.

| Folder | Fitur yang Ada |
|---|---|
| `pertemuan-1/` | ✅ CREATE (tambah data) |
| `pertemuan-2/` | ✅ CREATE + READ (tampil data real-time) |
| `pertemuan-3/` | ✅ CREATE + READ + UPDATE (edit data) |
| `pertemuan-4/` | ✅ CREATE + READ + UPDATE + DELETE (lengkap + statistik) |

**Artinya:** Di pertemuan 2, fitur CREATE dari pertemuan 1 **tetap berfungsi**. Folder ini bersifat akumulatif, bukan terpisah.

---

## 🧑‍🏫 Alur Belajar Siswa

```
Pertemuan 1          Pertemuan 2          Pertemuan 3          Pertemuan 4
─────────────        ─────────────        ─────────────        ─────────────
Buat Form            Tampil Data          Edit Data            Hapus Data
    ↓                    ↓                    ↓                    ↓
 addDoc()           onSnapshot()          updateDoc()          deleteDoc()
                    orderBy()                                  + Statistik
                    renderCards()
```

Setiap pertemuan, **kode ditambahkan** di atas kode pertemuan sebelumnya. Data di Firestore juga **tetap ada** karena menggunakan collection yang sama (`anime-list`).

---

## ⚙️ Setup Awal (Wajib Sekali di Awal)

Sebelum pertemuan pertama, siswa perlu:

1. Buat project Firebase ([console.firebase.google.com](https://console.firebase.google.com))
2. Aktifkan **Firestore Database** (mode pengujian)
3. Copy `firebase-config.example.js` → rename jadi **`firebase-config.js`**
4. Isi dengan kredensial Firebase milik mereka
5. Install extension **Live Server** di VS Code

> File `firebase-config.js` sudah masuk `.gitignore` — tidak akan ikut ke GitHub.

---

## 📅 Ringkasan 4 Pertemuan

| Sesi | Topik | Durasi |
|---|---|---|
| Pertemuan 1 | CREATE — Menyimpan Data | 90 menit |
| Pertemuan 2 | READ — Menampilkan Data Real-time | 90 menit |
| Pertemuan 3 | UPDATE — Mengubah Data | 90 menit |
| Pertemuan 4 | DELETE + Final — Menghapus & Statistik | 90 menit |

Baca `LESSON.md` di masing-masing folder untuk panduan detail per pertemuan.

---

## 📁 Struktur File

```
lessons/
├── README.md                    ← Panduan ini
├── firebase-config.example.js   ← Template koneksi Firebase
├── firebase-config.js           ← (Buat sendiri, tidak ada di GitHub)
│
├── pertemuan-1/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── LESSON.md               ← Panduan mengajar P1
│
├── pertemuan-2/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── LESSON.md               ← Panduan mengajar P2
│
├── pertemuan-3/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── LESSON.md               ← Panduan mengajar P3
│
└── pertemuan-4/
    ├── index.html
    ├── style.css
    ├── script.js
    └── LESSON.md               ← Panduan mengajar P4
```
