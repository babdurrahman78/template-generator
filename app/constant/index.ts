import { IJadwal, IJalsah, TYPE_JALSAH } from "../interfaces";

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
  MLM: "20.00 - 21.00 WIB",
  PG: "05.30 - 06.30 WIB",
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
      WAKTU: WAKTU.MLM,
    },
    PESAN_10: null,
  },
  SENIN_PG: {
    PESAN_9: {
      JALSAH: { ...TAHFIZH_9 },
      TEMPAT: AL_IKHLAS,
      WAKTU: WAKTU.PG,
    },
    PESAN_10: {
      JALSAH: TAHFIZH_10,
      TEMPAT: AL_IKHLAS,
      WAKTU: WAKTU.PG,
    },
  },
  SENIN_MLM: {
    PESAN_9: {
      JALSAH: { ...TADZKIRATUS_SAMI },
      TEMPAT: AL_IKHLAS,
      WAKTU: WAKTU.MLM,
    },
    PESAN_10: {
      JALSAH: { ...MINHAJUL_QASHIDIN },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: WAKTU.MLM,
    },
  },
  SELASA_PG: {
    PESAN_9: {
      JALSAH: { ...TIBYAN_FII_ADAB_HAMALATIL_QURAN },
      TEMPAT: AL_IKHLAS,
      WAKTU: WAKTU.PG,
    },
    PESAN_10: {
      JALSAH: QALAIDUL_IQYAN,
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: WAKTU.PG,
    },
  },
  SELASA_MLM: {
    PESAN_9: {
      JALSAH: { ...TADZKIRATUS_SAMI },
      TEMPAT: AL_IKHLAS,
      WAKTU: WAKTU.MLM,
    },
    PESAN_10: {
      JALSAH: { ...MINHAJUL_QASHIDIN },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: WAKTU.MLM,
    },
  },
  RABU_PG: {
    PESAN_9: {
      JALSAH: { ...TAHFIZH_9 },
      TEMPAT: TMPT_COMB,
      WAKTU: WAKTU.PG,
    },
    PESAN_10: {
      JALSAH: { ...TAHFIZH_10 },
      TEMPAT: TMPT_COMB,
      WAKTU: WAKTU.PG,
    },
  },
  RABU_MLM: {
    PESAN_9: {
      JALSAH: { ...ARBAIN_NAWAWIYAH },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: WAKTU.MLM,
    },
    PESAN_10: {
      JALSAH: { ...TAJWID_BISA },
      TEMPAT: TMPT_COMB1,
      WAKTU: WAKTU.MLM,
    },
  },
  KAMIS_PG: {
    PESAN_9: {
      JALSAH: { ...AJURUMIYYAH },
      TEMPAT: TMPT_COMB2,
      WAKTU: WAKTU.PG,
    },
    PESAN_10: {
      JALSAH: { ...SHARAF_BISA },
      TEMPAT: TMPT_COMB1,
      WAKTU: WAKTU.PG,
    },
  },
  KAMIS_MLM: {
    PESAN_9: {
      JALSAH: { ...TIBYAN_FII_ADAB_HAMALATIL_QURAN },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: WAKTU.MLM,
    },
    PESAN_10: {
      JALSAH: { ...SHARAF_BISA },
      TEMPAT: TMPT_COMB1,
      WAKTU: WAKTU.MLM,
    },
  },
  JUMAT_PG: {
    PESAN_9: {
      JALSAH: { ...QALAIDUL_IQYAN },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: WAKTU.PG,
    },
    PESAN_10: {
      JALSAH: { ...TAHFIZH_10 },
      TEMPAT: TMPT_COMB,
      WAKTU: WAKTU.PG,
    },
  },
  JUMAT_MLM: {
    PESAN_9: {
      JALSAH: { ...GHAYAH_WA_TAQRIB },
      TEMPAT: MAKTABAH_BAWAH,
      WAKTU: WAKTU.MLM,
    },
    PESAN_10: {
      JALSAH: { ...HIWAR },
      TEMPAT: MAKTABAH_ATAS,
      WAKTU: WAKTU.MLM,
    },
  },
  SABTU_PG: {
    PESAN_9: {
      JALSAH: { ...TASMI_AKH },
      TEMPAT: ASRAMA_AKHWAT,
      WAKTU: WAKTU.PG,
    },
    PESAN_10: null,
  },
};
