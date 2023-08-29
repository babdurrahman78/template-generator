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
};

export const TEMPAT = {
  AL_IKHLAS: "Masjid Al - Ikhlas",
  MAKTABAH_ATAS: "Maktabah Atas PESAN BISA",
  MAKTABAH_BAWAH: "Maktabah Bawah PESAN BISA",
  ASRAMA_AKHWAT: "Asrama Akhwat",
  TMPT_COMB: "Masjid Al - Ikhlas(Ikhwan) dan Asrama Akhwat(Akhwat)",
} as const;

const { ABID, AZMI, NUR_FAJRI, BUKHORI, FADHILAH, ZHAFIRAH } = PENGAJAR;
const { AL_IKHLAS, ASRAMA_AKHWAT, MAKTABAH_ATAS, MAKTABAH_BAWAH, TMPT_COMB } =
  TEMPAT;

export const JALSAH: {
  [key: string]: IJalsah;
} = {
  TADZKIRATUS_SAMI: {
    nama: "Tadzkiratus Sami wal Mutakallim Fi Adabil Alim wal Muta'allim",
    tempat: AL_IKHLAS,
    pengajar: AZMI,
  },
  TIBYAN_FII_ADAB_HAMALATIL_QURAN: {
    nama: "At-Tibyan Fi Adab Hamalatil Qur'an",
    tempat: ASRAMA_AKHWAT,
    pengajar: ABID,
  },
  TAHFIZH: {
    nama: "Halaqah Tahfiz Al-Qur'an",
    tempat: TMPT_COMB,
    pengajar: ``,
  },
};
