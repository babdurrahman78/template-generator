import { createContext } from "react";
import { IScheduler } from "./interfaces";

export const JadwalContext = createContext<{
  data: IScheduler;
  setData: React.Dispatch<React.SetStateAction<IScheduler>>;
}>({
  data: {
    malam: {
      PESAN_9: null,
      PESAN_10: null,
    },
    pagi: {
      PESAN_9: null,
      PESAN_10: null,
    },
  },
  setData: () => null,
});
