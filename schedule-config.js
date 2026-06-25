// schedule-config.js
const firebaseConfig = {
    // 🔴 Điền thông tin cấu hình Firebase của bạn vào đây
    apiKey: "AIzaSyDEjnVYAOpBHUV8AKfxxFdCumwGqiH_9C8",
    authDomain: "schedule-master-3fead.firebaseapp.com",
    projectId: "schedule-master-3fead",
    storageBucket: "schedule-master-3fead.firebasestorage.app",
    messagingSenderId: "56251862481",
    appId: "1:56251862481:web:38fa80577b41a5248fe4f0",
    measurementId: "G-76WQ3E4G7V"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Mặc định lấy tuần hiện tại (Tuần 1 của năm hiện tại)
function getCurrentWeek() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
}