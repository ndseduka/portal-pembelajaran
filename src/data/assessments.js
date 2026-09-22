/**
 * Data Assessment
 *
 * Tambahkan tugas baru di dalam array sesuai mata pelajaran.
 * Cukup ubah title, description, type, dan url.
 * Tidak perlu mengubah halaman assessment.njk.
 */
module.exports = [
    {
        subject: "Koding & KA",
        key: "koding",
        icon: "⌘",
        accent: "gold",
        description: "Kumpulan tugas, latihan, dan assessment Koding & Kecerdasan Artifisial.",
        tasks: [
            {
                title: "Assessment Koding & KA",
                description: "Akses tugas atau assessment Koding & Kecerdasan Artifisial melalui tombol di bawah.",
                type: "Tugas Online",
                url: ""
            }
        ]
    },
    {
        subject: "Informatika",
        key: "informatika",
        icon: "⌘",
        accent: "blue",
        description: "Kumpulan tugas, latihan, dan assessment mata pelajaran Informatika.",
        tasks: [
            {
                title: "Assessment Informatika",
                description: "Akses tugas atau assessment Informatika melalui tombol di bawah.",
                type: "Tugas Online",
                url: ""
            }
        ]
    }
];
