import { PENGAJAR, WAKTU } from "./constant";

type PENGAJAR_KEY = (typeof PENGAJAR)[keyof typeof PENGAJAR];

export interface IJalsah {
  nama: string;
  pengajar: PENGAJAR_KEY | null;
}

export type IWaktu = (typeof WAKTU)[keyof typeof WAKTU];

export interface IJadwal {
  JALSAH: IJalsah;
  TEMPAT?: string;
  WAKTU: IWaktu;
  TANGGAL: Date;
}

export interface IMappedJadwal extends IJadwal {
  ANGKATAN: IAngkatan;
}

export type IAngkatan = "PESAN_9" | "PESAN_10";

export type IJadwalHarian = {
  [key in IAngkatan]: IJadwal | null;
};

export type TYPE_JALSAH =
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

export interface IScheduler {
  malam: IJadwalHarian;
  pagi: IJadwalHarian;
}

export interface IThullab {
  nama: string;
  angkatan: "PESAN 9" | "PESAN 10";
  jurusan: string;
  kampus: string;
  tahun: number;
  jenisKelamin: "laki" | "perempuan";
}
