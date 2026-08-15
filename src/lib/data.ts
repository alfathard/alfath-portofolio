export type Project = {
  slug: string
  title: string
  summary: string
  role: string
  year: string
  tags: string[]
  image: string
  liveUrl?: string
  repoUrl?: string
}

export type DesignWork = {
  slug: string
  title: string
  type: string
  year: string
  image: string
  orientation: "portrait" | "landscape"
}

export const profile = {
  name: "Ardhillah Habibi Al-Fath",
  role: "Designer & Web Developer",
  location: "Malang",
  available: true,
  headline: "Ardhillah Habibi Al-Fath",
  bio: "Saya bekerja di dua sisi: sebagai desainer yang menyusun desain visual, sekaligus sebagai developer yang menerjemahkannya menjadi kode yang bersih dan cepat. Kombinasi ini membuat saya bisa menjaga konsistensi ide dari file desain sampai produksi.",
  email: "ardhillahalfath@gmail.com",
  socials: {
    instagram: "https://instagram.com/alfath.ardh",
    pinterest: "https://id.pinterest.com/ardhillahalfath/",
  },
  stats: [
    { label: "Tahun pengalaman", value: "5+" },
    { label: "Proyek selesai", value: "5" },
  ],
}

export const skills = [
  {
    area: "Desain",
    description: "Menyusun sistem visual yang konsisten dan mudah dipakai ulang.",
    items: [
      "UI/UX Design",
      "Design System",
      "Figma",
      "Prototyping",
      "Affinity Design",
      "Graphic Design",
      "Photoshop"
    ],
  },
  {
    area: "Pengembangan",
    description: "Membangun antarmuka web yang cepat, aksesibel, dan terukur.",
    items: [
      "React",
      "Laravel",
      "CodeIgniter",
    ],
  },
]

export const projects: Project[] = [
  {
    slug: "pantiasuhanyasibu",
    title: "Web Profile Panti Asuhan Yasibu",
    summary:
      "Web profile milik Panti Asuhan Yasibu, yang berisi informasi tentang panti asuhan dan layanan yang diberikan.",
    role: "Full-stack Developer",
    year: "2021",
    tags: ["CodeIgniter", "MySQL"],
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786377775/Screenshot_2026-08-10_230230_vxfp5n.jpg",
    liveUrl: "https://pantiasuhanyasibu.org/",
  },
  {
    slug: "sista",
    title: "Sistem Informasi Skripsi dan Tugas Akhir",
    summary:
      "Sistem informasi untuk manajemen skripsi dan tugas akhir mahasiswa Fakultas Teknologi Informasi, Univesitsas Merdeka Malang.",
    role: "Full-stack Developer",
    year: "2023",
    tags: ["Laravel", "MariaDB"],
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786379397/Screenshot_2026-08-10_232943_emavph.jpg",
    liveUrl: "http://sista-fti.unmer.ac.id/",
  },
  {
    slug: "broadcast",
    title: "WhatsApp Broadcaster",
    summary:
      "Aplikasi untuk mengirim pesan WhatsApp ke siswa dan alumni sekolah kalam kudus",
    role: "Full-stack Developer",
    year: "2025",
    tags: ["Laravel", "MySQL", "Whatspie"],
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786380164/opo_diw5hc.png",
    // repoUrl: "https://github.com/",
  },
  {
    slug: "kopkar-pay",
    title: "Kopkar Pay",
    summary:
      "Desain UI/UX Aplikasi dan Web Koperasi Yayasan Universitas Merdeka Malang.",
    role: "UI/UX Designer",
    year: "2026",
    tags: ["UI/UX", "Figma", "Prototyping"],
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786379759/Screenshot_2026-08-10_233543_khmkks.jpg",
  },
]

export const designWorks: DesignWork[] = [
  {
    slug: "poster-gunung-arjuno",
    title: "Poster Gunung Arjuno",
    type: "Social Media",
    year: "2025",
    orientation: "portrait",
    image:
      "https://i.pinimg.com/736x/ba/81/0b/ba810bdcd3dd9b2aabe06bb3def059ef.jpg",
  },
  {
    slug: "banner-17-agustus",
    title: "Banner 17 Agustus 2026",
    type: "Banner",
    year: "2026",
    orientation: "landscape",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786189722/17_Agustus_2026_uqmrei.jpg",
  },
  {
    slug: "personal-project-muncak",
    title: "Personal Project Muncak",
    type: "Social Media",
    year: "2026",
    orientation: "portrait",
    image:
      "https://i.pinimg.com/736x/23/5b/05/235b0568712ec72956a32e7dbc886c1e.jpg",
  },
  {
    slug: "poster-gunung-buthak",
    title: "Post Feed Gunung Buthak",
    type: "Social Media",
    year: "2026",
    orientation: "portrait",
    image:
      "https://i.pinimg.com/736x/fe/9b/5e/fe9b5e5ca8b6eacac9fc83c25e843b81.jpg",
  },
  {
    slug: "banner-tahunbaru-islam",
    title: "Banner Tahun Baru Islam",
    type: "Banner",
    year: "2026",
    orientation: "landscape",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786191330/S_2X1_zddicx.jpg",
  },
  {
    slug: "banner-idul-adha-1447",
    title: "Banner Idul Adha 1447H",
    type: "Banner",
    year: "2026",
    orientation: "landscape",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786191513/S_2X1_25_jutkbl.jpg",
  },
  {
    slug: "flyer-donasi-ramadhan",
    title: "Flyer Donasi Ramadhan",
    type: "Flyer",
    year: "2026",
    orientation: "portrait",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786191779/Menyambut_Ramadhan_fnh1og.jpg",
  },
  {
    slug: "flyer-khotmil-quran",
    title: "Flyer Khotmil Qur'an",
    type: "Flyer",
    year: "2025",
    orientation: "portrait",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786192062/Khotmil_26_Des_xdgn7m.jpg",
  },
  {
    slug: "flyer-khotmil-quran-2",
    title: "Flyer Khotmil Qur'an 2",
    type: "Flyer",
    year: "2025",
    orientation: "portrait",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786192065/24_Januari_xcpwo0.jpg",
  },
  {
    slug: "eduverify",
    title: "EduVerify",
    type: "Instagram Post",
    year: "2026",
    orientation: "portrait",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786254662/Instagram_post_-_1_xstv8z.jpg",
  },
  {
    slug: "eduverify-2",
    title: "EduVerify 2",
    type: "Instagram Post",
    year: "2026",
    orientation: "portrait",
    image:
      "https://res.cloudinary.com/gb0nhfey/image/upload/v1786254753/Instagram_post_-_3_fmevrt.jpg",
  },
]

export const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Project" },
  { href: "#gallery", label: "Galeri" },
  { href: "#contact", label: "Kontak" },
]
