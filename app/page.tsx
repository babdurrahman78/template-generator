import { scheduler } from "./lib/scheduler";

export default function Home() {
  const res = scheduler();

  let stringJadwal = "Jangan belajar terus!";
  if (res) {
    const { malam, pagi } = res;

    stringJadwal = `
  [ Tadzkir ] 
  PESAN 9
  ${malam.PESAN_9.JALSAH.nama}
  Pemateri: ${malam.PESAN_9.JALSAH.pengajar}
  Tanggal: 
  waktu: 20.00 - 21.00 WIB
  Tempat: ${malam.PESAN_9.TEMPAT}

  ${pagi.PESAN_9.JALSAH.nama}
  Pemateri: ${pagi.PESAN_9.JALSAH.pengajar}
  waktu: 05.30 - 06.30 WIB
  Tempat: ${pagi.PESAN_9.TEMPAT}

  PESAN 10
  ${
    malam.PESAN_10 &&
    `${malam.PESAN_10.JALSAH.nama}
  Pemateri: ${malam.PESAN_10.JALSAH.pengajar}
  waktu: 20.00 - 21.00 WIB
  Tempat: ${malam.PESAN_10.TEMPAT}
  
  `
  }
  `;
  }

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
