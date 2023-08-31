import { JADWAL } from "../constant";
import { days } from "../constant/days";

export const scheduler = () => {
  const date = new Date();
  const day = date.getDay();

  if (days[day] === "SENIN") {
    return {
      malam: JADWAL.SENIN_MLM,
      pagi: JADWAL.SELASA_PG,
    };
  } else if (days[day] === "SELASA") {
    return {
      malam: JADWAL.SELASA_MLM,
      pagi: JADWAL.RABU_PG,
    };
  }

  return {
    malam: JADWAL.SENIN_MLM,
    pagi: JADWAL.SELASA_PG,
  };
};
