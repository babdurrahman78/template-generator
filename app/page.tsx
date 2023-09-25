"use client";

import { useEffect, useState } from "react";
import { scheduler } from "./lib/scheduler";
import stringJalsah from "./lib/stringJalsah";
import { IScheduler } from "./interfaces";
import FormWrapper from "./components/FormWrapper";
import { JadwalContext } from "./context";
import { NAMA_JALSAH } from "./constant";

export default function Home() {
  const [stringJadwal, setStringJadwal] = useState("");
  const [data, setData] = useState<IScheduler>({
    malam: {
      PESAN_9: null,
      PESAN_10: null,
    },
    pagi: {
      PESAN_9: null,
      PESAN_10: null,
    },
  });

  const formString = (res: IScheduler) => {
    const { malam, pagi } = res;
    const tempStringJadwal = `*[ TADZKIR JALSAH ]*\n\nبسم الله الرحمن الرحيم\n\nInsyaAllah akan diadakan kegiatan Jalsah dengan detail sebagai berikut:\n\n*PESAN 9*\n${
      malam.PESAN_9
        ? `${stringJalsah(
            "MALAM",
            malam.PESAN_9.JALSAH.nama === NAMA_JALSAH.TASMI_IKH.nama ||
              malam.PESAN_9.JALSAH.nama === NAMA_JALSAH.TASMI_AKH.nama,
            malam.PESAN_9!
          )}${
            pagi.PESAN_9
              ? `\n${stringJalsah(
                  "PAGI",
                  pagi.PESAN_9.JALSAH.nama === NAMA_JALSAH.TASMI_IKH.nama ||
                    pagi.PESAN_9.JALSAH.nama === NAMA_JALSAH.TASMI_AKH.nama,
                  pagi.PESAN_9
                )}\n`
              : "\n"
          }`
        : `${stringJalsah(
            "PAGI",
            pagi.PESAN_9?.JALSAH.nama === NAMA_JALSAH.TASMI_IKH.nama ||
              pagi.PESAN_9?.JALSAH.nama === NAMA_JALSAH.TASMI_AKH.nama,
            pagi.PESAN_9!
          )}\n`
    }*PESAN 10*\n${
      malam.PESAN_10
        ? `${stringJalsah(
            "MALAM",
            malam.PESAN_10.JALSAH.nama === NAMA_JALSAH.TASMI_IKH.nama ||
              malam.PESAN_10.JALSAH.nama === NAMA_JALSAH.TASMI_AKH.nama,
            malam.PESAN_10!
          )}${
            pagi.PESAN_10
              ? `\n${stringJalsah(
                  "PAGI",
                  pagi.PESAN_10?.JALSAH.nama === NAMA_JALSAH.TASMI_IKH.nama ||
                    pagi.PESAN_10?.JALSAH.nama === NAMA_JALSAH.TASMI_AKH.nama,
                  pagi.PESAN_10
                )}\n`
              : "\n"
          }`
        : `${stringJalsah(
            "PAGI",
            pagi.PESAN_10?.JALSAH.nama === NAMA_JALSAH.TASMI_IKH.nama ||
              pagi.PESAN_10?.JALSAH.nama === NAMA_JALSAH.TASMI_AKH.nama,
            pagi.PESAN_10!
          )}\n`
    }\nDiharapkan seluruh mahasantri dapat hadir tepat waktu agar tidak terlambat dan senantiasa menjaga adab thalibul ilmi.`;
    setStringJadwal(tempStringJadwal);
  };

  useEffect(() => {
    const res = scheduler();

    if (res) {
      formString(res);
      setData(res);
    }
  }, []);

  useEffect(() => {
    formString(data);
  }, [data]);

  return (
    <JadwalContext.Provider value={{ data, setData }}>
      <div className="flex flex-col items-center sm:px-10 px-3 py-5">
        <div className="min-w-[300px] space-y-3 w-full">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Generated Jalsah
          </label>
          <textarea
            id="message"
            rows={20}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Generate Jalsah!"
            value={stringJadwal}
            disabled
          />

          {data && <FormWrapper />}
        </div>
      </div>
    </JadwalContext.Provider>
  );
}
