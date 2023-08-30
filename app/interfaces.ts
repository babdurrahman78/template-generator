import { PENGAJAR, TEMPAT } from "./constant";

type PENGAJAR_KEY = (typeof PENGAJAR)[keyof typeof PENGAJAR];

export interface IJalsah {
  nama: string;
  pengajar?: PENGAJAR_KEY;
}
