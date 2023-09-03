"use client";

import { scheduler } from "./lib/scheduler";
import stringJalsah from "./lib/stringJalsah";

export default function Home() {
  const res = scheduler();

  let stringJadwal = "Jangan belajar terus!";
  if (res) {
    const { malam, pagi } = res;

    stringJadwal = `[ Tadzkir ]\nPESAN 9\n${
      malam.PESAN_9
        ? `${stringJalsah(malam.PESAN_9!)}\n${stringJalsah(pagi.PESAN_9!)}`
        : stringJalsah(pagi.PESAN_9!)
    }\nPESAN 10\n${
      malam.PESAN_10
        ? `${stringJalsah(malam.PESAN_10!)}\n${stringJalsah(pagi.PESAN_10!)}`
        : stringJalsah(pagi.PESAN_10!)
    }`;
  }

  return (
    <div className="flex flex-col items-center">
      <textarea
        disabled
        className="text-black w-[500px] h-auto block m-auto"
        value={stringJadwal}
      />
    </div>
  );
}
