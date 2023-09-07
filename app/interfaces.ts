import { PENGAJAR, WAKTU } from "./constant";

type PENGAJAR_KEY = (typeof PENGAJAR)[keyof typeof PENGAJAR];

export interface IJalsah {
  nama: string;
  pengajar?: PENGAJAR_KEY;
}

export interface IJadwal {
  JALSAH: IJalsah;
  TEMPAT?: string;
  WAKTU: (typeof WAKTU)[keyof typeof WAKTU];
}

export interface IMappedJadwal extends IJadwal {
  ANGKATAN: IAngkatan;
}

export type IAngkatan = "PESAN_9" | "PESAN_10";

export type IJadwalHarian = {
  [key in IAngkatan]: IJadwal | null;
};

export type NAMA_JALSAH =
  | "TADZKIRATUS_SAMI"
  | "TIBYAN_FII_ADAB_HAMALATIL_QURAN"
  | "TAHFIZH_9"
  | "TAHFIZH_10"
  | "ARBAIN_NAWAWIYAH"
  | "AJURUMIYYAH"
  | "QALAIDUL_IQYAN"
  | "GHAYAH_WA_TAQRIB"
  | "MINHAJUL_QASHIDIN"
  | "TAJWID_BISA"
  | "SHARAF_BISA"
  | "HIWAR"
  | "TASMI_IKH"
  | "TASMI_AKH";
