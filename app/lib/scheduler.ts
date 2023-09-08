import { JADWAL } from "../constant";
import { days } from "../constant/days";
import { IScheduler } from "../interfaces";

export const scheduler = (): IScheduler | null => {
  const date = new Date();
  const day = date.getDay();

  switch (days[day]) {
    case "SENIN":
      return {
        malam: JADWAL.SENIN_MLM,
        pagi: JADWAL.SELASA_PG,
      };
    case "SELASA":
      return {
        malam: JADWAL.SELASA_MLM,
        pagi: JADWAL.RABU_PG,
      };
    case "RABU":
      return {
        malam: JADWAL.RABU_MLM,
        pagi: JADWAL.KAMIS_PG,
      };
    case "KAMIS":
      return {
        malam: JADWAL.KAMIS_MLM,
        pagi: JADWAL.JUMAT_PG,
      };
    case "JUM'AT":
      return {
        malam: JADWAL.JUMAT_MLM,
        pagi: JADWAL.SABTU_PG,
      };
    case "MINGGU":
      return {
        malam: JADWAL.AHAD_MLM,
        pagi: JADWAL.SENIN_PG,
      };
    default:
      return null;
  }
};
