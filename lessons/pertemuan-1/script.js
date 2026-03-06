// ================================================================
// Pertemuan 1 — CREATE: Menyimpan Data ke Firestore
// Konsep: addDoc, serverTimestamp, validasi form, star rating
// ================================================================

import { initializeApp }
    from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { firebaseConfig }
    from "../../firebase-config.js";

// ── Setup Firebase ──────────────────────────────────────────
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const COLLECTION = "anime-list"; // Nama koleksi di Firestore

// ── Ambil Elemen HTML ───────────────────────────────────────
const form = document.getElementById("animeForm");
const submitBtn = document.getElementById("submitBtn");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const ratingInput = document.getElementById("rating");
const stars = document.querySelectorAll(".star");

// ── Star Rating ─────────────────────────────────────────────
let pilihanRating = 0;

function tampilkanBintang(jumlah) {
    stars.forEach(s => s.classList.toggle("active", +s.dataset.value <= jumlah));
}

stars.forEach(star => {
    star.addEventListener("mouseenter", () => tampilkanBintang(+star.dataset.value));
    star.addEventListener("mouseleave", () => tampilkanBintang(pilihanRating));
    star.addEventListener("click", () => {
        pilihanRating = +star.dataset.value;
        ratingInput.value = pilihanRating;
        tampilkanBintang(pilihanRating);
        document.getElementById("errorRating").textContent = "";
    });
});

// ── Validasi Form ───────────────────────────────────────────
function validasiForm() {
    const aturan = {
        errorJudul: !document.getElementById("judul").value.trim() ? "Judul wajib diisi." : "",
        errorGenre: !document.getElementById("genre").value ? "Genre wajib dipilih." : "",
        errorRating: !ratingInput.value ? "Rating wajib dipilih." : "",
        errorStatus: !document.getElementById("status").value ? "Status wajib dipilih." : "",
    };

    let valid = true;
    for (const [id, pesan] of Object.entries(aturan)) {
        document.getElementById(id).textContent = pesan;
        if (pesan) valid = false;
    }
    return valid;
}

// ── Toast & Loading ─────────────────────────────────────────
let toastTimer;
function tampilkanToast(pesan, tipe = "success") {
    toastMsg.textContent = pesan;
    toast.className = `toast show ${tipe}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.className = "toast"; }, 3000);
}

function setLoading(aktif) {
    submitBtn.disabled = aktif;
    submitBtn.classList.toggle("loading", aktif);
}

// ── SUBMIT: Simpan Data ke Firestore ────────────────────────
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validasiForm()) return;

    setLoading(true);

    const data = {
        judul: document.getElementById("judul").value.trim(),
        genre: document.getElementById("genre").value,
        rating: Number(ratingInput.value),
        status: document.getElementById("status").value,
        createdAt: serverTimestamp(),
    };

    try {
        await addDoc(collection(db, COLLECTION), data);
        tampilkanToast("✅ Anime berhasil ditambahkan!");
        form.reset();
        pilihanRating = 0;
        ratingInput.value = "";
        tampilkanBintang(0);
    } catch (err) {
        console.error("Firestore Error:", err);
        tampilkanToast("❌ Gagal: " + err.message, "error");
    } finally {
        setLoading(false);
    }
});
