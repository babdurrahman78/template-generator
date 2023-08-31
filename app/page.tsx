import { scheduler } from "./lib/scheduler";

export default function Home() {
  const res = scheduler();

  const { malam, pagi } = res;

  const stringJadwal = `
  [ Tadzkir ] 
  PESAN 9
  ${malam.PESAN_9.JALSAH.nama}
  Pemateri: ${malam.PESAN_9.JALSAH.pengajar}
  Tempat: ${malam.PESAN_9.TEMPAT}

  ${malam.PESAN_9.JALSAH.nama}
  Pemateri: ${malam.PESAN_9.JALSAH.pengajar}
  Tempat: ${malam.PESAN_9.TEMPAT}





  PESAN 10
  ${malam.PESAN_10.JALSAH.nama}
  Pemateri: ${malam.PESAN_10.JALSAH.pengajar}
  Tempat: ${malam.PESAN_10.TEMPAT}
  `;

  return (
    <div className="flex justify-center">
      <textarea
        disabled
        className="text-black w-[500px]"
        value={stringJadwal}
      />
    </div>
  );
}
