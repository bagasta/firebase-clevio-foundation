// ================================================================
// Pertemuan 2 — CREATE + READ: Tampilkan Data dari Firestore
// Konsep baru: onSnapshot (real-time listener), query, orderBy
// ================================================================

import { initializeApp }
    from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy }
    from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { firebaseConfig }
    from "../../firebase-config.js";

// ── Setup Firebase ──────────────────────────────────────────
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const COLLECTION = "anime-list";

// ── DOM Elements ────────────────────────────────────────────
const form = document.getElementById("animeForm");
const submitBtn = document.getElementById("submitBtn");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const ratingInput = document.getElementById("rating");
const stars = document.querySelectorAll(".star");
const animeList = document.getElementById("animeList");
const animeCount = document.getElementById("animeCount");

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

// ── Validasi ────────────────────────────────────────────────
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

// ── ✨ BARU: Render Kartu Anime ──────────────────────────────
function buatKartu(doc) {
    const { judul, genre, rating, status } = doc.data();
    const bintang = "★".repeat(rating) + "☆".repeat(5 - rating);

    // Tentukan class warna badge status
    const statusClass = {
        "Mau Nonton": "chip-status-mau",
        "Lagi Nonton": "chip-status-lagi",
        "Sudah Nonton": "chip-status-sudah",
    }[status] || "";

    const kartu = document.createElement("div");
    kartu.className = "anime-card";
    kartu.dataset.id = doc.id;
    kartu.innerHTML = `
        <div class="card-info">
            <p class="card-judul">${judul}</p>
            <div class="card-meta">
                <span class="chip">${genre}</span>
                <span class="chip ${statusClass}">${status}</span>
            </div>
        </div>
        <span class="card-stars">${bintang}</span>
    `;
    return kartu;
}

// ── ✨ BARU: Real-time Listener (onSnapshot) ─────────────────
function dengarkanData() {
    const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
        animeCount.textContent = snapshot.size;

        if (snapshot.empty) {
            animeList.innerHTML = `<p class="state-text">📭 Belum ada anime. Yuk tambahkan!</p>`;
            return;
        }

        animeList.innerHTML = "";
        snapshot.forEach(doc => animeList.appendChild(buatKartu(doc)));
    });
}

// ── SUBMIT: Simpan ke Firestore ─────────────────────────────
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

// Mulai dengarkan data saat halaman dibuka
dengarkanData();
