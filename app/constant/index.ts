import { IJadwal, IJalsah, IThullab, TYPE_JALSAH } from "../interfaces";

export const PENGAJAR = {
  ABID: "Ustadz Abid Fathurrahman Arif, S.Hum.",
  NUR_FAJRI: "Ustadz Nur Fajri Romadhon, B.Sh., M.A.",
  AZMI: "Ustadz Lalu Naufal Azmi",
  BUKHORI: "Ustadz Bukhori Linkun, B.Sh.",
  FADHILAH: "Ustadzah Fadhilatul Mu'minah",
  ZHAFIRAH: "Ustadzah Zhafiratul Magfirah",
  THFZH_9:
    "Ustadz Abid Fathurrahman Arif S.Hum., dan Ustadz Lalu Naufal Azmi (Ikhwan), Ustadzah Zhafiratul Magfirah (Akhwat)",
  THFZH_10:
    "Ustadz Abid Fathurrahman Arif S.Hum., dan Ustadz Lalu Naufal Azmi (Ikhwan), Ustadzah Fadhilatul Mu'minah (Akhwat)",
  ABID_FADHILATUL:
    "Ustadz Abid Fathurrahman Arif, S.Hum. dan Ustadzah Fadhilatul Mu'minah",
  AZMI_ZHAFIRAH: "Ustadz Lalu Naufal Azmi dan Ustadzah Zhafiratul Magfirah",
  ABID_ZHAFIRAH:
    "Ustadz Abid Fathurrahman Arif, S.Hum. dan Ustadzah Zhafiratul Magfirah",
};

export const TEMPAT = {
  AL_IKHLAS: "Masjid Al - Ikhlas",
  MAKTABAH_ATAS: "Maktabah Atas PESAN BISA",
  MAKTABAH_BAWAH: "Maktabah Bawah PESAN BISA",
  TMPT_COMB: "Masjid Al - Ikhlas(Ikhwan) dan Asrama Akhwat(Akhwat)",
  TMPT_COMB1: "Maktabah Atas PESAN BISA(Ikhwan) dan Asrama Akhwat(Akhwat)",
  TMPT_COMB2: "Maktabah Bawah PESAN BISA(Ikhwan) dan Asrama Akhwat(Akhwat)",
  ASRAMA_AKHWAT: "Asrama Akhwat",
  ONLINE: "Online",
} as const;

const {
  ABID,
  AZMI,
  NUR_FAJRI,
  BUKHORI,
  THFZH_9,
  THFZH_10,
  ABID_FADHILATUL,
  AZMI_ZHAFIRAH,
  ABID_ZHAFIRAH,
} = PENGAJAR;
const {
  AL_IKHLAS,
  MAKTABAH_ATAS,
  MAKTABAH_BAWAH,
  TMPT_COMB,
  TMPT_COMB1,
  TMPT_COMB2,
  ASRAMA_AKHWAT,
} = TEMPAT;

export const NAMA_JALSAH: {
  [key in TYPE_JALSAH]: IJalsah;
} = {
  TADZKIRATUS_SAMI: {
    nama: "Tadzkiratus Sami wal Mutakallim Fi Adabil Alim wal Muta'allim",
    pengajar: AZMI,
  },
  TIBYAN_FII_ADAB_HAMALATIL_QURAN: {
    nama: "At-Tibyan Fi Adab Hamalatil Qur'an",
    pengajar: ABID,
  },
  TAHFIZH_9: {
    nama: "Halaqah Tahfiz Al-Qur'an PESAN 9",
    pengajar: THFZH_9,
  },
  TAHFIZH_10: {
    nama: "Halaqah Tahfiz Al-Qur'an PESAN 10",
    pengajar: THFZH_10,
  },
  ARBAIN_NAWAWIYAH: {
    nama: "Arbain an-Nawawiyah",
    pengajar: BUKHORI,
  },
  AJURUMIYYAH: {
    nama: "Matan Al-Ajurrumiyah",
    pengajar: ABID_FADHILATUL,
  },
  QALAIDUL_IQYAN: {
    nama: "Qala'idul Iqyan Fi Ikhtisar Aqidati Ibn Hamdan",
    pengajar: NUR_FAJRI,
  },
  GHAYAH_WA_TAQRIB: {
    nama: "Matan Al-Ghayah wat Taqrib",
    pengajar: NUR_FAJRI,
  },
  MINHAJUL_QASHIDIN: {
    nama: "Mukhtashar Minhajul Qashidin",
    pengajar: BUKHORI,
  },
  TAJWID_BISA: {
    nama: "Tajwid BISA",
    pengajar: ABID_FADHILATUL,
  },
  SHARAF_BISA: {
    nama: "Sharaf BISA",
    pengajar: AZMI_ZHAFIRAH,
  },
  HIWAR: {
    nama: "Hiwar Al-Mumtaz",
    pengajar: ABID_ZHAFIRAH,
  },
  TASMI_IKH: {
    nama: "Tasmi' (Ikhwan)",
    pengajar: null,
  },
  TASMI_AKH: {
    nama: "Tasmi' (Akhwat)",
    pengajar: null,
  },
} as const;

const {
  TADZKIRATUS_SAMI,
  TIBYAN_FII_ADAB_HAMALATIL_QURAN,
  TAHFIZH_9,
  TAHFIZH_10,
  ARBAIN_NAWAWIYAH,
  AJURUMIYYAH,
  QALAIDUL_IQYAN,
  GHAYAH_WA_TAQRIB,
  MINHAJUL_QASHIDIN,
  TAJWID_BISA,
  SHARAF_BISA,
  HIWAR,
  TASMI_IKH,
  TASMI_AKH,
} = NAMA_JALSAH;

export const WAKTU = {
  MLM: {
    mulai: "20:00",
    akhir: "21:00",
    isMalam: true,
  },
  PG: {
    mulai: "05:30",
    akhir: "06:30",
    isMalam: false,
  },
};

type IAngkatan = "PESAN_9" | "PESAN_10";

export const JADWAL: {
  [key: string]: {
    [key in IAngkatan]: IJadwal | null;
  };
} = {
  AHAD_MLM: {
    PESAN_9: {
      JALSAH: { ...TASMI_IKH },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
    PESAN_10: null,
  },
  SENIN_PG: {
    PESAN_9: {
      JALSAH: { ...TAHFIZH_9 },
      TEMPAT: AL_IKHLAS,
      WAKTU: WAKTU.PG,
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    PESAN_10: {
      JALSAH: TAHFIZH_10,
      TEMPAT: AL_IKHLAS,
      WAKTU: WAKTU.PG,
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  },
  SENIN_MLM: {
    PESAN_9: {
      JALSAH: { ...TADZKIRATUS_SAMI },
      TEMPAT: AL_IKHLAS,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
    PESAN_10: {
      JALSAH: { ...MINHAJUL_QASHIDIN },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
  },
  SELASA_PG: {
    PESAN_9: {
      JALSAH: { ...TIBYAN_FII_ADAB_HAMALATIL_QURAN },
      TEMPAT: AL_IKHLAS,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    PESAN_10: {
      JALSAH: QALAIDUL_IQYAN,
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  },
  SELASA_MLM: {
    PESAN_9: {
      JALSAH: { ...TADZKIRATUS_SAMI },
      TEMPAT: AL_IKHLAS,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
    PESAN_10: {
      JALSAH: { ...MINHAJUL_QASHIDIN },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
  },
  RABU_PG: {
    PESAN_9: {
      JALSAH: { ...TAHFIZH_9 },
      TEMPAT: TMPT_COMB,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    PESAN_10: {
      JALSAH: { ...TAHFIZH_10 },
      TEMPAT: TMPT_COMB,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  },
  RABU_MLM: {
    PESAN_9: {
      JALSAH: { ...ARBAIN_NAWAWIYAH },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
    PESAN_10: {
      JALSAH: { ...TAJWID_BISA },
      TEMPAT: TMPT_COMB1,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
  },
  KAMIS_PG: {
    PESAN_9: {
      JALSAH: { ...AJURUMIYYAH },
      TEMPAT: TMPT_COMB2,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    PESAN_10: {
      JALSAH: { ...SHARAF_BISA },
      TEMPAT: TMPT_COMB1,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  },
  KAMIS_MLM: {
    PESAN_9: {
      JALSAH: { ...TIBYAN_FII_ADAB_HAMALATIL_QURAN },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
    PESAN_10: {
      JALSAH: { ...SHARAF_BISA },
      TEMPAT: TMPT_COMB1,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
  },
  JUMAT_PG: {
    PESAN_9: {
      JALSAH: { ...QALAIDUL_IQYAN },
      TEMPAT: AL_IKHLAS,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    PESAN_10: {
      JALSAH: { ...TAHFIZH_10 },
      TEMPAT: TMPT_COMB2,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  },
  JUMAT_MLM: {
    PESAN_9: {
      JALSAH: { ...GHAYAH_WA_TAQRIB },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
    PESAN_10: {
      JALSAH: { ...HIWAR },
      TEMPAT: MAKTABAH_ATAS,
      WAKTU: { ...WAKTU.MLM },
      TANGGAL: new Date(),
    },
  },
  SABTU_PG: {
    PESAN_9: {
      JALSAH: { ...TASMI_AKH },
      TEMPAT: ASRAMA_AKHWAT,
      WAKTU: { ...WAKTU.PG },
      TANGGAL: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    PESAN_10: null,
  },
};

export const THULLAB: IThullab[] = [
  {
    nama: "Aisyah Muthia Darajat",
    angkatan: "PESAN 9",
    jurusan: "Kesehatan Lingkungan",
    kampus: "UI",
    tahun: 2022,
    jenisKelamin: "perempuan",
  },
  {
    nama: "Asma Shafiyyah Andardini",
    angkatan: "PESAN 9",
    jurusan: "Geografi",
    kampus: "UI",
    tahun: 2021,
    jenisKelamin: "perempuan",
  },
  {
    nama: "Deviana Putri Aprilia",
    angkatan: "PESAN 9",
    jurusan: "Teknik Elektro",
    kampus: "PNJ",
    tahun: 2021,
    jenisKelamin: "perempuan",
  },
  {
    nama: "Mila Rismaya Sriyatni",
    angkatan: "PESAN 9",
    jurusan: "Penerbitan",
    kampus: "PNJ",
    tahun: 2022,
    jenisKelamin: "perempuan",
  },
  {
    nama: "Nur Fadhilah Wahyu",
    angkatan: "PESAN 9",
    jurusan: "Sastra Arab",
    kampus: "UI",
    tahun: 2020,
    jenisKelamin: "perempuan",
  },
  {
    nama: "Salsabilla Raihana",
    angkatan: "PESAN 9",
    jurusan: "Sastra Arab",
    kampus: "UI",
    tahun: 2022,
    jenisKelamin: "perempuan",
  },
  {
    nama: "Adelya Nadine Az-Zahra",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Teknik Metalurgi dan Material",
    kampus: "UI",
    tahun: 2023,
  },
  {
    nama: "Adisa Az-Zahra",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Desain Grafis",
    kampus: "PNJ",
    tahun: 2023,
  },
  {
    nama: "Hasya Maulida",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Teknologi Informasi",
    kampus: "UI",
    tahun: 2023,
  },
  {
    nama: "Nafisa Arrasyida",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Sistem Informasi",
    kampus: "UI",
    tahun: 2023,
  },
  {
    nama: "Nisrina Amalia Hasanah",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Sastra Arab",
    kampus: "UI",
    tahun: 2023,
  },
  {
    nama: "Syakira Yumna Putri Josa",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Sastra Inggris",
    kampus: "UI",
    tahun: 2023,
  },
  {
    nama: "Syauqi Azizah Ramadhany",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Sastra Arab",
    kampus: "UI",
    tahun: 2023,
  },
  {
    nama: "Ziyarotul Yasmina",
    angkatan: "PESAN 10",
    jenisKelamin: "perempuan",
    jurusan: "Sastra Arab",
    kampus: "UI",
    tahun: 2021,
  },
  {
    nama: "Shafhan Farizi",
    angkatan: "PESAN 10",
    jenisKelamin: "laki",
    jurusan: "Teknik Informatika",
    kampus: "STT Terpadu Nurul Fikri",
    tahun: 2023,
  },
  {
    nama: "Hanan Adipratama",
    angkatan: "PESAN 10",
    jenisKelamin: "laki",
    jurusan: "Ilmu Komputer",
    kampus: "UI",
    tahun: 2022,
  },
  {
    nama: "Nabil Azam Arif Widodo",
    angkatan: "PESAN 10",
    jenisKelamin: "laki",
    jurusan: "Periklanan",
    kampus: "Polimedia",
    tahun: 2023,
  },
  {
    nama: "Faisal Rafa Al Faqih",
    angkatan: "PESAN 10",
    jenisKelamin: "laki",
    jurusan: "Teknik Elektro",
    kampus: "PNJ",
    tahun: 2022,
  },
  {
    nama: "Zulfikar Hilman Prayogo",
    angkatan: "PESAN 10",
    jenisKelamin: "laki",
    jurusan: "Teknik Informatika",
    kampus: "STT Terpadu Nurul Fikri",
    tahun: 2021,
  },
  {
    nama: "Sulthan Raju Salim",
    angkatan: "PESAN 10",
    jenisKelamin: "laki",
    jurusan: "Kimia",
    kampus: "UI",
    tahun: 2023,
  },
  {
    nama: "In In Mustopa",
    angkatan: "PESAN 9",
    jenisKelamin: "laki",
    jurusan: "Teknik Mesin",
    kampus: "PNJ",
    tahun: 2021,
  },
  {
    nama: "Muhammad Yusuf Alfatsani",
    angkatan: "PESAN 9",
    jenisKelamin: "laki",
    jurusan: "Sastra Arab",
    kampus: "UI",
    tahun: 2022,
  },
  {
    nama: "Ibrahim Al Fatih",
    angkatan: "PESAN 9",
    jenisKelamin: "laki",
    jurusan: "Matematika",
    kampus: "UI",
    tahun: 2022,
  },
  {
    nama: "Muhammad Zaid Al Islamy",
    angkatan: "PESAN 9",
    jenisKelamin: "laki",
    jurusan: "Teknik Sipil",
    kampus: "PNJ",
    tahun: 2021,
  },
];

export const NAMA_THULLAB_CONST = Array.from(
  new Set(THULLAB.map((item) => item.nama))
);

export const JUZ = Array.from({ length: 30 }, (_, index) => (index + 1).toString());
