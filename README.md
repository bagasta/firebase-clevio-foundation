# 🔥 Firebase Firestore — Form Input Data

Proyek ini adalah form input data sederhana yang terhubung langsung ke **Firebase Firestore**. Data yang diinput (Nama, Umur, Hobby, Cita-cita) akan tersimpan di cloud secara real-time.

---

## 📋 Daftar Isi

1. [Prasyarat](#1-prasyarat)
2. [Buat Project Firebase](#2-buat-project-firebase)
3. [Aktifkan Firestore Database](#3-aktifkan-firestore-database)
4. [Dapatkan Konfigurasi Firebase](#4-dapatkan-konfigurasi-firebase)
5. [Setup Kode di Komputer](#5-setup-kode-di-komputer)
6. [Install VS Code & Live Server](#6-install-vs-code--live-server)
7. [Jalankan Proyeknya](#7-jalankan-proyeknya)
8. [⚠️ Keamanan API Key Firebase](#8-️-keamanan-api-key-firebase)

---

## 1. Prasyarat

Sebelum mulai, pastikan kamu sudah punya:

- ✅ Akun **Google** (untuk login ke Firebase)
- ✅ Koneksi internet
- ✅ Aplikasi **VS Code** terinstall ([download di sini](https://code.visualstudio.com/))
- ✅ Aplikasi **Google Chrome** atau browser modern lainnya

---

## 2. Buat Project Firebase

1. Buka browser, pergi ke **[https://console.firebase.google.com](https://console.firebase.google.com)**
2. Login menggunakan akun Google kamu
3. Klik tombol **"Tambahkan Project"** (atau "Add Project")

   ![Firebase Console](https://i.imgur.com/placeholder.png)

4. **Isi nama project**, contoh: `belajar-firestore` → klik **Lanjutkan**
5. Pada halaman Google Analytics, pilih **"Tidak mengaktifkan Google Analytics"** (bisa dilewati untuk belajar) → klik **Buat Project**
6. Tunggu beberapa detik sampai muncul tanda ✅ → klik **Lanjutkan**

---

## 3. Aktifkan Firestore Database

1. Di sidebar kiri Firebase Console, cari dan klik **"Firestore Database"**
2. Klik tombol **"Buat Database"**
3. Pilih **"Mulai dalam mode pengujian"** (Test mode) → klik **Berikutnya**

   > ⚠️ Mode ini membuat semua orang bisa baca dan tulis data. Cocok untuk belajar, tapi **harus diubah sebelum dipakai sungguhan**.

4. Pilih lokasi server (pilih `asia-southeast2` untuk Indonesia) → klik **Aktifkan**
5. Tunggu sampai database siap ✅

---

## 4. Dapatkan Konfigurasi Firebase

1. Klik ikon **roda gigi ⚙️** di samping "Project Overview" → pilih **"Setelan Project"**
2. Scroll ke bawah ke bagian **"Aplikasi Anda"**
3. Klik ikon **`</>`** (Web) untuk mendaftarkan aplikasi web

   - Isi **Nama Alias Aplikasi**, contoh: `form-data`
   - Klik **"Daftarkan Aplikasi"**

4. Kamu akan melihat kode seperti ini — **copy bagian `firebaseConfig`-nya:**

   ```javascript
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "nama-project.firebaseapp.com",
     projectId: "nama-project",
     storageBucket: "nama-project.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abcdef"
   };
   ```

5. Klik **"Lanjutkan ke Konsol"**

---

## 5. Setup Kode di Komputer

1. **Download atau clone repo ini** ke komputer kamu:

   ```bash
   git clone https://github.com/bagasta/firebase-clevio-foundation.git
   ```

   Atau klik tombol **"Code" → "Download ZIP"** di GitHub, lalu ekstrak.

2. **Buka folder** `firebase-db` di VS Code:
   - Buka VS Code
   - Klik **File → Open Folder** → pilih folder `firebase-db`

3. **Buka file `script.js`**, cari bagian ini di baris atas:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     ...
   };
   ```

4. **Ganti** semua nilai `"YOUR_..."` dengan konfigurasi yang kamu copy dari Firebase tadi. Contoh hasil akhirnya:

   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyCmZR...",
     authDomain: "belajar-firestore.firebaseapp.com",
     projectId: "belajar-firestore",
     storageBucket: "belajar-firestore.appspot.com",
     messagingSenderId: "73146401683",
     appId: "1:73146401683:web:265760f..."
   };
   ```

5. Simpan file dengan **`Ctrl + S`**

---

## 6. Install VS Code & Live Server

> Proyek ini **tidak bisa** dibuka langsung dengan klik dua kali file HTML-nya.  
> Kita perlu menjalankannya lewat server lokal. Caranya mudah! 👇

### Install Extension Live Server

1. Buka VS Code
2. Tekan **`Ctrl + Shift + X`** untuk membuka panel Extensions
3. Di kotak pencarian, ketik: **`Live Server`**
4. Pilih yang dibuat oleh **Ritwick Dey** *(yang paling atas)*
5. Klik tombol **Install** → tunggu sampai selesai ✅

---

## 7. Jalankan Proyeknya

1. Di VS Code, buka file **`index.html`** (klik nama filenya di sidebar kiri)
2. Lihat bagian **bawah layar VS Code** — ada tulisan **`Go Live`** di pojok kanan bawah

   ```
   [ Ln 1, Col 1   UTF-8   HTML   Go Live ]
   ```

3. Klik **`Go Live`** → browser akan otomatis terbuka! 🎉
4. Alamat yang terbuka: `http://127.0.0.1:5500/index.html`

### Cara Pakai Form

1. Isi semua field: **Nama, Umur, Hobby, Cita-cita**
2. Klik tombol **"Simpan Data"**
3. Tunggu notifikasi hijau **"Data berhasil disimpan ke Firestore! 🎉"**
4. Cek data di **Firebase Console → Firestore Database → collection `users`** ✅

---

## 8. ⚠️ Keamanan API Key Firebase

### "Apakah aman meng-upload API key ke GitHub?"

Jawabannya: **Tidak sepenuhnya aman, tapi Firebase punya cara perlindungannya sendiri.**

Tidak seperti password, API key Firebase **memang dirancang untuk ada di kode frontend** (sisi klien). API key ini hanya berfungsi untuk **mengidentifikasi project** kamu di server Google — bukan untuk memberikan akses penuh.

**Yang benar-benar melindungi data kamu adalah → Firebase Security Rules.**

---

### ✅ Yang Harus Dilakukan Sebelum Push ke GitHub

#### Langkah 1 — Perketat Firebase Security Rules

Secara default, test mode mengizinkan siapa saja membaca dan menulis. Ubah aturannya:

1. Di Firebase Console → **Firestore Database → Rules**
2. Ganti rule-nya menjadi seperti ini:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{document} {
         // Hanya boleh menulis (tambah data), tidak boleh dibaca sembarangan
         allow create: if true;
         allow read, update, delete: if false;
       }
     }
   }
   ```

3. Klik **Publish** ✅

#### Langkah 2 — Batasi API Key di Google Cloud Console

1. Buka **[https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)**
2. Pilih project Firebase kamu
3. Klik nama API key kamu → di bagian **"Application restrictions"**, pilih **HTTP referrers**
4. Tambahkan domain kamu, contoh: `http://127.0.0.1:5500/*` (untuk lokal) atau domain GitHub Pages kamu
5. Klik **Save**

---

### 📌 Ringkasan Keamanan

| Situasi | Aman? |
|---|---|
| API key di GitHub tanpa Security Rules | ❌ Berbahaya |
| API key di GitHub + Security Rules yang ketat | ✅ Aman untuk belajar |
| API key di GitHub + Security Rules + Pembatasan domain | ✅ Lebih aman |
| Proyek production sungguhan | Gunakan **Firebase Authentication** + Rules berbasis user |

---

## 📁 Struktur File

```
firebase-db/
├── index.html   → Struktur tampilan form
├── style.css    → Tampilan/desain (warna, animasi, layout)
├── script.js    → Logika JavaScript + koneksi Firebase
└── README.md    → Panduan ini
```

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** — Struktur halaman
- **CSS3** — Desain modern (Glassmorphism, Gradient, Animasi)
- **JavaScript (ES Modules)** — Logika form dan validasi
- **Firebase Firestore v11** — Database cloud real-time

---

> Dibuat untuk materi belajar Firebase Firestore 🔥
