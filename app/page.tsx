"use client";

import { useEffect, useState } from "react";
import Form from "./components/form";
import { scheduler } from "./lib/scheduler";
import stringJalsah from "./lib/stringJalsah";
import { IJadwal, IMappedJadwal } from "./interfaces";

export default function Home() {
  const [stringJadwal, setStringJadwal] = useState("");
  const [jadwal, setJadwal] = useState<IMappedJadwal[]>([]);

  useEffect(() => {
    const res = scheduler();

    let tempStringJadwal = "Jangan belajar terus!";
    if (res) {
      const { malam, pagi } = res;

      tempStringJadwal = `*[ TADZKIR JALSAH ]*\n\nبسم الله الرحمن الرحيم\n\nInsyaAllah akan diadakan kegiatan Jalsah dengan detail sebagai berikut:\n\n*PESAN 9*\n${
        malam.PESAN_9
          ? `${stringJalsah(malam.PESAN_9!)}\n${stringJalsah(pagi.PESAN_9!)}`
          : stringJalsah(pagi.PESAN_9!)
      }\n*PESAN 10*\n${
        malam.PESAN_10
          ? `${stringJalsah(malam.PESAN_10!)}\n${stringJalsah(pagi.PESAN_10!)}`
          : stringJalsah(pagi.PESAN_10!)
      }\n\nDiharapkan seluruh mahasantri dapat hadir tepat waktu agar tidak terlambat dan senantiasa menjaga adab thalibul ilmi.`;

      setStringJadwal(tempStringJadwal);
    }
  }, []);

  return (
    <div className="flex flex-col items-center sm:px-10 px-3 py-5">
      <div className="min-w-[300px] w-full">
        {/* <Form data={res?.malam.PESAN_9!} /> */}

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
        />
      </div>
    </div>
  );
}
