import { IJalsah } from "../interfaces";

export const PENGAJAR = {
  ABID: "Ust. Abid Fathurrahman Arif, S.Hum.",
  NUR_FAJRI: "Ust. Nur Fajri Romadhon, B.Sh., M.A.",
  AZMI: "Ust. Lalu Naufal Azmi",
  BUKHORI: "Ust. Bukhori Linkun, B.Sh.",
  FADHILAH: "Ustzh. Fadhilatul Mu'minah",
  ZHAFIRAH: "Ustzh. Zhafiratul Magfirah",
  THFZH_9:
    "Ust. Abid Fathurrahman Arif S.Hum., dan Ust. Lalu Naufal Azmi (Ikhwan), Ustzh. Zhafiratul Magfirah (Akhwat)",
  THFZH_10:
    "Ust. Abid Fathurrahman Arif S.Hum., dan Ust. Lalu Naufal Azmi (Ikhwan), Ustzh. Fadhilatul Mu'minah (Akhwat)",
  ABID_FADHILATUL:
    "Ust. Abid Fathurrahman Arif, S.Hum. dan Ustzh. Fadhilatul Mu'minah",
  AZMI_ZHAFIRAH: "Ust. Lalu Naufal Azmi dan Ustzh. Zhafiratul Magfirah",
  ABID_ZHAFIRAH:
    "Ust. Abid Fathurrahman Arif, S.Hum. dan Ustzh. Zhafiratul Magfirah",
};

export const TEMPAT = {
  AL_IKHLAS: "Masjid Al - Ikhlas",
  MAKTABAH_ATAS: "Maktabah Atas PESAN BISA",
  MAKTABAH_BAWAH: "Maktabah Bawah PESAN BISA",
  ASRAMA_AKHWAT: "Asrama Akhwat",
  TMPT_COMB: "Masjid Al - Ikhlas(Ikhwan) dan Asrama Akhwat(Akhwat)",
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
const { AL_IKHLAS, ASRAMA_AKHWAT, MAKTABAH_ATAS, MAKTABAH_BAWAH, TMPT_COMB } =
  TEMPAT;

export const JALSAH: {
  [key: string]: IJalsah;
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
    nama: "Halaqah Tahfiz Al-Qur'an",
    pengajar: THFZH_9,
  },
  TAHFIZH_10: {
    nama: "Halaqah Tahfiz Al-Qur'an",
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
  TASMI: {
    nama: "Tasmi'",
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
  TASMI,
} = JALSAH;

const JADWAL = {
  AHAD_MLM: {
    PESAN_9: {
      JALSAH: TASMI,
      TEMPAT: null,
    },
    PESAN_10: null,
  },
  SENIN_PG: {
    PESAN_9: {
      JALSAH: TAHFIZH_9,
      TEMPAT: AL_IKHLAS,
    },
    PESAN_10: {
      JALSAH: TAHFIZH_10,
    },
  },
};
