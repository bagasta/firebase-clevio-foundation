// ============================================================
// script.js — Firebase Firestore Data Input
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// Config diambil dari file terpisah (tidak di-push ke GitHub)
// Lihat: firebase-config.example.js untuk panduan pengisian
import { firebaseConfig } from "./firebase-config.js";

// Inisialisasi Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ============================================================
// 🎯 DOM REFERENCES
// ============================================================
const form = document.getElementById("dataForm");
const submitBtn = document.getElementById("submitBtn");
const toast = document.getElementById("toast");
const toastIcon = document.getElementById("toastIcon");
const toastMsg = document.getElementById("toastMessage");

// Field & error pairs
const fields = [
    { id: "nama", errorId: "error-nama", label: "Nama" },
    { id: "umur", errorId: "error-umur", label: "Umur" },
    { id: "hobby", errorId: "error-hobby", label: "Hobby" },
    { id: "citacita", errorId: "error-citacita", label: "Cita-cita" },
];

// ============================================================
// ✅ VALIDATION
// ============================================================
function validateField(field) {
    const inputEl = document.getElementById(field.id);
    const errorEl = document.getElementById(field.errorId);
    const groupEl = document.getElementById(`group-${field.id}`);
    const value = inputEl.value.trim();

    let errorMsg = "";

    if (!value) {
        errorMsg = `${field.label} wajib diisi.`;
    } else if (field.id === "umur") {
        const num = Number(value);
        if (!Number.isInteger(num) || num < 1 || num > 120) {
            errorMsg = "Umur harus berupa angka antara 1 – 120.";
        }
    } else if (value.length < 2) {
        errorMsg = `${field.label} minimal 2 karakter.`;
    }

    if (errorMsg) {
        errorEl.textContent = errorMsg;
        groupEl.classList.add("form__group--error");
        return false;
    }

    errorEl.textContent = "";
    groupEl.classList.remove("form__group--error");
    return true;
}

function validateAll() {
    return fields.map(validateField).every(Boolean);
}

// Validate on blur (saat user meninggalkan field)
fields.forEach(({ id }) => {
    const inputEl = document.getElementById(id);
    const fieldDef = fields.find(f => f.id === id);
    inputEl.addEventListener("blur", () => validateField(fieldDef));
    inputEl.addEventListener("input", () => {
        // Clear error saat user mulai mengetik ulang
        const errorEl = document.getElementById(`error-${id}`);
        const groupEl = document.getElementById(`group-${id}`);
        if (errorEl.textContent) {
            errorEl.textContent = "";
            groupEl.classList.remove("form__group--error");
        }
    });
});

// ============================================================
// 🔔 TOAST NOTIFICATION
// ============================================================
let toastTimer = null;

function showToast(message, type = "success") {
    toastIcon.textContent = type === "success" ? "✅" : "❌";
    toastMsg.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// ============================================================
// ⬆️ SET LOADING STATE
// ============================================================
function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    submitBtn.classList.toggle("loading", isLoading);
    submitBtn.querySelector(".btn-submit__text").textContent = isLoading
        ? "Menyimpan..."
        : "Simpan Data";
}

// ============================================================
// 🚀 FORM SUBMIT — SAVE TO FIRESTORE
// ============================================================
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Validasi semua field
    if (!validateAll()) return;

    setLoading(true);

    const payload = {
        nama: document.getElementById("nama").value.trim(),
        umur: Number(document.getElementById("umur").value.trim()),
        hobby: document.getElementById("hobby").value.trim(),
        citacita: document.getElementById("citacita").value.trim(),
        createdAt: serverTimestamp(),
    };

    try {
        const docRef = await addDoc(collection(db, "users"), payload);
        console.log("Data tersimpan dengan ID:", docRef.id);
        showToast("Data berhasil disimpan ke Firestore! 🎉", "success");
        form.reset();
    } catch (error) {
        console.error("Gagal menyimpan data:", error);
        showToast(`Gagal menyimpan: ${error.message}`, "error");
    } finally {
        setLoading(false);
    }
});
