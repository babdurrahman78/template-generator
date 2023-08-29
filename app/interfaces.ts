import { PENGAJAR, TEMPAT } from "./constant";

type TEMPAT_KEY = (typeof TEMPAT)[keyof typeof TEMPAT];
type PENGAJAR_KEY = (typeof PENGAJAR)[keyof typeof PENGAJAR];

export interface IJalsah {
  nama: string;
  tempat: TEMPAT_KEY;
  pengajar: PENGAJAR_KEY;
}
